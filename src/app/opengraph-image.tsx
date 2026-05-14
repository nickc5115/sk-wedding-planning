import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} - ${siteConfig.planner}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #f1ebe1 0%, #faf6f0 50%, #cfe3df 100%)",
          color: "#1f6a6a",
          fontFamily: "serif",
          padding: 80,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#2f8a8a",
          }}
        >
          {siteConfig.planner}
        </div>
        <div
          style={{
            marginTop: 30,
            fontSize: 130,
            fontWeight: 500,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          SK Wedding Planning
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 34,
            color: "#6b6b66",
            maxWidth: 800,
          }}
        >
          A wedding that feels entirely yours.
        </div>
      </div>
    ),
    { ...size },
  );
}
