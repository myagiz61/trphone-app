export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-400 flex flex-col gap-4">
        <div className="flex gap-6 flex-wrap">
          <a href="/gizlilik" className="hover:text-white">
            Gizlilik Politikası
          </a>
          <a href="/kvkk" className="hover:text-white">
            KVKK
          </a>
          <a href="/kullanim-kosullari" className="hover:text-white">
            Kullanım Koşulları
          </a>
        </div>

        <p className="text-xs">
          © {new Date().getFullYear()} TRPHONE · Dijital Hizmet Platformu ·
          Geliştirici: MYS Software
        </p>
      </div>
    </footer>
  );
}
