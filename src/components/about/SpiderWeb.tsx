import React, { useEffect, useRef } from 'react';
import { createSpiderWebAnimation } from '../../utils/spiderWebAnimation';

export default function SpiderWeb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const cleanup = createSpiderWebAnimation(canvasRef.current);
    return () => cleanup();
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-50"
        style={{ 
          filter: 'blur(0.5px)',
          mixBlendMode: 'screen'
        }}
      />
    </div>
  );
}