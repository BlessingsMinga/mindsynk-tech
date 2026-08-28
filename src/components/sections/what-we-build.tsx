"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import BorderGlow from "@/components/border-glow"
import { services } from "@/lib/data"

// Brand-aligned mesh gradient colors (orange + amber + violet — matches Aurora)
const GLOW_COLORS = ["#ff6a3d", "#ffb86c", "#9b7aff"]
const GLOW_HSL = "15 88 53"

export function WhatWeBuild() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-secondary/40 py-20 sm:py-28"
      aria-label="What we build"
    >
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-50" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Build"
          title="Purpose-built for organisations that cannot afford failure"
          description="Every system we deliver is designed for resilience, compliance, and long-term maintainability."
          align="center"
        />

        <RevealGroup className="mt-14 grid gap-8 lg:grid-cols-3" stagger={0.08}>
          {services.map((service) => {
            const Icon = service.icon
            return (
              <RevealItem key={service.id} as="div" className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full"
                >
                  <BorderGlow
                    backgroundColor="#ffffff"
                    borderRadius={16}
                    glowRadius={25}
                    glowColor={GLOW_HSL}
                    glowIntensity={1.1}
                    edgeSensitivity={25}
                    coneSpread={25}
                    fillOpacity={0.3}
                    colors={GLOW_COLORS}
                    className="h-full"
                  >
                    <div className="flex h-full flex-col p-6">
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: -3 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="mb-5 flex size-12 items-center justify-center rounded-xl bg-navy text-brand"
                      >
                        <Icon className="size-6" />
                      </motion.div>
                      <h3 className="text-lg font-semibold">{service.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground text-pretty">
                        {service.short}
                      </p>

                      {/* Outcome line */}
                      <div className="mt-4 border-t border-border/60 pt-4">
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          The result
                        </p>
                        <p className="mt-1 text-sm font-medium text-primary text-pretty">
                          {service.outcome}
                        </p>
                      </div>

                      <a
                        href="#contact"
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-primary"
                      >
                        Learn more
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </BorderGlow>
                </motion.div>
              </RevealItem>
            )
          })}
        </RevealGroup>

        <Reveal className="mt-12 flex justify-center" delay={0.1}>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href="#contact">
              View More Services
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
