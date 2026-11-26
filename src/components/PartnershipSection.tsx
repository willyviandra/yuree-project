"use client";

import React, { useState, useRef, useEffect } from "react";
import { companyData, PartnerSegment } from "@/data/companyData";
import { ArrowRight } from "lucide-react";

// CircleCheck SVG (matches reference tabler-icon-circle-check)
function CircleCheck({ className }: { className?: string }) {
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
    >
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M9 12l2 2l4 -4" />
    </svg>
  );
}

// WhatsApp SVG
function WhatsAppIcon({ className }: { className?: string }) {
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
    >
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}

// Feature benefit cards per segment (valueProps[] from data)
function FeatureCard({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 transition-colors hover:border-[#EEAA55]/30">
      <CircleCheck className="mb-5 w-6 h-6 text-[#EEAA55]" />
      <p className="text-sm font-bold leading-6 text-white/90">{text}</p>
    </div>
  );
}

export function PartnershipSection() {
  const { partnership, brand } = companyData;
  const [activeSegmentId, setActiveSegmentId] = useState<"architect" | "agency" | "influencer">(
    "architect"
  );
  const [visible, setVisible] = useState(false);
  const [panelVisible, setPanelVisible] = useState(true);

  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const activeSegment: PartnerSegment =
    partnership.segments.find((s) => s.id === activeSegmentId) ||
    partnership.segments[0];

  // Scroll-based entrance animation
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Tab switch animation
  const handleTabChange = (id: "architect" | "agency" | "influencer") => {
    if (id === activeSegmentId) return;
    setPanelVisible(false);
    setTimeout(() => {
      setActiveSegmentId(id);
      setPanelVisible(true);
    }, 180);
  };

  // Stat cards for all segments (from hero metrics)
  const stats = [
    { value: "4.048+", label: "Project Selesai" },
    { value: "2.690m", label: "Kapasitas/Bulan" },
    { value: "150+", label: "Tenaga Ahli" },
  ];

  return (
    <section
      id="kemitraan"
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "#343434" }}
    >
      {/* Radial gradient overlay top */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(238,170,85, 0.08), transparent 70%)",
        }}
      />

      {/* Aurora drift blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute -left-[10%] top-[-15%] h-[55vh] w-[55vh] rounded-full blur-[110px]"
          style={{ background: "rgba(238,170,85,0.10)", animation: "aurora-drift 18s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[-12%] top-[10%] h-[50vh] w-[50vh] rounded-full blur-[120px]"
          style={{ background: "rgba(238,170,85,0.08)", animation: "aurora-drift 24s ease-in-out infinite", animationDelay: "-7s" }}
        />
        <div
          className="absolute bottom-[-20%] left-[30%] h-[48vh] w-[48vh] rounded-full blur-[120px]"
          style={{ background: "rgba(238,170,85,0.06)", animation: "aurora-drift 20s ease-in-out infinite", animationDelay: "-14s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="max-w-3xl mx-auto text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <h2 className="font-extrabold text-[2rem] leading-tight tracking-tight md:text-[3rem] lg:text-[3.4rem] text-white">
            Kemitraan Strategis Yuree Project
          </h2>
          <p
            className="mt-6 text-base leading-8 md:text-lg text-white/70"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            Yuree Project tidak hanya melayani customer umum, tetapi juga menjadi partner produksi
            dan eksekusi untuk arsitek, agensi, influencer, dan mitra bisnis.
          </p>
        </div>

        {/* 3-Tab Switcher */}
        <div
          className="mt-10 pb-2 sm:flex sm:justify-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
          }}
        >
          <div
            className="grid w-full grid-cols-3 gap-1 rounded-full border p-1 sm:inline-grid sm:w-auto sm:min-w-[24rem] sm:gap-2"
            style={{ borderColor: "rgba(255,255,255,0.10)", background: "rgba(255,255,255,0.10)" }}
          >
            {partnership.segments.map((seg) => {
              const isActive = activeSegmentId === seg.id;
              return (
                <button
                  key={seg.id}
                  type="button"
                  onClick={() => handleTabChange(seg.id)}
                  className={`shrink-0 rounded-full py-2 px-3 text-xs font-bold transition-all duration-200 sm:px-4 min-[420px]:text-sm ${
                    isActive
                      ? "text-white shadow-sm"
                      : "text-white/70 hover:text-white"
                  }`}
                  style={
                    isActive
                      ? { background: "linear-gradient(135deg, #EEAA55 0%, #EEAA55 100%)" }
                      : {}
                  }
                >
                  {seg.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Panel Card */}
        <div
          ref={panelRef}
          className="mt-8"
          style={{
            opacity: panelVisible && visible ? 1 : 0,
            transform: panelVisible && visible ? "translateY(0)" : "translateY(10px)",
            transition: "opacity 0.35s ease, transform 0.35s ease",
          }}
        >
          <div
            className="grid items-center gap-8 rounded-[1.75rem] border border-white/10 p-6 md:p-10 lg:grid-cols-[0.85fr_1fr] backdrop-blur-xl"
            style={{
              background: "rgba(43,43,43,0.90)",
              boxShadow: "0 28px 90px rgba(238,170,85,0.18), 0 0 0 1px rgba(238,170,85,0.06)",
            }}
          >
            {/* Left column */}
            <div>
              {/* Orange pill badge */}
              <div
                className="inline-flex rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-white"
                style={{ background: "linear-gradient(135deg, #EEAA55 0%, #EEAA55 100%)" }}
              >
                {activeSegment.badge}
              </div>

              <h3 className="mt-6 font-extrabold text-3xl leading-tight tracking-tight text-white md:text-[3rem]">
                {activeSegment.title}
              </h3>

              <p className="mt-5 text-base leading-8 text-white/70">
                {activeSegment.description}
              </p>

              {/* 3 stat cards */}
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-colors hover:border-[#EEAA55]/40"
                  >
                    <div className="font-extrabold text-2xl text-white">{stat.value}</div>
                    <div className="mt-1 text-xs font-bold uppercase leading-5 tracking-wide text-white/55">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="mt-8">
                <a
                  href={`https://wa.me/${brand.partnershipWA.number}?text=${encodeURIComponent(
                    activeSegment.whatsappMessage
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: "linear-gradient(135deg, #EEAA55 0%, #EEAA55 100%)" }}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Ajukan Kemitraan
                </a>
              </div>
            </div>

            {/* Right column: 2-col feature benefit grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {activeSegment.valueProps.map((vp, idx) => (
                <FeatureCard key={idx} text={vp} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Aurora drift keyframe */}
      <style>{`
        @keyframes aurora-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(3%, 2%) scale(1.04); }
          66% { transform: translate(-2%, 3%) scale(0.97); }
        }
      `}</style>
    </section>
  );
}
