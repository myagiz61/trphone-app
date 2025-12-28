import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#020617] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative">
        {/* Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-400/10 blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <div>
            <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm tracking-wide bg-yellow-400/10 text-yellow-400 border border-yellow-400/20">
              Premium Satıcı Platformu
            </span>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Telefon Satıcıları İçin
              <br />
              <span className="text-yellow-400">
                Profesyonel Mobil Platform
              </span>
            </h1>

            <p className="mt-8 text-lg text-gray-300 max-w-xl">
              TRPHONE, telefon satıcılarının ilanlarını yönetebildiği, premium
              üyelik ve öne çıkarma hizmetleriyle satışlarını artırdığı
              <strong> dijital bir mobil uygulamadır.</strong>
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                to="/premium"
                className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition"
              >
                Premium Paketleri Gör
              </Link>

              <Link
                to="/odeme"
                className="px-8 py-4 rounded-xl border border-white/15 hover:bg-white/5 transition"
              >
                Ödeme Sayfası
              </Link>
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Dijital hizmet · Fiziksel ürün satışı yoktur
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-black/40 rounded-[36px] blur-xl" />
            <img
              src="/home.png"
              alt="TRPHONE Uygulama"
              className="relative w-[300px] md:w-[360px] rounded-[36px] shadow-[0_40px_120px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Premium Üyelik",
            desc: "Aylık premium paketlerle ilan ekleme ve mağaza yönetimi.",
          },
          {
            title: "İlan Öne Çıkarma",
            desc: "Boost sistemiyle ilanlar ana sayfada öne çıkar.",
          },
          {
            title: "Güvenli Mesajlaşma",
            desc: "Alıcılarla uygulama içinden doğrudan iletişim.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-lg hover:border-yellow-400/40 transition"
          >
            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
            <p className="text-gray-300 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* PREMIUM */}
      <section className="relative">
        <div className="absolute right-0 top-1/2 w-[500px] h-[500px] bg-yellow-400/10 blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Premium Paketler ile
              <br />
              <span className="text-yellow-400">Satış Gücünü Artır</span>
            </h2>

            <ul className="space-y-4 text-lg text-gray-300">
              <li>• İlan ekleme ve yönetme</li>
              <li>• Profesyonel satıcı rozeti</li>
              <li>• Öncelikli görünürlük</li>
              <li>• Gelişmiş mağaza profili</li>
            </ul>
          </div>

          <img
            src="/premium.png"
            alt="Premium Paketler"
            className="w-[320px] mx-auto rounded-[32px] shadow-2xl"
          />
        </div>
      </section>

      {/* BOOST */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-20 items-center">
        <img
          src="/boost.png"
          alt="Boost"
          className="w-[320px] mx-auto rounded-[32px] shadow-2xl"
        />

        <div>
          <h2 className="text-4xl font-bold mb-6">
            İlanlarını
            <span className="text-yellow-400"> Öne Çıkar</span>
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
            Boost sistemi sayesinde ilanlar belirli süre boyunca daha fazla
            görüntülenir ve alıcılara öncelikli gösterilir.
          </p>
        </div>
      </section>

      {/* MESSAGES */}
      <section className="relative">
        <div className="absolute left-0 top-1/2 w-[500px] h-[500px] bg-yellow-400/10 blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Uygulama İçi
              <span className="text-yellow-400"> Mesajlaşma</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Telefon numarası paylaşmadan, alıcılarla güvenli ve hızlı iletişim
              kurabilirsiniz.
            </p>
          </div>

          <img
            src="/messages.png"
            alt="Mesajlar"
            className="w-[320px] mx-auto rounded-[32px] shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
}
