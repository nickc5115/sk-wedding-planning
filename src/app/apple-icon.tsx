import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf6f0",
          color: "#1f6a6a",
          fontSize: 110,
          fontWeight: 600,
          letterSpacing: -2,
          fontFamily: "serif",
          borderRadius: 36,
        }}
      >
        SK
      </div>
    ),
    { ...size },
  );
}
