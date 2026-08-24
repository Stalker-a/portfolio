"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="flex min-h-[100svh] items-center py-12">
      <Container>
        <p className="font-mono text-sm tracking-[0.14em] text-[var(--accent)]">SOMETHING WENT WRONG</p>
        <h1 className="mt-5 text-4xl font-medium tracking-[-0.05em] text-[var(--foreground)] sm:text-5xl">
          Unable to load this page
        </h1>
        <p className="mt-5 max-w-lg text-base leading-7 text-[var(--muted-foreground)]">
          Please try again. If the problem continues, return to the home page.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button type="button" onClick={reset}>
            Try Again
          </Button>
          <Button href="/" variant="secondary">
            Back Home
          </Button>
        </div>
      </Container>
    </main>
  );
}
