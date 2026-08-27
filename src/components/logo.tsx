import { cn } from "@/lib/utils"

type LogoProps = {
  className?: string
  showText?: boolean
}

/**
 * MindSynk Technologies brand mark — an abstract node-network
 * icon representing "synk" (synchronised minds & technology).
 */
export function Logo({ className, showText = true }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <svg
        width="36"
        height="36"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="ms-grad" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="oklch(0.52 0.13 165)" />
            <stop offset="100%" stopColor="oklch(0.6 0.14 185)" />
          </linearGradient>
        </defs>
        {/* Rounded square backdrop */}
        <rect width="40" height="40" rx="11" fill="url(#ms-grad)" />
        {/* Node-network mark */}
        <circle cx="13" cy="14" r="3.2" fill="white" />
        <circle cx="27" cy="13" r="2.4" fill="white" fillOpacity="0.85" />
        <circle cx="20" cy="24" r="3.6" fill="white" />
        <circle cx="28" cy="27" r="2" fill="white" fillOpacity="0.7" />
        <path
          d="M13 14L20 24M27 13L20 24M20 24L28 27"
          stroke="white"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="text-base font-bold tracking-tight">
            MindSynk
          </span>
          <span className="text-[0.625rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Technologies
          </span>
        </span>
      )}
    </span>
  )
}
