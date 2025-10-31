import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Section */}
          <div>
            <div className="font-semibold">Qiskit Fall Fest 2025 — Amritapuri</div>
            <div className="text-sm text-muted-foreground">
              A student-led quantum computing festival.
            </div>
            <div className="text-sm text-muted-foreground mt-2">
              Contact us:{" "}
              <a
                href="mailto:qiskitfallfestamrita@gmail.com"
                className="hover:text-foreground underline underline-offset-2"
              >
                qiskitfallfestamrita@gmail.com
              </a>
              <br />
              Phone No:{" "}
              <a
                href="tel:+919778260669"
                className="hover:text-foreground underline underline-offset-2"
              >
                +91 97782 60669
              </a>
            </div>
          </div>

          {/* Center Logo */}
          <div className="hidden md:flex rounded-lg">
            <Image
              src="/IBMQuantum.png"
              alt="Qiskit Logo"
              width={320}
              height={320}
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Right Navigation */}
          <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground justify-end">
            <a href="#about" className="hover:text-foreground">
              About
            </a>
            <a href="#event" className="hover:text-foreground">
              Event
            </a>
            <a href="#speakers" className="hover:text-foreground">
              Speakers
            </a>
            {/* <a href="#sponsors" className="hover:text-foreground">
              Sponsors
            </a> */}
            <a href="#team" className="hover:text-foreground">
              Team
            </a>
            <a href="#faq" className="hover:text-foreground">
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
