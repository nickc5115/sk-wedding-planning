const tiles = [
  {
    title: "Garden ceremony",
    location: "Hudson Valley, NY",
    gradient:
      "linear-gradient(135deg, #cfe3df 0%, #6fb0ad 55%, #2f8a8a 100%)",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Twilight reception",
    location: "Newport, RI",
    gradient:
      "linear-gradient(160deg, #f1ebe1 0%, #d9c9a8 60%, #8a6a3f 100%)",
  },
  {
    title: "Florals by candle",
    location: "Brooklyn, NY",
    gradient:
      "linear-gradient(155deg, #f7e7e1 0%, #d9a89a 55%, #8a4a3c 100%)",
  },
  {
    title: "Coastal vows",
    location: "Cape Cod, MA",
    gradient:
      "linear-gradient(140deg, #e6f0ef 0%, #9cc4c0 55%, #1f6a6a 100%)",
    span: "md:col-span-2",
  },
  {
    title: "Stone barn supper",
    location: "Berkshires, MA",
    gradient:
      "linear-gradient(160deg, #ece4d8 0%, #b7a17d 55%, #5b4a30 100%)",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <p className="eyebrow">A few from the archive</p>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-teal-deep leading-tight">
              Quiet moments, well planned.
            </h2>
          </div>
          <p className="text-muted md:text-right max-w-sm">
            Every wedding looks different - because every couple does. Here are
            a few we’ll always remember.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-4">
          {tiles.map((t) => (
            <figure
              key={t.title}
              className={`group relative overflow-hidden rounded-2xl ${t.span ?? ""}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: t.gradient }}
              />
              <div
                aria-hidden
                className="absolute inset-0 opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.3), transparent 60%)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-cream">
                <div className="font-display text-xl leading-tight">
                  {t.title}
                </div>
                <div className="mt-1 text-xs tracking-[0.2em] uppercase text-cream/85">
                  {t.location}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
