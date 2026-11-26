import LusionCanvas from "@/components/LusionCanvas";
import LusionCursor from "@/components/LusionCursor";
import LusionHeader from "@/components/LusionHeader";
import LusionHero from "@/components/LusionHero";
import LusionProjects from "@/components/LusionProjects";
import LusionReel from "@/components/LusionReel";
import WhyWebsite from "@/components/WhyWebsite";
import CostCalculator from "@/components/CostCalculator";
import Founders from "@/components/Founders";
import ProcessSteps from "@/components/ProcessSteps";
import Pricing from "@/components/Pricing";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative bg-black text-white selection:bg-white selection:text-black">
      {/* Lusion Signature Interactive 3D WebGL Fluid Chrome Sphere */}
      <LusionCanvas />

      {/* Lusion Interactive Dynamic Cursor */}
      <LusionCursor />

      {/* Main Structural Foreground */}
      <div className="relative z-10 flex flex-col min-h-screen pointer-events-none">
        <LusionHeader />
        <main className="flex-grow pointer-events-auto">
          <LusionHero />
          <LusionProjects />
          <LusionReel />
          <WhyWebsite />
          <CostCalculator />
          <Founders />
          <ProcessSteps />
          <Pricing />
          <FaqSection />
          <ContactSection />
        </main>
        <div className="pointer-events-auto">
          <Footer />
        </div>
      </div>
    </div>
  );
}
