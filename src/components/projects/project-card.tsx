"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { ProjectGallery } from "@/components/projects/project-gallery";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  index: number;
  project: Project;
};

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[var(--accent)] bg-[var(--accent)] px-3 text-sm font-medium text-[var(--background)] transition-colors hover:bg-transparent hover:text-[var(--accent)]"
        >
          Visit Live Site <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      ) : null}
      <a
        href={project.caseStudyUrl}
        className="inline-flex min-h-10 items-center gap-2 rounded-lg border bg-[var(--surface)] px-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--muted-foreground)]"
      >
        View Case Study <ArrowUpRight size={15} aria-hidden="true" />
      </a>
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          className="inline-flex min-h-10 items-center gap-2 rounded-lg border bg-[var(--surface)] px-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--muted-foreground)]"
        >
          GitHub <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

export function ProjectCard({ index, project }: ProjectCardProps) {
  const reducedMotion = useReducedMotion();
  const textPlacement = index % 2 === 0 ? "lg:col-start-1" : "lg:col-start-2";
  const galleryPlacement = index % 2 === 0 ? "lg:col-start-2" : "lg:col-start-1";

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.14, once: true }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }}
      className="group grid gap-8 border-t py-10 first:border-t-0 first:pt-0 sm:gap-10 sm:py-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:items-center lg:gap-14 lg:py-16"
    >
      <div className={cn("min-w-0 lg:row-start-1", textPlacement)}>
        <div className="flex items-start gap-4">
          <span className="font-mono text-4xl font-medium tracking-[-0.06em] text-[color:color-mix(in_srgb,var(--muted-foreground)_38%,transparent)] sm:text-5xl" aria-hidden="true">
            {project.number}
          </span>
          <div className="min-w-0 pt-1">
            <p className="font-mono text-[11px] font-medium tracking-[0.12em] text-[var(--accent)]">
              {project.category}
            </p>
            {project.status ? (
              <p className="mt-2 font-mono text-[10px] tracking-[0.1em] text-[var(--muted-foreground)]">
                {project.status}
              </p>
            ) : null}
          </div>
        </div>

        <h3 className="mt-6 max-w-xl text-3xl font-medium leading-[1.04] tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted-foreground)]">
          {project.description}
        </p>
        <p className="mt-5 max-w-xl border-l border-[color:color-mix(in_srgb,var(--accent)_50%,var(--border))] pl-3 text-sm leading-6 text-[var(--foreground)]">
          <span className="mr-2 font-mono text-[10px] tracking-[0.1em] text-[var(--accent)]">BUILT TO SOLVE</span>
          {project.problem}
        </p>

        <div className="mt-7">
          <h4 className="font-mono text-[11px] font-medium tracking-[0.12em] text-[var(--foreground)]">KEY FEATURES</h4>
          <ul className="mt-3 grid gap-x-5 gap-y-2 text-sm leading-6 text-[var(--muted-foreground)] sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <Check size={14} className="mt-1 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-7">
          <h4 className="font-mono text-[11px] font-medium tracking-[0.12em] text-[var(--muted-foreground)]">
            {project.technologyLabel}
          </h4>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.technologies.map((technology) => (
              <span key={technology} className="rounded-md border bg-[var(--surface)] px-2 py-1 font-mono text-[10px] text-[var(--muted-foreground)]">
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 hidden lg:block">
          <ProjectActions project={project} />
        </div>
      </div>

      <div className={cn("min-w-0 lg:row-start-1", galleryPlacement)}>
        <ProjectGallery images={project.images} projectTitle={project.title} />
      </div>

      <div className="lg:hidden">
        <ProjectActions project={project} />
      </div>
    </motion.article>
  );
}
