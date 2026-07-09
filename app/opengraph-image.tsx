import { ImageResponse } from "next/og";
import { yearsExperience } from "@/lib/content";

export const alt = "Sodiq Olatunde — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#0c1024",
          backgroundImage:
            "radial-gradient(1000px 600px at 90% -10%, rgba(232,161,60,0.22), transparent), radial-gradient(circle at 25px 25px, rgba(146,152,196,0.14) 2px, transparent 0)",
          backgroundSize: "100% 100%, 50px 50px",
          color: "#edeff7",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            letterSpacing: 6,
            color: "#6fe3c4",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#6fe3c4",
            }}
          />
          Available for work
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              gap: 28,
              fontSize: 128,
              lineHeight: 1,
              fontWeight: 700,
              letterSpacing: -3,
            }}
          >
            <span>Sodiq</span>
            <span style={{ color: "#e8a13c" }}>Olatunde</span>
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 34,
              color: "#9298c4",
              maxWidth: 900,
            }}
          >
            I architect the data and payment systems companies run on.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            color: "#5a608f",
          }}
        >
          <span>Software Engineer · {yearsExperience} years</span>
          <span>Lagos, Nigeria · remote worldwide</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
