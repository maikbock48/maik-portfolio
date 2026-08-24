import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Background } from "../components/Background";
import { SceneLabel } from "../components/SceneLabel";
import { ACCENT } from "../constants";

const CARD_X = 560;
const CARD_Y = 70;
const CARD_W = 560;
const CARD_H = 320;

const drawRect = (frame, delay, dur = 22) =>
  interpolate(frame, [delay, delay + dur], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

const palette = ["#00d9ff", "#ffffff", "#7c7c88", "#ff6b6b"];

export const DesignScene = ({ eyebrow, title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardIn = drawRect(frame, 2, 26);
  const topBarIn = drawRect(frame, 16, 18);
  const heroIn = drawRect(frame, 30, 24);
  const line1In = drawRect(frame, 50, 16);
  const line2In = drawRect(frame, 60, 16);

  return (
    <AbsoluteFill>
      <Background />

      <div
        style={{
          position: "absolute",
          left: 64,
          top: 56,
          opacity: interpolate(frame, [0, 16], [0, 1], { extrapolateRight: "clamp" }),
          color: ACCENT,
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        {eyebrow}
      </div>

      {/* mockup card */}
      <div
        style={{
          position: "absolute",
          left: CARD_X,
          top: CARD_Y,
          width: CARD_W,
          height: CARD_H,
          borderRadius: 16,
          border: `1px solid rgba(255,255,255,${0.14 * cardIn})`,
          background: "rgba(255,255,255,0.03)",
          boxShadow: `0 30px 80px rgba(0,0,0,0.5)`,
          transform: `scale(${interpolate(cardIn, [0, 1], [0.94, 1])})`,
          transformOrigin: "top left",
          opacity: cardIn,
          overflow: "hidden",
        }}
      >
        {/* top bar */}
        <div
          style={{
            height: 40,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            paddingLeft: 16,
            opacity: topBarIn,
          }}
        >
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} style={{ width: 9, height: 9, borderRadius: 999, background: c }} />
          ))}
          <div
            style={{
              marginLeft: 14,
              height: 16,
              width: interpolate(topBarIn, [0, 1], [0, 220]),
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
            }}
          />
        </div>

        <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 14 }}>
          <div
            style={{
              height: 150,
              borderRadius: 10,
              background: `linear-gradient(135deg, ${ACCENT}33, rgba(255,255,255,0.04))`,
              border: `1px solid ${ACCENT}40`,
              transform: `scaleX(${heroIn})`,
              transformOrigin: "left",
              opacity: heroIn,
            }}
          />
          <div
            style={{
              height: 12,
              borderRadius: 999,
              background: "rgba(255,255,255,0.14)",
              width: `${70 * line1In}%`,
            }}
          />
          <div
            style={{
              height: 12,
              borderRadius: 999,
              background: "rgba(255,255,255,0.09)",
              width: `${45 * line2In}%`,
            }}
          />
        </div>
      </div>

      {/* palette row */}
      <div
        style={{
          position: "absolute",
          left: 64,
          top: 250,
          display: "flex",
          gap: 16,
        }}
      >
        {palette.map((c, i) => {
          const delay = 74 + i * 10;
          const s = spring({ frame: frame - delay, fps, config: { damping: 11, stiffness: 160 } });
          return (
            <div
              key={c}
              style={{
                width: 46,
                height: 46,
                borderRadius: 12,
                background: c,
                transform: `scale(${s}) rotate(${interpolate(s, [0, 1], [-25, 0])}deg)`,
                boxShadow: c === ACCENT ? `0 0 24px ${ACCENT}66` : "none",
              }}
            />
          );
        })}
      </div>

      <SceneLabel num="02" title={title} subtitle={subtitle} />
    </AbsoluteFill>
  );
};
