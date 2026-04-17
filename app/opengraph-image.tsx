import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Gigadroom — From Idea to Reality";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0A",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow blobs (no children — safe without display) */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 65%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)",
            display: "flex",
          }}
        />

        {/* Top — Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <svg
            width="44"
            height="44"
            viewBox="0 0 34 34"
            fill="none"
          >
            <rect x="4" y="14" width="26" height="16" rx="3" fill="white" />
            <rect x="10" y="4" width="20" height="14" rx="3" fill="white" opacity="0.45" />
            <rect x="4" y="14" width="6" height="2" rx="1" fill="#0A0A0A" />
          </svg>
          <span
            style={{
              color: "white",
              fontSize: "30px",
              fontWeight: "700",
              letterSpacing: "-0.03em",
              lineHeight: "1",
              display: "flex",
            }}
          >
            Gigadroom
          </span>
        </div>

        {/* Middle — Main copy */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <span
            style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Consulting · AI Systems · Digital Products
          </span>

          {/* Headline split into two spans to avoid <br /> */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
            <span
              style={{
                fontSize: "88px",
                fontWeight: "800",
                color: "white",
                letterSpacing: "-0.045em",
                lineHeight: "1.0",
                display: "flex",
              }}
            >
              From Idea
            </span>
            <span
              style={{
                fontSize: "88px",
                fontWeight: "800",
                color: "rgba(255,255,255,0.55)",
                letterSpacing: "-0.045em",
                lineHeight: "1.0",
                display: "flex",
              }}
            >
              to Reality.
            </span>
          </div>

          <span
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.4)",
              fontWeight: "400",
              lineHeight: "1.55",
              maxWidth: "620px",
              display: "flex",
            }}
          >
            AI systems, digital infrastructure & end-to-end products for businesses ready to lead.
          </span>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.25)",
              fontSize: "16px",
              letterSpacing: "0.04em",
              display: "flex",
            }}
          >
            gigadroom.com
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              color: "#0A0A0A",
              fontSize: "16px",
              fontWeight: "700",
              padding: "14px 30px",
              borderRadius: "100px",
              letterSpacing: "-0.01em",
            }}
          >
            Start a Project →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
