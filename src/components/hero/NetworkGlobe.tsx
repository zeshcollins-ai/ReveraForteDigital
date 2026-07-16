import React, { useEffect, useRef } from 'react';
import { createNetworkAnimation } from '../../utils/networkAnimation';

export default function NetworkGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    // Function to resize the canvas to fit the window
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio; // Scale for high-DPI displays
      canvas.height = rect.height * window.devicePixelRatio;

      // Reinitialize animation if needed
      if (typeof createNetworkAnimation === 'function') {
        createNetworkAnimation(canvas);
      }
    };

    // Resize canvas initially
    resizeCanvas();

    // Attach a resize listener with debouncing
    let resizeTimeout: number;
    const handleResize = () => {
      if (resizeTimeout) cancelAnimationFrame(resizeTimeout);
      resizeTimeout = requestAnimationFrame(resizeCanvas);
    };
    window.addEventListener('resize', handleResize);

    // Initialize animation
    const cleanup = createNetworkAnimation(canvas);

    // Cleanup on unmount
    return () => {
      cleanup();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <canvas
        ref={canvasRef}
        className="opacity-80" // Slightly increased opacity for better visibility
        style={{
          width: '100%', // Ensure the canvas scales with the parent container
          height: '100%',
          filter: 'blur(0.4px) contrast(1.25) saturate(1.1)', // Enhanced visual settings
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}