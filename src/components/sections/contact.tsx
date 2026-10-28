import { ArrowUpRight } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";

const projectAreas = [
  "Web applications",
  "AI assistants",
  "Telegram bots",
  "Business automation",
  "Backend systems",
  "Infrastructure & deployment",
] as const;

const nextSteps = ["Send the brief", "I review the project", "We discuss scope and next steps"] as const;

export function Contact() {
  return (
    <Section
      id="contact"
      aria-labelledby="contact-title"
      className="relative isolate overflow-hidden border-t bg-[color:color-mix(in_srgb,var(--surface)_32%,var(--background))] py-20 sm:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute -right-64 top-1/4 size-[30rem] rounded-full opacity-[0.06] blur-3xl"
        style={{ backgroundColor: "var(--accent)" }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(26rem,1fr)] lg:gap-16 xl:gap-24">
          <div className="min-w-0">
            <SectionHeading
              id="contact-title"
              eyebrow="CONTACT"
              title="Start a Project"
              description="Tell me what you want to build or what process you want to improve. I&apos;ll use the details below to understand the project before we discuss the next step."
            />

            <p className="mt-8 max-w-xl text-sm leading-6 text-[var(--muted-foreground)] sm:text-base sm:leading-7">
              I work on projects involving web applications, AI assistants, Telegram automation, backend systems and infrastructure.
            </p>

            <ul className="mt-7 grid max-w-xl gap-x-6 gap-y-3 sm:grid-cols-2" aria-label="Project areas">
              {projectAreas.map((area) => (
                <li key={area} className="flex items-center gap-3 border-t pt-3 text-sm text-[var(--foreground)]">
                  <span className="size-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                  {area}
                </li>
              ))}
            </ul>

            {siteConfig.telegram ? (
              <div className="mt-12 max-w-xl border-t pt-7">
                <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">PREFER TO MESSAGE DIRECTLY?</p>
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-lg border bg-[var(--surface)] px-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--muted-foreground)]"
                >
                  Message me on Telegram <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            ) : null}

            <div className="mt-12 max-w-xl border-t pt-7">
              <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">WHAT HAPPENS NEXT</p>
              <ol className="mt-5 grid gap-4 sm:grid-cols-3">
                {nextSteps.map((step, index) => (
                  <li key={step} className="border-l border-[color:color-mix(in_srgb,var(--accent)_42%,var(--border))] pl-3">
                    <span className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-sm leading-6 text-[var(--foreground)]">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="min-w-0">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
