import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, Info, Layers, FileText, MessageSquare, Send } from 'lucide-react';

export default function FooterNavigation() {
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Reset submission state after 3 seconds
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setEmailValue('');
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);
  
  const links = [
    { title: "Home", href: "/", icon: Home },
    { title: "About Us", href: "/about", icon: Info },
    { title: "Services", href: "#", icon: Layers },
    { title: "Case Studies", href: "#", icon: FileText },
    { title: "Contact", href: "#", icon: MessageSquare }
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailValue) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="relative">
      {/* Section header */}
      <div className="mb-4 relative">
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
        <h3 className="text-lg font-semibold relative inline-flex items-center">
          <span className="relative z-10 text-white">
            Navigation
          </span>
        </h3>
        <div className="mt-2 h-[1px] w-full bg-gradient-to-r from-gray-500/50 via-gray-600/20 to-transparent"></div>
      </div>
      
      {/* Navigation panel */}
      <div className="relative mb-4 p-1 rounded-lg border border-gray-700 bg-gray-800/20 backdrop-blur-sm overflow-hidden">
        {/* Navigation links */}
        <ul className="relative z-10 py-1">
          {links.map((link, index) => (
            <li 
              key={index} 
              className="group relative"
              onMouseEnter={() => setActiveLink(index)}
              onMouseLeave={() => setActiveLink(null)}
            >
              {/* Hover background effect */}
              <div 
                className={`absolute inset-0 bg-gray-700/50 opacity-0 ${activeLink === index ? 'opacity-100' : ''} transition-opacity duration-300`}
              ></div>
              
              {link.href.startsWith('/') ? (
                <Link 
                  to={link.href} 
                  className="flex items-center py-2 px-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <NavLinkContent 
                    icon={link.icon} 
                    title={link.title} 
                    isActive={activeLink === index} 
                  />
                </Link>
              ) : (
                <a 
                  href={link.href} 
                  className="flex items-center py-2 px-3 text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <NavLinkContent 
                    icon={link.icon} 
                    title={link.title} 
                    isActive={activeLink === index} 
                  />
                </a>
              )}
              
              {/* Active indicator */}
              <div 
                className={`absolute left-0 top-0 bottom-0 w-[2px] bg-gray-400 transform scale-y-0 origin-top transition-transform duration-300 ${activeLink === index ? 'scale-y-100' : ''}`}
              ></div>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Newsletter subscription */}
      <div className="relative">
        <div className="mb-4">
          <h4 className="text-sm font-medium text-white">
            Subscribe to Newsletter
          </h4>
          <p className="text-xs text-gray-400 mt-1">Stay updated with our latest news</p>
        </div>
        
        <form onSubmit={handleSubmit} className="relative">
          {/* Input field */}
          <div className={`relative group ${isSubmitted ? 'pointer-events-none' : ''}`}>
            <div className={`absolute inset-0 rounded-lg ${isInputFocused ? 'border border-gray-500' : 'border border-gray-700'} transition-all duration-300`}></div>
            
            <input 
              type="email" 
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder="Your email address"
              onFocus={() => setIsInputFocused(true)}
              onBlur={() => setIsInputFocused(false)}
              className={`w-full bg-gray-800/50 rounded-lg py-2.5 pl-3 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${isSubmitted ? 'opacity-0' : 'opacity-100'}`}
              disabled={isSubmitting || isSubmitted}
            />
            
            {/* Submit button with loading and success states */}
            <button 
              type="submit"
              disabled={isSubmitting || isSubmitted || !emailValue}
              className={`absolute right-1 top-1 bottom-1 px-3 rounded ${
                isSubmitting ? 'bg-gray-700' : 
                isSubmitted ? 'bg-green-800/50' : 
                'bg-gray-700 hover:bg-gray-600'
              } transition-all duration-300 ${isSubmitted ? 'opacity-0' : 'opacity-100'}`}
            >
              {isSubmitting ? (
                <div className="h-4 w-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Send className={`h-4 w-4 ${emailValue ? 'text-white' : 'text-gray-500'} transition-colors duration-300`} />
              )}
            </button>
          </div>
          
          {/* Success message */}
          <div 
            className={`absolute inset-0 flex items-center justify-center bg-gray-800/80 backdrop-blur-sm rounded-lg border border-green-800/30 transition-all duration-500 ${
              isSubmitted ? 'opacity-100 transform scale-100' : 'opacity-0 transform scale-95 pointer-events-none'
            }`}
          >
            <div className="flex items-center text-green-400">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-sm">Subscription successful</span>
            </div>
          </div>
        </form>
        
        {/* Privacy note */}
        <p className="text-xs text-gray-500 mt-2">
          We respect your privacy and will not share your data.
        </p>
      </div>
      
      {/* Subtle decorative element */}
      <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gray-700/10 rounded-full blur-xl"></div>
    </div>
  );
}

function NavLinkContent({ 
  icon: Icon, 
  title, 
  isActive 
}: { 
  icon: any; 
  title: string; 
  isActive: boolean;
}) {
  return (
    <>
      {/* Icon */}
      <div className="relative mr-3 w-6 h-6 flex items-center justify-center">
        <div className={`absolute inset-0 rounded-md bg-gray-700 transform transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}></div>
        <Icon className={`h-3.5 w-3.5 transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`} />
      </div>
      
      {/* Text with underline */}
      <span className="relative">
        {title}
        <span className={`absolute -bottom-1 left-0 h-[1px] bg-gray-400 transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}></span>
      </span>
      
      {/* Arrow */}
      <ChevronRight 
        className={`ml-auto h-3 w-3 transition-all duration-300 ${
          isActive ? 'opacity-100 translate-x-0 text-white' : 'opacity-0 -translate-x-2 text-gray-500'
        }`} 
      />
    </>
  );
}