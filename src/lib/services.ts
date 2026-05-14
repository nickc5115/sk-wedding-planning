import type { Service } from "@/components/ServiceCard";

export const services: Service[] = [
  {
    name: "Full Planning",
    tagline: "From day-one details to last-call goodbyes.",
    points: [
      "Vision, budget, and timeline built from scratch",
      "Vendor curation and contract review",
      "Design direction across every detail",
      "Unlimited planning meetings",
      "Full day-of management",
    ],
    featured: true,
  },
  {
    name: "Partial Planning",
    tagline: "You've started. I'll take it the rest of the way.",
    points: [
      "Step in 4-6 months out",
      "Fill remaining vendor gaps",
      "Refine design and logistics",
      "Build a bullet-proof timeline",
      "Full day-of management",
    ],
  },
  {
    name: "Day-of Coordination",
    tagline: "You planned it. I'll run it.",
    points: [
      "Begin 6 weeks before the wedding",
      "Vendor confirmation + walkthrough",
      "Timeline + floor plan finalization",
      "On-site lead coordinator",
      "One assistant coordinator included",
    ],
  },
];
