import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  // Fetch all messages
  const fetchMessages = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/contact`
      );
      setMessages(res.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Delete function
  const deleteMessage = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/contact/${id}`
      );
      console.log(res.data);
      fetchMessages(); // Refresh the list after deleting
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-black dark:text-white p-10 pt-24 transition-colors duration-300">
      <h1 className="text-4xl font-bold mb-10 text-slate-800 dark:text-white">
        Admin Dashboard
      </h1>

      <div className="space-y-6">
        {messages.length === 0 ? (
          <p className="text-slate-500 dark:text-gray-400">No messages found.</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-white border border-slate-200 dark:border-none dark:bg-slate-900 p-6 rounded-xl transition-colors duration-300 shadow-md"
            >
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">{msg.name}</h2>
              <p className="text-cyan-600 dark:text-cyan-400 text-sm font-medium">{msg.email}</p>
              <p className="mt-3 text-slate-700 dark:text-gray-300">{msg.message}</p>

              <button
                onClick={() => deleteMessage(msg._id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition shadow-sm cursor-pointer"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Admin;