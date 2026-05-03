import React from 'react';
import { Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react'; 

export const metadata = {
  title: 'Tentang Kami – Hidayah Canopy',
  description: 'Hidayah Canopy adalah ahli dalam pembuatan dan pemasangan kanopi membran, kain, dan alderon terbaik di Indonesia.',
};

export default function TentangKamiPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* MAIN CONTENT AREA */}
      <main className="flex-grow bg-white">
        
        {/* Banner Section - REVISI: Menggunakan Biru #006295 */}
        <section className="bg-[#006295] text-white py-20 px-6">
          <div className="container mx-auto text-center max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tight">Hidayah Canopy</h1>
            <p className="text-xl text-blue-100 italic font-medium opacity-90">
              "Solusi Estetika dan Perlindungan Ruang Terbuka Anda"
            </p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16 max-w-6xl">
          {/* Main Story Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-[#006295] mb-4 uppercase tracking-wide">Siapa Kami?</h2>
              {/* REVISI: Garis menggunakan Oranye Amber */}
              <div className="h-1.5 w-20 bg-[#f59e0b] mb-6"></div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  <strong className="text-[#006295]">Hidayah Canopy</strong> adalah penyedia jasa profesional yang bergerak di bidang spesialis pembuatan dan pemasangan berbagai jenis kanopi, mulai dari Kanopi Membran, Kanopi Kain (Awning), hingga Alderon.
                </p>
                <p>
                  Kami berdedikasi untuk memberikan hasil kerja yang presisi, estetis, dan tahan lama. Dengan didukung oleh tenaga ahli berpengalaman dan penggunaan material berkualitas tinggi (Standard Internasional), kami memastikan setiap proyek yang kami tangani mampu memberikan nilai tambah bagi properti Anda.
                </p>
                <p>
                  Visi kami adalah menjadi mitra terpercaya bagi pelanggan di seluruh Indonesia, mulai dari skala rumah tangga, kafe/restoran, hingga area komersial dan publik. Kualitas, ketahanan, dan kepuasan pelanggan adalah pilar utama operasional kami.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-video md:aspect-square flex items-center justify-center border-8 border-gray-50">
                <div className="text-center p-8">
                  {/* REVISI: Teks logo di placeholder menggunakan Biru */}
                  <p className="font-black text-2xl text-[#006295] mb-2">HIDAYAH CANOPY</p>
                  <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">Workshop & Gallery Foto</p>
                </div>
              </div>
            </div>
          </section>

          {/* Keunggulan Section - REVISI: Menggunakan Abu-abu Muda */}
          <section className="bg-gray-100 rounded-3xl p-10 shadow-inner border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-[#006295] mb-12 uppercase tracking-wide">
              Kenapa Memilih Hidayah Canopy?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { title: "Material Premium", desc: "Menggunakan kain & membran impor berkualitas tinggi yang tahan sinar UV dan air." },
                { title: "Tenaga Ahli", desc: "Dikerjakan oleh teknisi berpengalaman yang menjamin kerapian struktur baja dan kain." },
                { title: "Harga Kompetitif", desc: "Memberikan penawaran harga terbaik yang sebanding dengan kualitas hasil akhir." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-200/50 transform hover:-translate-y-1 transition duration-300">
                  {/* REVISI: Ikon menggunakan Oranye Amber */}
                  <div className="bg-[#f59e0b] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg rotate-3 hover:rotate-0 transition-transform">
                    <CheckCircle2 size={28} />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3 text-lg">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}