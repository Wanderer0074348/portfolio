"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function SlideUpSection({ children, className }: Props) {
  return (
    <motion.section
      className={className}
      initial={{ y: 40, opacity: 0.96 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.04 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}
