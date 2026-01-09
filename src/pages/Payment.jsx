import React, { useEffect, useMemo, useState } from "react";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const [approved, setApproved] = useState(false);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  /* ================= API BASE ================= */
  const API_BASE =
    window.location.hostname === "localhost"
      ? "http://localhost:1967/api"
      : "https://backend-e5v0.onrender.com/api";

  /* ================= URL PARAMS ================= */
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const type = params.get("type"); // premium | boost
  const planKey = params.get("plan"); // basic | standard | pro
  const duration = params.get("duration"); // 24h | 7d | 30d
  const listingId = params.get("listingId");

  /* ================= FALLBACK MAPS (AYNI) ================= */
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

  /* ================= PREVIEW FETCH ================= */
  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const res = await fetch(`${API_BASE}/payments/preview`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type,
            plan: planKey,
            duration,
            listingId,
          }),
        });

        if (res.ok) {
          const data = await res.json();
          setProduct(data.product);
          return;
        }
      } catch (_) {
        /* backend yoksa sessizce fallback */
      }

      // 🔁 FALLBACK (MEVCUT MANTIK)
      if (type === "premium" && planKey && premiumMap[planKey]) {
        setProduct(premiumMap[planKey]);
      } else if (
        type === "boost" &&
        duration &&
        boostMap[duration] &&
        listingId
      ) {
        setProduct(boostMap[duration]);
      } else {
        setError("Geçersiz veya eksik ödeme bilgisi.");
      }
    };

    fetchPreview();
  }, [API_BASE, type, planKey, duration, listingId]);

  /* ================= ERROR ================= */
  if (error || !product) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Ödeme Hatası</h1>
        <div style={styles.warning}>
          {error || "Geçersiz ödeme bilgisi."}
          <br />
          Lütfen uygulama üzerinden tekrar deneyin.
        </div>
      </div>
    );
  }

  /* ================= PAY ================= */
  const handlePay = () => {
    if (!approved) return;

    setLoading(true);

    setTimeout(() => {
      alert("TEST MODU: Ödeme başarılı kabul edildi.");
      setLoading(false);
    }, 1500);
  };

  /* ================= UI (AYNI) ================= */
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Güvenli Ödeme</h1>

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

      <div style={styles.testInfo}>
        ⚠️ Bu ödeme sayfası şu an <b>TEST MODUNDADIR</b>.<br />
        Canlı ortamda gerçek tahsilat yapılacaktır.
      </div>

      <div style={styles.card}>
        <input style={styles.input} placeholder="Kart Üzerindeki İsim" />
        <input style={styles.input} placeholder="Kart Numarası" />

        <div style={styles.row}>
          <input style={styles.input} placeholder="MM/YY" />
          <input style={styles.input} placeholder="CVV" />
        </div>

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

        <div style={styles.paymentLogos}>
          <img
            src="/iyzico.png"
            alt="iyzico ile \xF6de"
            style={styles.paymentLogo}
          />
          <img src="/vısa.png" alt="Visa" style={styles.paymentLogo} />
          <img src="/master.png" alt="MasterCard" style={styles.paymentLogo} />
        </div>
      </div>

      <div style={styles.legalBox}>
        <p>
          Bu ödeme işlemi <b>TRPHONE</b> tarafından,
          <b> iyzico</b> güvenli ödeme altyapısı kullanılarak web sitesi
          üzerinden gerçekleştirilmektedir.
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
  paymentLogos: {
    marginTop: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
  },

  paymentLogo: {
    height: 28,
    objectFit: "contain",
    opacity: 0.9,
  },
};
