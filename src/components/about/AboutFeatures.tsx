import React from 'react';
import { Brain, Zap, LineChart, Users, Sparkles, Shield } from 'lucide-react';
import './aboutAnimations.css';

export default function AboutFeatures() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Innovation",
      description: "We harness cutting-edge artificial intelligence to create strategies that adapt and evolve with your business.",
      gradient: "from-purple-500 to-indigo-600",
      techSpec: "NEURAL.ENGINE.v4.2",
      efficiency: 98
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Our agile approach ensures quick deployment of solutions that drive immediate impact while building long-term growth.",
      gradient: "from-cyan-500 to-blue-600",
      techSpec: "VELOCITY.MATRIX.v3.7",
      efficiency: 94
    },
    {
      icon: LineChart,
      title: "Data-Driven Excellence",
      description: "Every decision we make is backed by comprehensive analytics and insights that maximize your ROI.",
      gradient: "from-purple-500 to-cyan-500",
      techSpec: "ANALYTICS.CORE.v5.1",
      efficiency: 97
    },
    {
      icon: Users,
      title: "Human-Centered Design",
      description: "We create digital experiences that resonate with your audience on a deeper level, fostering genuine connections.",
      gradient: "from-pink-500 to-purple-600",
      techSpec: "EMPATHY.PROTOCOL.v2.9",
      efficiency: 95
    },
    {
      icon: Sparkles,
      title: "Creative Distinction",
      description: "Our team of visionaries crafts unique brand identities that stand out in today's crowded digital landscape.",
      gradient: "from-amber-500 to-pink-600",
      techSpec: "CREATIVE.MATRIX.v4.5",
      efficiency: 96
    },
    {
      icon: Shield,
      title: "Future-Proof Solutions",
      description: "We build scalable systems designed to evolve with emerging technologies and changing market dynamics.",
      gradient: "from-emerald-500 to-cyan-600",
      techSpec: "QUANTUM.SHIELD.v3.3",
      efficiency: 99
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
            <h2 className="text-5xl font-black tracking-tight mb-4 glitch-text" data-text="SYSTEM ADVANTAGES">
              <span className="relative z-10 inline-block">SYSTEM ADVANTAGES</span>
            </h2>
            <div className="absolute inset-0 scanning-line"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8 cyberpunk-subtitle">
            <span className="text-cyan-400">[</span> CORE.CAPABILITIES: OPERATIONAL.STATUS <span className="text-purple-400">]</span>
          </p>
        </div>
        
        {/* Hexagonal grid pattern in background */}
        <div className="absolute inset-0 hexagon-grid opacity-5 pointer-events-none"></div>
        
        {/* Feature cards in a futuristic grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card-container">
              <div className="feature-card-glow" style={{ 
                background: `radial-gradient(circle at center, rgba(${index % 2 === 0 ? '139, 92, 246' : '34, 211, 238'}, 0.3) 0%, transparent 70%)` 
              }}></div>
              
              {/* Tech badge - positioned outside the card for better visibility */}
              <div className="tech-badge-container">
                <div className={`tech-badge bg-gradient-to-r ${feature.gradient}`}>
                  <span className="tech-badge-text">
                    <span className="tech-badge-number">{String(index + 1).padStart(2, '0')}</span>
                    {feature.techSpec}
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
                    '--tw-gradient-stops': `var(--tw-gradient-from), var(--tw-gradient-to)`
                  }}>
                    <feature.icon className="h-8 w-8 text-white feature-icon" />
                  </div>
                  <div className="feature-icon-pulse"></div>
                </div>
                
                {/* Content */}
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                  
                  {/* Efficiency meter */}
                  <div className="efficiency-container">
                    <div className="efficiency-label">SYSTEM EFFICIENCY</div>
                    <div className="efficiency-meter-container">
                      <div className="efficiency-meter-bg"></div>
                      <div 
                        className="efficiency-meter-fill" 
                        style={{ 
                          width: `${feature.efficiency}%`,
                          backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                          '--tw-gradient-stops': `var(--tw-gradient-from), var(--tw-gradient-to)`
                        }}
                      ></div>
                      <div className="efficiency-value">{feature.efficiency}%</div>
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
              <span className="text-cyan-500">{'</'}</span> ADVANTAGE.SYSTEMS.OPERATIONAL <span className="text-purple-500">{'>'}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}