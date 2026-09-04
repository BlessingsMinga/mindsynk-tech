"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Target, Eye, ArrowRight } from "lucide-react"
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Card } from "@/components/ui/card"
import { coreValues } from "@/lib/data"

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28" aria-label="About MindSynk">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-[72.333px]">
        <SectionHeading
          eyebrow="About Us"
          title="Practical technology for organisations ready to grow"
          description="MindSynk Technologies designs and delivers modern, connected digital systems that help businesses, schools, NGOs, and institutions work more efficiently."
          align="center"
        />

        {/* Story + image */}
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 shadow-xl">
              <Image
                src="/images/about-datacenter.jpg"
                alt="Modern data center infrastructure powering MindSynk Technologies enterprise solutions"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
              {/* Floating badge */}
              <div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-navy/90 px-4 py-3 backdrop-blur-md">
                <p className="text-2xl font-bold text-brand">Since 2025</p>
                <p className="text-xs text-white/70">Built in Malawi</p>
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
                  We focus on startups, SMEs, schools, NGOs, and organisations
                  seeking reliable, modern digital systems that can grow with them.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Vision & Mission */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <Reveal>
            <Card className="h-full border-border/50 p-8">
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-navy text-brand">
                <Eye className="size-6" />
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="mt-3 text-muted-foreground text-pretty">
                To become one of Malawi&rsquo;s leading integrated technology partners,
                delivering smart, seamless, and scalable ICT solutions that support
                business growth across Africa&rsquo;s digital economy.
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.12}>
            <Card className="h-full border-border/50 p-8">
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-brand/15 text-brand">
                <Target className="size-6" />
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="mt-3 text-muted-foreground text-pretty">
                To design, develop, and deliver intelligent digital solutions that
                automate processes, reduce errors, and create long-term measurable
                value for clients.
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
                      className="mb-4 flex size-11 items-center justify-center rounded-xl bg-navy text-brand"
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

        {/* Inline CTA */}
        <Reveal className="mt-16 text-center" delay={0.1}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-brand"
          >
            Want to learn how this translates into your project?
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
