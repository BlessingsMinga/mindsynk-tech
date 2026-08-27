"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8" aria-label="Call to action">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-chart-2/5 to-background p-8 shadow-lg sm:p-12 lg:p-16"
        >
          {/* Decorative orbs */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 size-64 rounded-full bg-chart-2/15 blur-3xl" aria-hidden="true" />

          <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Ready to power your progress?
              </h2>
              <p className="mt-3 text-base text-muted-foreground text-pretty sm:text-lg">
                Let's turn your vision into a reliable, scalable digital product.
                Get a free, no-obligation quote today.
              </p>
            </div>
            <Button asChild size="lg" className="group h-12 shrink-0 px-8 text-base">
              <a href="#contact">
                Get a Free Quote
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
