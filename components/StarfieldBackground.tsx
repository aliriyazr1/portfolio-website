'use client';

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  speed: number;
  twinkleOffset: number;
  twinkleSpeed: number;
}

export default function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    let stars: Star[] = [];

    const initStars = () => {
      stars = Array.from({ length: 220 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.4 + 0.2,
        speed: Math.random() * 0.25 + 0.04,
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: Math.random() * 0.015 + 0.004,
      }));
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const star of stars) {
        star.twinkleOffset += star.twinkleSpeed;
        const brightness = 0.35 + 0.65 * Math.abs(Math.sin(star.twinkleOffset));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 225, 255, ${brightness})`;
        ctx.fill();

        star.y -= star.speed;
        if (star.y + star.radius < 0) {
          star.y = canvas.height + star.radius;
          star.x = Math.random() * canvas.width;
        }
      }

      // Occasional faint nebula-coloured dust clusters
      for (let i = 0; i < 3; i++) {
        const nx = (canvas.width * (i + 1)) / 4;
        const ny = canvas.height * 0.4;
        const grad = ctx.createRadialGradient(nx, ny, 0, nx, ny, 180);
        grad.addColorStop(0, 'rgba(100, 50, 180, 0.03)');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      animFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
