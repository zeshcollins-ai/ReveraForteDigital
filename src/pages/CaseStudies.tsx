import React from 'react';
import CaseStudiesHero from '../components/case-studies/CaseStudiesHero';
import CaseStudiesList from '../components/case-studies/CaseStudiesList';
import CaseStudiesContact from '../components/case-studies/CaseStudiesContact';
import NetworkBackground from '../components/resources/NetworkBackground';

export default function CaseStudies() {
  return (
    <>
      {/* Network background for the entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-indigo-900/20 z-0" />
      <div className="fixed inset-0 z-0">
        <NetworkBackground />
      </div>
      
      {/* Content with relative positioning to appear above the background */}
      <div className="relative z-10 text-white pt-24">
        <CaseStudiesHero />
        <CaseStudiesList />
        <CaseStudiesContact />
      </div>
    </>
  );
}