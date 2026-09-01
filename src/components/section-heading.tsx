"use client"

import { Reveal } from "@/components/motion/reveal"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary">
        <span className="size-1.5 rounded-full bg-brand" aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[2.65rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground text-pretty sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </Reveal>
  )
}
