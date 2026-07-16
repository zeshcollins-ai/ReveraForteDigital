import React, { useState } from 'react';
import { Search, Filter, Download, BookOpen, FileText, ArrowRight, ChevronDown } from 'lucide-react';

export default function ResourcesLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  return (
    <section className="py-16 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">Resource Library</h2>
                <p className="text-gray-300">
                  Access our comprehensive collection of cybersecurity resources
                </p>
              </div>
              
              {/* Search and filter */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search resources..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full sm:w-64 px-4 py-2 pl-10 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  />
                  <Search className="absolute left-3 top-1/2 traninfoorm -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 border border-gray-700 flex items-center justify-center"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                  <ChevronDown className={`h-4 w-4 ml-2 transition-traninfoorm duration-300 ${showFilters ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
            
            {/* Filters panel */}
            {showFilters && (
              <div className="mt-6 p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Resource Type</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white">
                      <option value="">All Types</option>
                      <option value="whitepaper">Whitepapers</option>
                      <option value="guide">Guides</option>
                      <option value="case-study">Case Studies</option>
                      <option value="tool">Tools</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white">
                      <option value="">All Categories</option>
                      <option value="network">Network Security</option>
                      <option value="web">Web Security</option>
                      <option value="cloud">Cloud Security</option>
                      <option value="data">Data Protection</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Date</label>
                    <select className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white">
                      <option value="">Any Time</option>
                      <option value="week">Last Week</option>
                      <option value="month">Last Month</option>
                      <option value="quarter">Last 3 Months</option>
                      <option value="year">Last Year</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300">
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Resources grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {resources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
          
          {/* Load more button */}
          <div className="text-center">
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 border border-gray-700 inline-flex items-center">
              Load More Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface Resource {
  title: string;
  description: string;
  type: 'whitepaper' | 'guide' | 'case-study' | 'tool';
  category: string;
  date: string;
  downloadable: boolean;
}

function ResourceCard({ resource }: { resource: Resource }) {
  const typeIcons = {
    'whitepaper': <BookOpen className="h-4 w-4" />,
    'guide': <FileText className="h-4 w-4" />,
    'case-study': <FileText className="h-4 w-4" />,
    'tool': <Download className="h-4 w-4" />,
  };
  
  const typeColors = {
    'whitepaper': 'bg-blue-600/80',
    'guide': 'bg-green-600/80',
    'case-study': 'bg-purple-600/80',
    'tool': 'bg-amber-600/80',
  };
  
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-800/40 p-6">
      <div className="mb-4 flex items-center justify-between">
        <div className={`px-3 py-1 ${typeColors[resource.type]} backdrop-blur-sm text-white text-xs font-medium rounded-full flex items-center`}>
          {typeIcons[resource.type]}
          <span className="ml-1 capitalize">{resource.type}</span>
        </div>
        <span className="text-xs text-gray-400">{resource.date}</span>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
        {resource.title}
      </h3>
      
      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
        {resource.description}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-gray-400 px-2 py-1 bg-gray-800 rounded-full">
          {resource.category}
        </span>
        
        <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
          {resource.downloadable ? 'Download' : 'Read More'}
          <ArrowRight className="ml-1 h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

// Sample resource data
const resources: Resource[] = [
  {
    title: "Ransomware Protection Strategies",
    description: "Comprehensive guide to protecting your organization from ransomware attacks and implementing recovery plans.",
    type: "whitepaper",
    category: "Threat Protection",
    date: "Jun 12, 2023",
    downloadable: true
  },
  {
    title: "Zero Trust Implementation Framework",
    description: "Step-by-step guide to implementing a Zero Trust security model in enterprise environments.",
    type: "guide",
    category: "Enterprise Security",
    date: "May 28, 2023",
    downloadable: true
  },
  {
    title: "Cloud Security Posture Management",
    description: "Best practices for maintaining secure cloud configurations and preventing misconfigurations.",
    type: "whitepaper",
    category: "Cloud Security",
    date: "Jul 05, 2023",
    downloadable: true
  },
  {
    title: "Financial Institution Security Traninfoormation",
    description: "Case study of a major financial institution's security traninfoormation journey and outcomes.",
    type: "case-study",
    category: "Financial Security",
    date: "Apr 18, 2023",
    downloadable: false
  },
  {
    title: "Network Traffic Analysis Tool",
    description: "Advanced tool for analyzing network traffic patterns and identifying potential security threats.",
    type: "tool",
    category: "Network Security",
    date: "Jun 30, 2023",
    downloadable: true
  },
  {
    title: "API Security Best Practices",
    description: "Comprehensive guide to securing APIs and preventing common vulnerabilities in API implementations.",
    type: "guide",
    category: "Web Security",
    date: "May 15, 2023",
    downloadable: true
  }
];