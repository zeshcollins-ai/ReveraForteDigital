import React, { useState } from 'react';
import { 
  X, Users, Database, List, PieChart, Eraser, Link,
  ChevronDown, ChevronUp, BarChart2, ArrowRight
} from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const B2BDatabaseModal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Users,
      title: "Lead Generation",
      description: "Sourcing high-quality, verified leads",
      items: [
        "Industry-specific targeting",
        "Decision-maker identification",
        "Contact verification",
        "Customized lead profiles"
      ],
      stats: ["↑ 45% conversion rate", "3x sales pipeline"]
    },
    {
      icon: Database,
      title: "Data Enrichment",
      description: "Enhancing existing datasets with valuable information",
      items: [
        "Company firmographics",
        "Contact details",
        "Technographic data",
        "Intent signals"
      ],
      stats: ["98% data accuracy", "↑ 60% engagement"]
    },
    {
      icon: List,
      title: "Contact List Building",
      description: "Creating segmented and targeted contact lists",
      items: [
        "Role-based segmentation",
        "Industry classification",
        "Company size filtering",
        "Geographic targeting"
      ],
      stats: ["2x response rates", "↓ 30% cost per lead"]
    },
    {
      icon: PieChart,
      title: "Market Segmentation Analysis",
      description: "Detailed customer segmentation for marketing strategies",
      items: [
        "Behavioral analysis",
        "Demographic profiling",
        "Buying pattern recognition",
        "Competitive positioning"
      ],
      stats: ["5x marketing ROI", "↑ 40% targeting accuracy"]
    },
    {
      icon: Eraser,
      title: "Database Cleansing",
      description: "Removing duplicates and outdated information",
      items: [
        "Duplicate removal",
        "Data validation",
        "Information updating",
        "Format standardization"
      ],
      stats: ["↓ 70% bounce rate", "99.5% deliverability"]
    },
    {
      icon: Link,
      title: "CRM Integration",
      description: "Syncing databases with popular CRM tools",
      items: [
        "Salesforce integration",
        "HubSpot connectivity",
        "Microsoft Dynamics sync",
        "Custom API development"
      ],
      stats: ["↑ 35% sales efficiency", "↓ 25% data entry time"]
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
                    Data Solutions
                  </span>
                  <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    B2B Database Services
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
                      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full filter blur-lg transform translate-x-12 -translate-y-12" />
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
                    <span className="font-medium text-white mr-3">Request Data Consultation</span>
                    <ArrowRight className="h-5 w-5 text-purple-300 group-hover:translate-x-1 transition-transform duration-300" />
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

export default B2BDatabaseModal;