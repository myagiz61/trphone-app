import { useParams } from "react-router-dom";

export default function ResetPassword() {
  const { token } = useParams();

  return (
    <div className="min-h-screen bg-slate-950 text-gray-200 flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-700">
        <h1 className="text-2xl font-bold text-white mb-4">Şifre Sıfırlama</h1>

        <input
          type="password"
          placeholder="Yeni şifre"
          className="w-full mb-4 px-4 py-3 rounded-lg bg-slate-950 border border-slate-700"
        />

        <button className="w-full py-3 rounded-lg bg-yellow-400 text-black font-bold">
          Şifreyi Güncelle
        </button>
      </div>
    </div>
  );
}
