"use client"

import * as React from "react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion"
import { companyInfo } from "@/lib/data"

/**
 * Floating WhatsApp action button.
 *
 * Appears in the bottom-right corner once the user scrolls past a threshold
 * (so it doesn't crowd the hero on initial load). Uses motion.dev's `useScroll`
 * + `useMotionValueEvent` to toggle visibility reactively, and AnimatePresence
 * for a smooth scale/fade transition. Includes a subtle pulsing ring to draw
 * attention and a tooltip on hover.
 */
export function WhatsAppButton() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = React.useState(false)
  const [hovered, setHovered] = React.useState(false)

  // Show once the user has scrolled past ~400px; hide again near the top.
  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 400)
  })

  const href = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(
    "Hi MindSynk Technologies, I'd like to discuss a project."
  )}`

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with MindSynk Technologies on WhatsApp"
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-6 sm:right-6"
        >
          {/* Tooltip label — slides in on hover (desktop only) */}
          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.2 }}
                className="pointer-events-none hidden rounded-lg bg-navy-deep px-3 py-2 text-sm font-medium text-white shadow-lg sm:block"
              >
                Chat with us
              </motion.span>
            )}
          </AnimatePresence>

          {/* Button + pulse ring */}
          <span className="relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_-4px_rgba(37,211,102,0.5)] transition-shadow hover:shadow-[0_12px_32px_-4px_rgba(37,211,102,0.7)]">
            {/* Pulsing ring */}
            <motion.span
              className="absolute inset-0 rounded-full bg-[#25D366]"
              animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              aria-hidden="true"
            />
            {/* WhatsApp glyph */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="relative size-7"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
