import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function ContactSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
      setIsOpen(false);
    } catch (error) {
      alert("Something went wrong!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-black text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-neutral-900 selection:bg-lime-400 selection:text-black transition-colors duration-300">
      <div className="max-w-3xl mx-auto text-center">
        
        {/* Large trigger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group w-full text-center flex flex-col items-center justify-center py-6 focus:outline-none cursor-pointer"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
            Collab &amp; Contact
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-medium text-neutral-900 dark:text-white group-hover:text-lime-600 dark:group-hover:text-lime-400 transition duration-300 flex items-center justify-center gap-4 leading-tight">
            Start a Conversation
            <span className="text-lime-500 dark:text-lime-400 text-2xl sm:text-4xl transition-transform duration-300">
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-sm font-sans tracking-wide">
            {isOpen ? "Close the contact portal" : "Tap here to expand and send a message"}
          </p>
        </button>

        {/* Form panel that slides open */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden mt-12 text-left"
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-8 bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 rounded-3xl p-8 sm:p-12 shadow-2xl transition-colors duration-300"
              >
                <div className="space-y-2">
                  <label htmlFor="form-name" className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">Name</label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    placeholder="Ankit Anand"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white py-3 px-2 focus:border-lime-500 dark:focus:border-lime-400 focus:outline-none transition font-sans text-lg placeholder:text-neutral-300 dark:placeholder:text-neutral-700"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-email" className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">Email Address</label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    placeholder="example@domain.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white py-3 px-2 focus:border-lime-500 dark:focus:border-lime-400 focus:outline-none transition font-sans text-lg placeholder:text-neutral-300 dark:placeholder:text-neutral-700"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">Your Message</label>
                  <textarea
                    id="form-message"
                    rows="4"
                    name="message"
                    placeholder="Tell me about your project, idea, or role opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white py-3 px-2 focus:border-lime-500 dark:focus:border-lime-400 focus:outline-none transition font-sans text-lg placeholder:text-neutral-300 dark:placeholder:text-neutral-700 resize-none"
                    required
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto bg-lime-400 text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-200 cursor-pointer shadow-md tracking-wider text-xs uppercase"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

export default ContactSection;