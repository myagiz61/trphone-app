import { useEffect, useState } from "react";
import axios from "axios";
import Success from "../../components/Success";
import ChangePasswordForm from "../../components/ChangePasswordForm";
import Loading from "../../components/Loading";

export default function ChangePassword() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const runSSO = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");

      if (!token) {
        setStatus("error");
        return;
      }

      try {
        const ssoRes = await axios.post("/api/auth/sso", { token });
        const ticket = ssoRes.data.ticket;

        await axios.post(
          "/api/auth/sso/consume",
          { ticket },
          { withCredentials: true }
        );

        setStatus("form");
      } catch (err) {
        console.error("SSO WEB ERROR:", err);
        setStatus("error");
      }
    };

    runSSO();
  }, []);

  if (status === "loading") {
    return <Loading text="Güvenli bağlantı kuruluyor..." />;
  }

  if (status === "error") {
    return (
      <div style={{ color: "#ef4444", padding: 24 }}>
        Oturum başlatılamadı. Lütfen tekrar deneyin.
      </div>
    );
  }

  if (status === "success") return <Success />;

  return <ChangePasswordForm onSuccess={() => setStatus("success")} />;
}
