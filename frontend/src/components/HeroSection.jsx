import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-6">
      <ParticlesBackground />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >

        <h1 className="text-6xl font-bold mb-4">
          Hi, I'm Ankit Anand 👋
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "MERN Stack Developer",
            2000,
            "Problem Solver",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-cyan-400 text-3xl font-semibold"
        />

        <p className="max-w-2xl mx-auto mt-6 text-gray-400">
          Building modern, scalable, and beautiful web applications using
          React, Node.js, Express, and MongoDB.
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-block mt-8 bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-xl font-bold transition duration-300"
        >
          Download Resume
        </a>

      </motion.div>

    </section>
  );
}

export default HeroSection;