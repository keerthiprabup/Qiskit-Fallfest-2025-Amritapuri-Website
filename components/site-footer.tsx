export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="font-semibold">Qiskit Fall Fest 2025 — Amritapuri</div>
            <div className="text-sm text-muted-foreground">A student-led quantum computing festival.</div>
          </div>
          <nav className="flex gap-4 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground">
              About
            </a>
            <a href="#event" className="hover:text-foreground">
              Event
            </a>
            <a href="#team" className="hover:text-foreground">
              Team
            </a>
            <a href="#faq" className="hover:text-foreground">
              FAQ
            </a>
          </nav>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          This website is student-organized and not officially affiliated with IBM unless explicitly stated.
        </p>
      </div>
    </footer>
  )
}
