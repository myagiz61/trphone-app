import React, { useMemo, useState } from "react";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);

  const params = useMemo(() => new URLSearchParams(window.location.search), []);

  const type = params.get("type"); // premium | boost
  const planKey = params.get("plan"); // basic | standard | pro
  const duration = params.get("duration"); // 24h | 7d | 30d
  const listingId = params.get("listingId");

  const premiumMap = {
    basic: { name: "Basic Premium", price: "₺49,90 / ay" },
    standard: { name: "Orta Seviye Premium", price: "₺99,90 / ay" },
    pro: { name: "PRO Premium", price: "₺149,90 / ay" },
  };

  const boostMap = {
    "24h": { name: "24 Saat Boost", price: "₺29,90" },
    "7d": { name: "7 Gün Boost", price: "₺79,90" },
    "30d": { name: "30 Gün Boost", price: "₺199,90" },
  };

  let product = null;

  if (type === "premium" && planKey && premiumMap[planKey]) {
    product = premiumMap[planKey];
  }

  if (type === "boost" && duration && boostMap[duration] && listingId) {
    product = boostMap[duration];
  }

  // ❌ HATALI URL / EKSİK PARAMETRE
  if (!product) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Ödeme Hatası</h1>
        <div style={styles.testBanner}>
          Geçersiz veya eksik ödeme bilgisi.
          <br />
          Lütfen uygulama üzerinden tekrar deneyin.
        </div>
      </div>
    );
  }

  const handlePay = () => {
    setLoading(true);

    // 🔴 BURASI SONRA PAYTR OLACAK
    setTimeout(() => {
      alert("✅ TEST MODU: Ödeme başarılı kabul edildi.");
      setLoading(false);
    }, 1500);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Güvenli Ödeme</h1>

      {/* ÜRÜN */}
      <div style={styles.planBox}>
        <div>
          <div style={styles.planName}>{product.name}</div>
          <div style={styles.planPrice}>{product.price}</div>

          {type === "boost" && (
            <div style={styles.meta}>
              İlan ID: <b>{listingId}</b>
            </div>
          )}
        </div>
        <div style={styles.secureBadge}>🔒 SSL Güvenli</div>
      </div>

      {/* TEST */}
      <div style={styles.testBanner}>
        ⚠️ Bu ödeme sayfası <b>TEST AŞAMASINDADIR</b>.<br />
        Gerçek karttan çekim <b>YAPILMAZ</b>.
      </div>

      {/* FORM */}
      <div style={styles.card}>
        <input style={styles.input} placeholder="Kart Üzerindeki İsim" />
        <input style={styles.input} placeholder="Kart Numarası" />
        <div style={styles.row}>
          <input style={styles.input} placeholder="MM/YY" />
          <input style={styles.input} placeholder="CVV" />
        </div>

        <button
          style={{ ...styles.payButton, opacity: loading ? 0.7 : 1 }}
          onClick={handlePay}
          disabled={loading}
        >
          {loading ? "Ödeme İşleniyor..." : "Ödemeyi Tamamla"}
        </button>

        <div style={styles.footerNote}>
          Bu işlem <b>TRPHONE</b> tarafından web üzerinden gerçekleştirilir.
        </div>
      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#050509",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 40,
  },

  title: {
    color: "#facc15",
    marginBottom: 16,
    fontSize: 26,
    fontWeight: 800,
  },

  planBox: {
    backgroundColor: "#0f172a",
    border: "1px solid #1e293b",
    borderRadius: 14,
    padding: 16,
    width: "100%",
    maxWidth: 420,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  planName: {
    fontSize: 16,
    fontWeight: 700,
  },

  planPrice: {
    fontSize: 14,
    color: "#facc15",
    marginTop: 2,
  },

  secureBadge: {
    fontSize: 12,
    color: "#22c55e",
    fontWeight: 700,
  },

  testBanner: {
    backgroundColor: "#1f2937",
    color: "#facc15",
    padding: 12,
    borderRadius: 10,
    fontSize: 13,
    maxWidth: 420,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 1.4,
  },

  card: {
    backgroundColor: "#0f172a",
    padding: 24,
    borderRadius: 18,
    width: "100%",
    maxWidth: 420,
    border: "1px solid #1e293b",
  },

  label: {
    fontSize: 13,
    color: "#9ca3af",
    marginBottom: 6,
    display: "block",
  },

  input: {
    width: "100%",
    padding: 12,
    borderRadius: 10,
    border: "1px solid #1e293b",
    backgroundColor: "#020617",
    color: "#fff",
    marginBottom: 14,
    outline: "none",
    fontSize: 14,
  },

  row: {
    display: "flex",
    gap: 12,
  },

  payButton: {
    width: "100%",
    padding: 14,
    borderRadius: 14,
    backgroundColor: "#facc15",
    color: "#111827",
    fontWeight: 800,
    border: "none",
    cursor: "pointer",
    marginTop: 10,
    fontSize: 15,
  },

  footerNote: {
    marginTop: 14,
    fontSize: 11,
    color: "#9ca3af",
    textAlign: "center",
    lineHeight: 1.4,
  },
};
