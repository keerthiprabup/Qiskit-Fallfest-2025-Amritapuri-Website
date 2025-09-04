import { MapPin } from "lucide-react"

export function Venue() {
  return (
    <section id="venue" className="py-16 md:py-24 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Venue</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
          <div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>Amrita Vishwa Vidyapeetham, Amritapuri Campus</span>
            </div>
            <p className="mt-2 text-muted-foreground">Clappana P.O., Vallikavu, Kerala 690525, India</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Rooms and exact locations will be updated here. Please bring your laptop and charger for workshops.
            </p>
          </div>
          <img src="/placeholder-x0eke.png" alt="Amritapuri campus" className="w-full h-auto rounded-lg border" />
        </div>
      </div>
    </section>
  )
}
