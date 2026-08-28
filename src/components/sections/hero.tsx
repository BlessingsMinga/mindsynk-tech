"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Counter } from "@/components/counter"
import WarpText from "@/components/warp-text"
import Aurora from "@/components/aurora"
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
  const heroRef = useRef<HTMLElement>(null)
  // Track scroll progress through the hero element itself (0 at top of hero,
  // 1 when the hero has fully scrolled past). Drives the parallax transforms.
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })
  // Image drifts upward slightly slower than the scroll for depth.
  const imageY = useTransform(heroProgress, [0, 1], [0, -60])
  // Floating stat card drifts a touch more for layered parallax.
  const statY = useTransform(heroProgress, [0, 1], [0, -110])
  // Aurora bg drifts down very slowly for a counter-parallax atmosphere.
  const auroraY = useTransform(heroProgress, [0, 1], [0, 40])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative isolate overflow-hidden bg-navy pt-28 pb-16 sm:pt-32 lg:pt-40 lg:pb-24"
      aria-label="Hero"
    >
      {/* Aurora animated background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: auroraY }}
        aria-hidden="true"
      >
        <Aurora
          colorStops={["#ff6a3d", "#ffb86c", "#9b7aff"]}
          blend={1.15}
          amplitude={1.6}
          speed={0.4}
        />
      </motion.div>
      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-10" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left content */}
        <motion.div variants={container} initial="hidden" animate="visible" className="text-white">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 text-xs font-medium text-brand">
              <Sparkles className="size-3.5" />
              Enterprise-Grade Technology Partner
            </span>
          </motion.div>

          {/* SEO-friendly heading (visually hidden, rendered by WarpText below) */}
          <h1 className="sr-only">
            We design, build, and scale enterprise digital systems for organisations.
          </h1>

          <motion.div variants={item} className="mt-6">
            <WarpText
              text={"We design, build, and scale\nenterprise digital systems."}
              color="#ffffff"
              warpStrength={0.09}
              warpScale={1.8}
              speed={0.5}
              pointerInfluence={0.45}
              pointerStrength={0.4}
              refraction={0.02}
              ripple
              fontSize="clamp(2.25rem, 4.8vw, 4.25rem)"
              fontWeight={700}
              letterSpacing="-0.03em"
              lineHeight={1.05}
              className="max-w-xl"
              style={{ height: "clamp(170px, 20vw, 260px)" }}
            />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-white/70 text-pretty"
          >
            From government platforms to AI-powered business automation, MindSynk
            Technologies delivers secure, scalable, and mission-critical solutions
            that help organisations optimise operations and drive measurable value.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="group h-12 rounded-full bg-brand px-7 text-base text-navy hover:bg-brand/90">
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
          <motion.div
            style={{ y: imageY }}
            className="relative overflow-hidden rounded-[2.5rem] bg-brand"
          >
            <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
            <img
              src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b0c8aec62d3c.jpg"
              alt="Professional MindSynk Technologies team — diverse business leaders ready to partner with your organisation"
              className="relative aspect-[4/5] w-full object-cover mix-blend-luminosity opacity-95"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
          </motion.div>

          {/* Floating stat card — bottom left */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{ y: statY }}
            className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-white/10 bg-navy-deep/95 p-4 shadow-2xl backdrop-blur-md sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-xl bg-brand/20">
                <Sparkles className="size-5 text-brand" />
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
              <p className="text-4xl font-bold text-brand sm:text-5xl">
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
