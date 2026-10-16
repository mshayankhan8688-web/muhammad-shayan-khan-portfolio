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
] as const;
