import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only enable on non-touch desktop devices and when reduced-motion is not requested
    const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.innerWidth >= 1024;

    if (hasTouch || prefersReducedMotion || !isDesktop) {
      return;
    }

    setEnabled(true);

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        target.classList?.contains('cursor-pointer') ||
        target.closest('.interactive-card')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);

    // Animation loop for smooth trailing ring
    let animationFrameId;
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.18;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Central Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] transition-opacity duration-150 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
      />
      {/* Smooth Trailing Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -ml-4 -mt-4 rounded-full pointer-events-none z-[9998] transition-all duration-200 ease-out border ${
          isHovered
            ? 'w-12 h-12 -ml-6 -mt-6 bg-purple-500/10 border-purple-400/50 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
            : isClicking
            ? 'w-6 h-6 -ml-3 -mt-3 bg-white/10 border-white/40'
            : 'w-8 h-8 bg-transparent border-white/25'
        }`}
      />
    </>
  );
}
