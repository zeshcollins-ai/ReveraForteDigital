import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, FileText, Cookie, ExternalLink } from 'lucide-react';

export default function FooterBottom() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hoverLink, setHoverLink] = useState<string | null>(null);
  
  // Update time every second for the timestamp
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Format time
  const formatTimeString = () => {
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };
  
  return (
    <div className="relative">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-700"></div>
      
      <div className="pt-6 mt-6">
        {/* Main footer bottom content */}
        <div className="relative p-2">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 relative z-10">
            {/* Left side with copyright */}
            <div className="flex flex-col items-center md:items-start space-y-3 order-2 md:order-1">
              {/* Copyright with security shield */}
              <div className="flex items-center">
                <div className="relative mr-2 group">
                  <Shield className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-gray-300 text-sm">
                  © {new Date().getFullYear()} <span className="text-white">Revera Forte LLC</span>
                </p>
              </div>
              
              {/* Simple timestamp */}
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <span className="font-mono">{formatTimeString()}</span>
                </div>
                <div className="h-3 w-[1px] bg-gray-700"></div>
                <div className="flex items-center space-x-1">
                  <span className="text-green-500">Online</span>
                </div>
              </div>
            </div>
            
            {/* Center - Security badge */}
            <div className="flex flex-col items-center justify-center order-1 md:order-2 relative">
              {/* Subtle background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-blue-900/5 rounded-full blur-xl"></div>
              <div className="relative group cursor-pointer">
                {/* Hover glow effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-900/0 via-blue-900/10 to-blue-900/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Badge container */}
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full border border-gray-700/80 bg-gray-800/80 backdrop-blur-sm group-hover:border-blue-700/50 transition-all duration-300">
                  {/* Lock icon */}
                  <Lock className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                  
                  {/* Animated pulse ring */}
                  <div className="absolute inset-0 rounded-full border border-blue-500/10 opacity-50 animate-ping-slow"></div>
                  
                  {/* Hover border */}
                  <div className="absolute inset-0 rounded-full border border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                {/* Bottom indicator dot */}
                <div className="absolute -bottom-1 left-1/2 traninfoorm -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Text label */}
              <div className="mt-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex items-center">
                <span className="relative">
                  Secure Connection
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-blue-500/30 group-hover:w-full transition-all duration-500"></span>
                </span>
              </div>
            </div>
            
            {/* Right side with legal links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 order-3">
              <FooterLink 
                href="/privacy" 
                icon={FileText} 
                onHover={() => setHoverLink('privacy')}
                onLeave={() => setHoverLink(null)}
                isHovered={hoverLink === 'privacy'}
              >
                Privacy Policy
              </FooterLink>
              <FooterLink 
                href="/terms" 
                icon={FileText} 
                onHover={() => setHoverLink('terms')}
                onLeave={() => setHoverLink(null)}
                isHovered={hoverLink === 'terms'}
              >
                Terms of Service
              </FooterLink>
              <FooterLink 
                href="/cookies" 
                icon={Cookie} 
                onHover={() => setHoverLink('cookies')}
                onLeave={() => setHoverLink(null)}
                isHovered={hoverLink === 'cookies'}
              >
                Cookie Policy
              </FooterLink>
              <FooterLink 
                href="https://www.reveraforte.com" 
                icon={ExternalLink} 
                onHover={() => setHoverLink('site')}
                onLeave={() => setHoverLink(null)}
                isHovered={hoverLink === 'site'}
                isExternal
              >
                Main Site
              </FooterLink>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gray-700"></div>
      
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes ping-slow {
          0% { traninfoorm: scale(1); opacity: 0.2; }
          50% { traninfoorm: scale(1.2); opacity: 0.3; }
          100% { traninfoorm: scale(1); opacity: 0.2; }
        }
        
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}

function FooterLink({ 
  href, 
  children, 
  icon: Icon,
  onHover,
  onLeave,
  isHovered,
  isExternal
}: { 
  href: string; 
  children: React.ReactNode;
  icon: any;
  onHover: () => void;
  onLeave: () => void;
  isHovered: boolean;
  isExternal?: boolean;
}) {
  return (
    <a 
      href={href} 
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="text-gray-400 hover:text-white text-xs transition-colors duration-300 relative group flex items-center"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Icon */}
      <div className="relative mr-1.5">
        <Icon className={`h-3 w-3 transition-all duration-300 ${isHovered ? 'text-white' : 'text-gray-500'}`} />
      </div>
      
      {/* Text with underline */}
      <span className="relative">
        {children}
        <span className={`absolute -bottom-1 left-0 h-[1px] bg-gray-500 transition-all duration-300 ${isHovered ? 'w-full' : 'w-0'}`}></span>
      </span>
    </a>
  );
}
