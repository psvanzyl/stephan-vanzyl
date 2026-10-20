"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Rustige scroll-reveal. Respecteert prefers-reduced-motion automatisch via
 * framer-motion (viewport-once zodat het niet opnieuw animeert bij terugscrollen).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  x = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
