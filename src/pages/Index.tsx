import React from "react";
// Impor semua section
import HeaderSection from "@/components/sections/HeaderSection";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import TechWorkflowSection from "@/components/sections/TechWorkflowSection";
import AboutSection from "@/components/sections/AboutSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";
import { FloatingButtons } from "@/components/FloatingButtons"; // Impor tombol floating

const Index: React.FC = () => {
  // Semua state (showScrollTop) dan fungsi (scrollToTop, openWhatsApp)
  // sudah dipindahkan ke FloatingButtons.tsx atau HeaderSection.tsx/CTASection.tsx

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* 1. Header */}
      <HeaderSection />

      {/* 2. Main Content Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <TechWorkflowSection />
        <CTASection />
      </main>

      {/* 3. Footer */}
      <FooterSection />

      {/* 4. Floating Buttons (WA & Scroll to Top) */}
      <FloatingButtons />
    </div>
  );
};

export default Index;