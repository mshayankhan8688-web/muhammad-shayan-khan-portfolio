export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const site = {
  name: "Muhammad Shayan Khan",
  role: "Aspiring Software Engineer | Frontend Developer",
  summary:
    "I'm a Software Engineering student passionate about building responsive, user-friendly web applications. I enjoy developing frontend interfaces and continuously improving my backend development skills through practical projects.",
  email: "mshayankhan8688@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-shayan-khan-979317393",
  github: "https://github.com/mshayankhan8688-web",
  portfolio: "https://mshayankhan8688-web.github.io/muhammad-shayan-khan-portfolio/",
  resumePath: `${basePath}/Muhammad-Shayan-Khan-CV.pdf`,
};

export const projects = [
  {
    title: "AI Driven Restaurant Management System",
    description:
      "Final year project for running a restaurant from one app: menu, cart, kitchen display, and dashboard.",
    detail:
      "The live demo is the React frontend. The same GitHub repository also contains Express and MongoDB routes for menu, orders, staff, and inventory, plus Django routes for forecast, waste, sentiment, and chat. Those services are in the code. They are not a separate live product.",
    tech: ["React", "TypeScript", "Vite", "Tailwind", "Node.js", "Express", "MongoDB", "Django"],
    gradient: "from-rose-500 via-orange-700 to-stone-900",
    githubUrl: "https://github.com/mshayankhan8688-web/smart-ai-cloud-restaurant-fyp",
    demoUrl: "https://smart-ai-cloud-restaurant-fyp.vercel.app",
  },
  {
    title: "Storefront Demo",
    description:
      "A responsive store page where a shopper can browse products, add them to a cart, and confirm checkout.",
    detail:
      "Checkout stays on the page and does not take a payment or save an order on a server. This is a frontend demo, not a full shop.",
    tech: ["Next.js", "React", "TypeScript"],
    gradient: "from-teal-500 via-cyan-700 to-slate-900",
    githubUrl:
      "https://github.com/mshayankhan8688-web/muhammad-shayan-khan-portfolio/blob/main/src/components/demos/StoreDemo.tsx",
    demoUrl: `${basePath}/demos/store`,
  },
  {
    title: "API Console Demo",
    description:
      "A page that sends a sample request and shows the JSON response in the browser.",
    detail: "This is a frontend console. It is not a deployed REST API or a database.",
    tech: ["Next.js", "React", "TypeScript"],
    gradient: "from-amber-400 via-orange-600 to-stone-900",
    githubUrl:
      "https://github.com/mshayankhan8688-web/muhammad-shayan-khan-portfolio/blob/main/src/components/demos/ApiDemo.tsx",
    demoUrl: `${basePath}/demos/api`,
  },
  {
    title: "Dashboard Demo",
    description:
      "A page of sample results with search and a simple bar view.",
    detail: "The rows are sample data on the page. This demo does not scrape websites.",
    tech: ["Next.js", "React", "TypeScript"],
    gradient: "from-indigo-500 via-blue-700 to-slate-900",
    githubUrl:
      "https://github.com/mshayankhan8688-web/muhammad-shayan-khan-portfolio/blob/main/src/components/demos/DashboardDemo.tsx",
    demoUrl: `${basePath}/demos/dashboard`,
  },
] as const;
