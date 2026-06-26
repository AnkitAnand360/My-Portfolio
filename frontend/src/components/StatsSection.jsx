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
    <section className="py-20 bg-slate-950 text-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        My Journey
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">

        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-slate-900 p-8 rounded-2xl text-center hover:scale-105 transition duration-300 shadow-lg"
          >

            <h3 className="text-4xl font-bold text-cyan-400 mb-3">
              {stat.number}
            </h3>

            <p className="text-gray-300">
              {stat.title}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default StatsSection;