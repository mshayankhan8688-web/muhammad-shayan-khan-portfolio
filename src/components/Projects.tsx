"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/site";

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <motion.div
        initial={reduce ? false : { opacity: 1, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-medium tracking-[0.18em] text-pine uppercase">Work</p>
        <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Featured Projects</h2>
      </motion.div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
