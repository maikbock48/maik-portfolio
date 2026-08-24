export const ogImageSize = { width: 1200, height: 630 };
export const ogImageContentType = "image/png";

export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "#1c1c22",
        backgroundImage:
          "radial-gradient(circle at 82% 22%, rgba(0,217,255,0.22), rgba(28,28,34,0) 45%)",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "36px",
        }}
      >
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: "9999px",
            backgroundColor: "#00d9ff",
          }}
        />
        <div style={{ fontSize: "32px", color: "#00d9ff", fontWeight: 700, letterSpacing: "-0.5px" }}>
          codewithmaik
        </div>
      </div>
      <div style={{ display: "flex", fontSize: "76px", fontWeight: 700, color: "#ffffff", lineHeight: 1.1 }}>
        Maik Bock
      </div>
      <div style={{ display: "flex", fontSize: "34px", color: "rgba(255,255,255,0.65)", marginTop: "20px" }}>
        Full Stack &amp; AI Engineer
      </div>
      <div
        style={{
          display: "flex",
          fontSize: "26px",
          color: "rgba(255,255,255,0.45)",
          marginTop: "28px",
          maxWidth: "820px",
        }}
      >
        Presence sites, online shops, AI integrations & consumer apps — end to end.
      </div>
    </div>
  );
}
