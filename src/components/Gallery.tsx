"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type Tile = {
  title: string;
  detail: string;
  src: string;
  span?: string;
};

const tiles: Tile[] = [
  {
    title: "Brittany & Jeffrey",
    detail: "December 2023",
    src: "/gallery/brittany-jeffrey.jpg",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Kelly & Ian",
    detail: "September 2023",
    src: "/gallery/kelly-ian.jpg",
    span: "md:col-span-2",
  },
  {
    title: "Pop the bubbly",
    detail: "Reception seating",
    src: "/gallery/seating-chart.jpg",
    span: "md:col-span-2",
  },
  {
    title: "Alora & Patrick",
    detail: "Garden guest book",
    src: "/gallery/alora-patrick.jpg",
    span: "md:col-span-4",
  },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + tiles.length) % tiles.length,
      ),
    [],
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % tiles.length)),
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, prev, next]);

  const active = activeIndex !== null ? tiles[activeIndex] : null;

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
            Every wedding looks different, because every couple does. Here are
            a few we&apos;ll always remember.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[220px] md:auto-rows-[240px] gap-4">
          {tiles.map((t, i) => (
            <button
              key={t.title}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`group relative overflow-hidden rounded-2xl text-left focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2 focus:ring-offset-cream ${t.span ?? ""}`}
              aria-label={`Open ${t.title}`}
            >
              <Image
                src={t.src}
                alt={`${t.title}, ${t.detail}`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-cream">
                <div className="font-display text-xl leading-tight">
                  {t.title}
                </div>
                <div className="mt-1 text-xs tracking-[0.2em] uppercase text-cream/85">
                  {t.detail}
                </div>
              </figcaption>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${active.title}, ${active.detail}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 backdrop-blur-sm p-4 md:p-10"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 md:top-6 md:right-6 rounded-full bg-cream/10 hover:bg-cream/20 text-cream w-10 h-10 flex items-center justify-center transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 rounded-full bg-cream/10 hover:bg-cream/20 text-cream w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 6l-6 6 6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 rounded-full bg-cream/10 hover:bg-cream/20 text-cream w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-colors"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div
            className="relative max-w-5xl w-full max-h-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[70vh] md:h-[80vh]">
              <Image
                src={active.src}
                alt={`${active.title}, ${active.detail}`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-5 text-center text-cream">
              <div className="font-display text-2xl leading-tight">
                {active.title}
              </div>
              <div className="mt-1 text-xs tracking-[0.2em] uppercase text-cream/75">
                {active.detail}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
