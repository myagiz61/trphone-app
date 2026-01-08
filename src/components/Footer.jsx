export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        {/* MARKA */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white text-lg font-semibold">TRPHONE</h3>
          <p className="text-sm leading-relaxed">
            TRPHONE, güvenilir satıcılardan telefon ilanlarını keşfetmenizi
            sağlayan dijital bir platformdur.
          </p>
          <p className="text-xs text-gray-500">
            Ödemeler, iyzico güvenli ödeme altyapısı ile web sitesi üzerinden
            gerçekleştirilir.
          </p>
        </div>

        {/* KURUMSAL */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold">Kurumsal</h4>
          <a href="/hakkimizda" className="hover:text-white">
            Hakkımızda
          </a>
          <a href="/iletisim" className="hover:text-white">
            İletişim
          </a>
          <a href="/kvkk" className="hover:text-white">
            KVKK
          </a>
          <a href="/gizlilik" className="hover:text-white">
            Gizlilik Politikası
          </a>
        </div>

        {/* HUKUKİ */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold">Hukuki</h4>
          <a href="/kullanim-kosullari" className="hover:text-white">
            Kullanım Koşulları
          </a>
          <a href="/iade-iptal" className="hover:text-white">
            İade & İptal Koşulları
          </a>
          <a href="/mesafeli-satis" className="hover:text-white">
            Mesafeli Satış Sözleşmesi
          </a>
        </div>

        {/* ÖDEME & GÜVEN */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold">Ödeme & Güvenlik</h4>

          <div className="flex items-center gap-3">
            <img src="/iyzico.png" alt="iyzico" className="h-6" />
            <img src="/vısa.png" alt="Visa" className="h-6" />
            <img src="/master.png" alt="Mastercard" className="h-6" />
          </div>

          <p className="text-xs text-gray-500 leading-relaxed">
            Satın alınan hizmetler dijital içerik kapsamındadır. Hizmet ifasına
            başlandıktan sonra iade edilmez.
          </p>
        </div>
      </div>

      {/* ALT BANT */}
      <div className="border-t border-slate-800 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} TRPHONE · Dijital Hizmet Platformu
        <br />
        Geliştirici: <span className="text-gray-400">MYS Software</span>
      </div>
    </footer>
  );
}
