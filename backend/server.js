const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("./config/db");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://127.0.0.1:5173",
      "https://my-portfolio-five-iota-75.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.get("/api/health", (req, res) => {
  const states = ["disconnected", "connected", "connecting", "disconnecting"];
  const state = states[mongoose.connection.readyState] || "unknown";
  res.json({
    status: "ok",
    database: state,
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});