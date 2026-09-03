import {
  Code2,
  Cloud,
  Network,
  Megaphone,
  BarChart3,
  Palette,
  Brain,
  Database,
  Plug,
  ShieldCheck,
  Lock,
  Eye,
  FileCheck,
  type LucideIcon,
} from "lucide-react"

export type Service = {
  id: string
  title: string
  short: string
  icon: LucideIcon
  outcome: string
  details: string[]
}

export const services: Service[] = [
  {
    id: "software-development",
    title: "Software Development",
    short: "Web & mobile applications engineered for scale, speed, and reliability.",
    icon: Code2,
    outcome: "Reliable systems your organisation can depend on.",
    details: [
      "Custom web platforms built with React, Next.js, and modern TypeScript stacks.",
      "Native and cross-platform mobile apps for iOS and Android.",
      "API design, third-party integrations, and secure authentication systems.",
      "Automated testing, CI/CD pipelines, and long-term maintenance support.",
    ],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing & Migration",
    short: "Move to the cloud with confidence — architecture, migration, and optimisation.",
    icon: Cloud,
    outcome: "Lower infrastructure costs and higher uptime.",
    details: [
      "Cloud strategy and architecture for AWS, Azure, and Google Cloud.",
      "Seamless migration of legacy systems with zero-downtime cutovers.",
      "Containerisation with Docker & Kubernetes and infrastructure-as-code.",
      "Cost optimisation, monitoring, and 24/7 reliability engineering.",
    ],
  },
  {
    id: "it-consultancy",
    title: "IT Consultancy & Networking",
    short: "Strategic IT guidance and robust networking infrastructure for growing businesses.",
    icon: Network,
    outcome: "Infrastructure that scales with your operations.",
    details: [
      "IT infrastructure audits and digital transformation roadmaps.",
      "Network design, installation, and security hardening.",
      "Cybersecurity assessments and compliance guidance.",
      "Managed IT support and proactive system monitoring.",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Social Media",
    short: "Data-driven campaigns that grow your audience and convert attention into revenue.",
    icon: Megaphone,
    outcome: "Measurable growth in reach and conversions.",
    details: [
      "SEO, content strategy, and search engine marketing (SEM).",
      "Social media management across all major platforms.",
      "Paid advertising campaigns with measurable ROI tracking.",
      "Brand storytelling and email marketing automation.",
    ],
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    short: "Turn raw data into decisions with dashboards, models, and predictive insights.",
    icon: BarChart3,
    outcome: "Decisions backed by accurate, timely data.",
    details: [
      "Business intelligence dashboards and real-time reporting.",
      "Data pipeline engineering and warehouse architecture.",
      "Predictive modelling and machine learning solutions.",
      "Customer analytics and behavioural segmentation.",
    ],
  },
  {
    id: "graphic-design",
    title: "Graphic Design & UI/UX",
    short: "Human-centred design that makes products beautiful, intuitive, and memorable.",
    icon: Palette,
    outcome: "Products your users genuinely love to use.",
    details: [
      "User research, wireframes, and interactive prototypes.",
      "Design systems and component libraries for scalable products.",
      "Brand identity, logo design, and visual guidelines.",
      "Usability testing and conversion-focused interface design.",
    ],
  },
]

export type Reason = {
  number: string
  title: string
  description: string
  highlight?: string
}

export const reasons: Reason[] = [
  {
    number: "01",
    title: "We Understand Organisational Complexity",
    description:
      "We design systems that fit into complex organisational environments. From NGOs operating across multiple countries to enterprises handling sensitive data, we understand workflows, compliance, and scale.",
    highlight: "5+ countries supported",
  },
  {
    number: "02",
    title: "AI & Automation at the Core",
    description:
      "We embed intelligent automation, predictive analytics, and AI assistants into the systems we build — so your organisation makes faster, smarter, data-driven decisions.",
  },
  {
    number: "03",
    title: "Strong Focus on Security & Data Protection",
    description:
      "Every system is designed with data protection, access control, and auditability as foundational requirements — not afterthoughts. Compliance is built in from day one.",
  },
  {
    number: "04",
    title: "Long-term Partnership Model",
    description:
      "We don't disappear after delivery. We provide SLA-backed support, ongoing patching, and continuous improvement so your systems evolve with your organisation.",
  },
]

export type Stat = {
  value: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Enterprise Systems Delivered" },
  { value: 30, suffix: "+", label: "Institutional Clients Served" },
  { value: 5, suffix: "+", label: "Countries of Active Deployment" },
  { value: 5, suffix: "yr", label: "Delivering at Scale" },
]

export type Phase = {
  number: string
  label: string
  title: string
  description: string
}

export const processPhases: Phase[] = [
  {
    number: "01",
    label: "PHASE ONE",
    title: "Discovery & Systems Assessment",
    description:
      "We start by understanding your operations, infrastructure, compliance needs, and goals before implementation. This covers stakeholder workshops, technical audits, governance mapping, and an architecture recommendation.",
  },
  {
    number: "02",
    label: "PHASE TWO",
    title: "Architecture & Development",
    description:
      "We build to spec with clear milestones, regular reviews, and rigorous QA throughout. Every stage includes security testing, system integration, and full documentation.",
  },
  {
    number: "03",
    label: "PHASE THREE",
    title: "Deployment & Long-Term Support",
    description:
      "We manage rollout, train your team, and provide SLA-backed support that keeps your system performing and evolving with ongoing patching and continuous improvement.",
  },
]

export type CaseStudy = {
  id: string
  title: string
  sector: string
  region: string
  image: string
  challenge: string
  solution: string
  outcome: string
  outcomeValue: string
  tags: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    id: "medialert",
    title: "MediAlert",
    sector: "Healthcare Platform",
    region: "Malawi",
    image: "/images/case-medialert.png",
    challenge:
      "Patient care was fragmented across facilities with no centralised medication tracking, leading to missed reminders, poor adherence, and limited visibility for clinicians.",
    solution:
      "A secure, patient-facing platform that digitises medication reminders, vitals tracking, and emergency alerts — giving clinicians real-time visibility while maintaining strict patient confidentiality.",
    outcome: "Faster care coordination and a better patient experience.",
    outcomeValue: "97%",
    tags: ["React Native", "Node.js", "AWS", "FHIR API"],
  },
  {
    id: "pzahome",
    title: "PezaHome",
    sector: "Real Estate Marketplace",
    region: "East Africa",
    image: "/images/case-pezahome.png",
    challenge:
      "Property listings were scattered across informal channels with no verification, making transactions slow, opaque, and difficult to trust for buyers and agents alike.",
    solution:
      "A full-stack marketplace with virtual tours, verified listings, mortgage calculators, and agent dashboards — bringing transparency and speed to property transactions.",
    outcome: "Trusted, data-driven property transactions at scale.",
    outcomeValue: "95%",
    tags: ["Next.js", "PostgreSQL", "Mapbox", "Stripe"],
  },
  {
    id: "agripay",
    title: "AgriPay",
    sector: "FinTech Solution",
    region: "Malawi & Zambia",
    image: "/images/case-agripay.png",
    challenge:
      "Agricultural cooperatives relied on manual, cash-based processes that were slow, error-prone, and left members without digital records of their transactions.",
    solution:
      "A mobile wallet and payment system built for cooperatives — enabling seamless transactions, digital record-keeping, and offline-first USSD access for rural members.",
    outcome: "Trusted, data-driven financial inclusion at scale.",
    outcomeValue: "92%",
    tags: ["Flutter", "Go", "Postgres", "USSD"],
  },
]

export type SecurityPillar = {
  title: string
  description: string
  icon: LucideIcon
}

export const securityPillars: SecurityPillar[] = [
  {
    title: "Secure Development Lifecycle",
    description:
      "Security requirements are integrated from design through deployment — not applied as a post-build layer.",
    icon: ShieldCheck,
  },
  {
    title: "Role-Based Access Control",
    description:
      "Granular access permissions ensuring staff and stakeholders see only the data and functions relevant to their role.",
    icon: Lock,
  },
  {
    title: "Data Residency & Encryption",
    description:
      "Data storage location policies and end-to-end encryption aligned to client jurisdiction and regulatory requirements.",
    icon: Database,
  },
  {
    title: "Audit Logging & Monitoring",
    description:
      "Comprehensive activity logs and real-time monitoring to support compliance reporting and incident investigation.",
    icon: FileCheck,
  },
]

export type CoreValue = {
  title: string
  description: string
  icon: LucideIcon
}

export const coreValues: CoreValue[] = [
  {
    title: "Strategic Planning",
    description:
      "We start every engagement with a clear roadmap, ensuring every technical decision serves your long-term business goals.",
    icon: Eye,
  },
  {
    title: "Transparency",
    description:
      "Open communication, honest timelines, and full visibility into progress — no surprises, ever.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description:
      "We relentlessly explore emerging technologies to give our clients a durable competitive edge.",
    icon: Brain,
  },
  {
    title: "Customer-Centricity",
    description:
      "Every solution is designed around your users' real needs and your business's measurable outcomes.",
    icon: Palette,
  },
]

export type TeamMember = {
  role: string
  name: string
  description: string
  icon: LucideIcon
}

export const teamLeads: TeamMember[] = [
  {
    role: "Technical Lead",
    name: "Architecture & Engineering",
    description:
      "Owns software architecture, code quality, and the engineering standards that keep products reliable at scale.",
    icon: Code2,
  },
  {
    role: "Creative Lead",
    name: "Design & Brand",
    description:
      "Drives visual identity, UX research, and product design — making sure everything we ship is intuitive and beautiful.",
    icon: Palette,
  },
  {
    role: "Network & Systems Lead",
    name: "Infrastructure & Security",
    description:
      "Manages cloud infrastructure, networking, and cybersecurity so systems stay fast, secure, and always available.",
    icon: Network,
  },
  {
    role: "Business Development Lead",
    name: "Growth & Partnerships",
    description:
      "Builds client relationships, identifies growth opportunities, and ensures every project delivers real business value.",
    icon: Megaphone,
  },
]

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
]

export const companyInfo = {
  name: "MindSynk Technologies",
  tagline: "Powering Progress Through Technology",
  email: "hello@mindsynk.tech",
  phone: "+265 888 393 252",
  whatsapp: "265992092766",
  location: "Lilongwe, Malawi",
  address: "Area 47, Lilongwe, Malawi",
  hours: "Mon - Fri: 08:00am - 05:00pm",
}
