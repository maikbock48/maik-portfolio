import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { Background } from "../components/Background";
import { SceneLabel } from "../components/SceneLabel";
import { ACCENT } from "../constants";

const KEYWORD = "#00d9ff";
const STRING = "#c9f5ff";
const MUTED = "#7c7c88";
const TEXT = "#e6e6ec";

const lines = [
  { start: 6, spans: [
    { t: "export ", c: KEYWORD }, { t: "function ", c: KEYWORD }, { t: "Hero", c: TEXT }, { t: "() {", c: MUTED },
  ]},
  { start: 22, spans: [
    { t: "  return (", c: MUTED },
  ]},
  { start: 34, spans: [
    { t: "    <section ", c: KEYWORD }, { t: "className", c: "#ffd479" }, { t: "=", c: MUTED }, { t: '"hero"', c: STRING }, { t: ">", c: KEYWORD },
  ]},
  { start: 54, spans: [
    { t: "      <h1>", c: KEYWORD }, { t: "Ship it fast.", c: TEXT }, { t: "</h1>", c: KEYWORD },
  ]},
  { start: 76, spans: [
    { t: "    </section>", c: KEYWORD },
  ]},
  { start: 90, spans: [
    { t: "  );", c: MUTED },
  ]},
  { start: 98, spans: [
    { t: "}", c: MUTED },
  ]},
];

const lineLength = (spans) => spans.reduce((acc, s) => acc + s.t.length, 0);

const revealSpans = (spans, count) => {
  let remaining = count;
  const out = [];
  for (const s of spans) {
    if (remaining <= 0) break;
    const take = Math.min(s.t.length, remaining);
    out.push({ ...s, t: s.t.slice(0, take) });
    remaining -= take;
  }
  return out;
};

export const BuildScene = ({ eyebrow, title, subtitle }) => {
  const frame = useCurrentFrame();
  const cardIn = interpolate(frame, [2, 20], [0, 1], {
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

      <div
        style={{
          position: "absolute",
          left: 560,
          top: 70,
          width: 570,
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.14)",
          background: "rgba(14,14,18,0.75)",
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
          <div
            style={{
              marginLeft: 16,
              padding: "4px 12px",
              borderRadius: 6,
              background: "rgba(0,217,255,0.12)",
              border: `1px solid ${ACCENT}40`,
              color: ACCENT,
              fontSize: 12,
              fontFamily: "Menlo, monospace",
            }}
          >
            Hero.tsx
          </div>
        </div>

        <div style={{ padding: "20px 22px", fontFamily: "Menlo, Consolas, monospace", fontSize: 16, lineHeight: 1.85 }}>
          {lines.map((line, i) => {
            const total = lineLength(line.spans);
            const count = Math.max(0, Math.floor((frame - line.start) * 1.4));
            const shown = revealSpans(line.spans, Math.min(count, total));
            const showCursor = count > 0 && count < total;
            return (
              <div key={i} style={{ whiteSpace: "pre" }}>
                {shown.map((s, j) => (
                  <span key={j} style={{ color: s.c }}>
                    {s.t}
                  </span>
                ))}
                {showCursor && (
                  <span
                    style={{
                      display: "inline-block",
                      width: 8,
                      height: 16,
                      marginLeft: 2,
                      background: ACCENT,
                      opacity: Math.floor(frame / 8) % 2 === 0 ? 1 : 0,
                      verticalAlign: "middle",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      <SceneLabel num="03" title={title} subtitle={subtitle} />
    </AbsoluteFill>
  );
};
