import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | SK Wedding Planning",
  description:
    "Inquire about wedding planning, partial planning, or day-of coordination with Shannon Kelly.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-28">
      <Contact />
    </div>
  );
}
