import React, { useState } from 'react';
import { Target, Star, Award, Zap, Shield, Users, Lightbulb } from 'lucide-react';
import Button from '../../components/common/Button';
import { ArrowRight } from 'lucide-react';
import './aboutAnimations.css';

export default function AboutVision() {
  const [activeValue, setActiveValue] = useState<number | null>(null);
  
  const values = [
    {
      title: "Innovation Without Boundaries",
      description: "We constantly push the limits of what's possible in digital marketing, exploring uncharted territories of technology and creativity.",
      icon: Lightbulb,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Data-Informed Creativity",
      description: "We blend analytical insights with creative brilliance, using advanced algorithms to inform and enhance our creative decision-making process.",
      icon: Zap,
      color: "from-cyan-500 to-blue-600"
    },
    {
      title: "Client Success First",
      description: "Your growth is our ultimate metric of success. We measure our achievements through the transformative results we deliver for our partners.",
      icon: Users,
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Ethical Digital Practices",
      description: "We believe in transparent, responsible approaches to digital marketing, maintaining the highest standards of data privacy and ethical engagement.",
      icon: Shield,
      color: "from-emerald-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 vision-grid opacity-10"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 particles-container">
        {[...Array(10)].map((_, i) => (
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Vision Section */}
          <div className="vision-container">
            <div className="vision-header">
              <div className="vision-icon-container">
                <div className="vision-icon-orbit">
                  <div className="vision-icon-satellite"></div>
                </div>
                <div className="vision-icon-bg">
                  <Target className="h-8 w-8 text-white" />
                </div>
              </div>
              
              <div className="vision-title-container">
                <h2 className="text-4xl font-black tracking-tight glitch-text" data-text="VISION STATEMENT">
                  <span className="relative z-10 inline-block">VISION STATEMENT</span>
                </h2>
                <div className="vision-title-underline"></div>
              </div>
            </div>
            
            <div className="vision-content">
              <div className="vision-statement-container">
                <p className="vision-statement">
                  To pioneer a new era of digital marketing where AI amplifies human creativity, creating transformative experiences that propel businesses into the future.
                </p>
                
                <div className="vision-statement-decoration">
                  <div className="vision-statement-line"></div>
                  <div className="vision-statement-dot"></div>
                </div>
              </div>
              
              <div className="vision-description">
                <p className="vision-paragraph">
                  We envision a world where every brand can harness the power of cutting-edge technology to connect with their audience in meaningful, measurable ways.
                </p>
                
                <p className="vision-paragraph">
                  Through quantum leaps in AI-driven analytics and neuro-responsive design, we're creating the future of digital engagement today.
                </p>
              </div>
              
              <div className="vision-cta-container">
                <Button variant="primary" icon={ArrowRight} className="vision-cta-button">
                  Join Our Journey
                </Button>
                
                <div className="vision-cta-decoration">
                  <div className="vision-cta-line"></div>
                  <div className="vision-cta-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Values Section */}
          <div className="values-container">
            <div className="values-header">
              <div className="values-icon-container">
                <Award className="h-8 w-8 text-white" />
                <div className="values-icon-glow"></div>
              </div>
              
              <h3 className="values-title">CORE PRINCIPLES</h3>
              
              <div className="values-header-decoration">
                <div className="values-header-line"></div>
                <div className="values-header-dot"></div>
              </div>
            </div>
            
            <div className="values-grid">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`value-card ${activeValue === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveValue(index)}
                  onMouseLeave={() => setActiveValue(null)}
                >
                  <div className="value-card-inner">
                    <div className="value-icon-container">
                      <div className={`value-icon-bg bg-gradient-to-r ${value.color}`}>
                        <value.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="value-content">
                      <h4 className="value-title">{value.title}</h4>
                      <p className="value-description">{value.description}</p>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="value-card-decorations">
                      <div className="value-corner top-left"></div>
                      <div className="value-corner top-right"></div>
                      <div className="value-corner bottom-left"></div>
                      <div className="value-corner bottom-right"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="values-footer">
              <div className="values-footer-line"></div>
              <p className="values-footer-text">
                <span className="text-cyan-400">&lt;</span> PRINCIPLES.EXECUTION.PROTOCOL <span className="text-purple-400">&gt;</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}