import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import ProjectGallery from "../components/ProjectGallery";
import MagneticButton from "../components/MagneticButton";
import PageTransition from "../components/PageTransition";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white flex flex-col items-center justify-center p-6 transition-colors duration-300">
        <h2 className="text-2xl font-serif mb-4">Project not found</h2>
        <Link to="/" className="text-lime-600 dark:text-lime-400 font-semibold hover:underline flex items-center gap-2">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="bg-white dark:bg-black text-neutral-900 dark:text-white min-h-screen font-sans selection:bg-lime-400 selection:text-black transition-colors duration-300">
      {/* Back Button / Mini Header */}
      <header className="sticky top-0 z-40 bg-white/85 dark:bg-black/85 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-900/60 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-lime-600 dark:hover:text-lime-400 transition cursor-pointer text-sm font-semibold uppercase tracking-wider"
          >
            <FaArrowLeft className="text-xs" /> Back
          </button>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">Case Study</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 md:py-24">
        {/* Magazine Style Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 animate-fade-in"
        >
          <span className="text-lime-600 dark:text-lime-400 font-mono text-sm uppercase tracking-widest block mb-3">
            {project.role} &mdash; {project.year}
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-serif font-medium tracking-tight leading-none text-neutral-900 dark:text-white mb-6">
            {project.title}
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-600 dark:text-neutral-400 font-serif italic max-w-3xl leading-relaxed">
            {project.desc}
          </p>
        </motion.div>

        {/* Hero Image/Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-900 mb-16 bg-neutral-100 dark:bg-neutral-950 relative"
        >
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              controls
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          )}
        </motion.div>

        {/* Project Screenshots Gallery */}
        {project.images && project.images.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-16"
          >
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-6">
              Interface &amp; Screenshots
            </h2>
            <ProjectGallery images={project.images} />
          </motion.div>
        )}

        {/* Project Metadata + Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {/* Metadata Sidebar (1/3 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8 border-t border-neutral-200 dark:border-neutral-900 pt-8"
          >
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2">Role</h3>
              <p className="text-neutral-900 dark:text-white font-medium text-lg">{project.role}</p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2">Year</h3>
              <p className="text-neutral-900 dark:text-white font-medium text-lg">{project.year}</p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2">Client</h3>
              <p className="text-neutral-900 dark:text-white font-medium text-lg">{project.client}</p>
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {project.tech.map((t) => (
                  <span 
                    key={t}
                    className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-xs px-2.5 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="pt-4 flex gap-4">
              <MagneticButton>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-lime-400 bg-lime-400 text-black px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition cursor-pointer shadow-md block"
                >
                  <FaGithub /> Code
                </a>
              </MagneticButton>
              {project.liveUrl && (
                <MagneticButton>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-lime-600 dark:hover:text-lime-400 hover:border-lime-500 dark:hover:border-lime-400 px-4 py-2.5 rounded-lg text-sm font-semibold transition cursor-pointer block"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                </MagneticButton>
              )}
            </div>
          </motion.div>

          {/* Core Case Study Content (2/3 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 space-y-12 border-t border-neutral-200 dark:border-neutral-900 pt-8"
          >
            {/* Context/Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 dark:text-white font-medium">Overview</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed font-light font-sans">
                {project.longDesc}
              </p>
            </div>

            {/* Technical Challenges */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif text-lime-600 dark:text-lime-400 font-medium">The Challenge</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed font-light font-sans">
                {project.challenges}
              </p>
            </div>

            {/* Solution & Implementation */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-serif text-neutral-900 dark:text-white font-medium">The Solution</h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed font-light font-sans">
                {project.solutions}
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
    </PageTransition>
  );
}

export default ProjectDetails;
