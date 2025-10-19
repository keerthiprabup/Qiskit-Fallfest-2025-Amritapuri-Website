import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/sections/about"
import { EventSection } from "@/components/sections/event"
import { Speakers } from "@/components/sections/speakers"
import { Sponsors } from "@/components/sections/sponsors"
import { Team } from "@/components/sections/team"
import { FAQ } from "@/components/sections/faq"
import { SiteFooter } from "@/components/site-footer"
import { Venue } from "@/components/sections/venue"

export default function Page() {
  return (
    <div className="relative min-h-screen">
      {/* Watermark (fills screen, stays centered while scrolling) */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src="/100fullwithoutbg.svg"
          alt="Watermark"
          className="w-full h-full object-contain opacity-10"
        />
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        <SiteHeader />
        <main id="content" className="min-h-screen">
          <Hero />
          <About />
          <EventSection />
          <Speakers />
          <Venue />
          <Team />
          {/* <Sponsors /> */}
          <FAQ />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
