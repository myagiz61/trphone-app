export default function MesafeliSatis() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-300">
      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-14">
        {/* BAŞLIK */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">
            Mesafeli Satış Sözleşmesi
          </h1>
          <p className="text-gray-400 leading-relaxed">
            İşbu Mesafeli Satış Sözleşmesi, TRPHONE platformu üzerinden sunulan
            dijital hizmetlerin satış ve kullanım şartlarını düzenlemektedir.
          </p>
        </div>

        {/* İÇERİK */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col gap-6 text-sm leading-relaxed">
          {/* MADDE 1 */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">1. Taraflar</h2>
            <p>
              İşbu sözleşme, aşağıda bilgileri yer alan <b>SATICI</b> ile,
              TRPHONE platformu üzerinden dijital hizmet satın alan <b>ALICI</b>
              arasında elektronik ortamda akdedilmiştir.
            </p>

            <div className="mt-2">
              <p>
                <b>Satıcı:</b> Mehmet Yağız Sındıraç
              </p>
              <p>
                <b>Marka:</b> TRPHONE
              </p>
              <p>
                <b>E-posta:</b> trphone@myssoftwares.com
              </p>
              <p>
                <b>Faaliyet Türü:</b> Şahıs İşletmesi
              </p>
            </div>
          </section>

          {/* MADDE 2 */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">2. Konu</h2>
            <p>
              İşbu sözleşmenin konusu, ALICI’nın TRPHONE platformu üzerinden
              elektronik ortamda satın aldığı dijital hizmetlerin (premium
              üyelik, boost vb.) satışı ve ifasına ilişkin tarafların hak ve
              yükümlülüklerinin belirlenmesidir.
            </p>
          </section>

          {/* MADDE 3 */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">
              3. Hizmet Bilgileri
            </h2>
            <p>
              Satın alınan hizmet, dijital ortamda sunulan premium üyelik, boost
              ve benzeri dijital içerik hizmetleridir. Hizmetin temel
              nitelikleri ve satış bedeli, ödeme aşamasında ALICI’ya açıkça
              bildirilmektedir.
            </p>
          </section>

          {/* MADDE 4 */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">
              4. Ödeme ve Teslimat
            </h2>
            <p>
              Ödeme, iyzico güvenli ödeme altyapısı aracılığıyla
              gerçekleştirilmektedir. Dijital hizmetler, ödemenin başarıyla
              tamamlanmasını takiben anında veya en kısa sürede ALICI’nın
              hesabına tanımlanır.
            </p>
          </section>

          {/* MADDE 5 */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">5. Cayma Hakkı</h2>
            <p>
              6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli
              Sözleşmeler Yönetmeliği uyarınca, dijital içerik veya dijital
              hizmetlerde, hizmet ifasına başlandıktan sonra cayma hakkı
              bulunmamaktadır.
            </p>
            <p>
              ALICI, satın alma işlemini tamamlayarak bu durumu kabul etmiş
              sayılır.
            </p>
          </section>

          {/* MADDE 6 */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">
              6. İptal ve İade
            </h2>
            <p>
              Dijital hizmetlerin doğası gereği, hizmet ifasına başlandıktan
              sonra iptal ve iade yapılmamaktadır. İstisnai durumlar, TRPHONE
              tarafından ayrıca değerlendirilebilir.
            </p>
          </section>

          {/* MADDE 7 */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">
              7. Uyuşmazlıkların Çözümü
            </h2>
            <p>
              İşbu sözleşmeden doğabilecek uyuşmazlıklarda, Ticaret Bakanlığı
              tarafından ilan edilen parasal sınırlar dâhilinde tüketici hakem
              heyetleri ve tüketici mahkemeleri yetkilidir.
            </p>
          </section>

          {/* MADDE 8 */}
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">8. Yürürlük</h2>
            <p>
              ALICI, işbu sözleşmede yer alan tüm koşulları okuyup anladığını ve
              elektronik ortamda onayladığını kabul eder. Sözleşme, ödeme
              işleminin tamamlanmasıyla yürürlüğe girer.
            </p>
          </section>
        </div>

        {/* ALT NOT */}
        <div className="text-center max-w-3xl mx-auto text-xs text-gray-500 leading-relaxed">
          TRPHONE, gerekli gördüğü durumlarda işbu Mesafeli Satış Sözleşmesi’nde
          değişiklik yapma hakkını saklı tutar.
        </div>
      </div>
    </div>
  );
}
