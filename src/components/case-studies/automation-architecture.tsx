import { ArrowDown, ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

type AutomationStep = {
  description: string;
  title: string;
};

type AutomationArchitectureProps = {
  completionFlow: readonly AutomationStep[];
  customerFlow: readonly AutomationStep[];
  websiteBranches: readonly AutomationStep[];
  websiteFlow: readonly AutomationStep[];
};

function Node({ accent, index, step }: { accent?: boolean; index: number; step: AutomationStep }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border bg-[color:color-mix(in_srgb,var(--surface)_88%,var(--background))] px-4 py-3 sm:px-5",
        accent && "border-[color:color-mix(in_srgb,var(--accent)_42%,var(--border))]",
      )}
    >
      <span
        className={cn(
          "flex size-7 shrink-0 items-center justify-center rounded-md border bg-[var(--background)] font-mono text-[10px] text-[var(--muted-foreground)]",
          accent && "border-[color:color-mix(in_srgb,var(--accent)_42%,var(--border))] text-[var(--accent)]",
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-medium text-[var(--foreground)]">{step.title}</span>
        <span className="mt-0.5 block text-xs leading-5 text-[var(--muted-foreground)]">
          {step.description}
        </span>
      </span>
    </div>
  );
}

function Connector() {
  return (
    <div className="flex h-8 items-center pl-3" aria-hidden="true">
      <span className="h-full border-l border-[var(--border)]" />
      <ArrowDown size={14} className="-ml-[0.45rem] mt-6 bg-[var(--surface)] text-[var(--accent)]" />
    </div>
  );
}

function VerticalFlow({ accent = false, steps }: { accent?: boolean; steps: readonly AutomationStep[] }) {
  return (
    <ol className="mt-5">
      {steps.map((step, index) => (
        <li key={step.title}>
          <Node accent={accent} index={index} step={step} />
          {index < steps.length - 1 ? <Connector /> : null}
        </li>
      ))}
    </ol>
  );
}

export function AutomationArchitecture({
  completionFlow,
  customerFlow,
  websiteBranches,
  websiteFlow,
}: AutomationArchitectureProps) {
  return (
    <figure className="relative overflow-hidden rounded-2xl border bg-[var(--surface)] p-4 sm:p-6 lg:p-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--border) 52%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--border) 52%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative grid gap-10 xl:grid-cols-[minmax(0,1.24fr)_minmax(15rem,0.76fr)] xl:gap-12">
        <div>
          <p className="font-mono text-[10px] font-medium tracking-[0.14em] text-[var(--accent)]">
            WEBSITE-TO-LEAD PIPELINE
          </p>
          <div className="mt-5">
            <Node accent index={0} step={websiteFlow[0]} />
            <Connector />
            <div className="grid gap-3 sm:grid-cols-2">
              {websiteBranches.map((step, index) => (
                <Node key={step.title} index={index + 1} step={step} />
              ))}
            </div>
            <div className="relative my-5 h-7" aria-hidden="true">
              <span className="absolute left-1/4 top-0 h-3 border-l border-[var(--border)] sm:left-1/4" />
              <span className="absolute right-1/4 top-0 h-3 border-l border-[var(--border)] sm:right-1/4" />
              <span className="absolute left-1/4 right-1/4 top-3 border-t border-[var(--border)]" />
              <span className="absolute left-1/2 top-3 h-4 border-l border-[var(--border)]" />
              <ArrowDown size={14} className="absolute left-1/2 top-4 -translate-x-1/2 bg-[var(--surface)] text-[var(--accent)]" />
            </div>
            <ol>
              {websiteFlow.slice(1).map((step, index) => (
                <li key={step.title}>
                  <Node accent={index === 0} index={index + 3} step={step} />
                  {index < websiteFlow.length - 2 ? <Connector /> : null}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="grid gap-8 border-t pt-8 sm:grid-cols-2 xl:grid-cols-1 xl:border-l xl:border-t-0 xl:pl-8 xl:pt-0">
          <div>
            <div className="flex items-center gap-2">
              <ArrowRight size={14} className="text-[var(--accent)]" aria-hidden="true" />
              <p className="font-mono text-[10px] font-medium tracking-[0.14em] text-[var(--muted-foreground)]">
                CUSTOMER INTERFACE
              </p>
            </div>
            <VerticalFlow steps={customerFlow} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <ArrowRight size={14} className="text-[var(--accent)]" aria-hidden="true" />
              <p className="font-mono text-[10px] font-medium tracking-[0.14em] text-[var(--muted-foreground)]">
                COMPLETION WORKFLOW
              </p>
            </div>
            <VerticalFlow steps={completionFlow} />
          </div>
        </div>
      </div>
      <figcaption className="sr-only">
        Website requests and client bot conversations become structured leads for the business, with a completion workflow that can notify the customer.
      </figcaption>
    </figure>
  );
}
