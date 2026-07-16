import React, { useState } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import ConsultationModal from './modals/ConsultationModal';
import { useNavbar } from '../contexts/NavbarContext';

interface ConsultationButtonProps {
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

const ConsultationButton = ({ 
  className = '', 
  variant = 'primary',
  size = 'md',
  text = 'Schedule Strategic Consultation'
}: ConsultationButtonProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { hideNavbar, showNavbar } = useNavbar();

  const handleOpenModal = () => {
    hideNavbar();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    showNavbar();
  };

  // Base styles
  let buttonStyles = '';
  
  // Size variations
  if (size === 'sm') {
    buttonStyles += 'px-4 py-2 text-sm ';
  } else if (size === 'md') {
    buttonStyles += 'px-6 py-3 text-base ';
  } else if (size === 'lg') {
    buttonStyles += 'px-8 py-4 text-lg ';
  }
  
  // Variant styles
  if (variant === 'primary') {
    buttonStyles += 'group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 p-px hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all duration-300 ';
  } else if (variant === 'secondary') {
    buttonStyles += 'group relative overflow-hidden rounded-xl bg-gray-800 border border-purple-500/30 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300 ';
  } else if (variant === 'outline') {
    buttonStyles += 'group relative overflow-hidden rounded-xl border border-purple-500/30 hover:border-purple-500/70 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300 ';
  }

  return (
    <>
      <button 
        onClick={handleOpenModal}
        className={`${buttonStyles} ${className}`}
      >
        {variant === 'primary' && (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-cyan-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center px-4 py-2 bg-gray-900 rounded-[calc(0.75rem-1px)]">
              <Calendar className="h-4 w-4 mr-2 text-purple-300" />
              <span className="font-medium text-white">{text}</span>
              <ArrowRight className="ml-2 h-4 w-4 text-purple-300 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </>
        )}
        
        {variant === 'secondary' && (
          <div className="relative flex items-center justify-center">
            <Calendar className="h-4 w-4 mr-2 text-purple-400" />
            <span className="font-medium text-white">{text}</span>
            <ArrowRight className="ml-2 h-4 w-4 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        )}
        
        {variant === 'outline' && (
          <div className="relative flex items-center justify-center">
            <Calendar className="h-4 w-4 mr-2 text-purple-500" />
            <span className="font-medium text-purple-500 group-hover:text-purple-400 transition-colors duration-300">{text}</span>
            <ArrowRight className="ml-2 h-4 w-4 text-purple-500 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        )}
      </button>
      
      <ConsultationModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ConsultationButton;