import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Gallery | SK Wedding Planning",
  description:
    "A few moments from past weddings planned by Shannon Kelly across New England and New York.",
};

export default function GalleryPage() {
  return (
    <div className="pt-24 md:pt-28">
      <Gallery />
      <CtaBanner
        title="Picturing yours yet?"
        body="Tell me what you're imagining and we'll go from there."
      />
    </div>
  );
}
