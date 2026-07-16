import React from 'react';
import FooterLogo from './FooterLogo';
import FooterLinks from './FooterLinks';
import FooterContact from './FooterContact';
import FooterNavigation from './FooterNavigation';
import FooterBottom from './FooterBottom';

export default function AboutFooter() {
  return (
    <footer className="relative z-20 text-white pt-16 pb-6">
      {/* Solid background overlay to ensure the footer has a static background */}
      <div className="absolute inset-0 bg-gray-900 z-[-1]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <FooterLogo />
          <FooterLinks />
          <FooterContact />
          <FooterNavigation />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
}