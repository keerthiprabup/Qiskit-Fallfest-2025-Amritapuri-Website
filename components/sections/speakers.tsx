import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { speakers } from "@/data/speakers"

export function Speakers() {
  return (
    <section id="speakers" className="py-16 md:py-24 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Speakers & Mentors</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Industry professionals, researchers, and student leaders guiding sessions and reviews.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {speakers.map((sp) => (
            <Card key={sp.name} className="overflow-hidden">
              <CardHeader className="p-0">
                <img
                  src={sp.image || "/placeholder.svg?height=240&width=400&query=speaker%20portrait"}
                  alt={sp.name}
                  className="w-full h-40 object-cover"
                />
              </CardHeader>
              <CardContent className="p-4">
                <div className="font-medium">{sp.name}</div>
                <div className="text-sm text-muted-foreground">{sp.title}</div>
                {sp.affiliation && <div className="text-sm text-muted-foreground">{sp.affiliation}</div>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
