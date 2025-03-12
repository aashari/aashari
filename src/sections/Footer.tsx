"use client";

import { motion } from 'framer-motion';
import FadeInSection from '@/animations/FadeInSection';

export default function Footer() {
  return (
    <footer className="container mx-auto text-center">
      <FadeInSection delay={0.2} y={30}>
        <motion.p 
          className="text-sm text-muted max-w-prose mx-auto py-xl"
          initial={{ opacity: 0.8 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          © {new Date().getFullYear()} Andi Ashari. All rights reserved.
          <br className="my-2" />
          <motion.i
            initial={{ opacity: 0.7 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            &quot;Innovation distinguishes between a leader and a follower.&quot; – Steve Jobs
          </motion.i>
        </motion.p>
      </FadeInSection>
    </footer>
  );
} 
