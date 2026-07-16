import React from 'react';
import { Zap } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
          
          @keyframes pulse-glow {
            0%, 100% {
              text-shadow: 0 0 8px rgba(138, 43, 226, 0.3), 0 0 12px rgba(0, 255, 255, 0.2);
            }
            50% {
              text-shadow: 0 0 12px rgba(138, 43, 226, 0.5), 0 0 18px rgba(0, 255, 255, 0.3);
            }
          }
          
          .logo-text {
            animation: pulse-glow 3s infinite;
            letter-spacing: 0.5px;
          }
          
          .logo-icon {
            filter: drop-shadow(0 0 8px rgba(138, 43, 226, 0.5));
            transition: all 0.3s ease;
          }
          
          .logo-container:hover .logo-icon {
            transform: rotate(15deg) scale(1.1);
            filter: drop-shadow(0 0 12px rgba(138, 43, 226, 0.7));
          }
        `}
      </style>
      <div className="logo-container flex items-center gap-1">
        <Zap className="h-6 w-6 text-purple-400 logo-icon" />
        <span 
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-fuchsia-400 to-cyan-500 bg-clip-text text-transparent logo-text" 
          style={{ fontFamily: 'Audiowide, sans-serif' }}
        >
          Revera Forte
        </span>
      </div>
    </div>
  );
}