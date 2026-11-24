"use client";

import React, { useState, useRef, useEffect } from "react";
import { companyData } from "@/data/companyData";

// Inline WhatsApp SVG
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

// Phone SVG
function PhoneIcon({ className }: { className?: string }) {
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
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
  );
}

// Mail SVG
function MailIcon({ className }: { className?: string }) {
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
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
      <path d="M3 7l9 6l9 -6" />
    </svg>
  );
}

// MapPin SVG
function MapPinIcon({ className }: { className?: string }) {
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
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
    </svg>
  );
}

// Instagram SVG
function InstagramIcon({ className }: { className?: string }) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

// Facebook SVG
function FacebookIcon({ className }: { className?: string }) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// Threads / Social SVG
function ThreadsIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
    </svg>
  );
}

export function ContactSection() {
  const { brand } = companyData;
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("Kitchen Set");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Halo Yuree Project, saya ingin konsultasi interior:
• Nama: ${name || "-"}
• WhatsApp: ${phone || "-"}
• Kategori Kebutuhan: ${category}
• Lokasi Proyek: ${location || "-"}
• Pesan: ${message || "-"}

Mohon info ketersediaan jadwal survei lokasi dan konsultasi teknisnya. Terima kasih.`;

    const waLink = `https://wa.me/${brand.officialWA.number}?text=${encodeURIComponent(formatted)}`;
    window.open(waLink, "_blank");
  };

  return (
    <section
      id="kontak"
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden scroll-mt-20"
      style={{ background: "#17110C" }}
    >
      {/* Target anchor for contact */}
      <div id="contact" className="absolute -top-24" />

      {/* Radial gradient overlay top matching reference */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(242, 104, 44, 0.08), transparent 70%)",
        }}
      />

      {/* Aurora drift ambient blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute -left-[10%] top-[-15%] h-[55vh] w-[55vh] rounded-full blur-[110px]"
          style={{ background: "rgba(242,104,44,0.10)", animation: "aurora-drift 18s ease-in-out infinite" }}
        />
        <div
          className="absolute right-[-12%] top-[10%] h-[50vh] w-[50vh] rounded-full blur-[120px]"
          style={{ background: "rgba(220,80,20,0.08)", animation: "aurora-drift 24s ease-in-out infinite", animationDelay: "-7s" }}
        />
        <div
          className="absolute bottom-[-20%] left-[30%] h-[48vh] w-[48vh] rounded-full blur-[120px]"
          style={{ background: "rgba(251,146,60,0.06)", animation: "aurora-drift 20s ease-in-out infinite", animationDelay: "-14s" }}
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
              Kontak
            </div>
          </div>

          <h2 className="text-[2rem] font-extrabold leading-[1.08] tracking-tight md:text-[3rem] lg:text-[3.4rem] text-white">
            Mulai Project Interior Anda Bersama{" "}
            <em className="italic text-[#f2682c] font-serif not-italic">
              Yuree Project
            </em>
          </h2>

          <p
            className="mt-6 text-base leading-8 md:text-lg text-white/70"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            Konsultasikan kebutuhan interior atau kemitraan Anda bersama tim Yuree Project.
          </p>
        </div>

        {/* ── GRID 1: Form (Kiri) & Informasi Kontak (Kanan) ──────────────────── */}
        <div
          className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.78fr] items-stretch"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          {/* Form */}
          <form
            onSubmit={handleFormSubmit}
            className="rounded-3xl p-6 md:p-8 border shadow-2xl flex flex-col justify-between"
            style={{
              background: "rgba(26,20,15,0.95)",
              borderColor: "rgba(255,255,255,0.10)",
            }}
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold text-white">
                Nama
                <input
                  required
                  type="text"
                  placeholder="Nama Anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="flex h-12 w-full rounded-2xl border px-4 text-sm text-white shadow-sm outline-none transition placeholder:text-zinc-500 focus:border-[#f2682c] focus:ring-2 focus:ring-[#f2682c]/30"
                  style={{
                    background: "rgba(0,0,0,0.50)",
                    borderColor: "rgba(255,255,255,0.12)",
                  }}
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-white">
                Nomor WhatsApp
                <input
                  required
                  type="tel"
                  inputMode="numeric"
                  placeholder="08xx xxxx xxxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex h-12 w-full rounded-2xl border px-4 text-sm text-white shadow-sm outline-none transition placeholder:text-zinc-500 focus:border-[#f2682c] focus:ring-2 focus:ring-[#f2682c]/30"
                  style={{
                    background: "rgba(0,0,0,0.50)",
                    borderColor: "rgba(255,255,255,0.12)",
                  }}
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-white">
                Kategori kebutuhan
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="h-12 w-full rounded-2xl border px-4 pr-10 text-sm text-white shadow-sm outline-none transition focus:border-[#f2682c] focus:ring-2 focus:ring-[#f2682c]/30 cursor-pointer appearance-none"
                    style={{
                      background: "rgba(0,0,0,0.50)",
                      borderColor: "rgba(255,255,255,0.12)",
                    }}
                  >
                    <option value="Kitchen Set" className="bg-[#121216] text-white">Kitchen Set</option>
                    <option value="Bedroom" className="bg-[#121216] text-white">Bedroom</option>
                    <option value="Living Room" className="bg-[#121216] text-white">Living Room / Backdrop TV</option>
                    <option value="Wardrobe" className="bg-[#121216] text-white">Wardrobe / Lemari</option>
                    <option value="Bawah Tangga" className="bg-[#121216] text-white">Area Bawah Tangga</option>
                    <option value="Kemitraan Arsitek / Agensi" className="bg-[#121216] text-white">Kemitraan Arsitek / Agensi</option>
                  </select>
                  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400">
                    ▼
                  </div>
                </div>
              </label>

              <label className="grid gap-2 text-sm font-bold text-white">
                Lokasi project
                <input
                  type="text"
                  placeholder="Kota / area project"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex h-12 w-full rounded-2xl border px-4 text-sm text-white shadow-sm outline-none transition placeholder:text-zinc-500 focus:border-[#f2682c] focus:ring-2 focus:ring-[#f2682c]/30"
                  style={{
                    background: "rgba(0,0,0,0.50)",
                    borderColor: "rgba(255,255,255,0.12)",
                  }}
                />
              </label>

              <label className="grid gap-2 text-sm font-bold text-white md:col-span-2">
                Pesan
                <textarea
                  rows={4}
                  placeholder="Ceritakan kebutuhan interior atau kemitraan Anda"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="flex min-h-32 w-full rounded-2xl border px-4 py-3 text-sm text-white shadow-sm outline-none transition placeholder:text-zinc-500 focus:border-[#f2682c] focus:ring-2 focus:ring-[#f2682c]/30"
                  style={{
                    background: "rgba(0,0,0,0.50)",
                    borderColor: "rgba(255,255,255,0.12)",
                  }}
                />
              </label>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all duration-300 text-white shadow-glow hover:-translate-y-0.5 h-12 px-7 mt-6 w-full cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #f2682c 0%, #f59e0b 100%)",
                boxShadow: "0 4px 20px rgba(242,104,44,0.30)",
              }}
            >
              <WhatsAppIcon className="size-5" />
              <span>Kirim via WhatsApp</span>
            </button>
          </form>

          {/* Aside: Informasi Kontak */}
          <aside
            className="rounded-[1.75rem] border p-6 text-white backdrop-blur-xl md:p-8 flex flex-col justify-between"
            style={{
              background: "rgba(30,22,15,0.90)",
              borderColor: "rgba(255,255,255,0.10)",
              boxShadow: "0 28px 90px rgba(242,104,44,0.16), 0 0 0 1px rgba(242,104,44,0.05)",
            }}
          >
            <div>
              <h3 className="text-2xl font-bold tracking-tight">Informasi Kontak</h3>
              <div className="mt-8 grid gap-4">
                {/* Kontak Official WhatsApp */}
                <a
                  href={`https://wa.me/${brand.officialWA.number}?text=${encodeURIComponent(
                    "Halo Yuree Project, saya ingin konsultasi interior."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-w-0 gap-4 rounded-2xl p-5 transition hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <PhoneIcon className="mt-0.5 size-5 shrink-0 text-[#f2682c]" />
                  <span className="min-w-0 text-sm leading-7 text-white/75">
                    <span className="block font-bold text-white">WhatsApp Official</span>
                    <span className="break-words font-mono-num">{brand.officialWA.display}</span>
                  </span>
                </a>

                {/* Instagram */}
                <a
                  href={brand.instagram?.url || "https://www.instagram.com/yuree.project/"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-w-0 gap-4 rounded-2xl p-5 transition hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <InstagramIcon className="mt-0.5 size-5 shrink-0 text-[#f2682c]" />
                  <span className="min-w-0 text-sm leading-7 text-white/75">
                    <span className="block font-bold text-white">Instagram</span>
                    <span className="break-words font-mono-num">
                      {brand.instagram?.handle ? `@${brand.instagram.handle}` : "@yuree.project"}
                    </span>
                  </span>
                </a>

                {/* Facebook */}
                <a
                  href={brand.facebook?.url || "https://www.facebook.com/yureeproject"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-w-0 gap-4 rounded-2xl p-5 transition hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <FacebookIcon className="mt-0.5 size-5 shrink-0 text-[#f2682c]" />
                  <span className="min-w-0 text-sm leading-7 text-white/75">
                    <span className="block font-bold text-white">Facebook</span>
                    <span className="break-words font-mono-num">{brand.facebook?.name || "Yuree Project dan 1 lainnya"}</span>
                  </span>
                </a>

                {/* Threads */}
                <a
                  href={brand.threads?.url || "https://www.threads.net/@yuree.project"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-w-0 gap-4 rounded-2xl p-5 transition hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <ThreadsIcon className="mt-0.5 size-5 shrink-0 text-[#f2682c]" />
                  <span className="min-w-0 text-sm leading-7 text-white/75">
                    <span className="block font-bold text-white">Threads</span>
                    <span className="break-words font-mono-num">{brand.threads?.handle || "yuree.project"}</span>
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${brand.email}`}
                  className="flex min-w-0 gap-4 rounded-2xl p-5 transition hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <MailIcon className="mt-0.5 size-5 shrink-0 text-[#f2682c]" />
                  <span className="min-w-0 break-words text-sm leading-7 text-white/75">
                    {brand.email}
                  </span>
                </a>

                {/* Alamat */}
                <a
                  href={brand.mapsEmbedUrl || "https://maps.google.com"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex min-w-0 gap-4 rounded-2xl p-5 transition hover:bg-white/15"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <MapPinIcon className="mt-0.5 size-5 shrink-0 text-[#f2682c]" />
                  <span className="min-w-0 break-words text-sm leading-7 text-white/75">
                    {brand.address}
                  </span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
