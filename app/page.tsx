"use client"; // app/page.jsx
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

export default function Home() {
      // 1. Logika State untuk Slider
      const [currentSlide, setCurrentSlide] = useState(0);
      const [testiSlide, setTestiSlide] = useState(0);

      // 2. Data Konten untuk 3 Slide
      const slides = [
        {
          title: "Jasa Pasang\nCanopy",
          label: "Hidayah Canopy",
          description: "Dengan material terbaik dan tim profesional berpengalaman, kami siap membantu mewujudkan canopy impian Anda yang kuat, rapi, dan tahan lama.",
          bgImage: "/hero-bg.jpeg", // Pastikan gambar ini ada di folder public
        },
        {
          title: "Desain Artistik\n& Modern",
          label: "Canopy Membran",
          description: "Berikan sentuhan arsitektur mewah pada hunian atau tempat usaha Anda dengan Kanopi Membran berkualitas standar internasional yang fleksibel dan estetis.",
          bgImage: "/layanan-1.jpeg", 
        },
        {
          title: "Sejuk, Kokoh\n& Awet",
          label: "Canopy Alderon",
          description: "Lindungi properti Anda dari terik matahari dan bisingnya hujan. Solusi atap UPVC terbaik yang kedap suara, anti-panas, dan anti-karat.",
          bgImage: "/layanan-2.png",
        }
      ];

      // 3. Fungsi Navigasi Slider
      const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      };

      const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      };

      // 4. Fitur Auto-play (Ganti slide otomatis setiap 5 detik)
      useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
      }, []);

      return (
        <main className="w-full bg-gray-50 overflow-x-hidden font-sans">
          
          {/* --- HERO SECTION SLIDER --- */}
          <section className="relative w-full min-h-[600px] lg:h-[85vh] flex items-center bg-[#006295] overflow-hidden">
            
            {/* Gambar Background Slider */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-0" : "opacity-0 -z-10"
                }`}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-40"
                  style={{ backgroundImage: `url('${slide.bgImage}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#004a70] via-[#006295]/80 to-transparent"></div>
              </div>
            ))}

            {/* Tombol Navigasi Panah Kiri & Kanan */}
            <button 
              onClick={prevSlide}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-black/20 text-white p-2 md:p-3 rounded-full hover:bg-[#f59e0b] transition duration-300 shadow-lg"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-black/20 text-white p-2 md:p-3 rounded-full hover:bg-[#f59e0b] transition duration-300 shadow-lg"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-10 md:px-16 flex flex-col lg:flex-row items-center justify-between">
              
              {/* Konten Teks Kiri */}
              <div className="w-full lg:w-3/5 flex flex-col items-start pt-10 md:pt-0">
                <h1 
                  className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white uppercase leading-[1.1] tracking-tight drop-shadow-2xl transition-all duration-500"
                  style={{ WebkitTextStroke: '1px rgba(0,0,0,0.1)', whiteSpace: 'pre-line' }} 
                >
                  {slides[currentSlide].title}
                </h1>
                
                <div className="bg-[#f59e0b] text-white px-6 md:px-8 py-2 md:py-3 mt-4 md:mt-6 text-sm md:text-lg font-bold w-[110%] -ml-10 md:-ml-16 shadow-lg border-l-8 border-[#d97706] transition-all duration-500">
                  <span className="ml-10 md:ml-16 uppercase tracking-widest">{slides[currentSlide].label}</span>
                </div>
                
                <p className="text-gray-100 mt-8 max-w-lg text-sm md:text-base leading-relaxed font-medium drop-shadow-sm transition-all duration-500 min-h-[80px]">
                  {slides[currentSlide].description}
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full lg:w-4/5 mt-8 gap-4 pb-12 lg:pb-0">
                  <div className="flex gap-1 text-[#f59e0b]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    ))}
                  </div>
                  
                  <div className="flex flex-col items-start sm:items-end gap-1 text-white text-xs md:text-sm">
                    <div className="flex gap-3 mb-1">
                      {/* Link Sosmed Anda */}
                      <a href="https://instagram.com/hidayah.canopy" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-[#f59e0b] w-7 h-7 flex items-center justify-center rounded-full transition-all uppercase text-[10px] font-bold">IG</a>
                      <a href="https://facebook.com/machmud.harjianto.9" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-[#f59e0b] w-7 h-7 flex items-center justify-center rounded-full transition-all uppercase text-[10px] font-bold">FB</a>
                    </div>
                    <span className="opacity-80 tracking-widest mt-1">www.hidayahcanopy.com</span>
                  </div>
                </div>
              </div>

          {/* Kotak Info Sebelah Kanan (Menyorot Menu Sesuai Slide) */}
          <div className="hidden lg:flex flex-col w-1/3 items-end">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-xl border-t-4 border-b-4 border-[#f59e0b] shadow-2xl min-w-[320px]">
              <h4 className="text-[#006295] font-black mb-4 border-b pb-2 text-sm tracking-widest">LAYANAN KAMI</h4>
              <ul className="space-y-6 text-lg font-bold text-gray-800">
                <li className={`flex items-center gap-3 transition-all duration-300 ${currentSlide === 1 ? 'text-[#f59e0b] translate-x-2' : ''}`}>
                  <span className="text-[#006295] font-black text-2xl">01.</span> Kanopi Membran
                </li>
                <li className={`flex items-center gap-3 transition-all duration-300 ${currentSlide === 2 ? 'text-[#f59e0b] translate-x-2' : ''}`}>
                  <span className="text-[#006295] font-black text-2xl">02.</span> Kanopi Alderon
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Indikator Titik Bawah */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <div 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className={`cursor-pointer transition-all duration-300 ${
                i === currentSlide ? "w-8 h-2 bg-[#f59e0b]" : "w-2 h-2 bg-white/50"
              } rounded-full`}
            ></div>
          ))}
        </div>

      </section>

      {/* --- SECTION SELAMAT DATANG --- */}
      <section className="relative z-20 -mt-10 md:-mt-16 px-4 md:px-8 max-w-5xl mx-auto">
        <ScrollReveal direction="up">
          <div className="w-full bg-white rounded-2xl shadow-xl p-5 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center text-primary font-bold text-xl shrink-0">HC</div>
              <div>
                <p className="text-gray-500 text-sm">Selamat datang di</p>
                <h2 className="text-xl md:text-3xl font-bold text-gray-900">CV. Hidayah Canopy</h2>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 bg-gray-50 p-2 sm:pl-6 rounded-2xl sm:rounded-full w-full md:w-auto border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-600 text-center sm:text-left hidden sm:block font-medium">
                Jasa Pembuatan Canopy <br className="hidden md:block"/> Terbaik, Termurah, dan Terpercaya
              </p>
              
              {/* Tombol Button diubah menjadi tag <a> untuk WhatsApp */}
              <a 
                href="https://wa.me/6285832731232" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#006295] hover:bg-[#004a70] text-white px-6 py-3.5 rounded-xl sm:rounded-full w-full sm:w-auto font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#006295]/30 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                Hubungi Kami
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* --- SECTION AHLINYA KANOPI MEMBRAN --- */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center mt-8 w-full">
        <div className="flex-1 w-full">
          <ScrollReveal direction="left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Ahlinya <br/> Kanopi <br/> Membran
            </h2>
            <div className="flex items-center gap-3 mb-6 bg-gray-50 w-fit px-4 py-2 rounded-lg">
              <span className="bg-teal-100 text-primary p-1 rounded-full text-xs font-bold">✓</span>
              <p className="font-medium text-gray-700">Tahan Lama dan Fungsional</p>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Hidayah Canopy adalah perusahaan yang telah lama berkecimpung
              dalam industri pembuatan dan pemasangan canopy membrane. Kami menyajikan produk canopy berkualitas tinggi...
            </p>
            
            <Link 
              href="/tentang-kami"
              className="bg-primary hover:bg-[#11624d] text-white px-6 py-2.5 rounded-md font-medium transition inline-flex items-center justify-center gap-2 w-fit"
            >
              Read More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </Link>
          </ScrollReveal>
        </div>

        <div className="flex-1 w-full">
          <ScrollReveal direction="up">
            <div className="relative bg-primary p-10 rounded-tl-3xl rounded-br-3xl text-white shadow-2xl w-full">
              <h3 className="text-2xl font-bold mb-6 text-[#ec9422]">Keunggulan Kami</h3>
              <ul className="space-y-3 font-medium">
                <li>- Produk Berkualitas</li>
                <li>- Banyak Pilihan</li>
                <li>- Harga Ekonomis</li>
                <li>- Model Kekinian</li>
                <li>- Pengerjaan Cepat</li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- SECTION GRID KEUNGGULAN --- */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-gray-200 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 w-full">
          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 w-full">
                <div className="w-16 h-16 mb-4 text-[#ec9422]">
                  <svg fill="currentColor" viewBox="0 0 24 24" className="w-full h-full drop-shadow-md"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Terbaik</h4>
                <p className="text-sm text-gray-500">Kami selalu memberikan pelayanan yang terbaik dan memuaskan.</p>
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 w-full">
                <div className="w-16 h-16 mb-4 text-[#8b5a2b]">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M21 12V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-5m-4 0h4M17 12a2 2 0 100-4 2 2 0 000 4z" /></svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Terjangkau</h4>
                <p className="text-sm text-gray-500">Kami memberikan harga yang ekonomis dan ringan dikantong Anda.</p>
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 w-full">
                <div className="w-16 h-16 mb-4 text-[#ec9422]">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" /></svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Terpercaya</h4>
                <p className="text-sm text-gray-500">Dikerjakan oleh tim profesional untuk pekerjaan selesai lebih cepat.</p>
              </div>
            </ScrollReveal>
          </div>
          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="flex flex-col items-center text-center px-4 pt-6 sm:pt-0 w-full">
                <div className="w-16 h-16 mb-4 text-[#4285F4]">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Survei Gratis</h4>
                <p className="text-sm text-gray-500">Membantu Anda dalam pengecekan/pengukuran dan konsultasi.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* --- SECTION LAYANAN KAMI BANNER --- */}
      <section className="relative w-full bg-gradient-to-r from-[#006295] via-[#004a70] to-[#374151] pt-24 pb-16 overflow-hidden">
        
        {/* Ornamen Titik-titik - Dibiarkan Putih dengan Opacity Rendah agar terlihat seperti Abu-abu Transparan */}
        <div className="absolute left-10 top-20 flex gap-2 opacity-30">
          {[...Array(4)].map((_, col) => (
            <div key={col} className="flex flex-col gap-2">
              {[...Array(5)].map((_, row) => (
                <div key={row} className="w-1.5 h-1.5 bg-white rounded-full"></div>
              ))}
            </div>
          ))}
        </div>
        <div className="absolute right-20 top-1/2 flex gap-2 opacity-30">
          {[...Array(6)].map((_, col) => (
            <div key={col} className="flex flex-col gap-2">
              {[...Array(3)].map((_, row) => (
                <div key={row} className="w-1.5 h-1.5 bg-white rounded-full"></div>
              ))}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10 w-full">
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
            <ScrollReveal direction="up">
              {/* Frame Gambar diganti menjadi Abu-abu Sangat Muda (gray-50) */}
              <div className="bg-gray-50 p-2.5 rounded-3xl shadow-xl transform hover:-translate-y-2 transition duration-300">
                <div className="w-36 h-36 md:w-48 md:h-48 bg-gray-200 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/layanan-1.jpeg')" }}></div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up">
              <div className="bg-gray-50 p-2.5 rounded-3xl shadow-xl transform hover:-translate-y-2 transition duration-300">
                <div className="w-36 h-36 md:w-48 md:h-48 bg-gray-200 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/layanan-2.jpeg')" }}></div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up">
              <div className="bg-gray-50 p-2.5 rounded-3xl shadow-xl transform hover:-translate-y-2 transition duration-300">
                <div className="w-36 h-36 md:w-48 md:h-48 bg-gray-200 rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('/layanan-3.jpeg')" }}></div>
              </div>
            </ScrollReveal>
          </div>

          <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0">
            <ScrollReveal direction="left">
              <h2 className="text-4xl md:text-6xl font-bold text-white italic drop-shadow-lg" style={{ fontFamily: 'Georgia, serif' }}>
                Layanan Kami
              </h2>
              {/* Dekorasi Garis Abu-abu */}
              <div className="w-24 h-1 bg-gray-400/50 mt-4 mx-auto lg:mx-0"></div>
            </ScrollReveal>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 flex flex-col md:flex-row justify-between items-center relative z-10 gap-8 w-full">
        <ScrollReveal direction="right">
          <div className="flex items-center gap-4 border-l-2 border-white/50 pl-4">
            <div className="flex gap-2">
              
              {/* Tautan Facebook */}
              <a 
                href="https://facebook.com/machmud.harjianto.9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white text-[#006295] rounded-full flex items-center justify-center font-bold text-sm hover:bg-gray-200 hover:scale-110 transition-all duration-300 shadow-md"
              >
                FB
              </a>

              {/* Tautan Instagram */}
              <a 
                href="https://instagram.com/hidayah.canopy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white text-[#006295] rounded-full flex items-center justify-center font-bold text-sm hover:bg-gray-200 hover:scale-110 transition-all duration-300 shadow-md"
              >
                IG
              </a>

            </div>
            <span className="text-white text-lg md:text-xl font-medium tracking-wide">Follow Social Media</span>
          </div>
        </ScrollReveal>

        {/* JANGAN LUPA: Pastikan bagian teks kanan ini tetap ada agar tampilannya tidak patah */}
        <ScrollReveal direction="left">
          <div className="text-center md:text-right text-white">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-md">Hidayah Canopy</h3>
            <p className="text-xs md:text-sm tracking-widest text-gray-300 mt-1 uppercase font-semibold">Jasa Pembuatan Canopy Profesional</p>
          </div>
        </ScrollReveal>
      </div>
      </section>

      {/* --- SECTION DETAIL KARTU LAYANAN --- */}
      <section className="bg-gray-50 py-20 px-4 md:px-8 w-full relative">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Grid menggunakan 3 Kolom agar 5 item terlihat proporsional (3 di atas, 2 di bawah) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                tag: "Jasa Pembuatan",
                title: "Kanopi Membran",
                desc: "Pembuatan canopy membran dengan material berkualitas tinggi, memiliki daya tahan optimal terhadap cuaca, tampilan modern, serta fleksibilitas bentuk yang artistik. Cocok untuk area parkir, taman, teras, tempat usaha, dll.",
                image: "/layanan-membran.jpeg",
                link: "/layanan/canopy-membran"
              },
              {
                tag: "Jasa Pembuatan",
                title: "Kanopi Alderon",
                desc: "Canopy alderon dikenal kuat, anti karat, dan memiliki isolasi panas yang baik. Kami melayani pembuatan serta pemasangan canopy alderon untuk kebutuhan rumah, ruko, dan bangunan lainnya dengan hasil rapi dan presisi.",
                image: "/layanan-2.png",
                link: "/layanan/canopy-alderon"
              },
              {
                tag: "Jasa Pembuatan Custom",
                title: "Aksesoris Wahana Membrane",
                desc: "Aksesoris wahana berbahan membrane menghadirkan tampilan modern sekaligus fungsi maksimal. Desain custom kami membuat wahana tampil lebih menarik, aman, dan nyaman bagi pengunjung.",
                image: "/layanan-aksesoris.jpeg",
                link: "/layanan/aksesoris-wahana"
              },
              {
                tag: "Jasa Pemasangan",
                title: "Peredam Panas",
                desc: "Untuk kenyamanan ruang, kami menyediakan jasa pemasangan peredam panas Star Foil Double Side Aluminium, yang efektif memantulkan radiasi dan menjaga suhu ruangan tetap sejuk.",
                image: "/layanan-peredam.jpeg",
                link: "/layanan/peredam-panas"
              },
              {
                tag: "Jasa Pemasangan",
                title: "Penangkal Petir",
                desc: "Perlindungan vital untuk properti Anda. Kami menghadirkan instalasi penangkal petir berstandar keamanan tinggi dengan sistem grounding terbaik untuk perumahan, gedung, maupun pabrik.",
                image: "/layanan-petir.jpeg",
                link: "/layanan/penangkal-petir"
              }
            ].map((item, index) => (
              <div key={index} className="w-full">
                <ScrollReveal direction="up">
                  <div className="w-full bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6 md:p-8 flex flex-col h-full border border-gray-100 group">
                    
                    {/* Tag Label */}
                    <p className="text-[#f59e0b] font-bold text-[10px] tracking-widest uppercase mb-2">
                      {item.tag}
                    </p>
                    
                    {/* Judul Layanan */}
                    <h3 className="text-[#006295] font-black text-xl mb-5 group-hover:text-[#f59e0b] transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Gambar Cover */}
                    <div className="w-full h-48 bg-gray-200 rounded-2xl mb-6 overflow-hidden">
                      <div 
                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                        style={{ backgroundImage: `url('${item.image}')` }}
                      ></div>
                    </div>
                    
                    {/* Deskripsi */}
                    <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">
                      {item.desc}
                    </p>
                    
                    {/* Tombol Read More (Menggunakan Link) */}
                    <Link 
                      href={item.link} 
                      className="bg-gray-50 hover:bg-[#006295] text-[#006295] hover:text-white border border-gray-200 hover:border-[#006295] px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-bold w-fit transition-all duration-300 mt-auto group/btn"
                    >
                      Read More
                      <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </Link>
                    
                  </div>
                </ScrollReveal>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* --- SECTION KENALI 4 HAL --- */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="w-full">
          <ScrollReveal direction="up">
            {/* Container utama diganti ke Biru #006295 */}
            <div className="w-full bg-[#006295] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-xl relative">
              
              {/* Pola titik-titik transparan agar terlihat modern di atas biru */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>

              {/* Sisi Kiri: Judul */}
              <div className="w-full md:w-2/5 p-8 md:p-12 relative flex flex-col justify-center items-center md:items-start text-center md:text-left z-10">
                <p className="text-gray-200 text-sm md:text-base tracking-widest mb-2 font-medium uppercase">Kenali</p>
                {/* Warna 4 HAL menggunakan Oranye Secondary agar kontras */}
                <h2 className="text-[#f59e0b] text-6xl md:text-7xl font-black mb-3 leading-none drop-shadow-md">4 HAL</h2>
                <p className="text-white text-sm md:text-base font-medium max-w-[200px] leading-snug">dalam memilih jasa pemasangan canopy</p>
                
                <div 
                  className="w-48 h-48 md:w-64 md:h-64 md:absolute md:-bottom-4 md:right-[-60px] mt-8 md:mt-0 bg-contain bg-no-repeat bg-bottom z-20 opacity-90"
                  style={{ backgroundImage: "url('/pekerja.jpeg')" }} 
                ></div>
              </div>

              {/* Sisi Kanan: List (Gunakan Background Biru yang sedikit lebih gelap atau Abu-abu Gelap) */}
              <div className="w-full md:w-3/5 p-8 md:p-12 bg-[#004a70] z-10 border-l border-white/10">
                <ul className="space-y-6">
                  {[
                    "Periksa ketebalan besi apakah sudah sesuai keinginan anda",
                    "Cek bahan yang akan dipakai untuk canopy atau tenda membrane apakah sesuai tipe yang anda pesan",
                    "Konsultasikan untuk desain canopy tenda membrane agar anda merasa puas",
                    "Kondisikan tempat yang akan anda pasang canopy membrane apakah sudah pas dan benar sesuai keinginan anda"
                  ].map((text, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <span className="text-[#f59e0b] mt-1 shrink-0 transform group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      {/* Teks menggunakan warna abu-abu sangat muda (gray-100) agar nyaman dibaca di atas biru */}
                      <p className="text-gray-100 text-sm md:text-base font-medium leading-relaxed">
                        {text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- SECTION KEUNTUNGAN & AREA LAYANAN --- */}
      <section className="py-10 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-6">
        
        {/* Box Kiri: Keuntungan */}
        <div className="w-full lg:w-2/3 h-full">
          <ScrollReveal direction="up">
            <div className="w-full h-full bg-[#f8fdfb] border border-[#157960]/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 shadow-sm">
              <div className="w-full md:w-1/3 shrink-0">
                <h3 className="text-primary font-bold text-lg md:text-xl mb-4 leading-snug">
                  Apa Keuntungan Pesan Canopy di Hidayah Canopy ??
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  untuk harga kami berikan yang terbaik untuk anda dan tidak akan menguras kantong anda.
                </p>
              </div>
              <div className="w-full md:w-2/3">
                <ol className="list-decimal list-outside ml-4 space-y-4 text-sm text-gray-700 font-medium">
                  <li className="pl-2">Kami bisa sesuaikan buget yang anda miliki</li>
                  <li className="pl-2">Untuk kualitas bahan kami tetap berikan yang terbaik</li>
                  <li className="pl-2">Konsultasi <span className="text-red-600 font-bold">DESAIN GRATIS</span> untuk anda</li>
                  <li className="pl-2">Kami utamakan kepuasan anda dalam pemasangan canopy atau tenda membrane</li>
                  <li className="pl-2"><span className="text-red-600 font-bold">SURVEY</span> secara gratis dan <span className="text-red-600 font-bold">DESAIN</span> gratis untuk anda</li>
                  <li className="pl-2">Akan ada <span className="text-red-600 font-bold">DISKOUN</span> di setiap jasa pemasangan atau pemesanan kepada kami</li>
                </ol>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Box Kanan: Area Layanan */}
        <div className="w-full lg:w-1/3 h-full">
          <ScrollReveal direction="up">
            <div className="w-full h-full bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-primary font-bold text-lg md:text-xl mb-4 leading-snug">
                Seberapa Luas Hidayah Canopy Melayani Anda ??
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Untuk area jasa kami siap melayani anda di manapun dan wilayah manapun seperti hal nya kami melayani seperti kota dan wilayah yang pernah kami layani Kota Bali, Riau, Makasar, Jawa Timur, Jambi, NTB, Balikpapan, Papua, Sulawesi, Manado, Medan, Aceh, banyak lagi kota lainya yang pernah kami kerjakan.
              </p>
            </div>
          </ScrollReveal>
        </div>

      </section>

      {/* --- SECTION FITUR BAWAH --- */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto border-t border-gray-200 mt-6 mb-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="flex items-start gap-4 w-full">
                <div className="w-12 h-12 text-primary shrink-0">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.027-.396.05-.6.075m-.6-0.075a48.667 48.667 0 00-3.282-.38m-10.966 0c1.053-.146 2.12-.257 3.204-.33M6.75 14.15a48.667 48.667 0 01-3.282.38m-1.218-0.075c-.204-.025-.406-.048-.6-.075m0 0a2.18 2.18 0 01-.75-1.661V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0010.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" /></svg>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-sm md:text-base mb-1">Tim Profesional</h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Kami selalu memberikan pekerja handal dan terbaik untuk anda yang sudah berpengalaman dalam bidang tenda atau canopy membrane.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="flex items-start gap-4 w-full">
                <div className="w-12 h-12 text-primary shrink-0">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-sm md:text-base mb-1">Tepat Waktu dalam Pekerjaan</h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Tepat dan singkat waktu pengerjaan di Hidayah Canopy jangan di ragukan lagi.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full">
            <ScrollReveal direction="up">
              <div className="flex items-start gap-4 w-full">
                <div className="w-12 h-12 text-primary shrink-0">
                  <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-primary font-bold text-sm md:text-base mb-1">Hasil Maksimal</h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">Kami selalu memberikan kepuasan untuk Anda dengan hasil pengerjaan maksimal, rapi, dan presisi.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* --- SECTION SPESIALIS KANOPI & GALERI PORTOFOLIO --- */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-10">
        
        {/* Box Hijau Spesialis Kiri */}
        <div className="w-full lg:w-1/3">
          <ScrollReveal direction="up">
            <div className="bg-primary text-white p-10 h-full flex flex-col justify-center shadow-lg rounded-sm">
              <p className="text-sm tracking-widest mb-1 font-medium">Spesialis</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">KANOPI</h2>
              <p className="text-sm leading-relaxed mb-8 text-white/90">
                Ingin menghadirkan perlindungan maksimal sekaligus mempercantik tampilan bangunan Anda? Kami menghadirkan canopy dan peredam panas berkualitas tinggi.
              </p>
              <div className="flex text-[#ec9422] gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Area Galeri Kanan */}
        <div className="w-full lg:w-2/3 flex flex-col">
          <ScrollReveal direction="left">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4">
              {/* Judul menggunakan Oranye Amber #f59e0b */}
              <h2 className="text-2xl md:text-3xl font-black text-[#f59e0b] mb-4 sm:mb-0 drop-shadow-sm">Galeri Portofolio</h2>
              
              {/* Tombol View More menggunakan Biru Navy #006295 */}
              <Link 
                href="/galeri" 
                className="bg-[#006295] hover:bg-[#004a70] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 flex items-center gap-2 shadow-md transform hover:-translate-y-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
                View More
              </Link>
            </div>
            
            {/* Grid Foto 6 Buah */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {/* Array nama file spesifik menggunakan .jpeg yang berbeda dari banner/layanan */}
              {[
                'portofolio-kanopi-1.jpeg', 
                'portofolio-kanopi-2.jpeg', 
                'portofolio-kanopi-3.jpeg', 
                'portofolio-kanopi-4.jpeg', 
                'portofolio-kanopi-5.jpeg', 
                'portofolio-kanopi-6.jpeg'
              ].map((filename, index) => (
                <div 
                  key={index} 
                  className="w-full aspect-[4/3] bg-gray-200 bg-cover bg-center cursor-pointer hover:shadow-lg transition-all transform hover:scale-[1.03] duration-300 shadow-sm rounded-2xl overflow-hidden border border-gray-100 group relative"
                  style={{ backgroundImage: `url('/${filename}')` }}
                >
                  {/* Efek overlay & Ikon Zoom saat gambar disorot kursor */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <svg 
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 drop-shadow-md" 
                      fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

          </ScrollReveal>
        </div>

      </section>

      {/* --- SECTION TESTIMONI SLIDER --- */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full bg-gray-50 border-t border-gray-200 mt-10">
        <ScrollReveal direction="up">
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 border-b border-gray-200 pb-10">
            <h2 className="text-4xl md:text-5xl font-black text-[#006295] w-full lg:w-1/4 text-center lg:text-left">
              Testimoni
            </h2>
            
            <div className="w-full lg:w-auto flex justify-center">
              <Link 
                href="/testimoni" 
                className="bg-[#006295] hover:bg-[#004a70] text-white px-6 py-3 rounded-full flex items-center gap-3 transition-all duration-300 shadow-md transform hover:-translate-y-1 whitespace-nowrap"
              >
                <div className="bg-white text-[#f59e0b] p-1.5 rounded-full shrink-0 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
                </div>
                <span className="font-bold tracking-wide">200+ Customer Kami</span>
              </Link>
            </div>

            <p className="text-gray-600 text-sm md:text-base w-full lg:w-5/12 text-center lg:text-left leading-relaxed font-medium">
              Kepercayaan pelanggan adalah aset terbesar kami. Berikut testimoni yang menggambarkan pengalaman mereka bersama <strong className="text-[#006295]">Hidayah Canopy</strong>.
            </p>
          </div>

          {/* Area Slider Testimoni */}
          <div className="relative w-full">
            
            {/* Tombol Geser Kiri */}
            <button 
              onClick={() => setTestiSlide(testiSlide === 0 ? 1 : 0)}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-6 z-10 w-12 h-12 bg-white hover:bg-[#f59e0b] hover:text-white border border-gray-200 rounded-full items-center justify-center text-[#006295] transition-all duration-300 shadow-lg transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path></svg>
            </button>

            {/* Grid Testimoni (Dibungkus agar bisa ganti data per slide) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-0 md:px-8 animate-in fade-in duration-700" key={testiSlide}>
              
              {/* Data Testimoni Dinamis (12 Data dibagi 2 Slide) */}
              {[
                // SLIDE 1 (Index 0)
                [
                  { name: "Rina", text: "Saya pesan canopy membran untuk halaman rumah, hasilnya sangat rapi dan kelihatan mewah. Timnya ramah, pengerjaannya cepat, dan harganya masuk akal. Sangat puas!" },
                  { name: "Bagas", text: "Canopy alderon yang dipasang benar-benar mengurangi panas di teras. Materialnya tebal dan kuat. Pelayanannya profesional dari awal sampai selesai. Recommended!" },
                  { name: "Dandy", text: "Pasang peredam panas Star Foil Double Side Aluminium buat gudang, dan hasilnya langsung terasa. Ruangan jadi jauh lebih sejuk. Terima kasih Hidayah Canopy!" },
                  { name: "Maya", text: "Model canopy kainnya keren banget, cocok untuk toko kecil saya. Desainnya elegan dan membuat tampilan usaha saya lebih menarik. Hasil pengerjaan sangat rapi!" },
                  { name: "Heri", text: "Proses survei cepat, pemasangan tepat waktu, dan hasil canopy sesuai dengan keinginan saya. Kualitasnya mantap, tidak mengecewakan." },
                  { name: "Andri", text: "Hasil canopy membran yang dipasang benar-benar sesuai ekspektasi. Desainnya modern dan kuat. Terima kasih atas pelayanan yang cepat dan profesional!" }
                ],
                // SLIDE 2 (Index 1)
                [
                  { name: "Dewinta", text: "Canopy alderon yang dibuat Hidayah Canopy sangat kokoh dan tampilannya bersih. Proses pengerjaan cepat dan komunikatif. Recommended banget!" },
                  { name: "Alif", text: "Saya sangat terbantu dengan pemasangan peredam panas Star Foil ini. Ruangan pabrik jadi jauh lebih sejuk, dan pekerjaan timnya sangat rapi." },
                  { name: "Marissa", text: "Canopy kain untuk teras rumah saya terlihat sangat elegan. Pemasangannya rapi dan warnanya sesuai permintaan. Senang sekali dengan hasilnya!" },
                  { name: "Kiki", text: "Pemasangan kanopi cepat dan tukangnya sopan-sopan. Hasilnya bikin garasi rumah jadi lebih adem dan teduh. Harga juga sangat bersahabat." },
                  { name: "Yusuf", text: "Sangat merekomendasikan Hidayah Canopy. Dari awal konsultasi sampai finishing semuanya memuaskan. Kanopi membran-nya top banget!" },
                  { name: "Siti", text: "Peredam panasnya benar-benar berfungsi dengan baik. Sekarang ruko saya tidak kepanasan lagi saat siang hari. Sukses terus Hidayah Canopy!" }
                ]
              ][testiSlide].map((testi, index) => (
                
                <div key={index} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col gap-4 h-full group">
                  {/* Bintang Oranye Amber */}
                  <div className="flex text-[#f59e0b] gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow italic">
                    "{testi.text}"
                  </p>
                  {/* Profil Pelanggan */}
                  <div className="flex items-center gap-3 mt-2 pt-4 border-t border-gray-50">
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-[#006295] flex items-center justify-center font-black text-xs shadow-inner">
                      {testi.name.charAt(0)}
                    </div>
                    <p className="font-bold text-[#006295] text-sm group-hover:text-[#f59e0b] transition-colors">{testi.name}</p>
                  </div>
                </div>

              ))}

            </div>

            {/* Tombol Geser Kanan */}
            <button 
              onClick={() => setTestiSlide(testiSlide === 0 ? 1 : 0)}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-6 z-10 w-12 h-12 bg-white hover:bg-[#f59e0b] hover:text-white border border-gray-200 rounded-full items-center justify-center text-[#006295] transition-all duration-300 shadow-lg transform hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path></svg>
            </button>
            
          </div>

          {/* Indikator Halaman (Titik di bawah) */}
          <div className="flex justify-center items-center gap-3 mt-10">
            {[0, 1].map((dotIndex) => (
              <div 
                key={dotIndex}
                onClick={() => setTestiSlide(dotIndex)}
                className={`cursor-pointer transition-all duration-300 rounded-full ${
                  testiSlide === dotIndex ? "w-8 h-2.5 bg-[#f59e0b]" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              ></div>
            ))}
          </div>

        </ScrollReveal>
      </section>

      {/* --- SECTION CTA BANNER HIJAU KONSULTASI --- */}
      <section className="w-full bg-primary py-10 my-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-white text-center md:text-left w-full md:w-3/5">
            <p className="text-sm md:text-base font-medium leading-relaxed">
              Kini saatnya meningkatkan kenyamanan dan nilai estetika properti Anda. Hubungi <span className="font-bold">Hidayah Canopy</span> hari ini juga untuk konsultasi gratis dan dapatkan penawaran terbaik.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="bg-white text-primary p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <span className="text-white font-bold text-2xl tracking-wide">0858 3273 1232</span>
            </div>
            
            <Link 
              href="/kontak" 
              className="bg-secondary hover:bg-[#d6851f] text-white px-6 py-2.5 rounded-md font-medium transition flex items-center justify-center gap-2 w-full sm:w-auto shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              Chat Admin
            </Link>
          </div>

        </div>
      </section>

      {/* --- SECTION BLOG & ARTIKEL --- */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Kolom Kiri: Judul & View More */}
            <div className="w-full lg:w-1/4 flex flex-col items-start lg:border-r border-gray-200 lg:pr-8">
              <span className="bg-[#006295] text-white text-xs px-4 py-1.5 rounded-full font-bold mb-4 tracking-widest uppercase shadow-sm">
                Blog & Artikel
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-[#006295] mb-4 leading-tight">
                Recent Post
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 font-medium">
                Dapatkan informasi terupdate, tips perawatan, dan tren terbaru seputar kanopi.
              </p>
              
              <Link 
                href="/artikel" 
                className="group flex items-center gap-2 text-[#006295] hover:text-[#f59e0b] transition-colors font-bold"
              >
                <span className="text-[#f59e0b] text-2xl font-light group-hover:scale-110 transition-transform duration-300">+</span> 
                View More
              </Link>
            </div>

            {/* Kolom Kanan: Grid Card Artikel */}
            <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              
              {[
                {
                  title: "Pasang Kanopi Membran Sukabumi",
                  date: "22 November 2026",
                  image: "/hero-bg.jpeg",
                  slug: "pasang-kanopi-membran-sukabumi"
                },
                {
                  title: "Jasa Pembuatan Kanopi Profesional",
                  date: "22 November 2026",
                  image: "/pekerja.jpeg",
                  slug: "jasa-pembuatan-kanopi-profesional"
                },
                {
                  title: "Jasa Pasang Peredam Panas Atap",
                  date: "22 November 2026",
                  image: "/layanan-peredam.jpeg",
                  slug: "jasa-pasang-peredam-panas-atap"
                }
              ].map((article, index) => (
                
                <Link 
                  key={index} 
                  href={`/artikel/${article.slug}`} 
                  className="bg-white flex flex-col group cursor-pointer rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden"
                >
                  {/* Gambar Thumbnail */}
                  <div className="relative w-full h-48 bg-gray-200 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                      style={{ backgroundImage: `url('${article.image}')` }}
                    ></div>
                    <div className="absolute bottom-0 right-0 bg-[#f59e0b] text-white text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-tl-xl shadow-sm">
                      New Post
                    </div>
                  </div>

                  {/* Konten Text */}
                  <div className="p-6 flex flex-col flex-grow relative">
                    {/* Garis tipis aksen di atas judul */}
                    <div className="absolute top-0 left-6 w-10 h-1 bg-gray-100 group-hover:bg-[#f59e0b] transition-colors duration-300"></div>

                    <p className="text-xs text-gray-400 mb-2 font-medium mt-1">{article.date}</p>
                    
                    <h3 className="font-bold text-gray-900 text-base leading-snug mb-4 group-hover:text-[#006295] transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    {/* Kategori & Komentar */}
                    <div className="flex items-center text-xs text-[#006295] gap-2 mt-auto font-bold border-t border-gray-50 pt-4">
                      <span className="group-hover:text-[#f59e0b] transition-colors">Artikel</span>
                      <span className="text-gray-300">|</span>
                      <span className="flex items-center gap-1 text-gray-400">
                        0 
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
                
              ))}

            </div>
          </div>
        </ScrollReveal>
      </section>

    </main>
  );
}