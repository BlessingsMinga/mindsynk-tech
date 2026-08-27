"use client"

import { motion } from "framer-motion"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { processPhases } from "@/lib/data"

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-navy py-20 sm:py-28"
      aria-label="Built for complex organisations"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-30" aria-hidden="true" />
      {/* Gold orb */}
      <div
        className="pointer-events-none absolute -right-32 top-1/4 -z-10 size-96 rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="max-w-3xl">
          <span className="inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Built for Complex Organisations
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
            A structured, three-phase delivery model designed for complex organisations
          </h2>
          <p className="mt-4 text-base text-white/60 text-pretty sm:text-lg">
            Built for organisations with long planning cycles and multiple
            stakeholders — so nothing falls through the cracks.
          </p>
        </Reveal>

        {/* Phases */}
        <RevealGroup className="mt-16 grid gap-0 lg:grid-cols-3" stagger={0.12}>
          {processPhases.map((phase, idx) => (
            <RevealItem
              key={phase.number}
              as="div"
              className="relative px-0 lg:px-8"
            >
              {/* Vertical divider between columns on lg */}
              {idx > 0 && (
                <div
                  className="absolute left-0 top-0 hidden h-full w-px bg-white/10 lg:block"
                  aria-hidden="true"
                />
              )}

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                {/* Number + label */}
                <div className="flex items-center gap-4">
                  <span className="flex size-14 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-xl font-bold text-brand">
                    {phase.number}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    {phase.label}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {phase.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60 text-pretty">
                  {phase.description}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
