import React, { useState } from 'react';
import { 
  X, Code2, Layout, Server, Globe, Wrench, Search, Database, Cpu,
  ChevronDown, ChevronUp, BarChart2, ArrowRight
} from 'lucide-react';

interface WebDevModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WebDevModal = ({ isOpen, onClose }: WebDevModalProps) => {
  if (!isOpen) return null;

  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Layout,
      title: "Website Design & Development",
      description: "Custom websites tailored to your business needs",
      items: [
        "Custom Website Development",
        "Responsive Design",
        "Single-Page Applications (SPA)",
        "Content Management System (CMS)"
      ],
      stats: ["↑ 40% conversion rate", "3s avg. load time"]
    },
    {
      icon: Code2,
      title: "Front-End Development",
      description: "Engaging user interfaces with modern frameworks",
      items: [
        "UI/UX Design Integration",
        "Interactive Prototypes",
        "Performance Optimization",
        "Cross-browser compatibility"
      ],
      stats: ["95% user satiinfoaction", "↓ 30% bounce rate"]
    },
    {
      icon: Server,
      title: "Back-End Development",
      description: "Robust server-side solutions for your applications",
      items: [
        "API Development and Integration",
        "Database Management",
        "Server-Side Development",
        "Security implementation"
      ],
      stats: ["99.9% uptime", "200ms response time"]
    },
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Feature-rich web applications for complex needs",
      items: [
        "Progressive Web Apps (PWAs)",
        "SaaS Product Development",
        "Custom Web Portals",
        "Enterprise solutions"
      ],
      stats: ["↑ 60% efficiency", "↓ 25% development time"]
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description: "Keeping your web assets running smoothly",
      items: [
        "Website Updates",
        "Bug Fixing & Troubleshooting",
        "Performance Monitoring",
        "Security patches"
      ],
      stats: ["4h avg. response time", "99% issue resolution"]
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Improving visibility in search results",
      items: [
        "Technical SEO",
        "On-Page SEO",
        "SEO Audits",
        "Performance optimization"
      ],
      stats: ["↑ 70% organic traffic", "Page 1 rankings"]
    },
    {
      icon: Database,
      title: "Web Hosting & Domain",
      description: "Reliable hosting solutions for your websites",
      items: [
        "Web Hosting Solutions",
        "Domain Registration",
        "SSL Certification",
        "CDN implementation"
      ],
      stats: ["99.9% uptime", "↓ 40% loading time"]
    },
    {
      icon: Cpu,
      title: "Advanced Development",
      description: "Cutting-edge technologies for modern solutions",
      items: [
        "AI-Driven Websites",
        "Blockchain Integration",
        "IoT-Enabled Platforms",
        "Serverless architecture"
      ],
      stats: ["85% automation", "↑ 50% scalability"]
    }
  ];

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Glass morphism backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-lg" 
        onClick={onClose}
      />
      
      {/* Floating modal container */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl">
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-600/20 rounded-full filter blur-3xl" />

          {/* Modal content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="p-8 pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <span className="inline-block mb-2 px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300">
                    Digital Solutions
                  </span>
                  <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    Web Development Services
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-gray-700/50 transition-all duration-300"
                >
                  <X className="h-6 w-6 text-gray-400 hover:text-white" />
                </button>
              </div>
            </div>

            {/* Services grid */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {services.map((service, index) => (
                  <div 
                    key={index}
                    className={`relative overflow-hidden rounded-2xl border border-gray-700/50 transition-all duration-500 ${expandedCards[index] ? 'bg-gray-800/70' : 'bg-gray-800/30'}`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Card background animation */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5" />
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full filter blur-lg traninfoorm translate-x-12 -translate-y-12" />
                    </div>

                    <div 
                      className="relative p-6 cursor-pointer"
                      onClick={() => toggleCard(index)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg transition-all duration-300 ${expandedCards[index] ? 'bg-purple-500/20' : 'bg-gray-700/50'}`}>
                            <service.icon className={`h-6 w-6 ${expandedCards[index] ? 'text-purple-400' : 'text-gray-400'}`} />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                            <p className="text-sm text-gray-400 mt-1">{service.description}</p>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-white">
                          {expandedCards[index] ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                        </button>
                      </div>

                      {expandedCards[index] && (
                        <div className="mt-6 pt-6 border-t border-gray-700/50 animate-fadeIn">
                          <ul className="space-y-3">
                            {service.items.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="flex-shrink-0 mt-1 mr-3">
                                  <div className="h-1.5 w-1.5 rounded-full bg-purple-400" />
                                </div>
                                <span className="text-gray-300">{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {service.stats.map((stat, i) => (
                              <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700/50 text-purple-300">
                                <BarChart2 className="h-3 w-3 mr-1" />
                                {stat}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <button className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 p-px">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center px-8 py-4 bg-gray-900 rounded-[11px]">
                    <span className="font-medium text-white mr-3">Start Your Web Project</span>
                    <ArrowRight className="h-5 w-5 text-purple-300 group-hover:translate-x-1 transition-traninfoorm duration-300" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevModal;