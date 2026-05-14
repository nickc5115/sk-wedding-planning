"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
];

const ctaLink = { href: "/contact", label: "Contact" };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    if (open) setOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="SK Wedding Planning"
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
          <span className="font-display text-xl text-teal-deep hidden sm:inline">
            SK Wedding Planning
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm tracking-wide transition-colors ${
                    active
                      ? "text-teal-deep"
                      : "text-ink/80 hover:text-teal-deep"
                  }`}
                >
                  {l.label}
                  {active && (
                    <span className="block h-px bg-teal-deep mt-1" />
                  )}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href={ctaLink.href}
              className="rounded-full bg-teal px-5 py-2 text-sm font-medium text-cream hover:bg-teal-deep transition-colors"
            >
              {ctaLink.label}
            </Link>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden p-2 text-teal-deep"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-y border-teal/30 bg-cream/95 backdrop-blur-md shadow-[0_12px_24px_-12px_rgba(31,77,77,0.18)]">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-2 text-base text-ink/85 hover:text-teal-deep"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={ctaLink.href}
                className="inline-block rounded-full bg-teal px-5 py-2 text-sm font-medium text-cream"
              >
                {ctaLink.label}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
