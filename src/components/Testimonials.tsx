const quotes = [
  {
    text: "Shannon is the reason we actually enjoyed our wedding. She held every loose end so we could just be present with each other and our people.",
    name: "Maeve & Daniel",
    detail: "Married September 2024",
  },
  {
    text: "I’m a planner by trade and I still hired Shannon. Best decision we made. Calm, organized, and somehow ten steps ahead of every vendor.",
    name: "Priya & Alex",
    detail: "Married June 2024",
  },
  {
    text: "She made our small backyard wedding feel like the most beautiful event I’ve ever been to. Every detail had her fingerprints on it - gently.",
    name: "Hannah & Cole",
    detail: "Married October 2023",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-teal-deep text-cream overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 25%, rgba(255,255,255,0.4), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.25), transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p
            className="eyebrow"
            style={{ color: "rgba(250, 246, 240, 0.75)" }}
          >
            Kind words
          </p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl leading-tight">
            From the couples who trusted me with their day.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="relative rounded-2xl bg-cream/[0.06] border border-cream/15 p-7 backdrop-blur-sm"
            >
              <svg
                aria-hidden
                viewBox="0 0 32 32"
                className="absolute -top-3 left-6 w-7 h-7 text-cream/40"
                fill="currentColor"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.7 1.3-3 3-3V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.7 1.3-3 3-3V8z" />
              </svg>
              <p className="font-display text-lg md:text-xl leading-relaxed text-cream/95">
                {q.text}
              </p>
              <footer className="mt-6">
                <div className="text-sm font-medium tracking-wide">{q.name}</div>
                <div className="text-xs tracking-[0.18em] uppercase text-cream/65 mt-1">
                  {q.detail}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
