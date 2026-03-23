"use client";

import { useEffect, useRef } from "react";

// Pixel size controls pixelation strength — bigger = chunkier pixels
const PIXEL_SIZE = 6;

export default function PixelatedHero({ src }: { src: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      // Draw at low resolution then display scaled up — one time, no loop
      const w = Math.ceil(canvas.offsetWidth  / PIXEL_SIZE);
      const h = Math.ceil(canvas.offsetHeight / PIXEL_SIZE);
      canvas.width  = w;
      canvas.height = h;
      ctx.drawImage(img, 0, 0, w, h);
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
