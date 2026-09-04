"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { focusAreas } from "@/lib/data"

export function CaseStudies() {
  return (
    <section
      id="work"
      className="py-20 sm:py-28"
      aria-label="Who we support"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-[72.333px]">
        <SectionHeading
          eyebrow="Who We Support"
          title="Technology that meets organisations where they are"
          description="Our integrated services are designed for the people and organisations building Malawi&rsquo;s digital future."
          align="center"
        />

        <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3" stagger={0.12}>
          {focusAreas.map((cs) => (
            <RevealItem key={cs.id} as="div" className="h-full">
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card shadow-sm transition-shadow hover:shadow-2xl"
              >
                <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand">
                      {cs.sector}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold leading-tight">{cs.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground text-pretty">
                      {cs.description}
                    </p>
                  </div>
                  <div className="mt-auto border-t border-border/60 pt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Relevant services</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                    {cs.services.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 flex justify-center" delay={0.1}>
          <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-brand">
            Discuss your organisation&rsquo;s needs
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
