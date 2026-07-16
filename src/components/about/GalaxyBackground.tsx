import React, { useEffect, useRef } from 'react';
import { createGalaxyAnimation } from '../../utils/galaxyAnimation';

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    
    // Create the galaxy animation
    const cleanup = createGalaxyAnimation(canvasRef.current);
    
    // Ensure the animation continues even when scrolling
    const handleScroll = () => {
      if (canvasRef.current) {
        // This forces a redraw of the canvas when scrolling
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      cleanup();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-75"
        style={{ 
          filter: 'blur(1px)',
          mixBlendMode: 'screen'
        }}
      />
    </div>
  );
}