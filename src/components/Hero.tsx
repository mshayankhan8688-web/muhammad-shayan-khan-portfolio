"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LuArrowDown, LuDownload, LuGithub, LuLinkedin, LuMail } from "react-icons/lu";
import { education, site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="mx-auto flex max-w-6xl scroll-mt-24 flex-col justify-start px-6 pt-16 pb-24 sm:pt-24">
      <motion.div
        initial={reduce ? false : { opacity: 1, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]"
      >
        <div>
        <p className="text-sm font-medium tracking-[0.18em] text-pine uppercase">Portfolio</p>
        <h1 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-balance text-ink sm:text-6xl lg:text-7xl dark:text-paper">
          Hi, I&apos;m <span className="text-pine dark:text-[#8fd9cf]">{site.name}</span>
        </h1>
        <p className="mt-5 text-lg text-ink/80 sm:text-xl dark:text-paper/80">{site.role}</p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg dark:text-paper/70">
          {site.summary}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-pine px-6 py-3 text-sm font-medium text-paper transition hover:bg-pine/90"
          >
            View My Projects
            <LuArrowDown aria-hidden />
          </a>
          <a
            href={site.resumePath}
            download="Muhammad-Shayan-Khan-CV.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium transition hover:border-pine hover:text-pine dark:border-white/20"
          >
            Download My CV
            <LuDownload aria-hidden />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium transition hover:border-pine hover:text-pine dark:border-white/20"
          >
            Contact Me
            <LuMail aria-hidden />
          </a>
        </div>
        <div className="mt-6 flex gap-3">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition hover:border-pine hover:text-pine dark:border-white/20"
          >
            <LuGithub aria-hidden />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 transition hover:border-pine hover:text-pine dark:border-white/20"
          >
            <LuLinkedin aria-hidden />
          </a>
        </div>
        </div>
        <aside className="rounded-3xl border border-ink/10 bg-white/70 p-5 dark:border-white/10 dark:bg-white/5">
          <h2 className="text-sm font-medium tracking-[0.18em] text-pine uppercase">At a glance</h2>
          <dl className="mt-4 grid gap-4">
            {education.map((item) => (
              <div key={item.credential}>
                <dt className="text-sm font-medium">{item.credential}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-ink/75 dark:text-paper/75">
                  {item.school}
                  <span className="mt-1 block font-medium text-pine">{item.years}</span>
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </motion.div>
    </section>
  );
}
