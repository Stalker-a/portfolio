"use client";

import type { LucideIcon } from "lucide-react";
import { Bot, Database, Globe2, Server, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type SystemPart = {
  icon: LucideIcon;
  label: string;
};

const systemParts: readonly SystemPart[] = [
  { icon: Globe2, label: "Web" },
  { icon: Bot, label: "Automation" },
  { icon: Workflow, label: "AI" },
  { icon: Database, label: "Backend" },
  { icon: Server, label: "Infrastructure" },
];

const areasOfWork = [
  {
    items: ["Web applications", "APIs", "Backend systems"],
    title: "Web & Backend",
  },
  {
    items: ["AI assistants", "Business automation", "Workflow integrations"],
    title: "AI & Automation",
  },
  {
    items: ["Customer bots", "Lead automation", "Notifications"],
    title: "Telegram Systems",
  },
  {
    items: ["Linux", "Self-hosted services", "Deployment", "Monitoring"],
    title: "Infrastructure",
  },
] as const;

const engineeringPrinciples = [
  {
    description: "Technology should solve a real problem, not exist just because it is interesting.",
    number: "01",
    title: "Practical",
  },
  {
    description: "The frontend, backend, automation and infrastructure should work as one system.",
    number: "02",
    title: "Connected",
  },
  {
    description: "A project is not finished when the code works locally. It should be ready to run in a real environment.",
    number: "03",
    title: "Deployable",
  },
] as const;

function SystemMap({ reducedMotion }: { reducedMotion: boolean | null }) {
  return (
    <motion.figure
      initial={reducedMotion ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.35, once: true }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl border bg-[color:color-mix(in_srgb,var(--surface)_82%,var(--background))] p-4 sm:p-6"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--border) 45%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--border) 45%, transparent) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">CONNECTED DELIVERY</p>
        <div className="mt-5 grid grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,0.9fr)] items-center gap-1.5 sm:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,0.9fr)] sm:gap-3">
          <ul className="grid gap-2">
            {systemParts.map((part, index) => {
              const Icon = part.icon;

              return (
                <motion.li
                  key={part.label}
                  initial={reducedMotion ? false : { opacity: 0, x: -6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ amount: 0.3, once: true }}
                  transition={
                    reducedMotion
                      ? { duration: 0 }
                      : { duration: 0.28, delay: index * 0.04, ease: "easeOut" }
                  }
                  className="flex min-h-9 items-center gap-2 rounded-lg border bg-[var(--background)] px-2.5 text-xs font-medium text-[var(--foreground)] sm:min-h-10 sm:px-3 sm:text-sm"
                >
                  <Icon size={15} className="shrink-0 text-[var(--accent)]" strokeWidth={1.7} aria-hidden="true" />
                  <span className="min-w-0 truncate">{part.label}</span>
                </motion.li>
              );
            })}
          </ul>

          <div className="relative h-[14.25rem] sm:h-[15.5rem]" aria-hidden="true">
            <span className="absolute bottom-4 left-1/2 top-4 w-px -translate-x-1/2 bg-[var(--border)]" />
            <motion.span
              initial={reducedMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ amount: 0.3, once: true }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.55, ease: "easeOut" }}
              className="absolute bottom-4 left-1/2 top-4 w-px origin-top -translate-x-1/2 bg-[var(--accent)]"
            />
            <span className="absolute left-1/2 top-1/2 h-px w-full -translate-y-1/2 bg-[var(--accent)]" />
            <span className="absolute right-0 top-1/2 size-2 -translate-y-1/2 rotate-45 border-r border-t border-[var(--accent)]" />
          </div>

          <div className="rounded-xl border border-[color:color-mix(in_srgb,var(--accent)_42%,var(--border))] bg-[color:color-mix(in_srgb,var(--accent)_10%,var(--background))] p-3 text-center sm:p-4">
            <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">OUTCOME</p>
            <p className="mt-3 text-base font-medium leading-5 tracking-[-0.02em] text-[var(--foreground)] sm:text-lg">
              Working System
            </p>
            <p className="mt-2 text-xs leading-5 text-[var(--muted-foreground)]">
              Connected delivery for real work.
            </p>
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        Web development, automation, AI, backend systems and infrastructure combine into one working system.
      </figcaption>
    </motion.figure>
  );
}

export function About() {
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="about"
      aria-labelledby="about-title"
      className="relative isolate overflow-hidden border-t py-24 sm:py-32 lg:py-40"
    >
      <div
        className="pointer-events-none absolute -right-72 top-20 size-[34rem] rounded-full opacity-[0.05] blur-3xl"
        style={{ backgroundColor: "var(--accent)" }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,0.8fr)] lg:gap-20 xl:gap-28">
          <div className="min-w-0">
            <SectionHeading
              id="about-title"
              eyebrow="ABOUT"
              title="I Build Systems, Not Just Features"
              description="I work across web development, automation and infrastructure to build complete systems around real business problems."
            />

            <div className="mt-8 max-w-xl space-y-4 text-sm leading-6 text-[var(--muted-foreground)] sm:text-base sm:leading-7">
              <p>I&apos;m a developer focused on building practical digital systems for businesses and real-world projects.</p>
              <p>My work combines web applications, AI integrations, Telegram automation, backend systems and self-hosted infrastructure.</p>
              <p>Instead of treating the website, bot, backend and server as separate pieces, I prefer building them as parts of one connected system.</p>
            </div>

            <p className="mt-8 max-w-xl border-l border-[color:color-mix(in_srgb,var(--accent)_42%,var(--border))] pl-4 text-sm leading-6 text-[var(--muted-foreground)]">
              The projects in this portfolio reflect that approach — from <Link href="/projects/3d-design-digital-platform" className="text-[var(--foreground)] underline decoration-[color:color-mix(in_srgb,var(--accent)_55%,transparent)] underline-offset-4 transition-colors hover:text-[var(--accent)]">web platforms</Link> to <Link href="/projects/3dd-telegram-automation" className="text-[var(--foreground)] underline decoration-[color:color-mix(in_srgb,var(--accent)_55%,transparent)] underline-offset-4 transition-colors hover:text-[var(--accent)]">Telegram automation</Link> and the <Link href="/projects/private-cloud-home-lab" className="text-[var(--foreground)] underline decoration-[color:color-mix(in_srgb,var(--accent)_55%,transparent)] underline-offset-4 transition-colors hover:text-[var(--accent)]">infrastructure</Link> running behind them.
            </p>
          </div>

          <div className="min-w-0 lg:pt-8">
            <SystemMap reducedMotion={reducedMotion} />
          </div>
        </div>

        <div className="mt-16 border-t pt-10 sm:mt-20 sm:pt-12">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">AREAS OF WORK</p>
              <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em] text-[var(--foreground)] sm:text-3xl">What I Work With</h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[var(--muted-foreground)]">Four connected areas that can shape one practical delivery.</p>
          </div>

          <div className="mt-8 grid gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-4">
            {areasOfWork.map((area) => (
              <article key={area.title} className="border-t pt-4">
                <h4 className="text-base font-medium text-[var(--foreground)]">{area.title}</h4>
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-[var(--muted-foreground)]">
                  {area.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t pt-10 sm:mt-20 sm:pt-12">
          <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">ENGINEERING APPROACH</p>
          <h3 className="mt-3 text-2xl font-medium tracking-[-0.035em] text-[var(--foreground)] sm:text-3xl">How I Approach Projects</h3>
          <div className="mt-8 grid gap-8 md:grid-cols-3 md:gap-10">
            {engineeringPrinciples.map((principle) => (
              <article key={principle.number} className="border-t pt-4">
                <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">{principle.number}</p>
                <h4 className="mt-3 text-lg font-medium text-[var(--foreground)]">{principle.title}</h4>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
