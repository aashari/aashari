"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

interface TechBadgeProps {
  label: string;
  icon?: ReactNode;
  color?: 'primary' | 'muted' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'full';
  ariaLabel?: string;
  className?: string;
}

export default function TechBadge({
  label,
  icon,
  color = 'primary',
  size = 'md',
  rounded = 'full',
  ariaLabel,
  className = '',
}: TechBadgeProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Colors based on theme
  const colorClasses = {
    primary: 'bg-background text-primary border-primary',
    muted: 'bg-background text-muted border-muted',
    accent: 'bg-primary text-background border-primary',
  };
  
  // Size styles
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-md',
  };
  
  // Rounded corner styles
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
  };
  
  // Animation variants
  const badgeVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
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
  
  // Apply animations only if the user doesn't prefer reduced motion
  const shouldAnimate = !prefersReducedMotion;

  return (
    <motion.div
      className={`tech-badge inline-flex items-center border gap-2 ${colorClasses[color]} ${sizeClasses[size]} ${roundedClasses[rounded]} ${className}`}
      title={ariaLabel || `Skilled in ${label}`}
      whileHover={shouldAnimate ? badgeVariants.hover : undefined}
      whileTap={shouldAnimate ? badgeVariants.tap : undefined}
    >
      {icon && <span className="badge-icon">{icon}</span>}
      <span className="badge-text font-medium">{label}</span>
    </motion.div>
  );
}
