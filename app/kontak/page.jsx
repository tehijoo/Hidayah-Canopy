"use client"; // Wajib ditambahkan jika kita menggunakan event onClick pada form

import React, { useState } from 'react';

// Hapus export const metadata jika error karena kita sekarang menggunakan "use client". 
// Metadata hanya bisa ditaruh di Server Component, jadi lebih baik taruh metadata di layout.js atau gunakan cara lain jika butuh SEO kuat di halaman kontak.

export default function KontakPage() {
  // State untuk menyimpan inputan user
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    phone: '',
    pesan: ''
  });

  // Fungsi untuk menangani perubahan teks di kolom input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Fungsi untuk mengirim pesan ke WhatsApp
  const sendToWhatsApp = () => {
    if(!formData.nama || !formData.phone) {
      alert("Nama dan Nomor HP/WhatsApp wajib diisi!");
      return;
    }

    const targetWA = "6285832731232";
    
    // Merangkai teks pesan yang akan dikirim ke WA Anda
    const textMessage = `Halo Hidayah Canopy,%0A%0ASaya ingin bertanya mengenai pembuatan kanopi. Berikut data diri saya:%0A%0A*Nama:* ${formData.nama}%0A*Email:* ${formData.email || '-' }%0A*No HP:* ${formData.phone}%0A*Pesan:* ${formData.pesan}%0A%0ATerima kasih.`;

    const waLink = `https://wa.me/${targetWA}?text=${textMessage}`;
    
    // Membuka tab WhatsApp baru
    window.open(waLink, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* Banner Header */}
      <section className="bg-[#006295] py-20 text-center text-white px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gray-400/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tight">Kontak Kami</h1>
          <div className="w-20 h-1 bg-[#f59e0b] mx-auto mb-6"></div>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed italic opacity-90">
            Percayakan kebutuhan canopy Anda kepada ahlinya, karena kualitas, ketahanan, dan kerapian adalah prioritas utama Hidayah Canopy.
          </p>
        </div>
      </section>

      {/* Konten Utama */}
      <section className="container mx-auto max-w-6xl px-4 md:px-8 mt-16">
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Kolom Kiri: Informasi Kontak (Bisa diklik) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
          {/* Box Alamat -> Buka Google Maps */}
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Jalan+Semeru+Raya,+Grogol+Petamburan,+Jakarta+Barat+11450" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center group"
          >
            <div className="w-14 h-14 bg-blue-50 text-[#006295] group-hover:bg-[#006295] group-hover:text-white transition-colors duration-300 rounded-full flex items-center justify-center mb-4 shadow-inner">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Alamat</h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-[#006295] transition">
              Jalan Semeru Raya, Grogol Petamburan<br/>
              Jakarta Barat 11450
            </p>
          </a>

            {/* Box Telepon -> Buka WA */}
            <a href="https://wa.me/6285832731232" target="_blank" rel="noopener noreferrer" className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-blue-50 text-[#006295] group-hover:bg-[#006295] group-hover:text-white transition-colors duration-300 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Admin 1</h3>
              <p className="text-[#f59e0b] font-black text-xl tracking-wide group-hover:text-[#d97706] transition">
                0858 3273 1232
              </p>
            </a>

            {/* Box Email -> Buka Aplikasi Email */}
            <a href="mailto:harjiantomachmud948@gmail.com" className="bg-white p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-blue-50 text-[#006295] group-hover:bg-[#006295] group-hover:text-white transition-colors duration-300 rounded-full flex items-center justify-center mb-4 shadow-inner">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm font-medium group-hover:text-[#006295] transition">
                harjiantomachmud948@gmail.com
              </p>
            </a>

          </div>

          {/* Kolom Kanan: Form Kontak ke WA */}
          <div className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-black text-[#006295] mb-8 border-b-4 border-[#f59e0b] pb-4 inline-block">
              Tinggalkan Pesan Disini
            </h2>
            
            <form className="flex flex-col gap-6">
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/2 flex flex-col gap-2">
                  <label htmlFor="nama" className="text-sm font-bold text-gray-700">Nama Anda *</label>
                  <input 
                    type="text" 
                    id="nama" 
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl outline-none focus:border-[#006295] focus:ring-1 focus:ring-[#006295] transition-all duration-300"
                  />
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700">Email (Opsional)</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Masukkan alamat email"
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl outline-none focus:border-[#006295] focus:ring-1 focus:ring-[#006295] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-sm font-bold text-gray-700">No. HP / WhatsApp *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Contoh: 0812xxxxxx"
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl outline-none focus:border-[#006295] focus:ring-1 focus:ring-[#006295] transition-all duration-300"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="text-sm font-bold text-gray-700">Pesan</label>
                <textarea 
                  id="pesan" 
                  rows="5" 
                  value={formData.pesan}
                  onChange={handleChange}
                  placeholder="Tuliskan kebutuhan atau pertanyaan Anda di sini..."
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl outline-none focus:border-[#006295] focus:ring-1 focus:ring-[#006295] transition-all duration-300 resize-y"
                ></textarea>
              </div>

              {/* Tombol akan menjalankan fungsi sendToWhatsApp */}
              <button 
                type="button" 
                onClick={sendToWhatsApp}
                className="bg-[#006295] hover:bg-[#004a70] text-white font-bold py-3.5 px-8 rounded-xl mt-2 transition-all duration-300 shadow-lg shadow-blue-900/20 w-full md:w-auto self-start transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                Kirim via WhatsApp
              </button>
              
            </form>
          </div>

        </div>
      </section>

    </main>
  );
}