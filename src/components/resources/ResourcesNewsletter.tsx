import React, { useState } from 'react';
import { Mail, Bell, Shield, ArrowRight, Check } from 'lucide-react';

export default function ResourcesNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail('');
    }, 1500);
  };
  
  return (
    <section className="py-20 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Newsletter card */}
          <div className="relative rounded-2xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800">
            {/* Glowing border effect */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl"></div>
            </div>
            
            {/* Content */}
            <div className="relative p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 mb-6">
                  <Mail className="h-8 w-8 text-blue-400" />
                </div>
                
                <h2 className="text-3xl font-bold mb-4">Stay Updated on Cybersecurity</h2>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  Subscribe to our newsletter to receive the latest cybersecurity insights, threat intelligence, and resources directly to your inbox.
                </p>
              </div>
              
              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/50 border border-blue-700/30">
                      <Bell className="h-4 w-4 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Threat Alerts</h3>
                    <p className="text-gray-400 text-sm">Receive timely alerts about emerging threats</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/50 border border-blue-700/30">
                      <Shield className="h-4 w-4 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Security Tips</h3>
                    <p className="text-gray-400 text-sm">Expert security advice and best practices</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-900/50 border border-blue-700/30">
                      <ArrowRight className="h-4 w-4 text-blue-400" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Resource Access</h3>
                    <p className="text-gray-400 text-sm">Early access to new security resources</p>
                  </div>
                </div>
              </div>
              
              {/* Subscription form */}
              {!subscribed ? (
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-grow px-4 py-3 bg-gray-800/70 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className={`px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 flex items-center justify-center ${
                        loading ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {loading ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </span>
                      ) : (
                        <span>Subscribe</span>
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-3 text-center">
                    We respect your privacy. You can unsubscribe at any time.
                  </p>
                </form>
              ) : (
                <div className="text-center p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 max-w-lg mx-auto">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-600/20 border border-green-500/30 mb-4">
                    <Check className="h-6 w-6 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Successfully Subscribed!</h3>
                  <p className="text-gray-300">
                    Thank you for subscribing to our cybersecurity newsletter. You'll start receiving updates soon.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}