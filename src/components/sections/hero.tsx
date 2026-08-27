"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 28 },
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
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/60 to-background" aria-hidden="true" />
      <motion.div
        className="absolute -top-24 -left-24 -z-10 size-[28rem] rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-20 right-0 -z-10 size-[26rem] rounded-full bg-chart-2/20 blur-3xl"
        aria-hidden="true"
        animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left content */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <Badge variant="secondary" className="mb-5 gap-1.5 rounded-full px-3 py-1.5">
              <Sparkles className="size-3.5 text-primary" />
              <span className="text-xs font-medium">B2B Technology Partner in Malawi</span>
            </Badge>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Powering Progress
            <br />
            Through{" "}
            <span className="text-gradient">Technology</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty"
          >
            MindSynk Technologies builds the software, cloud infrastructure, and
            digital experiences that move ambitious businesses forward — from
            Lilongwe to the world.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="group h-12 px-7 text-base">
              <a href="#contact">
                Get a Free Quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base">
              <a href="#portfolio">View Our Work</a>
            </Button>
          </motion.div>

          <motion.ul
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            {["Custom Software", "Cloud Migration", "24/7 Support"].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-primary" />
                {f}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-2xl border border-border/60 shadow-2xl">
            <img
              src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fac6611dabf1.jpg"
              alt="Abstract digital network and technology visualization representing MindSynk's connectivity solutions"
              className="aspect-[4/3] w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
          </div>

          {/* Floating stat card — top right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="absolute -right-3 -top-5 hidden rounded-xl border border-border/60 bg-background/90 p-3 shadow-xl backdrop-blur-md sm:block"
          >
            <div className="flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/15">
                <Sparkles className="size-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">99.9% Uptime</p>
                <p className="text-xs text-muted-foreground">Reliability SLA</p>
              </div>
            </div>
          </motion.div>

          {/* Floating stat card — bottom left */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="absolute -bottom-5 -left-3 hidden rounded-xl border border-border/60 bg-background/90 p-3 shadow-xl backdrop-blur-md sm:block"
          >
            <div className="flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-chart-2/15">
                <CheckCircle2 className="size-4 text-chart-2" />
              </div>
              <div>
                <p className="text-sm font-semibold">50+ Projects</p>
                <p className="text-xs text-muted-foreground">Delivered worldwide</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
