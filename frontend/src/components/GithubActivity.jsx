import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";

function GithubActivity() {
  // Use 2026 as default current year since it is 2026, or fallback to current year
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    // Initial check
    setIsDarkMode(document.documentElement.classList.contains("dark"));

    // Watch for theme class changes on documentElement
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

  // Harmonious theme matching GitHub's classic contributions look
  const githubTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section 
      id="github" 
      className="bg-slate-50 dark:bg-[#0d0d15] py-20 px-6 text-slate-900 dark:text-white transition-colors duration-300 border-t border-slate-200/40 dark:border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            GitHub Contributions
          </h2>
          <p className="text-slate-600 dark:text-gray-400 max-w-xl mx-auto">
            My open source contributions and coding activity from GitHub.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
          {/* Calendar Card Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full flex-grow bg-white dark:bg-[#181824] border border-slate-200/60 dark:border-white/5 rounded-2xl shadow-sm dark:shadow-lg p-6 md:p-8"
          >
            {/* Scrollable wrapper for mobile responsive behavior */}
            <div className="overflow-x-auto w-full scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 pb-2">
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
            className="flex flex-row md:flex-col gap-2 w-full md:w-32 justify-center md:justify-start shrink-0"
          >
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition duration-200 w-full text-center md:text-left cursor-pointer ${
                  year === y
                    ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                    : "text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-white/5"
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
