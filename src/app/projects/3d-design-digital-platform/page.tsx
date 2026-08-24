import type { Metadata } from "next";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronLeft } from "lucide-react";
import Link from "next/link";

import { CaseStudyArchitecture } from "@/components/case-studies/case-study-architecture";
import { Navbar } from "@/components/layout/navbar";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

const project = projects[0];
const heroImage = [project.images[0]];
const assistantImages = [project.images[1], project.images[3]];
const requestFormImage = [project.images[2]];

const projectOverview = [
  ["Project type", "Business web platform"],
  ["Core systems", "Website / AI / Lead Collection / Telegram"],
  ["Languages", "RU / EN / ZH / KZ"],
  ["Status", "Live"],
] as const;

const customerQuestions = [
  "Whether 3D printing or 3D scanning is the right service",
  "Whether a ready model, a photo or a physical sample is available",
  "Which material suits the task",
  "What information is needed to prepare an estimate",
] as const;

const solutionComponents = [
  "Multilingual website",
  "Structured service pages",
  "AI manufacturing consultant",
  "Project request form",
  "File upload workflow",
  "Telegram lead integration",
  "Responsive interface",
] as const;

const primaryFlow = [
  { title: "Visitor", description: "Starts with a manufacturing question or task" },
  { title: "Multilingual Website", description: "Presents services in four interface languages" },
  { title: "AI Assistant", description: "Guides the first consultation" },
  { title: "Project Qualification", description: "Clarifies the task context and available materials" },
  { title: "Request Form", description: "Collects contact details, task information and files" },
  { title: "Telegram Lead System", description: "Routes the structured request into the business workflow" },
  { title: "Business", description: "Receives the information needed for follow-up" },
] as const;

const supportingFlow = [
  { title: "Website", description: "Entry point for visitors" },
  { title: "Service Information", description: "Explains available manufacturing services" },
  { title: "Contact / Request", description: "Leads to the structured request path" },
] as const;

const systemEnables = [
  "Visitors can understand services before contacting the business.",
  "Users can get initial manufacturing guidance.",
  "Project information can be collected in a structured format.",
  "Files can be attached directly to a request.",
  "Website requests can enter the Telegram workflow.",
  "The interface works across multiple languages.",
] as const;

export const metadata: Metadata = {
  title: "3D Design Digital Platform | Case Study",
  description:
    "A multilingual 3D manufacturing web platform with an embedded AI consultant, project request workflow and Telegram integration.",
  openGraph: {
    title: "3D Design Digital Platform | Case Study",
    description:
      "A multilingual 3D manufacturing web platform with an embedded AI consultant, project request workflow and Telegram integration.",
    type: "website",
  },
};

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs font-medium tracking-[0.14em] text-[var(--accent)]">
      {children}
    </p>
  );
}

export default function ThreeDDesignCaseStudyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Section aria-labelledby="case-study-title" className="relative isolate overflow-hidden py-14 sm:py-20 lg:py-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(color-mix(in srgb, var(--border) 38%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--border) 38%, transparent) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "linear-gradient(to right, black, transparent 80%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-56 top-20 size-[32rem] rounded-full opacity-[0.1] blur-3xl"
            style={{ backgroundColor: "var(--accent)" }}
            aria-hidden="true"
          />

          <Container className="relative">
            <Link
              href="/#projects"
              className="inline-flex min-h-10 items-center gap-2 text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--accent)]"
            >
              <ChevronLeft size={16} aria-hidden="true" />
              Back to Projects
            </Link>

            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-14 xl:gap-20">
              <div className="min-w-0">
                <Eyebrow>CASE STUDY / 01</Eyebrow>
                <p className="mt-5 font-mono text-[11px] tracking-[0.12em] text-[var(--muted-foreground)]">
                  {project.category}
                </p>
                <h1 id="case-study-title" className="mt-5 max-w-2xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
                  A multilingual digital platform for a 3D manufacturing studio that combines service presentation, an embedded AI consultant, project request collection and Telegram-based business workflows.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Badge className="gap-2 normal-case tracking-normal">
                    <span className="size-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                    Live Project
                  </Badge>
                  <Button
                    href="https://3ddesign.org.kz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    trailingIcon={<ArrowUpRight size={16} />}
                  >
                    Visit Live Site
                  </Button>
                </div>
              </div>

              <div className="min-w-0">
                <ProjectGallery images={heroImage} priority projectTitle="PRODUCT HOMEPAGE" />
              </div>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="overview-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_54%,var(--background))] py-10 sm:py-12">
          <Container>
            <h2 id="overview-title" className="sr-only">Project overview</h2>
            <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {projectOverview.map(([label, value]) => (
                <div key={label} className="border-l border-[color:color-mix(in_srgb,var(--accent)_38%,var(--border))] pl-4">
                  <dt className="font-mono text-[10px] tracking-[0.12em] text-[var(--muted-foreground)]">
                    {label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium leading-6 text-[var(--foreground)]">{value}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </Section>

        <Section aria-labelledby="problem-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.94fr)_minmax(18rem,0.72fr)] lg:gap-20">
              <SectionHeading
                id="problem-title"
                eyebrow="The Problem"
                title="Manufacturing questions are rarely simple at the first visit."
                description="A 3D manufacturing service can be unfamiliar to a customer who only knows the result they need. The first conversation needs to turn an open-ended task into information that the business can work with."
              />
              <div className="border-t pt-6 lg:mt-7">
                <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">A CUSTOMER MAY NEED TO CLARIFY</p>
                <ul className="mt-5 space-y-3">
                  {customerQuestions.map((question) => (
                    <li key={question} className="flex gap-3 text-sm leading-6 text-[var(--muted-foreground)]">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="solution-title" className="relative isolate overflow-hidden border-y py-20 sm:py-28 lg:py-32">
          <div
            className="pointer-events-none absolute -left-72 top-1/3 size-[32rem] rounded-full opacity-[0.07] blur-3xl"
            style={{ backgroundColor: "var(--accent)" }}
            aria-hidden="true"
          />
          <Container className="relative">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.74fr)_minmax(0,1fr)] lg:gap-20">
              <SectionHeading
                id="solution-title"
                eyebrow="The Solution"
                title="A connected platform, not a static landing page."
                description="The website presents services, helps visitors understand the manufacturing process, supports an initial AI consultation and collects a structured project request for the business workflow."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {solutionComponents.map((component) => (
                  <div key={component} className="flex items-center gap-3 border-b py-3 text-sm text-[var(--foreground)]">
                    <Check size={15} className="shrink-0 text-[var(--accent)]" aria-hidden="true" />
                    {component}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-3 rounded-2xl border bg-[var(--surface)] p-5 font-mono text-[11px] tracking-[0.08em] text-[var(--muted-foreground)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 sm:p-6">
              {["Problem", "Understanding the manufacturing process", "AI consultation", "Structured project request", "Business workflow"].map((step, index, steps) => (
                <span key={step} className="flex items-center gap-3">
                  <span className={index === steps.length - 1 ? "text-[var(--accent)]" : undefined}>{step}</span>
                  {index < steps.length - 1 ? <ArrowDown size={14} className="text-[var(--accent)] sm:hidden" /> : null}
                  {index < steps.length - 1 ? <ArrowRight size={14} className="hidden text-[var(--accent)] sm:block" /> : null}
                </span>
              ))}
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="system-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <SectionHeading
              id="system-title"
              eyebrow="How the System Works"
              title="One path from a question to a usable business request."
              description="The architecture keeps service information, consultation and lead collection connected without turning the first customer interaction into a manual hand-off."
            />
            <div className="mt-10 sm:mt-12">
              <CaseStudyArchitecture branch={supportingFlow} steps={primaryFlow} />
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="assistant-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_48%,var(--background))] py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <SectionHeading
                  id="assistant-title"
                  eyebrow="Embedded AI Consultant"
                  title="Initial guidance inside the website interface."
                  description="The assistant helps visitors navigate 3D printing and scanning, asks whether a model, photo or physical sample is available, gathers task context and guides the user toward a project request."
                />
                <ul className="mt-7 space-y-3 text-sm leading-6 text-[var(--muted-foreground)]">
                  {[
                    "Consults on 3D printing and scanning.",
                    "Helps explain the relevant manufacturing path.",
                    "Clarifies available models, photos or physical samples.",
                    "Directs the visitor to the request form when more details are needed.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check size={15} className="mt-1 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-w-0">
                <ProjectGallery images={assistantImages} projectTitle="AI CONSULTANT" />
              </div>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="request-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.76fr)] lg:gap-20">
              <div className="min-w-0 lg:order-2">
                <SectionHeading
                  id="request-title"
                  eyebrow="From Conversation to Structured Request"
                  title="Collect the details that make a project actionable."
                  description="The request form gives the visitor one place to provide a name, phone number or Telegram username, a task description and project files."
                />
                <div className="mt-7 flex flex-wrap gap-2" aria-label="Supported file examples">
                  {["Photo", "STL", "STEP", "PDF", "Project archive"].map((fileType) => (
                    <Badge key={fileType} variant="subtle" className="normal-case tracking-normal">
                      {fileType}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="min-w-0 lg:order-1">
                <ProjectGallery images={requestFormImage} projectTitle="PROJECT REQUEST FORM" />
              </div>
            </div>

            <div className="mt-12 grid gap-3 rounded-2xl border bg-[var(--surface)] p-5 text-center font-mono text-[11px] tracking-[0.08em] text-[var(--muted-foreground)] sm:grid-cols-4 sm:items-center sm:p-6">
              {["Website Form", "Validated Request", "Telegram Lead Bot", "Business Owner"].map((step, index, steps) => (
                <span key={step} className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
                  <span className={index === steps.length - 1 ? "text-[var(--accent)]" : undefined}>{step}</span>
                  {index < steps.length - 1 ? <ArrowDown size={14} className="text-[var(--accent)] sm:hidden" /> : null}
                  {index < steps.length - 1 ? <ArrowRight size={14} className="hidden text-[var(--accent)] sm:block" /> : null}
                </span>
              ))}
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="languages-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_48%,var(--background))] py-16 sm:py-20">
          <Container>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
              <SectionHeading
                id="languages-title"
                eyebrow="Built for Multiple Languages"
                title="The interface supports four languages."
                description="Visitors can use the website interface in Russian, English, Chinese or Kazakh."
              />
              <p className="font-mono text-2xl font-medium tracking-[-0.04em] text-[var(--accent)] sm:text-4xl">
                RU <span className="text-[var(--border)]">/</span> EN <span className="text-[var(--border)]">/</span> ZH <span className="text-[var(--border)]">/</span> KZ
              </p>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="features-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <SectionHeading
              id="features-title"
              eyebrow="Key Features"
              title="Real capabilities built into the platform."
              description="Each feature supports a practical step in moving from an initial question to a project request."
            />
            <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 border-t pt-4 text-sm leading-6 text-[var(--muted-foreground)]">
                  <Check size={15} className="mt-1 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section aria-labelledby="screens-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_48%,var(--background))] py-20 sm:py-28 lg:py-32">
          <Container>
            <SectionHeading
              id="screens-title"
              eyebrow="Product Screens"
              title="A working interface across the customer journey."
              description="Homepage, embedded consultation, project request collection and an AI conversation are shown here from the live product interface."
            />
            <div className="mt-10 sm:mt-12">
              <ProjectGallery images={project.images} projectTitle="3D DESIGN PRODUCT SCREENS" />
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="value-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <SectionHeading
                id="value-title"
                eyebrow="What the System Enables"
                title="A clearer path for visitors and the business."
                description="These are system capabilities rather than unverified performance metrics."
              />
              <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {systemEnables.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-t pt-4 text-sm leading-6 text-[var(--muted-foreground)]">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="case-study-cta-title" className="border-t py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="rounded-2xl border bg-[var(--surface)] px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:items-end lg:justify-between lg:gap-12">
              <div>
                <Eyebrow>PROJECTS</Eyebrow>
                <h2 id="case-study-cta-title" className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                  Need a Similar System for Your Business?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
                  I build connected web platforms, AI assistants and automation around real business workflows.
                </p>
              </div>
              <Button href="/#projects" className="mt-8 shrink-0 lg:mt-0" trailingIcon={<ArrowUpRight size={17} />}>
                Back to Projects
              </Button>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
