import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import WebDevModal from '../modals/WebDevModal';
import DigitalMarketingModal from '../modals/DigitalMarketingModal';
import ProductDesignModal from '../modals/ProductDesignModal';
import B2BDatabaseModal from '../modals/B2BDatabaseModal';
import CloudDevOpsModal from '../modals/CloudDevOpsModal';
import GoogleMetaAdsModal from '../modals/GoogleMetaAdsModal';
import SeoAutomationModal from '../modals/SeoAutomationModal';
import ResponsiveSupportModal from '../modals/ResponsiveSupportModal';
import { useNavbar } from '../../contexts/NavbarContext';

export default function ServicesGrid() {
  const { hideNavbar, showNavbar } = useNavbar();
  const [isWebDevModalOpen, setIsWebDevModalOpen] = useState(false);
  const [isDigitalMarketingModalOpen, setIsDigitalMarketingModalOpen] = useState(false);
  const [isProductDesignModalOpen, setIsProductDesignModalOpen] = useState(false);
  const [isB2BDatabaseModalOpen, setIsB2BDatabaseModalOpen] = useState(false);
  const [isCloudDevOpsModalOpen, setIsCloudDevOpsModalOpen] = useState(false);
  const [isGoogleMetaAdsModalOpen, setIsGoogleMetaAdsModalOpen] = useState(false);
  const [isSeoAutomationModalOpen, setIsSeoAutomationModalOpen] = useState(false);
  const [isResponsiveSupportModalOpen, setIsResponsiveSupportModalOpen] = useState(false);

  // Function to handle opening modals and hiding navbar
  const handleOpenModal = (setModalState: React.Dispatch<React.SetStateAction<boolean>>) => {
    hideNavbar();
    setModalState(true);
  };

  const services = [
    {
      title: "Digital Marketing",
      description: "Driving growth through data-driven campaigns and inbound marketing strategies",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      onClick: () => handleOpenModal(setIsDigitalMarketingModalOpen)
    },
    {
      title: "Product Design",
      description: "Crafting intuitive and impactful user experiences that delight customers",
      image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&q=80&w=800",
      onClick: () => handleOpenModal(setIsProductDesignModalOpen)
    },
    {
      title: "B2B Database",
      description: "Unlocking targeted insights for smarter business decisions and growth",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      onClick: () => handleOpenModal(setIsB2BDatabaseModalOpen)
    },
    {
      title: "Web Development",
      description: "Building scalable and efficient digital solutions for modern businesses",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800",
      onClick: () => handleOpenModal(setIsWebDevModalOpen)
    },
    {
      title: "Cloud & DevOps",
      description: "Streamline business operations with cloud-driven agility and automation",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      onClick: () => handleOpenModal(setIsCloudDevOpsModalOpen)
    },
    {
      title: "Google & Meta Ads",
      description: "Maximize your reach with precision advertising strategies and optimization",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800",
      onClick: () => handleOpenModal(setIsGoogleMetaAdsModalOpen)
    },
    {
      title: "SEO Automation",
      description: "Setup automated optimization to enhance your visibility and rankings",
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
      onClick: () => handleOpenModal(setIsSeoAutomationModalOpen)
    },
    {
      title: "Responsive Support",
      description: "Deliver timely solutions with exceptional care and dedication",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      onClick: () => handleOpenModal(setIsResponsiveSupportModalOpen)
    }
  ];

  return (
    <>
      <div className="relative">
        {/* Enhanced Decorative elements */}
        <div className="absolute -left-40 top-1/4 w-80 h-80 bg-purple-500/5 rounded-full filter blur-[100px] animate-pulse-slow" />
        <div className="absolute -right-40 bottom-1/4 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[100px] animate-pulse-slow-delay" />
        
        {/* Futuristic connecting lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path 
              d="M20,20 L80,80 M80,20 L20,80 M50,10 L50,90" 
              stroke="url(#grid-gradient)" 
              strokeWidth="0.1" 
              strokeDasharray="1,3"
              className="animate-dash-slow"
            />
            <defs>
              <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.3)" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.1)" />
                <stop offset="100%" stopColor="rgba(45, 212, 191, 0.3)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Enhanced Services grid with improved layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="traninfoorm transition-all duration-500 hover:z-10"
              style={{ 
                animationDelay: `${index * 150}ms`,
                animation: 'fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards'
              }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        
        {/* Enhanced animations */}
        <style jsx global>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              traninfoorm: translateY(30px);
            }
            to {
              opacity: 1;
              traninfoorm: translateY(0);
            }
          }
          
          @keyframes dash-slow {
            to {
              stroke-dashoffset: 20;
            }
          }
          
          .animate-dash-slow {
            stroke-dashoffset: 0;
            animation: dash-slow 15s linear infinite;
          }
        `}</style>
      </div>

      <WebDevModal 
        isOpen={isWebDevModalOpen} 
        onClose={() => {
          setIsWebDevModalOpen(false);
          showNavbar();
        }} 
      />
      <DigitalMarketingModal 
        isOpen={isDigitalMarketingModalOpen} 
        onClose={() => {
          setIsDigitalMarketingModalOpen(false);
          showNavbar();
        }} 
      />
      <ProductDesignModal 
        isOpen={isProductDesignModalOpen} 
        onClose={() => {
          setIsProductDesignModalOpen(false);
          showNavbar();
        }} 
      />
      <B2BDatabaseModal 
        isOpen={isB2BDatabaseModalOpen} 
        onClose={() => {
          setIsB2BDatabaseModalOpen(false);
          showNavbar();
        }} 
      />
      <CloudDevOpsModal 
        isOpen={isCloudDevOpsModalOpen} 
        onClose={() => {
          setIsCloudDevOpsModalOpen(false);
          showNavbar();
        }} 
      />
      <GoogleMetaAdsModal 
        isOpen={isGoogleMetaAdsModalOpen} 
        onClose={() => {
          setIsGoogleMetaAdsModalOpen(false);
          showNavbar();
        }} 
      />
      <SeoAutomationModal 
        isOpen={isSeoAutomationModalOpen} 
        onClose={() => {
          setIsSeoAutomationModalOpen(false);
          showNavbar();
        }} 
      />
      <ResponsiveSupportModal 
        isOpen={isResponsiveSupportModalOpen} 
        onClose={() => {
          setIsResponsiveSupportModalOpen(false);
          showNavbar();
        }} 
      />
    </>
  );
}