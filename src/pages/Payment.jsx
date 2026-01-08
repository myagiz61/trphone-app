import React, { useMemo, useState } from "react";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const [approved, setApproved] = useState(false);

  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const type = params.get("type"); // premium | boost
  const planKey = params.get("plan"); // basic | standard | pro
  const duration = params.get("duration"); // 24h | 7d | 30d
  const listingId = params.get("listingId");

  const premiumMap = {
    basic: { name: "Basic Premium", price: "₺49,90 / ay" },
    standard: { name: "Standart Premium", price: "₺99,90 / ay" },
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

  if (!product) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Ödeme Hatası</h1>
        <div style={styles.warning}>
          Geçersiz veya eksik ödeme bilgisi.
          <br />
          Lütfen uygulama üzerinden tekrar deneyin.
        </div>
      </div>
    );
  }

  const handlePay = () => {
    if (!approved) return;

    setLoading(true);

    // 🔴 CANLIDA: iyzico checkout form tetiklenecek
    setTimeout(() => {
      alert("TEST MODU: Ödeme başarılı kabul edildi.");
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
        <div style={styles.secureBadge}>🔒 SSL</div>
      </div>

      {/* TEST BİLGİ (canlıda kaldırılacak) */}
      <div style={styles.testInfo}>
        ⚠️ Bu ödeme sayfası şu an <b>TEST MODUNDADIR</b>.<br />
        Canlı ortamda gerçek tahsilat yapılacaktır.
      </div>

      {/* KART FORMU (placeholder) */}
      <div style={styles.card}>
        <input style={styles.input} placeholder="Kart Üzerindeki İsim" />
        <input style={styles.input} placeholder="Kart Numarası" />
        <div style={styles.row}>
          <input style={styles.input} placeholder="MM/YY" />
          <input style={styles.input} placeholder="CVV" />
        </div>

        {/* SÖZLEŞME ONAYI */}
        <div style={styles.checkboxRow}>
          <input
            type="checkbox"
            id="terms"
            checked={approved}
            onChange={(e) => setApproved(e.target.checked)}
          />
          <label htmlFor="terms" style={styles.checkboxLabel}>
            <a href="/mesafeli-satis" target="_blank" rel="noreferrer">
              Mesafeli Satış Sözleşmesi
            </a>
            ,{" "}
            <a href="/iade-iptal" target="_blank" rel="noreferrer">
              İptal ve İade Koşulları
            </a>{" "}
            ve{" "}
            <a href="/gizlilik" target="_blank" rel="noreferrer">
              Gizlilik Politikası
            </a>
            ’nı okudum ve kabul ediyorum.
          </label>
        </div>

        {/* ÖDEME BUTONU */}
        <button
          onClick={handlePay}
          disabled={!approved || loading}
          style={{
            ...styles.payButton,
            opacity: !approved || loading ? 0.5 : 1,
            cursor: !approved ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Ödeme İşleniyor..." : "iyzico ile Öde"}
        </button>
      </div>

      {/* HUKUKİ + LOGOLAR */}
      <div style={styles.legalBox}>
        <p>
          Bu ödeme işlemi <b>TRPHONE</b> tarafından,
          <b> iyzico</b> güvenli ödeme altyapısı kullanılarak web sitesi
          üzerinden gerçekleştirilmektedir.
        </p>

        <div style={styles.legalLinks}>
          <a href="/gizlilik" target="_blank" rel="noreferrer">
            Gizlilik Politikası
          </a>{" "}
          |{" "}
          <a href="/iade-iptal" target="_blank" rel="noreferrer">
            İade & İptal Koşulları
          </a>{" "}
          |{" "}
          <a href="/iletisim" target="_blank" rel="noreferrer">
            İletişim
          </a>
        </div>

        <div style={styles.logos}>
          <img
            style={styles.logoImg}
            src="src/assets/iyzico.png"
            alt="iyzico ile öde"
          />
          <img style={styles.logoImg} src="src/assets/vısa.png" alt="Visa" />
          <img
            style={styles.logoImg}
            src="src/assets/master.png"
            alt="MasterCard"
          />
        </div>

        <p style={styles.digitalNote}>
          Satın alınan hizmet <b>dijital içerik</b> kapsamındadır. Hizmet
          ifasına başlandıktan sonra iade edilmez.
        </p>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  container: {
    minHeight: "100vh",
    background: "#050509",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 40,
  },

  title: {
    color: "#facc15",
    fontSize: 26,
    fontWeight: 800,
    marginBottom: 16,
  },

  planBox: {
    background: "#0f172a",
    border: "1px solid #1e293b",
    borderRadius: 14,
    padding: 16,
    width: "100%",
    maxWidth: 420,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 12,
  },

  planName: { fontWeight: 700 },
  planPrice: { color: "#facc15", fontSize: 14 },
  meta: { fontSize: 12, color: "#9ca3af" },

  secureBadge: { color: "#22c55e", fontSize: 12, fontWeight: 700 },

  testInfo: {
    background: "#1f2937",
    color: "#facc15",
    padding: 12,
    borderRadius: 10,
    fontSize: 13,
    maxWidth: 420,
    textAlign: "center",
    marginBottom: 16,
  },

  card: {
    background: "#0f172a",
    padding: 24,
    borderRadius: 18,
    maxWidth: 420,
    width: "100%",
    border: "1px solid #1e293b",
  },

  input: {
    width: "100%",
    padding: 12,
    marginBottom: 12,
    borderRadius: 10,
    border: "1px solid #1e293b",
    background: "#020617",
    color: "#fff",
  },

  row: { display: "flex", gap: 12 },

  checkboxRow: {
    display: "flex",
    gap: 10,
    marginBottom: 14,
    alignItems: "flex-start",
  },

  checkboxLabel: {
    fontSize: 12,
    color: "#9ca3af",
    lineHeight: 1.4,
  },

  payButton: {
    width: "100%",
    padding: 14,
    borderRadius: 14,
    background: "#facc15",
    color: "#111827",
    fontWeight: 800,
    border: "none",
    fontSize: 15,
  },

  legalBox: {
    marginTop: 20,
    fontSize: 11,
    color: "#9ca3af",
    textAlign: "center",
    maxWidth: 420,
    lineHeight: 1.5,
  },

  legalLinks: { marginTop: 6 },

  logos: {
    marginTop: 12,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
  },

  logoImg: {
    height: 32,
    width: "auto",
    objectFit: "contain",
  },

  digitalNote: {
    marginTop: 8,
    fontSize: 10,
    color: "#6b7280",
  },

  warning: {
    background: "#1f2937",
    padding: 16,
    borderRadius: 10,
    textAlign: "center",
  },
};
