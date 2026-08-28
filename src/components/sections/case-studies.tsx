"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { caseStudies } from "@/lib/data"

export function CaseStudies() {
  return (
    <section
      id="work"
      className="py-20 sm:py-28"
      aria-label="Case studies"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case Studies"
          title="We measure success by operational impact"
          description="Faster processing, reduced costs, and systems that scale with your organisation."
          align="center"
        />

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.12}>
          {caseStudies.map((cs) => (
            <RevealItem key={cs.id} as="div" className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={cs.image}
                    alt={`${cs.title} — ${cs.sector} case study by MindSynk Technologies`}
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />

                  {/* Sector + region badges */}
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-navy">
                      {cs.sector}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-white/70">
                      {cs.region}
                    </p>
                    <h3 className="mt-0.5 text-xl font-bold text-white">{cs.title}</h3>
                  </div>
                </div>

                {/* Challenge / Solution / Outcome */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                      Challenge
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                      {cs.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                      Solution
                    </p>
                    <p className="mt-1.5 text-sm text-muted-foreground text-pretty">
                      {cs.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="mt-auto flex items-center gap-4 rounded-xl bg-navy p-4 text-white">
                    <div>
                      <p className="text-3xl font-bold text-brand">{cs.outcomeValue}</p>
                    </div>
                    <p className="flex-1 text-sm text-white/80 text-pretty">
                      {cs.outcome}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 flex justify-center" delay={0.1}>
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <a href="#contact">
              View More Case Studies
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
