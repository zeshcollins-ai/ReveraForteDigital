import React from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutStory from '../components/about/AboutStory';
import AboutFeatures from '../components/about/AboutFeatures';
import AboutExpertise from '../components/about/AboutExpertise';
import AboutVision from '../components/about/AboutVision';
import GalaxyBackground from '../components/about/GalaxyBackground';

export default function About() {
  return (
    <>
      {/* Galaxy background for the entire page (including behind the footer) */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 z-0" />
      <div className="fixed inset-0 z-0">
        <GalaxyBackground />
      </div>
      
      {/* Content with relative positioning to appear above the background */}
      <div className="relative z-10 text-white pt-24">
        <AboutHero />
        <AboutStory />
        <AboutFeatures />
        <AboutExpertise />
        <AboutVision />
      </div>
    </>
  );
}