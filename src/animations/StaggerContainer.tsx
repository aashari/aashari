"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { useReducedMotion } from 'framer-motion';

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  delayIncrement?: number;
  initialDelay?: number;
  staggerDirection?: 'forward' | 'reverse';
  duration?: number;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function StaggerContainer({
  children,
  className = '',
  delayIncrement = 0.1,
  initialDelay = 0.2,
  staggerDirection = 'forward',
  duration = 0.5,
  threshold = 0.1,
  triggerOnce = true,
}: StaggerContainerProps) {
  const prefersReducedMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce,
    threshold,
  });

  // Respect reduced motion preferences
  const shouldAnimate = !prefersReducedMotion;

  // Container variants
  const containerVariants = {
    hidden: { 
      opacity: shouldAnimate ? 0 : 1 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delayIncrement,
        delayChildren: initialDelay,
        staggerDirection: staggerDirection === 'reverse' ? -1 : 1,
      }
    }
  };

  // Child variants
  const childVariants = {
    hidden: { 
      opacity: shouldAnimate ? 0 : 1, 
      y: shouldAnimate ? 20 : 0,
      scale: shouldAnimate ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {Array.isArray(children) 
        ? children.map((child, index) => (
            <motion.div key={index} variants={childVariants}>
              {child}
            </motion.div>
          ))
        : <motion.div variants={childVariants}>{children}</motion.div>
      }
    </motion.div>
  );
} 