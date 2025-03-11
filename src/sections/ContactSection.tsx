"use client";

import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import Section from "../components/Section";
import SocialLink from "../components/SocialLink";

export default function ContactSection() {
  return (
    <Section id="contact" title="Let&apos;s Connect" icon={<FaEnvelope className="icon-primary mr-2" size={24} />}>
      <p className="mb-6">
        I&apos;m always open to discussing new projects, opportunities, or collaborations. Based in Jakarta, Indonesia, I&apos;d love to hear from you—feel free to reach out!
      </p>
      <div className="flex flex-wrap justify-center gap-4 md:gap-5 mt-6">
        <SocialLink href="https://www.linkedin.com/in/aashari/" icon={<FaLinkedin size={24} />} label="LinkedIn" ariaLabel="Visit Andi Ashari's LinkedIn profile" />
        <SocialLink href="https://github.com/aashari" icon={<FaGithub size={24} />} label="GitHub" ariaLabel="Visit Andi Ashari's GitHub profile" />
        <SocialLink href="https://medium.com/@aashari" icon={<SiMedium size={24} />} label="Medium" ariaLabel="Read Andi Ashari's articles on Medium" />
        <SocialLink href="mailto:a.ashari1302@gmail.com" icon={<FaEnvelope size={24} />} label="Email" ariaLabel="Send an email to Andi Ashari" />
      </div>
    </Section>
  );
} 
