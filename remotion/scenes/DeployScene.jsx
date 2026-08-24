import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Background } from "../components/Background";
import { SceneLabel } from "../components/SceneLabel";
import { typedText } from "../components/typewriter";
import { ACCENT } from "../constants";

const termLines = [
  { start: 4, text: "$ vercel --prod", color: "#e6e6ec", speed: 2.2 },
  { start: 24, text: "Building...", color: "#7c7c88", speed: 2.6 },
  { start: 44, text: "Uploading...", color: "#7c7c88", speed: 2.6 },
  { start: 62, text: "✓ Deployment ready", color: "#5df2a4", speed: 2.6 },
];

export const DeployScene = ({ eyebrow, title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardIn = interpolate(frame, [2, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const badgeDelay = 84;
  const badgeSpring = spring({
    frame: frame - badgeDelay,
    fps,
    config: { damping: 10, stiffness: 130 },
  });
  const badgeShown = frame > badgeDelay;

  const pulse = interpolate(
    ((frame - badgeDelay) % 45) / 45,
    [0, 1],
    [0.9, 1.6]
  );
  const pulseOpacity = interpolate(
    ((frame - badgeDelay) % 45) / 45,
    [0, 1],
    [0.5, 0]
  );

  const urlOpacity = interpolate(frame, [badgeDelay + 14, badgeDelay + 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

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

      {/* terminal */}
      <div
        style={{
          position: "absolute",
          left: 560,
          top: 96,
          width: 520,
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(14,14,18,0.8)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
          opacity: cardIn,
          transform: `scale(${interpolate(cardIn, [0, 1], [0.94, 1])})`,
          transformOrigin: "top left",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: 40,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            gap: 8,
            paddingLeft: 16,
          }}
        >
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <div key={c} style={{ width: 9, height: 9, borderRadius: 999, background: c }} />
          ))}
        </div>
        <div
          style={{
            padding: "20px 22px",
            fontFamily: "Menlo, Consolas, monospace",
            fontSize: 15.5,
            lineHeight: 2,
            minHeight: 150,
          }}
        >
          {termLines.map((l, i) => (
            <div key={i} style={{ color: l.color, whiteSpace: "pre" }}>
              {typedText(l.text, frame, l.start, l.speed)}
            </div>
          ))}
        </div>
      </div>

      {/* live badge */}
      {badgeShown && (
        <div
          style={{
            position: "absolute",
            left: 780,
            top: 330,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 14,
          }}
        >
          <div style={{ position: "relative", width: 96, height: 96 }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                border: `2px solid ${ACCENT}`,
                transform: `scale(${pulse})`,
                opacity: pulseOpacity,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${ACCENT}33 0%, transparent 70%)`,
                transform: `scale(${interpolate(badgeSpring, [0, 1], [0.6, 1])})`,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 10,
                borderRadius: "50%",
                background: "rgba(0,217,255,0.12)",
                border: `2px solid ${ACCENT}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transform: `scale(${badgeSpring})`,
              }}
            >
              <svg width={30} height={30} viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 13l4 4L19 7"
                  stroke={ACCENT}
                  strokeWidth={2.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={20}
                  strokeDashoffset={interpolate(badgeSpring, [0.4, 1], [20, 0], {
                    extrapolateLeft: "clamp",
                  })}
                />
              </svg>
            </div>
          </div>

          <div
            style={{
              padding: "8px 18px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.14)",
              color: "white",
              fontSize: 14,
              fontFamily: "Menlo, monospace",
              opacity: urlOpacity,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: 999, background: "#5df2a4" }} />
            yourproject.vercel.app
          </div>
        </div>
      )}

      <SceneLabel num="04" title={title} subtitle={subtitle} />
    </AbsoluteFill>
  );
};
