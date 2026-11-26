import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutStats } from "@/components/AboutStats";
import { WorkshopSection } from "@/components/WorkshopSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { PartnershipSection } from "@/components/PartnershipSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { CoverageSection } from "@/components/CoverageSection";
import { PartnersSection } from "@/components/PartnersSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#343434] text-[#F9F9F9]">
      {/* 1. Sticky Glassmorphism Header */}
      <Navbar />

      {/* 2. Hero Section with Key Metrics Bar */}
      <Hero />

      {/* 3. About & 6 Core Verification Statistics */}
      <AboutStats />

      {/* 4. Complete 23 Active Workshops Table & Regional Filter */}
      <WorkshopSection />

      {/* 5. 5 Custom Interior Services & Detailed Technical Specs */}
      <ServicesSection />

      {/* 6. Portfolio Showcase with Lightbox Preview Modal */}
      <PortfolioSection />

      {/* 7. Strategic Partnership Ecosystem (Architect, Agency, Influencer) */}
      <PartnershipSection />

      {/* 8. Keunggulan / Mengapa Memilih Yuree Project */}
      <WhyUsSection />

      {/* 9. 10-Step Interactive Execution Workflow */}
      <WorkflowSection />

      {/* 10. Operational Coverage (3 Provinces, 28 Cities) */}
      <CoverageSection />

      {/* 11. Dipercaya Berbagai Mitra dan Klien (14 Official Partners Marquee) */}
      <PartnersSection />

      {/* 12. FAQ Accordion (8 Questions & Detailed Answers) */}
      <FaqSection />

      {/* 12. Consultation Form & Dual WhatsApp QR Codes */}
      <ContactSection />

      {/* 13. Footer */}
      <Footer />
    </main>
  );
}
