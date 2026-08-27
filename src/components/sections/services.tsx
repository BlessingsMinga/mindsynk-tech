"use client"

import { RevealGroup, RevealItem } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { services } from "@/lib/data"

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28" aria-label="Our services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="End-to-end technology services"
          description="From concept to launch and beyond, we cover every layer of your digital stack — so you can focus on what matters most: growing your business."
        />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
          {services.map((service) => (
            <RevealItem key={service.id} as="div" className="h-full">
              <ServiceCard service={service} className="h-full" />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
