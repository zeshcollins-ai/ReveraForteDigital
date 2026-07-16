import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, ExternalLink, Globe, Building2 } from 'lucide-react';

export default function FooterContact() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [activeLocation, setActiveLocation] = useState<number | null>(null);
  const [pulseIndex, setPulseIndex] = useState(0);
  
  // Office locations with coordinates for the map
  const locations = [
    { id: 0, name: "Wyoming", coords: { x: 25, y: 20 }, region: "United States" },
    { id: 1, name: "India", coords: { x: 75, y: 30 }, region: "Asia Pacific" }
  ];
  
  // Cycle through locations to create a pulsing effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex((prev) => (prev + 1) % locations.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [locations.length]);
  
  return (
    <div className="relative">
      {/* Section header */}
      <div className="mb-4 relative">
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
        <h3 className="text-lg font-semibold relative inline-flex items-center">
          <span className="relative z-10 text-white">
            Contact Us
          </span>
        </h3>
        <div className="mt-2 h-[1px] w-full bg-gradient-to-r from-gray-500/50 via-gray-600/20 to-transparent"></div>
      </div>
      
      {/* Contact card with enhanced Global Presence */}
      <div className="relative mb-4 p-3 rounded-lg border border-gray-700 bg-gray-800/20 backdrop-blur-sm overflow-hidden group hover:bg-gray-800/30 hover:border-gray-600 transition-all duration-300">
        {/* Global presence header with interactive indicator */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <div className="relative mr-2 p-1 rounded-full bg-gray-800/70">
              <Globe className="h-4 w-4 text-blue-400" />
              <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping"></div>
            </div>
            <p className="text-sm text-gray-200 font-medium">Global Presence</p>
          </div>
          <div className="text-xs text-gray-400 bg-gray-800/50 px-2 py-0.5 rounded-full border border-gray-700/50">
            2 Offices
          </div>
        </div>
        
        {/* Enhanced world map visualization */}
        <div className="h-[110px] w-full relative mb-3 overflow-hidden rounded-md group-hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-500">
          <div className="absolute inset-0 bg-gray-900/80"></div>
          
          {/* World map with continents */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
              {/* North America */}
              <path d="M10,15 Q15,10 20,15 T30,20 T20,30" 
                fill="rgba(59, 130, 246, 0.1)" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.3" />
              
              {/* South America */}
              <path d="M25,30 Q30,35 25,40 T30,45" 
                fill="rgba(139, 92, 246, 0.1)" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="0.3" />
              
              {/* Europe */}
              <path d="M45,15 Q50,10 55,15 T50,25" 
                fill="rgba(14, 165, 233, 0.1)" stroke="rgba(14, 165, 233, 0.3)" strokeWidth="0.3" />
              
              {/* Africa */}
              <path d="M45,25 Q55,30 50,40 T40,35" 
                fill="rgba(236, 72, 153, 0.1)" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="0.3" />
              
              {/* Asia */}
              <path d="M60,15 Q70,10 80,20 T70,35" 
                fill="rgba(34, 211, 238, 0.1)" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="0.3" />
              
              {/* Australia */}
              <path d="M80,35 Q90,35 85,45 T75,40" 
                fill="rgba(248, 113, 113, 0.1)" stroke="rgba(248, 113, 113, 0.3)" strokeWidth="0.3" />
              
              {/* Grid lines */}
              <path d="M0,25 L100,25" stroke="rgba(156, 163, 175, 0.1)" strokeWidth="0.2" strokeDasharray="0.5,0.5" />
              <path d="M50,0 L50,50" stroke="rgba(156, 163, 175, 0.1)" strokeWidth="0.2" strokeDasharray="0.5,0.5" />
            </svg>
          </div>
          
          {/* Office locations */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
              {locations.map((location, index) => (
                <g key={location.id} 
                   onMouseEnter={() => setActiveLocation(location.id)}
                   onMouseLeave={() => setActiveLocation(null)}
                   style={{ cursor: 'pointer' }}
                >
                  {/* Location dot */}
                  <circle 
                    cx={location.coords.x} 
                    cy={location.coords.y} 
                    r={activeLocation === location.id ? "1.2" : "0.8"} 
                    fill={activeLocation === location.id ? "#3b82f6" : "#9ca3af"}
                    className="transition-all duration-300"
                  >
                    {pulseIndex === index && (
                      <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
                    )}
                  </circle>
                  
                  {/* Pulse effect */}
                  {(activeLocation === location.id || pulseIndex === index) && (
                    <circle 
                      cx={location.coords.x} 
                      cy={location.coords.y} 
                      r="0" 
                      fill="none"
                      stroke="#3b82f6"
                      strokeWidth="0.3"
                      opacity="0"
                    >
                      <animate attributeName="r" values="0;3" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}
                  
                  {/* Location label */}
                  <text 
                    x={location.coords.x + 1.5} 
                    y={location.coords.y + 0.5} 
                    fontSize="2" 
                    fill={activeLocation === location.id ? "#f3f4f6" : "#9ca3af"}
                    className="transition-all duration-300"
                  >
                    {location.name}
                  </text>
                </g>
              ))}
              
              {/* Connection lines between offices */}
              <g stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.1" strokeDasharray="0.5,0.5">
                <line x1="25" y1="20" x2="75" y2="30" />
              </g>
            </svg>
          </div>
          
          {/* Animated data flow along connection lines */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
              <circle r="0.4" fill="#3b82f6">
                <animateMotion 
                  path="M25,20 L75,30 L25,20" 
                  dur="4s" 
                  repeatCount="indefinite" 
                />
              </circle>
              <circle r="0.3" fill="#8b5cf6">
                <animateMotion 
                  path="M75,30 L25,20 L75,30" 
                  dur="5s" 
                  repeatCount="indefinite" 
                />
              </circle>
            </svg>
          </div>
          
          {/* Hover information panel */}
          {activeLocation !== null && (
            <div className="absolute bottom-1 left-1 right-1 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded p-1 text-xs text-gray-300 transition-all duration-300">
              <div className="flex items-center">
                <Building2 className="h-3 w-3 mr-1 text-blue-400" />
                <span className="font-medium">{locations[activeLocation].name}</span>
                <span className="ml-1 text-gray-400">| {locations[activeLocation].region}</span>
              </div>
            </div>
          )}
          
          {/* Scan line effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            <div className="w-full h-[1px] bg-blue-400/30 animate-scan-fast"></div>
          </div>
        </div>
        
        {/* Region indicators */}
        <div className="flex flex-wrap gap-1 text-xs">
          <div className="px-1.5 py-0.5 rounded-full bg-blue-900/20 text-blue-400 border border-blue-800/30 hover:bg-blue-900/40 hover:border-blue-700 cursor-pointer transition-all duration-300">
            United States
          </div>
          <div className="px-1.5 py-0.5 rounded-full bg-purple-900/20 text-purple-400 border border-purple-800/30 hover:bg-purple-900/40 hover:border-purple-700 cursor-pointer transition-all duration-300">
            Asia Pacific
          </div>
        </div>
        
        {/* Subtle decorative element */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-900/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      </div>
      
      {/* Contact items */}
      <ul className="space-y-4">
        <ContactItem 
          index={0}
          icon={Mail} 
          text="info@reveraforteservices.com" 
          href="mailto:info@reveraforteservices.com"
          label="Email Us"
          isActive={activeItem === 0}
          onHover={() => setActiveItem(0)}
          onLeave={() => setActiveItem(null)}
        />
        <ContactItem 
          index={1}
          icon={Phone} 
          text="+1 (361) 203-9170" 
          href="tel:+13612039170"
          label="Call Us"
          isActive={activeItem === 1}
          onHover={() => setActiveItem(1)}
          onLeave={() => setActiveItem(null)}
        />
        <ContactItem 
          index={2}
          icon={Clock} 
          text="24/7 Support Available" 
          label="Hours"
          isActive={activeItem === 2}
          onHover={() => setActiveItem(2)}
          onLeave={() => setActiveItem(null)}
        />
      </ul>
      
      {/* Subtle decorative elements */}
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-700/10 rounded-full blur-lg"></div>
    </div>
  );
}

function ContactItem({ 
  index,
  icon: Icon, 
  text, 
  href, 
  label,
  isActive,
  onHover,
  onLeave
}: { 
  index: number;
  icon: any; 
  text: string; 
  href?: string; 
  label: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const content = (
    <>
      {/* Icon container */}
      <div className="relative flex items-center justify-center w-10 h-10 mr-3">
        <div className={`absolute inset-0 bg-gray-800 rounded-lg transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}></div>
        
        {/* Simple border */}
        <div className={`absolute inset-0 rounded-lg border border-gray-600 transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
        
        <Icon className={`h-4 w-4 transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`} />
      </div>
      
      {/* Text content */}
      <div className="relative">
        <p className={`text-xs transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-500'} mb-0.5`}>
          {label}
        </p>
        <p className={`transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-300'}`}>{text}</p>
        
        {/* Simple underline */}
        <div className={`absolute -bottom-1 left-0 h-[1px] bg-gray-500 transition-all duration-500 ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0'}`}></div>
      </div>
    </>
  );

  if (href) {
    return (
      <li 
        className="group"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        <a 
          href={href} 
          className={`flex items-start transition-all duration-300 ${isActive ? 'translate-x-1' : 'translate-x-0'}`}
        >
          {content}
          <ExternalLink className={`h-3 w-3 ml-2 mt-5 transition-all duration-300 ${isActive ? 'text-white opacity-100' : 'text-gray-500 opacity-0'}`} />
        </a>
      </li>
    );
  }

  return (
    <li 
      className="flex items-start"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {content}
    </li>
  );
}
