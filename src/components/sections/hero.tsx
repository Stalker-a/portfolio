import { ArrowDownRight, MessageCircle } from "lucide-react";

import { HeroArchitecture } from "@/components/sections/hero-architecture";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";

const capabilities = [
  "AI Assistants",
  "Telegram Bots",
  "Automation",
  "Web Apps",
  "Backend Systems",
] as const;

export function Hero() {
  return (
    <Section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden py-12 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--border) 40%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--border) 40%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(to right, black, transparent 76%), linear-gradient(to bottom, black, transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-16rem] top-1/2 size-[34rem] -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "var(--accent)" }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(25rem,0.92fr)] lg:gap-10 xl:gap-16">
          <div className="min-w-0 w-full max-w-[calc(100vw-2.5rem)] lg:max-w-3xl">
            <Badge className="gap-2 normal-case tracking-normal">
              <span
                className="size-1.5 rounded-full bg-[var(--accent)] motion-safe:animate-pulse"
                aria-hidden="true"
              />
              Available for freelance projects
            </Badge>

            <h1
              id="hero-title"
              className="mt-7 max-w-3xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[var(--foreground)] sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="text-[var(--accent)]">AI Bots &amp; Automation</span>{" "}
              Built for Real Businesses
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
              I build AI assistants, Telegram bots, automation systems and custom
              web applications that remove repetitive work from your business.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                href="#projects"
                className="w-full sm:w-auto"
                trailingIcon={<ArrowDownRight size={17} />}
              >
                View Projects
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                className="w-full sm:w-auto"
                trailingIcon={<MessageCircle size={17} />}
              >
                Let&apos;s Talk
              </Button>
            </div>

            <div className="mt-9 flex max-w-2xl flex-wrap gap-2" aria-label="Capabilities">
              {capabilities.map((capability) => (
                <Badge key={capability} variant="subtle" className="normal-case tracking-normal">
                  {capability}
                </Badge>
              ))}
            </div>
          </div>

          <div className="min-w-0 w-full max-w-[calc(100vw-2.5rem)] lg:max-w-none">
            <HeroArchitecture />
          </div>
        </div>
      </Container>
    </Section>
  );
}
