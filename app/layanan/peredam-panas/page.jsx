import React from 'react';

export const metadata = {
  title: 'Jasa Pemasangan Peredam Panas – Hidayah Canopy',
  description: 'Layanan jasa pemasangan peredam panas (insulasi atap) untuk ruangan yang lebih sejuk, nyaman, dan hemat energi dari Hidayah Canopy.',
};

export default function PeredamPanasPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* Banner Header - Menggunakan Biru #006295 */}
      <section className="bg-[#006295] py-20 text-center text-white px-6 relative overflow-hidden">
        {/* Ornamen Transparan/Abu-abu Halus untuk estetika */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-400/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Pemasangan <br className="md:hidden" /> Peredam Panas</h1>
          {/* Garis Aksen Oranye Amber */}
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto mb-6"></div>
          <p className="text-blue-100 text-lg font-medium opacity-90 italic">Jasa Insulasi Atap Profesional</p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="container mx-auto max-w-5xl px-6 mt-16">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 text-gray-700 leading-relaxed text-justify space-y-6 relative">
          
          {/* Badge Abu-abu Aksen */}
          <div className="inline-block bg-gray-100 text-[#006295] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2">
            Thermal Control
          </div>

          {/* Heading - Biru dengan Aksen Amber */}
          <h2 className="text-3xl font-black text-[#006295] mb-6 leading-tight">
            Solusi Ruangan Sejuk, Nyaman & <span className="text-[#f59e0b]">Hemat Energi</span>
          </h2>

          {/* Grid Layout: Teks di Kiri (8 kolom), Foto Potrait di Kanan (4 kolom) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mt-8">
            
            {/* Kolom Teks */}
            <div className="lg:col-span-8 space-y-5 order-2 lg:order-1">
              <p className="text-lg font-medium text-gray-800">
                Cuaca tropis seringkali membuat suhu di dalam ruangan (terutama di bawah atap seng atau spandek) menjadi sangat panas dan pengap. Insulasi atap adalah solusi terbaik untuk masalah ini.
              </p>
              
              <div className="h-px bg-gray-200 w-full my-6"></div>

              <p>
                Di <strong className="text-[#006295]">Hidayah Canopy</strong>, kami menyediakan jasa pemasangan peredam panas atap profesional untuk berbagai kebutuhan bangunan, mulai dari rumah tinggal, pabrik, gudang, hingga area komersial.
              </p>
              
              <p>
                Kami menggunakan material insulasi berkualitas tinggi seperti <em>Star Foil Double Side Aluminium</em>, <em>Bubble Foil</em>, maupun <em>Glasswool</em>. Material ini bekerja dengan cara memantulkan radiasi panas matahari hingga 95% sebelum hawa panas tersebut menembus plafon dan masuk ke dalam ruangan Anda.
              </p>

              {/* Box Poin Keunggulan */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4">
                <h3 className="font-bold text-[#006295] mb-3">Keuntungan Memasang Peredam Panas:</h3>
                <ul className="list-disc list-inside space-y-2 text-sm md:text-base text-gray-600">
                  <li>Menurunkan suhu ruangan secara signifikan (lebih sejuk).</li>
                  <li>Meringankan kinerja AC, sehingga lebih hemat biaya listrik.</li>
                  <li>Membantu meredam suara bising rintik hujan (terutama pada atap spandek).</li>
                  <li>Melindungi plafon dari kebocoran kecil dan kelembapan.</li>
                </ul>
              </div>
            </div>

            {/* Kolom Foto Portrait */}
            <div className="lg:col-span-4 order-1 lg:order-2 w-full">
              <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative group">
                <img 
                  src="/detail-peredam.jpeg" 
                  alt="Instalasi Peredam Panas Atap" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Kotak Info Mengambang di atas gambar */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm border border-white">
                  <p className="text-xs font-bold text-[#006295] text-center tracking-wide uppercase">Instalasi Profesional</p>
                </div>
              </div>
            </div>

          </div>

          {/* CTA (Call to Action) Ringkas di dalam Halaman */}
          <div className="mt-12 p-8 bg-gray-50 rounded-2xl border-l-4 border-[#006295] flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-[#006295] font-bold text-xl">Ingin Ruangan Anda Lebih Sejuk?</h4>
              <p className="text-sm text-gray-500">Konsultasikan kebutuhan insulasi atap bangunan Anda sekarang juga.</p>
            </div>
            <a 
              href="https://wa.me/6285832731232" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1 whitespace-nowrap text-center"
            >
              Hubungi Admin
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}