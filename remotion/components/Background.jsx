import { AbsoluteFill, useCurrentFrame } from "remotion";
import { ACCENT, BG_DEEP, BG_MID, BG_PRIMARY } from "../constants";

export const Background = () => {
  const frame = useCurrentFrame();
  const driftX = Math.sin(frame / 90) * 40;
  const driftY = Math.cos(frame / 110) * 30;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(120% 120% at 15% 0%, ${BG_MID} 0%, ${BG_PRIMARY} 45%, ${BG_DEEP} 100%)`,
      }}
    >
      {/* drifting accent glow */}
      <div
        style={{
          position: "absolute",
          top: `calc(20% + ${driftY}px)`,
          left: `calc(70% + ${driftX}px)`,
          width: 620,
          height: 620,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${ACCENT}22 0%, ${ACCENT}00 70%)`,
          filter: "blur(10px)",
        }}
      />

      {/* faint dot grid */}
      <svg
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, opacity: 0.35 }}
      >
        <defs>
          <pattern
            id="dotgrid"
            width={34}
            height={34}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={1.4} cy={1.4} r={1.4} fill="rgba(255,255,255,0.08)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotgrid)" />
      </svg>

      {/* vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(120% 120% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
