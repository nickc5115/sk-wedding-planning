import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-cream-deep border-t border-teal/15">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-8 md:grid-cols-3 md:items-center">
        <Link href="/" className="flex items-center gap-4 justify-self-center md:justify-self-start">
          <Image
            src="/logo.jpg"
            alt={siteConfig.name}
            width={56}
            height={56}
            className="rounded-full"
          />
          <div>
            <div className="font-display text-xl text-teal-deep">
              {siteConfig.name}
            </div>
            <div className="text-sm text-muted">
              {siteConfig.planner} &middot; Planner
            </div>
          </div>
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-ink/75 justify-self-center">
          <Link href="/about" className="hover:text-teal-deep">About</Link>
          <Link href="/services" className="hover:text-teal-deep">Services</Link>
          <Link href="/gallery" className="hover:text-teal-deep">Gallery</Link>
          <Link
            href="/contact"
            className="rounded-full bg-teal px-5 py-2 text-sm font-medium text-cream hover:bg-teal-deep transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex flex-col items-center gap-2 text-sm text-muted justify-self-center md:justify-self-end md:items-end">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-teal-deep"
          >
            {siteConfig.email}
          </a>
          {siteConfig.instagram && (
            <a
              href={`https://www.instagram.com/${siteConfig.instagram}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-teal-deep"
            >
              <svg
                aria-hidden
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              @{siteConfig.instagram}
            </a>
          )}
        </div>
      </div>
      <div className="border-t border-teal/10">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted grid gap-2 sm:grid-cols-3 sm:items-center text-center">
          <span className="sm:text-left">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </span>
          <span className="tracking-[0.2em] uppercase">
            {siteConfig.serviceArea}
          </span>
          <span className="sm:text-right">
            Designed by{" "}
            <a
              href="https://ironbitesoftware.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-deep"
            >
              Ironbite Software
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
