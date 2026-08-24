import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type SurfaceProps = HTMLAttributes<HTMLDivElement>;

export function Surface({ className, ...props }: SurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-[var(--surface)] p-5 sm:p-6",
        className,
      )}
      {...props}
    />
  );
}
