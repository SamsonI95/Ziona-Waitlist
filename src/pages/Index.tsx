import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FoundationSection from "@/components/FoundationSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import ZionaSection from "@/components/ZionaSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-15 lg:pt-20">
        <HeroSection />
        <FoundationSection />
        <WhatWeDoSection />
        <ZionaSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
