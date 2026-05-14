import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
          <div className="absolute -inset-4 rounded-[2rem] border border-teal/25" />
          <div className="absolute inset-0 rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-teal-soft/40 via-cream-deep to-teal/20 flex items-center justify-center">
            <Image
              src="/logo.jpg"
              alt="SK Wedding Planning"
              width={320}
              height={320}
              className="opacity-90"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow">Meet Shannon</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-teal-deep leading-tight">
            Planning that listens before it leads.
          </h2>
          <div className="mt-7 space-y-5 text-muted text-base md:text-lg leading-relaxed">
            <p>
              Hi, I’m Shannon - the planner, the list-maker, and the calm voice
              in your inbox at 10pm on a Tuesday. I started SK Wedding Planning
              because the best weddings I’d ever been to weren’t the biggest -
              they were the ones that felt like the couple at the center of them.
            </p>
            <p>
              I work with a small number of couples each year so I can be fully
              present for yours. From the first vision call to the last toast,
              I’ll handle the logistics, advocate for your priorities, and keep
              everything moving - quietly, gracefully, in the background.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <Stat number="60+" label="Weddings planned" />
            <Stat number="8 yrs" label="In the industry" />
            <Stat number="100%" label="Couples on time" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl md:text-4xl text-teal-deep">
        {number}
      </div>
      <div className="mt-1 text-xs tracking-[0.18em] uppercase text-muted">
        {label}
      </div>
    </div>
  );
}
