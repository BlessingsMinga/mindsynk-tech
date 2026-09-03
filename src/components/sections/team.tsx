"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Card } from "@/components/ui/card"
import { teamLeads } from "@/lib/data"

const waysOfWorking = [
  "Cross-functional teams from discovery through launch",
  "Clear ownership, practical communication, and shared accountability",
  "Local insight paired with modern engineering standards",
]

export function Team() {
  return (
    <section id="team" className="bg-secondary/45 py-20 sm:py-28" aria-label="Our team">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Team"
          title="The right minds around every challenge"
          description="We bring strategy, design, engineering, and infrastructure together from the start — so every decision moves your project forward."
          align="center"
        />

        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {teamLeads.map((lead) => {
            const Icon = lead.icon
            return (
              <RevealItem key={lead.role} as="div" className="h-full">
                <Card className="group h-full border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-navy text-brand transition-transform duration-300 group-hover:scale-110">
                    <Icon className="size-5" />
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-brand">
                    {lead.role}
                  </p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight">{lead.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground text-pretty">
                    {lead.description}
                  </p>
                </Card>
              </RevealItem>
            )
          })}
        </RevealGroup>

        <Reveal className="mt-12 overflow-hidden rounded-2xl bg-navy p-8 text-white shadow-xl sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand">One connected team</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Built to collaborate, accountable for outcomes.
              </h3>
              <ul className="mt-6 grid gap-3 text-sm text-white/75 sm:grid-cols-3">
                {waysOfWorking.map((item) => (
                  <li key={item} className="flex gap-2.5 leading-6">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white"
            >
              Work with us
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
