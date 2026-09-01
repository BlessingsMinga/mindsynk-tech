import type { Metadata } from "next"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import { caseStudies } from "@/lib/data"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Case Studies | MindSynk Technologies",
  description: "Explore selected MindSynk Technologies projects and the operational outcomes they deliver.",
}

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="mx-auto flex min-h-20 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="gap-2">
            <a href="/#work">
              <ArrowLeft className="size-4" />
              Back to home
            </a>
          </Button>
        </div>
      </header>

      <section className="bg-navy py-16 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">Case studies</p>
          <h1 className="mt-4 text-balance text-4xl font-bold tracking-tight sm:text-5xl">
            Technology that delivers operational impact
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-white/70">
            A closer look at how secure, practical digital products help organisations serve people better.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-16 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        {caseStudies.map((study, index) => (
          <article key={study.id} className="grid overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm lg:grid-cols-2">
            <div className={index % 2 ? "lg:order-2" : ""}>
              <img
                src={study.image}
                alt={`${study.title} project interface`}
                className="h-full min-h-72 w-full object-cover"
              />
            </div>
            <div className="flex flex-col p-7 sm:p-10">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-brand px-3 py-1 text-xs font-semibold text-navy">{study.sector}</span>
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{study.region}</span>
              </div>
              <h2 className="mt-5 text-3xl font-bold tracking-tight">{study.title}</h2>
              <div className="mt-7 grid gap-5 text-sm leading-relaxed text-muted-foreground">
                <div>
                  <h3 className="font-semibold uppercase tracking-wide text-foreground">The challenge</h3>
                  <p className="mt-1.5">{study.challenge}</p>
                </div>
                <div>
                  <h3 className="font-semibold uppercase tracking-wide text-foreground">What we built</h3>
                  <p className="mt-1.5">{study.solution}</p>
                </div>
              </div>
              <div className="mt-7 flex items-center gap-4 rounded-2xl bg-navy p-5 text-white">
                <p className="text-4xl font-bold text-brand">{study.outcomeValue}</p>
                <p className="text-sm text-white/80">{study.outcome}</p>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                {study.tags.map((tag) => (
                  <li key={tag} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="size-4 text-brand" /> {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="border-t border-border/60 bg-secondary/40 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Have a similar challenge?</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Let&apos;s discuss a solution that fits your organisation, timeline, and governance requirements.</p>
        <Button asChild size="lg" className="mt-7 rounded-full">
          <a href="/#contact">Start a conversation <ArrowRight className="size-4" /></a>
        </Button>
      </section>
    </main>
  )
}
