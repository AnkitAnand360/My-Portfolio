function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 dark:bg-[#0d0d15] py-20 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-slate-800 dark:text-white">
          About Me
        </h2>

        <div className="bg-white border border-slate-200/60 dark:border dark:border-white/5 dark:bg-[#181824] text-slate-900 dark:text-white shadow-md dark:shadow-xl rounded-xl p-8 transition-colors duration-300">
          <p className="text-lg leading-8 text-slate-700 dark:text-gray-300">
            I am Ankit Anand, a Full Stack MERN Developer passionate about
            building scalable web applications and solving real-world
            software engineering problems.
            <br /><br />
            I enjoy working with React, Node.js, Express.js and MongoDB
            to create modern applications that provide excellent user
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;