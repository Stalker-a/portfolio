export type ProjectImage = {
  alt: string;
  src: string;
};

export type Project = {
  caseStudyUrl: string;
  category: string;
  description: string;
  features: readonly string[];
  githubUrl: string | null;
  images: readonly ProjectImage[];
  liveUrl: string | null;
  number: string;
  problem: string;
  slug: string;
  status: "Live Project" | null;
  technologyLabel: string;
  technologies: readonly string[];
  title: string;
};

export const projects = [
  {
    caseStudyUrl: "/projects/3d-design-digital-platform",
    category: "Web Platform / AI / Automation",
    description:
      "A multilingual digital platform for a 3D manufacturing studio with an embedded AI consultant, service pages, lead collection and Telegram integration.",
    features: [
      "Multilingual interface",
      "AI manufacturing consultant",
      "Lead collection",
      "File upload workflow",
      "Telegram integration",
      "Responsive web interface",
    ],
    githubUrl: null,
    images: [
      {
        src: "/images/projects/3d-design-platform/01-homepage.png",
        alt: "3D Design digital manufacturing website homepage",
      },
      {
        src: "/images/projects/3d-design-platform/02-ai-assistant-overview.png",
        alt: "3D Design embedded AI assistant",
      },
      {
        src: "/images/projects/3d-design-platform/03-contact-form.png",
        alt: "3D Design project request form",
      },
      {
        src: "/images/projects/3d-design-platform/04-ai-assistant-conversation.png",
        alt: "3D Design AI consultant conversation",
      },
    ],
    liveUrl: "https://3ddesign.org.kz/",
    number: "01",
    problem:
      "Brings 3D production services, consultation and request routing into one clear customer journey.",
    slug: "3d-design-digital-platform",
    status: "Live Project",
    technologyLabel: "PLATFORM COMPONENTS",
    technologies: ["Multilingual interface", "AI consultant", "Telegram integration"],
    title: "3D Design Digital Platform",
  },
  {
    caseStudyUrl: "/projects/3dd-telegram-automation",
    category: "Telegram / Automation / Business",
    description:
      "A Telegram-based customer communication and lead automation system connected to the 3D Design web platform.",
    features: [
      "Structured lead collection",
      "Website-to-Telegram requests",
      "Customer communication",
      "Lead notifications",
      "Order completion workflow",
      "Lead archive workflow",
    ],
    githubUrl: null,
    images: [
      {
        src: "/images/projects/telegram-automation/public/01-client-bot-public-blurred.png",
        alt: "Client Telegram bot collecting a structured business request",
      },
      {
        src: "/images/projects/telegram-automation/public/02-leads-bot-public-blurred.png",
        alt: "Telegram lead management bot processing business requests",
      },
    ],
    liveUrl: null,
    number: "02",
    problem:
      "Connects website enquiries and customer conversations to a structured delivery flow for the business.",
    slug: "3dd-telegram-automation",
    status: null,
    technologyLabel: "SYSTEM COMPONENTS",
    technologies: ["Website integration", "Telegram bots", "Lead automation"],
    title: "3DD Telegram Automation",
  },
  {
    caseStudyUrl: "/projects/private-cloud-home-lab",
    category: "Linux / Infrastructure / Monitoring",
    description:
      "A self-hosted private cloud and home-lab environment for storage, secure remote access and running internal services.",
    features: [
      "Proxmox virtualization",
      "Linux containers",
      "Private storage",
      "Server monitoring",
      "Website monitoring",
      "Telegram alerts",
      "Secure remote access",
      "Self-hosted services",
    ],
    githubUrl: null,
    images: [
      {
        src: "/images/projects/server-infrastructure/public/03-proxmox-containers-public.png",
        alt: "Proxmox VE infrastructure with multiple Linux containers",
      },
      {
        src: "/images/projects/server-infrastructure/public/01-monitoring-server-status-public.png",
        alt: "Telegram infrastructure monitoring bot showing server health",
      },
      {
        src: "/images/projects/server-infrastructure/public/02-monitoring-website-status-public.png",
        alt: "Telegram website monitoring showing availability HTTP and SSL status",
      },
      {
        src: "/images/projects/server-infrastructure/public/04-proxmox-node-status-public.png",
        alt: "Proxmox VE node resource monitoring dashboard",
      },
    ],
    liveUrl: null,
    number: "03",
    problem:
      "Keeps private storage, remote access and internal services in a self-hosted environment.",
    slug: "private-cloud-home-lab",
    status: null,
    technologyLabel: "INFRASTRUCTURE",
    technologies: ["Proxmox VE", "Linux", "LXC", "Samba", "File Browser", "Tailscale"],
    title: "Private Cloud & Home Lab",
  },
] as const satisfies readonly Project[];
