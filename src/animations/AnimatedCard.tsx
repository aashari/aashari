"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  hoverY?: number;
  shadowIntensity?: 'light' | 'medium' | 'strong';
  springConfig?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

export default function AnimatedCard({
  children,
  className = '',
  hoverScale = 1.02,
  hoverY = -5,
  shadowIntensity = 'medium',
  springConfig = {
    stiffness: 300,
    damping: 20,
    mass: 1,
  },
}: AnimatedCardProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Shadow values based on intensity
  const shadowValues = {
    light: "0 10px 15px rgba(0,0,0,0.05)",
    medium: "0 12px 20px rgba(0,0,0,0.1)",
    strong: "0 15px 25px rgba(0,0,0,0.15)",
  };

  // Skip animation if reduced motion is preferred
  const shouldAnimate = !prefersReducedMotion;

  // Apply animations only if the user doesn't prefer reduced motion
  const hoverProps = shouldAnimate
    ? {
        whileHover: { 
          scale: hoverScale, 
          y: hoverY, 
          boxShadow: shadowValues[shadowIntensity],
          borderColor: "var(--primary)",
        },
        transition: { 
          type: "spring", 
          ...springConfig
        }
      }
    : {};

  return (
    <motion.div 
      className={`card interactive-card ${className}`}
      {...hoverProps}
    >
      {children}
    </motion.div>
  );
} 