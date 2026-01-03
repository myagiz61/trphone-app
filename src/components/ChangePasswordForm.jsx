import { useState } from "react";
import axios from "axios";

export default function ChangePasswordForm({ onSuccess }) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (newPassword.length < 8) {
      setError("Yeni şifre en az 8 karakter olmalıdır.");
      return;
    }

    try {
      setLoading(true);

      await axios.post(
        "/api/auth/change-password-sso",
        { oldPassword, newPassword },
        { withCredentials: true }
      );

      onSuccess();
    } catch (err) {
      setError(err.response?.data?.message || "Şifre değiştirilemedi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit}>
      <h2>Şifre Değiştir</h2>

      <input
        type="password"
        placeholder="Mevcut Şifre"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Yeni Şifre"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button disabled={loading}>
        {loading ? "Kaydediliyor..." : "Şifreyi Güncelle"}
      </button>
    </form>
  );
}
