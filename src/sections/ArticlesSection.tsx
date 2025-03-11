"use client";

import { SiMedium } from "react-icons/si";
import Section from "../components/Section";
import SocialLink from "../components/SocialLink";

export default function ArticlesSection() {
  return (
    <Section 
      title="Recent Articles" 
      icon={<SiMedium className="icon-primary mr-2" size={24} />} 
      id="articles"
      titleSize="lg"
    >
      <div className="space-y-6 grid grid-cols-1">
        <div className="card interactive-card w-full text-center">
          <p className="mb-4">I share insights on AI, cloud engineering, and technology innovation on Medium. Check out my latest articles!</p>
          <div className="mt-4">
            <SocialLink href="https://medium.com/@aashari" icon={<SiMedium size={18} />} label="Read on Medium" ariaLabel="Read Andi Ashari's articles on Medium" />
          </div>
        </div>
      </div>
    </Section>
  );
} 
