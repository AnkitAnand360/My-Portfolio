import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section id="about" className="bg-white dark:bg-black py-20 px-6 border-t border-neutral-200 dark:border-neutral-900 selection:bg-lime-400 selection:text-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-10">
          About &amp; Philosophy
        </h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl border-l-2 border-lime-500 dark:border-lime-400 pl-6 md:pl-10 py-2"
        >
          <p className="text-2xl sm:text-3xl font-serif text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
            I am <span className="text-neutral-900 dark:text-white font-medium">Ankit Anand</span>, a developer who designs at the intersection of logical backend architecture and clean typography layouts. 
            <br /><br />
            I focus on building performant web applications using the <span className="text-lime-600 dark:text-lime-400 font-medium">MERN stack</span> (MongoDB, Express, React, Node.js). I believe in code readability, system performance, and reducing interface noise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;