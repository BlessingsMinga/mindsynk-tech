import {
  Code2,
  Cloud,
  Network,
  Megaphone,
  BarChart3,
  Palette,
  Target,
  Eye,
  Lightbulb,
  Users,
  HeartHandshake,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react"

export type Service = {
  id: string
  title: string
  short: string
  icon: LucideIcon
  details: string[]
}

export const services: Service[] = [
  {
    id: "software-development",
    title: "Software Development",
    short: "Web & mobile applications engineered for scale, speed, and reliability.",
    icon: Code2,
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
    details: [
      "User research, wireframes, and interactive prototypes.",
      "Design systems and component libraries for scalable products.",
      "Brand identity, logo design, and visual guidelines.",
      "Usability testing and conversion-focused interface design.",
    ],
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
    icon: Target,
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
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description:
      "We work as an extension of your team, blending our technical depth with your domain expertise.",
    icon: Users,
  },
  {
    title: "Customer-Centricity",
    description:
      "Every solution is designed around your users' real needs and your business's measurable outcomes.",
    icon: HeartHandshake,
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

export type Project = {
  id: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: "medialert",
    title: "MediAlert",
    category: "Healthcare Platform",
    description:
      "A patient-facing mobile platform for medication reminders, vitals tracking, and emergency alerts — keeping care connected 24/7.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/098bf667ba34.png",
    tags: ["React Native", "Node.js", "AWS", "FHIR API"],
  },
  {
    id: "pzahome",
    title: "PezaHome",
    category: "Real Estate Marketplace",
    description:
      "A full-stack property listing platform with virtual tours, mortgage calculators, and agent dashboards for the East African market.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1d27ee944461.png",
    tags: ["Next.js", "PostgreSQL", "Mapbox", "Stripe"],
  },
  {
    id: "agripay",
    title: "AgriPay",
    category: "FinTech Solution",
    description:
      "A mobile wallet and payment system built for agricultural cooperatives — enabling seamless transactions and digital records.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2c3d55f59f1a.png",
    tags: ["Flutter", "Go", "Postgres", "USSD"],
  },
  {
    id: "insighthub",
    title: "InsightHub",
    category: "Data Analytics Dashboard",
    description:
      "A business intelligence platform that unifies data sources into real-time dashboards, forecasts, and automated reports.",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/4b34883d6c00.png",
    tags: ["React", "Python", "BigQuery", "D3.js"],
  },
]

export type Stat = {
  value: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "yr", label: "Industry Experience" },
  { value: 99, suffix: "%", label: "Client Retention" },
]

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

export const companyInfo = {
  name: "MindSynk Technologies",
  tagline: "Powering Progress Through Technology",
  email: "hello@mindsynk.tech",
  phone: "+265 991 234 567",
  location: "Lilongwe, Malawi",
  address: "Area 47, Lilongwe, Malawi",
}
