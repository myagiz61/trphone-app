export default function Kvkk() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-300">
      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-10">
        {/* BAŞLIK */}
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Kişisel Verilerin Korunması ve Gizlilik Politikası
          </h1>
          <p className="text-gray-400 leading-relaxed">
            İşbu Aydınlatma Metni, TRPHONE platformu tarafından kişisel
            verilerin işlenmesine ilişkin usul ve esasları açıklamak amacıyla
            hazırlanmıştır.
          </p>
        </div>

        {/* MADDE 1 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            1. Veri Sorumlusu
          </h2>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca,
            kişisel verileriniz; veri sorumlusu sıfatıyla
            <b> Mehmet Yağız Sındıraç</b> tarafından işlenmektedir.
          </p>
          <p>
            <b>Marka:</b> TRPHONE <br />
            <b>E-posta:</b>{" "}
            <a
              href="mailto:trphone@myssoftwares.com"
              className="text-blue-400 hover:underline"
            >
              trphone@myssoftwares.com
            </a>
          </p>
        </section>

        {/* MADDE 2 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            2. İşlenen Kişisel Veriler
          </h2>
          <p>
            TRPHONE tarafından işlenen kişisel veriler aşağıdakilerle
            sınırlıdır:
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Ad, soyad</li>
            <li>E-posta adresi</li>
            <li>Telefon numarası (opsiyonel)</li>
            <li>Kullanıcı hesap bilgileri</li>
            <li>Ödeme ve fatura bilgileri</li>
            <li>IP adresi ve işlem güvenliği bilgileri</li>
          </ul>
        </section>

        {/* MADDE 3 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            3. Kişisel Verilerin İşlenme Amaçları
          </h2>
          <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Hizmetlerin sunulması ve geliştirilmesi</li>
            <li>Ödeme ve faturalandırma işlemlerinin yürütülmesi</li>
            <li>Müşteri destek süreçlerinin yönetilmesi</li>
            <li>Hukuki yükümlülüklerin yerine getirilmesi</li>
            <li>Bilgi güvenliği ve dolandırıcılık önleme</li>
          </ul>
        </section>

        {/* MADDE 4 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            4. Kişisel Verilerin Aktarılması
          </h2>
          <p>
            Kişisel verileriniz, yukarıda belirtilen amaçlar doğrultusunda;
            ödeme hizmeti sağlayıcıları (iyzico), yetkili kamu kurumları ve
            hukuken yetkili üçüncü kişilerle paylaşılabilir.
          </p>
        </section>

        {/* MADDE 5 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            5. Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebep
          </h2>
          <p>
            Kişisel verileriniz; web sitesi, mobil uygulama ve elektronik
            iletişim kanalları aracılığıyla, KVKK’nın 5. ve 6. maddelerinde
            belirtilen hukuki sebepler doğrultusunda toplanmaktadır.
          </p>
        </section>

        {/* MADDE 6 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            6. İlgili Kişinin Hakları
          </h2>
          <p>
            KVKK’nın 11. maddesi uyarınca, ilgili kişiler aşağıdaki haklara
            sahiptir:
          </p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Kişisel verilerinin işlenip işlenmediğini öğrenme</li>
            <li>İşlenmişse buna ilişkin bilgi talep etme</li>
            <li>Amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
            <li>Silinmesini veya yok edilmesini talep etme</li>
          </ul>
        </section>

        {/* MADDE 7 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">7. İletişim</h2>
          <p>
            KVKK kapsamındaki taleplerinizi aşağıdaki e-posta adresi üzerinden
            bize iletebilirsiniz:
          </p>
          <p>
            <a
              href="mailto:trphone@myssoftwares.com"
              className="text-blue-400 hover:underline"
            >
              trphone@myssoftwares.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
