import type { Metadata } from "next";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Services | SK Wedding Planning",
  description:
    "Full planning, partial planning, and day-of coordination by Shannon Kelly. Find the level of support that fits where you are.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-28">
      <Services />
      <Process />
      <Faq />
      <CtaBanner
        title="Not sure which fits?"
        body="A quick call is the easiest way to figure it out together."
        cta="Book an intro call"
      />
    </div>
  );
}
