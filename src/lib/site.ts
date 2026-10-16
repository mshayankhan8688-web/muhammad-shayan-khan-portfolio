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
      "A full-stack storefront for browsing products, managing a cart, and checking out, with a Node.js API and MongoDB for catalog data.",
    tech: ["Next.js", "Node.js", "MongoDB"],
    gradient: "from-teal-500 via-cyan-700 to-slate-900",
    githubUrl: "https://github.com/mshayankhan8688-web",
    demoUrl: `${basePath}/demos/store`,
  },
  {
    title: "RESTful API Service",
    description:
      "A Python API for creating and querying resources, with FastAPI routes, PostgreSQL storage, and a Docker setup for local runs.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    gradient: "from-amber-400 via-orange-600 to-stone-900",
    githubUrl: "https://github.com/mshayankhan8688-web",
    demoUrl: `${basePath}/demos/api`,
  },
  {
    title: "Data Scraper & Dashboard",
    description:
      "A Python utility that collects public page data with BeautifulSoup and presents the results in a React dashboard.",
    tech: ["Python", "BeautifulSoup", "React"],
    gradient: "from-indigo-500 via-blue-700 to-slate-900",
    githubUrl: "https://github.com/mshayankhan8688-web",
    demoUrl: `${basePath}/demos/dashboard`,
  },
] as const;
