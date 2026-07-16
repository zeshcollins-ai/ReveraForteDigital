import React from 'react';
import ServicesGrid from './services/ServicesGrid';

export default function Services() {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Advanced Futuristic background elements - modified to work with GalaxyBackground */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs with reduced opacity to blend with galaxy background */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full filter blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[100px] animate-pulse-slow-delay" />
        
        {/* Subtle radial gradient overlay with reduced opacity */}
        <div className="absolute top-1/2 left-1/2 traninfoorm -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/0 via-gray-900/20 to-transparent opacity-60" />
        
        {/* Futuristic grid pattern with reduced opacity */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[size:50px_50px] opacity-[0.02]" />
        
        {/* Subtle moving light effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-shimmer"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-shimmer-delay"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          {/* Floating badge with glow effect */}
          <div className="inline-block mb-6 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-cyan-500/30 blur-xl opacity-50 animate-pulse-slow"></div>
            <span className="relative inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-purple-900/80 to-gray-900/80 text-sm font-medium text-purple-200 backdrop-blur-md border border-purple-500/20 shadow-lg">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-ping-slow"></span>
              Innovative Solutions
            </span>
          </div>
          
          {/* Headline with enhanced gradient and subtle animation */}
          <h2 className="text-5xl sm:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-cyan-100 tracking-tight leading-tight">
            Our Digital Marketing Services
          </h2>
          
          {/* Improved subheading with better typography */}
          <p className="text-gray-300 max-w-3xl mx-auto text-xl leading-relaxed font-light">
            Comprehensive solutions to elevate your brand in the digital landscape with cutting-edge technology and data-driven strategies that drive measurable results
          </p>
          
          {/* Enhanced decorative elements */}
          <div className="mt-10 flex justify-center items-center space-x-3">
            <div className="h-[2px] w-16 bg-gradient-to-r from-purple-500/80 to-purple-500/0 rounded-full"></div>
            <div className="w-3 h-3 rounded-full bg-purple-500/30 backdrop-blur-sm border border-purple-500/50 animate-pulse-slow"></div>
            <div className="h-[2px] w-16 bg-gradient-to-l from-cyan-500/80 to-cyan-500/0 rounded-full"></div>
          </div>
        </div>

        {/* Services Grid */}
        <ServicesGrid />
        
        {/* Enhanced View All Services Button */}
        <div className="mt-20 text-center">
          <button className="group relative inline-flex items-center justify-center px-10 py-4 overflow-hidden rounded-full bg-gradient-to-r from-purple-900/80 to-gray-900/80 backdrop-blur-md border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.1)] hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]">
            {/* Button glow effect */}
            <div className="absolute inset-0 w-full h-full transition duration-500 ease-out opacity-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 group-hover:opacity-100 blur-md"></div>
            <div className="absolute inset-0 w-full h-full transition duration-500 ease-out opacity-0 bg-gradient-to-r from-purple-600/40 to-cyan-600/40 group-hover:opacity-100"></div>
            
            {/* Button text with icon */}
            <span className="relative z-10 flex items-center text-white font-medium text-lg">
              View All Services
              <svg className="ml-3 w-5 h-5 traninfoorm transition-traninfoorm duration-500 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
      
      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes pulse-slow-delay {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes shimmer {
          0% { traninfoorm: translateX(-100%); }
          100% { traninfoorm: translateX(100%); }
        }
        @keyframes shimmer-delay {
          0% { traninfoorm: translateX(-100%); }
          100% { traninfoorm: translateX(100%); }
        }
        @keyframes ping-slow {
          0% { traninfoorm: scale(1); opacity: 1; }
          75%, 100% { traninfoorm: scale(1.5); opacity: 0; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 6s cubic-bezier(0.4, 0, 0.6, 1) infinite 3s;
        }
        .animate-shimmer {
          animation: shimmer 8s infinite;
        }
        .animate-shimmer-delay {
          animation: shimmer 8s infinite 4s;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}