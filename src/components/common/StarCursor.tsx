// src/components/common/StarCursor.tsx
import { useEffect, useRef } from 'react';

export default function StarCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<any[]>([]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Resize canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Track mouse
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      // Add a star on movement
      stars.current.push({
        x: mouse.current.x,
        y: mouse.current.y,
        size: Math.random() * 2 + 1,
        life: 1, // Opacity
        velocity: { x: (Math.random() - 0.5) * 2, y: (Math.random() - 0.5) * 2 }
      });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.current.forEach((star, index) => {
        star.x += star.velocity.x;
        star.y += star.velocity.y;
        star.life -= 0.02; // Fade speed

        if (star.life <= 0) {
          stars.current.splice(index, 1);
        } else {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          // Yellowish/White star color
          ctx.fillStyle = `rgba(250, 204, 21, ${star.life})`; 
          ctx.fill();
        }
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[60]" // z-60 puts it above navbar(40) but below modals(100)
    />
  );
}