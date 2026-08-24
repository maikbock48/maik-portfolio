import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Background } from "../components/Background";
import { SceneLabel } from "../components/SceneLabel";
import { ACCENT } from "../constants";

const CX = 780;
const CY = 280;

const chips = [
  { label: "Goals", angle: -46, dist: 190, delay: 22 },
  { label: "Audience", angle: 6, dist: 210, delay: 38 },
  { label: "Scope", angle: 58, dist: 190, delay: 54 },
];

const Ring = ({ frame, delay, period = 70 }) => {
  const t = ((frame - delay) % period) / period;
  if (frame < delay) return null;
  const progress = t < 0 ? 0 : t;
  const radius = interpolate(progress, [0, 1], [10, 150]);
  const opacity = interpolate(progress, [0, 0.15, 1], [0, 0.55, 0]);
  return (
    <circle
      cx={CX}
      cy={CY}
      r={radius}
      fill="none"
      stroke={ACCENT}
      strokeWidth={1.5}
      opacity={opacity}
    />
  );
};

const Chip = ({ frame, fps, angle, dist, label, delay }) => {
  const rad = (angle * Math.PI) / 180;
  const x = CX + Math.cos(rad) * dist;
  const y = CY + Math.sin(rad) * dist;

  const enter = spring({ frame: frame - delay, fps, config: { damping: 14, stiffness: 120 } });
  const bob = Math.sin((frame - delay) / 14) * 4;
  const opacity = interpolate(frame, [delay, delay + 14], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lineProgress = interpolate(frame, [delay - 8, delay + 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      <line
        x1={CX}
        y1={CY}
        x2={CX + (x - CX) * lineProgress}
        y2={CY + (y - CY) * lineProgress}
        stroke={ACCENT}
        strokeWidth={1}
        opacity={0.35}
        strokeDasharray="3 4"
      />
      <foreignObject
        x={x - 70}
        y={y - 22 + bob}
        width={140}
        height={44}
        style={{ opacity, transform: `scale(${interpolate(enter, [0, 1], [0.7, 1])})`, transformOrigin: "center" }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 999,
            border: `1px solid ${ACCENT}55`,
            background: "rgba(255,255,255,0.04)",
            color: "white",
            fontSize: 16,
            fontWeight: 600,
            backdropFilter: "blur(4px)",
          }}
        >
          {label}
        </div>
      </foreignObject>
    </>
  );
};

export const DiscoverScene = ({ eyebrow, title, subtitle }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const nodeScale = spring({ frame, fps, config: { damping: 12, stiffness: 140 } });
  const nodePulse = 1 + Math.sin(frame / 10) * 0.03;

  return (
    <AbsoluteFill>
      <Background />
      <svg width="100%" height="100%" style={{ position: "absolute", inset: 0 }}>
        <Ring frame={frame} delay={4} />
        <Ring frame={frame} delay={4 + 23} />
        <Ring frame={frame} delay={4 + 46} />
        {chips.map((c) => (
          <Chip key={c.label} frame={frame} fps={fps} {...c} />
        ))}
        <circle
          cx={CX}
          cy={CY}
          r={16 * nodeScale * nodePulse}
          fill="rgba(0,217,255,0.15)"
          stroke={ACCENT}
          strokeWidth={2}
        />
        <circle cx={CX} cy={CY} r={5 * nodeScale} fill={ACCENT} />
      </svg>

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

      <SceneLabel num="01" title={title} subtitle={subtitle} />
    </AbsoluteFill>
  );
};
