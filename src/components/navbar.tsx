"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Menu, X, Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { navLinks, companyInfo } from "@/lib/data"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      {/* Utility top bar */}
      <div className="hidden border-b border-white/10 bg-navy-deep text-white/70 lg:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-8 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-brand" />
              {companyInfo.address}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3.5 text-brand" />
              {companyInfo.hours}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-brand"
            >
              <Mail className="size-3.5 text-brand" />
              {companyInfo.email}
            </a>
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 transition-colors hover:text-brand"
            >
              <Phone className="size-3.5 text-brand" />
              {companyInfo.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-border/60 bg-background/90 backdrop-blur-xl shadow-sm"
            : "bg-background"
        )}
      >
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="MindSynk Technologies home"
          >
            <Logo height={30} />
          </a>

          {/* Centered desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="hidden rounded-full sm:inline-flex">
              <a href="#contact">
                Schedule a Meeting
                <ArrowRight className="size-4" />
              </a>
            </Button>

            {/* Mobile hamburger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate to different sections of the MindSynk Technologies website.
                </SheetDescription>
                <div className="flex items-center justify-between px-2 pt-2">
                  <Logo height={28} />
                </div>
                <nav className="mt-6 flex flex-col gap-1 px-2" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="rounded-lg px-3 py-3 text-base font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto space-y-3 px-2 pb-4">
                  <SheetClose asChild>
                    <Button asChild className="w-full rounded-full">
                      <a href="#contact">
                        Schedule a Meeting
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  </SheetClose>
                  <div className="space-y-1.5 border-t border-border pt-3 text-sm text-muted-foreground">
                    <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2">
                      <Mail className="size-4 text-brand" />
                      {companyInfo.email}
                    </a>
                    <a href={`tel:${companyInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-2">
                      <Phone className="size-4 text-brand" />
                      {companyInfo.phone}
                    </a>
                    <p className="flex items-center gap-2">
                      <MapPin className="size-4 text-brand" />
                      {companyInfo.address}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  )
}
