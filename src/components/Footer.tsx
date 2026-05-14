import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-cream-deep border-t border-teal/15">
      <div className="mx-auto max-w-6xl px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <Link href="/" className="flex items-center gap-4">
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

        <nav className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-ink/75">
          <Link href="/about" className="hover:text-teal-deep">About</Link>
          <Link href="/services" className="hover:text-teal-deep">Services</Link>
          <Link href="/gallery" className="hover:text-teal-deep">Gallery</Link>
          <Link href="/contact" className="hover:text-teal-deep">Contact</Link>
        </nav>

        <div className="text-sm text-muted">
          <a
            href={`mailto:${siteConfig.email}`}
            className="hover:text-teal-deep"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
      <div className="border-t border-teal/10">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted flex flex-col sm:flex-row sm:justify-between gap-2">
          <span>
            &copy; {year} {siteConfig.name}. All rights reserved.
          </span>
          <span className="tracking-[0.2em] uppercase">
            {siteConfig.serviceArea}
          </span>
        </div>
      </div>
    </footer>
  );
}
