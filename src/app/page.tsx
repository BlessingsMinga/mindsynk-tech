import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { WhyMindSynk } from "@/components/sections/why-mindsynk"
import { About } from "@/components/sections/about"
import { Portfolio } from "@/components/sections/portfolio"
import { CtaBanner } from "@/components/sections/cta-banner"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyMindSynk />
        <About />
        <Portfolio />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
