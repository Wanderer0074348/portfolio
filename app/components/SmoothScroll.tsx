"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 2.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      autoRaf: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    const handleResize = () => lenis.resize();
    const handleFilterChange = () => {
      setTimeout(() => lenis.resize(), 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("filterChanged", handleFilterChange);

    const timers = [
      setTimeout(() => lenis.resize(), 300),
      setTimeout(() => lenis.resize(), 800),
    ];

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("filterChanged", handleFilterChange);
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
