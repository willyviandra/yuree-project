"use client";

import React, { useRef, useState, useEffect } from "react";
import { companyData } from "@/data/companyData";

// Inline SVGs matching reference tabler-icons
function TimelineIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 16l6 -7l5 5l5 -6" />
      <path d="M14 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M9 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M3 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M19 8a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06" />
      <path d="M15 19l2 2l4 -4" />
    </svg>
  );
}

function FactoryIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 21h18" />
      <path d="M5 21v-12l5 4v-4l5 4h4" />
      <path d="M19 21v-8l-1.436 -9.574a.5 .5 0 0 0 -.495 -.426h-1.145a.5 .5 0 0 0 -.494 .418l-1.43 8.582" />
      <path d="M9 17h1" />
      <path d="M14 17h1" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 9a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2l0 -9" />
      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 12l0 .01" />
      <path d="M3 13a20 20 0 0 0 18 0" />
    </svg>
  );
}

export function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const whyUsItems = [
    {
      title: "Sistem Produksi Terstruktur",
      desc: "Setiap project berjalan dengan alur kerja yang jelas agar hasil lebih rapi, konsisten, dan sesuai spesifikasi.",
      icon: TimelineIcon,
    },
    {
      title: "Kontrol Kualitas Premium",
      desc: "Setiap proses dikontrol agar hasil akhir tetap stabil dari produksi sampai pemasangan.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Jaringan Workshop Aktif",
      desc: "Dukungan workshop aktif membantu pengerjaan project lebih scalable dan efisien.",
      icon: FactoryIcon,
    },
    {
      title: "Tenaga Ahli Berpengalaman",
      desc: "Didukung tenaga produksi, finishing, dan instalasi yang terbiasa menangani project interior.",
      icon: UsersIcon,
    },
    {
      title: "Eksekusi Lebih Efisien",
      desc: "Koordinasi kerja yang baik membantu mempercepat proses tanpa mengorbankan kualitas.",
      icon: SparklesIcon,
    },
    {
      title: "Siap untuk Kemitraan",
      desc: "Sistem Yuree Project cocok untuk arsitek, agensi, influencer, dan pengembangan bisnis interior.",
      icon: BriefcaseIcon,
    },
  ];

  return (
    <section
      id="keunggulan"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[#343434] overflow-hidden scroll-mt-20"
    >
      {/* Target anchor for why-us */}
      <div id="why-us" className="absolute -top-24" />

      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />

      {/* Subtle Aurora Drift Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute -left-[10%] top-[-15%] h-[55vh] w-[55vh] rounded-full blur-[110px]"
          style={{ background: "rgba(238,170,85,0.08)" }}
        />
        <div
          className="absolute right-[-12%] top-[10%] h-[50vh] w-[50vh] rounded-full blur-[120px]"
          style={{ background: "rgba(238,170,85,0.06)" }}
        />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="max-w-3xl mx-auto text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <h2 className="text-[2rem] font-extrabold leading-[1.08] tracking-tight md:text-[3rem] lg:text-[3.4rem] text-white">
            Mengapa Memilih{" "}
            <em className="italic text-[#EEAA55] font-serif not-italic">
              Yuree Project?
            </em>
          </h2>
          <p
            className="mt-6 text-base leading-8 md:text-lg text-zinc-400"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            Sistem kerja Yuree Project dirancang untuk menjaga kualitas, kapasitas, dan konsistensi eksekusi interior.
          </p>
        </div>

        {/* 6 Grid Cards with Clean Borders matching reference */}
        <div
          className="mt-14 grid border-t border-white/10 md:grid-cols-2"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s",
          }}
        >
          {whyUsItems.map((item, idx) => {
            const IconC = item.icon;
            const isRightCol = idx % 2 === 1;
            return (
              <div
                key={idx}
                className={`flex items-start gap-4 border-b border-white/10 py-6 md:px-8 transition-colors hover:bg-white/[0.02] ${
                  isRightCol ? "md:border-l border-white/10" : ""
                }`}
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEAA55]/10 text-[#EEAA55] border border-[#EEAA55]/20">
                  <IconC className="size-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
