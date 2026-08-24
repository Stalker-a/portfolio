import { ArrowDown, ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

type HomeLabArchitectureProps = {
  className?: string;
};

const serviceGroups: readonly { description: string; footer?: string; title: string }[] = [
  {
    description: "Samba / File Browser",
    title: "Storage",
    footer: "Private Files",
  },
  {
    description: "Websites / AI Services",
    title: "Web / AI",
  },
  {
    description: "Telegram Bots / Monitoring",
    title: "Automation",
  },
];

function SystemNode({ accent = false, children }: { accent?: boolean; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-[color:color-mix(in_srgb,var(--surface)_90%,var(--background))] px-4 py-3 text-center text-sm font-medium text-[var(--foreground)] shadow-[0_0.75rem_2rem_color-mix(in_srgb,var(--background)_55%,transparent)]",
        accent && "border-[color:color-mix(in_srgb,var(--accent)_45%,var(--border))] text-[var(--accent)]",
      )}
    >
      {children}
    </div>
  );
}

function DownConnector() {
  return (
    <div className="flex h-8 items-center justify-center" aria-hidden="true">
      <span className="h-full border-l border-[var(--border)]" />
      <ArrowDown size={14} className="-ml-[0.45rem] mt-6 bg-[var(--surface)] text-[var(--accent)]" />
    </div>
  );
}

export function HomeLabArchitecture({ className }: HomeLabArchitectureProps) {
  return (
    <figure className={cn("relative overflow-hidden rounded-2xl border bg-[var(--surface)] p-4 sm:p-6 lg:p-8", className)}>
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--border) 52%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--border) 52%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative">
        <div className="mx-auto max-w-sm">
          <SystemNode>Internet</SystemNode>
          <DownConnector />
          <SystemNode>Secure Remote Access (Tailscale)</SystemNode>
          <DownConnector />
          <SystemNode accent>Proxmox VE</SystemNode>
        </div>

        <div className="mx-auto mt-8 max-w-5xl border-t border-[var(--border)] pt-8">
          <div className="grid gap-4 md:grid-cols-3">
            {serviceGroups.map((group) => (
              <div key={group.title} className="rounded-xl border bg-[color:color-mix(in_srgb,var(--background)_32%,transparent)] p-4 sm:p-5">
                <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">LXC WORKLOAD</p>
                <p className="mt-3 text-base font-medium text-[var(--foreground)]">{group.title}</p>
                <p className="mt-1 text-sm leading-6 text-[var(--muted-foreground)]">{group.description}</p>
                {group.footer ? (
                  <>
                    <div className="mt-4 flex items-center gap-2 text-[var(--accent)]" aria-hidden="true">
                      <ArrowDown size={14} />
                      <span className="h-px flex-1 bg-[var(--border)]" />
                    </div>
                    <p className="mt-3 text-sm font-medium text-[var(--foreground)]">{group.footer}</p>
                  </>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-6">
          <p className="text-center font-mono text-[10px] tracking-[0.12em] text-[var(--muted-foreground)]">VIRTUALIZATION LAYER</p>
          <ol className="mt-4 flex flex-col gap-3 text-center font-mono text-[11px] tracking-[0.08em] text-[var(--muted-foreground)] sm:flex-row sm:items-center sm:justify-center">
            {["Physical Host", "Proxmox VE", "LXC Containers", "Applications"].map((step, index, steps) => (
              <li key={step} className="flex items-center justify-center gap-3">
                <span className={index === 1 ? "text-[var(--accent)]" : undefined}>{step}</span>
                {index < steps.length - 1 ? <ArrowDown size={14} className="text-[var(--accent)] sm:hidden" aria-hidden="true" /> : null}
                {index < steps.length - 1 ? <ArrowRight size={14} className="hidden text-[var(--accent)] sm:block" aria-hidden="true" /> : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
      <figcaption className="sr-only">
        Private cloud architecture from internet access through Tailscale and Proxmox VE to isolated Linux containers for storage, web and AI services, and automation.
      </figcaption>
    </figure>
  );
}
