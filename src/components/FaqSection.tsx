"use client";

import React, { useState, useRef, useEffect } from "react";
import { companyData } from "@/data/companyData";

// Chevron down icon matching reference tabler-icon-chevron-down
function ChevronDownIcon({ className }: { className?: string }) {
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
      <path d="M6 9l6 6l6 -6" />
    </svg>
  );
}

export function FaqSection() {
  const { faqs } = companyData;
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || "faq-1");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-[#343434] overflow-hidden scroll-mt-20 border-t border-white/5"
    >
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-20 pointer-events-none" />

      {/* Subtle Aurora Ambient Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-15">
        <div
          className="absolute right-[-10%] top-1/4 h-[50vh] w-[50vh] rounded-full blur-[130px]"
          style={{ background: "rgba(238,170,85,0.08)" }}
        />
        <div
          className="absolute left-[-10%] bottom-1/4 h-[45vh] w-[45vh] rounded-full blur-[120px]"
          style={{ background: "rgba(238,170,85,0.06)" }}
        />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[0.82fr_1fr] items-start">
        {/* Left Column: Heading & Subtitle */}
        <div
          className="max-w-3xl text-left"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <h2 className="text-[2rem] font-extrabold leading-[1.08] tracking-tight md:text-[3rem] lg:text-[3.4rem] text-white">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p
            className="mt-6 text-base leading-8 md:text-lg text-zinc-400"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            Jawaban singkat untuk kebutuhan layanan, survey, kemitraan, dan coverage Yuree Project.
          </p>
        </div>

        {/* Right Column: Accordion Card matching reference */}
        <div
          className="rounded-3xl border border-white/10 bg-[#2b2b2b]/90 px-6 shadow-2xl backdrop-blur-xl md:px-8 divide-y divide-white/10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="transition-colors">
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleAccordion(faq.id)}
                    className="flex flex-1 w-full items-center justify-between py-5 text-left text-base font-bold transition cursor-pointer select-none gap-4"
                  >
                    <span
                      className={`transition-colors ${
                        isOpen ? "text-[#EEAA55]" : "text-white hover:text-[#EEAA55]"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDownIcon
                      className={`size-5 shrink-0 transition-transform duration-300 text-[#EEAA55] ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div className="overflow-hidden pb-5 leading-7 text-sm text-zinc-400 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
