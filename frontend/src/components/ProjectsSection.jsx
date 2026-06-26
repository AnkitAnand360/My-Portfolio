import { motion } from "framer-motion";

function ProjectsSection() {
  const projects = [
    {
      title: "DevSphere Portfolio",
      desc: "Full MERN Stack Developer Portfolio",
    },
    {
      title: "WanderLust",
      desc: "Airbnb Clone using Node.js and MongoDB",
    },
  ];

  return (
    <section id="projects" className="bg-slate-900 py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                bg-slate-800
                p-8
                rounded-2xl
                shadow-xl
              "
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300">
                {project.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;