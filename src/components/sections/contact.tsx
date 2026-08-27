"use client"

import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ContactForm } from "@/components/contact-form"
import { Card } from "@/components/ui/card"
import { companyInfo } from "@/lib/data"

const socialLinks = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Twitter / X", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
]

const contactDetails = [
  { label: "Email us", value: companyInfo.email, icon: Mail, href: `mailto:${companyInfo.email}` },
  { label: "Call us", value: companyInfo.phone, icon: Phone, href: `tel:${companyInfo.phone.replace(/\s/g, "")}` },
  { label: "Visit us", value: companyInfo.address, icon: MapPin, href: "#map" },
  { label: "Open hours", value: companyInfo.hours, icon: Clock, href: "#contact" },
]

export function Contact() {
  return (
    <section id="contact" className="bg-secondary/40 py-20 sm:py-28" aria-label="Contact us">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Start a conversation"
          description="Our team works with procurement officers, CIOs, and programme directors to scope, price, and structure technology partnerships that fit institutional timelines and governance requirements."
          align="center"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {contactDetails.map((detail) => {
                  const Icon = detail.icon
                  return (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="group flex flex-col gap-3 rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-brand/40 hover:bg-accent/30"
                    >
                      <div className="flex size-10 items-center justify-center rounded-lg bg-navy text-brand transition-transform group-hover:scale-110">
                        <Icon className="size-4.5" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                          {detail.label}
                        </p>
                        <p className="mt-0.5 truncate text-sm font-medium">{detail.value}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Social links */}
              <Card className="border-border/60 p-5">
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Follow us
                </p>
                <div className="mt-3 flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="flex size-10 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-brand/40 hover:bg-brand/10 hover:text-brand"
                      >
                        <Icon className="size-4" />
                      </a>
                    )
                  })}
                </div>
              </Card>

              {/* Map embed */}
              <div id="map" className="overflow-hidden rounded-xl border border-border/60">
                <iframe
                  title="MindSynk Technologies location in Lilongwe, Malawi"
                  src="https://maps.google.com/maps?q=Lilongwe%2C%20Malawi&t=&z=12&ie=UTF8&iwloc=&output=embed"
                  className="h-48 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-3" delay={0.12}>
            <Card className="border-border/60 p-6 sm:p-8">
              <h3 className="text-xl font-bold">Request a free quote</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in the form below and we&rsquo;ll reach out within one business day.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Card>
          </Reveal>
        </div>

        {/* Bottom CTA line */}
        <Reveal className="mt-12 text-center" delay={0.1}>
          <a
            href={`mailto:${companyInfo.email}`}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-brand"
          >
            Or email us directly at {companyInfo.email}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
