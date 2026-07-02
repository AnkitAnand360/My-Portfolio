import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white dark:bg-black text-neutral-900 dark:text-white py-12 border-t border-neutral-200 dark:border-neutral-900 selection:bg-lime-400 selection:text-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <div className="flex justify-center gap-6 text-2xl mb-4 text-neutral-400 dark:text-neutral-500">
          <a
            href="https://github.com/AnkitAnand360"
            target="_blank"
            rel="noreferrer"
            className="hover:text-lime-400 hover:scale-105 transition duration-200"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/ankit-anand-an3902"
            target="_blank"
            rel="noreferrer"
            className="hover:text-lime-400 hover:scale-105 transition duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a 
            href="mailto:ankitanand3902@gmail.com"
            className="hover:text-lime-400 hover:scale-105 transition duration-200"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-neutral-500 text-xs font-mono tracking-wider uppercase">
          © 2026 Ankit Anand &mdash; All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;