import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/sections/about"
import { EventSection } from "@/components/sections/event"
import { Team } from "@/components/sections/team"
import { FAQ } from "@/components/sections/faq"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="content" className="min-h-screen">
        <Hero />
        <About />
        <EventSection />
        <Team />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  )
}
