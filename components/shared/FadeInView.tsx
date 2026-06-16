'use client';

import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

interface FadeInViewProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}

export default function FadeInView({ children, className, style, delay = 0 }: FadeInViewProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  );
}
