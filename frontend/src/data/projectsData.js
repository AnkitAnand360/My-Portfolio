export const projectsData = [
  {
    id: "wanderlust-airbnb",
    title: "WanderLust abn",
    desc: "A full-featured Airbnb clone with room bookings, reviews, and interactive maps.",
    longDesc: "WanderLust is a sophisticated room rental application designed to provide users with a complete lodging booking journey. Operating as a marketplace for hosts and guests, the application allows users to discover, list, review, and reserve unique accommodations worldwide, integrating interactive geography and modern database design.",
    github: "https://github.com/AnkitAnand360/wanderLust-airbnb",
    liveUrl: "https://wanderlust-airbnb-production.up.railway.app",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-web-development-concept-with-code-on-screen-34289-large.mp4",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&auto=format&fit=crop&q=80"
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-code-running-on-a-computer-screen-22243-large.mp4",
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80"
    ],
    role: "Designer & Developer",
    year: "2026",
    client: "Open Source / Portfolio",
    tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Express.js", "Mongoose"],
    challenges: "Building a fluid experience that switches perfectly between light and dark themes while asynchronously showing custom live-loaded GitHub calendar SVGs without layout delays or blocking UI transitions.",
    solutions: "Engineered a custom theme observer via MutationObserver to coordinate colors in real-time, and added smart fallback loaders to keep layouts stable even under high latency."
  },
  {
    id: "spotify-clone",
    title: "Spotify Clone Simple",
    desc: "A clean music player web interface clone built using HTML, CSS, and vanilla JavaScript.",
    longDesc: "A responsive, pixel-perfect frontend replica of the classic Spotify desktop player. The application focuses on interactive layout fidelity, custom media playback mechanics, play/pause state synchronization, and slider manipulation.",
    github: "https://github.com/AnkitAnand360/Spotify-Clone-Simple",
    image: "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?w=1200&auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-programmer-typing-on-a-keyboard-22242-large.mp4",
    images: [
      "https://images.unsplash.com/photo-1614680376593-902f74fa0d41?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&auto=format&fit=crop&q=80"
    ],
    role: "Frontend Developer",
    year: "2024",
    client: "UI Practice",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript"],
    challenges: "Developing custom browser controls for play, pause, progress slider updates, and volume configurations that are synchronized across track listings, without using external player libraries or frameworks.",
    solutions: "Utilized the HTML5 Audio API wrapped in custom event listeners to capture track duration, updating progress ranges dynamically on audio tick intervals."
  },
  {
    id: "stopwatch",
    title: "Stopwatch",
    desc: "A stopwatch web application with precise start, pause, and reset options.",
    longDesc: "A minimalist utility app that measures time offsets with high precision, featuring lap-recording systems, visual markers, and fluid CSS transitions.",
    github: "https://github.com/AnkitAnand360/Stopwatch",
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=1200&auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-technological-interface-22340-large.mp4",
    images: [
      "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&auto=format&fit=crop&q=80"
    ],
    role: "Developer",
    year: "2024",
    client: "Utility App",
    tech: ["HTML5", "CSS3", "JavaScript"],
    challenges: "Keeping timing intervals strictly accurate without lagging or drifts caused by JavaScript thread blockages (event loop queuing).",
    solutions: "Calculated elapsed time by tracking offsets from the high-resolution performance timestamp (`performance.now()`) rather than relying on strict `setInterval` iterations."
  },
  {
    id: "password-generator",
    title: "Password Generator",
    desc: "A responsive generator web app that constructs secure, highly customizable random passwords.",
    longDesc: "A security tool that builds cryptographically secure random credentials according to custom constraints (numbers, casing, symbols, and length), featuring instant clipboard integrations.",
    github: "https://github.com/AnkitAnand360/Password-Generator",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
    video: "https://assets.mixkit.co/videos/preview/mixkit-typing-code-on-a-laptop-40348-large.mp4",
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563986768494-4ded2763ff3e?w=1200&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&auto=format&fit=crop&q=80"
    ],
    role: "Developer",
    year: "2024",
    client: "Security Tool",
    tech: ["React.js", "Tailwind CSS", "JavaScript"],
    challenges: "Managing state mutations elegantly as the user changes multiple rules in real-time, while guaranteeing that the generator complies with strict password criteria.",
    solutions: "Designed a clean React hook layout utilizing `useCallback` to generate passwords instantly whenever sliders or switches trigger state updates."
  }
];
