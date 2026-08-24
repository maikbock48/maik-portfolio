import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ACCENT } from "../constants";

export const SceneLabel = ({ num, title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame: frame - 6,
    fps,
    config: { damping: 200, stiffness: 120 },
  });

  const y = interpolate(entrance, [0, 1], [24, 0]);
  const opacity = interpolate(frame, [4, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const lineWidth = interpolate(frame, [10, 34], [0, 46], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: 64,
        bottom: 56,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        transform: `translateY(${y}px)`,
        opacity,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span
          style={{
            fontSize: 15,
            fontWeight: 700,
            letterSpacing: 3,
            color: ACCENT,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {num}
        </span>
        <div
          style={{
            width: lineWidth,
            height: 2,
            background: ACCENT,
            borderRadius: 2,
          }}
        />
      </div>
      <h2
        style={{
          fontSize: 44,
          fontWeight: 700,
          color: "white",
          margin: 0,
          letterSpacing: -0.5,
        }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.55)",
            margin: 0,
            maxWidth: 480,
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
};
