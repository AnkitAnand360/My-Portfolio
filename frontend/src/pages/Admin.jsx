import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  // Fetch all messages
  const fetchMessages = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/contact"
    );

    setMessages(res.data);
  };

  // 👇 PUT THE DELETE FUNCTION HERE
  const deleteMessage = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/contact/${id}`
      );

      console.log(res.data);

      fetchMessages(); // Refresh the list after deleting
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="space-y-6">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className="bg-slate-900 p-6 rounded-xl"
          >
            <h2 className="text-xl font-bold">{msg.name}</h2>

            <p>{msg.email}</p>

            <p className="mt-3">{msg.message}</p>

            {/* 👇 DELETE BUTTON */}
            <button
              onClick={() => deleteMessage(msg._id)}
              className="mt-4 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;