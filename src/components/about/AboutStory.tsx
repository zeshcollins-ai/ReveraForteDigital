import React from 'react';
import { Sparkles, Code, Rocket, Zap, Star, Atom, Cpu, BrainCircuit, Layers } from 'lucide-react';
import './aboutAnimations.css';

export default function AboutStory() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Futuristic grid lines */}
      <div className="absolute inset-0 grid-lines opacity-20"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 particles-container">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Holographic circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 holographic-circle"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 holographic-circle" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Futuristic title with scanning effect */}
        <div className="text-center mb-24 relative">
          <div className="inline-block relative">
            {/* Orbiting elements */}
            <div className="absolute inset-0 w-full h-full">
              <div className="orbit-container">
                <div className="orbit-circle">
                  <div className="orbit-dot bg-purple-500"></div>
                </div>
                <div className="orbit-circle" style={{ animationDelay: '0.5s' }}>
                  <div className="orbit-dot bg-cyan-500"></div>
                </div>
                <div className="orbit-circle" style={{ animationDelay: '1s' }}>
                  <div className="orbit-dot bg-pink-500"></div>
                </div>
              </div>
            </div>
            
            <h2 className="text-7xl font-black tracking-tight mb-4 glitch-text" data-text="OUR GENESIS">
              <span className="relative z-10 inline-block">OUR GENESIS</span>
            </h2>
            
            {/* Scanning line effect */}
            <div className="absolute inset-0 scanning-line"></div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-8 cyberpunk-subtitle">
            <span className="text-purple-400">[</span> SYSTEM.INITIALIZE: HISTORICAL.DATA <span className="text-cyan-400">]</span>
          </p>
        </div>
        
        {/* Hexagonal timeline */}
        <div className="relative mb-32">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500 transform -translate-x-1/2 data-stream"></div>
          
          {/* Timeline nodes */}
          <div className="space-y-40">
            {/* Node 1 */}
            <div className="relative">
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="hexagon-container">
                  <div className="hexagon bg-black border-2 border-purple-500 flex items-center justify-center">
                    <BrainCircuit className="h-8 w-8 text-purple-400" />
                  </div>
                  <div className="hexagon-pulse"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-16 pt-16">
                  <div className="neon-card from-purple-900/40 to-purple-700/10 border-purple-500/30">
                    <div className="neon-card-glow bg-purple-500/20"></div>
                    <div className="relative z-10">
                      <div className="tech-badge bg-purple-900 text-purple-300 mb-4">
                        <span className="text-xs mr-2">01</span>
                        INITIALIZATION
                      </div>
                      <h3 className="text-3xl font-bold mb-4 cyber-gradient-text from-purple-400 to-pink-400">Neural Genesis</h3>
                      <p className="text-gray-300 leading-relaxed mb-6 tech-text">
                        Revera Forte emerged from the convergence of quantum computing and neural networks. Our founders identified a critical gap in the digital ecosystem: the absence of truly adaptive AI-driven marketing solutions.
                      </p>
                      <div className="tech-specs">
                        <div className="tech-spec-item">
                          <span className="tech-spec-label">TIMESTAMP</span>
                          <span className="tech-spec-value text-purple-400">2019.03.15</span>
                        </div>
                        <div className="tech-spec-item">
                          <span className="tech-spec-label">PROTOCOL</span>
                          <span className="tech-spec-value text-purple-400">ALPHA-001</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="hologram-container">
                    <div className="hologram-base"></div>
                    <div className="hologram-projection">
                      <Cpu className="h-16 w-16 text-purple-500 hologram-icon" />
                    </div>
                    <div className="hologram-rings">
                      <div className="hologram-ring"></div>
                      <div className="hologram-ring" style={{ animationDelay: '0.5s' }}></div>
                      <div className="hologram-ring" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Node 2 */}
            <div className="relative">
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="hexagon-container">
                  <div className="hexagon bg-black border-2 border-cyan-500 flex items-center justify-center">
                    <Layers className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div className="hexagon-pulse cyan"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="hidden md:flex items-center justify-center order-2 md:order-1">
                  <div className="hologram-container">
                    <div className="hologram-base cyan"></div>
                    <div className="hologram-projection cyan">
                      <Code className="h-16 w-16 text-cyan-500 hologram-icon" />
                    </div>
                    <div className="hologram-rings cyan">
                      <div className="hologram-ring"></div>
                      <div className="hologram-ring" style={{ animationDelay: '0.5s' }}></div>
                      <div className="hologram-ring" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
                <div className="md:pl-16 pt-16 order-1 md:order-2">
                  <div className="neon-card from-cyan-900/40 to-cyan-700/10 border-cyan-500/30">
                    <div className="neon-card-glow bg-cyan-500/20"></div>
                    <div className="relative z-10">
                      <div className="tech-badge bg-cyan-900 text-cyan-300 mb-4">
                        <span className="text-xs mr-2">02</span>
                        EXPANSION
                      </div>
                      <h3 className="text-3xl font-bold mb-4 cyber-gradient-text from-cyan-400 to-blue-400">Quantum Acceleration</h3>
                      <p className="text-gray-300 leading-relaxed mb-6 tech-text">
                        Our systems evolved exponentially, integrating advanced machine learning algorithms with human creative intelligence. This fusion catalyzed a new paradigm in digital strategy deployment and optimization.
                      </p>
                      <div className="tech-specs">
                        <div className="tech-spec-item">
                          <span className="tech-spec-label">TIMESTAMP</span>
                          <span className="tech-spec-value text-cyan-400">2021.07.22</span>
                        </div>
                        <div className="tech-spec-item">
                          <span className="tech-spec-label">PROTOCOL</span>
                          <span className="tech-spec-value text-cyan-400">BETA-X7</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Node 3 */}
            <div className="relative">
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="hexagon-container">
                  <div className="hexagon bg-black border-2 border-gradient flex items-center justify-center">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <div className="hexagon-pulse gradient"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:text-right md:pr-16 pt-16">
                  <div className="neon-card from-purple-900/30 via-pink-900/20 to-cyan-900/30 border-white/20">
                    <div className="neon-card-glow bg-gradient-to-r from-purple-500/20 to-cyan-500/20"></div>
                    <div className="relative z-10">
                      <div className="tech-badge bg-gradient-to-r from-purple-900 to-cyan-900 text-white mb-4">
                        <span className="text-xs mr-2">03</span>
                        SINGULARITY
                      </div>
                      <h3 className="text-3xl font-bold mb-4 cyber-gradient-text from-purple-400 via-pink-400 to-cyan-400">Synthetic Horizon</h3>
                      <p className="text-gray-300 leading-relaxed mb-6 tech-text">
                        Now at the convergence point of multiple technological frontiers, we're engineering solutions that anticipate market shifts before they occur. Our neural networks continuously evolve, learning and adapting in real-time.
                      </p>
                      <div className="tech-specs">
                        <div className="tech-spec-item">
                          <span className="tech-spec-label">TIMESTAMP</span>
                          <span className="tech-spec-value text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">2023.11.30</span>
                        </div>
                        <div className="tech-spec-item">
                          <span className="tech-spec-label">PROTOCOL</span>
                          <span className="tech-spec-value text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">OMEGA-∞</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="hologram-container">
                    <div className="hologram-base gradient"></div>
                    <div className="hologram-projection gradient">
                      <Star className="h-16 w-16 text-white hologram-icon" />
                    </div>
                    <div className="hologram-rings gradient">
                      <div className="hologram-ring"></div>
                      <div className="hologram-ring" style={{ animationDelay: '0.5s' }}></div>
                      <div className="hologram-ring" style={{ animationDelay: '1s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Digital circuit footer */}
        <div className="relative">
          <div className="circuit-board">
            <div className="circuit-line"></div>
            <div className="circuit-line"></div>
            <div className="circuit-line"></div>
            <div className="circuit-node"></div>
            <div className="circuit-node"></div>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-500 cyber-small-text">
              <span className="text-purple-500">{'</'}</span> HISTORICAL.DATA.TRANSMISSION.COMPLETE <span className="text-cyan-500">{'>'}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

