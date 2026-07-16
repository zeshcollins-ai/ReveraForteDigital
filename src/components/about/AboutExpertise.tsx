import React, { useState } from 'react';
import './aboutAnimations.css';
import { Cpu, Zap, Database, Code, Server, Monitor } from 'lucide-react';

export default function AboutExpertise() {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  
  const expertise = [
    {
      name: "AI-Driven Marketing",
      percentage: 95,
      color: "from-purple-500 to-indigo-600",
      icon: Cpu,
      description: "Neural networks and machine learning algorithms that optimize campaign performance in real-time."
    },
    {
      name: "Brand Strategy & Identity",
      percentage: 90,
      color: "from-cyan-500 to-blue-600",
      icon: Zap,
      description: "Quantum-level brand positioning that creates resonant connections with target demographics."
    },
    {
      name: "Digital Traninfoormation",
      percentage: 92,
      color: "from-pink-500 to-purple-600",
      icon: Server,
      description: "Comprehensive system architecture overhauls that future-proof business operations."
    },
    {
      name: "UX/UI Design",
      percentage: 88,
      color: "from-amber-500 to-pink-600",
      icon: Monitor,
      description: "Neuro-responsive interfaces that adapt to user behavior patterns and preferences."
    },
    {
      name: "Data Analytics & Insights",
      percentage: 94,
      color: "from-emerald-500 to-cyan-600",
      icon: Database,
      description: "Predictive modeling systems that extract actionable intelligence from complex datasets."
    },
    {
      name: "Content Creation & SEO",
      percentage: 89,
      color: "from-purple-500 to-cyan-500",
      icon: Code,
      description: "Algorithm-optimized content strategies that maximize visibility and engagement metrics."
    }
  ];

  // Group technologies by category for a more organized display
  const technologyCategories = [
    {
      category: "Development",
      technologies: [
        { name: "React", level: 96 },
        { name: "Next.js", level: 94 },
        { name: "Node.js", level: 94 },
        { name: "GraphQL", level: 89 }
      ]
    },
    {
      category: "AI & Data",
      technologies: [
        { name: "TensorFlow", level: 92 },
        { name: "Python", level: 95 }
      ]
    },
    {
      category: "Cloud Infrastructure",
      technologies: [
        { name: "AWS", level: 93 },
        { name: "Google Cloud", level: 91 },
        { name: "Azure", level: 90 }
      ]
    },
    {
      category: "Design & CMS",
      technologies: [
        { name: "Figma", level: 92 },
        { name: "Adobe CC", level: 90 },
        { name: "Webflow", level: 88 }
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Futuristic title with scanning effect */}
        <div className="text-center mb-20 relative">
          <div className="inline-block relative">
            <h2 className="text-5xl font-black tracking-tight mb-4 glitch-text" data-text="CORE CAPABILITIES">
              <span className="relative z-10 inline-block">CORE CAPABILITIES</span>
            </h2>
            <div className="absolute inset-0 scanning-line"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8 cyberpunk-subtitle">
            <span className="text-purple-400">[</span> EXPERTISE.MATRIX: PERFORMANCE.METRICS <span className="text-cyan-400">]</span>
          </p>
        </div>
        
        {/* Core capabilities display */}
        <div className="capabilities-container">
          <div className="capabilities-grid">
            {expertise.map((skill, index) => (
              <div 
                key={index} 
                className="capability-card"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Card header with icon and percentage */}
                <div className="capability-header">
                  <div className="capability-icon-container">
                    <div className="capability-icon-ring"></div>
                    <div className="capability-icon-bg">
                      <skill.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="capability-percentage-display">
                    <svg className="capability-percentage-circle" viewBox="0 0 36 36">
                      <path
                        className="capability-percentage-bg"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        strokeDasharray="100, 100"
                      />
                      <path
                        className="capability-percentage-fill"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        strokeDasharray={`${skill.percentage}, 100`}
                        style={{ stroke: `url(#gradient-${index})` }}
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" className={`from-${skill.color.split(' ')[0].replace('from-', '')}`} />
                          <stop offset="100%" className={`to-${skill.color.split(' ')[1].replace('to-', '')}`} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="capability-percentage-value">
                      <span className="capability-percentage-number">{skill.percentage}</span>
                      <span className="capability-percentage-symbol">%</span>
                    </div>
                  </div>
                </div>
                
                {/* Card content */}
                <div className="capability-content">
                  <h3 className="capability-title">{skill.name}</h3>
                  
                  <div className="capability-meter-container">
                    <div className="capability-meter-segments">
                      {[...Array(10)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`capability-meter-segment ${i < skill.percentage / 10 ? 'active' : ''}`}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Description that appears on hover */}
                  <div className={`capability-description ${hoveredSkill === index ? 'active' : ''}`}>
                    {skill.description}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="capability-card-decorations">
                  <div className="capability-corner top-left"></div>
                  <div className="capability-corner top-right"></div>
                  <div className="capability-corner bottom-left"></div>
                  <div className="capability-corner bottom-right"></div>
                  <div className="capability-line top"></div>
                  <div className="capability-line right"></div>
                  <div className="capability-line bottom"></div>
                  <div className="capability-line left"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Decorative grid overlay */}
          <div className="capabilities-grid-overlay">
            <div className="capabilities-grid-line horizontal"></div>
            <div className="capabilities-grid-line vertical"></div>
          </div>
        </div>
        
        {/* Technologies section */}
        <div className="mt-32 relative">
          <div className="circuit-board mb-12">
            <div className="circuit-line"></div>
            <div className="circuit-line"></div>
            <div className="circuit-node"></div>
            <div className="circuit-node"></div>
          </div>
          
          <h3 className="text-3xl font-black text-center mb-4 glitch-text" data-text="TECHNOLOGY MATRIX">
            <span className="relative z-10 inline-block">TECHNOLOGY MATRIX</span>
          </h3>
          
          <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-16 cyberpunk-subtitle">
            <span className="text-cyan-400">&lt;</span> SYSTEM.PROFICIENCY.LEVELS <span className="text-purple-400">&gt;</span>
          </p>
          
          <div className="tech-dashboard">
            {technologyCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="tech-category-panel">
                <div className="tech-category-header">
                  <div className="tech-category-title">
                    <span className="tech-category-id">{String(categoryIndex + 1).padStart(2, '0')}</span>
                    <span className="tech-category-name">{category.category}</span>
                  </div>
                  <div className="tech-category-line"></div>
                </div>
                
                <div className="tech-category-content">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-item">
                      <div className="tech-item-name">{tech.name}</div>
                      <div className="tech-item-meter-container">
                        <div className="tech-item-meter">
                          <div 
                            className="tech-item-meter-fill"
                            style={{ width: `${tech.level}%` }}
                          ></div>
                        </div>
                        <div className="tech-item-level">{tech.level}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Decorative elements */}
                <div className="tech-panel-corner top-left"></div>
                <div className="tech-panel-corner top-right"></div>
                <div className="tech-panel-corner bottom-left"></div>
                <div className="tech-panel-corner bottom-right"></div>
              </div>
            ))}
            
            {/* Decorative grid lines */}
            <div className="tech-dashboard-grid">
              <div className="tech-grid-line horizontal-top"></div>
              <div className="tech-grid-line horizontal-bottom"></div>
              <div className="tech-grid-line vertical-left"></div>
              <div className="tech-grid-line vertical-right"></div>
            </div>
            
            {/* Scanning effect */}
            <div className="tech-dashboard-scan"></div>
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
                <span className="text-cyan-500">{'</'}</span> CAPABILITY.ASSESSMENT.COMPLETE <span className="text-purple-500">{'>'}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}