import React, { useState } from 'react';
import { ChevronRight, Zap, Code, Database, Cloud, BarChart3 } from 'lucide-react';

export default function FooterLinks() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const links = [
    { 
      title: "Software Development", 
      href: "#",
      icon: Code,
      description: "Advanced application solutions"
    },
    { 
      title: "Web Development", 
      href: "#",
      icon: Zap,
      description: "Modern web experiences"
    },
    { 
      title: "Database Solutions", 
      href: "#",
      icon: Database,
      description: "Optimized data systems"
    },
    { 
      title: "Cloud Infrastructure", 
      href: "#",
      icon: Cloud,
      description: "Scalable enterprise solutions"
    },
    { 
      title: "Analytics Services", 
      href: "#",
      icon: BarChart3,
      description: "Data-driven insights"
    }
  ];

  return (
    <div className="relative">
      {/* Section header */}
      <div className="mb-4 relative">
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
        <h3 className="text-lg font-semibold relative inline-flex items-center">
          <span className="relative z-10 text-white">
            Services
          </span>
          <div className="ml-2 w-2 h-2 rounded-full bg-gray-500 opacity-70 animate-pulse"></div>
        </h3>
        <div className="mt-2 h-[1px] w-full bg-gradient-to-r from-gray-500/50 via-gray-600/20 to-transparent"></div>
      </div>
      
      {/* Service links */}
      <ul className="space-y-4">
        {links.map((link, index) => (
          <li 
            key={index} 
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a 
              href={link.href} 
              className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
            >
              {/* Icon container */}
              <div className="relative mr-3 w-8 h-8 flex items-center justify-center">
                <div className={`absolute inset-0 rounded-md bg-gray-800/80 traninfoorm transition-all duration-300 ${hoveredIndex === index ? 'scale-110 opacity-100' : 'scale-100 opacity-70'}`}></div>
                <link.icon className={`h-4 w-4 transition-all duration-300 ${hoveredIndex === index ? 'text-white scale-110' : 'text-gray-400'}`} />
              </div>
              
              {/* Text content with hover effects */}
              <div className="relative">
                <div className="flex flex-col">
                  <span className="font-medium relative">
                    {link.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gray-400 group-hover:w-full transition-all duration-300"></span>
                  </span>
                  
                  {/* Description that appears on hover */}
                  <span 
                    className={`text-xs text-gray-500 transition-all duration-300 ${
                      hoveredIndex === index ? 'opacity-100 max-h-10 mt-1' : 'opacity-0 max-h-0 mt-0'
                    }`}
                  >
                    {link.description}
                  </span>
                </div>
                
                {/* Arrow */}
                <ChevronRight 
                  className={`absolute right-0 top-1 h-3 w-3 text-gray-500 group-hover:text-white transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                  }`} 
                />
              </div>
            </a>
            
            {/* Hover background effect */}
            <div 
              className={`absolute -inset-x-4 -inset-y-2 rounded-lg bg-gray-800/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
            ></div>
          </li>
        ))}
      </ul>
      
      {/* Subtle decorative elements */}
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-gray-700/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gray-700/10 rounded-full blur-xl"></div>
    </div>
  );
}