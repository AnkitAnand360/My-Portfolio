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
    <section id="skills" className="bg-white dark:bg-[#07070a] py-20 px-6 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14 text-slate-800 dark:text-white">
          My Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              className="
                bg-slate-50 dark:bg-[#11111a]
                backdrop-blur-md
                border border-slate-100 dark:border dark:border-white/5
                rounded-2xl
                p-6 md:p-8
                text-center
                shadow-sm hover:shadow-md dark:shadow-lg
                cursor-pointer
                transition-colors duration-300
              "
            >

              <div className="text-5xl mb-4 text-cyan-500 dark:text-cyan-400">
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
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