import Link from "next/link";

export type Service = {
  name: string;
  tagline: string;
  points: string[];
  featured?: boolean;
};

type Props = {
  service: Service;
  href?: string;
  ctaLabel?: string;
};

export default function ServiceCard({
  service: s,
  href = "/contact",
  ctaLabel,
}: Props) {
  const label = ctaLabel ?? `Inquire about ${s.name.split(" ")[0]}`;
  return (
    <article
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
            <span className={s.featured ? "text-cream/95" : "text-ink/85"}>
              {p}
            </span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`mt-9 inline-block rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
          s.featured
            ? "bg-cream text-teal-deep hover:bg-cream-deep"
            : "border border-teal/40 text-teal-deep hover:bg-teal/10"
        }`}
      >
        {label}
      </Link>
    </article>
  );
}
