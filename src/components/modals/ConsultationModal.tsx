import React, { useState } from 'react';
import { 
  X, Calendar, Clock, User, Mail, Building, Phone, MessageSquare, 
  ChevronDown, ChevronUp, ArrowRight, CheckCircle, Briefcase, Globe
} from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    date: '',
    time: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [activeSection, setActiveSection] = useState<'info' | 'services' | 'schedule'>('info');
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setTimeout(() => {
        onClose();
      }, 2000);
    }, 1500);
  };

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const services = [
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Data-driven campaigns and strategies",
      items: [
        "Social Media Marketing",
        "Content Marketing",
        "Email Campaigns",
        "Marketing Automation"
      ]
    },
    {
      icon: Briefcase,
      title: "Business Strategy",
      description: "Comprehensive business planning",
      items: [
        "Market Analysis",
        "Competitive Research",
        "Growth Strategy",
        "Business Model Innovation"
      ]
    },
    {
      icon: User,
      title: "Brand Development",
      description: "Establish a powerful brand identity",
      items: [
        "Brand Positioning",
        "Visual Identity",
        "Brand Messaging",
        "Brand Experience Design"
      ]
    }
  ];

  const availableTimes = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Advanced backdrop with blur effect */}
      <div 
        className="fixed inset-0 bg-black/70 backdrop-blur-md" 
        onClick={onClose}
      />
      
      {/* Floating modal container with enhanced design */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 via-gray-800/95 to-gray-900 rounded-3xl overflow-hidden border border-gray-700/50 shadow-[0_0_50px_rgba(139,92,246,0.15)]">
          {/* Advanced glow effects */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px] animate-pulse-slow" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-[100px] animate-pulse-slow-delay" />
          
          {/* Animated grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[size:40px_40px] opacity-[0.03]" />
          
          {/* Subtle scan line effect */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.03)_50%)] bg-[size:100%_4px] opacity-20"></div>

          {/* Modal content */}
          <div className="relative z-10">
            {/* Enhanced header with glowing elements */}
            <div className="p-8 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="h-1 w-1 rounded-full bg-purple-500 animate-pulse"></div>
                    <div className="h-1 w-1 rounded-full bg-cyan-500 animate-pulse-delay"></div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/20">
                      Strategic Partnership
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-cyan-100">
                    Schedule Strategic Consultation
                  </h2>
                  <p className="mt-2 text-gray-400 max-w-2xl">
                    Book a personalized session with our experts to discuss your business goals and explore tailored digital solutions.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-700/50 transition-all duration-300 border border-gray-700/0 hover:border-gray-700/50"
                >
                  <X className="h-6 w-6 text-gray-400 hover:text-white" />
                </button>
              </div>
              
              {/* Progress indicator */}
              <div className="mt-8 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${activeSection === 'info' || activeSection === 'services' || activeSection === 'schedule' ? 'bg-purple-500' : 'bg-gray-700'}`}>
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div className={`h-0.5 w-12 ${activeSection === 'services' || activeSection === 'schedule' ? 'bg-purple-500' : 'bg-gray-700'}`}></div>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${activeSection === 'services' || activeSection === 'schedule' ? 'bg-purple-500' : 'bg-gray-700'}`}>
                      <Briefcase className="h-4 w-4 text-white" />
                    </div>
                    <div className={`h-0.5 w-12 ${activeSection === 'schedule' ? 'bg-purple-500' : 'bg-gray-700'}`}></div>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${activeSection === 'schedule' ? 'bg-purple-500' : 'bg-gray-700'}`}>
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">
                    Step {activeSection === 'info' ? '1' : activeSection === 'services' ? '2' : '3'} of 3
                  </div>
                </div>
              </div>
            </div>

            {/* Form content */}
            <form onSubmit={handleSubmit}>
              <div className="p-8 pt-2">
                {/* Personal Information Section */}
                {activeSection === 'info' && (
                  <div className="animate-fadeIn">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <User className="h-5 w-5 mr-2 text-purple-400" />
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                          <div className="relative">
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                              placeholder="Enter your full name"
                            />
                            <div className="absolute inset-0 border border-purple-500/0 rounded-lg transition-all duration-300 pointer-events-none peer-focus:border-purple-500/20"></div>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                          <div className="relative">
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                              placeholder="Enter your email address"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company Name</label>
                          <div className="relative">
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                              placeholder="Enter your company name"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                          <div className="relative">
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                              placeholder="Enter your phone number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setActiveSection('services')}
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 p-px"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative flex items-center justify-center px-8 py-3 bg-gray-900 rounded-[11px]">
                          <span className="font-medium text-white mr-3">Continue</span>
                          <ArrowRight className="h-5 w-5 text-purple-300 group-hover:translate-x-1 transition-traninfoorm duration-300" />
                        </div>
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Services Selection Section */}
                {activeSection === 'services' && (
                  <div className="animate-fadeIn">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Briefcase className="h-5 w-5 mr-2 text-purple-400" />
                        Select Services
                      </h3>
                      <p className="text-gray-400 mb-6">Choose the services you're interested in discussing during your consultation.</p>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {services.map((service, index) => (
                          <div 
                            key={index}
                            className={`relative overflow-hidden rounded-xl border border-gray-700/50 transition-all duration-500 ${expandedCards[index] ? 'bg-gray-800/70' : 'bg-gray-800/30'}`}
                          >
                            {/* Card background animation */}
                            <div className="absolute inset-0">
                              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5" />
                              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full filter blur-lg traninfoorm translate-x-12 -translate-y-12" />
                            </div>

                            <div 
                              className="relative p-5 cursor-pointer"
                              onClick={() => toggleCard(index)}
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-4">
                                  <div className={`p-3 rounded-lg transition-all duration-300 ${expandedCards[index] ? 'bg-purple-500/20' : 'bg-gray-700/50'}`}>
                                    <service.icon className={`h-5 w-5 ${expandedCards[index] ? 'text-purple-400' : 'text-gray-400'}`} />
                                  </div>
                                  <div>
                                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                                    <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                                  </div>
                                </div>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    name="service"
                                    value={service.title}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-700 bg-gray-800"
                                  />
                                  <button className="ml-4 text-gray-400 hover:text-white">
                                    {expandedCards[index] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                                  </button>
                                </div>
                              </div>

                              {expandedCards[index] && (
                                <div className="mt-4 pt-4 border-t border-gray-700/50 animate-fadeIn">
                                  <ul className="space-y-2">
                                    {service.items.map((item, i) => (
                                      <li key={i} className="flex items-start">
                                        <div className="flex-shrink-0 mt-1 mr-3">
                                          <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                                        </div>
                                        <span className="text-gray-300">{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Additional Information</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                          placeholder="Tell us more about your project or specific needs..."
                        ></textarea>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveSection('info')}
                        className="px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveSection('schedule')}
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 p-px"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative flex items-center justify-center px-8 py-3 bg-gray-900 rounded-[11px]">
                          <span className="font-medium text-white mr-3">Continue</span>
                          <ArrowRight className="h-5 w-5 text-purple-300 group-hover:translate-x-1 transition-traninfoorm duration-300" />
                        </div>
                      </button>
                    </div>
                  </div>
                )}
                
                {/* Schedule Section */}
                {activeSection === 'schedule' && (
                  <div className="animate-fadeIn">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Calendar className="h-5 w-5 mr-2 text-purple-400" />
                        Schedule Your Consultation
                      </h3>
                      <p className="text-gray-400 mb-6">Select a preferred date and time for your strategic consultation.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-400 mb-2">Preferred Date</label>
                          <div className="relative">
                            <input
                              type="date"
                              id="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              required
                              min={new Date().toISOString().split('T')[0]}
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-sm font-medium text-gray-400 mb-2">Preferred Time</label>
                          <div className="relative">
                            <select
                              id="time"
                              name="time"
                              value={formData.time}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 appearance-none"
                            >
                              <option value="">Select a time</option>
                              {availableTimes.map((time, index) => (
                                <option key={index} value={time}>{time}</option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                              <ChevronDown className="h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-8 p-4 bg-gray-800/30 border border-gray-700/50 rounded-lg">
                        <h4 className="text-sm font-medium text-white mb-3 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-purple-400" />
                          What to Expect
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start text-sm text-gray-300">
                            <div className="flex-shrink-0 mt-1 mr-3">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                            </div>
                            <span>30-minute video consultation with our expert strategist</span>
                          </li>
                          <li className="flex items-start text-sm text-gray-300">
                            <div className="flex-shrink-0 mt-1 mr-3">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                            </div>
                            <span>Personalized insights and recommendations for your business</span>
                          </li>
                          <li className="flex items-start text-sm text-gray-300">
                            <div className="flex-shrink-0 mt-1 mr-3">
                              <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                            </div>
                            <span>Follow-up email with session summary and next steps</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setActiveSection('services')}
                        className="px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-all duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className={`group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 p-px ${formStatus === 'submitting' ? 'opacity-80' : ''}`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative flex items-center justify-center px-8 py-3 bg-gray-900 rounded-[11px]">
                          {formStatus === 'idle' && (
                            <>
                              <span className="font-medium text-white mr-3">Schedule Consultation</span>
                              <ArrowRight className="h-5 w-5 text-purple-300 group-hover:translate-x-1 transition-traninfoorm duration-300" />
                            </>
                          )}
                          {formStatus === 'submitting' && (
                            <div className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span className="font-medium text-white">Processing...</span>
                            </div>
                          )}
                          {formStatus === 'success' && (
                            <div className="flex items-center">
                              <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                              <span className="font-medium text-white">Consultation Scheduled!</span>
                            </div>
                          )}
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Custom animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes pulse-slow-delay {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes fadeIn {
          from { opacity: 0; traninfoorm: translateY(10px); }
          to { opacity: 1; traninfoorm: translateY(0); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 6s cubic-bezier(0.4, 0, 0.6, 1) infinite 3s;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animate-pulse-delay {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s;
        }
      `}</style>
    </div>
  );
};

export default ConsultationModal;