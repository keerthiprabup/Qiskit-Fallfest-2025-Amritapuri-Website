"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const nav = [
    { href: "#about", label: "About" },
    { href: "#event", label: "Event" },
    { href: "#speakers", label: "Speaker"},
    { href: "#sponsors", label: "Sponsors"},
    { href: "#team", label: "Team" },
    { href: "#faq", label: "FAQ" }
  ]

  return (
    // <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
    //   <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
    //     <Link href="/" className="flex items-center gap-2">
    //       <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white font-semibold">
    //         Q
    //       </span>
    //       <span className="font-semibold tracking-tight">Qiskit Fall Fest 2025 — Amritapuri</span>
    //     </Link>
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="https://www.amrita.edu/campus/amritapuri/" className="flex items-center gap-2">
            <img
              src="/Amrita.svg"
              alt="Amrita"
              className="h-8 rounded"
            />
            {/* <span className="font-semibold tracking-tight">
              Qiskit Fall Fest 2025 — Amritapuri
            </span> */}
          </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <a href="https://forms.cloud.microsoft/r/Z1vAFZ6jcz" target="_blank" rel="noopener noreferrer">Register</a>
          </Button>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded hover:bg-muted"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn("md:hidden border-t", open ? "block" : "hidden")}>
        <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {n.label}
            </a>
          ))}
          <Button asChild className="bg-blue-600 hover:bg-blue-700" onClick={() => setOpen(false)}>
            <a href="#register">Register</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
