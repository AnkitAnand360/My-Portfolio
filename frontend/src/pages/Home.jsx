import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import StatsSection from "../components/StatsSection";
import GithubActivity from "../components/GithubActivity";
import profile from "../assets/profile.jpg";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogSection from "../components/BlogSection";

import HeroCanvas from "../components/HeroCanvas";
import MagneticButton from "../components/MagneticButton";
import PageTransition from "../components/PageTransition";

function Home() {
  const words = ["MERN Stack Developer", "Software Engineer", "Problem Solver", "UI/UX Designer"];
  const [wordIdx, setWordIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter loops
  useEffect(() => {
    if (subIdx === words[wordIdx].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIdx === 0 && isDeleting) {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIdx((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 30 : 70);

    return () => clearTimeout(timeout);
  }, [subIdx, isDeleting, wordIdx]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white flex flex-col justify-center items-center text-center px-6 pt-32 pb-16 selection:bg-lime-400 selection:text-black transition-colors duration-300 relative overflow-hidden"
      > 
        {/* R3F 3D Particle Starfield */}
        <HeroCanvas />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto flex flex-col items-center relative z-10"
        >
          {/* Profile Photo */}
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            src={profile}
            alt="Ankit Anand"
            loading="eager"
            decoding="async"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl object-cover border border-neutral-200 dark:border-lime-400/20 mb-6 filter grayscale hover:grayscale-0 transition duration-500 shadow-[0_0_20px_rgba(163,230,53,0.05)] cursor-pointer"
          />

          {/* Accent Line Indicator */}
          <span className="text-lime-600 dark:text-lime-400 font-mono text-xs uppercase tracking-widest mb-6 px-3 py-1 border border-lime-500/20 dark:border-lime-400/20 rounded-full bg-lime-500/5 dark:bg-lime-400/5 animate-pulse">
            Available for Freelance & Roles
          </span>

          {/* Large display headline */}
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-display font-black tracking-tighter leading-none text-neutral-900 dark:text-white mb-6 uppercase">
            Ankit <span className="text-lime-500 dark:text-lime-400">Anand</span>
          </h1>

          {/* Subtitle with Typewriter */}
          <p className="text-lg sm:text-2xl text-neutral-600 dark:text-neutral-400 font-serif italic max-w-2xl mb-10 leading-relaxed min-h-[3rem] sm:min-h-[4rem]">
            Building high-performance MERN web applications as a{" "}
            <span className="font-mono text-lime-650 dark:text-lime-400 font-bold border-r-2 border-lime-500 dark:border-lime-400 animate-pulse pr-1 whitespace-nowrap not-italic">
              {words[wordIdx].substring(0, subIdx)}
            </span>
          </p>

          {/* Direct CTA Link buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
            <MagneticButton>
              <a 
                href="#projects"
                className="bg-lime-400 text-black px-8 py-3.5 rounded-full font-bold hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300 text-center tracking-wider text-xs uppercase cursor-pointer shadow-md block"
              >
                Explore Work
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="/resume.pdf"
                download
                className="border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 px-8 py-3.5 rounded-full font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white transition duration-300 text-center tracking-wider text-xs uppercase cursor-pointer block"
              >
                Get Resume
              </a>
            </MagneticButton>
          </div>

          {/* Minimalist social links */}
          <div className="flex gap-8 text-2xl text-neutral-400 dark:text-neutral-500">
            <a 
              href="https://github.com/AnkitAnand360" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-lime-500 dark:hover:text-lime-400 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/ankit-anand-an3902" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-lime-500 dark:hover:text-lime-400 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:ankitanand3902@gmail.com" 
              className="hover:text-lime-500 dark:hover:text-lime-400 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </section>

      {/* Structured Sections */}
      <StatsSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogSection />
      <GithubActivity />
      <ContactSection />
      <Footer />
    </PageTransition>
  );
}

export default Home;