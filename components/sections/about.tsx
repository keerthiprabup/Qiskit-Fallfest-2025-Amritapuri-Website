import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Terminal, Trophy } from "lucide-react"
export function About() {
  const pillars = [
    { icon: BookOpen, title: "Learn", text: "Intro to quantum computing, Qiskit basics, and guided labs." },
    { icon: Terminal, title: "Build", text: "Hands-on coding sessions using the Qiskit SDK and tools." },
    { icon: Trophy, title: "Compete", text: "Mini challenges and project sprints with prizes." },
  ]

  return (
    <section id="about" className="py-16 md:py-24 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <div className="max-w-2xl">
          <Badge className="bg-blue-600 hover:bg-blue-700">About</Badge>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-balance">
            Student‑led quantum festival powered by Qiskit
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Organized by students at Amrita Vishwa Vidyapeetham, Amritapuri Campus. Join workshops, speaker sessions,
            and project sprints to explore quantum computing with Qiskit.
          </p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <Card key={p.title} className="h-full">
              <CardHeader>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded bg-blue-600/10 text-blue-600">
                  <p.icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-2">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">{p.text}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
