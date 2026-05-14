// Most answers are placeholders Shannon should personalize. Marked inline.
const faqs = [
  {
    q: "How far in advance should we book?",
    a: "For full planning, I usually take on couples 9-14 months out. Partial and day-of bookings work on shorter timelines. Reach out early either way, I take a small number of weddings each season.",
  },
  {
    q: "Do you travel?",
    a: "[PLACEHOLDER] Confirm Shannon's travel radius and any destination work. Default copy: I'm based in [city] and travel throughout New England and New York. Destination weddings are considered case-by-case.",
  },
  {
    q: "What does pricing look like?",
    a: "[PLACEHOLDER] Replace with Shannon's preferred framing. Options: a starting-at number per service, a flat range, or 'all weddings are quoted individually after our intro call.'",
  },
  {
    q: "Can we use vendors we already love?",
    a: "Absolutely. I'm vendor-agnostic. If you already have a florist or photographer you adore, I'll work with them. If you'd like recommendations, I have a deep bench.",
  },
  {
    q: "Will you be the one running our day?",
    a: "Yes. I personally lead every wedding I book. For larger guest counts, I bring in an assistant coordinator I trust.",
  },
  {
    q: "What's included in day-of coordination?",
    a: "More than the name suggests. I start six weeks out: vendor confirmations, walkthroughs, run-of-show, floor plan, and full day-of management with one assistant included.",
  },
  {
    q: "What if our plans change?",
    a: "Date changes and pivots happen. We'll re-paper anything needed and keep moving. I work with my couples on this kind of thing rather than around them.",
  },
];

export default function Faq() {
  return (
    <section className="relative py-24 md:py-32 bg-cream-deep/60">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="eyebrow">Questions, answered</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-teal-deep leading-tight">
            The things couples usually ask first.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-teal/15 border-y border-teal/15">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                <span className="font-display text-xl md:text-2xl text-teal-deep leading-snug">
                  {f.q}
                </span>
                <span
                  aria-hidden
                  className="mt-2 shrink-0 text-teal transition-transform duration-200 group-open:rotate-45"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 5v14M5 12h14"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-muted text-base leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
