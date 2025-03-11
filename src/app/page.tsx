"use client";

import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaTerminal, FaBrain, FaAws, FaGoogle, FaFilm, FaBook, FaTrophy, FaGraduationCap } from "react-icons/fa";
import { SiMedium, SiTerraform, SiTypescript, SiGo, SiPython } from "react-icons/si";
import { HiSparkles } from "react-icons/hi";
import Script from "next/script";
import Section from "./components/Section";
import ThemeToggle from "./components/ThemeToggle";
import { useEffect } from "react";

export default function Home() {
  // Effect to handle scroll events
  useEffect(() => {
    // Any other scroll-related functionality can go here
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
      <ThemeToggle />
      
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
      <section className="section mt-14" id="hero">
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
          <p className="text-md mb-10 max-w-prose mx-auto">
            Based in Indonesia, I&apos;m a Tech Wanderer and AI operations expert, specializing in cloud engineering and scalable AI solutions. Explore my work in cloud infrastructure and sci-fi-inspired innovation, or <Link href="#contact" className="text-primary underline">connect with me</Link> to discuss opportunities.
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
      <Section title="Who I Am" icon={<HiSparkles className="icon-primary mr-2" size={24} />} id="about">
        <div className="space-y-10">
          <div className="card w-full">
            <h3 className="text-xl mb-4">Professional Focus</h3>
            <ul className="space-y-2">
              <li>Role: AI Operations and Engineering</li>
              <li>Expertise: Cloud infrastructure, automation, and scalable AI solutions</li>
              <li>Mission: Building scalable, AI-driven systems to revolutionize the digital landscape.</li>
            </ul>
          </div>
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaFilm className="icon-primary" /> Fun Facts</h3>
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
      <Section title="My Projects" icon={<HiSparkles className="icon-primary mr-2" size={24} />} id="projects">
        <div className="space-y-10">
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2">
              <FaBrain className="icon-primary" /> 
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
              <SocialLink href="https://brainybuddy.app" icon={<FaGoogle size={18} />} label="Visit Website" ariaLabel="Visit Brainy Buddy website" />
            </div>
          </div>
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaAws className="icon-primary" /> Boilerplate Lambda TypeScript</h3>
            <p className="mb-4">A template for AWS Lambda projects using TypeScript, featuring AWS Secrets, DynamoDB, and Datadog metrics for serverless applications.</p>
            <ul className="space-y-2">
              <li>Terraform for infrastructure management</li>
              <li>Structured directory for efficient development</li>
              <li>Enhanced monitoring with Datadog</li>
            </ul>
            <div className="mt-4">
              <SocialLink href="https://github.com/aashari/boilerplate-lambda-typescript" icon={<FaGithub size={18} />} label="View on GitHub" ariaLabel="View Boilerplate Lambda TypeScript on GitHub" />
            </div>
          </div>
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaAws className="icon-primary" /> AWS Static Website Terraform Module</h3>
            <p className="mb-4">A Terraform module for deploying static websites on AWS S3 and CloudFront, with custom domain support and CloudFront functions.</p>
            <ul className="space-y-2">
              <li>Supports Cloudflare and Route53 for custom domains</li>
              <li>Includes CloudFront access logs and URL redirection</li>
              <li>Configurable for various deployment scenarios</li>
            </ul>
            <div className="mt-4">
              <SocialLink href="https://github.com/aashari/terraform-aws-static-website" icon={<FaGithub size={18} />} label="View on GitHub" ariaLabel="View AWS Static Website Terraform Module on GitHub" />
            </div>
          </div>
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaGoogle className="icon-primary" /> Terraform GCP Cloud Run</h3>
            <p className="mb-4">A Terraform module for deploying containerized applications on Google Cloud Run, automating resource setup and configurations.</p>
            <ul className="space-y-2">
              <li>Automates Google Container Images and Service Accounts</li>
              <li>Configurable container settings (CPU, memory, concurrency)</li>
              <li>Outputs docker image URL and service endpoint</li>
            </ul>
            <div className="mt-4">
              <SocialLink href="https://github.com/aashari/terraform-gcp-cloud-run" icon={<FaGithub size={18} />} label="View on GitHub" ariaLabel="View Terraform GCP Cloud Run on GitHub" />
            </div>
          </div>
        </div>
      </Section>

      {/* Publications Section */}
      <Section title="Publications" icon={<HiSparkles className="icon-primary mr-2" size={24} />} id="publications">
        <div className="space-y-10">
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> A Design of Crowd-Based Corruption Prevention System in Indonesia</h3>
            <p className="mb-4">2019 International Conference on Information Management and Technology (ICIMTech) · Aug 1, 2019</p>
            <p className="mb-4">Combatting corruption requires not only centralized and institution-based strategy, but must be met with distributive effort supported by abundance of data and technological advancement. This work tackles the issue of decentralized corruption prevention by describing the method of doing heuristic analysis based on multiple data regarding corruption.</p>
            <div className="mt-4">
              <SocialLink href="https://ieeexplore.ieee.org/document/8843839" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read A Design of Crowd-Based Corruption Prevention System in Indonesia" />
            </div>
          </div>

          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Systematic literature review on corruption prevention efforts towards sustainable economy in Indonesia</h3>
            <p className="mb-4">IOP Conference Series: Earth and Environmental Science · Dec 14, 2018</p>
            <p className="mb-4">Corruption is an extraordinary crime and must be eradicated not only as fast as possible, but also as efficient and as effective as possible as it hinders the process of achieving sustainable economy. In current modern society, information technology exists as a multidisciplinary tool to solve lingering problems that could not be solved by traditional efforts.</p>
            <div className="mt-4">
              <SocialLink href="https://iopscience.iop.org/article/10.1088/1755-1315/195/1/012051" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Systematic literature review on corruption prevention efforts towards sustainable economy in Indonesia" />
            </div>
          </div>

          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Development of a Web Based Corruption Case Mapping Using Machine Learning with Artificial Neural Network</h3>
            <p className="mb-4">2018 International Conference on Information Management and Technology (ICIMTech) · Sep 1, 2018</p>
            <p className="mb-4">This work focuses on the development of a web application aimed to provide insight to corruption case per province in Indonesia. The web application was developed using Machine Learning, specifically Backpropagation Artificial Neural Network (ANN). Web crawling and web scraping techniques are used to gather news content from 7 major news portal in Indonesia.</p>
            <div className="mt-4">
              <SocialLink href="https://ieeexplore.ieee.org/document/8528150" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Development of a Web Based Corruption Case Mapping Using Machine Learning with Artificial Neural Network" />
            </div>
          </div>

          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Indonesian teacher engagement index (ITEI): Decision support system for education</h3>
            <p className="mb-4">2017 5th International Conference on Cyber and IT Service Management (CITSM) · Aug 1, 2017</p>
            <p className="mb-4">Indonesian Teacher Engagement Index (ITEI) is an instrument designed to help teachers to detect themselves through self diagnostic. The results of self-diagnostic is then systemally developed with the goal of becoming a decision support system for the central government to the areas in the field of education.</p>
            <div className="mt-4">
              <SocialLink href="https://ieeexplore.ieee.org/document/8089321" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Indonesian teacher engagement index (ITEI): Decision support system for education" />
            </div>
          </div>

          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Corruption Cases Mapping Based on Indonesia&apos;s Corruption Perception Index</h3>
            <p className="mb-4">Journal of Physics: Conference Series · Jan 1, 2017</p>
            <p className="mb-4">Government plays an important role in nation economic growth. Nevertheless, there are still many occurrences of government officers abusing their offices to do an act of corruption. To develop the mapping system, researchers use Naïve Bayes Classifier to classify which news articles talk about corruption and which news articles are not.</p>
            <div className="mt-4">
              <SocialLink href="http://iopscience.iop.org/article/10.1088/1742-6596/801/1/012019" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Corruption Cases Mapping Based on Indonesia&apos;s Corruption Perception Index" />
            </div>
          </div>

          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaBook className="icon-primary" size={24} /> Corruption Early Prevention: Decision Support System for President of the Republic of Indonesia</h3>
            <p className="mb-4">Journal of Physics: Conference Series · Jan 1, 2017</p>
            <p className="mb-4">Corruption is an extraordinary crime, and then the prevention must also be extraordinary, simultaneously (national) in the form of early warning that involves all elements; government, industry, and society. To realize it the system needs to be built which in this study is called the Corruption Early Prevention (CEP) as a Decision Support System for President of the Republic of Indonesia.</p>
            <div className="mt-4">
              <SocialLink href="http://iopscience.iop.org/article/10.1088/1742-6596/801/1/012028" icon={<FaBook size={18} />} label="Show publication" ariaLabel="Read Corruption Early Prevention: Decision Support System for President of the Republic of Indonesia" />
            </div>
          </div>
        </div>
      </Section>

      {/* Awards Section */}
      <Section title="Awards" icon={<FaTrophy className="icon-primary mr-2" size={24} />} id="awards">
        <div className="space-y-10">
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaTrophy className="icon-primary" /> Top Team at Ericsson Hackathon</h3>
            <p className="mb-4">Recognized for developing an innovative solution that addressed real-world challenges in telecommunications and connectivity.</p>
          </div>
          <div className="card w-full">
            <h3 className="text-xl mb-4 flex items-center gap-2"><FaTrophy className="icon-primary" /> Runner-up at Kurio Hackathon</h3>
            <p className="mb-4">Awarded for creating a cutting-edge news aggregation and personalization system using machine learning algorithms.</p>
          </div>
        </div>
      </Section>

      {/* Recent Articles Section */}
      <Section title="Recent Articles" icon={<SiMedium className="icon-primary mr-2" size={24} />} id="articles">
        <div className="space-y-10">
          <div className="card w-full text-center">
            <p className="mb-4">I share insights on AI, cloud engineering, and technology innovation on Medium. Check out my latest articles!</p>
            <div className="mt-4">
              <SocialLink href="https://medium.com/@aashari" icon={<SiMedium size={18} />} label="Read on Medium" ariaLabel="Read Andi Ashari's articles on Medium" />
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
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

      {/* Footer */}
      <footer className="container mx-auto text-center">
        <p className="text-sm text-muted max-w-prose mx-auto py-xl">
          © {new Date().getFullYear()} Andi Ashari. All rights reserved.
          <br className="my-2" />
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
