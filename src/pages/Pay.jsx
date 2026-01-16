import { useEffect, useRef, useState } from "react";

export default function Pay() {
  const iyzicoRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    fetch("https://backend-e5v0.onrender.com/api/payments/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: params.get("type"),
        plan: params.get("plan"),
        duration: params.get("duration"),
        listingId: params.get("listingId"),
        userId: params.get("uid"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.checkoutFormContent) {
          throw new Error(data.message || "Ödeme başlatılamadı");
        }

        iyzicoRef.current.innerHTML = data.checkoutFormContent;
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* HEADER */}
        <div style={styles.header}>
          <img src="/logo1.png" alt="TRPHONE" style={styles.logo} />
          <h1 style={styles.title}>Güvenli Ödeme</h1>
          <p style={styles.subtitle}>
            Ödemeniz <b>iyzico</b> altyapısı ile güvenle gerçekleştirilmektedir.
            Kart bilgileriniz sistemlerimizde saklanmaz.
          </p>
        </div>

        {/* BADGES */}
        <div style={styles.badges}>
          <span>🔒 256-bit SSL</span>
          <span>🛡️ 3D Secure</span>
          <span>🏦 iyzico</span>
        </div>

        {/* CONTENT */}
        <div style={styles.contentBox}>
          {!error ? (
            <div ref={iyzicoRef} />
          ) : (
            <div style={styles.errorBox}>{error}</div>
          )}
        </div>

        {/* FOOTER */}
        <div style={styles.footer}>
          Bu ödeme işlemi <b>TRPHONE</b> tarafından,
          <br />
          <b>iyzico</b> güvenli ödeme altyapısı kullanılarak yapılmaktadır.
        </div>
      </div>
    </div>
  );
}

/* =======================
   STYLES – KURUMSAL
======================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #0f172a 0%, #020617 70%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    fontFamily: "Inter, system-ui, -apple-system",
    color: "#fff",
  },

  card: {
    width: "100%",
    maxWidth: 420,
    background: "rgba(15, 23, 42, 0.96)",
    borderRadius: 22,
    border: "1px solid #1e293b",
    padding: "22px 20px 26px",
    boxShadow: "0 25px 80px rgba(0,0,0,.65)",
  },

  header: {
    textAlign: "center",
    marginBottom: 18,
  },

  logo: {
    height: 36,
    marginBottom: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: 800,
    color: "#facc15",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 13,
    color: "#9ca3af",
    lineHeight: 1.5,
  },

  badges: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    fontSize: 11,
    fontWeight: 600,
    color: "#22c55e",
    marginBottom: 16,
    flexWrap: "wrap",
  },

  contentBox: {
    background: "#020617",
    border: "1px solid #1e293b",
    borderRadius: 16,
    padding: 14,
  },

  errorBox: {
    background: "rgba(248,113,113,.1)",
    border: "1px solid #f87171",
    borderRadius: 12,
    padding: 14,
    textAlign: "center",
    color: "#fca5a5",
    fontSize: 13,
  },

  footer: {
    marginTop: 18,
    textAlign: "center",
    fontSize: 11,
    color: "#9ca3af",
    lineHeight: 1.5,
  },
};
