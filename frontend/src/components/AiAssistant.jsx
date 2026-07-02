import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaPaperPlane, FaTimes, FaCommentDots } from "react-icons/fa";

function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! I am Ankit's virtual AI assistant. Ask me anything about his work, skills, or projects. Feel free to use the quick suggestions below!",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getBotResponse = (input) => {
    const cleanInput = input.toLowerCase().trim();

    if (cleanInput.includes("about") || cleanInput.includes("who is") || cleanInput.includes("tell me about")) {
      return {
        text: "Ankit Anand is a highly capable Full Stack MERN Developer based in India. He specializes in building robust web applications using MongoDB, Express.js, React, and Node.js. He designs at the intersection of logical backend APIs and beautiful editorial layouts.",
        action: null,
      };
    }

    if (cleanInput.includes("mern") || cleanInput.includes("projects") || cleanInput.includes("show projects") || cleanInput.includes("show mern")) {
      return {
        text: "Here are some of Ankit's core MERN and frontend applications:\n\n1. **DevSphere**: A collaborative developer space with active MongoDB connections.\n2. **E-Commerce Platform**: Multi-vendor shopping app built with React, Node.js, and MongoDB.\n3. **Task Management Tool**: A real-time kanban workspace.\n\nI have scrolled down to his projects section so you can browse his case studies!",
        action: "scroll-projects",
      };
    }

    if (cleanInput.includes("resume") || cleanInput.includes("download") || cleanInput.includes("cv")) {
      return {
        text: "Certainly! I have triggered the download for Ankit's resume. If it didn't start, click the link below:\n\n👉 [Download Resume](/resume.pdf)",
        action: "download-resume",
      };
    }

    if (cleanInput.includes("hello") || cleanInput.includes("hi") || cleanInput.includes("hey")) {
      return {
        text: "Hello! How can I help you today? You can ask me about Ankit's skills, his projects, or download his resume.",
        action: null,
      };
    }

    if (cleanInput.includes("skills") || cleanInput.includes("tech") || cleanInput.includes("stack") || cleanInput.includes("languages")) {
      return {
        text: "Ankit is proficient in:\n\n💻 **Frontend**: React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS\n⚙️ **Backend**: Node.js, Express.js, REST APIs\n🗄️ **Database**: MongoDB, Mongoose\n🔧 **Tools & VCS**: Git, GitHub, Postman\n\nI've scrolled down to his skills section for you!",
        action: "scroll-skills",
      };
    }

    if (cleanInput.includes("contact") || cleanInput.includes("email") || cleanInput.includes("hire") || cleanInput.includes("collaborate")) {
      return {
        text: "You can collaborate with Ankit by scrolling down to the contact form, emailing him directly at ankitanand3902@gmail.com, or visiting his LinkedIn.\n\nI've scrolled down to his contact form for you!",
        action: "scroll-contact",
      };
    }

    return {
      text: "I'm sorry, I didn't quite catch that. Try asking one of the quick suggestions below, or ask about his 'skills', 'projects', or 'contact'!",
      action: null,
    };
  };

  const handleAction = (action) => {
    if (!action) return;

    setTimeout(() => {
      if (action === "scroll-projects") {
        const el = document.getElementById("projects");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else if (action === "scroll-skills") {
        const el = document.getElementById("skills");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else if (action === "scroll-contact") {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else if (action === "download-resume") {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Ankit_Anand_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, 600);
  };

  const sendMessage = (text) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text }]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      const response = getBotResponse(text);
      setMessages((prev) => [...prev, { sender: "bot", text: response.text }]);
      setIsTyping(false);
      handleAction(response.action);
    }, 800);
  };

  const suggestions = [
    { text: "Tell me about Ankit", query: "Tell me about Ankit" },
    { text: "Show MERN projects", query: "Show MERN projects" },
    { text: "Download resume", query: "Download resume" },
  ];

  return (
    <>
      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-6 right-6 z-50 selection:bg-lime-400 selection:text-black">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-lime-400 text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(163,230,53,0.35)] cursor-pointer hover:bg-lime-500 transition duration-200"
          aria-label="Toggle AI Chat"
        >
          {isOpen ? <FaTimes className="text-xl" /> : <FaCommentDots className="text-2xl animate-pulse" />}
        </motion.button>
      </div>

      {/* Glassmorphic Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[75vh] flex flex-col bg-white/95 dark:bg-neutral-950/95 border border-neutral-200 dark:border-neutral-900 rounded-2xl shadow-2xl overflow-hidden font-sans backdrop-blur-md transition-colors duration-300 selection:bg-lime-400 selection:text-black"
          >
            {/* Header */}
            <div className="bg-neutral-55 dark:bg-neutral-900 px-6 py-4 flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-lime-500/10 text-lime-600 dark:text-lime-400 flex items-center justify-center">
                  <FaRobot className="text-lg" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white font-mono uppercase tracking-wider">DevSphere AI</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse"></span>
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Active Assistant</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-lime-500 dark:hover:text-lime-400 transition cursor-pointer p-1"
                aria-label="Close Chat"
              >
                <FaTimes />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-neutral-200 dark:scrollbar-thumb-neutral-800">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed max-w-[85%] border shadow-sm ${
                      msg.sender === "user"
                        ? "bg-lime-500 border-lime-600 text-black rounded-tr-none font-medium"
                        : "bg-neutral-50 dark:bg-neutral-900 border-neutral-150 dark:border-neutral-850 text-neutral-800 dark:text-neutral-200 rounded-tl-none whitespace-pre-wrap"
                    }`}
                  >
                    {/* Render basic markdown link supports */}
                    {msg.text.includes("[Download Resume]") ? (
                      <div>
                        {msg.text.split("👉")[0]}
                        <a
                          href="/resume.pdf"
                          download
                          className="inline-flex items-center gap-1 text-lime-600 dark:text-lime-400 underline font-bold mt-1"
                        >
                          👉 Download Resume
                        </a>
                      </div>
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 bg-neutral-50 dark:bg-neutral-900 border border-neutral-150 dark:border-neutral-850 rounded-2xl rounded-tl-none px-4 py-3.5 w-16">
                  <span className="w-1.5 h-1.5 bg-neutral-450 dark:bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-neutral-450 dark:bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-1.5 h-1.5 bg-neutral-450 dark:bg-neutral-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            <div className="px-6 py-2.5 flex flex-wrap gap-2 bg-neutral-50/50 dark:bg-neutral-900/30 border-t border-neutral-100 dark:border-neutral-900/50 shrink-0 overflow-x-auto scrollbar-none">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => sendMessage(s.query)}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 bg-white dark:bg-black hover:border-lime-500 dark:hover:border-lime-400 hover:text-lime-600 dark:hover:text-lime-400 transition cursor-pointer shrink-0 font-sans"
                >
                  {s.text}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage(inputValue);
              }}
              className="px-6 py-4 border-t border-neutral-200 dark:border-neutral-900 flex items-center gap-3 shrink-0 bg-white dark:bg-neutral-950 transition-colors duration-300"
            >
              <input
                type="text"
                placeholder="Ask a question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-850 rounded-full px-4 py-2.5 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-500 focus:outline-none focus:border-lime-500 dark:focus:border-lime-400 transition font-sans"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className={`p-2.5 rounded-full flex items-center justify-center transition shrink-0 cursor-pointer ${
                  inputValue.trim()
                    ? "bg-lime-400 text-black hover:bg-lime-500 shadow-md"
                    : "bg-neutral-100 dark:bg-neutral-900 text-neutral-350 dark:text-neutral-600 cursor-not-allowed"
                }`}
                aria-label="Send message"
              >
                <FaPaperPlane className="text-xs" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default AiAssistant;
