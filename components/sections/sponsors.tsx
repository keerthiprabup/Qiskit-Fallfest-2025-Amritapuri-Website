import { sponsors } from "@/data/sponsors"
import { Card } from "@/components/ui/card"

export function Sponsors() {
  return (
    <section id="sponsors" className="py-16 md:py-24 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Sponsors & Partners</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">Supported by ecosystem partners and campus communities.</p>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {sponsors.map((s) => (
            <Card key={s.name} className="p-4 flex items-center justify-center">
              <img
                src={s.logo || "/placeholder.svg?height=80&width=160&query=partner%20logo"}
                alt={`${s.name} logo`}
                className="max-h-10 w-auto opacity-90"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
