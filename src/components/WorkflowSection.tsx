"use client";

import React, { useState, useRef, useEffect } from "react";
import { companyData } from "@/data/companyData";

export function WorkflowSection() {
  const { workflowSteps } = companyData;
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);

  // Scroll tracking to calculate sticky progress bar percentage
  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = rect.height - windowHeight;

      if (totalHeight <= 0) return;

      const currentScroll = -rect.top;
      const pct = Math.max(0, Math.min(100, Math.round((currentScroll / totalHeight) * 100)));
      setScrollProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Entrance observer
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="alur-kerja"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[#343434] overflow-hidden scroll-mt-20 border-t border-white/5"
    >
      {/* Aurora Ambient Drift Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute -left-[10%] top-[-15%] h-[55vh] w-[55vh] rounded-full blur-[110px]"
          style={{ background: "rgba(238,170,85,0.08)" }}
        />
        <div
          className="absolute right-[-12%] top-[10%] h-[50vh] w-[50vh] rounded-full blur-[120px]"
          style={{ background: "rgba(238,170,85,0.06)" }}
        />
        <div
          className="absolute bottom-[-20%] left-[30%] h-[48vh] w-[48vh] rounded-full blur-[120px]"
          style={{ background: "rgba(238,170,85,0.05)" }}
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
          {/* Eyebrow Pill */}
          <div className="flex justify-center mb-6">
            <div
              className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white border"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.10)",
              }}
            >
              Alur Kerja
            </div>
          </div>

          <h2 className="text-[2rem] font-extrabold leading-[1.08] tracking-tight md:text-[3rem] lg:text-[3.4rem] text-white">
            Alur Kerja{" "}
            <em className="italic text-[#EEAA55] font-serif not-italic">
              Project
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
            Setiap project dikerjakan melalui alur yang jelas agar hasil akhir lebih terukur, rapi, dan sesuai kebutuhan.
          </p>
        </div>

        {/* ── Sticky Progress Bar ──────────────────────── */}
        <div
          className="sticky top-24 z-30 mx-auto mt-10 flex max-w-md items-center gap-4 rounded-full border px-5 py-3 shadow-2xl backdrop-blur-xl"
          style={{
            borderColor: "rgba(255,255,255,0.12)",
            background: "rgba(43,43,43,0.85)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          }}
        >
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-zinc-400">
            Progress
          </span>
          <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-zinc-800">
            <div
              className="absolute inset-0 rounded-full transition-all duration-300"
              style={{
                width: `${scrollProgress}%`,
                background: "linear-gradient(90deg, #EEAA55, #EEAA55)",
              }}
            />
          </div>
          <span className="w-12 text-right font-extrabold text-base text-[#EEAA55] font-mono-num">
            {scrollProgress}%
          </span>
        </div>

        {/* ── 10 Step Compact Timeline ─────────────────────────────────── */}
        <ol className="relative mx-auto mt-14 max-w-5xl">
          {/* Vertical timeline line */}
          <div
            className="absolute left-[26px] top-0 bottom-0 w-px lg:left-1/2 lg:-translate-x-px"
            style={{ background: "linear-gradient(to bottom, rgba(238,170,85,0.3), rgba(238,170,85,0.1), transparent)" }}
          />

          {workflowSteps.map((step, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <li
                key={step.step}
                className="relative grid pb-10 last:pb-0 lg:grid-cols-2 lg:gap-x-16 lg:pb-14"
              >
                {/* Center Pin */}
                <div className="absolute left-[26px] top-1 z-20 -translate-x-1/2 lg:left-1/2">
                  <span
                    className="relative flex size-10 items-center justify-center rounded-full border-2 ring-4 ring-[#343434] font-mono-num text-sm font-bold"
                    style={{
                      background: "#2b2b2b",
                      borderColor: "rgba(238,170,85,0.50)",
                      color: "#EEAA55",
                    }}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Step Content Card — Compact */}
                <div
                  className={`pl-16 relative z-10 ${
                    isEven
                      ? "lg:col-start-2 lg:row-start-1 lg:pl-16"
                      : "lg:pl-0 lg:col-start-1 lg:pr-16 lg:text-right"
                  }`}
                >
                  <div
                    className="group w-full rounded-2xl border p-5 text-left transition-all duration-300 hover:border-[#EEAA55]/40"
                    style={{
                      background: "rgba(43,43,43,0.75)",
                      borderColor: "rgba(255,255,255,0.08)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {/* Step Number & Title Row */}
                    <div className={`flex items-start gap-4 ${!isEven ? "lg:flex-row-reverse lg:text-right" : ""}`}>
                      <span className="text-3xl font-semibold italic leading-none text-[#EEAA55]/80 font-serif shrink-0">
                        {step.step}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#EEAA55] transition-colors leading-snug">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
