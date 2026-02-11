import React, { useEffect, useRef } from 'react';

const CursorFollower: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    let requestRef: number;
    let mouseX = -100;
    let mouseY = -100;
    
    // Inner cursor position (Instant tracking)
    let innerX = -100;
    let innerY = -100;

    // Outer cursor position (Smooth tracking)
    let outerX = -100;
    let outerY = -100;
    
    // Speed factors - Increased to 0.9 for very snappy/fast following
    // 0.1 = slow/floaty, 1.0 = instant
    const outerSpeed = 0.9; 

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update hover state
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, input, textarea, .cursor-pointer');
      
      if (isClickable) {
        outer.classList.add('scale-[1.2]', 'opacity-100', 'border-2');
        inner.classList.add('scale-75', 'opacity-100'); 
      } else {
        outer.classList.remove('scale-[1.2]', 'opacity-100', 'border-2');
        inner.classList.remove('scale-75', 'opacity-100');
      }
    };

    const animate = () => {
      // 1. Inner Dot: Instant movement (Zero lag)
      innerX = mouseX;
      innerY = mouseY;
      
      // 2. Outer Ring: Fast interpolation
      const distOuterX = mouseX - outerX;
      const distOuterY = mouseY - outerY;
      
      // Only update if distance is significant
      if (Math.abs(distOuterX) > 0.1 || Math.abs(distOuterY) > 0.1) {
          outerX += distOuterX * outerSpeed;
          outerY += distOuterY * outerSpeed;
      } else {
          outerX = mouseX;
          outerY = mouseY;
      }

      // Apply transforms
      if (inner) inner.style.transform = `translate3d(${innerX}px, ${innerY}px, 0) translate(-50%, -50%)`;
      if (outer) outer.style.transform = `translate3d(${outerX}px, ${outerY}px, 0) translate(-50%, -50%)`;
      
      requestRef = requestAnimationFrame(animate);
    };

    const initMouse = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        outerX = mouseX;
        outerY = mouseY;
        innerX = mouseX;
        innerY = mouseY;
        window.removeEventListener('mousemove', initMouse);
    };
    window.addEventListener('mousemove', initMouse);

    window.addEventListener('mousemove', onMouseMove);
    requestRef = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousemove', initMouse);
      cancelAnimationFrame(requestRef);
    };
  }, []);

  return (
    <>
        <style>{`
             @keyframes borderColorCycle {
                0% { border-color: #ff0000; }
                50% { border-color: #faff00; }
                100% { border-color: #ff0000; }
            }
            @keyframes backgroundColorCycle {
                0% { background-color: #ff0000; }
                50% { background-color: #faff00; }
                100% { background-color: #ff0000; }
            }
        `}</style>
        
        {/* Outer Ring */}
        <div 
            ref={outerRef}
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white pointer-events-none z-[9999] hidden md:block transition-[width,height,opacity,transform,border-width] duration-75 ease-out will-change-transform"
            style={{ 
                animation: 'borderColorCycle 4s infinite linear'
            }}
        />
        
        {/* Inner Dot - Increased size to w-4 h-4 */}
        <div 
            ref={innerRef}
            className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] hidden md:block transition-[transform,opacity,background-color] duration-0 ease-linear will-change-transform"
            style={{ 
                animation: 'backgroundColorCycle 4s infinite linear'
            }}
        />
    </>
  );
};

export default CursorFollower;