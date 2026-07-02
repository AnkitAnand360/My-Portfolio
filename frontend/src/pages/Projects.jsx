import ProjectsSection from "../components/ProjectsSection";
import Footer from "../components/Footer";

function Projects() {
  return (
    <div className="pt-24 bg-white dark:bg-black text-neutral-900 dark:text-white min-h-screen transition-colors duration-300">
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default Projects;