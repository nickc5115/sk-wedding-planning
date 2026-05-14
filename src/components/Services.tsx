import Link from "next/link";
import Botanical from "./Botanical";

const services = [
  {
    name: "Full Planning",
    tagline: "From “we’re engaged!” to “see you on the dance floor.”",
    points: [
      "Vision, budget, and timeline built from scratch",
      "Vendor curation and contract review",
      "Design direction across every detail",
      "Unlimited planning meetings",
      "Full day-of management",
    ],
    featured: true,
  },
  {
    name: "Partial Planning",
    tagline: "You’ve started. I’ll take it the rest of the way.",
    points: [
      "Step in 4-6 months out",
      "Fill remaining vendor gaps",
      "Refine design and logistics",
      "Build a bullet-proof timeline",
      "Full day-of management",
    ],
  },
  {
    name: "Day-of Coordination",
    tagline: "You planned it. I’ll run it.",
    points: [
      "Begin 6 weeks before the wedding",
      "Vendor confirmation + walkthrough",
      "Timeline + floor plan finalization",
      "On-site lead coordinator",
      "One assistant coordinator included",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-cream-deep/60 overflow-hidden"
    >
      <Botanical className="absolute top-10 right-0 w-72 text-teal/20 hidden md:block" />
      <Botanical
        flip
        className="absolute bottom-10 left-0 w-72 text-teal/20 hidden md:block"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Services</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-teal-deep leading-tight">
            A level of support for every kind of couple.
          </h2>
          <p className="mt-5 text-muted text-base md:text-lg leading-relaxed">
            Whether you need a full creative partner or a steady hand for the
            final stretch, there’s a place to start.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.name}
              className={`relative rounded-3xl p-8 md:p-9 transition-all duration-300 hover:-translate-y-1 ${
                s.featured
                  ? "bg-teal text-cream shadow-xl shadow-teal/20"
                  : "bg-cream border border-teal/15 hover:border-teal/30"
              }`}
            >
              {s.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-cream px-4 py-1 text-[10px] tracking-[0.25em] uppercase text-teal-deep">
                  Most loved
                </span>
              )}
              <h3
                className={`font-display text-2xl md:text-3xl ${
                  s.featured ? "text-cream" : "text-teal-deep"
                }`}
              >
                {s.name}
              </h3>
              <p
                className={`mt-2 italic text-sm ${
                  s.featured ? "text-cream/80" : "text-muted"
                }`}
              >
                {s.tagline}
              </p>

              <ul className="mt-7 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className={`mt-1 shrink-0 ${
                        s.featured ? "text-cream" : "text-teal"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                    <span
                      className={s.featured ? "text-cream/95" : "text-ink/85"}
                    >
                      {p}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`mt-9 inline-block rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                  s.featured
                    ? "bg-cream text-teal-deep hover:bg-cream-deep"
                    : "border border-teal/40 text-teal-deep hover:bg-teal/10"
                }`}
              >
                Inquire about {s.name.split(" ")[0]}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
