import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 40,
          fontWeight: 600,
          letterSpacing: -1,
          fontFamily: "serif",
          borderRadius: 12,
        }}
      >
        SK
      </div>
    ),
    { ...size },
  );
}
