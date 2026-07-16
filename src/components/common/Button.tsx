import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  className?: string;
  onClick?: () => void;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  className = '',
  onClick 
}: ButtonProps) {
  const baseStyles = "px-3 py-1.5 rounded-md font-medium flex items-center justify-center gap-1 transition-all duration-300 text-sm";
  
  const variants = {
    primary: `
      bg-gradient-to-r from-purple-600 to-cyan-600 
      text-white 
      hover:shadow-lg 
      hover:from-purple-500 hover:to-cyan-500
    `,
    secondary: `
      bg-black/30 
      backdrop-blur-sm 
      text-white 
      border 
      border-white/10 
      hover:bg-white/10 
      hover:border-purple-500/50
    `
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="flex items-center justify-center whitespace-nowrap">
        {children}
        {Icon && <Icon className="h-5 w-5 ml-1" />}
      </span>
    </button>
  );
}