"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { companyData } from "@/data/companyData";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const { hero } = companyData;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax calculations (smooth & performant)
  const bgTranslateY = Math.min(scrollY * 0.35, 280);
  const bgScale = 1 + Math.min(scrollY * 0.0003, 0.1);
  const contentTranslateY = Math.min(scrollY * 0.12, 100);
  const contentOpacity = Math.max(1 - scrollY / 650, 0);

  return (
    <section
      id="home"
      className="relative min-h-[95vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-center overflow-hidden bg-[#09090b]"
    >
      {/* 1. REAL HERO BACKGROUND IMAGE WITH SMOOTH PARALLAX */}
      <div
        className="absolute inset-0 z-0 pointer-events-none will-change-transform overflow-hidden"
        style={{
          transform: `translate3d(0, ${bgTranslateY}px, 0) scale(${bgScale})`,
          transition: "transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <Image
          src="/images/hero/hero-bg.webp"
          alt="Yuree Project Luxury Interior Workshop & Architecture"
          fill
          priority
          className="object-cover object-center opacity-35 brightness-75 scale-105"
        />

        {/* Cinematic Gradient Overlays to preserve contrast and logo identity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/75 to-[#09090b]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-[#09090b]/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(245,158,11,0.15),transparent_65%)]" />
      </div>

      {/* 2. ARCHITECTURAL DRAFTING GRID WITH SLOW PARALLAX */}
      <div
        className="absolute inset-0 architectural-grid opacity-30 pointer-events-none z-[1]"
        style={{
          transform: `translate3d(0, ${scrollY * 0.08}px, 0)`,
        }}
      />

      {/* 3. AMBIENT GLOW FLAP */}
      <div
        className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[#f59e0b]/10 blur-[150px] pointer-events-none rounded-full z-[1]"
        style={{
          transform: `translate3d(0, ${scrollY * 0.15}px, 0)`,
        }}
      />

      {/* 4. MAIN CONTENT CONTAINER */}
      <div
        className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 w-full z-10"
        style={{
          transform: `translate3d(0, ${contentTranslateY}px, 0)`,
          opacity: contentOpacity,
          transition: "opacity 0.1s ease-out",
        }}
      >
        {/* Top Eyebrow Badge (Clean, minimal, no ping dot) */}
        <div className="flex items-center justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-num text-zinc-300">
            <span className="text-[#f59e0b] font-semibold">Since 2018</span>
            <span className="text-zinc-500">·</span>
            <span className="text-zinc-300">Interior Manufacturing & Execution Partner</span>
          </div>
        </div>

        {/* Main Grid: Headline & Clean Architectural Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Description & CTAs (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] font-extrabold tracking-tight text-white leading-[1.1] [text-wrap:balance]">
              Wujudkan Interior{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#fbbf24] to-[#f59e0b]">
                Premium Terukur
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {hero.subheadline}
            </p>

            {/* Primary Action CTA (No dummy icons, clean architectural design) */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#kontak"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-black font-extrabold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#f59e0b]/20 hover:scale-[1.02]"
              >
                <span>{hero.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Clean Architectural Photograph (No dummy badges or floating clutter) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-[#121216] border border-white/15 p-2.5 shadow-2xl overflow-hidden group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-black">
                <Image
                  src="/images/hero/hero-bg.webp"
                  alt="Sentra Fabrikasi & Workshop Yuree Project"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-3 px-2 pb-1 flex items-center justify-between text-[11px] font-mono-num text-zinc-400">
                <span className="text-zinc-300 font-medium">Sentra Fabrikasi & Perakitan Presisi</span>
                <span className="text-[#f59e0b]">Bandung Barat</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5. KEY METRICS BAR (Pure Typography, No Sparkles/Star AI Slop) */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {hero.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#121216]/75 border border-white/10 hover:border-[#f59e0b]/40 transition-all duration-300 group backdrop-blur-md"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-mono-num group-hover:text-[#f59e0b] transition-colors">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-zinc-200 mt-1">
                  {metric.label}
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. SEAMLESS GRADIENT TRANSITION TO TENTANG KAMI */}
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#09090b] via-[#09090b]/80 to-transparent pointer-events-none z-[2]" />
    </section>
  );
}
