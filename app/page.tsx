import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { Syllabus } from "@/components/Syllabus";
import { Logistics } from "@/components/Logistics";
import { Instructor } from "@/components/Instructor";
import { PricingCTA } from "@/components/PricingCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { BackgroundShader } from "@/components/BackgroundShader";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-transparent text-zinc-100 selection:bg-zinc-800 selection:text-zinc-100 overflow-x-hidden">
      {/* Dynamic Viewport GLSL Background Shader */}
      <BackgroundShader />

      <Navbar />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <Syllabus />
        <Logistics />
        <Instructor />
        <PricingCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
