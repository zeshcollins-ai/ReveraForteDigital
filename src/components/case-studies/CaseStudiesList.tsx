import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, BarChart3, Globe, Zap, Users, TrendingUp, Layers } from 'lucide-react';

// Case study data
const caseStudies = [
  {
    id: 1,
    title: "NexGen Technologies Digital Transformation",
    category: "Technology",
    description: "How we helped a leading tech company revamp their entire digital ecosystem, resulting in a 200% increase in user engagement and 45% boost in conversion rates.",
    results: ["200% increase in user engagement", "45% boost in conversion rates", "30% reduction in bounce rate"],
    image: "/case-studies/nexgen-tech.jpg",
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    color: "from-blue-500/20 to-indigo-600/20",
    borderColor: "border-blue-500/30"
  },
  {
    id: 2,
    title: "FinEdge Banking Platform Optimization",
    category: "Finance",
    description: "Transforming a traditional banking platform into a cutting-edge financial ecosystem with advanced security features and intuitive user experience.",
    results: ["87% improvement in user satisfaction", "60% faster transaction processing", "35% increase in mobile banking adoption"],
    image: "/case-studies/finedge-banking.jpg",
    icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
    color: "from-indigo-500/20 to-purple-600/20",
    borderColor: "border-indigo-500/30"
  },
  {
    id: 3,
    title: "MediCore Healthcare Analytics Solution",
    category: "Healthcare",
    description: "Developing a comprehensive analytics platform that helped a healthcare provider improve patient outcomes and optimize operational efficiency.",
    results: ["40% reduction in patient wait times", "25% improvement in resource allocation", "Millions in operational cost savings"],
    image: "/case-studies/medicore-health.jpg",
    icon: <Users className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500/20 to-blue-600/20",
    borderColor: "border-purple-500/30"
  },
  {
    id: 4,
    title: "EcoSmart Energy Management System",
    category: "Energy",
    description: "Creating an innovative energy management solution that helped a multinational corporation reduce their carbon footprint and achieve sustainability goals.",
    results: ["32% reduction in energy consumption", "Carbon neutrality achieved in 18 months", "$2.5M annual cost savings"],
    image: "/case-studies/ecosmart-energy.jpg",
    icon: <Zap className="w-6 h-6 text-green-400" />,
    color: "from-green-500/20 to-blue-600/20",
    borderColor: "border-green-500/30"
  },
  {
    id: 5,
    title: "RetailPro E-commerce Transformation",
    category: "Retail",
    description: "Revamping an outdated e-commerce platform into a state-of-the-art shopping experience with AI-powered recommendations and seamless omnichannel integration.",
    results: ["180% increase in online sales", "65% improvement in customer retention", "4.8/5 average user satisfaction rating"],
    image: "/case-studies/retailpro-ecommerce.jpg",
    icon: <TrendingUp className="w-6 h-6 text-orange-400" />,
    color: "from-orange-500/20 to-red-600/20",
    borderColor: "border-orange-500/30"
  },
  {
    id: 6,
    title: "GlobalLogistics Supply Chain Optimization",
    category: "Logistics",
    description: "Implementing an advanced supply chain management system that revolutionized logistics operations for a global shipping company.",
    results: ["42% improvement in delivery times", "28% reduction in operational costs", "Real-time tracking across 24 countries"],
    image: "/case-studies/globallogistics-supply.jpg",
    icon: <Layers className="w-6 h-6 text-cyan-400" />,
    color: "from-cyan-500/20 to-blue-600/20",
    borderColor: "border-cyan-500/30"
  }
];

// Filter categories
const categories = ["All", "Technology", "Finance", "Healthcare", "Energy", "Retail", "Logistics"];

export default function CaseStudiesList() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedCase, setExpandedCase] = useState<number | null>(null);
  
  const filteredCases = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === selectedCategory);
    
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Category Filter */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-center">Browse by Industry</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(category => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
                  : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
      
      {/* Case Studies Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCases.map(caseStudy => (
          <motion.div
            key={caseStudy.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`bg-gradient-to-br ${caseStudy.color} backdrop-blur-sm rounded-xl overflow-hidden border ${caseStudy.borderColor} group`}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-black/30 rounded-lg">
                  {caseStudy.icon}
                </div>
                <span className="text-sm font-medium text-gray-300">{caseStudy.category}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                {caseStudy.title}
              </h3>
              
              <p className="text-gray-300 mb-4 line-clamp-3">
                {caseStudy.description}
              </p>
              
              {expandedCase === caseStudy.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mb-4"
                >
                  <h4 className="font-semibold text-blue-300 mb-2">Key Results:</h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => setExpandedCase(expandedCase === caseStudy.id ? null : caseStudy.id)}
                  className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1"
                >
                  {expandedCase === caseStudy.id ? "Show less" : "Show more"}
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${expandedCase === caseStudy.id ? "rotate-180" : ""}`} 
                  />
                </button>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="text-sm text-white flex items-center gap-1 bg-blue-600/30 px-3 py-1 rounded-full hover:bg-blue-600/50 transition-colors"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Load More Button */}
      <div className="mt-12 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full text-white font-medium"
        >
          Load More Case Studies
        </motion.button>
      </div>
    </section>
  );
}