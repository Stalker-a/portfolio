"use client";

import type { LucideIcon } from "lucide-react";
import { CircleCheck, Code2, FileText, Rocket, Search } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

type ProcessStepData = {
  description: string;
  icon: LucideIcon;
  keywords: readonly string[];
  note?: string;
  number: string;
  title: string;
};

const processSteps: readonly ProcessStepData[] = [
  {
    description:
      "We define what needs to be improved, automated or built and what the final system should accomplish.",
    icon: Search,
    keywords: ["Business problem", "Users", "Workflow", "Integrations"],
    number: "01",
    title: "Understand the Problem",
  },
  {
    description:
      "The required functionality, project boundaries and delivery stages are documented before development begins.",
    icon: FileText,
    keywords: ["Features", "Requirements", "Timeline", "Project stages"],
    note: "Changes are agreed before expanding the work.",
    number: "02",
    title: "Define the Scope",
  },
  {
    description:
      "I develop the working system in stages, focusing first on the core functionality.",
    icon: Code2,
    keywords: ["Frontend", "Backend", "Automation", "Integrations"],
    number: "03",
    title: "Build the Product",
  },
  {
    description:
      "The working version is tested against real scenarios and reviewed before launch.",
    icon: CircleCheck,
    keywords: ["Functional testing", "Client review", "Fixes", "Verification"],
    number: "04",
    title: "Test & Review",
  },
  {
    description:
      "The finished system is deployed to its production environment and prepared for real use.",
    icon: Rocket,
    keywords: ["Deployment", "Domain / HTTPS", "Server", "Handoff"],
    note: "The goal is a working production system, not only source code.",
    number: "05",
    title: "Launch & Deploy",
  },
];

function ProcessStep({
  index,
  reducedMotion,
  step,
}: {
  index: number;
  reducedMotion: boolean | null;
  step: ProcessStepData;
}) {
  const Icon = step.icon;

  return (
    <motion.li
      initial={reducedMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.25, once: true }}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { duration: 0.38, delay: Math.min(index * 0.05, 0.18), ease: "easeOut" }
      }
      className="relative grid min-w-0 grid-cols-[3.5rem_minmax(0,1fr)] gap-4 pb-9 last:pb-0 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-5"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span className="flex size-11 items-center justify-center rounded-xl border bg-[var(--background)] text-[var(--accent)] shadow-[0_0.75rem_2rem_color-mix(in_srgb,var(--background)_72%,transparent)] sm:size-12">
          <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
        </span>
        <span className="mt-3 font-mono text-[10px] font-medium tracking-[0.14em] text-[var(--muted-foreground)]">
          {step.number}
        </span>
      </div>

      <article className="min-w-0 border-t pt-4 sm:pt-5">
        <h3 className="text-xl font-medium tracking-[-0.03em] text-[var(--foreground)] sm:text-2xl">
          {step.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted-foreground)] sm:text-base sm:leading-7">
          {step.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2" aria-label={`${step.title} details`}>
          {step.keywords.map((keyword) => (
            <Badge key={keyword} variant="subtle" className="normal-case tracking-normal">
              {keyword}
            </Badge>
          ))}
        </div>
        {step.note ? (
          <p className="mt-4 text-sm leading-6 text-[var(--foreground)]">{step.note}</p>
        ) : null}
      </article>
    </motion.li>
  );
}

export function Process() {
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="process"
      aria-labelledby="process-title"
      className="relative isolate overflow-hidden border-t py-20 sm:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--border) 44%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--border) 44%, transparent) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to right, black, transparent 82%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-52 bottom-0 size-[28rem] rounded-full opacity-[0.07] blur-3xl"
        style={{ backgroundColor: "var(--accent)" }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-[minmax(16rem,0.7fr)_minmax(0,1fr)] lg:gap-20 xl:gap-28">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              id="process-title"
              eyebrow="PROCESS"
              title="How I Work"
              description="A clear process from the first idea to a working, deployed product."
            />

            <div className="mt-8 border-l border-[color:color-mix(in_srgb,var(--accent)_42%,var(--border))] pl-4">
              <p className="text-sm font-medium leading-6 text-[var(--foreground)]">
                Clear scope. Clear milestones. No hidden development process.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Clear Scope", "Milestone Delivery", "Production Deployment"].map((principle) => (
                  <Badge key={principle} variant="subtle" className="normal-case tracking-normal">
                    {principle}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-w-0">
            <motion.span
              initial={reducedMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ amount: 0.12, once: true }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
              className="absolute bottom-3 left-[1.34rem] top-5 w-px origin-top bg-[color:color-mix(in_srgb,var(--accent)_68%,var(--border))] sm:left-[1.47rem]"
              aria-hidden="true"
            />
            <ol aria-label="Five project stages">
              {processSteps.map((step, index) => (
                <ProcessStep key={step.number} index={index} reducedMotion={reducedMotion} step={step} />
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-12 border-t pt-7 lg:mt-16">
          <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">AFTER LAUNCH</p>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--muted-foreground)] sm:text-base sm:leading-7">
            Bug fixes related to the delivered scope can be handled after launch, and ongoing maintenance can be arranged separately when needed.
          </p>
        </div>
      </Container>
    </Section>
  );
}
