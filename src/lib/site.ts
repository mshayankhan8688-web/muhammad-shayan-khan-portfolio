export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "Muhammad Shayan Khan",
  role: "Full Stack Developer | Python Enthusiast",
  summary:
    "I build scalable web applications using React and Next.js on the frontend, and robust backends with Python (Django/FastAPI) and Node.js.",
  email: "mshayankhan8688@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-shayan-khan-979317393",
  github: "https://github.com/mshayankhan8688-web",
  resumePath: `${basePath}/Muhammad-Shayan-Khan-CV.pdf`,
};

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A Next.js storefront demo. Shoppers can browse products, add them to a cart, and complete checkout on the page.",
    tech: ["Next.js", "React", "TypeScript"],
    gradient: "from-teal-500 via-cyan-700 to-slate-900",
    githubUrl:
      "https://github.com/mshayankhan8688-web/muhammad-shayan-khan-portfolio/blob/main/src/components/demos/StoreDemo.tsx",
    demoUrl: `${basePath}/demos/store`,
  },
  {
    title: "RESTful API Service",
    description:
      "A Next.js API console demo. You can send a request and read the JSON response in the browser.",
    tech: ["Next.js", "React", "TypeScript"],
    gradient: "from-amber-400 via-orange-600 to-stone-900",
    githubUrl:
      "https://github.com/mshayankhan8688-web/muhammad-shayan-khan-portfolio/blob/main/src/components/demos/ApiDemo.tsx",
    demoUrl: `${basePath}/demos/api`,
  },
  {
    title: "Data Scraper & Dashboard",
    description:
      "A Next.js dashboard demo with sample page results, search, and a simple bar view.",
    tech: ["Next.js", "React", "TypeScript"],
    gradient: "from-indigo-500 via-blue-700 to-slate-900",
    githubUrl:
      "https://github.com/mshayankhan8688-web/muhammad-shayan-khan-portfolio/blob/main/src/components/demos/DashboardDemo.tsx",
    demoUrl: `${basePath}/demos/dashboard`,
  },
  {
    title: "AI Driven Restaurant Management System",
    description:
      "Final year project. A React app for a restaurant, with a menu, cart, kitchen display, and dashboard. This is the live site.",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    gradient: "from-rose-500 via-orange-700 to-stone-900",
    githubUrl: "https://github.com/mshayankhan8688-web/smart-ai-cloud-restaurant-fyp",
    demoUrl: "https://smart-ai-cloud-restaurant-fyp.vercel.app",
  },
  {
    title: "Restaurant Orders API",
    description:
      "Express routes and MongoDB models for menu, orders, staff, and inventory in the AI Driven Restaurant Management System.",
    tech: ["Node.js", "Express", "MongoDB"],
    gradient: "from-emerald-500 via-green-800 to-slate-900",
    githubUrl:
      "https://github.com/mshayankhan8688-web/smart-ai-cloud-restaurant-fyp/tree/main/restaurant-pos/backend",
    demoUrl: "https://smart-ai-cloud-restaurant-fyp.vercel.app",
  },
  {
    title: "Restaurant Analytics",
    description:
      "A Django service in the AI Driven Restaurant Management System, with routes for sales forecast, waste and revenue, sentiment, and chat.",
    tech: ["Python", "Django", "pandas"],
    gradient: "from-violet-500 via-purple-800 to-slate-900",
    githubUrl:
      "https://github.com/mshayankhan8688-web/smart-ai-cloud-restaurant-fyp/tree/main/restaurant-pos/ai-backend",
    demoUrl: "https://smart-ai-cloud-restaurant-fyp.vercel.app",
  },
] as const;
