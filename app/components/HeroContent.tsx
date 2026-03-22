"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

export default function HeroContent({ children }: { children: ReactNode }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], ["0%", "-12%"]);
  const opacity = useTransform(scrollY, [0, 350], [1, 0.3]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.94]);

  return (
    <motion.div
      style={{ y, opacity, scale }}
      className="max-w-[1440px] mx-auto relative z-10 flex gap-12 items-start"
    >
      {children}
    </motion.div>
  );
}
