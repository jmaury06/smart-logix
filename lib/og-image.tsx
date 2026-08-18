export const ogImageSize = { width: 1200, height: 630 };

const PILLARS = ["Marítimo", "Aéreo", "Terrestre", "Almacenamiento"];

export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#0b0e14",
        padding: "80px 96px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            border: "4px solid #d89b3c",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            marginLeft: 24,
            fontSize: 66,
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: -1,
          }}
        >
          SMART
          <span style={{ color: "#d89b3c", marginLeft: 18 }}>LOGIX</span>
          <span
            style={{
              color: "rgba(255,255,255,0.45)",
              marginLeft: 18,
              fontWeight: 600,
              fontSize: 40,
              alignSelf: "flex-end",
              marginBottom: 6,
            }}
          >
            SAS
          </span>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 32,
          fontSize: 32,
          color: "rgba(255,255,255,0.75)",
          maxWidth: 900,
        }}
      >
        Logística Inteligente, Éxito sin Fronteras
      </div>

      <div style={{ display: "flex", marginTop: 64, gap: 14 }}>
        {PILLARS.map((label) => (
          <div
            key={label}
            style={{
              display: "flex",
              padding: "12px 24px",
              borderRadius: 999,
              border: "1px solid rgba(216,155,60,0.4)",
              background: "rgba(216,155,60,0.1)",
              color: "#f0c878",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
