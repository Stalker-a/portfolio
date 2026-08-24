import type { Metadata } from "next";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronLeft } from "lucide-react";
import Link from "next/link";

import { AutomationArchitecture } from "@/components/case-studies/automation-architecture";
import { Navbar } from "@/components/layout/navbar";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

const project = projects[1];
const heroImage = [project.images[0]];
const leadBotImage = [project.images[1]];

const projectOverview = [
  ["System type", "Telegram business automation"],
  ["Interfaces", "Client Bot / Lead Bot"],
  ["Workflow", "Customer / Lead / Business"],
  ["Integration", "Website + Telegram"],
] as const;

const solutionComponents = [
  "Client Telegram Bot",
  "Lead Management Bot",
  "Website integration",
  "Structured lead collection",
  "Request lifecycle",
  "Customer completion notifications",
] as const;

const websiteFlow = [
  { title: "Website", description: "A request can begin on the web platform" },
  { title: "Lead System", description: "Collects structured request information" },
  { title: "Lead Management Bot", description: "Presents incoming leads to the business" },
  { title: "Business Owner", description: "Processes the request and updates its lifecycle" },
] as const;

const websiteBranches = [
  { title: "Request Form", description: "Captures a website request" },
  { title: "AI Assistant", description: "Can guide a visitor toward a request" },
] as const;

const customerFlow = [
  { title: "Customer", description: "Starts a conversation in Telegram" },
  { title: "Client Telegram Bot", description: "Guides request collection step by step" },
  { title: "Structured Request", description: "Creates a lead with a request ID" },
  { title: "Lead System", description: "Routes the request for business processing" },
] as const;

const completionFlow = [
  { title: "Business Owner", description: "Confirms the work is complete" },
  { title: "Complete Request", description: "Moves the request through completion" },
  { title: "Customer Notification", description: "Queues a completion message for the customer" },
] as const;

const clientRequestFlow = [
  "Start",
  "Name",
  "Contact",
  "Task",
  "Request ID",
  "Business Processing",
  "Completion Notification",
] as const;

const keyFeatures = [
  "Structured lead collection",
  "Website-to-Telegram requests",
  "Customer request flow",
  "Internal lead notifications",
  "Unique request IDs",
  "Request completion workflow",
  "Customer completion notifications",
  "Lead archive workflow",
  "Customer data cleanup after completion where applicable",
] as const;

const systemEnables = [
  "Customer messages become structured requests.",
  "Website and Telegram requests can enter one workflow.",
  "The business receives the information needed to process a request.",
  "Every request has an ID.",
  "Request completion can trigger a customer notification.",
  "Completed lead information can be cleaned or archived.",
  "Customer and business interfaces remain separated.",
] as const;

export const metadata: Metadata = {
  title: "3DD Telegram Automation | Case Study",
  description:
    "A Telegram automation system connecting customer requests, website leads and internal business workflows.",
  openGraph: {
    title: "3DD Telegram Automation | Case Study",
    description:
      "A Telegram automation system connecting customer requests, website leads and internal business workflows.",
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

function FlowStrip({ steps }: { steps: readonly string[] }) {
  return (
    <div className="rounded-2xl border bg-[var(--surface)] p-5 sm:p-6">
      <ol className="grid gap-3 text-center font-mono text-[11px] tracking-[0.08em] text-[var(--muted-foreground)] sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center justify-center gap-3 border-b py-3 last:border-b-0 sm:even:border-l sm:last:border-b lg:border-b-0 lg:py-1 lg:not-last:border-r lg:even:border-l-0">
            <span className={index === steps.length - 1 ? "text-[var(--accent)]" : undefined}>{step}</span>
            {index < steps.length - 1 ? <ArrowDown size={14} className="text-[var(--accent)] sm:hidden" /> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function TelegramAutomationCaseStudyPage() {
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

            <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14 xl:gap-20">
              <div className="min-w-0">
                <Eyebrow>CASE STUDY / 02</Eyebrow>
                <p className="mt-5 font-mono text-[11px] tracking-[0.12em] text-[var(--muted-foreground)]">
                  {project.category}
                </p>
                <h1 id="case-study-title" className="mt-5 max-w-2xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
                  A connected Telegram automation system for collecting customer requests, routing structured leads to the business and managing the request lifecycle.
                </p>
                <div className="mt-7">
                  <Badge className="normal-case tracking-normal">Connected automation workflow</Badge>
                </div>
              </div>

              <div className="min-w-0">
                <ProjectGallery images={heroImage} priority projectTitle="CLIENT TELEGRAM BOT" />
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
                  <dt className="font-mono text-[10px] tracking-[0.12em] text-[var(--muted-foreground)]">{label}</dt>
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
                title="A customer request can start in more than one place."
                description="Requests may begin on a website or in a client Telegram bot. Both entry points need to become the same structured information before the business can process them."
              />
              <div className="border-t pt-6 lg:mt-7">
                <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">BUSINESS NEED</p>
                <p className="mt-5 text-base leading-7 text-[var(--muted-foreground)]">
                  A conversation is useful, but it needs a clear path into a request lifecycle that the business can follow from creation through completion or archive.
                </p>
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
                title="A connected business automation system, not a single Telegram bot."
                description="Customer conversations, website requests, internal lead handling and completion notifications are connected in one workflow around the business process."
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
              {["Conversation", "Structured Request", "Lead Management", "Business Processing", "Completion", "Customer Notification"].map((step, index, steps) => (
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
              title="Website and Telegram entry points meet in one lead pipeline."
              description="The architecture keeps the customer interface separate from internal lead management while giving both paths a shared destination."
            />
            <div className="mt-10 sm:mt-12">
              <AutomationArchitecture
                completionFlow={completionFlow}
                customerFlow={customerFlow}
                websiteBranches={websiteBranches}
                websiteFlow={websiteFlow}
              />
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="client-bot-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_48%,var(--background))] py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <SectionHeading
                  id="client-bot-title"
                  eyebrow="Client Telegram Bot"
                  title="A guided request flow for the customer."
                  description="The privacy-safe system screen shows the bot guiding a request from a start command through name, contact and task details, then confirming that the request was accepted with its own ID."
                />
                <ul className="mt-7 space-y-3 text-sm leading-6 text-[var(--muted-foreground)]">
                  {[
                    "Starts a request conversation.",
                    "Collects a name, contact and task description.",
                    "Creates a unique request ID when the request is accepted.",
                    "Can show a completion notification after business processing.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check size={15} className="mt-1 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="min-w-0">
                <ProjectGallery images={heroImage} projectTitle="CLIENT REQUEST FLOW" />
              </div>
            </div>

            <div className="mt-12">
              <FlowStrip steps={clientRequestFlow} />
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="lead-bot-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.78fr)] lg:gap-20">
              <div className="min-w-0 lg:order-2">
                <SectionHeading
                  id="lead-bot-title"
                  eyebrow="Lead Management Bot"
                  title="A separate interface for incoming business requests."
                  description="The internal privacy-safe screen shows lead records with request ID, status, creation time, customer, contact, Telegram, task description and request source."
                />
                <div className="mt-7 flex flex-wrap gap-2">
                  <Badge variant="subtle" className="normal-case tracking-normal">/done</Badge>
                  <Badge variant="subtle" className="normal-case tracking-normal">/archive</Badge>
                </div>
                <p className="mt-5 max-w-xl text-sm leading-6 text-[var(--muted-foreground)]">
                  These commands represent the request workflow shown by the bot interface; they are not presented as a claimed database implementation.
                </p>
              </div>
              <div className="min-w-0 lg:order-1">
                <ProjectGallery images={leadBotImage} projectTitle="LEAD MANAGEMENT BOT" />
              </div>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="lifecycle-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_48%,var(--background))] py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <SectionHeading
                id="lifecycle-title"
                eyebrow="Request Lifecycle"
                title="A visible lifecycle for every request."
                description="The workflow distinguishes the request state from the archive path without assuming a specific storage or database model."
              />
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border bg-[var(--surface)] p-5 sm:p-6">
                  <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">REQUEST STATE</p>
                  <ol className="mt-5 space-y-3 font-mono text-sm text-[var(--foreground)]">
                    {["NEW REQUEST", "PROCESSING", "COMPLETED"].map((state, index) => (
                      <li key={state} className="flex items-center gap-3">
                        <span className="flex size-6 items-center justify-center rounded-md border text-[10px] text-[var(--accent)]">{index + 1}</span>
                        {state}
                        {index < 2 ? <ArrowDown size={14} className="ml-auto text-[var(--accent)]" aria-hidden="true" /> : null}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="rounded-2xl border bg-[var(--surface)] p-5 sm:p-6">
                  <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">ARCHIVE PATH</p>
                  <ol className="mt-5 space-y-3 font-mono text-sm text-[var(--foreground)]">
                    {["REQUEST", "ARCHIVE"].map((state, index) => (
                      <li key={state} className="flex items-center gap-3">
                        <span className="flex size-6 items-center justify-center rounded-md border text-[10px] text-[var(--accent)]">{index + 1}</span>
                        {state}
                        {index === 0 ? <ArrowDown size={14} className="ml-auto text-[var(--accent)]" aria-hidden="true" /> : null}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="completion-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1fr)] lg:gap-20">
              <SectionHeading
                id="completion-title"
                eyebrow="Completion Workflow"
                title="Completion can close the loop with the customer."
                description="The completion workflow can remove stored lead data, clean related conversation context where applicable, and queue a customer notification."
              />
              <div className="border-t pt-6 lg:mt-7">
                <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">WHEN /DONE IS USED</p>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-[var(--muted-foreground)]">
                  {[
                    "The request can be marked as completed.",
                    "Related stored lead data can be cleaned where applicable.",
                    "A completion notification can be queued for the customer.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check size={15} className="mt-1 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="data-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_48%,var(--background))] py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <SectionHeading
                id="data-title"
                eyebrow="Customer Data Lifecycle"
                title="Request data follows the workflow, not a generic security claim."
                description="The system can clean stored lead information after a request is completed where applicable. No compliance or security certification is claimed here."
              />
              <FlowStrip steps={["Customer provides data", "Request processing", "Business completes request", "Stored lead data can be cleaned"]} />
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="integration-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <SectionHeading
                id="integration-title"
                eyebrow="Website → Telegram"
                title="A web platform can enter the same lead workflow."
                description="The 3D Design Digital Platform request form feeds the lead system, where Telegram routes the structured request to the business."
              />
              <div className="rounded-2xl border bg-[var(--surface)] p-5 sm:p-6">
                <ol className="space-y-3 font-mono text-sm text-[var(--muted-foreground)]">
                  {["3ddesign.org.kz", "Request Form", "Lead System", "Telegram", "Business"].map((step, index, steps) => (
                    <li key={step} className="flex items-center gap-3">
                      <span className={index === steps.length - 1 ? "text-[var(--accent)]" : undefined}>{step}</span>
                      {index < steps.length - 1 ? <ArrowDown size={14} className="ml-auto text-[var(--accent)]" aria-hidden="true" /> : null}
                    </li>
                  ))}
                </ol>
                <Button href="/projects/3d-design-digital-platform" variant="secondary" className="mt-7 w-full sm:w-auto" trailingIcon={<ArrowUpRight size={16} />}>
                  View 3D Design Digital Platform Case Study
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="features-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_48%,var(--background))] py-20 sm:py-28 lg:py-32">
          <Container>
            <SectionHeading
              id="features-title"
              eyebrow="Key Features"
              title="Connected interfaces around a business request lifecycle."
              description="The feature set is organised around customer requests and internal business processing, not a generic bot demo."
            />
            <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-3 border-t pt-4 text-sm leading-6 text-[var(--muted-foreground)]">
                  <Check size={15} className="mt-1 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section aria-labelledby="screens-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <SectionHeading
              id="screens-title"
              eyebrow="Real System Screens"
              title="Privacy-safe views of the customer and lead interfaces."
              description="These public versions retain the working workflow while sensitive customer details are blurred."
            />
            <div className="mt-10 sm:mt-12">
              <ProjectGallery images={project.images} projectTitle="3DD TELEGRAM AUTOMATION" />
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="value-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_48%,var(--background))] py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <SectionHeading
                id="value-title"
                eyebrow="What the System Enables"
                title="One workflow for customers and the business."
                description="These are system capabilities, not unverified business metrics."
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
                <Eyebrow>CONNECTED AUTOMATION</Eyebrow>
                <h2 id="case-study-cta-title" className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                  Need a Similar Automation Workflow?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
                  I build Telegram bots and connected automation around real business processes.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
                <Button href="/#projects" trailingIcon={<ArrowUpRight size={17} />}>
                  Back to Projects
                </Button>
                <Button href="/projects/3d-design-digital-platform" variant="secondary" trailingIcon={<ArrowUpRight size={17} />}>
                  View Web Platform Case Study
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
}
