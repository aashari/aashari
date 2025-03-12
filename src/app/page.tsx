"use client";

import ThemeToggle from "@/components/ThemeToggle";
import SchemaData from "@/components/SchemaData";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectsSection from "@/sections/ProjectsSection";
import RepositoriesSection from "@/sections/RepositoriesSection";
import PublicationsSection from "@/sections/PublicationsSection";
import AwardsSection from "@/sections/AwardsSection";
import ArticlesSection from "@/sections/ArticlesSection";
import ContactSection from "@/sections/ContactSection";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen py-12">
      <ThemeToggle />
      <SchemaData />
      
      {/* Main Sections */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <RepositoriesSection />
      <PublicationsSection />
      <AwardsSection />
      <ArticlesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

