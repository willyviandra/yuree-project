import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { companyData } from "@/data/companyData";
import { MessageCircle } from "lucide-react";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#343434",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Yuree Project — Interior Manufacturing & Execution Partner",
  description:
    "Ekosistem manufaktur dan mitra eksekusi interior sejak 2018. 4.048+ proyek terselesaikan, 23 workshop aktif, 150+ tenaga ahli, kapasitas 2.690 m/bulan di Jawa Barat, DKI Jakarta, dan Bali.",
  keywords: [
    "Jasa Pembuatan Kitchen Set Bandung",
    "Kontraktor Interior Jakarta",
    "Workshop Interior Bali",
    "Mitra Produksi Arsitek",
    "Custom Wardrobe Minimalis",
    "Pabrik Interior Furniture",
    "Yuree Project",
    "Desain Interior Custom",
  ],
  authors: [{ name: "Yuree Project", url: "https://yureeproject.id" }],
  creator: "Yuree Project",
  metadataBase: new URL("https://yureeproject.id"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://yureeproject.id",
    siteName: "Yuree Project",
    title: "Yuree Project — Interior Manufacturing & Execution Partner",
    description:
      "Mitra eksekusi interior presisi untuk pemilik hunian, arsitek, dan agensi. 23 workshop aktif, kapasitas 2.690 m/bulan.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Yuree Project Logo",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const officialWaUrl = `https://wa.me/${companyData.brand.officialWA.number}?text=${encodeURIComponent(
    "Halo Yuree Project, saya ingin konsultasi kebutuhan interior saya."
  )}`;

  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#343434] text-[#F9F9F9] antialiased selection:bg-[#EEAA55] selection:text-[#343434]">
        {children}

        {/* Floating Quick WhatsApp Action Button */}
        <aside aria-label="Kontak Cepat WhatsApp">
          <a
            href={officialWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Konsultasi Cepat WhatsApp Yuree Project"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-[#2b2b2b]/95 hover:bg-[#3f3f3f] text-[#F9F9F9] border border-[#F9F9F9]/15 hover:border-[#EEAA55]/60 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 group"
          >
            <div className="w-7 h-7 rounded-full bg-[#EEAA55] flex items-center justify-center text-[#343434] shrink-0 shadow-md">
              <MessageCircle className="w-4 h-4 fill-current text-[#343434]" />
            </div>
            <div className="hidden sm:flex flex-col text-left pr-1">
              <span className="text-[9.5px] font-mono-num text-[#F9F9F9]/70 leading-tight">
                Hotline WhatsApp
              </span>
              <span className="text-xs font-bold text-[#F9F9F9] group-hover:text-[#EEAA55] transition-colors leading-tight">
                Konsultasi Project
              </span>
            </div>
          </a>
        </aside>
      </body>
    </html>
  );
}
