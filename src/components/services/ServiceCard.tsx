import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  onClick?: () => void;
}

export default function ServiceCard({ title, description, image, onClick }: ServiceCardProps) {
  return (
    <div 
      className={`group relative h-[340px] rounded-2xl overflow-hidden transform perspective-1000 transition-all duration-500 hover:scale-[1.03] backdrop-blur-md bg-gradient-to-br from-gray-900/90 to-black/90 border border-gray-800/30 hover:border-purple-500/40 ${onClick ? 'cursor-pointer' : ''} shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.15)]`}
      onClick={onClick}
    >
      {/* Advanced Futuristic Glowing Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-600/20 rounded-full filter blur-2xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-cyan-600/20 rounded-full filter blur-2xl animate-pulse-slow-delay" />
      </div>
      
      {/* Enhanced Background Image with Advanced Overlay */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-40 filter saturate-50 group-hover:saturate-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/95 to-gray-900/80 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Enhanced Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.07] group-hover:opacity-[0.12] transition-opacity duration-500" />
        
        {/* Subtle Scan Line Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.05)_50%)] bg-[size:100%_4px] opacity-20"></div>
      </div>

      {/* Glowing Border Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
        <div className="absolute inset-0 -m-1 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-cyan-500/0 rounded-2xl blur-sm"></div>
      </div>

      {/* Enhanced Content */}
      <div className="relative h-full p-8 flex flex-col justify-end transform transition-all duration-500">
        {/* Floating Service Number */}
        <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-md animate-pulse-slow"></div>
          <div className="relative text-xs font-light text-purple-300/70 border border-purple-500/20 rounded-full w-8 h-8 flex items-center justify-center backdrop-blur-sm">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-cyan-300">
              {title.charAt(0)}
            </span>
          </div>
        </div>
        
        <div className="transform transition-all duration-500 group-hover:translate-y-[-12px]">
          {/* Enhanced Title with Gradient Animation */}
          <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-500">
            {title}
          </h3>
          
          {/* Enhanced Description with Better Typography */}
          <p className="text-gray-400 transform transition-all duration-500 opacity-90 group-hover:opacity-100 mb-6 font-light leading-relaxed">
            {description}
          </p>
          
          {/* Enhanced Learn More Button */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/20 text-sm font-medium text-purple-300 group-hover:text-white transition-colors duration-500 group-hover:bg-purple-800/40 group-hover:border-purple-500/40">
            <span>Explore service</span>
            <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-1" />
          </div>
        </div>
        
        {/* Enhanced 3D Effect Elements */}
        <div className="absolute inset-0 border border-purple-500/0 rounded-2xl transition-all duration-500 transform group-hover:border-purple-500/10 group-hover:scale-[0.98] group-hover:rotate-1" />
        <div className="absolute inset-0 border border-cyan-500/0 rounded-2xl transition-all duration-500 transform group-hover:border-cyan-500/10 group-hover:scale-[1.02] group-hover:rotate-[-1deg]" />
      </div>
      
      {/* Hover Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/70 to-cyan-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
    </div>
  );
}