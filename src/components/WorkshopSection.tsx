"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { companyData } from "@/data/companyData";
import { Factory, Search } from "lucide-react";

export function WorkshopSection() {
  const { workshops, workshopSummary } = companyData;
  const [selectedRegion, setSelectedRegion] = useState<string>("Semua Wilayah");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            setScrollY(rect.top);
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

  const filteredWorkshops = useMemo(() => {
    return workshops.filter((ws) => {
      const matchRegion =
        selectedRegion === "Semua Wilayah" || ws.region === selectedRegion;
      const matchSearch =
        ws.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ws.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ws.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (ws.specialty && ws.specialty.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchRegion && matchSearch;
    });
  }, [workshops, selectedRegion, searchQuery]);

  const currentTotalWorkers = useMemo(
    () => filteredWorkshops.reduce((acc, curr) => acc + curr.workers, 0),
    [filteredWorkshops]
  );
  const currentTotalCapacity = useMemo(
    () => filteredWorkshops.reduce((acc, curr) => acc + curr.capacityPerMonth, 0),
    [filteredWorkshops]
  );

  const regionTabs = [
    { label: "Semua Wilayah", count: 23, workers: 156, cap: 2690 },
    { label: "Bandung", count: 13, workers: 93, cap: 1560 },
    { label: "Bali", count: 5, workers: 34, cap: 630 },
    { label: "Parahyangan Timur", count: 5, workers: 29, cap: 500 },
  ];

  // Subtle parallax offset for background atmosphere
  const bgParallax = scrollY * 0.05;

  return (
    <section
      id="workshop"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[#09090b] overflow-hidden"
    >
      {/* Background Architectural Grid with Subtle Parallax */}
      <div
        className="absolute inset-0 architectural-grid opacity-25 pointer-events-none will-change-transform"
        style={{
          transform: `translate3d(0, ${bgParallax}px, 0)`,
        }}
      />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#f2682c]/4 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#f2682c]/10 border border-[#f2682c]/30 text-xs font-mono-num text-[#f2682c] uppercase tracking-wider mb-4">
              <Factory className="w-3.5 h-3.5" />
              <span>Tentang Kami · Infrastruktur Manufaktur Skalabilitas Tinggi</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Jaringan <span className="text-[#f2682c]">23 Workshop Aktif</span> Terintegrasi
            </h2>
            <p className="mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              Dengan total kapasitas gabungan{" "}
              <strong className="text-white font-mono-num">2.690 meter per bulan</strong>{" "}
              dan <strong className="text-white font-mono-num">156 personel workshop</strong>,
              kami mengeliminasi risiko penumpukan pesanan dan keterlambatan serah terima proyek.
            </p>
          </div>

          {/* Aggregate Snapshot Metrics */}
          <div className="grid grid-cols-3 gap-3 shrink-0">
            <div className="p-3.5 rounded-xl bg-[#121216] border border-white/10 text-center">
              <div className="text-xs text-zinc-400">Total Unit</div>
              <div className="text-xl font-bold font-mono-num text-[#f2682c]">
                {workshopSummary.totalWorkshops}
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#121216] border border-white/10 text-center">
              <div className="text-xs text-zinc-400">Personel WS</div>
              <div className="text-xl font-bold font-mono-num text-white">
                {workshopSummary.totalWorkers}
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#121216] border border-white/10 text-center">
              <div className="text-xs text-zinc-400">Kapasitas/Bln</div>
              <div className="text-xl font-bold font-mono-num text-white">
                {workshopSummary.totalCapacity}m
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar: Tabs & Search Input */}
        <div className="mt-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#121216] border border-white/10">
            {regionTabs.map((tab) => {
              const isSelected = selectedRegion === tab.label;
              return (
                <button
                  key={tab.label}
                  onClick={() => setSelectedRegion(tab.label)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#f2682c] text-white shadow-md shadow-[#f2682c]/20"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-mono-num ${
                      isSelected
                        ? "bg-black/20 text-white"
                        : "bg-white/[0.06] text-zinc-400"
                    }`}
                  >
                    {tab.count} WS
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari nama, kota, atau spesialisasi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#121216] border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#f2682c] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Summary Filter Meta Info */}
        <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-zinc-400 px-1">
          <div>
            <span>
              Menampilkan: <strong className="text-white">{filteredWorkshops.length}</strong> dari 23 Workshop
            </span>
          </div>
          <div className="flex items-center gap-4 font-mono-num">
            <span>
              Pekerja: <strong className="text-white">{currentTotalWorkers} orang</strong>
            </span>
            <span>
              Kapasitas Terfilter: <strong className="text-[#f2682c]">{currentTotalCapacity} m'/bln</strong>
            </span>
          </div>
        </div>

        {/* Clean Corporate Table (NO Green Dummy Badges, NO AI Slop) */}
        <div className="mt-4 rounded-2xl bg-[#121216] border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-zinc-300 min-w-[700px]">
              <thead className="bg-[#181820] text-zinc-400 uppercase tracking-wider text-[11px] font-mono-num border-b border-white/10">
                <tr>
                  <th scope="col" className="px-5 py-3.5 font-bold">
                    Kode WS
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-bold">
                    Workshop & Wilayah
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-bold">
                    Kota/Kabupaten
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-center">
                    Tim Terdata
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-bold text-right">
                    Kapasitas Bulanan
                  </th>
                  <th scope="col" className="px-5 py-3.5 font-bold">
                    Spesialisasi Fabrikasi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans">
                {filteredWorkshops.map((ws) => (
                  <tr
                    key={ws.id}
                    className="hover:bg-white/[0.03] transition-colors group"
                  >
                    {/* Kode WS */}
                    <td className="px-5 py-4 whitespace-nowrap">
                      <span className="font-mono-num font-bold text-xs text-[#f2682c] px-2.5 py-1 rounded bg-[#f2682c]/10 border border-[#f2682c]/30">
                        {ws.code}
                      </span>
                    </td>

                    {/* Nama & Wilayah */}
                    <td className="px-5 py-4 whitespace-nowrap">
                      <div className="font-semibold text-white group-hover:text-[#f2682c] transition-colors">
                        {ws.name}
                      </div>
                      <div className="text-[11px] text-zinc-400 mt-0.5">
                        Area {ws.region}
                      </div>
                    </td>

                    {/* Kota */}
                    <td className="px-5 py-4 whitespace-nowrap text-zinc-300">
                      {ws.city}
                    </td>

                    {/* Tim / Personel */}
                    <td className="px-5 py-4 whitespace-nowrap text-center font-mono-num">
                      <span className="px-2.5 py-1 rounded bg-white/[0.04] text-zinc-200">
                        {ws.workers} orang
                      </span>
                    </td>

                    {/* Kapasitas */}
                    <td className="px-5 py-4 whitespace-nowrap text-right font-mono-num font-bold text-white">
                      <span className="text-zinc-400 text-[11px] font-normal mr-1">
                        hingga
                      </span>
                      {ws.capacityPerMonth} m
                    </td>

                    {/* Spesialisasi */}
                    <td className="px-5 py-4 text-zinc-300">
                      <span className="text-xs">
                        {ws.specialty || "Custom Cabinetry & Finishing"}
                      </span>
                    </td>
                  </tr>
                ))}

                {filteredWorkshops.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-6 py-12 text-center text-zinc-500 text-sm"
                    >
                      Tidak ada workshop yang cocok dengan kata kunci &quot;{searchQuery}&quot;.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Clean Corporate Footer Bar (No Green Pulse Dot) */}
          <div className="p-4 bg-[#14141a] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="text-[#f2682c] font-bold">✓</span>
              <span>Seluruh 23 workshop beroperasi penuh dengan alokasi manufaktur paralel tanpa antrean.</span>
            </div>
            <a
              href="/simulasi-biaya"
              className="text-[#f2682c] hover:text-amber-400 font-semibold underline underline-offset-4 transition-colors"
            >
              Simulasikan estimasi waktu pengerjaan proyek Anda &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Seamless Transition Gradient to Layanan (Services) Section */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0c0c10] to-transparent pointer-events-none" />
    </section>
  );
}
