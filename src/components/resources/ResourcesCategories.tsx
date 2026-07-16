import React, { useState } from 'react';
import { Shield, Server, Globe, Building, Users, Database, Lock, Cpu } from 'lucide-react';

export default function ResourcesCategories() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'All Categories', icon: Shield },
    { id: 'network', name: 'Network Security', icon: Server },
    { id: 'web', name: 'Web Security', icon: Globe },
    { id: 'enterprise', name: 'Enterprise Security', icon: Building },
    { id: 'identity', name: 'Identity & Access', icon: Users },
    { id: 'data', name: 'Data Protection', icon: Database },
    { id: 'crypto', name: 'Cryptography', icon: Lock },
    { id: 'cloud', name: 'Cloud Security', icon: Cpu },
  ];
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Resource Categories</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Browse our extensive collection of cybersecurity resources organized by category to find exactly what you need.
            </p>
          </div>
          
          {/* Category filters */}
          <div className="mb-12 overflow-x-auto hide-scrollbar">
            <div className="flex space-x-2 min-w-max p-1">
              {categories.map((category) => (
                <CategoryButton 
                  key={category.id}
                  category={category}
                  isActive={activeCategory === category.id}
                  onClick={() => setActiveCategory(category.id)}
                />
              ))}
            </div>
          </div>
          
          {/* Featured resources for the selected category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedResource 
              title="Advanced Threat Detection Techniques"
              type="Whitepaper"
              date="May 15, 2023"
              readTime={12}
              imageUrl="/images/resources/threat-detection.jpg"
              categories={['network', 'enterprise']}
              isVisible={activeCategory === 'all' || activeCategory === 'network' || activeCategory === 'enterprise'}
            />
            <FeaturedResource 
              title="Securing Cloud Infrastructure: Best Practices"
              type="Guide"
              date="June 22, 2023"
              readTime={18}
              imageUrl="/images/resources/cloud-security.jpg"
              categories={['cloud', 'enterprise']}
              isVisible={activeCategory === 'all' || activeCategory === 'cloud' || activeCategory === 'enterprise'}
            />
            <FeaturedResource 
              title="Zero Trust Architecture Implementation"
              type="Case Study"
              date="April 8, 2023"
              readTime={15}
              imageUrl="/images/resources/zero-trust.jpg"
              categories={['identity', 'enterprise']}
              isVisible={activeCategory === 'all' || activeCategory === 'identity' || activeCategory === 'enterprise'}
            />
            <FeaturedResource 
              title="Web Application Firewall Configuration"
              type="Technical Guide"
              date="July 3, 2023"
              readTime={10}
              imageUrl="/images/resources/waf-config.jpg"
              categories={['web', 'network']}
              isVisible={activeCategory === 'all' || activeCategory === 'web' || activeCategory === 'network'}
            />
            <FeaturedResource 
              title="Data Encryption Standards for Compliance"
              type="Whitepaper"
              date="March 17, 2023"
              readTime={14}
              imageUrl="/images/resources/encryption.jpg"
              categories={['data', 'crypto']}
              isVisible={activeCategory === 'all' || activeCategory === 'data' || activeCategory === 'crypto'}
            />
            <FeaturedResource 
              title="Secure DevOps Pipeline Implementation"
              type="Case Study"
              date="May 29, 2023"
              readTime={16}
              imageUrl="/images/resources/devops.jpg"
              categories={['enterprise', 'cloud']}
              isVisible={activeCategory === 'all' || activeCategory === 'enterprise' || activeCategory === 'cloud'}
            />
          </div>
          
          {/* View all button */}
          <div className="mt-12 text-center">
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 border border-gray-700">
              View All Resources
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CategoryButtonProps {
  category: {
    id: string;
    name: string;
    icon: React.ElementType;
  };
  isActive: boolean;
  onClick: () => void;
}

function CategoryButton({ category, isActive, onClick }: CategoryButtonProps) {
  const Icon = category.icon;
  
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
        isActive 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/70'
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{category.name}</span>
    </button>
  );
}

interface FeaturedResourceProps {
  title: string;
  type: string;
  date: string;
  readTime: number;
  imageUrl: string;
  categories: string[];
  isVisible: boolean;
}

function FeaturedResource({ title, type, date, readTime, imageUrl, categories, isVisible }: FeaturedResourceProps) {
  if (!isVisible) return null;
  
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-800/40">
      {/* Resource image with overlay */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-traninfoorm duration-500 group-hover:scale-110"
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            // Fallback gradient if image doesn't load
            backgroundColor: 'rgba(30, 41, 59, 0.7)'
          }}
        ></div>
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3 py-1 bg-blue-600/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
            {type}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <span>{date}</span>
          <span>{readTime} min read</span>
        </div>
        
        <button className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 border border-gray-700 text-sm">
          Read Resource
        </button>
      </div>
    </div>
  );
}