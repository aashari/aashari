"use client";

import ThemeToggle from "@/components/ThemeToggle";
import SchemaData from "@/components/SchemaData";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen py-12">
      <ThemeToggle />
      <SchemaData />
      
      {/* Main Sections */}
      <HeroSection />
      <AboutSection />
      <Footer />
    </main>
  );
}

