"use client";

import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CostSimulator } from "@/components/CostSimulator";
import { ArrowLeft, Calculator, RotateCcw, Sun } from "lucide-react";

export default function SimulasiBiayaPage() {
  return (
    <main className="min-h-screen bg-[#343434] text-[#F9F9F9] relative overflow-x-hidden">
      {/* Sticky Glassmorphism Header */}
      <Navbar />

      {/* Background Aurora / Ambient Glow Drift (Brand warm orange tones) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[-10%] h-[55vh] w-[55vh] rounded-full blur-[130px] bg-[#EEAA55]/8" />
        <div className="absolute right-[-10%] top-[25%] h-[50vh] w-[50vh] rounded-full blur-[140px] bg-[#EEAA55]/6" />
        <div className="absolute bottom-[-15%] left-[30%] h-[48vh] w-[48vh] rounded-full blur-[130px] bg-[#EEAA55]/5" />
      </div>

      {/* Subtle Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-28 sm:pt-36 pb-8">
        {/* Top Header Bar matching reference layout: Icon + Title + PRO + Subtitle + Back Link */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#EEAA55] to-[#EEAA55] p-0.5 shadow-lg shadow-[#EEAA55]/20 shrink-0 flex items-center justify-center">
              <div className="w-full h-full bg-[#2b2b2b] rounded-[14px] flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#EEAA55]" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
                  Kalkulator Interior Custom
                </h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#EEAA55]/15 text-[#EEAA55] border border-[#EEAA55]/35">
                  PRO
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Simulasi Biaya Transparan &amp; Terstandarisasi · Yuree Project
              </p>
            </div>
          </div>

          {/* Right Action: Reload + Theme + Back Link (matching reference) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (typeof window !== "undefined") window.location.reload();
              }}
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
              title="Muat Ulang Simulasi"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all cursor-pointer"
              title="Mode Tampilan"
            >
              <Sun className="w-4 h-4" />
            </button>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1 text-[#EEAA55]" />
              <span>Kembali ke Beranda</span>
            </Link>
          </div>
        </div>

        {/* Dedicated Cost Simulator Component */}
        <CostSimulator isStandalone={true} />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
