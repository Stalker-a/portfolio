"use client";

import {
  Bot,
  PanelsTopLeft,
  Send,
  Workflow,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    description:
      "AI-powered assistants that answer customer questions, understand requests and work with your business data.",
    examples: [
      "Customer support",
      "Product recommendations",
      "FAQ automation",
      "Lead qualification",
    ],
    icon: Bot,
    number: "01",
    title: "AI Assistants",
    visual: "assistant",
  },
  {
    description:
      "Custom Telegram bots for sales, customer service, internal tools, notifications and daily operations.",
    examples: ["Order collection", "Booking", "Notifications", "Admin tools"],
    icon: Send,
    number: "02",
    title: "Telegram Bots",
    visual: "telegram",
  },
  {
    description:
      "Systems that connect tools, move data automatically and remove repetitive manual work from business processes.",
    examples: [
      "API integrations",
      "Workflow automation",
      "Notifications",
      "Data processing",
    ],
    icon: Workflow,
    number: "03",
    title: "Business Automation",
    visual: "automation",
  },
  {
    description:
      "Modern web products and internal tools designed around specific business needs.",
    examples: [
      "Landing pages",
      "Dashboards",
      "Admin panels",
      "Customer portals",
    ],
    icon: PanelsTopLeft,
    number: "04",
    title: "Web Applications",
    visual: "web",
  },
] as const;

type ServiceVisualProps = {
  type: (typeof services)[number]["visual"];
};

function ServiceVisual({ type }: ServiceVisualProps) {
  if (type === "assistant") {
    return (
      <div className="flex w-32 flex-col gap-2" aria-hidden="true">
        <span className="flex h-7 w-24 items-center gap-1.5 self-start rounded-md border bg-[var(--background)] px-2">
          <span className="size-1 rounded-full bg-[var(--accent)]" />
          <span className="h-1 w-12 rounded-full bg-[var(--border)]" />
        </span>
        <span className="flex h-7 w-28 items-center gap-1.5 self-end rounded-md border bg-[var(--background)] px-2">
          <span className="h-1 w-8 rounded-full bg-[var(--border)]" />
          <span className="size-1 rounded-full bg-[var(--accent)]" />
        </span>
        <span className="h-1 w-16 self-start rounded-full bg-[var(--border)]" />
      </div>
    );
  }

  if (type === "telegram") {
    return (
      <div className="flex w-32 items-center gap-2" aria-hidden="true">
        <span className="flex size-8 items-center justify-center rounded-md border bg-[var(--background)]">
          <span className="size-1.5 rounded-full bg-[var(--accent)]" />
        </span>
        <span className="relative h-px flex-1 bg-[var(--border)]">
          <span className="absolute right-0 top-1/2 size-1.5 -translate-y-1/2 rotate-45 border-r border-t border-[var(--accent)]" />
        </span>
        <span className="flex size-8 items-center justify-center rounded-md border bg-[var(--background)]">
          <span className="h-1.5 w-3 rounded-sm bg-[var(--border)]" />
        </span>
      </div>
    );
  }

  if (type === "automation") {
    return (
      <div className="relative flex h-12 w-32 items-center justify-between" aria-hidden="true">
        <span className="absolute left-4 right-4 top-1/2 h-px bg-[var(--border)]" />
        <span className="relative flex size-5 items-center justify-center rounded-full border bg-[var(--background)]">
          <span className="size-1 rounded-full bg-[var(--accent)]" />
        </span>
        <span className="relative flex size-7 items-center justify-center rounded-full border bg-[var(--background)]">
          <span className="size-1.5 rounded-full bg-[var(--accent)]" />
        </span>
        <span className="relative flex size-5 items-center justify-center rounded-full border bg-[var(--background)]">
          <span className="size-1 rounded-full bg-[var(--accent)]" />
        </span>
      </div>
    );
  }

  return (
    <div className="grid w-32 grid-cols-3 gap-1.5" aria-hidden="true">
      <span className="col-span-3 h-3 rounded-sm border bg-[var(--background)]" />
      <span className="col-span-2 h-9 rounded-sm border bg-[var(--background)]" />
      <span className="h-9 rounded-sm border bg-[var(--background)]" />
    </div>
  );
}

export function ServicesGrid() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.article
            key={service.title}
            initial={reducedMotion ? false : { opacity: 0.55, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2, once: true }}
            transition={{ duration: 0.38, delay: index * 0.06, ease: "easeOut" }}
            whileHover={reducedMotion ? undefined : { y: -3 }}
            className="group relative min-h-88 overflow-hidden rounded-2xl border bg-[var(--surface)] p-5 transition-colors duration-200 hover:border-[var(--muted-foreground)] sm:p-6"
          >
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-start justify-between gap-5">
                <span className="font-mono text-xs tracking-[0.14em] text-[var(--muted-foreground)]">
                  {service.number}
                </span>
                <span className="flex size-10 items-center justify-center rounded-lg border bg-[var(--background)] text-[var(--muted-foreground)] transition-colors duration-200 group-hover:border-[color:color-mix(in_srgb,var(--accent)_45%,var(--border))] group-hover:text-[var(--accent)]" aria-hidden="true">
                  <Icon size={18} strokeWidth={1.7} />
                </span>
              </div>

              <div className="mt-9 max-w-sm">
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-[var(--foreground)]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
                  {service.description}
                </p>
              </div>

              <ul className="mt-7 grid gap-2 text-sm text-[var(--muted-foreground)] sm:grid-cols-2">
                {service.examples.map((example) => (
                  <li key={example} className="flex items-center gap-2">
                    <span className="size-1 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                    {example}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex min-h-14 items-end justify-end pt-6">
                <ServiceVisual type={service.visual} />
              </div>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
