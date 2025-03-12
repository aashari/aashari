"use client";

import Link from 'next/link';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  ariaLabel?: string;
  isExternal?: boolean;
  className?: string;
}

const SocialLink = ({
  href,
  icon,
  label,
  ariaLabel,
  isExternal = true,
  className = '',
}: SocialLinkProps) => {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = !prefersReducedMotion;
  
  // Animation variants
  const linkVariants = {
    hover: {
      scale: 1.1,
      y: -3,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      whileHover={shouldAnimate ? linkVariants.hover : undefined}
      whileTap={shouldAnimate ? linkVariants.tap : undefined}
      className={`social-link ${className}`}
    >
      <Link 
        href={href} 
        aria-label={ariaLabel || `Visit ${label}`}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="flex flex-col items-center gap-2 p-3 rounded-md hover:bg-card border border-transparent hover:border-border transition-colors duration-200"
      >
        <span className="icon-container text-primary">
          {icon}
        </span>
        <span className="link-label text-sm">{label}</span>
      </Link>
    </motion.div>
  );
};

export default SocialLink;
