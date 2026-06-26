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
    <section id="skills" className="bg-slate-950 py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-14">
          My Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                rotate: 2,
              }}
              className="
                bg-white/10
                backdrop-blur-lg
                border border-white/20
                rounded-2xl
                p-8
                text-center
                shadow-xl
                cursor-pointer
              "
            >

              <div className="text-5xl mb-4 text-cyan-400">
                {skill.icon}
              </div>

              <h3 className="text-xl font-bold">
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