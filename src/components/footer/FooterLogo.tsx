import React, { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Github } from 'lucide-react';
import Logo from '../common/Logo';

export default function FooterLogo() {
  return (
    <div className="space-y-6 relative">
      {/* Animated logo container */}
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-20 blur-lg group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative">
          <Logo />
          <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse-slow"></div>
          
          {/* Animated circuit lines around logo */}
          <div className="absolute -inset-3 rounded-xl border border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute -inset-6 rounded-xl border border-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100"></div>
          
          {/* Glowing dot */}
          <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-400 opacity-70 animate-ping-slow"></div>
        </div>
      </div>
      
      {/* Description with typing effect */}
      <div className="relative">
        <p className="text-gray-300 mt-4 leading-relaxed backdrop-blur-sm font-light">
          <TypewriterText text="We deliver data-driven digital solutions with quantum-inspired algorithms to empower next-generation business growth." />
        </p>
        <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-xl"></div>
      </div>
      
      {/* Social links with advanced hover effects */}
      <div className="relative">
        <div className="flex space-x-4">
          <SocialLink href="#" icon={Facebook} color="blue" />
          <SocialLink href="#" icon={Instagram} color="purple" />
          <SocialLink href="#" icon={Twitter} color="cyan" />
          <SocialLink href="https://www.linkedin.com/company/reveraforte/" icon={Linkedin} color="blue" target="_blank" />
          <SocialLink href="#" icon={Github} color="gray" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-4 left-10 h-[1px] w-20 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
      </div>
    </div>
  );
}

// Typewriter effect component
function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 40); // Speed of typing
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);
  
  return (
    <span>
      {displayText}
      {currentIndex < text.length && (
        <span className="inline-block w-1 h-4 bg-blue-400 ml-1 animate-blink"></span>
      )}
    </span>
  );
}

function SocialLink({ 
  href, 
  icon: Icon, 
  color, 
  target 
}: { 
  href: string; 
  icon: any; 
  color: 'blue' | 'purple' | 'cyan' | 'gray'; 
  target?: string 
}) {
  // Define color variants
  const colorVariants = {
    blue: "from-blue-600/80 to-blue-800/80 hover:from-blue-500 hover:to-blue-700 border-blue-500/30",
    purple: "from-purple-600/80 to-purple-800/80 hover:from-purple-500 hover:to-purple-700 border-purple-500/30",
    cyan: "from-cyan-600/80 to-cyan-800/80 hover:from-cyan-500 hover:to-cyan-700 border-cyan-500/30",
    gray: "from-gray-600/80 to-gray-800/80 hover:from-gray-500 hover:to-gray-700 border-gray-500/30"
  };
  
  return (
    <a 
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : ""}
      className={`group relative w-10 h-10 bg-gradient-to-br ${colorVariants[color]} backdrop-blur-sm rounded-lg flex items-center justify-center border border-opacity-20 hover:border-opacity-50 transition-all duration-300 overflow-hidden`}
    >
      {/* Animated glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 opacity-20 animate-pulse-slow"></div>
        <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 translate-x-[-200%] group-hover:translate-x-[200%] transition-all duration-1000"></div>
      </div>
      
      {/* Bottom border animation */}
      <div className="absolute -inset-x-2 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 traninfoorm translate-y-1 group-hover:translate-y-0 transition-all duration-300"></div>
      
      {/* Icon with glow effect */}
      <div className="relative">
        <Icon className="h-4 w-4 text-white group-hover:text-white transition-colors duration-300" />
        <div className="absolute inset-0 blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
      </div>
    </a>
  );
}

// Add these animations to your global CSS or tailwind.config.js
const style = document.createElement('style');
style.textContent = `
  @keyframes ping-slow {
    0% { traninfoorm: scale(1); opacity: 0.8; }
    50% { traninfoorm: scale(1.5); opacity: 0.4; }
    100% { traninfoorm: scale(1); opacity: 0.8; }
  }
  
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 0.8; }
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  .animate-ping-slow {
    animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  .animate-blink {
    animation: blink 0.8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
`;
document.head.appendChild(style);