import Link from "next/link";
import { services } from "@/lib/services";

export default function ServicesPreview() {
  return (
    <section className="relative py-24 md:py-32 bg-cream-deep/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <p className="eyebrow">How we can work together</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-teal-deep leading-tight">
              Three ways in.
            </h2>
          </div>
          <Link
            href="/services"
            className="text-sm tracking-wide text-teal-deep hover:text-teal underline-offset-4 underline decoration-teal/40 hover:decoration-teal"
          >
            See full details &rarr;
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.name}
              className={`relative rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                s.featured
                  ? "bg-teal text-cream shadow-lg shadow-teal/15"
                  : "bg-cream border border-teal/15 hover:border-teal/30"
              }`}
            >
              <h3
                className={`font-display text-2xl ${
                  s.featured ? "text-cream" : "text-teal-deep"
                }`}
              >
                {s.name}
              </h3>
              <p
                className={`mt-2 text-sm italic ${
                  s.featured ? "text-cream/80" : "text-muted"
                }`}
              >
                {s.tagline}
              </p>
              <Link
                href="/services"
                className={`mt-6 inline-block text-sm font-medium ${
                  s.featured
                    ? "text-cream hover:text-cream/80"
                    : "text-teal-deep hover:text-teal"
                }`}
              >
                Learn more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
