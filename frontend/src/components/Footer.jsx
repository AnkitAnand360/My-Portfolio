import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-[#050508] text-slate-900 dark:text-white py-8 border-t border-slate-200/60 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <div className="flex justify-center gap-6 text-3xl mb-4 text-slate-700 dark:text-slate-300">
          <a
            href="https://github.com/AnkitAnand360"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition duration-200"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/ankit-anand-an3902"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition duration-200"
          >
            <FaLinkedin />
          </a>

          <a 
            href="mailto:ankitanand3902@gmail.com"
            className="hover:text-cyan-500 dark:hover:text-cyan-400 hover:scale-110 transition duration-200"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-slate-500 dark:text-slate-400 text-sm">
          © 2026 Ankit Anand. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;