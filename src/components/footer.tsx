import { Logo } from "@/components/logo"
import { companyInfo, services, navLinks } from "@/lib/data"
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight, MapPin, Mail, Phone } from "lucide-react"

const socialLinks = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Twitter / X", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-[72.333px]">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="rounded-lg bg-white/5 p-3 inline-block">
              <Logo height={28} variant="dark" />
            </div>
            <p className="mt-5 max-w-xs text-sm text-white/60 text-pretty">
              {companyInfo.tagline}. A B2B technology partner designing,
              building, and scaling enterprise-grade digital systems from{" "}
              {companyInfo.location}.
            </p>
            <div className="mt-5 flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-colors hover:border-brand/40 hover:bg-brand/10 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-block min-h-11 py-2 text-sm text-white/60 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-1">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="inline-block min-h-11 py-2 text-sm text-white/60 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-1 text-sm">
              <li className="flex min-h-11 items-start gap-2.5 py-2 text-white/60">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                {companyInfo.address}
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex min-h-11 items-start gap-2.5 py-2 text-white/60 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand" />
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="flex min-h-11 items-start gap-2.5 py-2 text-white/60 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand" />
                  {companyInfo.phone}
                </a>
              </li>
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-brand/90"
            >
              Start a project
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row">
          <p>
            &copy; {year} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Placeholder content &amp; imagery for demonstration — replace with real assets before launch.
          </p>
        </div>
      </div>
    </footer>
  )
}
