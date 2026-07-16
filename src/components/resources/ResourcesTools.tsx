import React, { useState } from 'react';
import { Shield, AlertTriangle, Search, Lock, Cpu, Server, Database, ArrowRight } from 'lucide-react';

export default function ResourcesTools() {
  const [activeTab, setActiveTab] = useState('featured');
  
  return (
    <section className="py-16 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Security Tools & Utilities</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Access our collection of cybersecurity tools and utilities designed to help you assess, monitor, and enhance your security posture.
            </p>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
              <button
                onClick={() => setActiveTab('featured')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === 'featured' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Featured Tools
              </button>
              <button
                onClick={() => setActiveTab('assessment')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === 'assessment' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Assessment
              </button>
              <button
                onClick={() => setActiveTab('monitoring')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === 'monitoring' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Monitoring
              </button>
              <button
                onClick={() => setActiveTab('compliance')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === 'compliance' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Compliance
              </button>
            </div>
          </div>
          
          {/* Tools grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {activeTab === 'featured' && (
              <>
                <ToolCard 
                  icon={<Shield className="h-6 w-6 text-blue-400" />}
                  title="Vulnerability Scanner Pro"
                  description="Comprehensive vulnerability scanning tool for networks, applications, and systems."
                  category="Assessment"
                  isPopular={true}
                />
                <ToolCard 
                  icon={<AlertTriangle className="h-6 w-6 text-amber-400" />}
                  title="Threat Intelligence Dashboard"
                  description="Real-time threat intelligence dashboard with customizable alerts and reporting."
                  category="Monitoring"
                  isPopular={true}
                />
                <ToolCard 
                  icon={<Search className="h-6 w-6 text-purple-400" />}
                  title="Security Posture Analyzer"
                  description="Analyze your organization's security posture against industry benchmarks and standards."
                  category="Assessment"
                  isPopular={false}
                />
                <ToolCard 
                  icon={<Lock className="h-6 w-6 text-green-400" />}
                  title="Compliance Checker"
                  description="Automated compliance checking tool for various regulatory frameworks including GDPR, HIPAA, and PCI DSS."
                  category="Compliance"
                  isPopular={false}
                />
                <ToolCard 
                  icon={<Cpu className="h-6 w-6 text-blue-400" />}
                  title="Endpoint Protection Monitor"
                  description="Monitor and manage endpoint security across your organization with real-time alerts."
                  category="Monitoring"
                  isPopular={false}
                />
                <ToolCard 
                  icon={<Server className="h-6 w-6 text-indigo-400" />}
                  title="Network Traffic Analyzer"
                  description="Advanced network traffic analysis tool to detect anomalies and potential security threats."
                  category="Monitoring"
                  isPopular={false}
                />
              </>
            )}
            
            {activeTab === 'assessment' && (
              <>
                <ToolCard 
                  icon={<Shield className="h-6 w-6 text-blue-400" />}
                  title="Vulnerability Scanner Pro"
                  description="Comprehensive vulnerability scanning tool for networks, applications, and systems."
                  category="Assessment"
                  isPopular={true}
                />
                <ToolCard 
                  icon={<Search className="h-6 w-6 text-purple-400" />}
                  title="Security Posture Analyzer"
                  description="Analyze your organization's security posture against industry benchmarks and standards."
                  category="Assessment"
                  isPopular={false}
                />
                <ToolCard 
                  icon={<Database className="h-6 w-6 text-green-400" />}
                  title="Database Security Auditor"
                  description="Audit database configurations, permissions, and security controls against best practices."
                  category="Assessment"
                  isPopular={false}
                />
              </>
            )}
            
            {activeTab === 'monitoring' && (
              <>
                <ToolCard 
                  icon={<AlertTriangle className="h-6 w-6 text-amber-400" />}
                  title="Threat Intelligence Dashboard"
                  description="Real-time threat intelligence dashboard with customizable alerts and reporting."
                  category="Monitoring"
                  isPopular={true}
                />
                <ToolCard 
                  icon={<Cpu className="h-6 w-6 text-blue-400" />}
                  title="Endpoint Protection Monitor"
                  description="Monitor and manage endpoint security across your organization with real-time alerts."
                  category="Monitoring"
                  isPopular={false}
                />
                <ToolCard 
                  icon={<Server className="h-6 w-6 text-indigo-400" />}
                  title="Network Traffic Analyzer"
                  description="Advanced network traffic analysis tool to detect anomalies and potential security threats."
                  category="Monitoring"
                  isPopular={false}
                />
              </>
            )}
            
            {activeTab === 'compliance' && (
              <>
                <ToolCard 
                  icon={<Lock className="h-6 w-6 text-green-400" />}
                  title="Compliance Checker"
                  description="Automated compliance checking tool for various regulatory frameworks including GDPR, HIPAA, and PCI DSS."
                  category="Compliance"
                  isPopular={false}
                />
                <ToolCard 
                  icon={<Shield className="h-6 w-6 text-blue-400" />}
                  title="Policy Generator"
                  description="Generate customized security policies and procedures based on your organization's requirements."
                  category="Compliance"
                  isPopular={false}
                />
                <ToolCard 
                  icon={<Database className="h-6 w-6 text-purple-400" />}
                  title="Data Classification Tool"
                  description="Automatically classify sensitive data according to compliance requirements and organizational policies."
                  category="Compliance"
                  isPopular={false}
                />
              </>
            )}
          </div>
          
          {/* View all tools button */}
          <div className="text-center">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 flex items-center mx-auto">
              View All Security Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  isPopular: boolean;
}

function ToolCard({ icon, title, description, category, isPopular }: ToolCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/30 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-800/40 p-6">
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-blue-600 text-white text-xs font-medium py-1 px-3 rounded-bl-lg rounded-tr-lg">
            Popular
          </div>
        </div>
      )}
      
      <div className="mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800 border border-gray-700">
          {icon}
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-300 text-sm mb-4">
        {description}
      </p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs text-gray-400 px-2 py-1 bg-gray-800 rounded-full">
          {category}
        </span>
        
        <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium">
          Access Tool
          <ArrowRight className="ml-1 h-3 w-3" />
        </button>
      </div>
    </div>
  );
}