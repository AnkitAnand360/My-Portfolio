import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import { motion } from "framer-motion";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import profile from "../assets/profile.jpg";
import StatsSection from "../components/StatsSection";


function Home() {
  return (
    <>
      <section className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center text-center px-6"> 
        <img
         src={profile}
         alt="Ankit Anand"
         className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 mb-6"
        />
        <p className="text-xl text-cyan-400 mb-3">
          Hello, I'm
        </p>

        <motion.h1
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-6xl font-bold mb-4"
        >
           Ankit Anand
           </motion.h1>

        <h2 className="text-2xl text-gray-300 mb-8">
          Full Stack MERN Developer | Software Developer
        </h2>

        <div className="flex gap-4 mb-8">
          <button className="bg-cyan-500 text-black px-6 py-3 rounded-lg hover:scale-105 transition">
            View Projects
          </button>

          <a
           href="/resume.pdf"
           download
           className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            Download Resume
          </a>
        </div>

        <div className="flex gap-6 text-3xl">
          <FaGithub />
          <FaLinkedin />
          <FaEnvelope />
        </div>
      </section>
      <StatsSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      
    </>
  );
}

export default Home;