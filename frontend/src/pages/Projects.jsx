import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";

function Projects() {
  return (
    <div className="pt-24 bg-slate-50 text-slate-900 dark:bg-[#0d0d15] dark:text-white min-h-screen transition-colors duration-300">
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default Projects;