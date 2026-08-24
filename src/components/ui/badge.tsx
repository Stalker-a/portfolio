import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: "accent" | "subtle";
};

const badgeVariants = {
  accent:
    "border-[color:color-mix(in_srgb,var(--accent)_45%,transparent)] bg-[color:color-mix(in_srgb,var(--accent)_10%,transparent)] text-[var(--accent)]",
  subtle:
    "border-[var(--border)] bg-[color:color-mix(in_srgb,var(--surface)_85%,white)] text-[var(--muted-foreground)]",
};

export function Badge({ className, variant = "accent", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-full border px-3 py-1 font-mono text-[11px] font-medium tracking-[0.1em] uppercase",
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
