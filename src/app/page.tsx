import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { Hero } from "@/components/sections/hero"
import { WhyClientsComeBack } from "@/components/sections/why-clients"
import { WhatWeBuild } from "@/components/sections/what-we-build"
import { Process } from "@/components/sections/process"
import { CaseStudies } from "@/components/sections/case-studies"
import { About } from "@/components/sections/about"
import { Team } from "@/components/sections/team"
import { Security } from "@/components/sections/security"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollProgress />
      <Navbar />
      <main id="main-content" className="relative flex-1">
        <Hero />
        <WhyClientsComeBack />
        <WhatWeBuild />
        <Process />
        <CaseStudies />
        <About />
        <Team />
        <Security />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
