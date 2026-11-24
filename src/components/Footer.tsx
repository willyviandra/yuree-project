"use client";

import React from "react";
import Image from "next/image";
import { companyData } from "@/data/companyData";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Shield,
  Layers,
  Heart,
} from "lucide-react";

export function Footer() {
  const { brand, services } = companyData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#060608] border-t border-white/10 pt-16 pb-12 text-zinc-400 text-xs">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 bg-black flex items-center justify-center">
                <Image
                  src="/images/logo.jpg"
                  alt="Yuree Project Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-extrabold text-lg tracking-wider text-white">
                    YUREE
                  </span>
                  <span className="font-extrabold text-lg tracking-wider text-[#f59e0b]">
                    PROJECT
                  </span>
                </div>
                <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-mono-num -mt-1">
                  {brand.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Mitra manufaktur dan eksekusi interior presisi sejak 2018. Mendukung
              4.048+ proyek terselesaikan dengan jaringan 23 workshop aktif berkapasitas
              2.690 meter per bulan di Jawa Barat, Jabodetabek, dan Bali.
            </p>

            <div className="pt-2 flex items-center gap-2 text-zinc-400 text-[11px] font-mono-num">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>23 Unit Workshop Beroperasi Penuh</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono-num">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-[#f59e0b] transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="hover:text-[#f59e0b] transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#workshop" className="hover:text-[#f59e0b] transition-colors">
                  23 Workshop Aktif
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#f59e0b] transition-colors">
                  Layanan Custom
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#f59e0b] transition-colors">
                  Galeri Portfolio
                </a>
              </li>
              <li>
                <a href="/simulasi-biaya" className="hover:text-[#f59e0b] transition-colors">
                  Kalkulator Biaya
                </a>
              </li>
            </ul>
          </div>

          {/* 5 Layanan (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono-num">
              Layanan Spesialis
            </h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.id}>
                  <a
                    href="#layanan"
                    className="hover:text-[#f59e0b] transition-colors flex items-center justify-between"
                  >
                    <span>{item.name}</span>
                    <span className="font-mono-num text-[10px] text-zinc-400">
                      {item.code}
                    </span>
                  </a>
                </li>
              ))}
              <li>
                <a href="#kemitraan" className="text-[#f59e0b] hover:underline pt-1 inline-block">
                  Kemitraan Arsitek & Agensi B2B &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Workshop Center (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider font-mono-num">
              Kontak Resmi
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {brand.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <a href={`mailto:${brand.email}`} className="hover:text-white font-mono-num">
                  {brand.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <div>
                  <div>WhatsApp: <a href={`https://wa.me/${brand.officialWA.number}`} className="text-white font-mono-num hover:underline">{brand.officialWA.display}</a></div>
                </div>
              </div>
              <div className="pt-2 flex flex-wrap gap-3 text-xs">
                <a
                  href={brand.instagram?.url || "https://www.instagram.com/yuree.project/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f59e0b] transition-colors flex items-center gap-1"
                >
                  <span>📷 @yuree.project</span>
                </a>
                <a
                  href={brand.facebook?.url || "https://www.facebook.com/yureeproject"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f59e0b] transition-colors flex items-center gap-1"
                >
                  <span>📘 {brand.facebook?.name || "Yuree Project"}</span>
                </a>
                <a
                  href={brand.threads?.url || "https://www.threads.net/@yuree.project"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#f59e0b] transition-colors flex items-center gap-1"
                >
                  <span>🧵 @yuree.project</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            &copy; 2026 <strong className="text-white">Yuree Project</strong>. All rights reserved.
            Interior Manufacturing & Execution Partner.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#121216] border border-white/10 hover:border-[#f59e0b] hover:text-[#f59e0b] text-zinc-300 transition-colors"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
