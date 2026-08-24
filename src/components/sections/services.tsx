import { ServicesGrid } from "@/components/sections/services-grid";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

export function Services() {
  return (
    <Section
      id="services"
      aria-labelledby="services-title"
      className="relative overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in srgb, var(--border) 88%, transparent), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-64 top-1/3 size-[28rem] rounded-full opacity-[0.06] blur-3xl"
        style={{ backgroundColor: "var(--accent)" }}
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="What I Build"
          description="Practical software built around real business workflows, not technology for the sake of technology."
        />

        <ServicesGrid />

        <p className="mt-8 max-w-xl text-sm leading-6 text-[var(--muted-foreground)]">
          Need something more specific? Most projects combine several of these
          services.
        </p>
      </Container>
    </Section>
  );
}
