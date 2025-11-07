import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { schedule } from "@/data/schedule"
import { CalendarDays, Clock } from "lucide-react"

export function Schedule() {
  return (
    <section id="schedule" className="py-16 md:py-24 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-blue-600" />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Schedule</h2>
        </div>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          Indicative agenda. Final timings and rooms will be announced closer to the event.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {schedule.map((day) => (
            <Card key={day.date}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{day.title}</span>
                  <span className="text-sm font-normal text-muted-foreground">{day.date}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {day.sessions.map((s) => (
                  <div key={s.time} className="flex items-start gap-3">
                    <div className="mt-0.5 text-blue-600">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-medium">{s.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {s.time} • {s.speaker}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
