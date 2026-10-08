import { ImageResponse } from "next/og";

export const alt = "Keshav Sandhu - Full-Stack Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        color: "#141312",
        background: "#F9F8F6",
        border: "24px solid #F2EFE9",
      }}
    >
      <div style={{ display: "flex", fontSize: 24, letterSpacing: 4, color: "#D34E26" }}>
        KESHAV SANDHU // PRODUCT ENGINEER
      </div>
      <div style={{ display: "flex", maxWidth: "930px", fontSize: 88, lineHeight: 1.05, letterSpacing: -4 }}>
        Multi-tenant SaaS and applied-AI products that hold up in production.
      </div>
      <div style={{ display: "flex", fontSize: 28, color: "#5A5650" }}>
        Full-stack engineering · Noida, India
      </div>
    </div>,
    size,
  );
}
