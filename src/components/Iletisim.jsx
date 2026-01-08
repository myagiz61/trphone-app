export default function Iletisim() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-300">
      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-14">
        {/* BAŞLIK */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">İletişim</h1>
          <p className="text-gray-400 leading-relaxed">
            TRPHONE ile ilgili tüm soru, görüş ve destek talepleriniz için
            aşağıdaki iletişim bilgilerinden bizimle irtibata geçebilirsiniz.
          </p>
        </div>

        {/* KARTLAR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* FİRMA BİLGİLERİ */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col gap-5">
            <h2 className="text-xl font-semibold text-white">
              Firma Bilgileri
            </h2>

            <div className="flex flex-col gap-3 text-sm">
              <div>
                <span className="text-gray-400">Firma Ünvanı</span>
                <div className="text-gray-200 font-medium">
                  Mehmet Yağız Sındıraç
                </div>
              </div>

              <div>
                <span className="text-gray-400">Marka</span>
                <div className="text-gray-200 font-medium">TRPHONE</div>
              </div>

              <div>
                <span className="text-gray-400">Faaliyet Alanı</span>
                <div className="text-gray-200 font-medium">
                  Dijital Hizmetler · Online Platform Hizmetleri
                </div>
              </div>

              <div>
                <span className="text-gray-400">Faaliyet Türü</span>
                <div className="text-gray-200 font-medium">Şahıs İşletmesi</div>
              </div>

              <div>
                <span className="text-gray-400">Adres</span>
                <div className="text-gray-200 font-medium">
                  Türkiye Cumhuriyeti sınırları içerisinde faaliyet gösteren
                  şahıs işletmesi.
                </div>
              </div>
            </div>
          </div>

          {/* İLETİŞİM & DESTEK */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col gap-5">
            <h2 className="text-xl font-semibold text-white">
              İletişim & Destek
            </h2>

            <div className="flex flex-col gap-4 text-sm">
              <div>
                <span className="text-gray-400">E-posta</span>
                <div>
                  <a
                    href="mailto:trphone@myssoftwares.com"
                    className="text-blue-400 font-medium hover:underline"
                  >
                    trphone@myssoftwares.com
                  </a>
                </div>
              </div>

              <div>
                <span className="text-gray-400">Destek Kanalları</span>
                <div className="text-gray-200 font-medium">
                  E-posta Destek Sistemi
                </div>
              </div>

              <div>
                <span className="text-gray-400">Çalışma Saatleri</span>
                <div className="text-gray-200 font-medium">
                  Hafta içi 09:00 – 18:00
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-slate-700 bg-slate-800 p-4 text-xs text-gray-400 leading-relaxed">
              Destek talepleriniz mesai saatleri içerisinde değerlendirilir.
              Dijital hizmet sunumu nedeniyle talepler öncelikli olarak e-posta
              üzerinden alınmaktadır.
            </div>
          </div>
        </div>

        {/* YASAL BİLGİ */}
        <div className="text-center max-w-3xl mx-auto text-xs text-gray-500 leading-relaxed">
          TRPHONE, dijital hizmet sağlayıcı olarak faaliyet göstermektedir.
          Platform üzerinden sunulan premium ve boost hizmetleri dijital içerik
          kapsamındadır. Hizmet ifasına başlandıktan sonra iade edilmez.
        </div>
      </div>
    </div>
  );
}
