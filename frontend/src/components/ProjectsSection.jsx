import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { projectsData } from "../data/projectsData";
import VideoModal from "./VideoModal";

function ProjectsSection() {
  const [activeVideoProject, setActiveVideoProject] = useState(null);

  return (
    <section id="projects" className="bg-white dark:bg-black py-20 px-6 border-t border-neutral-200 dark:border-neutral-900 selection:bg-lime-400 selection:text-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-16">
          Selected Projects
        </h2>

        {/* Single-Column List Showcase */}
        <div className="space-y-16">
          {projectsData.map((project, index) => {
            const displayIndex = String(index + 1).padStart(2, "0");
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group border-b border-neutral-200 dark:border-neutral-900 pb-12 flex flex-col md:flex-row md:items-start gap-6 md:gap-12"
              >
                {/* Monospace index number */}
                <div className="text-lime-600 dark:text-lime-400 font-mono text-xl tracking-wider select-none pt-2 animate-pulse">
                  {displayIndex} &mdash;
                </div>

                {/* Main Content Area */}
                <div className="flex-grow space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <Link 
                      to={`/project/${project.id}`}
                      className="text-3xl sm:text-5xl font-serif font-medium text-neutral-900 dark:text-white hover:text-lime-600 dark:hover:text-lime-400 transition-colors duration-250"
                    >
                      {project.title}
                    </Link>
                    <span className="text-neutral-400 dark:text-neutral-500 text-xs font-mono uppercase tracking-widest sm:text-right">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed max-w-3xl font-light font-sans">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.slice(0, 4).map((techName) => (
                      <span 
                        key={techName}
                        className="text-xs font-mono text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-900 px-2 py-0.5 rounded bg-neutral-50 dark:bg-neutral-950/40"
                      >
                        {techName}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-5 sm:gap-6">
                    <Link
                      to={`/project/${project.id}`}
                      className="inline-flex items-center gap-2 text-lime-600 dark:text-lime-400 font-semibold hover:text-neutral-900 dark:hover:text-white transition duration-200 text-sm tracking-wider uppercase"
                    >
                      Read Case Study &rarr;
                    </Link>
                    {project.video && (
                      <button
                        type="button"
                        onClick={() => setActiveVideoProject(project)}
                        className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-lime-600 dark:hover:text-lime-400 transition duration-200 text-sm tracking-wider uppercase font-mono cursor-pointer group/btn"
                      >
                        <span className="w-6 h-6 rounded-full bg-lime-400/10 dark:bg-lime-400/20 border border-lime-500/30 flex items-center justify-center text-lime-600 dark:text-lime-400 group-hover/btn:bg-lime-400 group-hover/btn:text-black transition">
                          <FaPlay className="text-[9px] ml-0.5" />
                        </span>
                        Watch Video
                      </button>
                    )}
                  </div>
                </div>

                {/* Optional side preview image/video on desktop/tablet */}
                <div 
                  onClick={() => {
                    if (project.video) {
                      setActiveVideoProject(project);
                    }
                  }}
                  className={`hidden md:block w-72 h-44 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-900 shrink-0 self-center bg-neutral-100 dark:bg-neutral-950 opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-300 relative ${
                    project.video ? "cursor-pointer group/video hover:border-lime-500/50 hover:shadow-xl" : ""
                  }`}
                  title={project.video ? `Click to watch ${project.title} video` : project.title}
                >
                  {project.video ? (
                    <>
                      <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      {/* Play overlay on hover */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="bg-lime-400 text-black px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wider flex items-center gap-1.5 shadow-lg scale-90 group-hover/video:scale-100 transition-transform duration-300">
                          <FaPlay className="text-[10px]" /> Open Video
                        </span>
                      </div>
                    </>
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Video Modal Popup */}
      <VideoModal
        isOpen={Boolean(activeVideoProject)}
        videoUrl={activeVideoProject?.video}
        title={activeVideoProject?.title}
        projectLink={activeVideoProject ? `/project/${activeVideoProject.id}` : null}
        poster={activeVideoProject?.image}
        onClose={() => setActiveVideoProject(null)}
      />
    </section>
  );
}

export default ProjectsSection;