"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LuArrowDown, LuDownload } from "react-icons/lu";
import { site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="mx-auto flex max-w-6xl scroll-mt-24 flex-col justify-start px-6 pt-16 pb-24 sm:pt-24">
      <motion.div
        initial={reduce ? false : { opacity: 1, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-3xl"
      >
        <p className="text-sm font-medium tracking-[0.18em] text-pine uppercase">Portfolio</p>
        <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight text-balance text-ink sm:text-7xl dark:text-paper">
          Hi, I&apos;m <span className="text-pine dark:text-[#8fd9cf]">{site.name}</span>
        </h1>
        <p className="mt-5 text-lg text-ink/80 sm:text-xl dark:text-paper/80">{site.role}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg dark:text-paper/70">
          I build scalable web applications using React and Next.js on the frontend,
          <br className="hidden sm:block" /> and robust backends with Python (Django/FastAPI) and Node.js.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-pine px-6 py-3 text-sm font-medium text-paper transition hover:bg-pine/90"
          >
            View My Work
            <LuArrowDown aria-hidden />
          </a>
          <a
            href={site.resumePath}
            download="Muhammad-Shayan-Khan-CV.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium transition hover:border-pine hover:text-pine dark:border-white/20"
          >
            Download Resume
            <LuDownload aria-hidden />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
