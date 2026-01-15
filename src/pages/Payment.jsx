import React, { useEffect, useMemo, useRef, useState } from "react";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);
  const [approved, setApproved] = useState(false);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [checkoutHtml, setCheckoutHtml] = useState(null);

  const iframeRef = useRef(null);

  /* ================= API BASE ================= */
  const API_BASE =
    window.location.hostname === "localhost"
      ? "http://localhost:1967/api"
      : "https://backend-e5v0.onrender.com/api";

  /* ================= URL PARAMS ================= */
  const params = useMemo(() => new URLSearchParams(window.location.search), []);
  const type = params.get("type"); // premium | boost
  const planKey = params.get("plan");
  const duration = params.get("duration");
  const listingId = params.get("listingId");
  const userId = params.get("uid");

  /* ================= PREVIEW ================= */
  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const res = await fetch(`${API_BASE}/payments/preview`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ type, plan: planKey, duration, listingId }),
        });

        if (!res.ok) throw new Error();
        const data = await res.json();
        setProduct(data.product);
      } catch {
        setError("Geçersiz ödeme bilgisi.");
      }
    };
    fetchPreview();
  }, [API_BASE, type, planKey, duration, listingId]);

  /* ================= IYZICO HTML → IFRAME ================= */
  useEffect(() => {
    if (checkoutHtml && iframeRef.current) {
      const iframe = iframeRef.current;
      const doc = iframe.contentWindow.document;
      doc.open();
      doc.write(checkoutHtml);
      doc.close();
    }
  }, [checkoutHtml]);

  /* ================= PAY ================= */
  const handlePay = async () => {
    if (!approved || loading) return;

    try {
      setLoading(true);

      const res = await fetch(`${API_BASE}/payments/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          plan: planKey,
          duration,
          listingId,
          userId,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.checkoutFormContent) {
        throw new Error(data.message || "Ödeme başlatılamadı");
      }

      setCheckoutHtml(data.checkoutFormContent);
    } catch (err) {
      alert(err.message || "Ödeme başlatılamadı");
    } finally {
      setLoading(false);
    }
  };

  /* ================= ERROR ================= */
  if (error || !product) {
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Ödeme Hatası</h1>
        <div style={styles.warning}>{error}</div>
      </div>
    );
  }

  /* ================= UI ================= */
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Güvenli Ödeme</h1>

      <div style={styles.planBox}>
        <div>
          <div style={styles.planName}>{product.name}</div>
          <div style={styles.planPrice}>{product.price}</div>
        </div>
        <div style={styles.secureBadge}>🔒 SSL</div>
      </div>

      <div style={styles.testInfo}>
        Bu ödeme işlemi <b>iyzico</b> güvenli altyapısı ile gerçekleştirilir.
        Kart bilgileriniz TRPHONE sunucularında tutulmaz.
      </div>

      <div style={styles.card}>
        {checkoutHtml ? (
          <iframe
            ref={iframeRef}
            title="iyzico-checkout"
            style={{
              width: "100%",
              height: 520,
              border: "none",
              borderRadius: 12,
              background: "#fff",
            }}
          />
        ) : (
          <>
            <div style={styles.checkboxRow}>
              <input
                type="checkbox"
                checked={approved}
                onChange={(e) => setApproved(e.target.checked)}
              />
              <label style={styles.checkboxLabel}>
                <a href="/mesafeli-satis" target="_blank" rel="noreferrer">
                  Mesafeli Satış Sözleşmesi
                </a>
                ,{" "}
                <a href="/iade-iptal" target="_blank" rel="noreferrer">
                  İptal & İade
                </a>{" "}
                ve{" "}
                <a href="/gizlilik" target="_blank" rel="noreferrer">
                  Gizlilik Politikası
                </a>{" "}
                kabul ediyorum.
              </label>
            </div>

            <button
              onClick={handlePay}
              disabled={!approved || loading}
              style={{
                ...styles.payButton,
                opacity: !approved || loading ? 0.6 : 1,
              }}
            >
              {loading ? "Ödeme Başlatılıyor..." : "iyzico ile Öde"}
            </button>

            <div style={styles.paymentLogos}>
              <img src="/iyzico.png" alt="iyzico" style={styles.paymentLogo} />
              <img src="/visa.png" alt="Visa" style={styles.paymentLogo} />
              <img
                src="/master.png"
                alt="MasterCard"
                style={styles.paymentLogo}
              />
            </div>
          </>
        )}
      </div>

      <div style={styles.legalBox}>© 2026 TRPHONE – Güvenli Ödeme</div>
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
  planPrice: { color: "#facc15" },
  secureBadge: { color: "#22c55e", fontWeight: 700 },
  testInfo: {
    background: "#1f2937",
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
  checkboxRow: { display: "flex", gap: 10, marginBottom: 14 },
  checkboxLabel: { fontSize: 12, color: "#9ca3af" },
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
  paymentLogos: {
    marginTop: 14,
    display: "flex",
    justifyContent: "center",
    gap: 16,
  },
  paymentLogo: { height: 28 },
  legalBox: {
    marginTop: 20,
    fontSize: 11,
    color: "#9ca3af",
  },
  warning: {
    background: "#1f2937",
    padding: 16,
    borderRadius: 10,
    textAlign: "center",
  },
};
