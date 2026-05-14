const steps = [
  {
    title: "Inquiry call",
    detail:
      "A 30-minute conversation about your date, your guests, and what matters most to you.",
  },
  {
    title: "Vision + scope",
    detail:
      "We map the shape of the day, agree on a budget, and decide which service level fits.",
  },
  {
    title: "Vendor curation",
    detail:
      "I bring you a short list for every vendor you still need, vetted for fit and budget.",
  },
  {
    title: "Design + logistics",
    detail:
      "Floor plans, run-of-show, vendor contracts, paper goods, all the moving pieces.",
  },
  {
    title: "Day-of",
    detail:
      "I run the day so you don't have to. You get to be the couple at the center of it.",
  },
];

export default function Process() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">The process</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-teal-deep leading-tight">
            What working together looks like.
          </h2>
          <p className="mt-5 text-muted text-base md:text-lg leading-relaxed">
            The exact rhythm shifts with your service level, but the path is
            usually the same.
          </p>
        </div>

        <ol className="mt-16 grid gap-6 md:grid-cols-5 md:gap-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative rounded-2xl bg-cream-deep/50 border border-teal/15 p-6"
            >
              <div className="font-display text-3xl text-teal/40 leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 font-display text-xl text-teal-deep">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {s.detail}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
