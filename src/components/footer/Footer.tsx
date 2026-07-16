import React, { useEffect, useState, useRef } from 'react';
import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterNavigation from './FooterNavigation';
import FooterBottom from './FooterBottom';
import InfiniteTerminal from './InfiniteTerminal';

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const footerRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Intersection observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }
    
    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);
  
  return (
    <footer 
      ref={footerRef}
      className={`relative bg-[#030712] text-white pt-20 pb-8 overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(16, 24, 39, 0.4) 0%, rgba(3, 7, 18, 1) 70%)'
      }}
    >
      {/* Interactive gradient overlay that follows mouse */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 80%)`,
          transition: 'background 0.1s ease-out'
        }}
      ></div>
      
      {/* Top border with animated gradient */}
      <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500"></div>
        <div 
          className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 animate-gradient-x"
          style={{ animation: 'gradient-shift 8s linear infinite' }}
        ></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500/20 animate-float"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5
            }}
          ></div>
        ))}
      </div>
      
      {/* Futuristic grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" style={{ 
          backgroundImage: `
            linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-600/5 blur-3xl"></div>
      <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-cyan-600/5 blur-3xl"></div>
      
      {/* Digital circuit lines with animation */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.6)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.6)" />
              <stop offset="100%" stopColor="rgba(14, 165, 233, 0.6)" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <pattern id="circuit-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M20 10 L80 10 L80 40 L60 40 L60 60 L40 60 L40 90 L90 90" stroke="url(#circuit-gradient)" fill="none" strokeWidth="0.5" filter="url(#glow)">
              <animate attributeName="stroke-dashoffset" from="200" to="0" dur="10s" repeatCount="indefinite" />
            </path>
            <path d="M10 30 L30 30 L30 50 L70 50 L70 70 L90 70" stroke="url(#circuit-gradient)" fill="none" strokeWidth="0.5" filter="url(#glow)">
              <animate attributeName="stroke-dashoffset" from="200" to="0" dur="15s" repeatCount="indefinite" />
            </path>
            <path d="M10 90 L30 90 L30 70 L50 70 L50 30 L90 30" stroke="url(#circuit-gradient)" fill="none" strokeWidth="0.5" filter="url(#glow)">
              <animate attributeName="stroke-dashoffset" from="200" to="0" dur="12s" repeatCount="indefinite" />
            </path>
            <circle cx="20" cy="10" r="2" fill="rgba(59, 130, 246, 0.6)" filter="url(#glow)">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="80" cy="40" r="2" fill="rgba(139, 92, 246, 0.6)" filter="url(#glow)">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="5s" repeatCount="indefinite" />
            </circle>
            <circle cx="60" cy="60" r="2" fill="rgba(14, 165, 233, 0.6)" filter="url(#glow)">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="6s" repeatCount="indefinite" />
            </circle>
            <circle cx="40" cy="90" r="2" fill="rgba(59, 130, 246, 0.6)" filter="url(#glow)">
              <animate attributeName="opacity" values="0.2;1;0.2" dur="7s" repeatCount="indefinite" />
            </circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>
      </div>
      
      {/* Holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-950/20 backdrop-blur-[1px] pointer-events-none"></div>
      
      {/* Content with staggered entrance animations */}
      <div className="relative z-10 w-[98%] mx-auto px-1 sm:px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5 lg:gap-6 mb-16">
          <div className={`transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-100`}>
            <FooterLogo />
          </div>
          <div className={`transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-200`}>
            <FooterLinks />
          </div>
          <div className={`transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-300`}>
            <FooterContact />
          </div>
          <div className={`transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-400`}>
            <FooterNavigation />
          </div>
          <div className={`transform lg:col-span-1 md:col-span-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-500`}>
            <InfiniteTerminal />
          </div>
        </div>
        <div className={`transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-600`}>
          <FooterBottom />
        </div>
      </div>
      
      {/* Animated scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-400 animate-scan-line"></div>
      </div>
      
      {/* Bottom border with animated pulse */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
      </div>
      
      {/* Add global animation keyframes */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(50%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(-5px) translateX(10px); }
          75% { transform: translateY(5px) translateX(-5px); }
        }
        
        @keyframes scan-line {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes scan-fast {
          0% { transform: translateY(-180px); }
          100% { transform: translateY(180px); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </footer>
  );
}