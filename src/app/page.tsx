import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Hero } from "@/components/sections/hero"
import { WhyClientsComeBack } from "@/components/sections/why-clients"
import { WhatWeBuild } from "@/components/sections/what-we-build"
import { Process } from "@/components/sections/process"
import { CaseStudies } from "@/components/sections/case-studies"
import { About } from "@/components/sections/about"
import { Security } from "@/components/sections/security"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Navbar />
      <main className="relative flex-1">
        <Hero />
        <WhyClientsComeBack />
        <WhatWeBuild />
        <Process />
        <CaseStudies />
        <About />
        <Security />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
