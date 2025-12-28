export default function Premium() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-white mb-6">
          Premium Üyelik Sistemi
        </h1>

        <p className="text-gray-400 mb-10 max-w-3xl">
          TRPHONE premium üyeliği, satıcılara dijital ilan oluşturma, alıcılarla
          mesajlaşma ve ilanlarını öne çıkarma imkanı sunar.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <ul className="space-y-4 text-lg">
            <li>• İlan ekleme ve düzenleme</li>
            <li>• Alıcılarla direkt mesajlaşma</li>
            <li>• Satıcı profili ve mağaza görünümü</li>
            <li>• İlan öne çıkarma (boost)</li>
            <li>• Premium satıcı rozeti</li>
          </ul>

          <div className="rounded-2xl bg-slate-900 border border-slate-700 p-6">
            <p className="text-sm text-gray-400">
              Premium üyelikler aylık veya dönemsel olarak ücretlendirilir.
              Fiziksel ürün veya kargo hizmeti sunulmaz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
