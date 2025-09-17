import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  { q: "Who can attend?", a: "Open to all students and disciplines. Beginner-friendly workshops are included." },
  {
    q: "Is there a fee?",
    a: "Most sessions are free. If any paid sessions exist, we’ll announce them with the final schedule.",
  },
  { q: "Do I need a laptop?", a: "Yes—please bring your laptop and charger for hands‑on labs." },
  {
    q: "Will certificates be provided?",
    a: "Participation certificates will be provided, details will be shared closer to the event.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Frequently Asked Questions</h2>
        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
