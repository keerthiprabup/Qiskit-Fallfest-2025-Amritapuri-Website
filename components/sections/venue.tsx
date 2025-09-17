import { MapPin } from "lucide-react"

export function Venue() {
  return (
    <section id="venue" className="py-16 md:py-24 border-t">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Venue</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6 items-start">
          {/* Left side - address */}
          <div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>Amrita Vishwa Vidyapeetham, Amritapuri Campus</span>
            </div>
            <p className="mt-2 text-muted-foreground">
              Clappana P.O., Vallikavu, Kerala 690525, India
            </p>
          </div>

          {/* Right side - Google Maps iframe with red pinpoint */}
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d925.9250404103055!2d76.49038326954782!3d9.09379799943563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDUnMzcuNyJOIDc2wrAyOScyNy43IkU!5e1!3m2!1sen!2sin!4v1758100751503!5m2!1sen!2sinhttps://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d984.9174945084691!2d76.49038326954782!3d9.09379799943563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMDUnMzcuNyJOIDc2wrAyOScyNy43IkU!5e0!3m2!1sen!2sin!4v1758100880682!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}