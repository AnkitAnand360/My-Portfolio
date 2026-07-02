export const blogData = [
  {
    id: "how-i-built-my-portfolio",
    title: "How I Built My Portfolio: Editorial Typography & Lime Accents",
    desc: "A deep dive into building a high-performance web portfolio with Tailwind CSS, custom Google Fonts, and a client-side simulated AI Assistant.",
    category: "Design",
    date: "July 2, 2026",
    readTime: "5 min read",
    tags: ["React", "Tailwind CSS", "Aesthetics"],
    content: [
      {
        type: "paragraph",
        text: "When designing a personal developer portfolio, it's easy to fall into the trap of building a generic template. For this redesign, I chose to take a highly editorial approach: blending classic serif typography with a pure black backdrop, high-contrast layouts, and dynamic lime green highlights.",
      },
      {
        type: "heading",
        text: "1. The Typography System",
      },
      {
        type: "paragraph",
        text: "Typography carries the character of a page. Rather than loading system default sans fonts, I integrated three distinct Google Fonts inside the document head: Syne for structural display tags, Playfair Display for editorial headers, and Plus Jakarta Sans for reading text. Together, they create a balanced rhythm between tech-modernity and high-end design.",
      },
      {
        type: "heading",
        text: "2. The Theme Switcher",
      },
      {
        type: "paragraph",
        text: "A dark theme looks great in dim rooms, but light themes are easier to read under sunlight. I built a 3-state cycle switcher (Light -> Dark -> System) that saves the choice to localStorage and monitors media preferences in real-time. CSS transition values prevent harsh screen flashes.",
      },
      {
        type: "code",
        code: `// Media preference listener inside React useEffect
const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const handleChange = () => {
  if (theme === "system") {
    applyTheme("system");
  }
};
mediaQuery.addEventListener("change", handleChange);`,
        language: "javascript",
      },
      {
        type: "heading",
        text: "3. Simulating the Chat Assistant",
      },
      {
        type: "paragraph",
        text: "To make the page interactive, I built a custom AI Chat Assistant. By handling questions locally via rule-matching and wrapping responses in slight delays, the client-side widget feels like a live model while avoiding network API load times completely.",
      },
    ],
  },
  {
    id: "mern-authentication-guide",
    title: "The Complete Guide to MERN Authentication",
    desc: "Step-by-step tutorial on securing Express servers using JWT cookies, password hashing with bcrypt, and state sync in React.",
    category: "Backend",
    date: "June 25, 2026",
    readTime: "8 min read",
    tags: ["MERN", "Security", "Express", "JWT"],
    content: [
      {
        type: "paragraph",
        text: "User security is the core requirement of any commercial MERN (MongoDB, Express, React, Node) application. This article breaks down how to set up password hashing and secure token transport using HttpOnly cookies.",
      },
      {
        type: "heading",
        text: "1. Secure Password Storage with Bcrypt",
      },
      {
        type: "paragraph",
        text: "Never store plaintext credentials in your database. Instead, hash passwords using bcrypt during registration before writing documents to MongoDB. A salt round value of 10-12 balances security and CPU processing speed.",
      },
      {
        type: "code",
        code: `// Hashing passwords on user registration schemas
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});`,
        language: "javascript",
      },
      {
        type: "heading",
        text: "2. Stateful Transport via HttpOnly Cookies",
      },
      {
        type: "paragraph",
        text: "Storing JSON Web Tokens (JWT) in localStorage makes them vulnerable to Cross-Site Scripting (XSS) attacks. A safer approach is transporting tokens within cookies set to 'httpOnly: true' and 'secure: true', preventing client-side scripts from reading the payload.",
      },
      {
        type: "callout",
        text: "🔑 Security Note: Always set the cookie 'sameSite' flag to 'strict' or 'lax' to defend your REST endpoints against Cross-Site Request Forgery (CSRF) exploits.",
      },
    ],
  },
  {
    id: "react-performance-tips",
    title: "Mastering React Performance: Image Decoding & Reflow Prevention",
    desc: "Practical performance micro-optimization tips for achieving a 100/100 Lighthouse score on modern frontend applications.",
    category: "Frontend",
    date: "May 18, 2026",
    readTime: "6 min read",
    tags: ["React", "Lighthouse", "Performance"],
    content: [
      {
        type: "paragraph",
        text: "Achieving a 100/100 Lighthouse performance grade requires optimizing browser painting threads, minimizing layout reflow blocks, and loading resources only when necessary.",
      },
      {
        type: "heading",
        text: "1. Non-Blocking Image Decoding",
      },
      {
        type: "paragraph",
        text: "Large hero illustrations and profile headers can block the main browser thread during image decode operations. By applying 'decoding=\"async\"' directly to image elements, the browser decodes images in secondary helper threads, speeding up initial content painting.",
      },
      {
        type: "code",
        code: `<img 
  src={profileImage} 
  alt="Profile" 
  loading="eager" 
  decoding="async" 
  className="w-full object-cover" 
/>`,
        language: "html",
      },
      {
        type: "heading",
        text: "2. Preventing Layout Reflow",
      },
      {
        type: "paragraph",
        text: "Layout reflow occurs when elements change size, forcing the browser to recalculate the position of all elements on the screen. To prevent layout shifts, always specify aspect ratios, height/width attributes, or use fixed containers during asset load states.",
      },
      {
        type: "callout",
        text: "🚀 Tip: Leverage CSS content-visibility: auto on secondary sections to tell the browser to skip layout and render operations for blocks currently off-screen.",
      },
    ],
  },
];
