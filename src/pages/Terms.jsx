export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-300">
      <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-10">
        {/* BAŞLIK */}
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Kullanım Koşulları
          </h1>
          <p className="text-gray-400 leading-relaxed">
            İşbu Kullanım Koşulları, TRPHONE platformunun kullanımına ilişkin
            şartları ve tarafların hak ve yükümlülüklerini düzenlemektedir.
          </p>
        </div>

        {/* MADDE 1 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            1. Taraflar ve Tanımlar
          </h2>
          <p>
            TRPHONE; dijital hizmetler sunan bir platformdur. Platformu kullanan
            tüm gerçek kişiler <b>KULLANICI</b> olarak kabul edilir.
          </p>
          <p>
            <b>Platform:</b> TRPHONE <br />
            <b>İşletme Sahibi:</b> Mehmet Yağız Sındıraç <br />
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
            2. Hizmetin Kapsamı
          </h2>
          <p>
            TRPHONE, kullanıcıların telefon ilanlarını görüntüleyebildiği,
            premium üyelik ve boost gibi dijital hizmetlerden faydalanabildiği
            çevrim içi bir platformdur.
          </p>
        </section>

        {/* MADDE 3 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            3. Kullanıcı Yükümlülükleri
          </h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>Platformu hukuka ve ahlaka uygun kullanmak</li>
            <li>Yanıltıcı, sahte veya hukuka aykırı içerik paylaşmamak</li>
            <li>Hesap bilgilerini üçüncü kişilerle paylaşmamak</li>
            <li>
              Platformun güvenliğini tehlikeye sokacak işlemlerden kaçınmak
            </li>
          </ul>
        </section>

        {/* MADDE 4 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            4. Ücretli Hizmetler
          </h2>
          <p>
            TRPHONE üzerinden sunulan premium üyelik ve boost hizmetleri
            ücretlidir. Hizmet bedelleri, ödeme aşamasında kullanıcıya açıkça
            bildirilir.
          </p>
          <p>
            Satın alınan hizmetler dijital içerik kapsamındadır ve hizmet
            ifasına başlandıktan sonra iade edilmez.
          </p>
        </section>

        {/* MADDE 5 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            5. Fikri Mülkiyet Hakları
          </h2>
          <p>
            TRPHONE platformunda yer alan tüm yazılım, tasarım, logo ve
            içerikler TRPHONE’a aittir veya lisanslı olarak kullanılmaktadır.
            İzinsiz kopyalanamaz veya kullanılamaz.
          </p>
        </section>

        {/* MADDE 6 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            6. Hizmetin Askıya Alınması
          </h2>
          <p>
            Kullanım koşullarına aykırı davranılması halinde, TRPHONE, kullanıcı
            hesabını geçici veya kalıcı olarak askıya alma hakkını saklı tutar.
          </p>
        </section>

        {/* MADDE 7 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            7. Sorumluluğun Sınırlandırılması
          </h2>
          <p>
            TRPHONE, platformda yer alan ilanların doğruluğundan ve kullanıcılar
            arasındaki işlemlerden sorumlu değildir.
          </p>
        </section>

        {/* MADDE 8 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">8. Değişiklikler</h2>
          <p>
            TRPHONE, kullanım koşullarında gerekli gördüğü zaman değişiklik
            yapma hakkını saklı tutar.
          </p>
        </section>

        {/* MADDE 9 */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">
            9. Uyuşmazlıkların Çözümü
          </h2>
          <p>
            İşbu kullanım koşullarından doğabilecek uyuşmazlıklarda Türk Hukuku
            uygulanır.
          </p>
        </section>

        {/* İLETİŞİM */}
        <section className="flex flex-col gap-2 text-sm leading-relaxed">
          <h2 className="text-lg font-semibold text-white">10. İletişim</h2>
          <p>
            Kullanım koşulları ile ilgili her türlü soru ve talep için bizimle
            aşağıdaki e-posta adresi üzerinden iletişime geçebilirsiniz:
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
