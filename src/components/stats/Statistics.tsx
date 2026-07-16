import React, { useEffect, useRef, useState } from 'react';
import { Building2, Users, Globe2, Award } from 'lucide-react';
import StatCard from './StatCard';
import { createMeshGradient } from '../../utils/meshGradient';

export default function Statistics() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Create mesh gradient background
  useEffect(() => {
    if (!canvasRef.current) return;
    const cleanup = createMeshGradient(canvasRef.current);
    return () => cleanup();
  }, []);

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Statistics data
  const stats = [
    { icon: Building2, value: "50+", label: "Customers Served" },
    { icon: Users, value: "40+", label: "Team Members" },
    { icon: Globe2, value: "25+", label: "Technology Expertise" },
    { icon: Award, value: "65+", label: "Projects Delivered" }
  ];

  return (
    <div ref={sectionRef} className="relative py-16 border-t border-white/10">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-gray-400">Delivering results that speak for themselves</p>
        </div>

        {/* Grid for Stat Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex w-full">
              <StatCard
                isVisible={isVisible}
                {...stat}
                className="flex flex-col justify-between flex-grow w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}