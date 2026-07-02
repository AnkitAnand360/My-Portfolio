import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { blogData } from "../data/blogData";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white flex flex-col items-center justify-center p-6 transition-colors duration-300">
        <h2 className="text-2xl font-serif mb-4">Article not found</h2>
        <Link to="/" className="text-lime-650 dark:text-lime-400 font-semibold hover:underline flex items-center gap-2">
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="bg-white dark:bg-black text-neutral-900 dark:text-white min-h-screen font-sans selection:bg-lime-400 selection:text-black transition-colors duration-300">
        {/* Sticky Sub Header */}
        <header className="sticky top-0 z-40 bg-white/85 dark:bg-black/85 backdrop-blur-md border-b border-neutral-200/60 dark:border-neutral-900/60 px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-neutral-550 dark:text-neutral-400 hover:text-lime-650 dark:hover:text-lime-400 transition cursor-pointer text-sm font-semibold uppercase tracking-wider"
            >
              <FaArrowLeft className="text-xs" /> Back
            </button>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500">Publication</span>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-12 md:py-24">
          {/* Editorial Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 border-b border-neutral-200 dark:border-neutral-900 pb-10"
          >
            <span className="text-lime-650 dark:text-lime-400 font-mono text-xs uppercase tracking-widest block mb-4 font-bold">
              {post.category} &bull; {post.date}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight leading-tight text-neutral-900 dark:text-white mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-4 items-center justify-between mt-8 text-xs font-mono text-neutral-500 dark:text-neutral-450 uppercase tracking-wider">
              <span>Written by Ankit Anand</span>
              <span>{post.readTime}</span>
            </div>
          </motion.div>

          {/* Dynamic Block Renderer */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 max-w-3xl mx-auto"
          >
            {post.content.map((item, idx) => {
              if (item.type === "paragraph") {
                return (
                  <p 
                    key={idx} 
                    className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed font-light font-sans"
                  >
                    {item.text}
                  </p>
                );
              }
              if (item.type === "heading") {
                return (
                  <h2 
                    key={idx} 
                    className="text-2xl sm:text-3xl font-serif font-medium text-neutral-900 dark:text-white mt-10 mb-4"
                  >
                    {item.text}
                  </h2>
                );
              }
              if (item.type === "code") {
                return (
                  <pre 
                    key={idx} 
                    className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 overflow-x-auto text-xs font-mono text-neutral-700 dark:text-neutral-350 mb-6 leading-relaxed select-all scrollbar-thin transition-colors duration-300"
                  >
                    <code>{item.code}</code>
                  </pre>
                );
              }
              if (item.type === "callout") {
                return (
                  <div 
                    key={idx} 
                    className="bg-lime-500/5 dark:bg-lime-400/5 border border-lime-500/20 dark:border-lime-400/20 rounded-xl p-5 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-6 font-mono flex items-start gap-3 transition-colors duration-300"
                  >
                    <span>{item.text}</span>
                  </div>
                );
              }
              return null;
            })}
          </motion.div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
}

export default BlogDetails;
