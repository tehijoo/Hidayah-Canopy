import React from 'react';
import Link from 'next/link';
import { articles } from '../data'; // <-- Import dari data.js

// Tambahkan "async" di depan function
export default async function DetailArtikelPage({ params }) {
  
  // WAJIB di Next.js terbaru: Tunggu (await) params sebelum membacanya
  const resolvedParams = await params; 
  const slug = resolvedParams.slug;

  // Cari artikel berdasarkan slug
  const article = articles.find((a) => a.slug === slug);

  // Jika artikel tidak ditemukan
  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 pb-20 pt-32">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Artikel Tidak Ditemukan</h1>
        <p className="text-gray-500 mb-8">Maaf, artikel yang Anda cari tidak ada atau telah dihapus.</p>
        <Link href="/artikel" className="bg-[#157960] text-white px-6 py-2 rounded-md hover:bg-[#11624d] transition">
          Kembali ke Blog
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      
      {/* Container Utama Artikel */}
      <section className="container mx-auto max-w-4xl px-4 md:px-8 pt-12">
        
        {/* Breadcrumb Navigasi */}
        <div className="text-sm text-gray-500 mb-8 flex items-center gap-2">
          <Link href="/" className="hover:text-[#157960]">Home</Link>
          <span>/</span>
          <Link href="/artikel" className="hover:text-[#157960]">Artikel</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium truncate">{article.title}</span>
        </div>

        {/* Header Artikel (Judul & Info) */}
        <div className="mb-8 text-center md:text-left">
          <span className="bg-orange-100 text-[#ec9422] text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">
            INFO KANOPI
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            {article.title}
          </h1>
          <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
              <span>Admin Hidayah Canopy</span>
            </div>
          </div>
        </div>

        {/* Gambar Utama Artikel */}
        <div 
          className="w-full h-64 md:h-[450px] bg-gray-200 rounded-2xl mb-10 bg-cover bg-center shadow-sm"
          style={{ backgroundImage: `url('${article.image}')` }}
        ></div>

        {/* Isi / Konten Artikel */}
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-100 text-gray-700 leading-relaxed text-justify prose prose-lg max-w-none">
          <p className="text-lg font-medium text-gray-800 mb-6">
            {article.excerpt}
          </p>
          <p className="mb-4">
            Kanopi membran adalah sistem peneduh atau struktur atap yang menggunakan material kain membran khusus dengan tingkat elastisitas, ketahanan, dan estetika yang sangat baik. Berbeda dari kanopi biasa yang memakai polycarbonate atau spandek, kanopi membran menggunakan bahan sejenis kain sintetis premium seperti PVDF, PTFE, atau ETFE yang kuat dan mampu membentuk lengkungan artistik.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Keunggulan Kanopi Membran</h2>
          <ul className="list-disc list-inside space-y-3 mb-6">
            <li><strong>Desain Modern dan Mewah:</strong> Struktur membran memungkinkan bentuk yang lebih beragam seperti melengkung, melipat, atau wave.</li>
            <li><strong>Material Kuat dan Tahan Lama:</strong> Memiliki kekuatan tarik sangat tinggi, sehingga mampu menahan terpaan angin dan hujan deras. Tahan hingga 10-20 tahun.</li>
            <li><strong>Perawatan Mudah:</strong> Tidak memerlukan perawatan rumit. Cukup membersihkan permukaan secara berkala.</li>
          </ul>
          <p>
            Permintaan pemasangan kanopi membran terus meningkat. Hidayah Canopy hadir sebagai penyedia jasa profesional yang melayani pemasangan kanopi membran di seluruh Indonesia dengan standar kualitas terbaik.
          </p>
          <p className="mt-8 p-6 bg-teal-50 border-l-4 border-[#157960] rounded-r-lg italic text-gray-800 font-medium">
            "Jika Anda membutuhkan kanopi membran yang kuat, elegan, dan dikerjakan oleh tenaga profesional, Hidayah Canopy adalah solusi terbaik untuk kebutuhan Anda."
          </p>
        </div>

      </section>
    </main>
  );
}