import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import favicon from "./favicon.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/80 dark:bg-[#0a0a0f]/80
        backdrop-blur-md
        border-b border-slate-200/60 dark:border-white/5
        transition-colors duration-300
      "
    >
      <div className="w-full px-6 sm:px-12 md:px-16 py-4 flex justify-between items-center">

        <a href="#home" className="flex items-center gap-3 group">
          <img 
            src={favicon} 
            alt="Logo" 
            className="w-8 h-8 rounded-full border border-cyan-400 object-cover shadow-md group-hover:scale-110 transition duration-300" 
          />
          <span className="text-2xl font-bold text-slate-900 dark:text-cyan-400 transition-colors duration-300">
            Ankit Anand
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-slate-700 dark:text-slate-200 font-medium">
          <li>
            <a href="#home" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-200">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-200">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-200">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-lg text-slate-700 dark:text-yellow-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200 text-xl"
            aria-label="Toggle Theme"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="md:hidden p-2 text-slate-800 dark:text-white text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0c0c14] text-slate-800 dark:text-slate-200 border-t border-slate-200 dark:border-white/5 transition-all duration-300">
          <ul className="flex flex-col p-6 gap-4 font-medium">
            <li>
              <a 
                href="#home" 
                onClick={() => setMenuOpen(false)}
                className="block hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={() => setMenuOpen(false)}
                className="block hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={() => setMenuOpen(false)}
                className="block hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-200"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={() => setMenuOpen(false)}
                className="block hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={() => setMenuOpen(false)}
                className="block hover:text-cyan-500 dark:hover:text-cyan-400 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;