export default function IadeIptal() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-300">
      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-14">
        {/* BAŞLIK */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">
            İptal ve İade Koşulları
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Bu sayfa, TRPHONE platformu üzerinden sunulan dijital hizmetlere
            ilişkin iptal ve iade koşullarını açıklamaktadır.
          </p>
        </div>

        {/* İÇERİK */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col gap-6 text-sm leading-relaxed">
          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">
              1. Hizmet Kapsamı
            </h2>
            <p>
              TRPHONE, kullanıcılarına dijital platform üzerinden premium
              üyelik, boost ve benzeri dijital hizmetler sunan bir çevrim içi
              hizmet platformudur. Sunulan tüm hizmetler dijital içerik ve
              dijital hizmet kapsamındadır.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">2. Cayma Hakkı</h2>
            <p>
              6502 sayılı Tüketicinin Korunması Hakkında Kanun ve ilgili
              Mesafeli Sözleşmeler Yönetmeliği uyarınca, dijital içerik veya
              dijital hizmetlere ilişkin sözleşmelerde, hizmetin ifasına
              başlanmasıyla birlikte cayma hakkı sona ermektedir.
            </p>
            <p>
              TRPHONE üzerinden satın alınan dijital hizmetlerde, ödeme
              tamamlandıktan ve hizmet ifasına başlandıktan sonra cayma hakkı
              kullanılamaz.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">
              3. İade Koşulları
            </h2>
            <p>
              Dijital hizmetlerin doğası gereği, hizmet ifasına başlandıktan
              sonra ücret iadesi yapılmamaktadır. Kullanıcı, satın alma işlemini
              tamamlayarak bu durumu kabul etmiş sayılır.
            </p>
            <p>
              Teknik bir hata veya hizmetin sunulamaması gibi istisnai
              durumlarda, iade talepleri TRPHONE tarafından ayrıca
              değerlendirilebilir.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">
              4. İptal İşlemleri
            </h2>
            <p>
              Kullanıcı, satın almış olduğu dijital hizmetin otomatik yenileme
              özelliğini dilediği zaman iptal edebilir. İptal işlemi, ilgili
              hizmet döneminin sonuna kadar geçerli olur.
            </p>
            <p>
              İptal edilen hizmetlerde, kullanılmış dönemlere ilişkin herhangi
              bir ücret iadesi yapılmaz.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">
              5. Ödeme ve İade Süreci
            </h2>
            <p>
              İade onayı verilen durumlarda, ücret iadesi ödemenin yapıldığı
              ödeme yöntemi üzerinden gerçekleştirilir. Banka ve ödeme
              kuruluşlarından kaynaklanan gecikmelerden TRPHONE sorumlu
              tutulamaz.
            </p>
          </section>

          <section className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">6. İletişim</h2>
            <p>
              İptal ve iade koşulları ile ilgili her türlü soru ve talebiniz
              için bizimle aşağıdaki e-posta adresi üzerinden iletişime
              geçebilirsiniz:
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

        {/* ALT YASAL NOT */}
        <div className="text-center max-w-3xl mx-auto text-xs text-gray-500 leading-relaxed">
          Bu sayfada yer alan koşullar, TRPHONE platformu üzerinden sunulan
          dijital hizmetler için geçerlidir. TRPHONE, gerekli gördüğü durumlarda
          bu koşulları güncelleme hakkını saklı tutar.
        </div>
      </div>
    </div>
  );
}
