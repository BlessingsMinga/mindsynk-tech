"use client"

import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/data"

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border-y border-border/50 bg-secondary/30 py-20 sm:py-28"
      aria-label="Our work"
    >
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Work"
          title="Solutions we're proud to have shipped"
          description="A selection of platforms and products we've engineered for clients across healthcare, real estate, finance, and analytics."
        />

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.12}>
          {projects.map((project) => (
            <RevealItem key={project.id} as="div" className="h-full">
              <ProjectCard project={project} className="h-full" />
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 flex flex-col items-center gap-3 text-center" delay={0.1}>
          <p className="text-muted-foreground">
            Have a project in mind? We'd love to hear about it.
          </p>
          <Button asChild size="lg" className="h-12 px-7">
            <a href="#contact">Start Your Project</a>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
