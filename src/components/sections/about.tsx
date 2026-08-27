"use client"

import { motion } from "framer-motion"
import { Target, Eye, ArrowRight } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Card } from "@/components/ui/card"
import { coreValues, teamLeads } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28" aria-label="About MindSynk">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Us"
          title="Built by passionate individuals, focused on enterprise-grade systems"
          description="MindSynk Technologies is a tech-solutions company that designs, builds, and scales secure, high-impact software solutions — helping businesses, governments, and institutions optimise operations and drive measurable value."
          align="center"
        />

        {/* Story + image */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-xl">
              <img
                src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/73ef1f9022b8.jpg"
                alt="Modern data center infrastructure powering MindSynk Technologies enterprise solutions"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-navy/90 px-4 py-3 backdrop-blur-md">
                <p className="text-2xl font-bold text-gold">5+ yrs</p>
                <p className="text-xs text-white/70">Delivering at scale</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Our Story</h3>
              <div className="mt-4 space-y-4 text-muted-foreground text-pretty">
                <p>
                  Founded by a team of engineers, designers, and strategists,
                  MindSynk Technologies was created to close the technology gap
                  for organisations across Malawi and the broader African
                  continent.
                </p>
                <p>
                  We saw institutions struggling with off-the-shelf solutions that
                  didn&rsquo;t fit — so we built a partner that listens first, then
                  engineers the right solution. Our strength lies in translating
                  complex business requirements into reliable, scalable, and
                  future-ready systems powered by modern technologies.
                </p>
                <p>
                  Today we serve clients across healthcare, finance, agriculture,
                  and real estate, delivering enterprise-grade software that scales
                  with ambition.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Vision & Mission */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full border-border/50 p-8">
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-navy text-gold">
                <Eye className="size-6" />
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="mt-3 text-muted-foreground text-pretty">
                To be Africa&rsquo;s most trusted technology partner — empowering
                businesses and communities to thrive in a connected, data-driven
                world through innovation that genuinely matters.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.12}>
            <Card className="h-full border-border/50 p-8">
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Target className="size-6" />
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="mt-3 text-muted-foreground text-pretty">
                To deliver reliable, scalable, and human-centred technology
                solutions that solve real problems — combining global engineering
                standards with deep local understanding.
              </p>
            </Card>
          </Reveal>
        </div>

        {/* Core values */}
        <div className="mt-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              The values that guide everything we build
            </h3>
            <p className="mt-3 text-muted-foreground text-pretty">
              Four principles shape how we work, communicate, and deliver.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {coreValues.map((value) => {
              const Icon = value.icon
              return (
                <RevealItem key={value.title} as="div" className="h-full">
                  <Card className="group h-full border-border/50 p-6 transition-shadow hover:shadow-lg">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="mb-4 flex size-11 items-center justify-center rounded-xl bg-navy text-gold"
                    >
                      <Icon className="size-5" />
                    </motion.div>
                    <h4 className="font-semibold">{value.title}</h4>
                    <p className="mt-2 text-sm text-muted-foreground text-pretty">
                      {value.description}
                    </p>
                  </Card>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>

        {/* Team / partnership structure */}
        <div className="mt-20">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Leadership built for cross-functional delivery
            </h3>
            <p className="mt-3 text-muted-foreground text-pretty">
              Our partnership structure ensures every project has expert oversight
              across engineering, design, infrastructure, and strategy.
            </p>
          </Reveal>

          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
            {teamLeads.map((lead) => {
              const Icon = lead.icon
              return (
                <RevealItem key={lead.role} as="div" className="h-full">
                  <Card className="group h-full border-border/50 p-6 text-center transition-shadow hover:shadow-lg">
                    <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-deep text-gold">
                      <Icon className="size-6" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gold">
                      {lead.role}
                    </p>
                    <h4 className="mt-1 font-semibold">{lead.name}</h4>
                    <p className="mt-2 text-sm text-muted-foreground text-pretty">
                      {lead.description}
                    </p>
                  </Card>
                </RevealItem>
              )
            })}
          </RevealGroup>
        </div>

        {/* Inline CTA */}
        <Reveal className="mt-16 text-center" delay={0.1}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-gold"
          >
            Want to learn how this translates into your project?
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
