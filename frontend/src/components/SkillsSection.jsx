import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";

function SkillsSection() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "GitHub", icon: <FaGithub /> },
  ];

  return (
    <section id="skills" className="bg-white dark:bg-black py-20 px-6 border-t border-neutral-200 dark:border-neutral-900 selection:bg-lime-400 selection:text-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                borderColor: "#84cc16", // Tailwind V4 lime color or accent
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                bg-neutral-50 dark:bg-neutral-950
                border border-neutral-200 dark:border-neutral-900
                rounded-xl
                p-6
                text-center
                shadow-sm
                cursor-pointer
                transition-all duration-300
              "
            >
              <div className="text-4xl mb-4 text-lime-500 dark:text-lime-400 flex justify-center">
                {skill.icon}
              </div>

              <h3 className="text-sm font-semibold text-neutral-800 dark:text-white tracking-wider uppercase">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;