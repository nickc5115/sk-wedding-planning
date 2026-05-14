import Link from "next/link";

type Props = {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
};

export default function CtaBanner({
  title = "Ready when you are.",
  body = "A short note is all it takes to get the conversation going.",
  cta = "Say hello",
  href = "/contact",
}: Props) {
  return (
    <section className="relative py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-teal-deep text-cream px-8 py-14 md:px-16 md:py-20 text-center">
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 25%, rgba(255,255,255,0.4), transparent 45%), radial-gradient(circle at 85% 80%, rgba(255,255,255,0.25), transparent 55%)",
            }}
          />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl leading-tight">
              {title}
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-cream/85 text-base md:text-lg">
              {body}
            </p>
            <Link
              href={href}
              className="mt-8 inline-block rounded-full bg-cream px-8 py-3 text-sm font-medium tracking-wide text-teal-deep hover:bg-cream-deep transition-colors"
            >
              {cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
