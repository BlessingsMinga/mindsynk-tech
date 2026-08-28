"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { Button } from "@/components/ui/button"
import BorderGlow from "@/components/border-glow"
import { securityPillars } from "@/lib/data"

// Brand-aligned mesh gradient colors (orange + amber + violet — matches Aurora)
const GLOW_COLORS = ["#ff6a3d", "#ffb86c", "#9b7aff"]
// Logo orange #f15922 ≈ HSL(15, 88%, 53%)
const GLOW_HSL = "15 88 53"

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
            <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
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
        <RevealGroup className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {securityPillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <RevealItem key={pillar.title} as="div" className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <BorderGlow
                    backgroundColor="rgba(255,255,255,0.04)"
                    borderRadius={16}
                    glowRadius={25}
                    glowColor={GLOW_HSL}
                    glowIntensity={1.2}
                    edgeSensitivity={25}
                    coneSpread={25}
                    fillOpacity={0.35}
                    colors={GLOW_COLORS}
                    className="h-full backdrop-blur-sm"
                  >
                    <div className="flex h-full flex-col p-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="mb-4 flex size-11 items-center justify-center rounded-xl bg-brand/15 text-brand"
                      >
                        <Icon className="size-5" />
                      </motion.div>
                      <h3 className="font-semibold text-white">{pillar.title}</h3>
                      <p className="mt-2 text-sm text-white/60 text-pretty">
                        {pillar.description}
                      </p>
                    </div>
                  </BorderGlow>
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
          <Button asChild size="lg" className="rounded-full bg-brand px-8 text-navy hover:bg-brand/90">
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
