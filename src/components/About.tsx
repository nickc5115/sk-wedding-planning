import Image from "next/image";

const SHANNON_PHOTO = ""; // set to "/shannon.jpg" once asset is delivered

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-14 md:gap-20 items-center">
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
          <div className="absolute -inset-4 rounded-[2rem] border border-teal/25" />
          {SHANNON_PHOTO ? (
            <Image
              src={SHANNON_PHOTO}
              alt="Shannon Kelly"
              fill
              sizes="(min-width: 768px) 28rem, 100vw"
              className="rounded-[1.75rem] object-cover"
            />
          ) : (
            <div className="absolute inset-0 rounded-[1.75rem] overflow-hidden bg-gradient-to-br from-teal-soft/40 via-cream-deep to-teal/20 flex items-center justify-center">
              <div className="text-center px-6">
                <Image
                  src="/logo.jpg"
                  alt="SK Wedding Planning"
                  width={220}
                  height={220}
                  className="opacity-90 mx-auto"
                />
                <p className="mt-6 text-xs tracking-[0.22em] uppercase text-teal-deep/70">
                  Portrait coming soon
                </p>
              </div>
            </div>
          )}
        </div>

        <div>
          <p className="eyebrow">Meet Shannon</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-teal-deep leading-tight">
            Planning that listens before it leads.
          </h2>

          {/* PLACEHOLDER: replace with Shannon's real bio (2 short paragraphs, 150-250 words total). */}
          <div className="mt-7 space-y-5 text-muted text-base md:text-lg leading-relaxed">
            <p className="italic text-muted/80">
              [Shannon's intro paragraph goes here. A few sentences about who
              she is, how she works, and what drew her to wedding planning.]
            </p>
            <p className="italic text-muted/80">
              [Second paragraph: the approach. Small client load, the kinds of
              weddings she loves, what couples can expect from working with
              her.]
            </p>
          </div>

          {/* PLACEHOLDER: replace with a real pull-quote from Shannon. */}
          <figure className="mt-10 border-l-2 border-teal/40 pl-5">
            <blockquote className="font-display text-xl md:text-2xl text-teal-deep leading-snug italic">
              &quot;[A short belief or guiding sentence Shannon would put her
              name to.]&quot;
            </blockquote>
            <figcaption className="mt-3 text-xs tracking-[0.22em] uppercase text-muted">
              Shannon Kelly
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
