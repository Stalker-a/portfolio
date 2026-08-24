import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  as?: "h1" | "h2" | "h3";
  className?: string;
  description?: ReactNode;
  eyebrow?: ReactNode;
  id?: string;
  title: ReactNode;
};

export function SectionHeading({
  as: Heading = "h2",
  className,
  description,
  eyebrow,
  id,
  title,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="font-mono text-xs font-medium tracking-[0.14em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className="mt-4 text-3xl font-medium tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl lg:text-5xl"
      >
        {title}
      </Heading>
      {description ? (
        <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
