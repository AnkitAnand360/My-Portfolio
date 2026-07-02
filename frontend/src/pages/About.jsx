import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="pt-24 bg-white dark:bg-black text-neutral-900 dark:text-white min-h-screen transition-colors duration-300">
      <AboutSection />
      <Footer />
    </div>
  );
}

export default About;