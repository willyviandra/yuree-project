"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  UtensilsCrossed,
  BedDouble,
  Tv,
  Shirt,
  Layers,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // 0 when section enters bottom, 0.5 when centered, 1 when past top
            const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
            setScrollProgress(Math.max(0, Math.min(1, progress)));
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

  // Parallax calculations (hardware-accelerated, 60fps)
  const headerTranslateY = (1 - Math.min(scrollProgress * 2.2, 1)) * 36;
  const cardsTranslateY = (1 - Math.min(scrollProgress * 1.8, 1)) * 48;
  const bgGridTranslateY = (scrollProgress - 0.5) * -45;
  const ambientGlowTranslateY = (scrollProgress - 0.5) * -70;

  const serviceList = [
    {
      num: "01",
      title: "Kitchen Set",
      desc: "Interior dapur custom modern, rapi, fungsional, dan premium.",
      pills: [
        "Kabinet atas dan bawah",
        "Kitchen island",
        "Storage efisien",
        "Finishing premium",
      ],
      icon: UtensilsCrossed,
      isWide: true,
      href: "#portfolio",
    },
    {
      num: "02",
      title: "Bedroom Interior",
      desc: "Interior kamar tidur custom, headboard, backdrop, storage, dan furniture built-in.",
      pills: [
        "Headboard custom",
        "Backdrop panel",
        "Built-in storage",
        "Meja rias dan bedside",
      ],
      icon: BedDouble,
      isWide: false,
      href: "#portfolio",
    },
    {
      num: "03",
      title: "Living Room",
      desc: "Backdrop TV, wall panel, cabinet display, dan interior ruang keluarga premium.",
      pills: [
        "Backdrop TV",
        "Wall panel",
        "Display cabinet",
        "Detail pencahayaan",
      ],
      icon: Tv,
      isWide: false,
      href: "#portfolio",
    },
    {
      num: "04",
      title: "Wardrobe",
      desc: "Lemari pakaian custom, walk-in closet, dan storage system.",
      pills: [
        "Walk-in closet",
        "Modul gantung dan drawer",
        "Rak aksesori",
        "Lighting cabinet",
      ],
      icon: Shirt,
      isWide: false,
      href: "#portfolio",
    },
    {
      num: "05",
      title: "Under The Stairs",
      desc: "Pemanfaatan area bawah tangga menjadi storage, cabinet, atau display fungsional.",
      pills: [
        "Shoe rack",
        "Storage tertutup",
        "Display shelf",
        "Cabinet compact",
      ],
      icon: Layers,
      isWide: false,
      href: "#portfolio",
    },
  ];

  return (
    <section
      id="layanan"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-[#18130e] via-[#1c1611] to-[#14100c] text-[#f4f4f5]"
    >
      {/* Warm Ambient Logo-Inspired Glows (Non-Black Branded Theme) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden will-change-transform"
        style={{
          transform: `translate3d(0, ${ambientGlowTranslateY}px, 0)`,
          transition: "transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="absolute -left-[10%] top-[-10%] h-[55vh] w-[55vh] rounded-full blur-[130px] bg-[#f2682c]/8" />
        <div className="absolute right-[-10%] top-[25%] h-[50vh] w-[50vh] rounded-full blur-[140px] bg-[#f59e0b]/7" />
        <div className="absolute bottom-[-15%] left-[25%] h-[48vh] w-[48vh] rounded-full blur-[130px] bg-[#f2682c]/6" />
      </div>

      {/* Subtle Architectural Grid with Counter-Parallax Drift */}
      <div
        className="absolute inset-0 architectural-grid opacity-20 pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${bgGridTranslateY}px, 0)`,
        }}
      />

      {/* Radial Warm Brand Halo from Top */}
      <div className="absolute inset-x-0 top-0 h-96 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(242,104,44,0.18),transparent)] pointer-events-none" />

      {/* Top Accent Gradient Border */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#f2682c]/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Hero Section Layanan with Smooth Parallax Drift */}
        <div
          className="max-w-3xl text-left will-change-transform transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(0, ${headerTranslateY}px, 0)`,
          }}
        >
          {/* Category Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f2682c]/15 border border-[#f2682c]/30 text-xs font-semibold text-[#f2682c] tracking-wide mb-4 shadow-sm shadow-[#f2682c]/10">
            <span>Spesialisasi Fabrikasi & Eksekusi</span>
          </div>

          {/* Heading Styled Exactly like menujukeindahan.id */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
            Layanan Interior Custom{" "}
            <span className="font-serif italic font-normal text-[#f2682c]">
              Yuree Project
            </span>
          </h2>

          {/* Subtitle matching reference */}
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-300">
            Solusi interior custom untuk kebutuhan residential, komersial, dan project kemitraan.
            Kitchen set, bedroom, wardrobe, living room, dan area bawah tangga dengan standar
            produksi terstruktur dan finishing presisi.
          </p>
        </div>

        {/* 5 Service Cards Grid with 3D Perspective & Parallax Elevation */}
        <div
          className="mt-14 grid gap-5 [perspective:1200px] sm:grid-cols-2 lg:grid-cols-3 will-change-transform transition-transform duration-300 ease-out"
          style={{
            transform: `translate3d(0, ${cardsTranslateY}px, 0)`,
          }}
        >
          {serviceList.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={item.isWide ? "sm:col-span-2 lg:col-span-2" : "sm:col-span-1 lg:col-span-1"}
              >
                <article className="group relative h-full flex flex-col justify-between overflow-hidden rounded-[1.4rem] border border-[#f2682c]/20 bg-[#221b15]/90 p-7 sm:p-8 shadow-xl backdrop-blur-md transition-all duration-500 hover:border-[#f2682c]/60 hover:bg-[#281f18] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#f2682c]/10">
                  {/* Top Bar Gradient Reveal on Hover */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#f2682c] to-[#f59e0b] transition-transform duration-500 group-hover:scale-x-100" />

                  {/* Card Content Top */}
                  <div>
                    {/* Header: Icon & Big Number (01, 02, etc.) */}
                    <div className="flex items-start justify-between gap-6">
                      <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-[#f2682c]/15 text-[#f2682c] transition-all duration-500 group-hover:bg-[#f2682c] group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#f2682c]/30">
                        <IconComponent className="size-6" />
                      </div>

                      <span className="font-display text-3xl font-bold italic font-mono-num text-white/20 transition-colors duration-500 group-hover:text-[#f2682c]/40">
                        {item.num}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="mt-8 font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#f2682c] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                      {item.desc}
                    </p>

                    {/* Feature Pills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.pills.map((pill, pIdx) => (
                        <span
                          key={pIdx}
                          className="rounded-full bg-[#2e231b] border border-[#f2682c]/15 px-3 py-1 text-xs font-semibold text-zinc-300 transition-colors group-hover:border-[#f2682c]/30 group-hover:text-zinc-200"
                        >
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Interactive Arrow & Direct Link */}
                  <div className="mt-8 pt-4 flex items-center justify-between border-t border-white/5">
                    <a
                      href="/simulasi-biaya"
                      className="text-xs font-semibold text-zinc-400 group-hover:text-[#f2682c] transition-colors flex items-center gap-1.5"
                    >
                      <span>Simulasikan Biaya {item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </a>

                    <a
                      href={item.href}
                      aria-label={`Lihat portofolio ${item.title}`}
                      className="inline-flex size-10 items-center justify-center rounded-full border border-[#f2682c]/30 text-[#f2682c] transition-all duration-500 group-hover:border-[#f2682c] group-hover:bg-[#f2682c] group-hover:text-white group-hover:scale-105"
                    >
                      <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:rotate-45" />
                    </a>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      {/* Seamless Transition Gradient to Portfolio */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none" />
    </section>
  );
}
