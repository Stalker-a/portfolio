import type { Metadata } from "next";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronLeft } from "lucide-react";
import Link from "next/link";

import { HomeLabArchitecture } from "@/components/case-studies/home-lab-architecture";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { projects } from "@/data/projects";

const project = projects[2];
const heroImage = [project.images[0]];
const containersImage = [project.images[0]];
const serverMonitoringImage = [project.images[1]];
const websiteMonitoringImage = [project.images[2]];
const nodeStatusImage = [project.images[3]];

const projectOverview = [
  ["Platform", "Proxmox VE"],
  ["Architecture", "Linux Containers / LXC"],
  ["Storage", "Private self-hosted storage"],
  ["Remote Access", "Tailscale"],
] as const;

const infrastructureNeeds = [
  "Store files privately.",
  "Provide network access to internal resources.",
  "Reach services remotely.",
  "Run distinct services without mixing workloads.",
  "Host web workloads, AI and automation services.",
  "Operate Telegram bots.",
  "Monitor the server and websites.",
  "Keep services logically isolated.",
] as const;

const coreServices = ["Storage", "Edge / web", "3D Design", "AI", "Monitoring", "Telegram bots"] as const;

const containerWorkloads = [
  ["STORAGE", "Private files and self-hosted storage services."],
  ["EDGE", "Web and network-facing services."],
  ["PRINTDESIGN", "The 3D Design platform workload."],
  ["AI", "AI services for application workflows."],
  ["SENTINEL", "Infrastructure and website monitoring."],
  ["BOTS", "Telegram automation services."],
] as const;

const keyFeatures = [
  "Proxmox virtualization",
  "LXC container isolation",
  "Private file storage",
  "Samba file sharing",
  "Browser-based file access",
  "Secure remote access with Tailscale",
  "Self-hosted web services",
  "Telegram infrastructure monitoring",
  "Website availability monitoring",
  "Service health notifications",
] as const;

const systemEnables = [
  "Independent services can run in isolated workloads.",
  "Private files remain self-hosted.",
  "Internal services can be reached remotely through a private network.",
  "Server health can be checked from Telegram.",
  "Website failures can be detected automatically.",
  "Multiple applications can share one host while staying logically separated.",
  "A new service can be added as its own workload.",
] as const;

export const metadata: Metadata = {
  title: "Private Cloud & Home Lab | Case Study",
  description:
    "A self-hosted Proxmox infrastructure with private storage, Linux containers, secure remote access and automated monitoring.",
  openGraph: {
    title: "Private Cloud & Home Lab | Case Study",
    description:
      "A self-hosted Proxmox infrastructure with private storage, Linux containers, secure remote access and automated monitoring.",
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
      <ol className="flex flex-col gap-3 text-center font-mono text-[11px] tracking-[0.08em] text-[var(--muted-foreground)] sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center justify-center gap-3">
            <span className={index === steps.length - 1 ? "text-[var(--accent)]" : undefined}>{step}</span>
            {index < steps.length - 1 ? <ArrowDown size={14} className="text-[var(--accent)] sm:hidden" aria-hidden="true" /> : null}
            {index < steps.length - 1 ? <ArrowRight size={14} className="hidden text-[var(--accent)] sm:block" aria-hidden="true" /> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

function FeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3 text-sm leading-6 text-[var(--muted-foreground)]">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Check size={15} className="mt-1 shrink-0 text-[var(--accent)]" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PrivateCloudHomeLabCaseStudyPage() {
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
                <Eyebrow>CASE STUDY / 03</Eyebrow>
                <p className="mt-5 font-mono text-[11px] tracking-[0.12em] text-[var(--muted-foreground)]">
                  Infrastructure / Linux / Networking
                </p>
                <h1 id="case-study-title" className="mt-5 max-w-2xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                  Private Cloud &amp; Home Lab
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
                  A self-hosted infrastructure environment built for private storage, remote access, internal services, web workloads and automated monitoring.
                </p>
                <div className="mt-7">
                  <Badge className="normal-case tracking-normal">Self-hosted infrastructure</Badge>
                </div>
              </div>

              <div className="min-w-0">
                <ProjectGallery images={heroImage} priority projectTitle="PROXMOX INFRASTRUCTURE" />
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
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.84fr)_minmax(18rem,0.9fr)] lg:gap-20">
              <SectionHeading
                id="problem-title"
                eyebrow="The Problem"
                title="One private environment needs to support several kinds of work."
                description="Storage, remote access, application hosting and operations benefit from a clear infrastructure foundation with independent service boundaries."
              />
              <div className="border-t pt-6 lg:mt-7">
                <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">INFRASTRUCTURE NEEDS</p>
                <div className="mt-5">
                  <FeatureList items={infrastructureNeeds} />
                </div>
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
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.76fr)_minmax(0,1fr)] lg:gap-20">
              <SectionHeading
                id="solution-title"
                eyebrow="The Solution"
                title="A self-hosted platform built around separated Linux workloads."
                description="Proxmox VE provides the infrastructure layer, while Linux containers keep storage, web workloads, AI, monitoring and Telegram automation as distinct services."
              />
              <div className="grid gap-3 sm:grid-cols-2">
                {coreServices.map((service) => (
                  <div key={service} className="flex items-center gap-3 border-b py-3 text-sm text-[var(--foreground)]">
                    <Check size={15} className="shrink-0 text-[var(--accent)]" aria-hidden="true" />
                    {service}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10 sm:mt-12">
              <FlowStrip steps={["Physical Host", "Proxmox VE", "Linux Containers", "Independent Services"]} />
            </div>
            <div className="mt-10 sm:mt-12">
              <HomeLabArchitecture />
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="virtualization-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.83fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <SectionHeading
                  id="virtualization-title"
                  eyebrow="Virtualized Infrastructure"
                  title="The host is managed as an environment for independent services."
                  description="Proxmox VE manages the host infrastructure. Workloads are separated into LXC containers so resources can be distributed and services remain logically isolated."
                />
              </div>
              <div className="min-w-0">
                <ProjectGallery images={containersImage} projectTitle="LXC CONTAINER OVERVIEW" />
              </div>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="containers-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_48%,var(--background))] py-20 sm:py-28 lg:py-32">
          <Container>
            <SectionHeading
              id="containers-title"
              eyebrow="Container Architecture"
              title="Workloads are named around the services they support."
              description="The infrastructure view uses service names rather than internal IDs to make the role of each container immediately understandable."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {containerWorkloads.map(([name, description]) => (
                <Surface key={name} className="min-w-0">
                  <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">LXC WORKLOAD</p>
                  <h3 className="mt-4 text-xl font-medium tracking-[-0.03em] text-[var(--foreground)]">{name}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{description}</p>
                </Surface>
              ))}
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="storage-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-20">
              <SectionHeading
                id="storage-title"
                eyebrow="Private Storage"
                title="Private user storage with network and browser-based access."
                description="The storage workload uses Linux services, Samba and File Browser with SSD storage underneath the self-hosted environment."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <Surface>
                  <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">SAMBA</p>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted-foreground)]">Network file access for devices on the private network.</p>
                </Surface>
                <Surface>
                  <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">FILE BROWSER</p>
                  <p className="mt-4 text-sm leading-6 text-[var(--muted-foreground)]">Browser-based access to files when a desktop file share is not the right interface.</p>
                </Surface>
              </div>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="remote-access-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_48%,var(--background))] py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-20">
              <SectionHeading
                id="remote-access-title"
                eyebrow="Secure Remote Access"
                title="Tailscale connects devices to the private infrastructure network."
                description="Internal services can be reached remotely without publishing each service directly to the internet."
              />
              <FlowStrip steps={["Laptop / Phone", "Tailscale", "Private Network", "Internal Services"]} />
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="monitoring-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.83fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <SectionHeading
                  id="monitoring-title"
                  eyebrow="Infrastructure Monitoring"
                  title="Server health is available from a Telegram monitoring bot."
                  description="The privacy-safe system screen shows connection and server state alongside uptime, CPU, memory, disk, container and website information."
                />
                <div className="mt-7 flex flex-wrap gap-2">
                  {["Server status", "Containers", "Websites", "Storage"].map((label) => (
                    <Badge key={label} variant="subtle" className="normal-case tracking-normal">{label}</Badge>
                  ))}
                </div>
              </div>
              <div className="min-w-0">
                <ProjectGallery images={serverMonitoringImage} projectTitle="TELEGRAM SERVER STATUS" />
              </div>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="monitoring-architecture-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_48%,var(--background))] py-20 sm:py-28 lg:py-32">
          <Container>
            <SectionHeading
              id="monitoring-architecture-title"
              eyebrow="Monitoring Architecture"
              title="Health checks turn infrastructure events into a useful notification path."
              description="The monitoring flow connects host and service state to Telegram, where an administrator can review a problem or a recovery notification."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <Surface>
                <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">HEALTH FLOW</p>
                <div className="mt-5">
                  <FlowStrip steps={["Proxmox / Services", "Monitoring", "Health Checks", "Telegram Bot", "Administrator"]} />
                </div>
              </Surface>
              <Surface>
                <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--accent)]">EVENT FLOW</p>
                <div className="mt-5">
                  <FlowStrip steps={["Service Problem", "Detection", "Telegram Alert"]} />
                </div>
                <p className="mt-5 text-sm leading-6 text-[var(--muted-foreground)]">When a monitored service recovers, the system can also send a recovery notification.</p>
              </Surface>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="website-monitoring-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.83fr)] lg:gap-20">
              <div className="min-w-0 lg:order-2">
                <SectionHeading
                  id="website-monitoring-title"
                  eyebrow="Website Health Monitoring"
                  title="Web availability checks have their own visible status."
                  description="The monitored website screen includes availability, HTTP response, response time, SSL state and the last successful check."
                />
                <Button href="/projects/3d-design-digital-platform" variant="secondary" className="mt-7" trailingIcon={<ArrowUpRight size={16} />}>
                  View 3D Design Digital Platform Case Study
                </Button>
              </div>
              <div className="min-w-0 lg:order-1">
                <ProjectGallery images={websiteMonitoringImage} projectTitle="WEBSITE HEALTH MONITORING" />
              </div>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="host-resources-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_48%,var(--background))] py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:gap-20">
              <div>
                <SectionHeading
                  id="host-resources-title"
                  eyebrow="Host Resources"
                  title="The Proxmox node view keeps host resources observable."
                  description="CPU, memory, disk, load and uptime are visible in the node dashboard without treating a single snapshot as a performance claim."
                />
              </div>
              <div className="min-w-0">
                <ProjectGallery images={nodeStatusImage} projectTitle="PROXMOX NODE STATUS" />
              </div>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="project-foundation-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:gap-20">
              <SectionHeading
                id="project-foundation-title"
                eyebrow="Infrastructure Behind the Projects"
                title="The private cloud is a foundation for the application work above it."
                description="Virtualization, storage, remote access and monitoring support the systems that run as independent workloads."
              />
              <Surface>
                <ol className="space-y-3 font-mono text-sm text-[var(--muted-foreground)]">
                  {[
                    "Private Cloud",
                    "3D Design Digital Platform",
                    "AI Services",
                    "3DD Telegram Automation",
                    "Monitoring",
                  ].map((item, index) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className={index === 0 ? "text-[var(--accent)]" : undefined}>{item}</span>
                      {index < 4 ? <ArrowDown size={14} className="ml-auto text-[var(--accent)]" aria-hidden="true" /> : null}
                    </li>
                  ))}
                </ol>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button href="/projects/3d-design-digital-platform" variant="secondary" trailingIcon={<ArrowUpRight size={16} />}>
                    3D Design Digital Platform
                  </Button>
                  <Button href="/projects/3dd-telegram-automation" variant="secondary" trailingIcon={<ArrowUpRight size={16} />}>
                    3DD Telegram Automation
                  </Button>
                </div>
              </Surface>
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="features-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_48%,var(--background))] py-20 sm:py-28 lg:py-32">
          <Container>
            <SectionHeading
              id="features-title"
              eyebrow="Key Features"
              title="The environment combines infrastructure, access and operations."
              description="Each feature is represented by the working architecture and privacy-safe system screens in this case study."
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

        <Section aria-labelledby="technologies-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <SectionHeading
              id="technologies-title"
              eyebrow="Technologies"
              title="A focused, self-hosted infrastructure stack."
              description="The case study only lists technologies represented by the deployed infrastructure and services."
            />
            <div className="mt-10 flex flex-wrap gap-3">
              {project.technologies.map((technology) => (
                <Badge key={technology} variant="subtle" className="normal-case tracking-normal">{technology}</Badge>
              ))}
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="screens-title" className="border-y bg-[color:color-mix(in_srgb,var(--surface)_48%,var(--background))] py-20 sm:py-28 lg:py-32">
          <Container>
            <SectionHeading
              id="screens-title"
              eyebrow="Real Infrastructure Screens"
              title="Privacy-safe views of the running infrastructure."
              description="The gallery contains the Proxmox container overview, Telegram server monitoring, website health monitoring and Proxmox node status."
            />
            <div className="mt-10 sm:mt-12">
              <ProjectGallery images={project.images} projectTitle="PRIVATE CLOUD & HOME LAB" />
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="value-title" className="py-20 sm:py-28 lg:py-32">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
              <SectionHeading
                id="value-title"
                eyebrow="What the System Enables"
                title="Systems engineering behind real applications."
                description="Virtualization, Linux infrastructure, private storage, networking, remote access, application hosting, monitoring and automation are designed as one connected environment."
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
                <Eyebrow>SELF-HOSTED INFRASTRUCTURE</Eyebrow>
                <h2 id="case-study-cta-title" className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.04em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
                  Need Infrastructure Behind Your Application?
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
                  I build and deploy self-hosted systems, monitoring and backend infrastructure for real applications.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-0 lg:justify-end">
                <Button href="/#projects" trailingIcon={<ArrowUpRight size={17} />}>
                  Back to Projects
                </Button>
                <Button href="/projects/3d-design-digital-platform" variant="secondary" trailingIcon={<ArrowUpRight size={17} />}>
                  View Web Platform Case Study
                </Button>
                <Button href="/projects/3dd-telegram-automation" variant="secondary" trailingIcon={<ArrowUpRight size={17} />}>
                  View Telegram Automation Case Study
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
