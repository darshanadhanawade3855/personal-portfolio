import React, { useEffect, useRef } from 'react';

export default function BackgroundEffect() {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: -1000, y: -1000, targetX: -1000, targetY: -1000 });

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle setup
    const particleCount = Math.min(Math.floor(window.innerWidth / 25), 45);
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.2 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const handleMouseMove = (e) => {
      mousePos.current.targetX = e.clientX;
      mousePos.current.targetY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse follow
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.05;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.05;

      // Mouse interactive radial glow
      if (mousePos.current.x > 0 && mousePos.current.y > 0) {
        const glowGradient = ctx.createRadialGradient(
          mousePos.current.x,
          mousePos.current.y,
          0,
          mousePos.current.x,
          mousePos.current.y,
          450
        );
        glowGradient.addColorStop(0, 'rgba(139, 92, 246, 0.07)');
        glowGradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.03)');
        glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = glowGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Draw subtle particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      
      {/* Subtle fixed ambient background glows */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-sky-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[160px] pointer-events-none" />
    </div>
  );
}
