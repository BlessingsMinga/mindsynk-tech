"use client"

import { motion } from "framer-motion"
import { Zap, ShieldCheck, Clock, Users2 } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Counter } from "@/components/counter"
import { stats } from "@/lib/data"
import { Card } from "@/components/ui/card"

const reasons = [
  {
    icon: Zap,
    title: "Fast & Agile Delivery",
    description:
      "We ship in iterative sprints, so you see working software early and often — not months of silence.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "Security is baked in from day one, with best-practice encryption, audits, and compliance-ready architecture.",
  },
  {
    icon: Clock,
    title: "Round-the-Clock Support",
    description:
      "Dedicated support channels and proactive monitoring keep your systems healthy while you sleep.",
  },
  {
    icon: Users2,
    title: "True Partnership",
    description:
      "We think like owners, not vendors. Your goals become our roadmap — measured by your outcomes, not hours billed.",
  },
]

export function WhyMindSynk() {
  return (
    <section
      id="why"
      className="relative overflow-hidden border-y border-border/50 bg-secondary/30 py-20 sm:py-28"
      aria-label="Why MindSynk"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why MindSynk"
          title="A partner that treats your goals as their own"
          description="We combine deep technical expertise with genuine business understanding — delivering outcomes, not just deliverables."
        />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <RevealItem key={reason.title} as="div" className="h-full">
                <Card className="group h-full border-border/50 p-6 transition-shadow hover:shadow-lg">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/15"
                  >
                    <Icon className="size-5" />
                  </motion.div>
                  <h3 className="font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {reason.description}
                  </p>
                </Card>
              </RevealItem>
            )
          })}
        </RevealGroup>

        {/* Stats */}
        <Reveal className="mt-16">
          <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border/50 bg-background/60 p-6 backdrop-blur-sm sm:gap-8 lg:grid-cols-4 lg:p-10">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-center"
              >
                <p className="text-3xl font-bold tracking-tight text-gradient sm:text-4xl lg:text-5xl">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
