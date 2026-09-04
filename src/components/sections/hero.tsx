"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#1d2749] pt-28 text-white sm:pt-32 lg:min-h-[840px] lg:pt-48"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_0%,rgba(241,89,34,0.12),transparent_30%),linear-gradient(180deg,#303b66_0%,#1e2849_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-[72.333px] lg:pb-32"
      >
        <div className="max-w-4xl">
          <motion.p
            variants={item}
            className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.08em] text-brand sm:text-base"
          >
            <span className="h-px w-8 bg-brand" />
            Integrated technology partner
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-8 max-w-4xl text-balance text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl lg:leading-[1.08]"
          >
            Digital solutions that help organisations operate, compete, and grow
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-9 max-w-3xl text-pretty text-xl leading-relaxed text-white/75 sm:text-2xl"
          >
            We design, develop, and support practical digital systems for startups, SMEs, schools, NGOs, and organisations across Malawi and beyond.
          </motion.p>

          <motion.div variants={item} className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="h-[4.5rem] rounded-lg bg-brand px-8 text-lg text-navy hover:bg-brand/90">
              <a href="#contact">
                Request a Quote
                <ArrowRight className="size-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-[4.5rem] rounded-lg border-white/25 bg-transparent px-8 text-lg text-white hover:bg-white/10 hover:text-white">
              <a href="#process">
                <Play className="size-4 fill-current" />
                See how it works
              </a>
            </Button>
          </motion.div>
        </div>
      </motion.div>

      <div className="relative border-t border-navy/10 bg-background text-navy">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 py-8 text-center text-sm font-medium sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-[72.333px] lg:text-left">
          <p>Malawi-based technology partner</p>
          <p>Practical, scalable delivery</p>
          <p>Built around real user needs</p>
          <p>One connected technology partner</p>
        </div>
      </div>
    </section>
  )
}
