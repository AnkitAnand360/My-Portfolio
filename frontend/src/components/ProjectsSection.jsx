import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

function ProjectsSection() {
  const projects = [
    {
      title: "WanderLust abn",
      desc: "A full-featured Airbnb clone with room bookings, reviews, and interactive maps.",
      github: "https://github.com/AnkitAnand360/wanderLust-airbnb",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "My Portfolio",
      desc: "A premium developer portfolio showing skills, journey, and contact fields.",
      github: "https://github.com/AnkitAnand360/My-Portfolio",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Spotify Clone Simple",
      desc: "A clean music player web interface clone built using HTML, CSS, and vanilla JavaScript.",
      github: "https://github.com/AnkitAnand360/Spotify-Clone-Simple",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Stopwatch",
      desc: "A stopwatch web application with precise start, pause, and reset options.",
      github: "https://github.com/AnkitAnand360/Stopwatch",
      image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Password Generator",
      desc: "A responsive generator web app that constructs secure, highly customizable random passwords.",
      github: "https://github.com/AnkitAnand360/Password-Generator",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "CSS Mini Project Photography",
      desc: "A mini photography layout displaying creative image arrangements with HTML and CSS.",
      github: "https://github.com/AnkitAnand360/CSS-Mini-Project-Photography",
      image: "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Calculator",
      desc: "A functional, responsive calculation app built with HTML, CSS, and JavaScript.",
      github: "https://github.com/AnkitAnand360/Calculator",
      image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=600&auto=format&fit=crop&q=60",
    },
    {
      title: "Analog Clock",
      desc: "A real-time analog clock interface styled and animated using HTML, CSS, and JavaScript.",
      github: "https://github.com/AnkitAnand360/Analog-Clock",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <section id="projects" className="bg-slate-50 dark:bg-[#0d0d15] py-20 px-6 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="
                bg-white dark:bg-[#181824]
                border border-slate-200/60 dark:border dark:border-white/5
                rounded-2xl
                shadow-sm hover:shadow-md dark:shadow-lg
                transition duration-300
                flex flex-col overflow-hidden
              "
            >
              <div className="w-full h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  loading="lazy"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 dark:text-gray-300 text-sm mb-4">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 font-semibold transition"
                  >
                    <FaGithub className="text-xl" />
                    <span>View Code</span>
                  </a>
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;