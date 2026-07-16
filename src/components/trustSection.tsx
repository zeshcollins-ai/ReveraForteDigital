import React, { useEffect, useState, useRef } from 'react';
import { 
  Brain, 
  Zap, 
  LineChart, 
  Shield, 
  Rocket,
  Globe,
  ArrowRight,
  Star,
  X,
  User,
  Mail,
  Building,
  Phone
} from 'lucide-react';
import './quantumAnimations.css';

export default function TrustSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInView, setIsInView] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState('+1');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [countrySearchQuery, setCountrySearchQuery] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  
  // Comprehensive list of country codes for the dropdown
  const countryCodes = [
    { code: '+93', country: 'AF', name: 'Afghanistan' },
    { code: '+355', country: 'AL', name: 'Albania' },
    { code: '+213', country: 'DZ', name: 'Algeria' },
    { code: '+376', country: 'AD', name: 'Andorra' },
    { code: '+244', country: 'AO', name: 'Angola' },
    { code: '+54', country: 'AR', name: 'Argentina' },
    { code: '+374', country: 'AM', name: 'Armenia' },
    { code: '+61', country: 'AU', name: 'Australia' },
    { code: '+43', country: 'AT', name: 'Austria' },
    { code: '+994', country: 'AZ', name: 'Azerbaijan' },
    { code: '+973', country: 'BH', name: 'Bahrain' },
    { code: '+880', country: 'BD', name: 'Bangladesh' },
    { code: '+375', country: 'BY', name: 'Belarus' },
    { code: '+32', country: 'BE', name: 'Belgium' },
    { code: '+501', country: 'BZ', name: 'Belize' },
    { code: '+229', country: 'BJ', name: 'Benin' },
    { code: '+975', country: 'BT', name: 'Bhutan' },
    { code: '+591', country: 'BO', name: 'Bolivia' },
    { code: '+387', country: 'BA', name: 'Bosnia & Herzegovina' },
    { code: '+267', country: 'BW', name: 'Botswana' },
    { code: '+55', country: 'BR', name: 'Brazil' },
    { code: '+673', country: 'BN', name: 'Brunei' },
    { code: '+359', country: 'BG', name: 'Bulgaria' },
    { code: '+226', country: 'BF', name: 'Burkina Faso' },
    { code: '+257', country: 'BI', name: 'Burundi' },
    { code: '+855', country: 'KH', name: 'Cambodia' },
    { code: '+237', country: 'CM', name: 'Cameroon' },
    { code: '+1', country: 'CA', name: 'Canada' },
    { code: '+236', country: 'CF', name: 'Central African Rep.' },
    { code: '+235', country: 'TD', name: 'Chad' },
    { code: '+56', country: 'CL', name: 'Chile' },
    { code: '+86', country: 'CN', name: 'China' },
    { code: '+57', country: 'CO', name: 'Colombia' },
    { code: '+269', country: 'KM', name: 'Comoros' },
    { code: '+242', country: 'CG', name: 'Congo' },
    { code: '+506', country: 'CR', name: 'Costa Rica' },
    { code: '+385', country: 'HR', name: 'Croatia' },
    { code: '+53', country: 'CU', name: 'Cuba' },
    { code: '+357', country: 'CY', name: 'Cyprus' },
    { code: '+420', country: 'CZ', name: 'Czech Republic' },
    { code: '+45', country: 'DK', name: 'Denmark' },
    { code: '+253', country: 'DJ', name: 'Djibouti' },
    { code: '+1-809', country: 'DO', name: 'Dominican Republic' },
    { code: '+243', country: 'CD', name: 'DR Congo' },
    { code: '+593', country: 'EC', name: 'Ecuador' },
    { code: '+20', country: 'EG', name: 'Egypt' },
    { code: '+503', country: 'SV', name: 'El Salvador' },
    { code: '+240', country: 'GQ', name: 'Equatorial Guinea' },
    { code: '+291', country: 'ER', name: 'Eritrea' },
    { code: '+372', country: 'EE', name: 'Estonia' },
    { code: '+268', country: 'SZ', name: 'Eswatini' },
    { code: '+251', country: 'ET', name: 'Ethiopia' },
    { code: '+679', country: 'FJ', name: 'Fiji' },
    { code: '+358', country: 'FI', name: 'Finland' },
    { code: '+33', country: 'FR', name: 'France' },
    { code: '+241', country: 'GA', name: 'Gabon' },
    { code: '+220', country: 'GM', name: 'Gambia' },
    { code: '+995', country: 'GE', name: 'Georgia' },
    { code: '+49', country: 'DE', name: 'Germany' },
    { code: '+233', country: 'GH', name: 'Ghana' },
    { code: '+30', country: 'GR', name: 'Greece' },
    { code: '+502', country: 'GT', name: 'Guatemala' },
    { code: '+224', country: 'GN', name: 'Guinea' },
    { code: '+592', country: 'GY', name: 'Guyana' },
    { code: '+509', country: 'HT', name: 'Haiti' },
    { code: '+504', country: 'HN', name: 'Honduras' },
    { code: '+36', country: 'HU', name: 'Hungary' },
    { code: '+354', country: 'IS', name: 'Iceland' },
    { code: '+91', country: 'IN', name: 'India' },
    { code: '+62', country: 'ID', name: 'Indonesia' },
    { code: '+98', country: 'IR', name: 'Iran' },
    { code: '+964', country: 'IQ', name: 'Iraq' },
    { code: '+353', country: 'IE', name: 'Ireland' },
    { code: '+972', country: 'IL', name: 'Israel' },
    { code: '+39', country: 'IT', name: 'Italy' },
    { code: '+1-876', country: 'JM', name: 'Jamaica' },
    { code: '+81', country: 'JP', name: 'Japan' },
    { code: '+962', country: 'JO', name: 'Jordan' },
    { code: '+7', country: 'KZ', name: 'Kazakhstan' },
    { code: '+254', country: 'KE', name: 'Kenya' },
    { code: '+965', country: 'KW', name: 'Kuwait' },
    { code: '+996', country: 'KG', name: 'Kyrgyzstan' },
    { code: '+856', country: 'LA', name: 'Laos' },
    { code: '+371', country: 'LV', name: 'Latvia' },
    { code: '+961', country: 'LB', name: 'Lebanon' },
    { code: '+266', country: 'LS', name: 'Lesotho' },
    { code: '+231', country: 'LR', name: 'Liberia' },
    { code: '+218', country: 'LY', name: 'Libya' },
    { code: '+423', country: 'LI', name: 'Liechtenstein' },
    { code: '+370', country: 'LT', name: 'Lithuania' },
    { code: '+352', country: 'LU', name: 'Luxembourg' },
    { code: '+261', country: 'MG', name: 'Madagascar' },
    { code: '+265', country: 'MW', name: 'Malawi' },
    { code: '+60', country: 'MY', name: 'Malaysia' },
    { code: '+960', country: 'MV', name: 'Maldives' },
    { code: '+223', country: 'ML', name: 'Mali' },
    { code: '+356', country: 'MT', name: 'Malta' },
    { code: '+222', country: 'MR', name: 'Mauritania' },
    { code: '+230', country: 'MU', name: 'Mauritius' },
    { code: '+52', country: 'MX', name: 'Mexico' },
    { code: '+373', country: 'MD', name: 'Moldova' },
    { code: '+377', country: 'MC', name: 'Monaco' },
    { code: '+976', country: 'MN', name: 'Mongolia' },
    { code: '+382', country: 'ME', name: 'Montenegro' },
    { code: '+212', country: 'MA', name: 'Morocco' },
    { code: '+258', country: 'MZ', name: 'Mozambique' },
    { code: '+95', country: 'MM', name: 'Myanmar' },
    { code: '+264', country: 'NA', name: 'Namibia' },
    { code: '+977', country: 'NP', name: 'Nepal' },
    { code: '+31', country: 'NL', name: 'Netherlands' },
    { code: '+64', country: 'NZ', name: 'New Zealand' },
    { code: '+505', country: 'NI', name: 'Nicaragua' },
    { code: '+227', country: 'NE', name: 'Niger' },
    { code: '+234', country: 'NG', name: 'Nigeria' },
    { code: '+850', country: 'KP', name: 'North Korea' },
    { code: '+389', country: 'MK', name: 'North Macedonia' },
    { code: '+47', country: 'NO', name: 'Norway' },
    { code: '+968', country: 'OM', name: 'Oman' },
    { code: '+92', country: 'PK', name: 'Pakistan' },
    { code: '+970', country: 'PS', name: 'Palestine' },
    { code: '+507', country: 'PA', name: 'Panama' },
    { code: '+675', country: 'PG', name: 'Papua New Guinea' },
    { code: '+595', country: 'PY', name: 'Paraguay' },
    { code: '+51', country: 'PE', name: 'Peru' },
    { code: '+63', country: 'PH', name: 'Philippines' },
    { code: '+48', country: 'PL', name: 'Poland' },
    { code: '+351', country: 'PT', name: 'Portugal' },
    { code: '+974', country: 'QA', name: 'Qatar' },
    { code: '+40', country: 'RO', name: 'Romania' },
    { code: '+7', country: 'RU', name: 'Russia' },
    { code: '+250', country: 'RW', name: 'Rwanda' },
    { code: '+966', country: 'SA', name: 'Saudi Arabia' },
    { code: '+221', country: 'SN', name: 'Senegal' },
    { code: '+381', country: 'RS', name: 'Serbia' },
    { code: '+248', country: 'SC', name: 'Seychelles' },
    { code: '+232', country: 'SL', name: 'Sierra Leone' },
    { code: '+65', country: 'SG', name: 'Singapore' },
    { code: '+421', country: 'SK', name: 'Slovakia' },
    { code: '+386', country: 'SI', name: 'Slovenia' },
    { code: '+252', country: 'SO', name: 'Somalia' },
    { code: '+27', country: 'ZA', name: 'South Africa' },
    { code: '+82', country: 'KR', name: 'South Korea' },
    { code: '+211', country: 'SS', name: 'South Sudan' },
    { code: '+34', country: 'ES', name: 'Spain' },
    { code: '+94', country: 'LK', name: 'Sri Lanka' },
    { code: '+249', country: 'SD', name: 'Sudan' },
    { code: '+597', country: 'SR', name: 'Suriname' },
    { code: '+46', country: 'SE', name: 'Sweden' },
    { code: '+41', country: 'CH', name: 'Switzerland' },
    { code: '+963', country: 'SY', name: 'Syria' },
    { code: '+886', country: 'TW', name: 'Taiwan' },
    { code: '+992', country: 'TJ', name: 'Tajikistan' },
    { code: '+255', country: 'TZ', name: 'Tanzania' },
    { code: '+66', country: 'TH', name: 'Thailand' },
    { code: '+228', country: 'TG', name: 'Togo' },
    { code: '+676', country: 'TO', name: 'Tonga' },
    { code: '+1-868', country: 'TT', name: 'Trinidad and Tobago' },
    { code: '+216', country: 'TN', name: 'Tunisia' },
    { code: '+90', country: 'TR', name: 'Turkey' },
    { code: '+993', country: 'TM', name: 'Turkmenistan' },
    { code: '+256', country: 'UG', name: 'Uganda' },
    { code: '+380', country: 'UA', name: 'Ukraine' },
    { code: '+971', country: 'AE', name: 'United Arab Emirates' },
    { code: '+44', country: 'GB', name: 'United Kingdom' },
    { code: '+1', country: 'US', name: 'United States' },
    { code: '+598', country: 'UY', name: 'Uruguay' },
    { code: '+998', country: 'UZ', name: 'Uzbekistan' },
    { code: '+678', country: 'VU', name: 'Vanuatu' },
    { code: '+379', country: 'VA', name: 'Vatican City' },
    { code: '+58', country: 'VE', name: 'Venezuela' },
    { code: '+84', country: 'VN', name: 'Vietnam' },
    { code: '+967', country: 'YE', name: 'Yemen' },
    { code: '+260', country: 'ZM', name: 'Zambia' },
    { code: '+263', country: 'ZW', name: 'Zimbabwe' },
  ];
  
  // Filter country codes based on search query
  const filteredCountryCodes = countrySearchQuery 
    ? countryCodes.filter(country => 
        country.name.toLowerCase().includes(countrySearchQuery.toLowerCase()) || 
        country.code.includes(countrySearchQuery) ||
        country.country.toLowerCase().includes(countrySearchQuery.toLowerCase())
      )
    : countryCodes;
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  // Validate form fields
  const validateForm = () => {
    const errors = {};
    
    // Validate name
    if (!formData.name.trim()) {
      errors.name = 'Full Name is required';
    }
    
    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Validate phone
    if (!formData.phone.trim()) {
      errors.phone = 'Phone Number is required';
    }
    
    // Validate message
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Validate form
    const errors = validateForm();
    setFormErrors(errors);
    
    // If there are errors, stop submission
    if (Object.keys(errors).length > 0) {
      return;
    }
    
    // Create a complete form data object with the country code
    const completeFormData = {
      ...formData,
      phone: formData.phone ? `${selectedCountryCode} ${formData.phone}` : ''
    };
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', completeFormData);
    
    // Reset form and close popup
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      message: ''
    });
    setSelectedCountryCode('+1'); // Reset to default country code
    setFormErrors({});
    setFormSubmitted(false);
    setIsFormOpen(false);
    
    // Show success message (in a real app)
    alert('Thank you! We will contact you shortly to schedule your consultation.');
  };

  const testimonials = [
    {
      quote: "Revera Forte transformed our digital presence with AI-driven strategies that increased our conversion rate by 187% in just 3 months.",
      author: "Sarah Johnson",
      position: "CMO, TechVision Inc.",
      rating: 5
    },
    {
      quote: "Their data-first approach and transparent reporting gave us unprecedented insights into our marketing ROI, helping us scale efficiently.",
      author: "Michael Chen",
      position: "CEO, GrowthWave",
      rating: 5
    },
    {
      quote: "The team at Revera Forte delivered exceptional results that exceeded our expectations. Their strategic approach to digital marketing is unmatched.",
      author: "Emily Rodriguez",
      position: "Marketing Director, Innovate Solutions",
      rating: 5
    }
  ];

  const advantages = [
    { 
      icon: Brain, 
      title: "AI-Driven Intelligence",
      description: "Our proprietary AI algorithms analyze market trends and consumer behavior to create hyper-targeted campaigns with precision accuracy.",
      color: "blue"
    },
    { 
      icon: LineChart, 
      title: "Predictive Analytics",
      description: "Leverage advanced forecasting models that anticipate market shifts and optimize your strategy before competitors can react.",
      color: "teal"
    },
    { 
      icon: Shield, 
      title: "Brand Protection",
      description: "Comprehensive reputation management and crisis prevention systems that safeguard your brand's integrity in the digital landscape.",
      color: "blue"
    },
    { 
      icon: Zap, 
      title: "Rapid Deployment",
      description: "Agile implementation frameworks that reduce time-to-market by 73% compared to traditional marketing approaches.",
      color: "teal"
    },
    { 
      icon: Globe, 
      title: "Global Reach, Local Impact",
      description: "Culturally-adaptive content strategies that resonate across borders while maintaining local market relevance.",
      color: "blue"
    },
    { 
      icon: Rocket, 
      title: "Scalable Growth Systems",
      description: "Modular marketing infrastructure designed to seamlessly scale with your business from startup to enterprise.",
      color: "teal"
    }
  ];

  const stats = [
    { value: "97%", label: "Client Retention" },
    { value: "189%", label: "Average ROI" },
    { value: "3.2x", label: "Revenue Growth" },
    { value: "24/7", label: "Support Access" }
  ];

  useEffect(() => {
    setIsClient(true);
    
    // Track mouse movement for parallax effect
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };
    
    // Check if section is in viewport
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (isVisible && !isInView) {
          setIsInView(true);
        }
      }
    };
    
    // Close country dropdown when clicking outside
    const handleClickOutside = (e) => {
      if (isCountryDropdownOpen && !e.target.closest('.country-dropdown-container')) {
        setIsCountryDropdownOpen(false);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousedown', handleClickOutside);
    
    // Trigger initial check
    handleScroll();
    
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousedown', handleClickOutside);
      clearInterval(interval);
    };
  }, [testimonials.length, isInView, isCountryDropdownOpen]);

  // Calculate parallax effect
  const getParallaxStyle = (depth = 1) => {
    if (!isClient) return {};
    const x = (mousePosition.x * 2 - 1) * depth * 20;
    const y = (mousePosition.y * 2 - 1) * depth * 20;
    return {
      transform: `translate(${x}px, ${y}px)`,
      transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)'
    };
  };

  return (
    <section className="py-20 md:py-32 relative overflow-hidden will-change-transform" ref={containerRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[#030014]" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-teal-900/10 animate-gradient-shift" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-blue-500/5 blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-teal-500/5 blur-[100px] animate-pulse-slow-delayed" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-blue-500/20 rounded-lg rotate-12 animate-float-slow opacity-30" 
           style={getParallaxStyle(0.5)} />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-teal-500/20 rounded-full animate-float-slow-delayed opacity-20"
           style={getParallaxStyle(0.7)} />
      <div className="absolute top-1/3 right-1/5 w-20 h-20 border border-blue-500/20 rounded-md rotate-45 animate-float-slow-alt opacity-25"
           style={getParallaxStyle(0.6)} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with futuristic design */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} relative`}>
          {/* Futuristic grid background */}
          <div className="absolute inset-0 grid-lines opacity-20"></div>
          
          {/* Animated particles */}
          <div className="absolute inset-0 particles-container">
            {[...Array(15)].map((_, i) => (
              <div 
                key={i}
                className="particle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 10}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Protocol layer now positioned above the heading */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-gradient-to-r from-purple-900/30 to-cyan-900/30 border border-purple-500/30 backdrop-blur-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-purple-500 mr-2 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-cyan-500 mr-2 animate-pulse-delay"></div>
              <span className="text-xs sm:text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 cyberpunk-subtitle">
                QUANTUM.ADVANTAGE.PROTOCOL
              </span>
            </div>
          </div>
          
          {/* Futuristic title with scanning effect */}
          <div className="inline-block relative mb-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight glitch-text" data-text="QUANTUM ADVANTAGE">
              <span className="relative z-10 inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-cyan-400">
                QUANTUM ADVANTAGE
              </span>
            </h2>
            <div className="absolute inset-0 scanning-line"></div>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed cyberpunk-subtitle">
            <span className="text-purple-400">[</span> Leveraging next-generation AI and predictive analytics to create 
            <span className="text-white font-medium"> measurable business growth </span>
            in an increasingly complex digital landscape <span className="text-cyan-400">]</span>
          </p>
        </div>

        {/* Interactive Advantage Showcase - Hexagonal Grid Layout */}
        <div className={`relative mb-24 ${isInView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          {/* Hexagonal grid pattern in background */}
          <div className="absolute inset-0 hexagon-grid opacity-5 pointer-events-none"></div>
          
          {/* Central hub with holographic effect */}
          <div className="relative mx-auto w-full max-w-5xl">
            {/* Central holographic element */}
            <div className="relative mx-auto w-40 h-40 mb-16">
              <div className="hologram-base gradient"></div>
              <div className="hologram-projection gradient">
                <div className="hexagon-container">
                  <div className="hexagon bg-gradient-to-br from-purple-500/30 to-cyan-500/30 border border-white/20">
                    {/* New animated quantum icon instead of text */}
                    <div className="quantum-icon-container">
                      <div className="quantum-atom">
                        <div className="quantum-nucleus"></div>
                        <div className="quantum-orbit" style={{ animationDuration: '3s' }}></div>
                        <div className="quantum-orbit" style={{ animationDuration: '5s', animationDirection: 'reverse' }}></div>
                        <div className="quantum-orbit" style={{ animationDuration: '7s' }}></div>
                        <div className="quantum-particle" style={{ animationDelay: '0s' }}></div>
                        <div className="quantum-particle" style={{ animationDelay: '1.5s' }}></div>
                        <div className="quantum-particle" style={{ animationDelay: '3s' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="hexagon-pulse gradient"></div>
                </div>
                <div className="hologram-rings gradient">
                  <div className="hologram-ring" style={{ animationDelay: '0s' }}></div>
                  <div className="hologram-ring" style={{ animationDelay: '1s' }}></div>
                  <div className="hologram-ring" style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
            
            {/* Feature cards in a futuristic grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {advantages.map((advantage, index) => (
                <div 
                  key={index} 
                  className="feature-card-container"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? 'scale(1)' : 'scale(0.8)',
                    transition: `opacity 0.8s ease-out ${index * 150}ms, transform 0.8s ease-out ${index * 150}ms`
                  }}
                >
                  <div className="feature-card-glow" style={{ 
                    background: `radial-gradient(circle at center, rgba(${advantage.color === 'blue' ? '139, 92, 246' : '34, 211, 238'}, 0.3) 0%, transparent 70%)` 
                  }}></div>
                  
                  {/* Dark Matter Liquid Effect */}
                  <div 
                    className="dark-matter-liquid"
                    style={{
                      background: advantage.color === 'blue' 
                        ? 'linear-gradient(to bottom, rgba(15, 23, 42, 0.1) 0%, rgba(30, 20, 60, 0.4) 50%, rgba(15, 23, 42, 0.8) 100%)' 
                        : 'linear-gradient(to bottom, rgba(15, 23, 42, 0.1) 0%, rgba(20, 40, 60, 0.4) 50%, rgba(15, 23, 42, 0.8) 100%)'
                    }}
                  ></div>
                  
                  {/* Tech badge - positioned outside the card for better visibility */}
                  <div className="tech-badge-container">
                    <div className={`tech-badge bg-gradient-to-r from-${advantage.color === 'blue' ? 'purple' : 'cyan'}-500 to-${advantage.color === 'blue' ? 'indigo' : 'blue'}-600`}>
                      <span className="tech-badge-text">
                        <span className="tech-badge-number">{String(index + 1).padStart(2, '0')}</span>
                        QUANTUM.{advantage.title.toUpperCase().replace(/\s+/g, '.')}.v4.2
                      </span>
                    </div>
                  </div>
                  
                  <div className="feature-card">
                    {/* Top connector lines */}
                    <div className="connector-line left"></div>
                    <div className="connector-line right"></div>
                    
                    {/* Icon with hexagon background */}
                    <div className="feature-icon-container">
                      <div className="feature-icon-hexagon" style={{ 
                        backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                        '--tw-gradient-from': advantage.color === 'blue' ? '#8b5cf6' : '#22d3ee',
                        '--tw-gradient-to': advantage.color === 'blue' ? '#6366f1' : '#3b82f6'
                      }}>
                        <advantage.icon className="h-8 w-8 text-white feature-icon" />
                      </div>
                      <div className="feature-icon-pulse"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="feature-content">
                      <h3 className="feature-title">{advantage.title}</h3>
                      <p className="feature-description">{advantage.description}</p>
                      
                      {/* Efficiency meter */}
                      <div className="efficiency-container">
                        <div className="efficiency-label">SYSTEM EFFICIENCY</div>
                        <div className="efficiency-meter-container">
                          <div className="efficiency-meter-bg"></div>
                          <div 
                            className="efficiency-meter-fill" 
                            style={{ 
                              width: `${90 + Math.floor(Math.random() * 10)}%`,
                              backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                              '--tw-gradient-from': advantage.color === 'blue' ? '#8b5cf6' : '#22d3ee',
                              '--tw-gradient-to': advantage.color === 'blue' ? '#6366f1' : '#3b82f6'
                            }}
                          ></div>
                          <div className="efficiency-value">{90 + Math.floor(Math.random() * 10)}%</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom connector lines */}
                    <div className="connector-line bottom-left"></div>
                    <div className="connector-line bottom-right"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Digital circuit footer */}
            <div className="relative mt-20">
              <div className="circuit-board">
                <div className="circuit-line"></div>
                <div className="circuit-line"></div>
                <div className="circuit-node"></div>
                <div className="circuit-node"></div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 cyber-small-text">
                  <span className="text-cyan-500">{'</'}</span> QUANTUM.ADVANTAGE.PROTOCOL.ACTIVE <span className="text-purple-500">{'>'}</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Mobile version - futuristic cards for small screens */}
          <div className="md:hidden mt-16 space-y-6">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className={`relative p-4 rounded-lg border border-${advantage.color === 'blue' ? 'purple' : 'cyan'}-500/30
                  bg-gradient-to-br from-${advantage.color === 'blue' ? 'purple' : 'cyan'}-900/20 to-black/80 backdrop-blur-sm
                  transition-all duration-500 ease-out overflow-hidden
                  ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Dark Matter Liquid Effect for mobile */}
                <div 
                  className="dark-matter-liquid absolute inset-0 z-0"
                  style={{
                    background: advantage.color === 'blue' 
                      ? 'linear-gradient(to bottom, rgba(15, 23, 42, 0.1) 0%, rgba(30, 20, 60, 0.4) 50%, rgba(15, 23, 42, 0.8) 100%)' 
                      : 'linear-gradient(to bottom, rgba(15, 23, 42, 0.1) 0%, rgba(20, 40, 60, 0.4) 50%, rgba(15, 23, 42, 0.8) 100%)'
                  }}
                ></div>

                <div className="flex items-center mb-3 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-2 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mr-2 animate-pulse-delay"></div>
                  <span className="text-xs font-medium text-gray-400 uppercase tracking-wider cyberpunk-subtitle">
                    QUANTUM.{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <div className="flex items-start relative z-10">
                  <div className={`shrink-0 w-12 h-12 flex items-center justify-center mr-4 relative z-10`}>
                    <div className="hexagon-container" style={{ width: '100%', height: '100%' }}>
                      <div className={`hexagon bg-gradient-to-br from-${advantage.color === 'blue' ? 'purple' : 'cyan'}-500/30 to-transparent flex items-center justify-center`}>
                        <advantage.icon className={`w-5 h-5 text-${advantage.color === 'blue' ? 'purple' : 'cyan'}-400`} />
                      </div>
                      <div className={`hexagon-pulse ${advantage.color === 'blue' ? '' : 'cyan'}`}></div>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-white font-semibold text-base mb-1">
                      {advantage.title}
                    </h3>
                    
                    <p className="text-gray-300/80 text-xs leading-relaxed">
                      {advantage.description}
                    </p>
                    
                    <div className="mt-2 pt-2 border-t border-white/10 flex justify-between items-center">
                      <div className="w-full bg-gray-800/50 h-1.5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r from-${advantage.color === 'blue' ? 'purple' : 'cyan'}-500 to-${advantage.color === 'blue' ? 'indigo' : 'blue'}-600`}
                          style={{ width: `${90 + Math.floor(Math.random() * 10)}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-xs text-white/70">{90 + Math.floor(Math.random() * 10)}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats and testimonials section */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-16">
          {/* Stats */}
          <div className={`lg:w-1/3 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
               style={{ transitionDelay: '300ms' }}>
            <div className="p-8 rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/10 to-transparent backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="w-8 h-1 bg-blue-500 mr-3"></span>
                Performance Metrics
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                  <span className="text-sm text-gray-300">Verified by independent audits</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className={`lg:w-2/3 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
               style={{ transitionDelay: '500ms' }}>
            <div className="p-8 rounded-xl border border-teal-500/20 bg-gradient-to-br from-teal-900/10 to-transparent backdrop-blur-sm h-full">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="w-8 h-1 bg-teal-500 mr-3"></span>
                Client Success Stories
              </h3>
              
              <div className="relative h-[calc(100%-80px)]">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 flex flex-col justify-between transition-all duration-700 ease-out
                      ${activeTab === index ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-10 -z-10'}`}
                  >
                    <div>
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'} mr-1`} 
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-xl sm:text-2xl font-light text-white/90 italic mb-8 leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                    
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-gray-400">{testimonial.position}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-6">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ease-out
                      ${activeTab === index ? 'bg-teal-400 w-8' : 'bg-gray-600'}`}
                    onClick={() => setActiveTab(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Elegant CTA Section with subdued colors */}
        <div className={`mt-24 text-center transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} relative`}
             style={{ transitionDelay: '700ms' }}>
          
          {/* Subtle background pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
          
          {/* Subtle particles */}
          <div className="absolute inset-0 particles-container">
            {[...Array(8)].map((_, i) => (
              <div 
                key={i}
                className="particle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 10}s`,
                  opacity: '0.4'
                }}
              ></div>
            ))}
          </div>
          
          {/* Main container */}
          <div className="relative max-w-4xl mx-auto">
            {/* Subtle top border */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
            
            {/* Main content with elegant border */}
            <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-slate-600/50 to-slate-700/50 backdrop-blur-md">
              <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
              
              <div className="px-8 py-12 rounded-xl bg-gradient-to-b from-slate-900/40 to-black/80 backdrop-blur-lg relative z-10 border border-white/5">
                {/* Elegant badge */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600/50 shadow-lg">
                    <span className="text-xs font-medium text-slate-300">
                      STRATEGIC CONSULTATION
                    </span>
                  </div>
                </div>
                
                {/* Elegant title */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    Ready to Transform Your Business?
                  </h3>
                  <div className="h-[1px] w-24 mx-auto bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
                </div>
                
                <p className="text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                  Join the elite businesses leveraging our advanced AI systems to achieve unprecedented growth in the digital era.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8">
                  {/* Primary action button */}
                  <button 
                    onClick={() => setIsFormOpen(true)}
                    className="group relative px-8 py-4 bg-slate-800 text-white font-medium rounded-lg border border-slate-600/50 hover:bg-slate-700 transition-all duration-300 ease-out text-sm sm:text-base overflow-hidden shadow-lg"
                  >
                    {/* Button hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Button content */}
                    <span className="relative z-10 flex items-center justify-center">
                      Schedule Strategic Consultation
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                    </span>
                  </button>
                  
                  {/* Secondary action button */}
                  <button className="group relative px-8 py-4 bg-transparent border border-slate-600/50 text-white font-medium rounded-lg hover:bg-slate-800/50 transition-all duration-300 ease-out text-sm sm:text-base overflow-hidden">
                    {/* Button content */}
                    <span className="relative z-10 flex items-center justify-center">
                      View Case Studies
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                    </span>
                  </button>
                </div>
                
                {/* Subtle footer */}
                <div className="mt-10 pt-6 border-t border-slate-700/30">
                  <p className="text-xs text-slate-400">
                    Trusted by industry leaders worldwide
                  </p>
                </div>
              </div>
            </div>
            
            {/* Subtle bottom border */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-via) 50%, var(--tw-gradient-to) 100%);
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 15s ease infinite;
          background-size: 200% 200%;
        }
        
        .shadow-glow-blue {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
        }
        
        .shadow-glow-teal {
          box-shadow: 0 0 20px rgba(20, 184, 166, 0.4);
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-10px, 15px) rotate(5deg); }
          50% { transform: translate(10px, 5px) rotate(0deg); }
          75% { transform: translate(15px, -10px) rotate(-5deg); }
        }
        
        @keyframes float-slow-delayed {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(15px, -10px) rotate(-5deg); }
          50% { transform: translate(-5px, -15px) rotate(0deg); }
          75% { transform: translate(-15px, 10px) rotate(5deg); }
        }
        
        @keyframes float-slow-alt {
          0%, 100% { transform: translate(0, 0) rotate(45deg); }
          25% { transform: translate(10px, -15px) rotate(40deg); }
          50% { transform: translate(-10px, -5px) rotate(45deg); }
          75% { transform: translate(-15px, 10px) rotate(50deg); }
        }
        
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
          will-change: transform;
        }
        
        .animate-float-slow-delayed {
          animation: float-slow-delayed 25s ease-in-out infinite;
          will-change: transform;
        }
        
        .animate-float-slow-alt {
          animation: float-slow-alt 30s ease-in-out infinite;
          will-change: transform;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 15s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: opacity, transform;
        }
        
        .animate-pulse-slow-delayed {
          animation: pulse-slow 15s cubic-bezier(0.4, 0, 0.2, 1) 7.5s infinite;
          will-change: opacity, transform;
        }
        
        /* Advantage node animations */
        @keyframes pulse-node {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.4); }
          50% { box-shadow: 0 0 10px 2px rgba(59, 130, 246, 0.2); }
        }
        
        .advantage-node:nth-child(odd) > div > div:first-child {
          animation: pulse-node 4s ease-in-out infinite;
        }
        
        .advantage-node:nth-child(even) > div > div:first-child {
          animation: pulse-node 4s ease-in-out 2s infinite;
        }
        
        /* Line animations */
        @keyframes line-dash {
          to {
            stroke-dashoffset: -20;
          }
        }
        
        .advantage-line {
          stroke-dasharray: 1, 1;
          stroke-dashoffset: 0;
          animation: line-dash 30s linear infinite;
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        @media (max-width: 640px) {
          .advantage-card-blue, .advantage-card-teal {
            backdrop-filter: blur(4px);
          }
        }
      `}</style>
      

      
      {/* Consultation Form Popup */}
      {isFormOpen && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-2xl flex items-center justify-center z-50 p-4"
          onClick={() => setIsFormOpen(false)}
        >
          {/* Enhanced futuristic background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Dynamic gradient orbs with improved animation */}
            <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-emerald-600/15 to-teal-600/10 blur-[180px] animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-indigo-600/15 to-fuchsia-600/10 blur-[180px] animate-pulse-slow-delayed" />
            
            {/* Matrix-like digital rain effect */}
            <div className="absolute inset-0 digital-rain-container opacity-20"></div>
            
            {/* Hexagonal grid pattern */}
            <div className="absolute inset-0 opacity-10 hexagon-grid"></div>
            
            {/* Animated circuit lines */}
            <div className="absolute inset-0">
              <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="circuit-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                
                {/* Animated circuit paths */}
                <path d="M0,100 C150,50 250,150 400,100 S550,50 800,100" stroke="url(#circuit-line-gradient)" strokeWidth="1" fill="none" className="circuit-path" />
                <path d="M0,200 C100,150 300,250 500,200 S700,150 800,200" stroke="url(#circuit-line-gradient)" strokeWidth="1" fill="none" className="circuit-path" style={{ animationDelay: '0.5s' }} />
                <path d="M0,300 C200,250 300,350 500,300 S600,250 800,300" stroke="url(#circuit-line-gradient)" strokeWidth="1" fill="none" className="circuit-path" style={{ animationDelay: '1s' }} />
                <path d="M0,400 C150,350 250,450 400,400 S550,350 800,400" stroke="url(#circuit-line-gradient)" strokeWidth="1" fill="none" className="circuit-path" style={{ animationDelay: '1.5s' }} />
                <path d="M0,500 C100,450 300,550 500,500 S700,450 800,500" stroke="url(#circuit-line-gradient)" strokeWidth="1" fill="none" className="circuit-path" style={{ animationDelay: '2s' }} />
                
                {/* Circuit nodes */}
                <circle cx="150" cy="50" r="4" fill="#10B981" className="circuit-node" />
                <circle cx="400" cy="100" r="4" fill="#3B82F6" className="circuit-node" style={{ animationDelay: '0.2s' }} />
                <circle cx="600" cy="150" r="4" fill="#EC4899" className="circuit-node" style={{ animationDelay: '0.4s' }} />
                <circle cx="300" cy="250" r="4" fill="#10B981" className="circuit-node" style={{ animationDelay: '0.6s' }} />
                <circle cx="500" cy="300" r="4" fill="#3B82F6" className="circuit-node" style={{ animationDelay: '0.8s' }} />
                <circle cx="200" cy="350" r="4" fill="#EC4899" className="circuit-node" style={{ animationDelay: '1s' }} />
                <circle cx="400" cy="400" r="4" fill="#10B981" className="circuit-node" style={{ animationDelay: '1.2s' }} />
                <circle cx="600" cy="450" r="4" fill="#3B82F6" className="circuit-node" style={{ animationDelay: '1.4s' }} />
                <circle cx="300" cy="550" r="4" fill="#EC4899" className="circuit-node" style={{ animationDelay: '1.6s' }} />
              </svg>
            </div>
            
            {/* Floating holographic elements */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute holographic-circle"
                  style={{
                    width: `${Math.random() * 100 + 50}px`,
                    height: `${Math.random() * 100 + 50}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.3 + 0.1,
                    animationDuration: `${Math.random() * 10 + 10}s`,
                    animationDelay: `${Math.random() * 5}s`,
                    borderColor: i % 3 === 0 ? 'rgba(16, 185, 129, 0.3)' : 
                                i % 3 === 1 ? 'rgba(59, 130, 246, 0.3)' : 
                                'rgba(236, 72, 153, 0.3)'
                  }}
                />
              ))}
            </div>
            
            {/* Particle effect */}
            <div className="absolute inset-0 particles-container">
              {[...Array(40)].map((_, i) => (
                <div 
                  key={i}
                  className="particle"
                  style={{
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.7 + 0.3,
                    animationDuration: `${Math.random() * 15 + 10}s`,
                    animationDelay: `${Math.random() * 5}s`,
                    backgroundColor: i % 3 === 0 ? 'rgba(16, 185, 129, 0.7)' : 
                                    i % 3 === 1 ? 'rgba(59, 130, 246, 0.7)' : 
                                    'rgba(236, 72, 153, 0.7)'
                  }}
                />
              ))}
            </div>
            
            {/* Scanning line effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="scanning-line"></div>
            </div>
            
            {/* Geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute geometric-shape"
                  style={{
                    width: `${Math.random() * 100 + 50}px`,
                    height: `${Math.random() * 100 + 50}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.15 + 0.05,
                    animationDuration: `${Math.random() * 20 + 20}s`,
                    animationDelay: `${Math.random() * 5}s`,
                    borderColor: i % 3 === 0 ? 'rgba(16, 185, 129, 0.4)' : 
                                i % 3 === 1 ? 'rgba(59, 130, 246, 0.4)' : 
                                'rgba(236, 72, 153, 0.4)',
                    transform: `rotate(${Math.random() * 360}deg)`
                  }}
                />
              ))}
            </div>
          </div>
          
          <div 
            className="relative w-full max-w-6xl animate-fade-in flex flex-col md:flex-row overflow-hidden rounded-2xl shadow-[0_0_100px_rgba(16,185,129,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left side - enhanced decorative panel with 3D elements */}
            <div className="hidden md:block w-2/5 relative bg-gradient-to-br from-[#0a2a2d]/90 to-[#0f172a]/95 backdrop-blur-xl rounded-l-2xl border-t border-l border-b border-emerald-500/40 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.2),transparent_70%)]"></div>
              
              {/* Hexagon container with 3D effect */}
              <div className="absolute top-10 left-10">
                <div className="hexagon-container">
                  <div className="hexagon bg-gradient-to-br from-emerald-900/80 to-emerald-800/80 border border-emerald-500/40">
                    <span className="text-white font-bold text-2xl">RF</span>
                  </div>
                  <div className="hexagon-pulse" style={{ background: 'rgba(16, 185, 129, 0.3)' }}></div>
                  <div className="hexagon-pulse" style={{ background: 'rgba(16, 185, 129, 0.3)', animationDelay: '1s' }}></div>
                </div>
              </div>
              
              {/* Orbiting elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
                <div className="orbit-container">
                  <div className="orbit-circle" style={{ width: '100%', height: '100%', animationDuration: '20s' }}>
                    <div className="orbit-dot bg-emerald-500"></div>
                  </div>
                  <div className="orbit-circle" style={{ width: '80%', height: '80%', animationDuration: '15s', animationDirection: 'reverse' }}>
                    <div className="orbit-dot bg-blue-500"></div>
                  </div>
                  <div className="orbit-circle" style={{ width: '60%', height: '60%', animationDuration: '10s' }}>
                    <div className="orbit-dot bg-pink-500"></div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced content with interactive elements */}
              <div className="absolute inset-0 flex flex-col justify-center px-10 z-10">
                <div className="mb-4 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-pulse-delay"></div>
                  <span className="text-xs font-medium text-emerald-300 uppercase tracking-wider cyberpunk-subtitle">Quantum Advantage</span>
                </div>
                
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-blue-400 to-pink-400 mb-8 glitch-text" data-text="Strategic Consultation">
                  Strategic Consultation
                </h3>
                
                <div className="space-y-6">
                  <div className="neon-card group from-emerald-900/10 to-emerald-800/5 hover:from-emerald-900/20 hover:to-emerald-800/10" style={{ '--border-color': 'rgba(16, 185, 129, 0.3)' }}>
                    <div className="neon-card-glow bg-emerald-500/20"></div>
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <Brain className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1 group-hover:text-emerald-300 transition-colors duration-300">AI-Driven Analysis</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Personalized insights powered by our advanced AI algorithms.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="neon-card group from-blue-900/10 to-blue-800/5 hover:from-blue-900/20 hover:to-blue-800/10" style={{ '--border-color': 'rgba(59, 130, 246, 0.3)' }}>
                    <div className="neon-card-glow bg-blue-500/20"></div>
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <LineChart className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1 group-hover:text-blue-300 transition-colors duration-300">Growth Forecasting</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Data-driven projections and predictive models for your business.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="neon-card group from-pink-900/10 to-pink-800/5 hover:from-pink-900/20 hover:to-pink-800/10" style={{ '--border-color': 'rgba(236, 72, 153, 0.3)' }}>
                    <div className="neon-card-glow bg-pink-500/20"></div>
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform duration-300">
                        <Rocket className="w-5 h-5 text-pink-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1 group-hover:text-pink-300 transition-colors duration-300">Market Acceleration</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Strategic roadmaps to accelerate your market penetration.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Tech specs section */}
                <div className="mt-8 tech-specs">
                  <div className="tech-spec-item">
                    <div className="tech-spec-label">RESPONSE TIME</div>
                    <div className="tech-spec-value text-emerald-400">24-48 HRS</div>
                  </div>
                  <div className="tech-spec-item">
                    <div className="tech-spec-label">SESSION LENGTH</div>
                    <div className="tech-spec-value text-blue-400">60 MIN</div>
                  </div>
                  <div className="tech-spec-item">
                    <div className="tech-spec-label">AVAILABILITY</div>
                    <div className="tech-spec-value text-pink-400">LIMITED</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - enhanced form with 3D and animation effects */}
            <div className="w-full md:w-3/5 bg-gradient-to-br from-[#0a2a2d]/90 to-[#0f172a]/95 backdrop-blur-xl rounded-2xl md:rounded-l-none rounded-r-2xl border border-emerald-500/40 shadow-[0_0_50px_rgba(16,185,129,0.2)] relative overflow-hidden">
              {/* Enhanced glowing orbs in background */}
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-500/15 blur-[120px]"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-500/15 blur-[120px]"></div>
              
              {/* Circuit board decoration */}
              <div className="absolute top-0 left-0 right-0 circuit-board">
                <div className="circuit-line" style={{ background: 'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.5), rgba(59, 130, 246, 0.5), transparent)' }}></div>
                <div className="circuit-line" style={{ background: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.5), rgba(236, 72, 153, 0.5), transparent)' }}></div>
                <div className="circuit-line" style={{ background: 'linear-gradient(to right, transparent, rgba(236, 72, 153, 0.5), rgba(16, 185, 129, 0.5), transparent)' }}></div>
                <div className="circuit-node" style={{ background: 'rgba(16, 185, 129, 0.7)' }}></div>
                <div className="circuit-node" style={{ background: 'rgba(59, 130, 246, 0.7)' }}></div>
              </div>
              
              {/* Enhanced close button with animation */}
              <button 
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-500/30 transition-all duration-300 group z-20"
              >
                <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
              </button>
              
              <div className="p-8 md:p-10 relative z-10">
                <div className="mb-8">
                  {/* Elegant title with subtle underline */}
                  <div className="relative inline-block">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      Schedule Your Consultation
                    </h3>
                    <div className="h-[1px] w-1/3 bg-gradient-to-r from-transparent via-slate-400 to-transparent mt-1"></div>
                  </div>
                  
                  <p className="text-gray-300 text-sm md:text-base mb-4 max-w-lg tech-text">
                    Complete the form below to schedule a personalized consultation with our quantum strategy experts.
                  </p>
                  
                  <div className="flex items-center mb-6">
                    <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-600/50 text-slate-300 inline-flex items-center text-xs">
                      Required fields marked with *
                    </div>
                  </div>
                </div>
                
                {/* Enhanced form with animations and 3D effects */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                      <div className="relative group transform transition-all duration-300">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-white transition-colors duration-300">
                          <User className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Full Name *"
                          required
                          className={`w-full bg-slate-800/50 backdrop-blur-md border ${formErrors.name ? 'border-red-500/70' : 'border-slate-600/40'} rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 ${formErrors.name ? 'focus:ring-red-500/50 focus:border-red-500/50' : 'focus:ring-slate-500/50 focus:border-slate-500/50'} transition-all duration-300 shadow-sm`}
                        />
                        <div className={`absolute bottom-0 left-0 h-[1px] w-0 ${formErrors.name ? 'bg-gradient-to-r from-red-400 to-red-600' : 'bg-gradient-to-r from-transparent via-slate-400 to-transparent'} group-focus-within:w-full transition-all duration-500`}></div>
                        {formErrors.name && (
                          <p className="absolute text-xs text-red-400 mt-1">{formErrors.name}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="relative group transform transition-all duration-300">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-white transition-colors duration-300">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address *"
                          required
                          className={`w-full bg-slate-800/50 backdrop-blur-md border ${formErrors.email ? 'border-red-500/70' : 'border-slate-600/40'} rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 ${formErrors.email ? 'focus:ring-red-500/50 focus:border-red-500/50' : 'focus:ring-slate-500/50 focus:border-slate-500/50'} transition-all duration-300 shadow-sm`}
                        />
                        <div className={`absolute bottom-0 left-0 h-[1px] w-0 ${formErrors.email ? 'bg-gradient-to-r from-red-400 to-red-600' : 'bg-gradient-to-r from-transparent via-slate-400 to-transparent'} group-focus-within:w-full transition-all duration-500`}></div>
                        {formErrors.email && (
                          <p className="absolute text-xs text-red-400 mt-1">{formErrors.email}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="relative group transform transition-all duration-300">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-white transition-colors duration-300">
                          <Building className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Company Name (Optional)"
                          className="w-full bg-slate-800/50 backdrop-blur-md border border-slate-600/40 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-slate-500/50 focus:border-slate-500/50 transition-all duration-300 shadow-sm"
                        />
                        <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-gradient-to-r from-transparent via-slate-400 to-transparent group-focus-within:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                    
                    <div className="feature-card-container">
                      <div className="feature-card-glow bg-emerald-500/10 filter blur-md"></div>
                      <div className="relative group transform transition-all duration-300">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-400 group-focus-within:text-white transition-colors duration-300">
                          <Phone className="w-5 h-5" />
                        </div>
                        
                        {/* Enhanced country code dropdown */}
                        <div className="absolute left-10 top-0 bottom-0 flex items-center">
                          <div className="relative country-dropdown-container">
                            <button
                              type="button"
                              onClick={() => {
                                setIsCountryDropdownOpen(!isCountryDropdownOpen);
                                if (isCountryDropdownOpen) {
                                  setCountrySearchQuery('');
                                }
                              }}
                              className="flex items-center justify-center h-full px-2 text-white bg-emerald-900/30 border-r border-emerald-500/40 rounded-l-xl focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-all duration-300"
                            >
                              {/* Find the selected country to display its ISO code */}
                              {(() => {
                                const selectedCountry = countryCodes.find(c => c.code === selectedCountryCode);
                                return (
                                  <div className="flex items-center">
                                    <span className="text-xs text-gray-400 mr-1">{selectedCountry?.country}</span>
                                    <span className="text-sm font-medium text-emerald-400 mr-1">{selectedCountryCode}</span>
                                  </div>
                                );
                              })()}
                              <svg className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isCountryDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                              </svg>
                            </button>
                            
                            {/* Enhanced dropdown menu */}
                            {isCountryDropdownOpen && (
                              <div className="absolute z-50 mt-1 left-0 w-64 max-h-60 overflow-hidden bg-[#0a2a2d]/95 backdrop-blur-xl border border-emerald-500/40 rounded-xl shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-fade-in">
                                {/* Enhanced search input */}
                                <div className="p-2 border-b border-emerald-500/30">
                                  <div className="relative">
                                    <input
                                      type="text"
                                      value={countrySearchQuery}
                                      onChange={(e) => setCountrySearchQuery(e.target.value)}
                                      placeholder="Search country..."
                                      className="w-full bg-emerald-900/30 border border-emerald-500/40 rounded-lg py-2 pl-8 pr-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300"
                                      onClick={(e) => e.stopPropagation()}
                                    />
                                    <svg className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                  </div>
                                </div>
                                
                                {/* Enhanced country list */}
                                <div className="py-1 overflow-y-auto max-h-[300px] scrollbar-thin scrollbar-thumb-emerald-500/30 scrollbar-track-transparent">
                                  {filteredCountryCodes.length > 0 ? (
                                    filteredCountryCodes.map((country) => (
                                      <button
                                        key={country.code}
                                        type="button"
                                        className="flex items-center w-full px-3 py-2 text-sm text-white hover:bg-emerald-500/30 transition-colors duration-150"
                                        onClick={() => {
                                          setSelectedCountryCode(country.code);
                                          setIsCountryDropdownOpen(false);
                                          setCountrySearchQuery('');
                                        }}
                                      >
                                        <div className="flex items-center justify-between w-full">
                                          <div className="flex items-center">
                                            <span className="mr-2 min-w-[50px] text-emerald-400 font-medium">{country.code}</span>
                                            <span className="text-white">{country.name}</span>
                                          </div>
                                          <span className="text-gray-500 text-xs bg-emerald-900/40 px-1.5 py-0.5 rounded">{country.country}</span>
                                        </div>
                                      </button>
                                    ))
                                  ) : (
                                    <div className="px-3 py-2 text-sm text-gray-400 text-center">No countries found</div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Phone Number *"
                          required
                          className={`w-full bg-[#0a2a2d]/40 backdrop-blur-md border ${formErrors.phone ? 'border-red-500/70' : 'border-emerald-500/40'} rounded-xl py-4 pl-28 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${formErrors.phone ? 'focus:ring-red-500/50 focus:border-red-500/50' : 'focus:ring-emerald-500/50 focus:border-emerald-500/50'} transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.1)]`}
                        />
                        <div className={`absolute bottom-0 left-0 h-[2px] w-0 ${formErrors.phone ? 'bg-gradient-to-r from-red-400 to-red-600' : 'bg-gradient-to-r from-emerald-400 to-blue-400'} group-focus-within:w-full transition-all duration-500`}></div>
                        {formErrors.phone && (
                          <p className="absolute text-xs text-red-400 mt-1">{formErrors.phone}</p>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="feature-card-container">
                    <div className="feature-card-glow bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-pink-500/10 filter blur-md"></div>
                    <div className="relative group transform transition-all duration-300">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your business goals and challenges... *"
                        rows={4}
                        required
                        className={`w-full bg-[#0a2a2d]/40 backdrop-blur-md border ${formErrors.message ? 'border-red-500/70' : 'border-gradient-tri'} rounded-xl py-4 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${formErrors.message ? 'focus:ring-red-500/50 focus:border-red-500/50' : 'focus:ring-emerald-500/50 focus:border-emerald-500/50'} transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.1)]`}
                      />
                      <div className={`absolute bottom-0 left-0 h-[2px] w-0 ${formErrors.message ? 'bg-gradient-to-r from-red-400 to-red-600' : 'bg-gradient-to-r from-emerald-400 via-blue-400 to-pink-400'} group-focus-within:w-full transition-all duration-500`}></div>
                      {formErrors.message && (
                        <p className="absolute text-xs text-red-400 mt-1">{formErrors.message}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Enhanced checkbox with animation */}
                  <div className="flex items-center space-x-3 text-sm text-gray-400">
                    <div className="relative w-5 h-5 group/checkbox">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        required 
                        className="absolute w-0 h-0 opacity-0 peer"
                      />
                      <label 
                        htmlFor="privacy" 
                        className="flex items-center justify-center w-5 h-5 border border-emerald-500/40 rounded bg-emerald-900/20 cursor-pointer peer-checked:bg-emerald-500/30 transition-all duration-300 group-hover/checkbox:border-emerald-500/60"
                      >
                        <div className="w-3 h-3 rounded-sm bg-gradient-to-r from-emerald-400 via-blue-400 to-pink-400 opacity-0 peer-checked:opacity-100 transition-opacity duration-300 transform scale-0 peer-checked:scale-100"></div>
                      </label>
                    </div>
                    <label htmlFor="privacy" className="cursor-pointer">
                      I agree to the <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">Privacy Policy</a> and <a href="#" className="text-emerald-400 hover:text-emerald-300 transition-colors">Terms of Service</a>
                    </label>
                  </div>
                  
                  {/* Enhanced submit button with animations */}
                  <div className="pt-2">
                    <button 
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-emerald-600/90 via-blue-600/90 to-pink-600/90 text-white font-medium rounded-xl hover:from-emerald-500 hover:via-blue-500 hover:to-pink-500 transition-all duration-500 ease-out relative overflow-hidden group shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                    >
                      {/* Enhanced background pattern */}
                      <div className="absolute inset-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
                      
                      {/* Animated hover effect */}
                      <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-pink-500/20"></div>
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent transform translate-x-[100%] group-hover:translate-x-[-100%] transition-transform duration-1000"></div>
                      </div>
                      
                      {/* Button text with enhanced animation */}
                      <span className="relative z-10 flex items-center justify-center font-semibold tracking-wide">
                        <span className="mr-2">Schedule Consultation</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500 ease-out" />
                      </span>
                      
                      {/* Enhanced bottom highlight */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-pink-400"></div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Additional animations for the form */}
      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        
        @keyframes width {
          0% { width: 0; }
          100% { width: 100%; }
        }
        
        @keyframes pulse-delay {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        /* New animations for the enhanced form */
        @keyframes circuit-pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes circuit-flow {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        
        @keyframes hexagon-pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
        
        @keyframes orbit-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes particle-float {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(100px); opacity: 0; }
        }
        
        @keyframes hologram-pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        
        @keyframes glitch-anim-1 {
          0% { clip: rect(20px, 9999px, 15px, 0); }
          20% { clip: rect(42px, 9999px, 78px, 0); }
          40% { clip: rect(54px, 9999px, 25px, 0); }
          60% { clip: rect(10px, 9999px, 85px, 0); }
          80% { clip: rect(95px, 9999px, 5px, 0); }
          100% { clip: rect(58px, 9999px, 57px, 0); }
        }
        
        @keyframes glitch-anim-2 {
          0% { clip: rect(58px, 9999px, 73px, 0); }
          20% { clip: rect(17px, 9999px, 13px, 0); }
          40% { clip: rect(76px, 9999px, 63px, 0); }
          60% { clip: rect(46px, 9999px, 33px, 0); }
          80% { clip: rect(19px, 9999px, 28px, 0); }
          100% { clip: rect(82px, 9999px, 64px, 0); }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-slow-delayed {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        
        @keyframes ping-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
        }
        
        /* Styling for the enhanced form elements */
        .hexagon-grid {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        /* Circuit path animation */
        .circuit-path {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: circuit-flow 20s linear infinite;
        }
        
        .circuit-node {
          animation: circuit-pulse 3s ease-in-out infinite;
        }
        
        /* Hexagon styling */
        .hexagon-container {
          position: relative;
          width: 60px;
          height: 60px;
        }
        
        .hexagon {
          position: absolute;
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        
        .hexagon-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(139, 92, 246, 0.3);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          animation: hexagon-pulse 2s ease-in-out infinite;
        }
        
        /* Orbit elements */
        .orbit-container {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        
        .orbit-circle {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 1px dashed rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          animation: orbit-rotate 20s linear infinite;
        }
        
        .orbit-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          filter: blur(1px);
        }
        
        /* Holographic elements */
        .holographic-circle {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(99, 102, 241, 0.3);
          background: radial-gradient(
            circle at center,
            rgba(99, 102, 241, 0.05) 0%,
            rgba(34, 211, 238, 0.05) 50%,
            transparent 70%
          );
          animation: hologram-pulse 8s ease-in-out infinite;
          pointer-events: none;
        }
        
        /* Particles */
        .particles-container {
          pointer-events: none;
          z-index: 1;
        }
        
        .particle {
          position: absolute;
          background-color: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          animation: particle-float 15s linear infinite;
        }
        
        /* Scanning line */
        .scanning-line {
          position: absolute;
          width: 100%;
          height: 2px;
          background: linear-gradient(to right, transparent, rgba(99, 102, 241, 0.8), rgba(34, 211, 238, 0.8), transparent);
          top: 0;
          animation: scanning 3s ease-in-out infinite;
        }
        
        @keyframes scanning {
          0% {
            top: 0;
            opacity: 0.8;
          }
          100% {
            top: 100%;
            opacity: 0.2;
          }
        }
        
        /* Glitch text effect */
        .glitch-text {
          position: relative;
          color: white;
          letter-spacing: 2px;
        }
        
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
          clip: rect(0, 0, 0, 0);
        }
        
        .glitch-text::before {
          left: 2px;
          text-shadow: -1px 0 rgba(99, 102, 241, 0.7);
          animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }
        
        .glitch-text::after {
          left: -2px;
          text-shadow: -1px 0 rgba(34, 211, 238, 0.7);
          animation: glitch-anim-2 3s infinite linear alternate-reverse;
        }
        
        /* Cyberpunk subtitle */
        .cyberpunk-subtitle {
          font-family: monospace;
          letter-spacing: 1px;
        }
        
        /* Neon cards */
        .neon-card {
          position: relative;
          background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
          backdrop-filter: blur(12px);
          border-radius: 1rem;
          padding: 1rem;
          border: 1px solid;
          border-color: var(--border-color, rgba(139, 92, 246, 0.3));
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .neon-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .neon-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        
        .neon-card:hover .neon-card-glow {
          opacity: 0.5;
        }
        
        /* Tech badges and specs */
        .tech-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.25rem 0.75rem;
          border-radius: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
        
        .tech-specs {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1rem;
        }
        
        .tech-spec-item {
          display: flex;
          flex-direction: column;
        }
        
        .tech-spec-label {
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 1px;
          margin-bottom: 0.25rem;
        }
        
        .tech-spec-value {
          font-size: 0.875rem;
          font-weight: 600;
          font-family: monospace;
        }
        
        .tech-text {
          font-family: system-ui, -apple-system, sans-serif;
          line-height: 1.7;
        }
        
        /* Cyber gradient text */
        .cyber-gradient-text {
          background-image: linear-gradient(to right, var(--tw-gradient-stops));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        /* Circuit board */
        .circuit-board {
          position: relative;
          height: 60px;
          margin-bottom: 20px;
          overflow: hidden;
        }
        
        .circuit-line {
          position: absolute;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(139, 92, 246, 0.5), rgba(34, 211, 238, 0.5), transparent);
          width: 100%;
        }
        
        .circuit-line:nth-child(1) {
          top: 20%;
        }
        
        .circuit-line:nth-child(2) {
          top: 50%;
        }
        
        .circuit-line:nth-child(3) {
          top: 80%;
        }
        
        /* Feature card styles */
        .feature-card-container {
          position: relative;
          height: 100%;
          perspective: 1000px;
          transition: transform 0.3s ease;
          margin-top: 20px;
          padding-top: 10px;
        }
        
        .feature-card-container:hover {
          transform: translateY(-5px);
        }
        
        .feature-card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }
        
        .feature-card-container:hover .feature-card-glow {
          opacity: 1;
        }
        
        /* Border gradient for elements */
        .border-gradient {
          border-image: linear-gradient(to right, #8b5cf6, #22d3ee) 1;
        }
        
        .border-gradient-tri {
          border-image: linear-gradient(to right, #10B981, #3B82F6, #EC4899) 1;
        }
        
        /* Digital rain effect */
        .digital-rain-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .digital-rain-container::before {
          content: "";
          position: absolute;
          top: -10px;
          left: 0;
          width: 100%;
          height: calc(100% + 20px);
          background: linear-gradient(0deg, transparent 0%, rgba(16, 185, 129, 0.2) 50%, transparent 100%);
          animation: digital-rain 10s linear infinite;
          background-size: 100% 200%;
        }
        
        @keyframes digital-rain {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 0% 200%;
          }
        }
        
        /* Geometric shapes */
        .geometric-shape {
          border: 1px solid;
          opacity: 0.2;
          animation: rotate-slow 30s linear infinite;
        }
        
        .geometric-shape:nth-child(odd) {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        
        .geometric-shape:nth-child(even) {
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        }
        
        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        /* Animation classes */
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow-delayed {
          animation: pulse-slow-delayed 4s ease-in-out 2s infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}