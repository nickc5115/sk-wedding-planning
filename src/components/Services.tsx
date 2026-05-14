import Botanical from "./Botanical";
import ServiceCard from "./ServiceCard";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-cream-deep/60 overflow-hidden"
    >
      <Botanical className="absolute top-10 right-0 w-72 text-teal/20 hidden md:block" />
      <Botanical
        flip
        className="absolute bottom-10 left-0 w-72 text-teal/20 hidden md:block"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Services</p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-teal-deep leading-tight">
            A level of support for every kind of couple.
          </h2>
          <p className="mt-5 text-muted text-base md:text-lg leading-relaxed">
            Whether you need a full creative partner or a steady hand for the
            final stretch, there&apos;s a place to start.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.name} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
