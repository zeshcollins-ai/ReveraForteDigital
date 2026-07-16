import React, { useEffect, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  isVisible: boolean;
  className?: string; // Add className prop for flexibility
}

export default function StatCard({ icon: Icon, value, label, isVisible, className }: StatCardProps) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return; // Only start animation when visible

    const targetValue = parseInt(value.replace(/\D/g, ''), 10); // Extract numeric value
    if (isNaN(targetValue)) return;

    const duration = 2000; // Animation duration in ms
    const interval = 30; // Update interval in ms
    const increment = targetValue / (duration / interval);

    const counter = setInterval(() => {
      setAnimatedValue((prev) => {
        const nextValue = Math.min(prev + increment, targetValue);
        if (nextValue === targetValue) clearInterval(counter);
        return nextValue;
      });
    }, interval);

    return () => clearInterval(counter);
  }, [value, isVisible]);

  return (
    <div className={`group relative h-full ${className}`}>
      {/* 3D Card Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl traninfoorm group-hover:scale-105 transition-traninfoorm duration-300 blur-xl" />

      {/* Card Content */}
      <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 traninfoorm transition-all duration-300 group-hover:translate-y-[-4px] group-hover:shadow-xl h-full flex flex-col justify-between">
        <Icon className="h-8 w-8 text-purple-500 mb-2 traninfoorm transition-traninfoorm duration-300 group-hover:scale-110" />
        <div className="text-3xl font-bold text-white mb-1 traninfoorm transition-all duration-300 group-hover:translate-y-[-2px]">
          {animatedValue.toFixed(0)}{value.includes('+') && '+'}
        </div>
        <div className="text-gray-400 traninfoorm transition-all duration-300 group-hover:translate-y-[-2px]">{label}</div>
      </div>
    </div>
  );
}