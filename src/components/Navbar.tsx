import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Zap, Cpu, Power, Shield, Globe, Code, BarChart } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Logo from './common/Logo';
import Button from './common/Button';
import emailjs from '@emailjs/browser';
import { useNavbar } from '../contexts/NavbarContext';
import './navbarAnimations.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const navbarRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_message: 'Website',
  });
  const navigate = useNavigate();
  const location = useLocation();
  const { isNavbarVisible } = useNavbar();
  
  // Set active link based on current location
  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path);
  }, [location]);

  const navLinks = [
    { href: '/home', label: 'Home', icon: Power },
    {
      href: '#services', // Link to the services section
      label: 'Services',
      icon: Shield,
      dropdown: [
        { href: '/digital-marketing', label: 'Digital Marketing', icon: BarChart },
        { href: '/services/seo-services', label: 'SEO Services', icon: Globe },
        { href: '/services/social-media-management', label: 'Social Media Management', icon: BarChart },
        { href: '/services/ads-marketing', label: 'Ads & Marketing', icon: BarChart },
        { href: '/web-development', label: 'Web Development', icon: Code },
        { href: '/software-development', label: 'Software Development', icon: Cpu },
        { href: '/b2b-outreach', label: 'B2B Outreach', icon: Zap },
      ],
    },
	{ href: '/case-studies', label: 'Case Studies', icon: BarChart },
    { href: '/resources', label: 'Resources', icon: Code },
    { href: '/about', label: 'About', icon: Shield },
    { href: '/contact', label: 'Contact', icon: Globe },
  ];

  // Scroll to top whenever the pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Create floating particles effect
  useEffect(() => {
    if (!navbarRef.current) return;
    
    const navbar = navbarRef.current;
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.classList.add('cyber-particle');
      
      // Random position within navbar
      const xPos = Math.random() * navbar.offsetWidth;
      particle.style.left = `${xPos}px`;
      particle.style.bottom = '0px';
      
      // Random size
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random color
      const colors = [
        'rgba(138, 43, 226, 0.8)', 
        'rgba(0, 255, 255, 0.8)', 
        'rgba(255, 255, 255, 0.6)',
        'rgba(255, 0, 255, 0.6)'
      ];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      // Random animation duration
      const duration = Math.random() * 4 + 2;
      particle.style.animation = `float-up ${duration}s cubic-bezier(0.16, 1, 0.3, 1)`;
      
      navbar.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (particle && navbar.contains(particle)) {
          navbar.removeChild(particle);
        }
      }, duration * 1000);
    };
    
    // Create particles at intervals
    const particleInterval = setInterval(() => {
      if (isNavbarVisible) {
        // Create multiple particles at once for a more dramatic effect
        for (let i = 0; i < 3; i++) {
          setTimeout(() => createParticle(), i * 100);
        }
      }
    }, 1000);
    
    return () => clearInterval(particleInterval);
  }, [isNavbarVisible]);

  const handleScrollToSection = (sectionId: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
    }
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_o1g2jn2', // Replace with your EmailJS Service ID
        'template_12x8349', // Replace with your EmailJS Template ID
        formData,
        'VTFRY_TDhjXiiw20v' // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          alert('Message sent successfully!');
          setFormData({
            user_name: '',
            user_email: '',
            user_phone: '',
            user_message: 'Website',
          });
          closeModal();
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('Failed to send the message. Please try again later.');
        }
      );
  };

  return (
    <>
      {/* Ultra Futuristic Navbar */}
      <nav 
        ref={navbarRef}
        className={`fixed w-full z-50 transition-all duration-500 ${isNavbarVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-black/80 backdrop-blur-md border border-purple-500/30 rounded-lg relative overflow-visible shadow-lg"
               style={{ boxShadow: '0 0 20px rgba(138, 43, 226, 0.3)' }}>
            {/* Simple background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10 rounded-lg"></div>
            
            <div className="px-4 sm:px-6 lg:px-8 py-2 relative z-10">
              <div className="flex items-center justify-between h-16">
                {/* Logo with enhanced animation */}
                <Link to="/" className="relative z-10 flex-shrink-0">
                  <Logo />
                </Link>
                
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-4 flex-1 justify-end">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <div key={link.href} className="relative">
                        {link.dropdown ? (
                          <div
                            className="group"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                          >
                            <button
                              onClick={() => handleScrollToSection(link.href.replace('#', ''))}
                              className="neon-link flex items-center px-2 py-2 text-sm"
                            >
                              {Icon && <Icon className="h-4 w-4 mr-1 text-cyan-400" />}
                              {link.label}
                              <ChevronDown className="ml-1 h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
                            </button>
                            
                            {isServicesOpen && (
                              <div className="absolute top-full left-0 mt-2 w-64 bg-black border border-purple-500 shadow-lg rounded-lg z-[1000]">
                                {link.dropdown.map((subLink) => {
                                  const SubIcon = subLink.icon;
                                  return (
                                    <Link
                                      key={subLink.href}
                                      to={subLink.href}
                                      className="block flex items-center px-4 py-3 text-sm text-white hover:bg-purple-900 border-b border-purple-800 last:border-0"
                                    >
                                      {SubIcon && <SubIcon className="h-4 w-4 mr-2 text-cyan-400" />}
                                      {subLink.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            to={link.href}
                            className={`neon-link flex items-center px-2 py-2 text-sm ${
                              activeLink === link.href ? 'active' : ''
                            }`}
                          >
                            {Icon && <Icon className="h-4 w-4 mr-1 text-cyan-400" />}
                            {link.label}
                          </Link>
                        )}
                      </div>
                    );
                  })}
                  
                  {/* Get Started Button with enhanced styling */}
                  <Button 
                    variant="primary" 
                    className="whitespace-nowrap" 
                    onClick={openModal}
                    icon={Zap}
                  >
                    Get Started
                  </Button>
                </div>
                
                {/* Mobile menu button */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-md bg-purple-900/50 border border-purple-500/50"
                    aria-label="Toggle menu"
                  >
                    {isOpen ? 
                      <X className="h-6 w-6 text-white" /> : 
                      <Menu className="h-6 w-6 text-white" />
                    }
                  </button>
                </div>
              </div>
            </div>
            
            {/* Mobile Navigation Menu */}
            {isOpen && (
              <div className="lg:hidden bg-black/90 border-t border-purple-500/30 px-4 pt-3 pb-4 space-y-2 rounded-b-lg">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <div key={link.href} className="py-1">
                      {link.dropdown ? (
                        <div className="rounded-md overflow-hidden">
                          <div
                            className="text-white block px-4 py-3 rounded-md text-base font-medium cursor-pointer bg-purple-900/20 hover:bg-purple-900/30 transition-all border border-purple-500/30"
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                          >
                            <div className="flex items-center justify-between">
                              <button
                                onClick={() => handleScrollToSection(link.href.replace('#', ''))}
                                className="text-white flex items-center"
                              >
                                {Icon && <Icon className="h-5 w-5 mr-2 text-cyan-400" />}
                                {link.label}
                              </button>
                              <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                            </div>
                          </div>
                          
                          {isServicesOpen && (
                            <div className="mt-1 pl-4 border-l-2 border-purple-500 ml-3 bg-black/80 rounded-md py-2">
                              {link.dropdown.map((subLink) => {
                                const SubIcon = subLink.icon;
                                return (
                                  <Link
                                    key={subLink.href}
                                    to={subLink.href}
                                    className="flex items-center px-3 py-3 text-base text-white hover:bg-purple-900/30 rounded-md transition-all"
                                  >
                                    {SubIcon && <SubIcon className="h-5 w-5 mr-2 text-cyan-400" />}
                                    {subLink.label}
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={link.href}
                          className={`flex items-center px-4 py-3 rounded-md text-base font-medium transition-all ${
                            activeLink === link.href 
                              ? 'text-white bg-gradient-to-r from-purple-600/30 to-cyan-600/30 border border-purple-500/50' 
                              : 'text-white hover:bg-purple-900/20 border border-transparent hover:border-purple-500/30'
                          }`}
                        >
                          {Icon && <Icon className="h-5 w-5 mr-2 text-cyan-400" />}
                          {link.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
                
                <div className="pt-3">
                  <Button 
                    variant="primary" 
                    className="w-full py-3" 
                    onClick={openModal}
                    icon={Zap}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Ultra Futuristic Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl"
          onClick={closeModal}
        >
          <div
            className="cyber-modal relative text-white p-8 rounded-lg w-full max-w-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Animated background grid */}
            <div className="cyber-grid absolute inset-0 opacity-10"></div>
            
            {/* Circuit board pattern */}
            <div className="circuit-pattern"></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-purple-500/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl"></div>
            
            {/* Scan line */}
            <div className="scan-line"></div>
            
            {/* Close button */}
            <button 
              onClick={closeModal}
              className="cyber-toggle absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Get Started
              </h2>
              <p className="text-gray-400 text-center mb-6">Fill out the form below to begin your journey</p>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-1 group-focus-within:text-cyan-400 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      className="cyber-input mt-1 block w-full border border-gray-700 bg-black/60 rounded-lg text-sm placeholder-gray-500 text-white px-4 py-3"
                      placeholder="Enter your name"
                    />
                    <div className="cyber-input-glow"></div>
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-1 group-focus-within:text-cyan-400 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      className="cyber-input mt-1 block w-full border border-gray-700 bg-black/60 rounded-lg text-sm placeholder-gray-500 text-white px-4 py-3"
                      placeholder="Enter your email"
                    />
                    <div className="cyber-input-glow"></div>
                  </div>
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-1 group-focus-within:text-cyan-400 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Phone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="user_phone"
                      value={formData.user_phone}
                      onChange={handleChange}
                      className="cyber-input mt-1 block w-full border border-gray-700 bg-black/60 rounded-lg text-sm placeholder-gray-500 text-white px-4 py-3"
                      placeholder="Enter your phone number"
                    />
                    <div className="cyber-input-glow"></div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={handleSubmit}
                    icon={Zap}
                  >
                    Submit
                  </Button>
                </div>
              </form>
              
              {/* Decorative corner elements */}
              <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></span>
              <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500"></span>
              <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500"></span>
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}