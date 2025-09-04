import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex ">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Qiskit Fall Fest 2025
              <span className="block text-blue-600">
                Amrita Vishwa Vidyapeetham, Amritapuri
              </span>
            </h1>
            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              A student-led celebration of quantum computing—talks, workshops, and
              challenges built around the Qiskit ecosystem.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3" id="register">
              <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="#" aria-label="Register for Qiskit Fall Fest 2025">
                  Register Now
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#event">View Event</a>
              </Button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              November 2025 • Amritapuri Campus • Open to all disciplines
            </p>
          </div>

            {/* <div className="w-65 rounded-lg border bg-white p-2 transform -translate-y-10 translate-x-25">
              <img
                src="/100full.png"
                alt="Students collaborating during a Qiskit workshop"
                className="w-full h-auto rounded-md"
              />
            </div> */}
        </div>
      </div>
    </section>

  )
}
