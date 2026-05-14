import type { Metadata } from "next";
import About from "@/components/About";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About | SK Wedding Planning",
  description:
    "Meet Shannon Kelly, the planner behind SK Wedding Planning, and the approach that keeps wedding days calm, intentional, and unmistakably yours.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28">
      <About />
      <CtaBanner
        title="Let's plan yours next."
        body="If something here resonated, the next step is just a short note."
        cta="Start the conversation"
      />
    </div>
  );
}
