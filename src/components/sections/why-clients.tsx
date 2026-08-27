"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { reasons } from "@/lib/data"

export function WhyClientsComeBack() {
  return (
    <section id="why" className="py-20 sm:py-28" aria-label="Why clients come back">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Clients Come Back"
          title="We go beyond requirements to understand your entire ecosystem"
          description="Your staff, partners, customers, and operations — then design solutions that fit naturally into how your organisation runs. The result is technology that delivers real impact."
          align="center"
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {reasons.map((reason) => (
            <RevealItem key={reason.number} as="div" className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 transition-shadow hover:shadow-xl"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-navy text-sm font-bold text-brand">
                    {reason.number}
                  </span>
                  <div className="h-px flex-1 bg-border/60" />
                </div>
                <h3 className="text-base font-semibold leading-snug">{reason.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground text-pretty">
                  {reason.description}
                </p>
                {reason.highlight && (
                  <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    <span className="size-1.5 rounded-full bg-brand" />
                    {reason.highlight}
                  </p>
                )}
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 flex justify-center" delay={0.1}>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-brand"
          >
            Explore what we build
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
