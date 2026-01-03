export default function Loading({ text = "Yükleniyor..." }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#020617",
        color: "#e5e7eb",
        flexDirection: "column",
        gap: 12,
        fontFamily: "system-ui",
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          border: "4px solid #1f2937",
          borderTopColor: "#facc15",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <span style={{ fontSize: 14 }}>{text}</span>

      <style>
        {`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}
      </style>
    </div>
  );
}
