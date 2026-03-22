"use client";

import { useEffect, useRef } from "react";

export default function DinoRunner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const H = 150;
    const GROUND = 125;  // ground line y — leaves ~125px for jump arc
    const DINO_X = 72;
    const GRAVITY = 0.65;
    const JUMP_V = -10;   // peak ≈ 77px, dino top at ~4px — stays in canvas
    const MISS_CHANCE = 0.18;
    const SPEED = 24.0;

    canvas.height = H;
    let W = container.offsetWidth;
    canvas.width = W;

    interface Cactus { x: number; w: number; h: number }

    let animId: number;
    let frame = 0;
    let legFrame = 0;
    let nextSpawn = 80;
    let score = 0;
    let dy = 0;
    let vy = 0;
    let onGround = true;
    let dead = false;
    let deadTimer = 0;
    const cacti: Cactus[] = [];

    function reset() {
      dy = 0; vy = 0; onGround = true;
      dead = false; deadTimer = 0;
      cacti.length = 0;
      frame = 0; nextSpawn = 80; score = 0;
    }

    function tryJump() {
      if (!onGround || dead) return;
      for (const c of cacti) {
        const gap = c.x - (DINO_X + 20);
        if (gap > 0 && gap < 130) {
          if (Math.random() < MISS_CHANCE) return;
          vy = JUMP_V;
          onGround = false;
          return;
        }
      }
    }

    function checkCollision(): boolean {
      const dinoBottom = GROUND + dy;
      const dinoTop = dinoBottom - 42;
      const dinoLeft = DINO_X - 2;
      const dinoRight = DINO_X + 20;
      for (const c of cacti) {
        const cTop = GROUND - c.h;
        if (dinoRight > c.x + 2 && dinoLeft < c.x + c.w - 2 && dinoBottom > cTop + 2 && dinoTop < GROUND) {
          return true;
        }
      }
      return false;
    }

    function update() {
      if (dead) {
        deadTimer++;
        if (deadTimer > 85) reset();
        return;
      }

      frame++;
      score++;
      if (frame % 6 === 0) legFrame = 1 - legFrame;

      vy += GRAVITY;
      dy += vy;
      if (dy >= 0) { dy = 0; vy = 0; onGround = true; }

      if (frame >= nextSpawn) {
        cacti.push({ x: W + 10, w: 14 + Math.random() * 10, h: 26 + Math.random() * 22 });
        nextSpawn = frame + 55 + Math.floor(Math.random() * 45);
      }

      for (const c of cacti) c.x -= SPEED;
      while (cacti.length && cacti[0].x + cacti[0].w < 0) cacti.shift();

      tryJump();
      if (checkCollision()) { dead = true; deadTimer = 0; }
    }

    function drawDino() {
      const base = GROUND + dy;

      if (dead) {
        ctx.fillStyle = "#ef4444";
        ctx.fillRect(DINO_X + 2, base - 38, 16, 14);
        ctx.fillRect(DINO_X, base - 26, 20, 12);
        ctx.fillRect(DINO_X + 2, base - 14, 6, 10);
        ctx.fillRect(DINO_X + 12, base - 14, 6, 10);
        ctx.fillStyle = "#000";
        ctx.font = "bold 9px monospace";
        ctx.fillText("x", DINO_X + 5, base - 27);
        ctx.fillText("x", DINO_X + 13, base - 27);
        return;
      }

      ctx.fillStyle = "#ffffff";
      // tail
      ctx.fillRect(DINO_X - 10, base - 20, 12, 5);
      ctx.fillRect(DINO_X - 14, base - 16, 6, 4);
      // body
      ctx.fillRect(DINO_X, base - 26, 20, 14);
      // neck
      ctx.fillRect(DINO_X + 10, base - 36, 10, 12);
      // head
      ctx.fillRect(DINO_X + 8, base - 42, 16, 10);
      // eye
      ctx.fillStyle = "#000000";
      ctx.fillRect(DINO_X + 20, base - 40, 3, 3);
      // legs
      ctx.fillStyle = "#ffffff";
      if (onGround) {
        ctx.fillRect(DINO_X + 2,  base - (legFrame === 0 ? 10 : 6), 6, legFrame === 0 ? 10 : 6);
        ctx.fillRect(DINO_X + 12, base - (legFrame === 1 ? 10 : 6), 6, legFrame === 1 ? 10 : 6);
      } else {
        ctx.fillRect(DINO_X + 2,  base - 8, 6, 8);
        ctx.fillRect(DINO_X + 12, base - 4, 6, 4);
      }
    }

    function drawCactus(c: Cactus) {
      ctx.fillStyle = "#034694";
      const trunk = Math.floor(c.w * 0.35);
      const tx = c.x + Math.floor(c.w * 0.33);
      ctx.fillRect(tx, GROUND - c.h, trunk, c.h);
      const lh = Math.floor(c.h * 0.35);
      ctx.fillRect(c.x, GROUND - c.h * 0.55, Math.floor(c.w * 0.33), Math.ceil(c.h * 0.12));
      ctx.fillRect(c.x, GROUND - c.h * 0.55 - lh * 0.5, Math.ceil(c.w * 0.14), Math.ceil(c.h * 0.12));
      const rx = tx + trunk;
      ctx.fillRect(rx, GROUND - c.h * 0.55, Math.floor(c.w * 0.33), Math.ceil(c.h * 0.12));
      ctx.fillRect(rx + Math.floor(c.w * 0.19), GROUND - c.h * 0.55 - lh * 0.5, Math.ceil(c.w * 0.14), Math.ceil(c.h * 0.12));
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.fillRect(0, GROUND, W, 1);

      if (dead) {
        if (Math.floor(deadTimer / 5) % 2 === 0) drawDino();
        for (const c of cacti) drawCactus(c);
        ctx.fillStyle = "rgba(239,68,68,0.85)";
        ctx.font = "bold 11px monospace";
        ctx.textAlign = "center";
        ctx.fillText("COLLISION_DETECTED — REBOOTING...", W / 2, GROUND - 4);
        ctx.textAlign = "left";
      } else {
        drawDino();
        for (const c of cacti) drawCactus(c);
      }

      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.font = "10px monospace";
      ctx.textAlign = "right";
      ctx.fillText(`RUN_${String(Math.floor(score / 6)).padStart(5, "0")}`, W - 12, 14);
      ctx.textAlign = "left";
    }

    function loop() {
      update();
      draw();
      animId = requestAnimationFrame(loop);
    }

    animId = requestAnimationFrame(loop);

    // responsive — update W on resize, redraw stays correct
    const ro = new ResizeObserver(() => {
      W = container.offsetWidth;
      canvas.width = W;
    });
    ro.observe(container);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute bottom-0 left-0 right-0 pointer-events-none select-none">
      <canvas ref={canvasRef} className="block w-full" />
    </div>
  );
}
