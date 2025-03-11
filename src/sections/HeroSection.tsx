"use client";

import Image from "next/image";
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub, FaGraduationCap } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import SocialLink from "../components/SocialLink";

export default function HeroSection() {
  return (
    <section className="section" id="hero">
      <div className="container text-center mx-auto">
        <Image 
          src="/profile.jpeg" 
          alt="Profile photo of Andi Ashari, AI Operations Expert" 
          width={150} 
          height={150} 
          className="profile-image mx-auto mb-8 shadow-lg shadow-[rgba(74,144,226,0.3)]" 
          priority 
        />
        <h1 className="text-4xl font-bold text-primary mb-6 justify-center">Andi Ashari</h1>
        <p className="text-lg text-muted mb-4">
          Tech Wanderer | AI Operations & Engineering | Cloud Innovator
        </p>
        <p className="text-md mb-6 max-w-prose mx-auto">
          Based in Indonesia, I&apos;m a Tech Wanderer and AI operations expert, specializing in cloud engineering and scalable AI solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-5 mt-10">
          <SocialLink href="https://www.linkedin.com/in/aashari/" icon={<FaLinkedin size={24} />} label="LinkedIn" ariaLabel="Visit Andi Ashari's LinkedIn profile" />
          <SocialLink href="https://www.instagram.com/ant.dhe/" icon={<FaInstagram size={24} />} label="Instagram" ariaLabel="Visit Andi Ashari's Instagram profile" />
          <SocialLink href="https://medium.com/@aashari" icon={<SiMedium size={24} />} label="Medium" ariaLabel="Read Andi Ashari's articles on Medium" />
          <SocialLink href="mailto:a.ashari1302@gmail.com" icon={<FaEnvelope size={24} />} label="Email" ariaLabel="Send an email to Andi Ashari" />
          <SocialLink href="https://github.com/aashari" icon={<FaGithub size={24} />} label="GitHub" ariaLabel="View Andi Ashari's projects on GitHub" />
          <SocialLink href="https://scholar.google.co.id/citations?user=bLmnPS8AAAAJ&hl=en" icon={<FaGraduationCap size={24} />} label="Scholar" ariaLabel="View Andi Ashari's Google Scholar profile" />
        </div>
      </div>
    </section>
  );
} 
