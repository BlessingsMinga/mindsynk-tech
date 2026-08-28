"use client"

import { motion, type Variants } from "framer-motion"
import * as React from "react"

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  as?: "div" | "section" | "article" | "li" | "span"
}

/**
 * Scroll-triggered reveal wrapper using Framer Motion's whileInView.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={defaultVariants}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Staggered container for lists of Reveal children.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.1,
}: {
  children: React.ReactNode
  className?: string
  stagger?: number
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

/**
 * Reveal item — must be used inside a RevealGroup.
 */
export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode
  className?: string
  as?: "div" | "section" | "article" | "li" | "span"
}) {
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      variants={defaultVariants}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
