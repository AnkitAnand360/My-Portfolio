import { useState } from "react";
import axios from "axios";

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData
      );

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-[#07070a] text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10 text-slate-800 dark:text-white">
          Get In Touch
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border dark:border-white/5 dark:bg-[#11111a] dark:text-white dark:focus:ring-2 dark:focus:ring-cyan-400 transition"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border dark:border-white/5 dark:bg-[#11111a] dark:text-white dark:focus:ring-2 dark:focus:ring-cyan-400 transition"
            required
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:border dark:border-white/5 dark:bg-[#11111a] dark:text-white dark:focus:ring-2 dark:focus:ring-cyan-400 transition"
            required
          />

          <button
            type="submit"
            className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:scale-105 transition duration-200 cursor-pointer shadow-md"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default ContactSection;