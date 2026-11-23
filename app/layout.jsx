import './globals.css'
import Script from 'next/script'
import Header from '@/components/Header'
import Footer from '@/components/Footer' // <-- Import Footer yang baru dibuat

// Google Ads: ID tag dan label konversi "Lead panggilan telepon"
const GOOGLE_ADS_ID = 'AW-18494868344'
const GOOGLE_ADS_LEAD = 'AW-18494868344/K7FSCOCy25IdEPiWhfNE'

export const metadata = {
  title: 'Hidayah Canopy | Jasa Pembuatan Canopy Profesional',
  description: 'Spesialis canopy membran, alderon, peredam panas, dan penangkal petir.',
  
  // TAMBAHKAN BAGIAN INI:
  verification: {
    google: 'wzEV8vjz48aeh4m433Nx0Qt84MkzoM3u0y5m1yQYZMk',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      {/* Tambahan flex flex-col min-h-screen agar layout stabil dan footer selalu di bawah */}
      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen font-sans">
        
        {/* Header akan selalu muncul di atas di setiap halaman */}
        <Header /> 

        {/* children adalah isi dari page.jsx (halaman yang berubah-ubah) dibungkus main flex-grow */}
        <main className="flex-grow">
          {children} 
        </main>

        {/* Footer akan selalu muncul di bawah di setiap halaman */}
        <Footer />

        {/* Google Ads: tag Google + konversi saat pengunjung klik tombol WhatsApp/telepon */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}');

          window.reportLeadConversion = function () {
            gtag('event', 'conversion', {
              'send_to': '${GOOGLE_ADS_LEAD}',
              'value': 3000.0,
              'currency': 'IDR'
            });
          };

          document.addEventListener('click', function (e) {
            var a = e.target.closest && e.target.closest('a[href^="tel:"], a[href*="wa.me"], a[href*="api.whatsapp.com"]');
            if (a) window.reportLeadConversion();
          });
        `}</Script>

      </body>
    </html>
  )
}