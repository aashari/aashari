"use client";

import SchemaData from "@/components/SchemaData";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-12">
        <SchemaData />

        {/* Main Sections */}
        <HeroSection />
        <AboutSection />
        <Footer />
      </main>
      <ScrollToTopButton />
    </>
  );
}

