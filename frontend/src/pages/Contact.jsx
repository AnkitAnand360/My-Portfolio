import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="pt-24 bg-white dark:bg-black text-neutral-900 dark:text-white min-h-screen transition-colors duration-300">
      <ContactSection />
      <Footer />
    </div>
  );
}

export default Contact;