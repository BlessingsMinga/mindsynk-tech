"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Counter } from "@/components/counter"
import { stats, companyInfo } from "@/lib/data"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
      aria-label="Hero"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" aria-hidden="true" />
      {/* Gradient orbs */}
      <motion.div
        className="absolute -top-24 left-1/3 -z-10 size-[32rem] rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left content */}
        <motion.div variants={container} initial="hidden" animate="visible" className="text-white">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1.5 text-xs font-medium text-gold">
              <Sparkles className="size-3.5" />
              Enterprise-Grade Technology Partner
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]"
          >
            We design, build, and scale{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gold">enterprise</span>
              <svg
                className="absolute -bottom-1 left-0 z-0 w-full"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 8 Q 50 2, 100 6 T 198 5"
                  stroke="oklch(0.82 0.07 80)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>
            </span>{" "}
            digital systems for organisations.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-white/70 text-pretty"
          >
            From government platforms to AI-powered business automation, MindSynk
            Technologies delivers secure, scalable, and mission-critical solutions
            that help organisations optimise operations and drive measurable value.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="group h-12 rounded-full bg-gold px-7 text-base text-navy hover:bg-gold/90">
              <a href="#contact">
                Request a Quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-white/30 bg-transparent px-7 text-base text-white hover:bg-white/10 hover:text-white">
              <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}>
                <Phone className="size-4" />
                Call {companyInfo.phone}
              </a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          {/* Gold blob container with grid pattern */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gold">
            <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
            <img
              src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1f13da4bd838.jpg"
              alt="Professional MindSynk Technologies team — diverse business leaders ready to partner with your organisation"
              className="relative aspect-[4/5] w-full object-cover mix-blend-luminosity opacity-95"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          </div>

          {/* Floating stat card — bottom left */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-navy-deep/95 p-4 shadow-2xl backdrop-blur-md sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-gold/20">
                <Sparkles className="size-5 text-gold" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">
                  <Counter value={50} suffix="+" />
                </p>
                <p className="text-xs text-white/60">Systems Delivered</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:mt-20 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8 sm:gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="text-4xl font-bold text-gold sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1.5 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
