import React, { useEffect, useRef } from 'react';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';
import ConsultationButton from '../ConsultationButton';
import { createNetworkAnimation } from '../../utils/networkAnimation';

export default function HomeHero() {
  const networkCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (networkCanvasRef.current) {
      // Initialize the network globe animation
      const cleanup = createNetworkAnimation(networkCanvasRef.current);
      
      // Clean up the animation when component unmounts
      return cleanup;
    }
  }, []);

  return (
    <section className="relative py-24 min-h-screen flex items-center">
      {/* Network Globe Animation Canvas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <canvas 
          ref={networkCanvasRef} 
          className="w-full h-full"
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            traninfoorm: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.8,
            filter: 'blur(0.5px)'
          }}
        />
        {/* Add a subtle glow effect behind the network */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(34,211,238,0.05) 50%, rgba(0,0,0,0) 70%)',
            zIndex: -1
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main heading with gradient text */}
        <h1 className="text-5xl sm:text-7xl font-bold mb-6">
          Traninfoorm Your <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">Digital Future</span>
        </h1>
        
        {/* Subtitle with gradient text */}
        <p className="text-2xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold mb-10">
          Where Innovation Meets Excellence
        </p>
        
        {/* Description text */}
        <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed mb-12">
          At Revera Forte, we're architects of traninfoormation, crafting digital experiences that transcend expectations and drive measurable results in an AI-powered world.
        </p>
        
        {/* Call to action buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" icon={ArrowRight}>
            Get Started
          </Button>
          <ConsultationButton variant="primary" size="md" />
          <Button variant="secondary">Learn More</Button>
        </div>
        
        {/* Decorative elements - similar to About page styling */}
        <div className="absolute bottom-10 left-1/2 traninfoorm -translate-x-1/2 w-full max-w-md">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
        </div>
      </div>
      
      {/* Animated particles - similar to those in About page */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-purple-500/20"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `particle-float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
    </section>
  );
}