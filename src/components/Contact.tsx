import Botanical from "./Botanical";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <Botanical
        flip
        className="absolute top-10 right-0 w-80 text-teal/15 hidden md:block"
      />
      <Botanical className="absolute bottom-0 left-0 w-72 text-teal/15 hidden md:block" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="eyebrow">Let’s talk</p>
        <h2 className="mt-5 font-display text-4xl md:text-5xl text-teal-deep leading-tight">
          Tell me about your day.
        </h2>
        <p className="mt-5 text-muted text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          A few details to start - I’ll write back within two business days
          with availability and next steps.
        </p>

        <form
          className="mt-12 grid gap-5 text-left"
          action="mailto:hello@skweddingplanning.com"
          method="post"
          encType="text/plain"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Your name" name="name" placeholder="Jamie Doe" />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <Field
              label="Wedding date (or season)"
              name="date"
              placeholder="Fall 2026"
            />
            <Field
              label="Location"
              name="location"
              placeholder="Hudson Valley, NY"
            />
          </div>
          <label className="block">
            <span className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
              A little about your vision
            </span>
            <textarea
              name="message"
              rows={5}
              placeholder="What are you imagining? What feels important?"
              className="w-full rounded-2xl border border-teal/25 bg-cream/60 px-5 py-4 text-ink placeholder:text-muted/60 focus:outline-none focus:border-teal focus:bg-cream transition-colors"
            />
          </label>
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-muted">
              Prefer email? Write to{" "}
              <a
                href="mailto:hello@skweddingplanning.com"
                className="text-teal-deep underline underline-offset-4"
              >
                hello@skweddingplanning.com
              </a>
            </p>
            <button
              type="submit"
              className="rounded-full bg-teal px-8 py-3 text-sm font-medium tracking-wide text-cream hover:bg-teal-deep transition-colors"
            >
              Send inquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="block text-xs tracking-[0.2em] uppercase text-muted mb-2">
        {label}
      </span>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-full border border-teal/25 bg-cream/60 px-5 py-3 text-ink placeholder:text-muted/60 focus:outline-none focus:border-teal focus:bg-cream transition-colors"
      />
    </label>
  );
}
