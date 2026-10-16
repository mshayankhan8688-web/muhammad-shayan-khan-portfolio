"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiCss,
  SiDjango,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFlask,
  SiGit,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

const groups: { title: string; items: { name: string; icons: IconType[] }[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "React", icons: [SiReact] },
      { name: "Next.js", icons: [SiNextdotjs] },
      { name: "Tailwind CSS", icons: [SiTailwindcss] },
      { name: "HTML/CSS", icons: [SiHtml5, SiCss] },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Python (Django, FastAPI, Flask)", icons: [SiPython, SiDjango, SiFastapi, SiFlask] },
      { name: "Node.js", icons: [SiNodedotjs] },
      { name: "Express", icons: [SiExpress] },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "PostgreSQL", icons: [SiPostgresql] },
      { name: "MongoDB", icons: [SiMongodb] },
      { name: "MySQL", icons: [SiMysql] },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icons: [SiGit] },
      { name: "Docker", icons: [SiDocker] },
      { name: "AWS", icons: [FaAws] },
      { name: "Postman", icons: [SiPostman] },
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
          and Technology (UMT), Lahore (2022–2026). I completed my FSc at Forman Christian College
          (FCC), Lahore (2020–2022). I build scalable web applications using React and Next.js on
          the frontend, and robust backends with Python (Django/FastAPI) and Node.js.
        </p>
      </motion.div>

      <div id="skills" className="mt-12 scroll-mt-28">
        <h2 className="font-display text-3xl tracking-tight">Skills</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {groups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-ink/10 bg-white/60 p-5 dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="font-display text-2xl">{group.title}</h3>
            <ul className="mt-4 grid gap-2">
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
