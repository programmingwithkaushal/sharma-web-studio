import LusionCanvas from "@/components/LusionCanvas";
import LusionCursor from "@/components/LusionCursor";
import LusionHeader from "@/components/LusionHeader";
import LusionHero from "@/components/LusionHero";
import StudioIntro from "@/components/StudioIntro";
import LusionProjects from "@/components/LusionProjects";
import LusionReel from "@/components/LusionReel";
import SpeedShowcase from "@/components/SpeedShowcase";
import WhyWebsite from "@/components/WhyWebsite";
import CostCalculator from "@/components/CostCalculator";
import Founders from "@/components/Founders";
import OperationalCharter from "@/components/OperationalCharter";
import ProcessSteps from "@/components/ProcessSteps";
import Pricing from "@/components/Pricing";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative bg-[#F7F8F9] dark:bg-[#101112] text-[#101112] dark:text-[#F5F4F0] selection:bg-[#C5F36A] selection:text-[#101112] transition-colors duration-200">
      {/* Signature 3D WebGL Digital Sculpture Engine */}
      <LusionCanvas />

      {/* Signature Fluid Difference Cursor */}
      <LusionCursor />

      {/* Main Structural Foreground */}
      <div className="relative z-10 flex flex-col min-h-screen pointer-events-none">
        {/* Section 01: Premium Floating Navigation */}
        <LusionHeader />

        <main className="flex-grow pointer-events-auto">
          {/* Section 02: Cinematic Hero */}
          <LusionHero />

          {/* Section 03: Trusted Studio Introduction */}
          <StudioIntro />

          {/* Section 04: Selected Work / Project Gallery */}
          <LusionProjects />

          {/* Section 05: Studio Philosophy */}
          <LusionReel />

          {/* Section 06: Experience The Speed Difference */}
          <SpeedShowcase />

          {/* Section 07: Strategic Comparison */}
          <WhyWebsite />

          {/* Section 08: Interactive Project Configurator */}
          <CostCalculator />

          {/* Section 09: Founder Showcase */}
          <Founders />

          {/* Section 10: Studio Operational Charter */}
          <OperationalCharter />

          {/* Section 11: The White-Glove Customer Journey */}
          <ProcessSteps />

          {/* Section 12: Pricing Packages */}
          <Pricing />

          {/* Section 13: FAQ */}
          <FaqSection />

          {/* Section 14: Contact and Consultation */}
          <ContactSection />
        </main>

        {/* Section 15: Premium Multi-Column Footer */}
        <div className="pointer-events-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
