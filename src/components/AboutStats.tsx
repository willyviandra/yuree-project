"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { companyData } from "@/data/companyData";

export function AboutStats() {
  const { aboutStats } = companyData;
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // Progress: 0 when entering viewport bottom, 1 when leaving viewport top
            const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
            setScrollYProgress(Math.max(0, Math.min(1, progress)));
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax calculations (smooth, subtle, 60fps)
  const imageTranslateY = (scrollYProgress - 0.5) * -36;
  const badgeTranslateY = (scrollYProgress - 0.5) * 24;
  const glowTranslateY = (scrollYProgress - 0.5) * -60;

  const keyFeatures = [
    "Sistem produksi dan instalasi terstruktur",
    "Kontrol kualitas dari workshop sampai final checking",
    "23 workshop aktif dengan kapasitas 2.690m/bulan",
    "150+ tenaga ahli produksi, finishing, dan instalasi",
    "Siap mendukung residential, komersial, dan kemitraan",
  ];

  return (
    <section
      id="tentang-kami"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-[#09090b]"
    >
      {/* Background Aurora / Ambient Glow with Smooth Parallax Drift */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden will-change-transform"
        style={{
          transform: `translate3d(0, ${glowTranslateY}px, 0)`,
          transition: "transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="absolute -left-[10%] top-[-10%] h-[55vh] w-[55vh] rounded-full blur-[120px] bg-[#f2682c]/6" />
        <div className="absolute right-[-10%] top-[20%] h-[50vh] w-[50vh] rounded-full blur-[130px] bg-[#f59e0b]/5" />
        <div className="absolute bottom-[-15%] left-[25%] h-[48vh] w-[48vh] rounded-full blur-[120px] bg-[#f2682c]/4" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left Column: Authentic Building Image with Smooth Parallax Depth */}
          <div className="relative">
            {/* Top-left decorative accent frame with subtle drift */}
            <div
              className="absolute -left-4 -top-4 hidden size-24 rounded-[2rem] border-[6px] border-[#f2682c]/20 lg:block transition-transform duration-500 will-change-transform"
              style={{
                transform: `translate3d(0, ${badgeTranslateY * 0.5}px, 0)`,
              }}
            />

            {/* Main Image Container with Parallax Translation */}
            <div
              className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-[#121216] transition-transform duration-300 will-change-transform"
              style={{
                transform: `translate3d(0, ${imageTranslateY}px, 0)`,
              }}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-[4/5]">
                <Image
                  src="/images/about/putra-corporation-building.webp"
                  alt="Gedung representasi ekosistem produksi dan bisnis Yuree Project"
                  fill
                  className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
                {/* Subtle architectural vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Floating Established Badge with Counter-Parallax Float */}
            <div
              className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-white/10 bg-[#121216]/95 backdrop-blur-md p-5 shadow-2xl sm:block transition-transform duration-300 will-change-transform"
              style={{
                transform: `translate3d(0, ${badgeTranslateY}px, 0)`,
              }}
            >
              <div className="text-3xl font-extrabold font-mono-num text-[#f2682c]">
                2018
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-zinc-400">
                Tahun berdiri
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Clean Feature Badges */}
          <div>
            <div className="max-w-2xl text-left">
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2682c]/10 border border-[#f2682c]/25 text-xs font-semibold text-[#f2682c] tracking-wide mb-4">
                <span>Tentang Kami</span>
              </div>

              {/* Clean Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white">
                Tentang <span className="font-serif italic font-normal text-[#f2682c]">Yuree Project</span>
              </h2>

              {/* Narrative Text */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-300">
                Sejak 2018, Yuree Project membangun ekosistem produksi interior yang berfokus pada presisi, efisiensi, dan konsistensi hasil. Rekam jejak 2021–2026 menunjukkan 3.895 project berjalan ditambah 153 project pada Januari–Februari 2026, membentuk total 4.048+ project yang menjadi bukti kapasitas eksekusi kami.
              </p>
            </div>

            {/* Clean Feature Cards (Pure Typography, Zero Dummy AI Icons) */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3.5 rounded-2xl border border-white/10 bg-[#121216] p-4 shadow-sm hover:border-[#f2682c]/40 hover:-translate-y-0.5 transition-all duration-200 ${
                    idx === keyFeatures.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-[#f2682c]" />
                  <span className="text-sm font-bold text-zinc-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* Integrated Category Action Links */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#workshop"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#f2682c] hover:bg-[#d9561e] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#f2682c]/20 hover:scale-[1.02]"
              >
                <span>Lihat 23 Jaringan Workshop</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-xs sm:text-sm font-semibold transition-all duration-200"
              >
                <span>Lihat Portofolio Selesai</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Seamless Transition Gradient to 23 Workshop & Layanan */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none" />
    </section>
  );
}
