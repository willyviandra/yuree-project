"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyData } from "@/data/companyData";
import { Menu, X, ArrowUpRight, Phone, MessageSquare, ChevronDown, Factory, Building2 } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(
    pathname.startsWith("/portfolio")
      ? "portfolio"
      : pathname.startsWith("/simulasi-biaya")
      ? "simulasi-biaya"
      : "home"
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const currentActive = pathname.startsWith("/portfolio")
    ? "portfolio"
    : pathname.startsWith("/simulasi-biaya")
    ? "simulasi-biaya"
    : activeSection;

  const resolveHref = (href: string) => {
    if (isHomePage) return href;
    if (href.startsWith("#")) return `/${href}`;
    return href;
  };

  // Exact 9 items matching reference with integrated Workshop under Tentang Kami:
  // Home · Tentang Kami (Profil & 23 Workshop) · Layanan · Portfolio · Simulasi Biaya (Pill) · Kemitraan · Keunggulan · FAQ · Kontak
  const navLinks = [
    { id: "home", name: "Home", href: "#home" },
    {
      id: "tentang-kami",
      name: "Tentang Kami",
      href: "#tentang-kami",
      hasDropdown: true,
      subItems: [
        {
          name: "Profil & Rekam Jejak",
          desc: "Sejak 2018 · 4.048+ Proyek",
          href: "#tentang-kami",
          icon: Building2,
        },
        {
          name: "Jaringan 23 Workshop Aktif",
          desc: "156 Personel · 2.690m/bln",
          href: "#workshop",
          icon: Factory,
        },
      ],
    },
    { id: "layanan", name: "Layanan", href: "#layanan" },
    { id: "portfolio", name: "Portfolio", href: "#portfolio" },
    { id: "simulasi-biaya", name: "Simulasi Biaya", href: "/simulasi-biaya", isPill: true },
    { id: "kemitraan", name: "Kemitraan", href: "#kemitraan" },
    { id: "keunggulan", name: "Keunggulan", href: "#keunggulan" },
    { id: "faq", name: "FAQ", href: "#faq" },
    { id: "kontak", name: "Kontak", href: "#kontak" },
  ];

  useEffect(() => {
    // On non-home pages (e.g. /portfolio or /simulasi-biaya), lock active section to the
    // matching nav id and skip scroll-based detection entirely.
    if (!isHomePage) {
      if (pathname.startsWith("/portfolio")) {
        setActiveSection("portfolio");
      } else if (pathname.startsWith("/simulasi-biaya")) {
        setActiveSection("simulasi-biaya");
      }
      // Still track scroll for the glass header effect
      const handleScrollNonHome = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScrollNonHome, { passive: true });
      handleScrollNonHome();
      return () => window.removeEventListener("scroll", handleScrollNonHome);
    }

    // ── Homepage only: scroll-spy across all sections ──────────────────────
    const sectionMappings: { id: string; navId: string }[] = [
      { id: "home", navId: "home" },
      { id: "tentang-kami", navId: "tentang-kami" },
      { id: "workshop", navId: "tentang-kami" },
      { id: "layanan", navId: "layanan" },
      { id: "portfolio", navId: "portfolio" },
      { id: "kemitraan", navId: "kemitraan" },
      { id: "keunggulan", navId: "keunggulan" },
      { id: "faq", navId: "faq" },
      { id: "kontak", navId: "kontak" },
    ];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Check if user is scrolled to the very top
      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }

      // Check if user is near the bottom of the page -> activate "kontak"
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("kontak");
        return;
      }

      // Viewport target reference point for detection (180px below top)
      const targetPoint = 180;
      let matchedSection: string | null = null;

      for (const item of sectionMappings) {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= targetPoint && rect.bottom > targetPoint) {
            matchedSection = item.navId;
            break;
          }
        }
      }

      if (matchedSection) {
        setActiveSection(matchedSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-[#09090b]/95 backdrop-blur-2xl border-b border-white/[0.06] shadow-2xl py-3"
        : "bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/50 to-transparent py-4 lg:py-5"
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <a
            href={isHomePage ? "#home" : "/"}
            onClick={() => setActiveSection("home")}
            className="flex items-center gap-3 group shrink-0"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-white/15 bg-black flex items-center justify-center transition-all duration-300 group-hover:border-[#f59e0b]/60 group-hover:scale-105 shadow-md">
              <Image
                src="/images/logo.jpg"
                alt="Yuree Project Logo"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-wider text-white">
                  YUREE
                </span>
                <span className="font-extrabold text-base sm:text-lg tracking-wider text-[#f59e0b]">
                  PROJECT
                </span>
              </div>
              <span className="text-[9.5px] tracking-widest uppercase text-zinc-400 font-mono-num -mt-1 hidden sm:block">
                Manufacturing & Partner
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5">
            {navLinks.map((item) => {
              const isActive = currentActive === item.id;

              if (item.isPill) {
                return (
                  <div key={item.id} className="relative inline-flex flex-col items-center mx-1">
                    <a
                      href={resolveHref(item.href)}
                      onClick={() => setActiveSection(item.id)}
                      className={`px-4 py-1.5 text-[13px] font-bold rounded-full transition-all duration-200 border ${isActive
                        ? "bg-[#f2682c]/20 text-[#f2682c] border-[#f2682c] shadow-md shadow-[#f2682c]/20"
                        : "bg-[#f2682c]/15 text-[#f2682c] border-[#f2682c]/30 hover:bg-[#f2682c]/25 hover:border-[#f2682c]/50"
                        }`}
                    >
                      {item.name}
                    </a>
                    {/* Active Bold Line Underneath Pill */}
                    {isActive && (
                      <span className="absolute -bottom-2.5 inset-x-3.5 h-[3px] bg-[#f2682c] rounded-full shadow-[0_0_10px_rgba(242,104,44,0.9)]" />
                    )}
                  </div>
                );
              }

              if (item.hasDropdown && item.subItems) {
                return (
                  <div
                    key={item.id}
                    className="relative inline-flex flex-col items-center group"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <a
                      href={resolveHref(item.href)}
                      onClick={() => setActiveSection(item.id)}
                      className={`px-3.5 py-1.5 text-[13px] rounded-xl transition-all duration-200 flex items-center gap-1.5 ${isActive
                        ? "text-white font-bold bg-white/[0.08]"
                        : "text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                        }`}
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:rotate-180 transition-transform duration-200" />
                    </a>

                    {/* Active Orange Line Spanning the Exact Width of the Text */}
                    {isActive && (
                      <span className="absolute -bottom-2 inset-x-3.5 h-[3px] bg-[#f2682c] rounded-full shadow-[0_0_10px_rgba(242,104,44,0.9)]" />
                    )}

                    {/* Floating Dropdown Card */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="w-64 p-2 rounded-2xl bg-[#121216]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-1">
                        {item.subItems.map((sub, sIdx) => {
                          const IconComp = sub.icon;
                          return (
                            <a
                              key={sIdx}
                              href={resolveHref(sub.href)}
                              onClick={() => {
                                setActiveSection(item.id);
                                setDropdownOpen(false);
                              }}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.06] transition-colors group/sub"
                            >
                              <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-[#f2682c] group-hover/sub:bg-[#f2682c]/10 transition-colors shrink-0">
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div className="flex flex-col text-left">
                                <span className="text-xs font-bold text-white group-hover/sub:text-[#f2682c] transition-colors">
                                  {sub.name}
                                </span>
                                <span className="text-[11px] text-zinc-400 mt-0.5">
                                  {sub.desc}
                                </span>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={item.id} className="relative inline-flex flex-col items-center">
                  <a
                    href={resolveHref(item.href)}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-3.5 py-1.5 text-[13px] rounded-xl transition-all duration-200 ${isActive
                      ? "text-white font-bold bg-white/[0.08]"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                      }`}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                  </a>

                  {/* Active Orange Line Spanning the Exact Width of the Text */}
                  {isActive && (
                    <span className="absolute -bottom-2 inset-x-3.5 h-[3px] bg-[#f2682c] rounded-full shadow-[0_0_10px_rgba(242,104,44,0.9)]" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mid-screen Nav Items (Lg: 1024px - 1279px) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1">
            {navLinks.slice(0, 8).map((item) => {
              const isActive = currentActive === item.id;
              if (item.isPill) {
                return (
                  <div key={item.id} className="relative inline-flex flex-col items-center">
                    <a
                      href={resolveHref(item.href)}
                      onClick={() => setActiveSection(item.id)}
                      className="px-3 py-1 text-xs font-bold rounded-full bg-[#f2682c]/15 text-[#f2682c] border border-[#f2682c]/30"
                    >
                      {item.name}
                    </a>
                    {isActive && (
                      <span className="absolute -bottom-2 inset-x-2.5 h-[2.5px] bg-[#f2682c] rounded-full shadow-[0_0_8px_rgba(242,104,44,0.9)]" />
                    )}
                  </div>
                );
              }

              if (item.hasDropdown && item.subItems) {
                return (
                  <div key={item.id} className="relative inline-flex flex-col items-center group">
                    <a
                      href={resolveHref(item.href)}
                      onClick={() => setActiveSection(item.id)}
                      className={`px-2.5 py-1.5 text-xs rounded-xl transition-colors flex items-center gap-1 ${isActive
                        ? "text-white font-bold bg-white/[0.08]"
                        : "text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                        }`}
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                      <ChevronDown className="w-3 h-3 text-zinc-400 group-hover:rotate-180 transition-transform" />
                    </a>
                    {isActive && (
                      <span className="absolute -bottom-1.5 inset-x-2.5 h-[2.5px] bg-[#f2682c] rounded-full shadow-[0_0_8px_rgba(242,104,44,0.9)]" />
                    )}
                    {/* Floating Dropdown Card */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      <div className="w-60 p-2 rounded-2xl bg-[#121216]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-1">
                        {item.subItems.map((sub, sIdx) => (
                          <a
                            key={sIdx}
                            href={resolveHref(sub.href)}
                            onClick={() => setActiveSection(item.id)}
                            className="p-2 rounded-lg hover:bg-white/[0.06] text-left transition-colors"
                          >
                            <span className="text-xs font-bold text-white block">{sub.name}</span>
                            <span className="text-[10px] text-zinc-400 block">{sub.desc}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={item.id} className="relative inline-flex flex-col items-center">
                  <a
                    href={resolveHref(item.href)}
                    onClick={() => setActiveSection(item.id)}
                    className={`px-2.5 py-1.5 text-xs rounded-xl transition-colors ${isActive
                      ? "text-white font-bold bg-white/[0.08]"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                      }`}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                  </a>
                  {isActive && (
                    <span className="absolute -bottom-1.5 inset-x-2.5 h-[2.5px] bg-[#f2682c] rounded-full shadow-[0_0_8px_rgba(242,104,44,0.9)]" />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={resolveHref("#kontak")}
              onClick={() => setActiveSection("kontak")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f59e0b] hover:bg-[#d97706] text-black text-xs sm:text-[13px] font-bold uppercase tracking-wider transition-all duration-200 shadow-lg shadow-[#f59e0b]/20 hover:scale-[1.02]"
            >
              <span>Konsultasi Sekarang</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-zinc-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Buka Menu Navigasi"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#09090b]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl px-6 py-6 transition-all duration-300 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((item) => {
              const isActive = currentActive === item.id;

              if (item.hasDropdown && item.subItems) {
                return (
                  <div key={item.id} className="flex flex-col gap-1">
                    <a
                      href={resolveHref(item.href)}
                      onClick={() => {
                        setActiveSection(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`px-4 py-3 text-sm font-medium rounded-xl transition-all flex items-center justify-between ${isActive
                        ? "text-white bg-white/[0.08] border-l-4 border-[#f2682c] font-bold"
                        : "text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                        }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.name}</span>
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500" />
                    </a>
                    {/* Sub-items in mobile menu */}
                    <div className="pl-6 flex flex-col gap-1 pb-1">
                      {item.subItems.map((sub, sIdx) => {
                        const IconC = sub.icon;
                        return (
                          <a
                            key={sIdx}
                            href={resolveHref(sub.href)}
                            onClick={() => {
                              setActiveSection(item.id);
                              setMobileMenuOpen(false);
                            }}
                            className="px-3 py-2 text-xs text-zinc-400 hover:text-white flex items-center gap-2 rounded-lg hover:bg-white/[0.04] transition-colors"
                          >
                            <IconC className="w-3.5 h-3.5 text-[#f2682c]" />
                            <span>{sub.name}</span>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.id}
                  href={resolveHref(item.href)}
                  onClick={() => {
                    setActiveSection(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-3 text-sm font-medium rounded-xl transition-all flex items-center justify-between ${item.isPill
                    ? "text-[#f2682c] bg-[#f2682c]/15 border border-[#f2682c]/30 font-bold"
                    : isActive
                      ? "text-white bg-white/[0.08] border-l-4 border-[#f2682c] font-bold"
                      : "text-zinc-300 hover:text-white hover:bg-white/[0.04]"
                    }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{item.name}</span>
                  </span>
                  <ArrowUpRight
                    className={`w-4 h-4 ${item.isPill || isActive ? "text-[#f2682c]" : "text-zinc-500"
                      }`}
                  />
                </a>
              );
            })}
          </div>

          <div className="pt-6 mt-6 border-t border-white/10 flex flex-col gap-3">
            <a
              href={`https://wa.me/${companyData.brand.officialWA.number}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/15 bg-white/[0.03] text-xs font-mono-num text-zinc-200"
            >
              <Phone className="w-4 h-4 text-[#f59e0b]" />
              <span>Hotline: {companyData.brand.officialWA.display}</span>
            </a>
            <a
              href="#kontak"
              onClick={() => {
                setActiveSection("kontak");
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#f59e0b] text-black font-extrabold text-xs uppercase tracking-wider shadow-xl shadow-[#f59e0b]/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Konsultasi Sekarang</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
