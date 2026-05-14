import Link from "next/link";
import Botanical from "./Botanical";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-28 md:pt-44 md:pb-40"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-cream-deep via-cream to-cream"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(47,138,138,0.18), transparent 45%), radial-gradient(circle at 85% 75%, rgba(47,138,138,0.12), transparent 50%)",
        }}
      />

      <Botanical className="absolute -top-10 -left-16 w-[420px] text-teal/35 hidden md:block" />
      <Botanical
        flip
        className="absolute -bottom-16 -right-16 w-[380px] text-teal/30 hidden md:block"
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <p className="eyebrow">Shannon Kelly · Wedding Planner</p>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl md:leading-[1.02] text-teal-deep">
          A wedding that feels
          <br className="hidden sm:block" />
          <em className="not-italic text-teal"> entirely yours.</em>
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-base md:text-lg text-muted leading-relaxed">
          Thoughtful planning, calm logistics, and a steady hand on the day,
          so the two of you can simply be present, with everyone you love.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-teal px-8 py-3 text-sm font-medium tracking-wide text-cream hover:bg-teal-deep transition-colors"
          >
            Start the conversation
          </Link>
          <Link
            href="/services"
            className="rounded-full border border-teal/40 px-8 py-3 text-sm font-medium tracking-wide text-teal-deep hover:bg-teal/10 transition-colors"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
