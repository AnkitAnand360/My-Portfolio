import { motion } from "framer-motion";

function StatsSection() {
  const stats = [
    {
      number: "10+",
      title: "Projects Completed",
    },
    {
      number: "500+",
      title: "DSA Problems Solved",
    },
    {
      number: "3+",
      title: "MERN Applications",
    },
    {
      number: "1000+",
      title: "Coding Hours",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-black text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-neutral-900 selection:bg-lime-400 selection:text-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-12 text-center md:text-left">
          Key Milestones
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-200 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-900 rounded-2xl overflow-hidden">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black p-8 text-center md:text-left transition-colors duration-300"
            >
              <h3 className="text-4xl sm:text-5xl font-mono font-bold text-lime-500 dark:text-lime-400 mb-2">
                {stat.number}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs font-mono uppercase tracking-wider">
                {stat.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;