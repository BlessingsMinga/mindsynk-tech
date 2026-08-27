import Image from "next/image"
import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  /** Height of the logo image in pixels. Wordmark scales proportionally. */
  height?: number
}

/**
 * MindSynk Technologies brand logo.
 *
 * Uses the official MindSynk_Full.png asset — geometric icon mark +
 * "MindSynk" wordmark in brand orange (#f15922) + navy (#1d1e32) on a
 * transparent background. A dark-mode variant swaps the navy for white so
 * the wordmark stays legible on dark surfaces.
 *
 * The two variants are toggled purely with CSS (dark: variant) to avoid any
 * client-side hydration flash.
 */
export function Logo({ className, height = 34 }: LogoProps) {
  // Source PNG is 1731×372 → aspect ratio ≈ 4.654
  const width = Math.round(height * 4.654)

  return (
    <span className={cn("flex items-center", className)}>
      {/* Light mode variant */}
      <Image
        src="/MindSynk_Full.png"
        alt="MindSynk Technologies"
        width={width}
        height={height}
        priority
        className="h-auto w-auto select-none dark:hidden"
        style={{ height }}
      />
      {/* Dark mode variant (navy → white) */}
      <Image
        src="/MindSynk_Full-dark.png"
        alt="MindSynk Technologies"
        width={width}
        height={height}
        priority
        className="hidden h-auto w-auto select-none dark:block"
        style={{ height }}
      />
    </span>
  )
}
