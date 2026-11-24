"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

interface PartnerItem {
  name: string;
  role: string;
  logo: string;
  href?: string;
}

const row1Partners: PartnerItem[] = [
  {
    name: "Home Putra Interior",
    role: "Strategic Partner",
    logo: "/images/brand/home putra interior.webp",
    href: "https://www.instagram.com/homeputrainterior/",
  },
  {
    name: "Home Interior Bandung",
    role: "Interior Account",
    logo: "/images/brand/home-interior-bandung-logo.png",
    href: "https://www.instagram.com/home_interior_bandung/",
  },
  {
    name: "Savoy Interior",
    role: "Interior Network",
    logo: "/images/brand/savoy interior.png",
    href: "https://www.instagram.com/savoy.interior/",
  },
  {
    name: "Patner Interior",
    role: "Brand Partner",
    logo: "/images/brand/patner interior.jpg",
    href: "https://www.instagram.com/partner_interior.id/",
  },
  {
    name: "Kitchenset Bandung Barat",
    role: "Kitchen Set Account",
    logo: "/images/brand/kitchenset bandung barat.jpg",
    href: "https://www.instagram.com/kitchenset_bandungbarat93/",
  },
  {
    name: "Akbar Interior",
    role: "Interior Partner",
    logo: "/images/brand/akbar interior.jpg",
    href: "https://www.instagram.com/akbar_interior.id/",
  },
  {
    name: "Mewah Interior",
    role: "Premium Interior Account",
    logo: "/images/brand/Mewah interior.webp",
    href: "https://www.instagram.com/mewah.interior/",
  },
];

const row2Partners: PartnerItem[] = [
  {
    name: "Garis Interior",
    role: "Design Partner",
    logo: "/images/brand/garis interior.png",
    href: "https://www.instagram.com/garis_interior.id/",
  },
  {
    name: "Porto Interior",
    role: "Business Partner",
    logo: "/images/brand/porto interior.jpg",
    href: "https://www.instagram.com/porto.interior/",
  },
  {
    name: "Pusat Interior",
    role: "Interior Account",
    logo: "/images/brand/pusat interior.jpg",
    href: "https://www.instagram.com/pusat_interiorcustom/",
  },
  {
    name: "Furniture Cimahi",
    role: "Furniture Account",
    logo: "/images/brand/furniture cimahi.png",
    href: "https://www.instagram.com/furniture_cimahi/",
  },
  {
    name: "Argo Interior",
    role: "Interior Partner",
    logo: "/images/brand/argo_interior.jpg",
    href: "https://www.instagram.com/argo_interior.id/",
  },
  {
    name: "Dekor Interior",
    role: "Interior Partner",
    logo: "/images/brand/Dekorinterior.jpg",
    href: "https://www.instagram.com/dekorinterior_/",
  },
  {
    name: "Broto Interior",
    role: "Interior Partner",
    logo: "/images/brand/broto interior.png",
    href: "https://www.instagram.com/homeputrainterior/",
  },
];

function PartnerChip({
  partner,
  isActive,
  onSelect,
}: {
  partner: PartnerItem;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      onClick={onSelect}
      className={`group/chip flex w-[16.5rem] shrink-0 items-center gap-4 rounded-2xl border px-5 py-4 transition-all duration-300 cursor-pointer ${
        isActive
          ? "border-[#f2682c] bg-[#171413] shadow-[0_0_24px_rgba(242,104,44,0.22)] ring-1 ring-[#f2682c]/40"
          : "border-white/10 bg-[#121216] hover:border-[#f2682c]/50 hover:bg-[#181820]"
      }`}
    >
      <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/80">
        <Image
          src={partner.logo}
          alt={`Logo ${partner.name}`}
          width={56}
          height={56}
          className={`h-full w-full object-contain p-2 transition-all duration-300 ${
            isActive ? "scale-105 grayscale-0" : "grayscale group-hover/chip:grayscale-0 group-hover/chip:scale-105"
          }`}
        />
      </div>
      <div className="min-w-0 flex-1">
        <h4
          className={`truncate font-display text-sm font-bold transition-colors ${
            isActive ? "text-[#f2682c]" : "text-white group-hover/chip:text-[#f2682c]"
          }`}
        >
          {partner.name}
        </h4>
        <p className="mt-0.5 truncate text-xs text-zinc-400">{partner.role}</p>
      </div>
    </div>
  );
}

export function PartnersSection() {
  const [visible, setVisible] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<string>("Patner Interior");
  const sectionRef = useRef<HTMLElement>(null);

  // Entrance animation observer
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Duplicate arrays to ensure seamless infinite looping
  const row1Doubled = [...row1Partners, ...row1Partners, ...row1Partners];
  const row2Doubled = [...row2Partners, ...row2Partners, ...row2Partners];

  return (
    <section
      id="mitra"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[#09090b] text-[#f4f4f5] overflow-hidden border-t border-white/5"
    >
      {/* Clean ambient background glow drifts without complex animations */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-[10%] top-[-10%] h-[50vh] w-[50vh] rounded-full blur-[120px] bg-[#f2682c]/5" />
        <div className="absolute right-[-10%] top-[20%] h-[50vh] w-[50vh] rounded-full blur-[130px] bg-[#f59e0b]/5" />
        <div className="absolute bottom-[-15%] left-[30%] h-[45vh] w-[45vh] rounded-full blur-[120px] bg-[#f2682c]/4" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl mx-auto text-center"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Eyebrow Pill */}
          <div className="flex justify-center mb-5">
            <div
              className="rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white border"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.10)",
              }}
            >
              Mitra Resmi
            </div>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Dipercaya Berbagai{" "}
            <em className="font-serif italic text-[#f2682c] not-italic">
              Mitra
            </em>{" "}
            dan Klien
          </h2>
          <p
            className="mt-4 text-base sm:text-lg leading-relaxed text-zinc-400"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
            }}
          >
            Kolaborasi, inovasi, dan pertumbuhan menjadi fondasi Yuree Project dalam membangun ekosistem interior yang berkelanjutan.
          </p>
        </div>
      </div>

      {/* 2-Row Infinite Marquee Tracks with Edge Mask Fade */}
      <div
        className="relative z-10 mt-14 flex flex-col gap-5 overflow-hidden mask-fade-x"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
        }}
      >
        {/* Row 1: Leftward scroll */}
        <div className="flex w-full overflow-hidden select-none">
          <div className="animate-marquee flex gap-5 shrink-0 py-2">
            {row1Doubled.map((partner, idx) => (
              <PartnerChip
                key={`r1-${idx}`}
                partner={partner}
                isActive={selectedPartner === partner.name}
                onSelect={() => setSelectedPartner(partner.name)}
              />
            ))}
          </div>
        </div>

        {/* Row 2: Rightward scroll (reverse) */}
        <div className="flex w-full overflow-hidden select-none">
          <div className="animate-marquee-reverse flex gap-5 shrink-0 py-2">
            {row2Doubled.map((partner, idx) => (
              <PartnerChip
                key={`r2-${idx}`}
                partner={partner}
                isActive={selectedPartner === partner.name}
                onSelect={() => setSelectedPartner(partner.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
