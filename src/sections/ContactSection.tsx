"use client";

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import Section from "../components/Section";
import SocialLink from "../components/SocialLink";

export default function ContactSection() {
  return (
    <Section 
      title="Get In Touch" 
      icon={<FaEnvelope className="icon-primary mr-2" size={24} />} 
      id="contact"
      layout="block"
      align="center"
      spacing="md"
    >
      <div className="flex flex-wrap justify-center gap-4">
        <SocialLink 
          href="https://www.linkedin.com/in/aashari/" 
          icon={<FaLinkedin size={24} />} 
          label="LinkedIn" 
          ariaLabel="Visit Andi Ashari's LinkedIn profile" 
          size="lg"
          variant="default"
        />
        <SocialLink 
          href="https://github.com/aashari" 
          icon={<FaGithub size={24} />} 
          label="GitHub" 
          ariaLabel="Visit Andi Ashari's GitHub profile" 
          size="lg"
          variant="default"
        />
        <SocialLink 
          href="https://medium.com/@aashari" 
          icon={<SiMedium size={24} />} 
          label="Medium" 
          ariaLabel="Read Andi Ashari's articles on Medium" 
          size="lg"
          variant="default"
        />
        <SocialLink 
          href="mailto:a.ashari1302@gmail.com" 
          icon={<FaEnvelope size={24} />} 
          label="Email" 
          ariaLabel="Send an email to Andi Ashari" 
          size="lg"
          variant="default"
        />
      </div>
    </Section>
  );
} 
