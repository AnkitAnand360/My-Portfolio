import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSun, FaMoon, FaDesktop } from "react-icons/fa";
import favicon from "./favicon.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "system";
  });

  useEffect(() => {
    const root = document.documentElement;
    const applyTheme = (currentTheme) => {
      root.classList.remove("light", "dark");
      
      if (currentTheme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        root.classList.add(systemTheme);
      } else {
        root.classList.add(currentTheme);
      }
    };

    applyTheme(theme);
    localStorage.setItem("portfolio-theme", theme);

    // Watch for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/80 dark:bg-black/80
        backdrop-blur-md
        border-b border-neutral-200/60 dark:border-neutral-900/60
        transition-colors duration-300
      "
    >
      <div className="w-full px-6 sm:px-12 md:px-16 py-5 flex justify-between items-center selection:bg-lime-400 selection:text-black">

        <a href="#home" className="flex items-center gap-3 group">
          <img 
            src={favicon} 
            alt="Logo" 
            className="w-6 h-6 rounded-full border border-lime-400 object-cover shadow-sm group-hover:scale-105 transition duration-300" 
          />
          <span className="text-xl sm:text-2xl font-display font-black tracking-tight text-neutral-900 dark:text-white transition-colors duration-300 uppercase">
            Ankit <span className="text-lime-400">Anand</span>
          </span>
          {/* Status Indicator */}
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse ml-1"></span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-neutral-600 dark:text-neutral-400 font-mono text-xs uppercase tracking-wider">
          <li>
            <a href="#home" className="hover:text-lime-400 transition duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-lime-400 transition duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-lime-400 transition duration-200">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-lime-400 transition duration-200">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-lime-400 transition duration-200">
              Contact
            </a>
          </li>
        </ul>

        {/* Menu Buttons (Theme + Mobile Hamburger) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 text-neutral-500 dark:text-neutral-400 hover:text-lime-500 dark:hover:text-lime-400 transition text-lg cursor-pointer flex items-center justify-center"
            aria-label="Cycle Theme"
            title={`Active Theme: ${theme.toUpperCase()} (Click to toggle)`}
          >
            {theme === "light" && <FaSun />}
            {theme === "dark" && <FaMoon />}
            {theme === "system" && <FaDesktop />}
          </button>

          {/* Mobile menu trigger */}
          <div className="md:hidden">
            <button
              className="p-2 text-neutral-500 dark:text-neutral-400 hover:text-lime-500 dark:hover:text-lime-400 transition text-xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-900 transition-all duration-300">
          <ul className="flex flex-col p-6 gap-5 font-mono text-xs uppercase tracking-widest">
            <li>
              <a 
                href="#home" 
                onClick={() => setMenuOpen(false)}
                className="block hover:text-lime-400 transition duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={() => setMenuOpen(false)}
                className="block hover:text-lime-400 transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={() => setMenuOpen(false)}
                className="block hover:text-lime-400 transition duration-200"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={() => setMenuOpen(false)}
                className="block hover:text-lime-400 transition duration-200"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={() => setMenuOpen(false)}
                className="block hover:text-lime-400 transition duration-200"
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