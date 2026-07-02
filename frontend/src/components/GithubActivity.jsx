import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

function GithubActivity() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  useEffect(() => {
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Support current and past two years
  const years = [currentYear, currentYear - 1, currentYear - 2];

  // Helper to generate full year of empty contributions if API returns empty array (avoid crashes)
  const generateEmptyContributions = (selectedYear) => {
    const contributions = [];
    const startDate = new Date(selectedYear, 0, 1);
    const endDate = new Date(selectedYear, 11, 31);
    
    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const yyyy = d.getFullYear();
      const mm = String(d.getMonth() + 1).padStart(2, '0');
      const dd = String(d.getDate()).padStart(2, '0');
      contributions.push({
        date: `${yyyy}-${mm}-${dd}`,
        count: 0,
        level: 0,
      });
    }
    return contributions;
  };

  const handleTransformData = (data) => {
    if (!data || data.length === 0) {
      return generateEmptyContributions(year);
    }
    return data;
  };

  // Standard theme colors matching classic light/dark GitHub colors
  const githubTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section 
      id="github" 
      className="bg-white dark:bg-black py-20 px-4 sm:px-6 text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-neutral-900 selection:bg-lime-400 selection:text-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left mb-12 animate-fade-in"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-4">
            GitHub Contributions
          </h2>
          <p className="text-2xl font-serif text-neutral-700 dark:text-neutral-300 leading-relaxed font-light">
            Live tracker of open source commits and contributions.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-stretch md:items-start justify-center">
          {/* Calendar Card Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full flex-grow bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 transition-colors duration-300"
          >
            {/* Scrollable wrapper for mobile responsive behavior */}
            <div className="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-800 pb-2">
              <div className="min-w-[720px] lg:min-w-0 flex justify-center">
                <GitHubCalendar
                  username="AnkitAnand360"
                  year={year}
                  colorScheme={isDarkMode ? "dark" : "light"}
                  theme={githubTheme}
                  blockSize={13}
                  blockMargin={4}
                  transformData={handleTransformData}
                />
              </div>
            </div>
          </motion.div>

          {/* Year Selector Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-row md:flex-col gap-2 w-full md:w-32 justify-center md:justify-start shrink-0 px-2 md:px-0"
          >
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition duration-200 flex-1 md:w-full text-center md:text-left cursor-pointer ${
                  year === y
                    ? "bg-lime-500 dark:bg-lime-400 text-black shadow-md font-bold"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-lime-600 dark:hover:text-lime-400 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                }`}
              >
                {y}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default GithubActivity;
