import { useEffect, useState } from "react";
import API from "../../config/api";
import Success from "../../components/Success";
import ChangePasswordForm from "../../components/ChangePasswordForm";
import Loading from "../../components/Loading";

export default function ChangePassword() {
  const [status, setStatus] = useState("loading");
  // loading | form | success | error

  useEffect(() => {
    const runSSO = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      if (!token) {
        console.warn("SSO token yok");
        setStatus("error");
        return;
      }

      try {
        // 1️⃣ Backend'den SSO ticket al
        const ssoRes = await API.post("/auth/sso", { token });
        const ticket = ssoRes.data.ticket;

        if (!ticket) {
          throw new Error("SSO ticket alınamadı");
        }

        // 2️⃣ Ticket consume → session aç
        await API.post("/auth/sso/consume", { ticket });

        // 3️⃣ Artık web session var
        setStatus("form");
      } catch (err) {
        console.error("SSO WEB ERROR:", err.response?.data || err.message);
        setStatus("error");
      }
    };

    runSSO();
  }, []);

  /* =========================
     UI STATES
  ========================= */

  if (status === "loading") {
    return <Loading text="Güvenli bağlantı kuruluyor..." />;
  }

  if (status === "error") {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#020617",
          color: "#ef4444",
          padding: 24,
          textAlign: "center",
        }}
      >
        Oturum başlatılamadı.
        <br />
        Lütfen uygulamaya dönüp tekrar deneyin.
      </div>
    );
  }

  if (status === "success") {
    return <Success />;
  }

  // status === "form"
  return <ChangePasswordForm onSuccess={() => setStatus("success")} />;
}
