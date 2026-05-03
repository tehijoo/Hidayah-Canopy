import React from 'react';

export const metadata = {
  title: 'Jasa Pembuatan Canopy Membran – Hidayah Canopy',
  description: 'Layanan jasa pembuatan dan pemasangan canopy membran berkualitas tinggi dari Hidayah Canopy.',
};

export default function CanopyMembranPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* Banner Header - Menggunakan Biru #006295 */}
      <section className="bg-[#006295] py-20 text-center text-white px-6 relative overflow-hidden">
        {/* Ornamen Abu-abu Halus untuk estetika */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-400/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Canopy Membran</h1>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto mb-6"></div>
          <p className="text-blue-100 text-lg font-medium opacity-90 italic">Jasa Pembuatan & Pemasangan Profesional</p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="container mx-auto max-w-5xl px-6 mt-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-gray-700 leading-relaxed text-justify space-y-6 relative">
          
          {/* Badge Abu-abu Aksen */}
          <div className="inline-block bg-gray-100 text-[#006295] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
            Premium Service
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-black text-[#006295] mb-6 leading-tight">
            Best Quality, Hasil Rapi & <span className="text-[#f59e0b]">Presisi</span>
          </h2>

          {/* Grid Layout: Teks di Kiri (8 kolom), Foto Potrait di Kanan (4 kolom) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-8">
            
            {/* Kolom Teks */}
            <div className="lg:col-span-8 space-y-5 order-2 lg:order-1">
              <p className="text-lg font-medium text-gray-800">
                Pembuatan canopy membran dengan material berkualitas tinggi, memiliki daya tahan optimal terhadap cuaca, tampilan modern, serta fleksibilitas bentuk yang artistik.
              </p>
              
              <div className="h-px bg-gray-200 w-full my-6"></div>

              <p>
                Layanan pembuatan <strong className="text-[#006295]">Canopy Membran</strong> dari Hidayah Canopy menawarkan solusi perlindungan outdoor dengan tampilan modern dan estetika tinggi. Canopy membran dikenal sebagai salah satu jenis canopy premium yang memiliki fleksibilitas bentuk sehingga dapat dirancang dalam berbagai model artistik.
              </p>
              
              <p>
                Kami menggunakan bahan kain membrane yang telah teruji kekuatannya terhadap paparan sinar UV dan hujan ekstrem. Struktur rangka yang kami bangun menggunakan besi pilihan dengan teknik pengelasan yang rapi, memastikan keamanan dan keindahan bangunan Anda terjaga dalam waktu yang lama. 
              </p>

              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-600 mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <li><strong className="text-gray-800">Sangat Cocok Untuk:</strong> Area parkir, taman, teras rumah mewah, cafe outdoor, hingga tempat usaha skala besar.</li>
                <li><strong className="text-gray-800">Keunggulan:</strong> Anti sobek, memantulkan sinar UV, tidak mudah berjamur, dan sangat ikonik.</li>
              </ul>
            </div>

            {/* Kolom Foto Portrait */}
            <div className="lg:col-span-4 order-1 lg:order-2 w-full">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
                <img 
                  src="/detail-membran.jpeg" 
                  alt="Hasil Pemasangan Canopy Membran" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Kotak Info Mengambang di atas gambar */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white">
                  <p className="text-xs font-bold text-[#006295] text-center tracking-wide uppercase">Hasil Pemasangan Kami</p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Ringkas di dalam Halaman */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl border-l-4 border-[#006295] flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-[#006295] font-bold text-xl">Ingin Pasang Canopy Membran?</h4>
              <p className="text-sm text-gray-500">Dapatkan konsultasi gratis dan survei lokasi sekarang.</p>
            </div>
            <a 
              href="https://wa.me/6285832731232"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f59e0b] hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1 whitespace-nowrap text-center"
            >
              Hubungi Admin
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}