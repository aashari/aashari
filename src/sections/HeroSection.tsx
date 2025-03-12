"use client";

import Image from "next/image";
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub, FaGraduationCap } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import SocialLink from "../components/SocialLink";
import FadeInSection from "@/animations/FadeInSection";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  
  // Animation for profile image
  const imageAnimation = !prefersReducedMotion ? {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    },
    className: "animate-float"
  } : {};
  
  // Staggered animation for social links
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <section className="section" id="hero">
      <div className="container text-center mx-auto">
        <motion.div
          {...imageAnimation}
        >
          <Image 
            src="/profile.jpeg" 
            alt="Profile photo of Andi Ashari, AI Operations Expert" 
            width={150} 
            height={150} 
            className="profile-image mx-auto mb-8 shadow-lg shadow-[rgba(74,144,226,0.3)]" 
            priority 
          />
        </motion.div>
        
        <FadeInSection delay={0.2}>
          <h1 className="text-4xl font-bold text-primary mb-6 justify-center">Andi Ashari</h1>
        </FadeInSection>
        
        <FadeInSection delay={0.3}>
          <p className="text-lg text-muted mb-4">
            Tech Wanderer | AI Operations & Engineering | Cloud Innovator
          </p>
        </FadeInSection>
        
        <FadeInSection delay={0.4}>
          <p className="text-md mb-6 max-w-prose mx-auto">
            Based in Indonesia, I&apos;m a Tech Wanderer and AI operations expert, specializing in cloud engineering and scalable AI solutions.
          </p>
        </FadeInSection>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 md:gap-5 mt-10"
          variants={container}
          initial={!prefersReducedMotion ? "hidden" : undefined}
          animate={!prefersReducedMotion ? "show" : undefined}
        >
          <motion.div variants={item}><SocialLink href="https://www.linkedin.com/in/aashari/" icon={<FaLinkedin size={24} />} label="LinkedIn" ariaLabel="Visit Andi Ashari's LinkedIn profile" /></motion.div>
          <motion.div variants={item}><SocialLink href="https://www.instagram.com/ant.dhe/" icon={<FaInstagram size={24} />} label="Instagram" ariaLabel="Visit Andi Ashari's Instagram profile" /></motion.div>
          <motion.div variants={item}><SocialLink href="https://medium.com/@aashari" icon={<SiMedium size={24} />} label="Medium" ariaLabel="Read Andi Ashari's articles on Medium" /></motion.div>
          <motion.div variants={item}><SocialLink href="mailto:a.ashari1302@gmail.com" icon={<FaEnvelope size={24} />} label="Email" ariaLabel="Send an email to Andi Ashari" /></motion.div>
          <motion.div variants={item}><SocialLink href="https://github.com/aashari" icon={<FaGithub size={24} />} label="GitHub" ariaLabel="View Andi Ashari's projects on GitHub" /></motion.div>
          <motion.div variants={item}><SocialLink href="https://scholar.google.co.id/citations?user=bLmnPS8AAAAJ&hl=en" icon={<FaGraduationCap size={24} />} label="Scholar" ariaLabel="View Andi Ashari's Google Scholar profile" /></motion.div>
        </motion.div>
      </div>
    </section>
  );
} 
