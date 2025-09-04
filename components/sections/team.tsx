import { Card, CardContent } from "@/components/ui/card"
import { team } from "@/data/team"

export function Team() {
  return (
    <section id="team" className="py-16 md:py-24 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Team</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Student organizers and volunteers from Amritapuri campus.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          {team.map((member, index) => (
            <Card key={`${member.name}-${index}`} className="flex flex-col items-center shadow-sm border-none bg-transparent">
              <img
                src={member.image || "/placeholder.svg?height=220&width=220&query=team%20member%20portrait"}
                alt={member.name}
                className="w-40 h-40 rounded-full object-cover border"
              />
              <CardContent className="text-center mt-4 p-0">
                <div className="font-medium text-lg">{member.name}</div>
                <div className="text-sm text-muted-foreground">{member.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
