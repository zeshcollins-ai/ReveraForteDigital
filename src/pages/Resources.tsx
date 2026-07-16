import React from 'react';
import ResourcesHero from '../components/resources/ResourcesHero';
import ResourcesCategories from '../components/resources/ResourcesCategories';
import ResourcesLibrary from '../components/resources/ResourcesLibrary';
import ResourcesTools from '../components/resources/ResourcesTools';
import ResourcesNewsletter from '../components/resources/ResourcesNewsletter';
import NetworkBackground from '../components/resources/NetworkBackground';

export default function Resources() {
  return (
    <>
      {/* Network background for the entire page */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/20 via-black to-indigo-900/20 z-0" />
      <div className="fixed inset-0 z-0">
        <NetworkBackground />
      </div>
      
      {/* Content with relative positioning to appear above the background */}
      <div className="relative z-10 text-white pt-24">
        <ResourcesHero />
        <ResourcesCategories />
        <ResourcesLibrary />
        <ResourcesTools />
        <ResourcesNewsletter />
      </div>
    </>
  );
}