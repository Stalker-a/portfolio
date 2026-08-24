import { ArrowDown, ArrowRight } from "lucide-react";

type FlowStep = {
  description: string;
  title: string;
};

type CaseStudyArchitectureProps = {
  branch: readonly FlowStep[];
  steps: readonly FlowStep[];
};

function FlowNode({ index, step }: { index: number; step: FlowStep }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border bg-[color:color-mix(in_srgb,var(--surface)_88%,var(--background))] px-4 py-3 sm:px-5">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-[color:color-mix(in_srgb,var(--accent)_38%,var(--border))] bg-[color:color-mix(in_srgb,var(--accent)_10%,var(--background))] font-mono text-[10px] text-[var(--accent)]">
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
      <ArrowDown size={14} className="-ml-[0.45rem] mt-6 bg-[var(--background)] text-[var(--accent)]" />
    </div>
  );
}

export function CaseStudyArchitecture({ branch, steps }: CaseStudyArchitectureProps) {
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

      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(15rem,0.58fr)] lg:gap-12">
        <div>
          <p className="font-mono text-[10px] font-medium tracking-[0.14em] text-[var(--accent)]">
            PRIMARY FLOW
          </p>
          <ol className="mt-5">
            {steps.map((step, index) => (
              <li key={step.title}>
                <FlowNode index={index} step={step} />
                {index < steps.length - 1 ? <Connector /> : null}
              </li>
            ))}
          </ol>
        </div>

        <aside className="border-t pt-6 lg:mt-20 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0" aria-label="Supporting website path">
          <div className="flex items-center gap-2">
            <ArrowRight size={14} className="text-[var(--accent)]" aria-hidden="true" />
            <p className="font-mono text-[10px] font-medium tracking-[0.14em] text-[var(--muted-foreground)]">
              SUPPORTING PATH
            </p>
          </div>
          <ol className="mt-5">
            {branch.map((step, index) => (
              <li key={step.title}>
                <FlowNode index={index} step={step} />
                {index < branch.length - 1 ? <Connector /> : null}
              </li>
            ))}
          </ol>
        </aside>
      </div>
      <figcaption className="sr-only">
        The system routes visitors through the website, AI consultation, project qualification and a request form into a Telegram lead workflow for the business.
      </figcaption>
    </figure>
  );
}
