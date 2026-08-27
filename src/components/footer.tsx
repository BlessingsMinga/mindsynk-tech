import { Logo } from "@/components/logo"
import { companyInfo, services, navLinks } from "@/lib/data"
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from "lucide-react"

const socialLinks = [
  { label: "Facebook", icon: Facebook, href: "#" },
  { label: "Twitter / X", icon: Twitter, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
  { label: "Instagram", icon: Instagram, href: "#" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border/60 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground text-pretty">
              {companyInfo.tagline}. A B2B technology partner based in{" "}
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
                    className="flex size-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon className="size-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="text-muted-foreground">{companyInfo.address}</li>
            </ul>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
            >
              Start a project
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {year} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-xs">
            Placeholder content &amp; imagery for demonstration — replace with real assets before launch.
          </p>
        </div>
      </div>
    </footer>
  )
}
