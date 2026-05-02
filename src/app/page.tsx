import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ModelShowcase } from "@/components/sections/ModelShowcase";
import { PromptEngine } from "@/components/sections/PromptEngine";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { CTA } from "@/components/sections/CTA";
import LightRays from "@/components/LightRays";
import PixelBlast from "@/components/PixelBlast";

export const metadata: Metadata = {
  title: "Cosmos AI | The Future of Generative Cinema",
  description:
    "Experience cosmos-gen-4, the world's most advanced latent engine for professional creators. Mathematical precision meets cinematic artistry.",
  openGraph: {
    title: "Cosmos AI | Professional Generative Intelligence",
    description: "Architecting reality with 175B parameter neural networks.",
    images: ["/img/beauty-digital-art-through-immersive-experiences.jpg"],
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="z-10 pt-24 relative">
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.75]">
          <LightRays
            raysOrigin="top-center"
            raysColor="#f8efbd"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
          />
        </div>
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.75]">
          <PixelBlast
            variant="square"
            pixelSize={2}
            color="#e3ffd6"
            patternScale={1.5}
            patternDensity={0.4}
            enableRipples={true}
            rippleSpeed={0.4}
            rippleThickness={0.15}
            rippleIntensityScale={0.6}
            speed={0.02}
            transparent
            edgeFade={0.6}
          />
        </div>
        <Hero />
        <div className="relative z-10 overflow-hidden">
          <ModelShowcase />
          <PromptEngine />
          <Features />
          <Testimonials />
          <Pricing />
          <CTA />
          <Footer />
        </div>
      </main>
    </>
  );
}
