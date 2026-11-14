export const projectsData = [
  {
    id: "wanderlust-airbnb",
    title: "WanderLust abn",
    desc: "A full-featured Airbnb clone with room bookings, reviews, and interactive maps.",
    longDesc: "WanderLust is a sophisticated room rental application designed to provide users with a complete lodging booking journey. Operating as a marketplace for hosts and guests, the application allows users to discover, list, review, and reserve unique accommodations worldwide, integrating interactive geography and modern database design.",
    github: "https://github.com/AnkitAnand360/wanderLust-airbnb",
    liveUrl: "https://wanderlust-airbnb-production.up.railway.app",
    image: "/projects/wanderlust/wanderlust-1.png",
    video: "/wanderlust_video.mp4",
    images: [
      "/projects/wanderlust/wanderlust-1.png",
      "/projects/wanderlust/wanderlust-2.png",
      "/projects/wanderlust/wanderlust-3.png",
      "/projects/wanderlust/wanderlust-4.png",
      "/projects/wanderlust/wanderlust-5.png",
      "/projects/wanderlust/wanderlust-6.png",
      "/projects/wanderlust/wanderlust-7.png",
      "/projects/wanderlust/wanderlust-8.png",
      "/projects/wanderlust/wanderlust-9.png",
      "/projects/wanderlust/wanderlust-10.png"
    ],
    role: "Lead Full Stack Developer",
    year: "2025",
    client: "Personal Project",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "Mapbox API"],
    challenges: "Handling complex asynchronous mapping updates alongside responsive server-side view compilation was challenging. Specifically, rendering dynamic map pins with high-performance query execution times over hundreds of listings required optimizing Mongoose indexes.",
    solutions: "Implemented Mapbox SDK client-side to cache and render geocodes, and added compound indexes in MongoDB on coordinates and categories, reducing overall page load latency by 40%."
  },
  {
    id: "my-portfolio",
    title: "My Portfolio",
    desc: "A premium developer portfolio showing skills, journey, and contact fields.",
    longDesc: "A bespoke, lightning-fast digital canvas designed to highlight full-stack developments, coding milestones, and open-source contributions. It features high-end custom styling, dynamic theme switching, responsive charts, and elegant user contact gateways.",
    github: "https://github.com/AnkitAnand360/My-Portfolio",
    liveUrl: "https://devsphere-ankit.vercel.app",
    image: "/projects/my-portfolio/portfolio-hero.png",
    video: "/portfolio_video.mp4",
    images: [
      "/projects/my-portfolio/portfolio-hero.png",
      "/projects/my-portfolio/portfolio-projects.png",
      "/projects/my-portfolio/portfolio-skills.png",
      "/projects/my-portfolio/portfolio-stats.png",
      "/projects/my-portfolio/portfolio-github.png",
      "/projects/my-portfolio/portfolio-contact.png"
    ],
    role: "Designer & Developer",
    year: "2026",
    client: "Open Source / Portfolio",
    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Express.js", "Mongoose"],
    challenges: "Building a fluid experience that switches perfectly between light and dark themes while asynchronously showing custom live-loaded GitHub calendar SVGs without layout delays or blocking UI transitions.",
    solutions: "Engineered a custom theme observer via MutationObserver to coordinate colors in real-time, and added smart fallback loaders to keep layouts stable even under high latency."
  },
  {
    id: "study-group-matcher",
    title: "Study Group Matcher",
    desc: "An AI-powered peer study matchmaking and collaborative study planning platform.",
    longDesc: "Study Group Matcher connects students based on their skills, learning goals, and subject compatibility. It features an automated study planner powered by the Gemini 2.5 API, real-time group messaging with Socket.IO, interactive analytics dashboards with Recharts, and customizable scheduling.",
    github: "https://github.com/AnkitAnand360/STUDY-GROUP-MATCHER",
    liveUrl: "https://github.com/AnkitAnand360/STUDY-GROUP-MATCHER",
    image: "/projects/study-group-matcher/study-matcher-features.jpg",
    video: "/study_group_matcher.mp4",
    images: [
      "/projects/study-group-matcher/study-matcher-dashboard.jpg",
      "/projects/study-group-matcher/study-matcher-features.jpg",
      "/projects/study-group-matcher/study-matcher-2.png",
      "/projects/study-group-matcher/study-matcher-3.png",
      "/projects/study-group-matcher/study-matcher-4.png",
      "/projects/study-group-matcher/study-matcher-5.png"
    ],
    role: "Full Stack AI Developer",
    year: "2025",
    client: "AI / EdTech Project",
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "Gemini API", "Socket.IO", "Tailwind CSS"],
    challenges: "Developing an intelligent matchmaking algorithm that computes multi-factor compatibility scores across student profiles while keeping real-time Socket.IO group communications synchronized and low-latency.",
    solutions: "Leveraged Gemini 2.5 Flash for rapid compatibility explanations and automated daily study plan generation, paired with an event-driven Socket.IO architecture for instant collaborative messaging."
  }
];
