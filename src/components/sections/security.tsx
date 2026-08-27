"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import { securityPillars } from "@/lib/data"

export function Security() {
  return (
    <section
      id="security"
      className="relative overflow-hidden bg-navy-deep py-20 sm:py-28"
      aria-label="Security and compliance"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-20" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <Reveal>
            <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
              Built on Global Frameworks
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              Security &amp; Compliance
            </h2>
            <p className="mt-4 text-base text-white/60 text-pretty sm:text-lg">
              We implement enterprise-grade security practices across all client
              engagements. Every system we build is designed with data protection,
              access control, and auditability as foundational requirements — not
              afterthoughts.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <p className="text-sm leading-relaxed text-white/70 text-pretty">
                We comply with Malawi&rsquo;s Data Protection Act, sector-specific
                regulations in healthcare and finance, and implement GDPR-aligned
                data handling practices for engagements with international
                organisations. All client data is subject to formal data
                processing agreements prior to project initiation.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Pillars */}
        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {securityPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <RevealItem key={pillar.title} as="div" className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-gold/30 hover:bg-white/[0.07]"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="mb-4 flex size-11 items-center justify-center rounded-xl bg-gold/15 text-gold"
                  >
                    <Icon className="size-5" />
                  </motion.div>
                  <h3 className="font-semibold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-white/60 text-pretty">
                    {pillar.description}
                  </p>
                </motion.div>
              </RevealItem>
            )
          })}
        </RevealGroup>

        {/* CTA */}
        <Reveal className="mt-12 flex flex-col items-center gap-4 text-center" delay={0.1}>
          <p className="text-white/60">
            Ready to discuss a specific initiative?
          </p>
          <Button asChild size="lg" className="rounded-full bg-gold px-8 text-navy hover:bg-gold/90">
            <a href="#contact">
              Schedule a Consultation
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
