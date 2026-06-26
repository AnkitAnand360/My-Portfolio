import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <div className="flex justify-center gap-6 text-3xl mb-4">
          <a
            href="https://github.com/AnkitAnand360"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/ankit-anand-an3902"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="ankitanand3902@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <p>
          © 2026 Ankit Anand. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;