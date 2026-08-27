"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import type { Service } from "@/lib/data"
import { cn } from "@/lib/utils"

type ServiceCardProps = {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = service.icon

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card
        className={cn(
          "group relative h-full overflow-hidden border-border/60 p-6 transition-shadow hover:shadow-xl",
          className
        )}
      >
        {/* Hover gradient glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-chart-2/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="flex items-start gap-4">
          <motion.div
            whileHover={{ scale: 1.08, rotate: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-inset ring-primary/20"
          >
            <Icon className="size-6" />
          </motion.div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground text-pretty">
              {service.short}
            </p>
          </div>
        </div>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="details" className="border-0">
            <AccordionTrigger className="py-2 text-sm font-medium text-primary hover:no-underline">
              <span className="flex items-center gap-1.5">
                Learn more
                <ChevronDown className="size-4 transition-transform duration-200" />
              </span>
            </AccordionTrigger>
            <AccordionContent className="pt-2">
              <ul className="space-y-2">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary/60" />
                    {detail}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </motion.div>
  )
}
