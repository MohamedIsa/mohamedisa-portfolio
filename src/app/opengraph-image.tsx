import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} – ${profile.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#09090b",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#2dd4bf" }}>
          ~/mohamedisa
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 600 }}>
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 48,
              color: "#2dd4bf",
              marginTop: 8,
            }}
          >
            {profile.headline}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#a1a1aa",
              marginTop: 32,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            React Native · Expo · TypeScript · Release pipelines · App security
            · Node.js on AWS
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa" }}>
          {profile.siteUrl.replace("https://", "")}
        </div>
      </div>
    ),
    size
  );
}
