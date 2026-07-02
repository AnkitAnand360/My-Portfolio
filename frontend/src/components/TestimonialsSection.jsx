import { motion } from "framer-motion";

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Sandeep K. Mehta",
      role: "Professor & CS Head, Technical University",
      type: "Academic Mentor",
      text: "Ankit has an exceptional capacity for conceptualizing complex data structures. He consistently ranked at the top of his class and demonstrated a rare grit for debugging systems.",
      initials: "SM",
      gradient: "from-blue-600 to-indigo-800",
    },
    {
      name: "Elena Rostova",
      role: "Product Owner, Apex Flow",
      type: "Client",
      text: "Ankit delivered our dashboard application ahead of schedule. His attention to detail in creating smooth, high-fidelity responsive interfaces greatly exceeded our expectations.",
      initials: "ER",
      gradient: "from-amber-500 to-orange-700",
    },
    {
      name: "Rajesh Nair",
      role: "VP of Engineering, Innovate Labs",
      type: "Internship Mentor",
      text: "During his time with us, Ankit quickly adapted to our microservices codebase. He tackled ticket backlog issues with speed and worked seamlessly within our agile cycle.",
      initials: "RN",
      gradient: "from-teal-500 to-emerald-700",
    },
    {
      name: "Sarah Lin",
      role: "Frontend Developer, DevSphere Project",
      type: "Teammate",
      text: "Ankit's backend architecture skills are incredible. He designed secure JWT login structures and neat MongoDB models that made integration absolute bliss for me.",
      initials: "SL",
      gradient: "from-fuchsia-600 to-indigo-800",
    },
  ];

  return (
    <section id="testimonials" className="bg-white dark:bg-black py-20 px-6 border-t border-neutral-200 dark:border-neutral-900 selection:bg-lime-400 selection:text-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-12">
          Client &amp; Peer Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                borderColor: "rgba(132, 204, 22, 0.4)", // dynamic border color
              }}
              className="
                bg-neutral-50 dark:bg-neutral-950
                border border-neutral-200 dark:border-neutral-900
                rounded-2xl p-6 sm:p-8
                shadow-sm flex flex-col justify-between
                transition-all duration-300
              "
            >
              {/* Testimonial message */}
              <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed font-light italic mb-6">
                "{t.text}"
              </p>

              {/* Profile Block */}
              <div className="flex items-center justify-between border-t border-neutral-200/60 dark:border-neutral-900/60 pt-4 mt-auto">
                <div className="flex items-center gap-3">
                  {/* High-Fidelity SVG Gradient Avatar */}
                  <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center text-white font-mono font-bold text-sm bg-gradient-to-br ${t.gradient} shadow-md`}>
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="font-serif font-medium text-neutral-900 dark:text-white text-base">
                      {t.name}
                    </h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Role relationship badge */}
                <span className="bg-lime-500/10 dark:bg-lime-400/10 text-lime-600 dark:text-lime-400 border border-lime-500/20 dark:border-lime-400/20 text-[9px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full select-none shrink-0 ml-2">
                  {t.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
