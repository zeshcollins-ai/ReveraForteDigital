import React from 'react';
import { ArrowRight, BookOpen, FileText, Code, Database, Shield } from 'lucide-react';

export default function ResourcesHero() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Hero content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center space-x-2 px-4 py-1.5 bg-blue-900/30 backdrop-blur-sm rounded-full border border-blue-700/30">
              <span className="block w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-blue-300 text-sm font-medium">Knowledge Hub</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-200">
            Cybersecurity Resources & Tools
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Access our comprehensive collection of cybersecurity resources, tools, and insights to strengthen your security posture and stay ahead of emerging threats.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 flex items-center font-medium">
              Explore Library
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300 border border-gray-700">
              View Tools
            </button>
          </div>
        </div>
        
        {/* Resource categories preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <ResourceCard 
            icon={<BookOpen className="h-6 w-6 text-blue-400" />}
            title="Whitepapers"
            description="In-depth research and analysis on cybersecurity topics"
            count={24}
            color="blue"
          />
          <ResourceCard 
            icon={<FileText className="h-6 w-6 text-purple-400" />}
            title="Case Studies"
            description="Real-world security incident analyses and solutions"
            count={16}
            color="purple"
          />
          <ResourceCard 
            icon={<Code className="h-6 w-6 text-green-400" />}
            title="Tools & Scripts"
            description="Security tools and automation scripts for practitioners"
            count={32}
            color="green"
          />
          <ResourceCard 
            icon={<Shield className="h-6 w-6 text-amber-400" />}
            title="Best Practices"
            description="Security guidelines and implementation frameworks"
            count={18}
            color="amber"
          />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>
    </section>
  );
}

interface ResourceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  count: number;
  color: 'blue' | 'purple' | 'green' | 'amber';
}

function ResourceCard({ icon, title, description, count, color }: ResourceCardProps) {
  const colorClasses = {
    blue: 'from-blue-900/50 to-blue-800/20 hover:from-blue-800/50 hover:to-blue-700/30 border-blue-700/30',
    purple: 'from-purple-900/50 to-purple-800/20 hover:from-purple-800/50 hover:to-purple-700/30 border-purple-700/30',
    green: 'from-green-900/50 to-green-800/20 hover:from-green-800/50 hover:to-green-700/30 border-green-700/30',
    amber: 'from-amber-900/50 to-amber-800/20 hover:from-amber-800/50 hover:to-amber-700/30 border-amber-700/30',
  };
  
  return (
    <div className={`relative p-6 rounded-xl bg-gradient-to-br ${colorClasses[color]} backdrop-blur-sm border transition-all duration-300 hover:translate-y-[-5px] group`}>
      <div className="absolute inset-0 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      
      <div className="relative">
        <div className="mb-4">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">{count} resources</span>
          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  );
}