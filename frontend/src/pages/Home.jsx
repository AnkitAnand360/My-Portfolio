import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import { motion } from "framer-motion";
import ProjectsSection from "../components/ProjectsSection";
import GithubActivity from "../components/GithubActivity";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import profile from "../assets/profile.jpg";
import StatsSection from "../components/StatsSection";


function Home() {
  return (
    <>
      <section 
        id="home" 
        className="min-h-screen bg-slate-50 text-slate-900 dark:bg-[#0d0d15] dark:text-white flex flex-col justify-center items-center text-center px-6 pt-24 pb-12 transition-colors duration-300"
      > 
        <img
          src={profile}
          alt="Ankit Anand"
          className="w-50 h-50 rounded-full object-cover border-4 border-cyan-400 mb-6 shadow-lg hover:rotate-6 transition duration-300"
        />
        <p className="text-xl text-cyan-500 dark:text-cyan-400 font-medium mb-3">
          Hello, I'm
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight"
        >
          Ankit Anand
        </motion.h1>

        <h2 className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-gray-300 mb-8 max-w-2xl font-medium">
          Full Stack MERN Developer | Software Developer
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto px-6">
          <a 
            href="#projects"
            className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 hover:bg-cyan-400 transition shadow-md text-center"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-cyan-400 text-cyan-500 dark:text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 dark:hover:bg-cyan-400 hover:text-black dark:hover:text-black hover:scale-105 transition shadow-sm text-center"
          >
            Download Resume
          </a>
        </div>

        <div className="flex gap-6 text-3xl text-slate-700 dark:text-slate-300">
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
      </section>
      <StatsSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GithubActivity />
      <ContactSection />
      <Footer />
      
    </>
  );
}

export default Home;