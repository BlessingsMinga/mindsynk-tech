import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
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
      <Navbar />
      <main className="flex-1">
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
    </div>
  )
}
