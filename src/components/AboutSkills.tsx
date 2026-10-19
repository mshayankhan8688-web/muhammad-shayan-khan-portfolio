"use client";

import { motion, useReducedMotion } from "framer-motion";
import { education } from "@/lib/site";
import type { IconType } from "react-icons";
import {
  SiCss,
  SiDjango,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const groups: {
  title: string;
  note: string;
  wide?: boolean;
  items: { name: string; icons: IconType[] }[];
}[] = [
  {
    title: "Frontend",
    note: "Used to build this portfolio and the demos",
    wide: true,
    items: [
      { name: "HTML and CSS", icons: [SiHtml5, SiCss] },
      { name: "JavaScript", icons: [SiJavascript] },
      { name: "TypeScript", icons: [SiTypescript] },
      { name: "React", icons: [SiReact] },
      { name: "Next.js", icons: [SiNextdotjs] },
      { name: "Tailwind CSS", icons: [SiTailwindcss] },
    ],
  },
  {
    title: "Backend",
    note: "Present in the restaurant repository",
    items: [
      { name: "Node.js", icons: [SiNodedotjs] },
      { name: "Express", icons: [SiExpress] },
      { name: "Python", icons: [SiPython] },
      { name: "Django", icons: [SiDjango] },
    ],
  },
  {
    title: "Database",
    note: "Present in the restaurant repository",
    items: [{ name: "MongoDB", icons: [SiMongodb] }],
  },
  {
    title: "Tools",
    note: "Used for this work",
    items: [
      { name: "Git", icons: [SiGit] },
      { name: "GitHub", icons: [SiGithub] },
    ],
  },
];

export function AboutSkills() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <motion.div
        initial={reduce ? false : { opacity: 1, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-medium tracking-[0.18em] text-pine uppercase">About</p>
        <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">About &amp; Skills</h2>
        <p className="mt-4 max-w-2xl text-ink/75 dark:text-paper/75">
          I&apos;m Muhammad Shayan Khan, a bachelor&apos;s student at the University of Management
          and Technology (UMT), Lahore (2022–2026). I completed FSc at Forman Christian College
          (FCC), Lahore (2020–2022). I focus on responsive frontend work with React and Next.js,
          and I am building backend skills through my restaurant project, which includes Express,
          MongoDB, and Django in the same repository.
        </p>
      </motion.div>

      <div id="education" className="mt-14 scroll-mt-28">
        <p className="text-sm font-medium tracking-[0.18em] text-pine uppercase">Education</p>
        <h2 className="mt-3 font-display text-4xl tracking-tight">Education</h2>
        <div className="mt-6 grid gap-4">
          {education.map((item) => (
            <article
              key={item.credential}
              className="rounded-3xl border border-ink/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl">{item.credential}</h3>
                <p className="text-sm font-medium text-pine">{item.years}</p>
              </div>
              <p className="mt-1 text-sm text-ink/75 dark:text-paper/75">{item.school}</p>
            </article>
          ))}
        </div>
      </div>

      <div id="skills" className="mt-12 scroll-mt-28">
        <h2 className="font-display text-3xl tracking-tight">Skills</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/75 dark:text-paper/75">
          Frontend is the work I can show in the browser. Node.js, Express, MongoDB, Python, and Django
          appear in the restaurant repository. They are not a separate live service.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {groups.map((group) => (
          <article
            key={group.title}
            className={`rounded-3xl border border-ink/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/5 ${group.wide ? "sm:col-span-2" : ""}`}
          >
            <h3 className="font-display text-2xl">{group.title}</h3>
            <p className="mt-1 text-sm text-ink/70 dark:text-paper/70">{group.note}</p>
            <ul className={`mt-4 grid gap-2 ${group.wide ? "sm:grid-cols-2" : ""}`}>
              {group.items.map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={reduce ? undefined : { y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                  className="flex items-center gap-3 rounded-2xl bg-paper px-3 py-2.5 text-sm dark:bg-white/5"
                >
                  <span className="flex shrink-0 items-center gap-1.5 text-pine">
                    {item.icons.map((Icon, index) => (
                      <Icon key={`${item.name}-${index}`} className="text-lg" aria-hidden />
                    ))}
                  </span>
                  <span className="min-w-0">{item.name}</span>
                </motion.li>
              ))}
            </ul>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}
