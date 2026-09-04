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
      "Web and mobile applications designed around each client's operational needs.",
      "Full-lifecycle delivery from concept and development to deployment and support.",
      "Secure authentication and third-party integrations where they add value.",
      "Ongoing maintenance and improvements for systems that need to grow over time.",
    ],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing & Migration",
    short: "Move to the cloud with confidence — architecture, migration, and optimisation.",
    icon: Cloud,
    outcome: "Lower infrastructure costs and higher uptime.",
    details: [
      "Migration of systems and data to secure cloud environments.",
      "Cloud planning that improves accessibility and scalability.",
      "Practical hosting and infrastructure choices for growing organisations.",
      "Ongoing optimisation to help manage infrastructure costs.",
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
      "Technology guidance aligned with business objectives and budgets.",
      "Practical IT support, updates, and backup planning.",
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
      "Campaign planning focused on visibility, engagement, and conversions.",
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
      "Data preparation and reporting for clearer performance tracking.",
      "Actionable analysis that identifies opportunities to improve performance.",
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
      "Human-centred interface design, wireframes, and prototypes.",
      "Brand design and visual guidelines for credible digital products.",
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
    title: "Integrated, Practical Solutions",
    description:
      "We connect your website, marketing, hosting, and support into one system, giving you a single accountable technology partner.",
  },
  {
    number: "02",
    title: "Built Around Your Needs",
    description:
      "We build custom systems around the way your organisation works, rather than forcing you into a one-size-fits-all platform.",
  },
  {
    number: "03",
    title: "Clear, Collaborative Delivery",
    description:
      "We scope work clearly, communicate openly, and work alongside your team from quotation through delivery.",
  },
  {
    number: "04",
    title: "Designed to Grow With You",
    description:
      "Our scalable solutions and maintenance options help you improve over time without replacing everything as your organisation grows.",
  },
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
      "We start by understanding your operations, users, goals, and budget before recommending a practical roadmap.",
  },
  {
    number: "02",
    label: "PHASE TWO",
    title: "Architecture & Development",
    description:
      "We prototype quickly, gather feedback, and improve iteratively with clear milestones and regular reviews.",
  },
  {
    number: "03",
    label: "PHASE THREE",
    title: "Deployment & Long-Term Support",
    description:
      "We support rollout, train your team where needed, and offer maintenance so your system can keep evolving.",
  },
]

export type FocusArea = {
  id: string
  title: string
  sector: string
  region: string
  description: string
  services: string[]
}

export const focusAreas: FocusArea[] = [
  {
    id: "smes",
    title: "Small & Medium-Sized Businesses",
    sector: "Business Growth",
    region: "Malawi",
    description: "Affordable digital systems, reliable IT support, and stronger customer engagement for growing businesses.",
    services: ["Software Development", "Cloud Computing", "Digital Marketing"],
  },
  {
    id: "startups",
    title: "Startups & Founders",
    sector: "Digital Products",
    region: "Malawi and beyond",
    description: "Practical support for founders building their first usable, credible, and scalable digital product.",
    services: ["Software Development", "Graphic Design & UI/UX", "IT Consultancy"],
  },
  {
    id: "institutions",
    title: "Schools, NGOs & Institutions",
    sector: "Community Impact",
    region: "Malawi and beyond",
    description: "Connected systems and digital capability-building that help organisations serve their communities more effectively.",
    services: ["Data Analytics", "IT Consultancy", "Digital Marketing"],
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
      "Secure authentication and encryption practices appropriate to the systems and data we manage.",
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
  {
    title: "Collaboration",
    description:
      "We work alongside clients as a technology partner, not simply as a vendor.",
    icon: Network,
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
  primaryContact: "Blessings Minga",
  email: "Blessingsminga11@gmail.com",
  location: "Remote — serving Malawi and beyond",
}
