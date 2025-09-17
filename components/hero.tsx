"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
// import { Venue } from "@/components/sections/venue"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Left side - text content */}
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
              Qiskit Fall Fest 2025
              <span className="block text-blue-600">
                Amrita Vishwa Vidyapeetham, Amritapuri
              </span>
            </h1>

            <p className="mt-2 text-lg font-semibold text-blue-600">
              15<sup>th</sup> &nbsp;–&nbsp; 16<sup>th</sup> November 2025
            </p>

            <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">
              Celebrating 100 Years of Quantum Theory with Qiskit — A Student-Led Festival of Innovation.
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
              Open to all disciplines • Amritapuri Campus
            </p>
          </div>

          {/* Right side - only visible on md+ screens */}
          <div className="hidden md:flex h-80 w-80 rounded-lg overflow-hidden">
            <Image
              src="/Qiskit_02.svg"
              alt="Qiskit Logo"
              width={320}
              height={320}
              className="h-80 w-80 object-cover rounded-lg"
              priority
            />
          </div>
          {/* <div>
          <Venue />
        </div> */}
        </div>
      </div>
    </section>
  )
}
