import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { blogData } from "../data/blogData";

function BlogSection() {
  return (
    <section id="blog" className="bg-white dark:bg-black py-20 px-6 border-t border-neutral-200 dark:border-neutral-900 selection:bg-lime-400 selection:text-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-12">
          Latest Publications
        </h2>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogData.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                borderColor: "rgba(132, 204, 22, 0.4)",
              }}
              className="
                bg-neutral-50 dark:bg-neutral-950
                border border-neutral-200 dark:border-neutral-900
                rounded-2xl p-6 sm:p-8
                shadow-sm flex flex-col justify-between
                transition-all duration-300
              "
            >
              <div>
                {/* Monospace Category */}
                <span className="text-[10px] font-mono tracking-widest text-lime-650 dark:text-lime-400 uppercase font-bold mb-3 block">
                  {post.category}
                </span>

                {/* Title */}
                <Link
                  to={`/blog/${post.id}`}
                  className="block text-xl sm:text-2xl font-serif font-medium text-neutral-900 dark:text-white mb-2 hover:text-lime-650 dark:hover:text-lime-400 transition-colors duration-200"
                >
                  {post.title}
                </Link>

                {/* Meta details */}
                <span className="text-[10px] font-mono text-neutral-450 dark:text-neutral-500 mb-4 block uppercase tracking-wider">
                  {post.date} &bull; {post.readTime}
                </span>

                {/* Description */}
                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed font-light mb-6">
                  {post.desc}
                </p>
              </div>

              {/* Link gateway */}
              <div className="pt-4 border-t border-neutral-200/60 dark:border-neutral-900/60">
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-lime-650 dark:text-lime-400 font-bold hover:translate-x-1 transition-transform duration-200"
                >
                  Read Article &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
