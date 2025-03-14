"use client";

import { HiSparkles } from "react-icons/hi";
import { FaFilm, FaTerminal } from "react-icons/fa";
import { SiTerraform, SiTypescript, SiGo, SiPython } from "react-icons/si";
import Section from "../components/Section";
import TechBadge from "../components/TechBadge";
import FadeInSection from "@/animations/FadeInSection";
import AnimatedCard from "@/animations/AnimatedCard";
import StaggerContainer from "@/animations/StaggerContainer";

export default function AboutSection() {
  return (
    <Section 
      title="Who I Am" 
      icon={<HiSparkles className="icon-primary mr-2" size={24} />} 
      id="about"
      layout="grid"
      columns={1}
      spacing="md"
      titleSize="lg"
    >
      <FadeInSection delay={0.1} y={50}>
        <AnimatedCard className="w-full">
          <h3 className="section-title text-xl mb-4">Professional Focus</h3>
          <ul className="space-y-2">
            <li>Role: AI Operations and Engineering</li>
            <li>Expertise: Cloud infrastructure, automation, and scalable AI solutions</li>
            <li>Mission: Building scalable, AI-driven systems to revolutionize the digital landscape.</li>
          </ul>
        </AnimatedCard>
      </FadeInSection>
      
      <FadeInSection delay={0.3} y={50}>
        <AnimatedCard className="w-full">
          <h3 className="section-title text-xl mb-4 flex items-center gap-2">
            <FaFilm className="icon-primary" /> Fun Facts
          </h3>
          <ul className="space-y-2">
            <li>Sci-Fi Obsession: I draw inspiration from sci-fi universes like Interstellar—its blend of space, tech, and human emotion fuels my innovative thinking in tech.</li>
            <li>Coffee Fuel: I&apos;ve lost count of my daily cups, but coffee keeps me coding!</li>
            <li>Next Adventure: Diving deeper into AI-powered infrastructure to build the future.</li>
          </ul>
        </AnimatedCard>
      </FadeInSection>
      
      <FadeInSection delay={0.5} className="w-full mt-8 flex justify-center col-span-full">
        <StaggerContainer 
          className="flex flex-wrap justify-center gap-4 md:gap-5"
          delayIncrement={0.1}
          initialDelay={0.1}
        >
          <TechBadge label="Terraform" icon={<SiTerraform size={20} />} ariaLabel="Skilled in Terraform" color="primary" rounded="md" />
          <TechBadge label="TypeScript" icon={<SiTypescript size={20} />} ariaLabel="Skilled in TypeScript" color="primary" rounded="md" />
          <TechBadge label="Golang" icon={<SiGo size={20} />} ariaLabel="Skilled in Golang" color="primary" rounded="md" />
          <TechBadge label="Python" icon={<SiPython size={20} />} ariaLabel="Skilled in Python" color="primary" rounded="md" />
          <TechBadge label="Bash" icon={<FaTerminal size={20} />} ariaLabel="Skilled in Bash" color="primary" rounded="md" />
        </StaggerContainer>
      </FadeInSection>
    </Section>
  );
} 
