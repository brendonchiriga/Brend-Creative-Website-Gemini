import React, { useEffect, useRef } from 'react';

const BackgroundAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Star properties
    const stars: { x: number; y: number; size: number; opacity: number; speed: number }[] = [];
    const starCount = 150;
    
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2,
        opacity: Math.random(),
        speed: Math.random() * 0.2 + 0.1
      });
    }

    // Shooting stars
    let shootingStar: { x: number; y: number; length: number; speed: number; active: boolean } | null = null;

    const createShootingStar = () => {
      if (!shootingStar && Math.random() < 0.01) { // 1% chance per frame
        shootingStar = {
          x: Math.random() * width,
          y: Math.random() * height * 0.5, // Start in top half
          length: Math.random() * 80 + 20,
          speed: Math.random() * 10 + 10,
          active: true
        };
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#0B0B15');
      gradient.addColorStop(1, '#1A1A2E');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw Stars
      ctx.fillStyle = '#FFFFFF';
      stars.forEach(star => {
        ctx.globalAlpha = star.opacity;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Move stars slowly up/left
        star.y -= star.speed;
        if (star.y < 0) star.y = height;
        
        // Twinkle
        star.opacity += (Math.random() - 0.5) * 0.05;
        if (star.opacity < 0.1) star.opacity = 0.1;
        if (star.opacity > 0.8) star.opacity = 0.8;
      });

      // Draw Shooting Star
      createShootingStar();
      if (shootingStar && shootingStar.active) {
        ctx.globalAlpha = 1;
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(shootingStar.x - shootingStar.length, shootingStar.y + shootingStar.length); // Diagonal movement
        ctx.stroke();

        // Move shooting star
        shootingStar.x -= shootingStar.speed;
        shootingStar.y += shootingStar.speed;

        if (shootingStar.x < 0 || shootingStar.y > height) {
          shootingStar = null;
        }
      }

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationId);
    }
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10 pointer-events-none" />;
};

export default BackgroundAnimation;