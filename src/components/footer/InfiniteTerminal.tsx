import React, { useState, useEffect, useRef } from 'react';
import { Terminal } from 'lucide-react';

export default function InfiniteTerminal() {
  const [logs, setLogs] = useState<string[]>([
    'ANALYTICS ENGINE ACTIVE...',
    'MONITORING TRAFFIC...',
    'OPTIMIZING ROI...',
    'SCANNING NETWORK...',
    'PROCESSING DATA...',
    'GENERATING INSIGHTS...',
    'DETECTING PATTERNS...',
    'CALCULATING METRICS...',
    'UPDATING DASHBOARD...',
    'SECURING CONNECTION...'
  ]);
  
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [command, setCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Add a new log entry every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (visibleLogs.length < 5) {
        setVisibleLogs(prev => [...prev, logs[currentIndex]]);
        setCurrentIndex(prev => (prev + 1) % logs.length);
      } else {
        setVisibleLogs(prev => [...prev.slice(1), logs[currentIndex]]);
        setCurrentIndex(prev => (prev + 1) % logs.length);
      }
    }, 2000);
    
    return () => clearInterval(interval);
  }, [currentIndex, logs, visibleLogs]);
  
  // Handle command submission
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!command.trim()) return;
    
    // Add command to history
    setCommandHistory(prev => [...prev, command]);
    
    // Simulate response based on command
    let response = '';
    const cmd = command.toLowerCase();
    
    if (cmd === 'help') {
      response = 'Available commands: status, version, help, clear';
    } else if (cmd === 'status' || cmd.includes('--status')) {
      response = 'All systems operational. Performance metrics: 98.7% efficiency';
    } else if (cmd === 'version') {
      response = 'reveraforte v2.4.1 (build 20240601)';
    } else if (cmd === 'clear') {
      setVisibleLogs([]);
      setCommandHistory([]);
      setCommand('');
      return;
    } else {
      response = `Command not recognized: ${command}`;
    }
    
    // Add response to logs
    setVisibleLogs(prev => [...prev.slice(-4), response]);
    
    // Clear input
    setCommand('');
  };
  
  // Focus input when terminal is clicked
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  
  return (
    <div className="relative">
      {/* Section header */}
      <div className="mb-4 relative">
        <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-gray-400 to-gray-600 rounded-full"></div>
        <h3 className="text-lg font-semibold relative inline-flex items-center">
          <span className="relative z-10 text-white">
            Terminal
          </span>
          <div className="ml-2 w-2 h-2 rounded-full bg-green-500 opacity-70 animate-pulse"></div>
        </h3>
        <div className="mt-2 h-[1px] w-full bg-gradient-to-r from-gray-500/50 via-gray-600/20 to-transparent"></div>
      </div>
      
      {/* Terminal window */}
      <div 
        ref={terminalRef}
        onClick={focusInput}
        className="relative h-[180px] rounded-lg border border-gray-700 bg-gray-900/90 backdrop-blur-sm overflow-hidden font-mono text-xs md:text-sm cursor-text"
      >
        {/* Terminal header */}
        <div className="flex items-center px-3 py-1.5 bg-gray-800 border-b border-gray-700">
          <div className="flex space-x-1.5 mr-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/70"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/70"></div>
          </div>
          <div className="flex items-center space-x-2">
            <Terminal className="h-3.5 w-3.5 text-gray-400" />
            <span className="text-xs text-gray-400">reveraforte-terminal</span>
          </div>
        </div>
        
        {/* Terminal content */}
        <div className="p-3 h-[calc(100%-32px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {/* System logs */}
          <div className="space-y-1 mb-2">
            {visibleLogs.map((log, index) => (
              <div key={index} className="flex">
                <span className="text-green-500 mr-2">&gt;</span>
                <span className="text-gray-300">{log}</span>
              </div>
            ))}
          </div>
          
          {/* Command history */}
          {commandHistory.map((cmd, index) => (
            <div key={`cmd-${index}`} className="flex">
              <span className="text-cyan-500 mr-2">$</span>
              <span className="text-white">{cmd}</span>
            </div>
          ))}
          
          {/* Command input */}
          <form onSubmit={handleCommandSubmit} className="flex items-center mt-1">
            <span className="text-cyan-500 mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-white caret-white"
              placeholder="Type a command..."
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
            />
          </form>
          
          {/* Blinking cursor */}
          {isTyping ? null : (
            <div className="inline-block w-2 h-4 bg-white ml-1 animate-blink"></div>
          )}
        </div>
        
        {/* Scan line effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-[1px] bg-gray-500/10 animate-scan-fast"></div>
        </div>
        
        {/* Terminal overlay effect */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-gray-900/20"></div>
        <div className="absolute inset-0 pointer-events-none" style={{ 
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)',
          backgroundSize: '100% 2px',
          opacity: 0.2
        }}></div>
      </div>
      
      {/* Terminal hint */}
      <p className="text-xs text-gray-500 mt-2">
        Try commands: <span className="text-gray-400 hidden sm:inline">reveraforte --status</span><span className="text-gray-400 sm:hidden">status</span>, <span className="text-gray-400">help</span>, <span className="text-gray-400">version</span>
      </p>
      
      {/* Subtle decorative elements */}
      <div className="absolute -top-2 -right-2 w-16 h-16 bg-green-900/10 rounded-full blur-xl"></div>
      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-900/10 rounded-full blur-xl"></div>
      
      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes scan-fast {
          0% { transform: translateY(-180px); }
          100% { transform: translateY(180px); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        /* Custom scrollbar styles */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thumb-gray-700::-webkit-scrollbar-thumb {
          background-color: #374151;
          border-radius: 2px;
        }
        
        .scrollbar-track-gray-900::-webkit-scrollbar-track {
          background-color: #111827;
        }
      `}</style>
    </div>
  );
}