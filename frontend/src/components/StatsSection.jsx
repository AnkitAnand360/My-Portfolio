function StatsSection() {
  const stats = [
    {
      number: "10+",
      title: "Projects",
    },

    {
      number: "500+",
      title: "DSA Problems",
    },

    {
      number: "3+",
      title: "MERN Applications",
    },

    {
      number: "1000+",
      title: "Coding Hours",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#07070a] text-slate-900 dark:text-white transition-colors duration-300">

      <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">
        My Journey
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-slate-50 border border-slate-100 dark:border dark:border-white/5 dark:bg-[#11111a] p-8 rounded-2xl text-center hover:scale-105 transition duration-300 shadow-sm hover:shadow-md dark:shadow-lg"
          >

            <h3 className="text-4xl font-bold text-cyan-500 dark:text-cyan-400 mb-3">
              {stat.number}
            </h3>

            <p className="text-slate-600 dark:text-gray-300 font-medium">
              {stat.title}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default StatsSection;