"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LuArrowUpRight, LuGithub } from "react-icons/lu";

export type ProjectCardProps = {
  title: string;
  description: string;
  detail: string;
  tech: readonly string[];
  gradient: string;
  githubUrl: string;
  demoUrl: string;
};

export function ProjectCard({
  title,
  description,
  detail,
  tech,
  gradient,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  const reduce = useReducedMotion();
  const externalDemo = demoUrl.startsWith("http");

  return (
    <motion.article
      whileHover={reduce ? undefined : { y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white/70 dark:border-white/10 dark:bg-white/5"
    >
      <div className={`relative h-44 bg-gradient-to-br ${gradient}`} aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_42%)]" />
        <div className="absolute right-4 bottom-4 left-4 h-px bg-white/40" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-2xl tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-paper/70">{description}</p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/60 dark:text-paper/60">{detail}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <li
              key={item}
              className="rounded-full bg-pine/10 px-3 py-1 text-xs font-medium text-pine"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-sm transition hover:border-pine hover:text-pine dark:border-white/20"
          >
            <LuGithub aria-hidden />
            GitHub
          </a>
          <a
            href={demoUrl}
            {...(externalDemo ? { target: "_blank", rel: "noreferrer" } : {})}
            className="inline-flex items-center gap-2 rounded-full bg-pine px-4 py-2 text-sm text-paper transition hover:bg-pine/90"
          >
            {externalDemo ? "Live site" : "Open demo"}
            <LuArrowUpRight aria-hidden />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
