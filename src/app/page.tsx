"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaTerminal, FaBrain, FaAws, FaGoogle, FaFilm, FaBook, FaTrophy, FaArrowUp, FaGraduationCap } from "react-icons/fa";
import { SiMedium, SiTerraform, SiTypescript, SiGo, SiPython } from "react-icons/si";
import { HiSparkles } from "react-icons/hi";
import Script from "next/script";
import Section from "./components/Section";
import { useState, useEffect } from "react";

export default function Home() {
  // State for Back to Top button
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Effect to handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      // Back to Top button visibility
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // JSON-LD structured data for Person schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Andi Ashari",
    "jobTitle": "AI Operations and Engineering Expert",
    "description": "Tech Wanderer and AI operations expert, specializing in cloud engineering and scalable AI solutions.",
    "image": "https://andi.ltd/profile.jpeg",
    "sameAs": [
      "https://www.linkedin.com/in/aashari/",
      "https://github.com/aashari",
      "https://www.instagram.com/ant.dhe/",
      "https://medium.com/@aashari",
      "https://scholar.google.co.id/citations?user=bLmnPS8AAAAJ&hl=en"
    ],
    "knowsAbout": [
      "AI Operations",
      "Cloud Engineering",
      "Terraform",
      "TypeScript",
      "Golang",
      "Python",
      "Bash"
    ],
    "url": "https://andi.ltd",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jakarta",
      "addressCountry": "Indonesia"
    }
  };

  // JSON-LD structured data for Brainy Buddy project
  const brainyBuddySchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Brainy Buddy",
    "description": "An AI chatbot built with NodeJS, MongoDB, GCP, Terraform, and OpenAI API, serving over 35,000 users on LINE and Telegram.",
    "applicationCategory": "Communication",
    "operatingSystem": "Any",
    "url": "https://brainybuddy.app",
    "creator": {
      "@type": "Person",
      "name": "Andi Ashari"
    }
  };

  // JSON-LD structured data for publications
  const publicationSchema1 = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": "A Design of Crowd-Based Corruption Prevention System in Indonesia",
    "author": {
      "@type": "Person",
      "name": "Andi Ashari"
    },
    "datePublished": "2019-08-01",
    "publisher": {
      "@type": "Organization",
      "name": "IEEE"
    },
    "url": "https://ieeexplore.ieee.org/document/8843748"
  };

  const publicationSchema2 = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "headline": "Development of a Web Based Corruption Case Mapping Using Machine Learning",
    "author": {
      "@type": "Person",
      "name": "Andi Ashari"
    },
    "datePublished": "2018-11-01",
    "publisher": {
      "@type": "Organization",
      "name": "IEEE"
    },
    "url": "https://ieeexplore.ieee.org/document/8528142"
  };

  return (
    <main className="min-h-screen">
      {/* JSON-LD Structured Data */}
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Script
        id="schema-brainy-buddy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brainyBuddySchema) }}
      />
      <Script
        id="schema-publication-1"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationSchema1) }}
      />
      <Script
        id="schema-publication-2"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(publicationSchema2) }}
      />

      {/* Hero Section */}
      <section className="section mt-24" id="hero">
        <div className="container text-center mx-auto">
          <Image 
            src="/profile.jpeg" 
            alt="Profile photo of Andi Ashari, AI Operations Expert" 
            width={150} 
            height={150} 
            className="rounded-full mx-auto mb-8 shadow-lg shadow-[rgba(74,144,226,0.3)]" 
            priority 
          />
          <h1 className="text-4xl font-bold text-[var(--primary)] mb-6 justify-center">Andi Ashari</h1>
          <p className="text-lg text-[var(--muted)] mb-4">
            Tech Wanderer | AI Operations & Engineering | Cloud Innovator
          </p>
          <p className="text-md mb-10 max-w-prose mx-auto">
            Based in Indonesia, I&apos;m a Tech Wanderer and AI operations expert, specializing in cloud engineering and scalable AI solutions. Explore my work in cloud infrastructure and sci-fi-inspired innovation, or <Link href="#contact" className="text-[var(--primary)] underline">connect with me</Link> to discuss opportunities.
          </p>
          <div className="mb-10">
            <Link href="#projects" className="button">
              View My Projects
            </Link>
          </div>
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

      {/* About Section */}
      <Section title="Who I Am" icon={<HiSparkles className="text-[var(--primary)] mr-2" />} id="about">
        <div className="space-y-10">
          <div className="card w-full">
            <h3 className="text-xl mb-4">Professional Focus</h3>
            <ul className="space-y-2">
              <li>Role: AI Operations and Engineering</li>
              <li>Expertise: Cloud infrastructure, automation, and scalable AI solutions</li>
              <li>Mission: Building scalable, AI-driven systems to revolutionize the digital landscape. <Link href="#projects" className="text-[var(--primary)] underline">See my projects</Link> to learn more.</li>
            </ul>
          </div>
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaFilm className="text-[var(--primary)]" /> Fun Facts</h3>
            <ul className="space-y-2">
              <li>Sci-Fi Obsession: I draw inspiration from sci-fi universes like Interstellar—its blend of space, tech, and human emotion fuels my innovative thinking in tech.</li>
              <li>Coffee Fuel: I&apos;ve lost count of my daily cups, but coffee keeps me coding!</li>
              <li>Next Adventure: Diving deeper into AI-powered infrastructure to build the future.</li>
            </ul>
          </div>
          <div className="w-full mt-8 flex justify-center">
            <div className="flex flex-wrap justify-center gap-4 md:gap-5">
              <TechBadge label="Terraform" icon={<SiTerraform size={20} />} ariaLabel="Skilled in Terraform" />
              <TechBadge label="TypeScript" icon={<SiTypescript size={20} />} ariaLabel="Skilled in TypeScript" />
              <TechBadge label="Golang" icon={<SiGo size={20} />} ariaLabel="Skilled in Golang" />
              <TechBadge label="Python" icon={<SiPython size={20} />} ariaLabel="Skilled in Python" />
              <TechBadge label="Bash" icon={<FaTerminal size={20} />} ariaLabel="Skilled in Bash" />
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="My Projects" icon={<HiSparkles className="text-[var(--primary)] mr-2" />} id="projects">
        <div className="space-y-10">
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <FaBrain className="text-[var(--primary)]" /> 
              Brainy Buddy
            </h3>
            <p className="mb-4">An AI chatbot built with NodeJS, MongoDB, GCP, Terraform, and OpenAI API, serving over 35,000 users on LINE and Telegram with 1,400-1,500 daily active users.</p>
            <ul className="space-y-2">
              <li>Full-stack development with NodeJS and MongoDB</li>
              <li>Integrated OpenAI API for conversational capabilities</li>
              <li>Deployed on GCP using Terraform</li>
              <li>Optimized for high user engagement and performance</li>
            </ul>
            <div className="mt-4">
              <SocialLink href="https://brainybuddy.app" icon={<FaGoogle size={20} />} label="Visit Website" ariaLabel="Visit Brainy Buddy website" />
            </div>
          </div>
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaAws className="text-[var(--primary)]" /> Boilerplate Lambda TypeScript</h3>
            <p className="mb-4">A template for AWS Lambda projects using TypeScript, featuring AWS Secrets, DynamoDB, and Datadog metrics for serverless applications.</p>
            <ul className="space-y-2">
              <li>Terraform for infrastructure management</li>
              <li>Structured directory for efficient development</li>
              <li>Enhanced monitoring with Datadog</li>
            </ul>
            <div className="mt-4">
              <SocialLink href="https://github.com/aashari/boilerplate-lambda-typescript" icon={<FaGithub size={20} />} label="View on GitHub" ariaLabel="View Boilerplate Lambda TypeScript on GitHub" />
            </div>
          </div>
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaAws className="text-[var(--primary)]" /> AWS Static Website Terraform Module</h3>
            <p className="mb-4">A Terraform module for deploying static websites on AWS S3 and CloudFront, with custom domain support and CloudFront functions.</p>
            <ul className="space-y-2">
              <li>Supports Cloudflare and Route53 for custom domains</li>
              <li>Includes CloudFront access logs and URL redirection</li>
              <li>Configurable for various deployment scenarios</li>
            </ul>
            <div className="mt-4">
              <SocialLink href="https://github.com/aashari/terraform-aws-static-website" icon={<FaGithub size={20} />} label="View on GitHub" ariaLabel="View AWS Static Website Terraform Module on GitHub" />
            </div>
          </div>
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaGoogle className="text-[var(--primary)]" /> Terraform GCP Cloud Run</h3>
            <p className="mb-4">A Terraform module for deploying containerized applications on Google Cloud Run, automating resource setup and configurations.</p>
            <ul className="space-y-2">
              <li>Automates Google Container Images and Service Accounts</li>
              <li>Configurable container settings (CPU, memory, concurrency)</li>
              <li>Outputs docker image URL and service endpoint</li>
            </ul>
            <div className="mt-4">
              <SocialLink href="https://github.com/aashari/terraform-gcp-cloud-run" icon={<FaGithub size={20} />} label="View on GitHub" ariaLabel="View Terraform GCP Cloud Run on GitHub" />
            </div>
          </div>
        </div>
      </Section>

      {/* Publications Section */}
      <Section title="Publications" icon={<HiSparkles className="text-[var(--primary)] mr-2" />} id="publications">
        <div className="space-y-10">
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="text-[var(--primary)]" /> A Design of Crowd-Based Corruption Prevention System in Indonesia</h3>
            <p className="mb-4">Published in the 2019 International Conference on Information Management and Technology (ICIMTech). Developed a decision support system for corruption prevention using heuristic analysis and Google Map API.</p>
            <div className="mt-4">
              <SocialLink href="https://ieeexplore.ieee.org/document/8843748" icon={<FaBook size={20} />} label="Read Publication" ariaLabel="Read A Design of Crowd-Based Corruption Prevention System in Indonesia" />
            </div>
          </div>
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="text-[var(--primary)]" /> Development of a Web Based Corruption Case Mapping Using Machine Learning</h3>
            <p className="mb-4">Published in the 2018 International Conference on Information Management and Technology (ICIMTech). Built a web application using Backpropagation ANN (96.91% accuracy) to map corruption cases in Indonesia.</p>
            <div className="mt-4">
              <SocialLink href="https://ieeexplore.ieee.org/document/8528142" icon={<FaBook size={20} />} label="Read Publication" ariaLabel="Read Development of a Web Based Corruption Case Mapping Using Machine Learning" />
            </div>
          </div>
        </div>
      </Section>

      {/* Awards Section */}
      <Section title="Awards" icon={<FaTrophy className="text-[var(--primary)] mr-2" />} id="awards">
        <div className="space-y-10">
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaTrophy className="text-[var(--primary)]" /> Top Team at Ericsson Hackathon</h3>
            <p className="mb-4">Recognized for developing an innovative solution that addressed real-world challenges in telecommunications and connectivity.</p>
          </div>
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaTrophy className="text-[var(--primary)]" /> Runner-up at Kurio Hackathon</h3>
            <p className="mb-4">Awarded for creating a cutting-edge news aggregation and personalization system using machine learning algorithms.</p>
          </div>
        </div>
      </Section>

      {/* Recent Articles Section */}
      <Section title="Recent Articles" icon={<SiMedium className="text-[var(--primary)] mr-2" />} id="articles">
        <div className="space-y-10">
          <div className="card w-full text-center">
            <p className="mb-4">I share insights on AI, cloud engineering, and technology innovation on Medium. Check out my latest articles!</p>
            <div className="mt-4">
              <SocialLink href="https://medium.com/@aashari" icon={<SiMedium size={24} />} label="Read on Medium" ariaLabel="Read Andi Ashari's articles on Medium" />
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Let&apos;s Connect" icon={<FaEnvelope className="inline-block mr-2" />}>
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

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${!showBackToTop ? 'invisible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-[var(--border)] text-center">
        <p className="text-sm text-[var(--muted)] max-w-prose mx-auto">
          © {new Date().getFullYear()} Andi Ashari. All rights reserved. |{" "}
          <i>&quot;Innovation distinguishes between a leader and a follower.&quot; – Steve Jobs</i>
        </p>
      </footer>
    </main>
  );
}

// Components
function SocialLink({ href, icon, label, ariaLabel }: { href: string; icon: React.ReactNode; label: string; ariaLabel: string }) {
  return (
    <Link href={href} className="social-link" target="_blank" rel="noopener noreferrer" aria-label={ariaLabel}>
      {icon}
      <span>{label}</span>
    </Link>
  );
}

function TechBadge({ label, icon, ariaLabel }: { label: string; icon: React.ReactNode; ariaLabel: string }) {
  return (
    <div className="tech-badge" role="img" aria-label={ariaLabel}>
      {icon}
      <span>{label}</span>
    </div>
  );
}
