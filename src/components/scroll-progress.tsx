"use client"

import { motion, useScroll, useSpring } from "framer-motion"

/**
 * A thin brand-colored progress bar fixed to the top of the viewport that
 * fills as the user scrolls through the page.
 *
 * Uses motion.dev's `useScroll` to track the document scroll progress (0–1)
 * and `useSpring` to smooth the value for a fluid, premium feel.
 *
 * @see https://motion.dev/docs/react-use-scroll
 */
export function ScrollProgress() {
  // Track scroll progress of the whole document (0 at top, 1 at bottom).
  const { scrollYProgress } = useScroll()

  // Smooth the raw progress so the bar eases instead of jittering.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-brand via-amber-400 to-violet-500"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
