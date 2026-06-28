import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="pt-24 bg-slate-50 text-slate-900 dark:bg-[#0d0d15] dark:text-white min-h-screen transition-colors duration-300">
      <AboutSection />
      <Footer />
    </div>
  );
}

export default About;