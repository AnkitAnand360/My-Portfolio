const mongoose = require("mongoose");
const dns = require("dns");

// Set reliable public DNS for SRV lookup on networks that support it
try {
  dns.setServers(["8.8.8.8", "8.8.4.4", "1.1.1.1"]);
} catch (e) {
  // Ignore if custom DNS assignment fails
}

const PRIMARY_URI = process.env.MONGO_URI;
const DIRECT_FALLBACK_URI =
  process.env.MONGO_URI_DIRECT ||
  "mongodb://ankitanand3902_db_user:xuve3brIytbPwfUT@ac-bh55jje-shard-00-00.oxtzbw7.mongodb.net:27017,ac-bh55jje-shard-00-01.oxtzbw7.mongodb.net:27017,ac-bh55jje-shard-00-02.oxtzbw7.mongodb.net:27017/devsphere?ssl=true&replicaSet=atlas-5lp0mk-shard-0&authSource=admin&appName=DevSphere";

let isConnecting = false;
let retryTimer = null;

const mongooseOptions = {
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  maxPoolSize: 10,
  minPoolSize: 2,
};

const connectWithRetry = async (attemptDirect = false) => {
  if (mongoose.connection.readyState === 1 || isConnecting) {
    return;
  }

  isConnecting = true;
  const targetUri = attemptDirect ? DIRECT_FALLBACK_URI : PRIMARY_URI;
  const modeLabel = attemptDirect ? "Direct Replica Set" : "Primary SRV";

  try {
    console.log(`[MongoDB] Connecting using ${modeLabel}...`);
    await mongoose.connect(targetUri, mongooseOptions);
    console.log(`[MongoDB] Connected successfully via ${modeLabel}`);
    isConnecting = false;
  } catch (error) {
    isConnecting = false;
    console.error(`[MongoDB] Connection error (${modeLabel}):`, error.message);

    // If SRV DNS lookup fails, immediately switch to direct replica set fallback
    if (
      !attemptDirect &&
      (error.message.includes("querySrv") ||
        error.message.includes("ENOTFOUND") ||
        error.message.includes("ECONNREFUSED") ||
        error.message.includes("ETIMEDOUT"))
    ) {
      console.log("[MongoDB] SRV lookup issue detected. Switching immediately to Direct Fallback...");
      return connectWithRetry(true);
    }

    // Schedule persistent retry every 5 seconds until reconnected
    if (!retryTimer) {
      console.log("[MongoDB] Will retry connection in 5 seconds...");
      retryTimer = setTimeout(() => {
        retryTimer = null;
        connectWithRetry(false);
      }, 5000);
    }
  }
};

// Continuous connection monitoring and auto-recovery
mongoose.connection.on("connected", () => {
  console.log("[MongoDB] Connection established.");
  if (retryTimer) {
    clearTimeout(retryTimer);
    retryTimer = null;
  }
});

mongoose.connection.on("disconnected", () => {
  console.warn("[MongoDB] Connection lost. Attempting auto-reconnect in 5s...");
  if (!retryTimer) {
    retryTimer = setTimeout(() => {
      retryTimer = null;
      connectWithRetry(false);
    }, 5000);
  }
});

mongoose.connection.on("error", (err) => {
  console.error("[MongoDB] Connection error event:", err.message);
});

module.exports = () => connectWithRetry(false);
