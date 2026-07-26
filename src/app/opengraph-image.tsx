import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#474855",
        }}
      >
        <div style={{ display: "flex", fontSize: 140, fontWeight: 900 }}>
          <span style={{ color: "#ffffff" }}>u</span>
          <span style={{ color: "#ffffff" }}>H</span>
          <span style={{ color: "#B81632" }}>ü</span>
          <span style={{ color: "#ffffff" }}>b</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            fontWeight: 600,
            color: "#F2F2F2",
          }}
        >
          Sistema de acompañamiento para emprendedores
        </div>
      </div>
    ),
    { ...size }
  );
}
