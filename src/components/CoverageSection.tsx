"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

const coverageCities = [
  "Kabupaten Indramayu",
  "Kabupaten Bandung",
  "Kabupaten Bekasi",
  "Kabupaten Bogor",
  "Kabupaten Cianjur",
  "Kabupaten Cirebon",
  "Kabupaten Garut",
  "Kabupaten Karawang",
  "Kabupaten Majalaya",
  "Kabupaten Majalengka",
  "Kabupaten Purwakarta",
  "Kabupaten Subang",
  "Kabupaten Sukabumi",
  "Kabupaten Sumedang",
  "Kabupaten Tangerang",
  "Kabupaten Tasikmalaya",
  "Kabupaten Ciamis",
  "Kota Banjar",
  "Kota Bekasi",
  "Kota Cimahi",
  "Kota Depok",
  "Kota Jakarta",
  "Kota Jakarta Barat",
  "Kota Jakarta Selatan",
  "Kota Jakarta Timur",
  "Kota Jakarta Utara",
  "Kota Tangerang",
  "Kota Tangerang Selatan",
];

export function CoverageSection() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  return (
    <section id="jangkauan" className="relative py-24 lg:py-32 bg-[#09090b] text-[#f4f4f5] overflow-hidden">
      {/* Background architectural grid */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      {/* Ambient background glow */}
      <div className="absolute -left-40 top-1/4 w-96 h-96 bg-[#f2682c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-40 bottom-1/4 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          {/* Left Column: Heading, Narrative, Metrics & History */}
          <div>
            <div className="max-w-2xl text-left">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Jangkauan Operasional{" "}
                <span className="text-[#f2682c]">28 Kota</span>,{" "}
                <span className="text-[#f59e0b]">3 Provinsi</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-400">
                Portfolio 2021-2026 mencatat jangkauan project Yuree Project di 28 kota/kabupaten dan 3 provinsi (Jawa Barat, DKI Jakarta, Bali). Coverage ini didukung 23 workshop aktif untuk menjaga kapasitas pengerjaan, efisiensi produksi, dan kualitas hasil akhir.
              </p>
            </div>

            {/* 4 Stat Cards */}
            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-[#121216] p-5 transition-all duration-300 hover:border-[#f2682c]/40 hover:-translate-y-0.5">
                <div className="font-display text-3xl font-extrabold text-white">28 Kota</div>
                <div className="mt-2 text-sm font-bold text-zinc-400">Jangkauan Project</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#121216] p-5 transition-all duration-300 hover:border-[#f2682c]/40 hover:-translate-y-0.5">
                <div className="font-display text-3xl font-extrabold text-white">3 Provinsi</div>
                <div className="mt-2 text-sm font-bold text-zinc-400">Area Operasional</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#121216] p-5 transition-all duration-300 hover:border-[#f2682c]/40 hover:-translate-y-0.5">
                <div className="font-display text-3xl font-extrabold text-white">23</div>
                <div className="mt-2 text-sm font-bold text-zinc-400">Workshop Aktif</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#121216] p-5 transition-all duration-300 hover:border-[#f2682c]/40 hover:-translate-y-0.5">
                <div className="font-display text-3xl font-extrabold text-white">150+</div>
                <div className="mt-2 text-sm font-bold text-zinc-400">Tenaga Produksi dan Instalasi</div>
              </div>
            </div>

            {/* Rekam Jejak Card */}
            <div className="mt-5 rounded-2xl border border-[#f2682c]/20 bg-[#f2682c]/5 p-5">
              <h3 className="text-base font-extrabold text-white">Rekam Jejak Project 2021-2026</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                3.895 project pada periode 2021-2026 ditambah 153 project Januari-Februari 2026, membentuk total 4.048+ project.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Map Card with Floating Badge */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl bg-[#121216] group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/coverage.webp"
                  alt="Peta jangkauan operasional jasa interior Yuree Project di 28 kota Indonesia"
                  fill
                  className="scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Bottom Badge */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#121216]/90 p-5 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-[#f2682c] to-[#f59e0b] text-white shadow-lg">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-white">28 Kota</p>
                    <p className="text-xs text-zinc-400">3 Provinsi (Jabar · DKI Jakarta · Bali)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle corner accent */}
            <div className="absolute -right-3 -top-3 hidden size-16 rounded-2xl bg-gradient-to-br from-[#f2682c]/30 to-[#f59e0b]/30 blur-xl lg:block pointer-events-none" />
          </div>
        </div>

        {/* Bottom Section: 28 Cities Pills */}
        <div className="mt-12">
          <div className="rounded-3xl border border-white/10 bg-[#121216]/80 p-6 md:p-8 backdrop-blur-sm">
            <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between pb-4 border-b border-white/5">
              <div>
                <h3 className="text-xl font-extrabold text-white">Daftar Kota dan Kabupaten Coverage</h3>
                <p className="mt-1 text-sm text-zinc-400">Area project yang tercatat pada portfolio 2021-2026.</p>
              </div>
              <p className="text-sm font-extrabold text-[#f2682c] font-mono-num">28 area</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {coverageCities.map((city, idx) => {
                const isHovered = hoveredCity === city;
                return (
                  <span
                    key={idx}
                    onMouseEnter={() => setHoveredCity(city)}
                    onMouseLeave={() => setHoveredCity(null)}
                    className={`cursor-default rounded-full border px-3.5 py-2 text-xs font-semibold transition-all duration-200 ${
                      isHovered
                        ? "-translate-y-0.5 border-[#f2682c] text-[#f2682c] bg-[#f2682c]/10 shadow-sm shadow-[#f2682c]/20"
                        : "border-white/10 bg-black/40 text-zinc-400 hover:border-[#f2682c]/40 hover:text-white"
                    }`}
                  >
                    {city}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
