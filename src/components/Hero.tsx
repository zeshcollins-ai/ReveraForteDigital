import React from 'react';
import NetworkGlobe from './hero/NetworkGlobe';
import HeroContent from './hero/HeroContent';
import FeatureCards from './hero/FeatureCards';

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      <NetworkGlobe />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroContent />
        <FeatureCards />
      </div>
    </div>
  );
}