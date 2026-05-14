type Quote = {
  text: string;
  attribution: string;
  detail: string;
};

const quotes: Quote[] = [
  {
    text: "We used Shannon for my July 1st wedding! She was beyond helpful and handled all problems in an orderly fashion. We felt so lucky to have had her there to help us on our special day! We did day of coordination, and we wish we would have done the whole event planning package!",
    attribution: "@thehairwhich & @nerney_nation",
    detail: "Day-of coordination",
  },
  {
    text: "We hired Shannon as our Day-of Coordinator for our wedding in June, and right after our first conversation with her we knew we had made the right choice. Shannon instantly relieved our stress and was amazing to work with. She truly thinks of everything... It took all of the stress away from us so we were able to fully enjoy our day without any worries.",
    attribution: "June wedding",
    detail: "Day-of coordination",
  },
  {
    text: "When I first reached out to Shannon she gave immediate responses with all inquiries and questions I had... I remember looking over from the dance floor near the end of the night just so thrilled that I had absolutely nothing to worry about when the night ended. If you're on the fence, I cannot stress more to just DO IT.",
    attribution: "Cescaphe wedding",
    detail: "Day-of coordination",
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

        {quotes.length === 0 ? (
          <div className="mt-14 max-w-xl mx-auto text-center text-cream/80">
            <p className="text-base md:text-lg leading-relaxed">
              New praise is collected after each season. Check back soon, or
              ask me for references during your inquiry call.
            </p>
          </div>
        ) : (
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {quotes.map((q) => (
              <blockquote
                key={q.attribution + q.detail}
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
                  <div className="text-sm font-medium tracking-wide">
                    {q.attribution}
                  </div>
                  <div className="text-xs tracking-[0.18em] uppercase text-cream/65 mt-1">
                    {q.detail}
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
