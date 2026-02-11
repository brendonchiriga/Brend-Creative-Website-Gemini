import React, { useRef, useState, useEffect } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number; // Seconds
  threshold?: number;
  as?: React.ElementType; // To render as 'section', 'ul', etc.
  enableStagger?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = "", 
  stagger = 0.12, 
  threshold = 0.1,
  as: Component = 'div',
  enableStagger = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Component ref={ref} className={className}>
      {enableStagger ? React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        
        // We clone the element to inject the animation class and delay style
        // Note: The child must accept 'className' and 'style' props for this to work.
        // If the child is a custom component that doesn't forward these, wrap it in a div.
        
        return React.cloneElement(child as React.ReactElement<any>, {
          className: `${(child.props.className || '')} ${isVisible ? 'animate-active' : 'animate-on-scroll'}`,
          style: {
            ...child.props.style,
            animationDelay: `${index * stagger}s`,
            animationFillMode: 'both' // Ensure it stays at end state
          }
        });
      }) : (
         <div className={isVisible ? 'animate-active' : 'animate-on-scroll'} style={{ animationFillMode: 'both' }}>
             {children}
         </div>
      )}
    </Component>
  );
};

export default ScrollReveal;