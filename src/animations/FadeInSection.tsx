"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';

interface FadeInSectionProps {
  children: ReactNode;
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  y?: number;
  x?: number;
  className?: string;
}

export default function FadeInSection({
  children,
  threshold = 0.2,
  triggerOnce = true,
  delay = 0,
  y = 30,
  x = 0,
  className = '',
}: FadeInSectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  // Respect reduced motion preferences
  const shouldAnimate = !prefersReducedMotion;

  const variants = {
    hidden: { 
      opacity: shouldAnimate ? 0 : 1, 
      y: shouldAnimate ? y : 0,
      x: shouldAnimate ? x : 0, 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: [0.2, 0.65, 0.3, 0.9], // Custom easing curve
      }
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
} 