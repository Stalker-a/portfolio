import { ProjectCard } from "@/components/projects/project-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      aria-labelledby="projects-title"
      className="relative isolate overflow-hidden py-20 sm:py-28 lg:py-32"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-80"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in srgb, var(--accent) 40%, var(--border)), transparent)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-72 top-1/4 size-[34rem] rounded-full opacity-[0.06] blur-3xl"
        style={{ backgroundColor: "var(--accent)" }}
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          id="projects-title"
          eyebrow="Selected Work"
          title="Selected Projects"
          description="A few examples of systems built around real business and technical problems."
        />

        <p className="mt-9 flex items-center gap-3 font-mono text-xs tracking-[0.12em] text-[var(--muted-foreground)]">
          <span className="h-px w-8 bg-[var(--border)]" aria-hidden="true" />
          FROM PROBLEMS TO WORKING SYSTEMS
        </p>

        <div className="mt-10 sm:mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
