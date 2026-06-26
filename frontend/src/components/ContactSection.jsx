import { useState } from "react";
import axios from "axios";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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
        "http://localhost:5000/api/contact",
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
    <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-10">
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
            className="w-full p-4 rounded-lg bg-slate-800"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-800"
            required
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-slate-800"
            required
          />

          <button
            type="submit"
            className="bg-cyan-500 text-black px-6 py-3 rounded-lg"
          >
            Send Message
          </button>

        </form>

        <div className="flex justify-center gap-6 text-3xl mt-10">
          <FaGithub />
          <FaLinkedin />
          <FaEnvelope />
        </div>

      </div>
    </section>
  );
}

export default ContactSection;