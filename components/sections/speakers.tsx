import { Card, CardContent } from "@/components/ui/card"
import { speakers } from "@/data/speakers"

export function Speakers() {
  return (
    <section id="speakers" className="py-16 md:py-24 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Speakers & Mentors</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Industry professionals, researchers, and student leaders guiding sessions and reviews.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {speakers.map((sp, index) => (
            <Card
              key={`${sp.name}-${index}`}
              className="flex flex-col items-center shadow-sm border-none bg-transparent"
            >
              <img
                src={sp.image || "/placeholder.svg?height=220&width=220&query=speaker%20portrait"}
                alt={sp.name}
                className="w-40 h-40 rounded-full object-cover border"
              />
              <CardContent className="text-center mt-4 p-0">
                <div className="font-medium text-lg">{sp.name}</div>
                {sp.title && (
                  <div className="text-sm text-muted-foreground">{sp.title}</div>
                )}
                {sp.affiliation && (
                  <div className="text-sm text-muted-foreground">{sp.affiliation}</div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
