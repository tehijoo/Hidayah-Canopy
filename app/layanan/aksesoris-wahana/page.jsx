import React from 'react';

export const metadata = {
  title: 'Aksesoris Wahana Bahan Membrane – Hidayah Canopy',
  description: 'Jasa pembuatan aksesoris wahana berbahan membrane custom yang inovatif, aman, dan estetis dari Hidayah Canopy.',
};

export default function AksesorisWahanaPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* Banner Header - Menggunakan Biru #006295 */}
      <section className="bg-[#006295] py-20 text-center text-white px-6 relative overflow-hidden">
        {/* Ornamen Transparan/Abu-abu Halus untuk estetika */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-400/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Aksesoris Wahana <br className="md:hidden" /> Bahan Membrane</h1>
          {/* Garis Aksen Oranye Amber */}
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto mb-6"></div>
          <p className="text-blue-100 text-lg font-medium opacity-90 italic">Jasa Pembuatan & Custom Desain Profesional</p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="container mx-auto max-w-5xl px-6 mt-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-gray-700 leading-relaxed text-justify space-y-6 relative">
          
          {/* Badge Abu-abu Aksen */}
          <div className="inline-block bg-gray-100 text-[#006295] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
            Custom Design & Safety
          </div>

          {/* Heading - Biru dengan Aksen Amber */}
          <h2 className="text-3xl font-black text-[#006295] mb-6 leading-tight">
            Inovatif, Estetis & <span className="text-[#f59e0b]">Aman</span> untuk Wahana Anda
          </h2>

          {/* Grid Layout: Teks di Kiri (8 kolom), Foto Potrait di Kanan (4 kolom) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-8">
            
            {/* Kolom Teks */}
            <div className="lg:col-span-8 space-y-5 order-2 lg:order-1">
              <p className="text-lg font-medium text-gray-800">
                Aksesoris wahana berbahan membrane menghadirkan tampilan modern sekaligus fungsi peneduh maksimal untuk berbagai area rekreasi dan ruang publik.
              </p>
              
              <div className="h-px bg-gray-200 w-full my-6"></div>

              <p>
                Di <strong className="text-[#006295]">Hidayah Canopy</strong>, kami tidak hanya membuat kanopi konvensional, tetapi juga melayani jasa pembuatan <strong>Aksesoris Wahana Custom</strong> berbahan <em>tensile membrane</em>. Sifat bahan membran yang sangat fleksibel memungkinkan kami untuk menciptakan berbagai bentuk tarikan kain yang unik, artistik, dan futuristik.
              </p>
              
              <p>
                Selain mengutamakan nilai estetika untuk menarik perhatian pengunjung, material membran yang kami gunakan memiliki standarisasi keamanan tinggi. Bahan ini dirancang anti-sobek, memblokir sinar UV berbahaya secara maksimal, serta tahan terhadap cuaca ekstrem.
              </p>

              {/* Box Poin Keunggulan */}
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-600 mt-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
                <li><strong className="text-gray-800">Sangat Cocok Untuk:</strong> Waterboom (kolam renang), Playground, area outbound, taman kota, hingga dekorasi peneduh cafe.</li>
                <li><strong className="text-gray-800">Pilihan Bentuk Custom:</strong> Model payung gantung, layar layang (<em>sail shade</em>), hingga kerucut artistik menyesuaikan tema wahana.</li>
              </ul>
            </div>

            {/* Kolom Foto Portrait */}
            <div className="lg:col-span-4 order-1 lg:order-2 w-full">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
                <img 
                  src="/detail-aksesoris.jpeg" 
                  alt="Aksesoris Wahana Bahan Membrane" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Kotak Info Mengambang di atas gambar */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white">
                  <p className="text-xs font-bold text-[#006295] text-center tracking-wide uppercase">Custom Design Kami</p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA (Call to Action) Ringkas di dalam Halaman */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl border-l-4 border-[#006295] flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-[#006295] font-bold text-xl">Butuh Desain Custom untuk Wahana Anda?</h4>
              <p className="text-sm text-gray-500">Diskusikan ide desain Anda bersama kami dan dapatkan penawaran menarik.</p>
            </div>
            <a 
              href="https://wa.me/6285832731232" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1 whitespace-nowrap text-center"
            >
              Konsultasi Desain
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}