import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-cream-deep border-t border-teal/15">
      <div className="mx-auto max-w-6xl px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/logo.jpg"
            alt="SK Wedding Planning"
            width={56}
            height={56}
            className="rounded-full"
          />
          <div>
            <div className="font-display text-xl text-teal-deep">
              SK Wedding Planning
            </div>
            <div className="text-sm text-muted">Shannon Kelly · Planner</div>
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
            href="mailto:hello@skweddingplanning.com"
            className="hover:text-teal-deep"
          >
            hello@skweddingplanning.com
          </a>
        </div>
      </div>
      <div className="border-t border-teal/10">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs text-muted flex flex-col sm:flex-row sm:justify-between gap-2">
          <span>© {year} SK Wedding Planning. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">
            Made with care in New England
          </span>
        </div>
      </div>
    </footer>
  );
}
