"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { companyData, PortfolioItem } from "@/data/companyData";
import {
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Calculator,
  MapPin,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

export default function PortfolioPage() {
  const { portfolio, brand } = companyData;
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua Proyek");
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const categories = [
    { label: "Semua Proyek", catKey: "Semua Proyek", count: portfolio.length },
    { label: "Kitchen Set", catKey: "Kitchen Set", count: portfolio.filter((p) => p.category === "Kitchen Set").length },
    { label: "Bedroom", catKey: "Bedroom", count: portfolio.filter((p) => p.category === "Bedroom").length },
    { label: "Living Room", catKey: "Living Room", count: portfolio.filter((p) => p.category === "Living Room").length },
    { label: "Wardrobe", catKey: "Wardrobe", count: portfolio.filter((p) => p.category === "Wardrobe").length },
    { label: "Under The Stairs", catKey: "Under The Stairs", count: portfolio.filter((p) => p.category === "Under The Stairs").length },
    { label: "Lainnya", catKey: "Lainnya", count: portfolio.filter((p) => p.category === "Lainnya").length },
  ];

  const filteredPortfolio = useMemo(() => {
    if (selectedCategory === "Semua Proyek") return portfolio;
    return portfolio.filter((item) => item.category === selectedCategory);
  }, [portfolio, selectedCategory]);

  const openModal = (item: PortfolioItem) => {
    setActiveModalItem(item);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setActiveModalItem(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeModalItem) return;
    setCurrentImageIndex((prev) => (prev + 1) % activeModalItem.images.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (!activeModalItem) return;
    setCurrentImageIndex(
      (prev) => (prev - 1 + activeModalItem.images.length) % activeModalItem.images.length
    );
  };

  return (
    <main className="min-h-screen bg-[#343434] text-[#F9F9F9] relative overflow-x-hidden">
      {/* Sticky Glassmorphism Header */}
      <Navbar />

      {/* Background Aurora / Ambient Glow Drift */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[-10%] h-[55vh] w-[55vh] rounded-full blur-[130px] bg-[#EEAA55]/6" />
        <div className="absolute right-[-10%] top-[25%] h-[50vh] w-[50vh] rounded-full blur-[140px] bg-[#EEAA55]/5" />
        <div className="absolute bottom-[-15%] left-[30%] h-[48vh] w-[48vh] rounded-full blur-[130px] bg-[#EEAA55]/4" />
      </div>

      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-28 sm:pt-36 pb-20">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-[#EEAA55] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Section Header matching https://menujukeindahan.id/portfolio/ */}
        <header className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEAA55]/10 border border-[#EEAA55]/25 text-xs font-semibold text-[#EEAA55] tracking-wide shadow-sm shadow-[#EEAA55]/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Galeri Hasil Kerja</span>
            </div>
            <span className="text-xs font-mono-num font-bold uppercase tracking-wider text-zinc-400">
              {portfolio.length} Proyek Aktif
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Semua Portfolio{" "}
            <span className="font-serif italic font-normal text-[#EEAA55]">
              Interior Custom
            </span>{" "}
            Yuree Project
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-300 font-normal">
            Eksplorasi seluruh hasil produksi furnitur dan pemasangan interior custom Yuree Project.
            Kitchen set, bedroom, wardrobe, backdrop TV, dan area bawah tangga di 28 kota di Indonesia.
          </p>
        </header>

        {/* Horizontal Scrollable Category Filter Pills matching screenshot */}
        <nav className="mt-10 overflow-x-auto pb-4 scrollbar-hide">
          <ul className="flex min-w-max gap-2.5 sm:gap-3 pr-4 sm:justify-start">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.label;
              return (
                <li key={cat.label}>
                  <button
                    onClick={() => setSelectedCategory(cat.label)}
                    className={`flex items-center gap-2 rounded-full border px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "border-transparent bg-gradient-to-r from-[#EEAA55] to-[#EEAA55] text-white shadow-[0_0_22px_rgba(238,170,85,0.32)] scale-[1.02]"
                        : "border-white/10 bg-[#2b2b2b] text-zinc-400 hover:border-[#EEAA55]/40 hover:text-white hover:bg-[#3f3f3f]"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold transition-colors ${
                        isActive ? "bg-white/20 text-white" : "bg-white/10 text-zinc-400"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Portfolio Cards Grid matching reference layout (4 cols on xl) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {filteredPortfolio.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="group relative cursor-pointer overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#2b2b2b] shadow-xl transition-all duration-500 hover:border-[#EEAA55]/50 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#EEAA55]/10"
            >
              {/* Image Frame with Aspect 4/3 */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                <Image
                  src={item.images[0]?.url || "/images/portfolio/IMG_20260513_213439.webp"}
                  alt={item.title}
                  fill
                  priority={idx < 6}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform [transition-duration:900ms] ease-out group-hover:scale-110"
                />

                {/* Subtle Cinematic Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />

                {/* Top Floating Badges */}
                <div className="absolute inset-x-3.5 top-3.5 flex items-start justify-between gap-2 z-10">
                  {/* Left: Category Badge */}
                  <span className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/20 bg-white/95 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-wide text-[#EEAA55] backdrop-blur shadow-sm">
                    <span className="size-1.5 shrink-0 rounded-full bg-[#EEAA55]" />
                    {item.category}
                  </span>

                  {/* Right: Photo Count Badge */}
                  <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full border border-white/15 bg-black/70 px-2.5 py-1 text-[0.625rem] font-bold text-white/90 backdrop-blur shadow-sm">
                    📷 {item.photoCount} Foto
                  </span>
                </div>

                {/* Bottom Left: Title Preview on Hover */}
                <div className="absolute bottom-4 left-4 right-16 translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 z-10 pointer-events-none">
                  <h3 className="font-display text-lg font-bold text-white drop-shadow-md">
                    {item.title}
                  </h3>
                </div>

                {/* Bottom Right: Floating Eye Icon Button on Hover */}
                <div className="absolute bottom-4 right-4 inline-flex size-11 translate-y-2 items-center justify-center rounded-full bg-gradient-to-r from-[#EEAA55] to-[#EEAA55] text-white opacity-0 shadow-lg shadow-[#EEAA55]/40 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 z-10">
                  <Eye className="size-5" />
                </div>
              </div>

              {/* Card Body: Title & Description only (matching menujukeindahan.id/portfolio/) */}
              <div className="p-5">
                <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#EEAA55] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {filteredPortfolio.length === 0 && (
            <div className="col-span-full py-16 text-center text-zinc-500 text-sm">
              Tidak ada proyek yang sesuai dengan kategori &quot;{selectedCategory}&quot;.
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      {activeModalItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={closeModal}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-5xl rounded-2xl bg-[#2b2b2b] border border-white/15 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#2b2b2b]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-full bg-[#EEAA55]/15 text-[#EEAA55] text-xs font-mono-num font-bold border border-[#EEAA55]/30">
                  {activeModalItem.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {activeModalItem.title}
                </h3>
                <span className="hidden sm:inline text-xs text-zinc-400">
                  — {activeModalItem.location}
                </span>
              </div>

              <button
                onClick={closeModal}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors"
                aria-label="Tutup Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Main Image Viewer & Carousel Controls */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-black/80 flex items-center justify-center overflow-hidden">
              <Image
                src={
                  activeModalItem.images[currentImageIndex]?.url ||
                  activeModalItem.images[0]?.url ||
                  "/images/portfolio/IMG_20260513_213439.webp"
                }
                alt={activeModalItem.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1024px"
                priority
              />

              {/* Prev / Next Buttons */}
              {activeModalItem.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-transform hover:scale-110"
                    aria-label="Foto Sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md transition-transform hover:scale-110"
                    aria-label="Foto Selanjutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Image Counter Indicator */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-mono-num border border-white/15">
                    {currentImageIndex + 1} / {activeModalItem.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer: Caption, Specs & Actions */}
            <div className="p-6 bg-[#2b2b2b] border-t border-white/10 overflow-y-auto">
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {activeModalItem.images[currentImageIndex]?.caption || activeModalItem.description}
              </p>

              {/* Specification Grid */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono-num">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-zinc-500 text-[10px] uppercase">Lokasi Proyek</div>
                  <div className="text-white font-semibold mt-0.5">{activeModalItem.location}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-zinc-500 text-[10px] uppercase">Dimensi Terpasang</div>
                  <div className="text-white font-semibold mt-0.5">{activeModalItem.dimensions}</div>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-zinc-500 text-[10px] uppercase">Material & Finishing</div>
                  <div className="text-[#EEAA55] font-semibold mt-0.5 truncate" title={activeModalItem.finishing}>
                    {activeModalItem.finishing}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/10">
                <Link
                  href="/#simulasi-biaya"
                  onClick={closeModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-semibold text-zinc-200 hover:text-white transition-colors"
                >
                  <Calculator className="w-4 h-4 text-[#EEAA55]" />
                  <span>Hitung Biaya Proyek Ini</span>
                </Link>

                <a
                  href={`https://wa.me/${brand.officialWA.number}?text=${encodeURIComponent(
                    `Halo ${brand.brandName}, saya tertarik berkonsultasi mengenai proyek portofolio ${activeModalItem.title} (${activeModalItem.category}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#EEAA55] hover:bg-[#d99640] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-[#EEAA55]/20 hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Konsultasi Proyek Serupa</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </main>
  );
}
