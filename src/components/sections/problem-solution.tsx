"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowRight,
  Bell,
  Bot,
  Boxes,
  ClipboardList,
  MessageCircleMore,
  RefreshCw,
  ShoppingCart,
  Workflow,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const opportunities = [
  {
    number: "01",
    problem: {
      description:
        "Your team spends time answering the same questions about prices, availability, delivery or services.",
      icon: MessageCircleMore,
      title: "Customers ask the same questions every day",
    },
    solution: {
      description:
        "An AI assistant can answer common questions instantly and escalate complex requests to a real person.",
      icon: Bot,
      title: "AI Customer Assistant",
    },
    visual: "questions",
  },
  {
    number: "02",
    problem: {
      description:
        "Customer information, products and delivery details are copied manually from conversations.",
      icon: ClipboardList,
      title: "Orders are collected manually through messages",
    },
    solution: {
      description:
        "A bot can collect structured order information and send a complete request directly to the owner or manager.",
      icon: ShoppingCart,
      title: "Automated Order Bot",
    },
    visual: "order",
  },
  {
    number: "03",
    problem: {
      description:
        "Someone has to repeatedly check servers, services, orders or other systems just to know whether something changed.",
      icon: RefreshCw,
      title: "Employees constantly check systems manually",
    },
    solution: {
      description:
        "Automated monitoring can detect important events and send a notification only when attention is actually required.",
      icon: Bell,
      title: "Automation & Notifications",
    },
    visual: "monitoring",
  },
  {
    number: "04",
    problem: {
      description:
        "Customer data, orders and notifications live in separate systems that do not communicate with each other.",
      icon: Boxes,
      title: "Business information is scattered across different tools",
    },
    solution: {
      description:
        "APIs and automation can connect existing tools so information moves between them automatically.",
      icon: Workflow,
      title: "Connected Business System",
    },
    visual: "connected",
  },
] as const;

type Opportunity = (typeof opportunities)[number];
type Visual = Opportunity["visual"];

function CardHeading({
  icon: Icon,
  label,
  title,
  variant,
}: {
  icon: LucideIcon;
  label: string;
  title: string;
  variant: "problem" | "solution";
}) {
  const isSolution = variant === "solution";

  return (
    <div className="flex items-start gap-3">
      <span
        className={`flex size-9 shrink-0 items-center justify-center rounded-lg border ${
          isSolution
            ? "border-[color:color-mix(in_srgb,var(--accent)_32%,var(--border))] bg-[color:color-mix(in_srgb,var(--accent)_10%,var(--background))] text-[var(--accent)]"
            : "bg-[var(--background)] text-[var(--muted-foreground)]"
        }`}
        aria-hidden="true"
      >
        <Icon size={17} strokeWidth={1.7} />
      </span>
      <div className="min-w-0">
        <p
          className={`font-mono text-[11px] font-medium tracking-[0.14em] ${
            isSolution ? "text-[var(--accent)]" : "text-[var(--muted-foreground)]"
          }`}
        >
          {label}
        </p>
        <h3 className="mt-2 text-lg font-medium leading-6 tracking-[-0.025em] text-[var(--foreground)] sm:text-xl">
          {title}
        </h3>
      </div>
    </div>
  );
}

function OpportunityVisual({ visual }: { visual: Visual }) {
  if (visual === "questions") {
    return (
      <div className="mt-5 flex flex-wrap gap-1.5" aria-hidden="true">
        {["Size 42?", "Delivery cost?", "Open today?"].map((question) => (
          <span
            key={question}
            className="rounded-md border bg-[var(--background)] px-2 py-1 font-mono text-[10px] text-[var(--muted-foreground)]"
          >
            {question}
          </span>
        ))}
      </div>
    );
  }

  if (visual === "order") {
    return (
      <div className="mt-5 flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-[var(--muted-foreground)]" aria-hidden="true">
        {["Customer", "Product", "Details", "Ready"].map((step, index, steps) => (
          <span key={step} className="flex items-center gap-1.5">
            <span className="rounded-md border bg-[var(--background)] px-2 py-1">{step}</span>
            {index < steps.length - 1 ? <ArrowRight size={12} className="text-[var(--accent)]" /> : null}
          </span>
        ))}
      </div>
    );
  }

  if (visual === "monitoring") {
    return (
      <div className="mt-5 flex flex-wrap items-center gap-1.5 font-mono text-[10px] text-[var(--muted-foreground)]" aria-hidden="true">
        {["System", "Monitor", "Event", "Alert"].map((step, index, steps) => (
          <span key={step} className="flex items-center gap-1.5">
            <span className="rounded-md border bg-[var(--background)] px-2 py-1">{step}</span>
            {index < steps.length - 1 ? <span className="size-1 rounded-full bg-[var(--accent)]" /> : null}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-5 flex items-center gap-3" aria-hidden="true">
      <div className="grid grid-cols-2 gap-1.5">
        {["Web", "Telegram", "CRM", "Data"].map((source) => (
          <span
            key={source}
            className="rounded-md border bg-[var(--background)] px-2 py-1 text-center font-mono text-[10px] text-[var(--muted-foreground)]"
          >
            {source}
          </span>
        ))}
      </div>
      <ArrowRight size={15} className="shrink-0 text-[var(--accent)]" />
      <span className="rounded-md border border-[color:color-mix(in_srgb,var(--accent)_32%,var(--border))] bg-[color:color-mix(in_srgb,var(--accent)_10%,var(--background))] px-2 py-1 text-center font-mono text-[10px] text-[var(--accent)]">
        Workflow
      </span>
    </div>
  );
}

function FlowTransition({ reducedMotion }: { reducedMotion: boolean | null }) {
  return (
    <div className="relative flex h-8 items-center justify-center lg:h-auto" aria-hidden="true">
      <span className="absolute h-full w-px bg-[var(--border)] lg:h-px lg:w-full" />
      <motion.span
        className="absolute size-1.5 rounded-full bg-[var(--accent)]"
        animate={reducedMotion ? undefined : { x: [-10, 10, -10], y: [-7, 7, -7] }}
        transition={
          reducedMotion
            ? undefined
            : { duration: 2.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }
        }
      />
      <span className="relative flex size-6 items-center justify-center rounded-full border bg-[var(--background)] text-[var(--accent)] lg:hidden">
        <ArrowDown size={14} strokeWidth={1.8} />
      </span>
      <span className="relative hidden size-6 items-center justify-center rounded-full border bg-[var(--background)] text-[var(--accent)] lg:flex">
        <ArrowRight size={14} strokeWidth={1.8} />
      </span>
    </div>
  );
}

function OpportunityCard({ opportunity, index, reducedMotion }: {
  opportunity: Opportunity;
  index: number;
  reducedMotion: boolean | null;
}) {
  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.42, delay: index * 0.06, ease: "easeOut" as const };

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.18, once: true }}
      transition={transition}
      className="relative grid gap-2 rounded-2xl border bg-[color:color-mix(in_srgb,var(--surface)_82%,var(--background))] p-2 sm:p-3 lg:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)] lg:gap-3"
    >
      <span className="absolute left-5 top-4 font-mono text-[10px] tracking-[0.14em] text-[var(--muted-foreground)] sm:left-6 sm:top-5">
        {opportunity.number}
      </span>

      <div className="min-w-0 rounded-xl border bg-[color:color-mix(in_srgb,var(--background)_58%,var(--surface))] px-5 pb-5 pt-10 sm:px-6 sm:pb-6 sm:pt-11">
        <CardHeading
          icon={opportunity.problem.icon}
          label="PROBLEM"
          title={opportunity.problem.title}
          variant="problem"
        />
        <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted-foreground)]">
          {opportunity.problem.description}
        </p>
        {opportunity.visual === "questions" ? <OpportunityVisual visual={opportunity.visual} /> : null}
      </div>

      <FlowTransition reducedMotion={reducedMotion} />

      <div className="min-w-0 rounded-xl border border-[color:color-mix(in_srgb,var(--accent)_27%,var(--border))] bg-[color:color-mix(in_srgb,var(--surface)_90%,var(--accent))] px-5 pb-5 pt-10 sm:px-6 sm:pb-6 sm:pt-11">
        <CardHeading
          icon={opportunity.solution.icon}
          label="SOLUTION"
          title={opportunity.solution.title}
          variant="solution"
        />
        <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted-foreground)]">
          {opportunity.solution.description}
        </p>
        {opportunity.visual !== "questions" ? <OpportunityVisual visual={opportunity.visual} /> : null}
      </div>
    </motion.article>
  );
}

export function ProblemSolution() {
  const reducedMotion = useReducedMotion();

  return (
    <Section
      id="problems"
      aria-labelledby="problems-title"
      className="relative isolate overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--border) 34%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--border) 34%, transparent) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to bottom, transparent, black 18%, black 82%, transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 size-[36rem] -translate-x-1/2 rounded-full opacity-[0.08] blur-3xl"
        style={{ backgroundColor: "var(--accent)" }}
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          id="problems-title"
          eyebrow="Automation Opportunities"
          title="Too Much Manual Work?"
          description="If your team repeats the same tasks every day, there is probably a better way to handle them."
        />

        <p className="mt-9 flex items-center gap-3 font-mono text-xs tracking-[0.12em] text-[var(--muted-foreground)]">
          <span className="h-px w-8 bg-[var(--border)]" aria-hidden="true" />
          MANUAL <ArrowRight size={13} className="text-[var(--accent)]" aria-hidden="true" /> AUTOMATED
        </p>

        <div className="mt-8 space-y-4 sm:mt-10 lg:space-y-5">
          {opportunities.map((opportunity, index) => (
            <OpportunityCard
              key={opportunity.number}
              opportunity={opportunity}
              index={index}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-lg font-medium leading-7 tracking-[-0.02em] text-[var(--foreground)] sm:text-xl">
          If a process happens repeatedly, it can probably be simplified.
        </p>
      </Container>
    </Section>
  );
}
