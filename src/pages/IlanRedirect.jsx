import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function IlanRedirect() {
  const { listingId } = useParams();

  useEffect(() => {
    if (!listingId) return;

    const ua = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isAndroid = /android/.test(ua);

    const appLink = `trphone://ilan/${listingId}`;

    const iosStore =
      "https://apps.apple.com/tr/app/sahiplerinden-al-sat-bul/id6744275276";
    const androidStore =
      "https://play.google.com/store/apps/details?id=com.trphone";

    // 1️⃣ Önce uygulamayı açmayı dene
    window.location.href = appLink;

    // 2️⃣ Açılmazsa mağazaya gönder
    const timeout = setTimeout(() => {
      if (isIOS) {
        window.location.href = iosStore;
      } else if (isAndroid) {
        window.location.href = androidStore;
      } else {
        window.location.href = "https://trphone.net";
      }
    }, 2000);

    return () => clearTimeout(timeout);
  }, [listingId]);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.logo}>TRPHONE</div>
        <div style={styles.loader} />
        <h2 style={styles.title}>İlan açılıyor</h2>
        <p style={styles.text}>
          Uygulamanız yüklüyse otomatik olarak açılacaktır.
        </p>
        <p style={styles.sub}>Yüklü değilse mağazaya yönlendirileceksiniz.</p>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(1200px circle at top, #0b1222 0%, #020617 45%, #020617 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    fontFamily: "Inter, system-ui, -apple-system, BlinkMacSystemFont",
  },

  card: {
    width: "100%",
    maxWidth: 420,
    background: "#050509",
    borderRadius: 20,
    border: "1px solid #111827",
    padding: "32px 24px",
    textAlign: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,.6)",
  },

  logo: {
    color: "#facc15",
    fontWeight: 900,
    letterSpacing: 2,
    fontSize: 20,
    marginBottom: 24,
  },

  loader: {
    width: 46,
    height: 46,
    border: "4px solid rgba(250,204,21,.25)",
    borderTopColor: "#facc15",
    borderRadius: "50%",
    margin: "0 auto 24px",
    animation: "spin 1s linear infinite",
  },

  title: {
    color: "#f9fafb",
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 8,
  },

  text: {
    color: "#9ca3af",
    fontSize: 14,
    marginBottom: 6,
  },

  sub: {
    color: "#6b7280",
    fontSize: 12,
  },
};
