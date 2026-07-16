import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceSectionProps {
  icon: LucideIcon;
  title: string;
  items: string[];
}

export default function ServiceSection({ icon: Icon, title, items }: ServiceSectionProps) {
  return (
    <div className="group bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="h-6 w-6 text-purple-500 group-hover:text-cyan-400 transition-colors duration-300" />
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li 
            key={index}
            className="text-gray-400 flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500 group-hover:bg-cyan-400 transition-colors duration-300" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}