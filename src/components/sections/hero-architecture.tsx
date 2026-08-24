"use client";

import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BriefcaseBusiness,
  Database,
  Plug,
  UserRound,
  Workflow,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/cn";

type ArchitectureNodeProps = {
  className?: string;
  description: string;
  icon: LucideIcon;
  index: number;
  isPrimary?: boolean;
  reducedMotion: boolean | null;
  title: string;
};

function ArchitectureNode({
  className,
  description,
  icon: Icon,
  index,
  isPrimary = false,
  reducedMotion,
  title,
}: ArchitectureNodeProps) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0.45, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, delay: index * 0.08, ease: "easeOut" }}
      whileHover={reducedMotion ? undefined : { y: -2 }}
      className={cn(
        "group flex min-h-20 items-center gap-3 rounded-xl border bg-[color:color-mix(in_srgb,var(--surface)_92%,black)] px-4 py-3 transition-colors duration-200 hover:border-[var(--muted-foreground)]",
        isPrimary &&
          "border-[color:color-mix(in_srgb,var(--accent)_48%,var(--border))]",
        className,
      )}
    >
      <span
        className={cn(
          "flex size-9 shrink-0 items-center justify-center rounded-lg border bg-[var(--background)] text-[var(--muted-foreground)]",
          isPrimary &&
            "border-[color:color-mix(in_srgb,var(--accent)_50%,var(--border))] text-[var(--accent)]",
        )}
        aria-hidden="true"
      >
        <Icon size={17} strokeWidth={1.7} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-medium text-[var(--foreground)]">
          {title}
        </span>
        <span className="mt-0.5 block text-xs text-[var(--muted-foreground)]">
          {description}
        </span>
      </span>
    </motion.div>
  );
}

function VerticalConnector({
  delay,
  reducedMotion,
}: {
  delay: number;
  reducedMotion: boolean | null;
}) {
  return (
    <div className="relative col-span-2 h-8" aria-hidden="true">
      <span className="absolute left-1/2 top-0 h-full border-l border-[var(--border)]" />
      {reducedMotion ? null : (
        <motion.span
          className="absolute left-1/2 top-1 size-1.5 -translate-x-1/2 rounded-full bg-[var(--accent)]"
          animate={{ y: [0, 19, 0], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.6, delay, ease: "easeInOut", repeat: Infinity }}
        />
      )}
    </div>
  );
}

function BranchConnector({
  delay,
  reducedMotion,
}: {
  delay: number;
  reducedMotion: boolean | null;
}) {
  return (
    <div className="relative col-span-2 h-9" aria-hidden="true">
      <span className="absolute left-1/2 top-0 h-4 border-l border-[var(--border)]" />
      <span className="absolute left-1/4 right-1/4 top-4 border-t border-[var(--border)]" />
      <span className="absolute left-1/4 top-4 h-5 border-l border-[var(--border)]" />
      <span className="absolute right-1/4 top-4 h-5 border-l border-[var(--border)]" />
      {reducedMotion ? null : (
        <motion.span
          className="absolute left-1/2 top-3 size-1.5 -translate-x-1/2 rounded-full bg-[var(--accent)]"
          animate={{ x: [0, -46, 0, 46, 0], opacity: [0.2, 1, 0.3, 1, 0.2] }}
          transition={{ duration: 4.8, delay, ease: "easeInOut", repeat: Infinity }}
        />
      )}
    </div>
  );
}

function MergeConnector({
  delay,
  reducedMotion,
}: {
  delay: number;
  reducedMotion: boolean | null;
}) {
  return (
    <div className="relative col-span-2 h-9" aria-hidden="true">
      <span className="absolute left-1/4 top-0 h-4 border-l border-[var(--border)]" />
      <span className="absolute right-1/4 top-0 h-4 border-l border-[var(--border)]" />
      <span className="absolute left-1/4 right-1/4 top-4 border-t border-[var(--border)]" />
      <span className="absolute left-1/2 top-4 h-5 border-l border-[var(--border)]" />
      {reducedMotion ? null : (
        <motion.span
          className="absolute left-1/2 top-3 size-1.5 -translate-x-1/2 rounded-full bg-[var(--accent)]"
          animate={{ x: [-46, 0, 46, 0, -46], opacity: [0.2, 1, 0.3, 1, 0.2] }}
          transition={{ duration: 4.8, delay, ease: "easeInOut", repeat: Infinity }}
        />
      )}
    </div>
  );
}

export function HeroArchitecture() {
  const reducedMotion = useReducedMotion();

  return (
    <figure className="relative overflow-hidden rounded-2xl border bg-[var(--surface)] p-4 sm:p-5">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--border) 55%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--border) 55%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div className="relative">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] font-medium tracking-[0.14em] text-[var(--accent)]">
              SYSTEM OVERVIEW
            </p>
            <p className="mt-1 text-xs text-[var(--muted-foreground)]">
              From first message to clear action
            </p>
          </div>
          <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.1em] text-[var(--muted-foreground)]">
            <span className="size-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
            FLOW ACTIVE
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-3">
          <ArchitectureNode
            className="col-span-2 mx-auto w-full max-w-[78%]"
            description="Messages & requests"
            icon={UserRound}
            index={0}
            reducedMotion={reducedMotion}
            title="Customer"
          />
          <VerticalConnector delay={0.65} reducedMotion={reducedMotion} />
          <ArchitectureNode
            className="col-span-2 mx-auto w-full max-w-[82%]"
            description="Understands intent"
            icon={Bot}
            index={1}
            isPrimary
            reducedMotion={reducedMotion}
            title="AI Assistant"
          />
          <VerticalConnector delay={1.2} reducedMotion={reducedMotion} />
          <ArchitectureNode
            className="col-span-2 mx-auto w-full max-w-[88%]"
            description="Rules & workflows"
            icon={Workflow}
            index={2}
            reducedMotion={reducedMotion}
            title="Business Logic"
          />
          <BranchConnector delay={1.75} reducedMotion={reducedMotion} />
          <ArchitectureNode
            description="CRM & records"
            icon={Database}
            index={3}
            reducedMotion={reducedMotion}
            title="Database"
          />
          <ArchitectureNode
            description="Tools & APIs"
            icon={Plug}
            index={4}
            reducedMotion={reducedMotion}
            title="Integrations"
          />
          <MergeConnector delay={2.3} reducedMotion={reducedMotion} />
          <ArchitectureNode
            className="col-span-2 mx-auto w-full max-w-[78%]"
            description="Clear decisions"
            icon={BriefcaseBusiness}
            index={5}
            reducedMotion={reducedMotion}
            title="Business Owner"
          />
        </div>
      </div>
      <figcaption className="sr-only">
        A customer message moves through an AI assistant and business logic into a
        database and integrations, giving the business owner clear information.
      </figcaption>
    </figure>
  );
}
