import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="pt-24 bg-slate-50 text-slate-900 dark:bg-[#0d0d15] dark:text-white min-h-screen transition-colors duration-300">
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Contact;