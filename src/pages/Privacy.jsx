export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-300">
      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-10">
        {/* BAŞLIK */}
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Gizlilik Politikası
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Bu Gizlilik Politikası, TRPHONE platformu üzerinden sunulan
            hizmetler kapsamında kullanıcı bilgilerinin nasıl toplandığını,
            kullanıldığını ve korunduğunu açıklamaktadır.
          </p>
        </div>

        {/* MADDE 1 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">1. Genel İlkeler</h2>
          <p>
            TRPHONE, kullanıcılarının gizliliğine önem verir ve kişisel
            verilerin korunmasını öncelikli bir ilke olarak benimser. Kullanıcı
            bilgileri, yürürlükteki mevzuata uygun olarak işlenmekte ve
            korunmaktadır.
          </p>
        </section>

        {/* MADDE 2 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            2. Toplanan Bilgiler
          </h2>
          <p>Platformu kullandığınızda aşağıdaki bilgiler toplanabilir:</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Ad, soyad</li>
            <li>E-posta adresi</li>
            <li>Hesap ve kullanıcı bilgileri</li>
            <li>Ödeme ve fatura bilgileri</li>
            <li>IP adresi ve cihaz bilgileri</li>
            <li>İşlem ve kullanım kayıtları</li>
          </ul>
        </section>

        {/* MADDE 3 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            3. Bilgilerin Kullanım Amaçları
          </h2>
          <p>Toplanan bilgiler aşağıdaki amaçlarla kullanılmaktadır:</p>
          <ul className="list-disc list-inside text-gray-400">
            <li>Hizmetlerin sunulması ve iyileştirilmesi</li>
            <li>Kullanıcı hesaplarının yönetilmesi</li>
            <li>Ödeme ve faturalandırma süreçlerinin yürütülmesi</li>
            <li>Müşteri destek taleplerinin karşılanması</li>
            <li>Bilgi güvenliğinin sağlanması</li>
          </ul>
        </section>

        {/* MADDE 4 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            4. Üçüncü Taraflarla Paylaşım
          </h2>
          <p>
            Kullanıcı bilgileri; ödeme işlemlerinin gerçekleştirilmesi amacıyla{" "}
            <b>iyzico</b> gibi yetkili ödeme hizmeti sağlayıcıları, hukuki
            yükümlülükler kapsamında ise yetkili kamu kurumları ile
            paylaşılabilir. Bunun dışında üçüncü kişilerle paylaşılmaz.
          </p>
        </section>

        {/* MADDE 5 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            5. Bilgi Güvenliği
          </h2>
          <p>
            TRPHONE, kişisel verilerin güvenliğini sağlamak amacıyla teknik ve
            idari tedbirler almaktadır. Yetkisiz erişim, veri kaybı ve kötüye
            kullanımın önlenmesi için gerekli güvenlik önlemleri
            uygulanmaktadır.
          </p>
        </section>

        {/* MADDE 6 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            6. Saklama Süresi
          </h2>
          <p>
            Kişisel veriler, ilgili mevzuatta öngörülen süreler boyunca veya
            işleme amacının gerektirdiği süre kadar saklanır. Süre sonunda
            veriler silinir, yok edilir veya anonim hale getirilir.
          </p>
        </section>

        {/* MADDE 7 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            7. Kullanıcı Hakları
          </h2>
          <p>
            Kullanıcılar, kişisel verilerine ilişkin taleplerini KVKK kapsamında
            bize iletebilirler.
          </p>
        </section>

        {/* MADDE 8 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">8. İletişim</h2>
          <p>
            Gizlilik Politikası ile ilgili her türlü soru ve talebiniz için
            bizimle aşağıdaki e-posta adresi üzerinden iletişime geçebilirsiniz:
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
