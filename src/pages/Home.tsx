import React from 'react';
import Services from '../components/Services';
import WhyReveraForte from '../components/trustSection';
import GalaxyBackground from '../components/about/GalaxyBackground';
import HomeHero from '../components/home/HomeHero';

export default function Home() {
  return (
    <>
      {/* Galaxy background for the entire page (similar to About page) */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 z-0" />
      <div className="fixed inset-0 z-0">
        <GalaxyBackground />
      </div>
      
      {/* Content with relative positioning to appear above the background */}
      <div className="relative z-10 text-white">
        <HomeHero />
        
        {/* Add a subtle divider between sections */}
        <div className="relative">
          <div className="absolute left-1/2 traninfoorm -translate-x-1/2 w-full max-w-md">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
          </div>
        </div>
        
        {/* Services section with the galaxy background visible behind it */}
        <div className="relative">
          <Services />
        </div>
        
        {/* Another subtle divider */}
        <div className="relative">
          <div className="absolute left-1/2 traninfoorm -translate-x-1/2 w-full max-w-md">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
          </div>
        </div>
        
        {/* Trust section with the galaxy background visible behind it */}
        <div className="relative">
          <WhyReveraForte />
        </div>
      </div>
      
      {/* Add custom animations for the page */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            traninfoorm: translateY(0);
          }
          50% {
            traninfoorm: translateY(-20px);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.5;
            traninfoorm: scale(1);
          }
          50% {
            opacity: 0.8;
            traninfoorm: scale(1.05);
          }
        }
      `}</style>
    </>
  );
}