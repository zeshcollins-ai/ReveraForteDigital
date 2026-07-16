import React from 'react';
import { ArrowRight, CheckCircle, ChevronRight, Home, Share2, BarChart2, Users, MessageCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationButton from '../../components/ConsultationButton';

export default function SocialMediaManagement() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full filter blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[100px] animate-pulse-slow-delay" />
          
          {/* Subtle radial gradient overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/0 via-gray-900/20 to-transparent opacity-60" />
          
          {/* Futuristic grid pattern */}
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-[size:50px_50px] opacity-[0.02]" />
          
          {/* Subtle moving light effect */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent animate-shimmer"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-shimmer-delay"></div>
        </div>

        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-purple-400 transition-colors">
                  <Home className="h-4 w-4" />
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li>
                <Link to="/#services" className="hover:text-purple-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight className="h-4 w-4" />
              </li>
              <li className="text-purple-400">
                Social Media Management
              </li>
            </ol>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="md:max-w-2xl">
              {/* Floating badge with glow effect */}
              <div className="inline-block mb-6 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-cyan-500/30 blur-xl opacity-50 animate-pulse-slow"></div>
                <span className="relative inline-flex items-center px-5 py-2 rounded-full bg-gradient-to-r from-purple-900/80 to-gray-900/80 text-sm font-medium text-purple-200 backdrop-blur-md border border-purple-500/20 shadow-lg">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-ping-slow"></span>
                  Social Engagement
                </span>
              </div>
              
              {/* Headline with enhanced gradient and subtle animation */}
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-cyan-100 tracking-tight leading-tight">
                Social Media <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  That Connects
                </span>
              </h1>
              
              {/* Improved subheading with better typography */}
              <p className="text-gray-300 text-xl leading-relaxed font-light mb-8 md:mb-10">
                Strategic social media management that builds authentic connections, drives engagement, and delivers measurable results.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <ConsultationButton />
                
                <Link to="/contact" className="group inline-flex items-center justify-center px-6 py-3 border border-purple-500/20 rounded-full text-purple-300 hover:text-white transition-colors duration-300 hover:border-purple-500/40">
                  <span>View Case Studies</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block relative mt-10 md:mt-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/30 to-cyan-500/30 blur-xl opacity-50 animate-pulse-slow"></div>
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_25px_rgba(139,92,246,0.15)]">
                <img 
                  src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=800" 
                  alt="Social Media Management" 
                  className="w-full h-auto object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full filter blur-[100px] animate-pulse-slow" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full filter blur-[100px] animate-pulse-slow-delay" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                Comprehensive Social Media Management
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                In today's digital landscape, a strong social media presence is essential for building brand awareness, engaging with your audience, and driving business growth. Our social media management services are designed to help you navigate the complex social landscape and create meaningful connections with your target audience.
              </p>
              
              <p className="text-gray-300 mb-10 leading-relaxed">
                We combine strategic planning, creative content creation, and data-driven optimization to develop and execute social media campaigns that align with your business objectives. Our holistic approach ensures that your social media efforts contribute to your overall marketing strategy and deliver measurable results.
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Service 1 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Share2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Social Media Strategy</h3>
                  <p className="text-gray-400 mb-4">Customized strategies aligned with your business goals and target audience.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Platform selection & optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Audience analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Content calendar planning</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Competitive analysis</span>
                    </li>
                  </ul>
                </div>

                {/* Service 2 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Content Creation</h3>
                  <p className="text-gray-400 mb-4">Engaging, on-brand content that resonates with your target audience.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Graphic design & visual content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Copywriting & caption creation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Video production</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">User-generated content curation</span>
                    </li>
                  </ul>
                </div>

                {/* Service 3 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Community Management</h3>
                  <p className="text-gray-400 mb-4">Building and nurturing an engaged community around your brand.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Comment & message management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Audience engagement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Social listening</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Crisis management</span>
                    </li>
                  </ul>
                </div>

                {/* Service 4 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Analytics & Reporting</h3>
                  <p className="text-gray-400 mb-4">Data-driven insights to optimize your social media performance.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Performance tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Audience insights</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Competitor analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">ROI measurement</span>
                    </li>
                  </ul>
                </div>

                {/* Service 5 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Influencer Partnerships</h3>
                  <p className="text-gray-400 mb-4">Strategic collaborations with relevant influencers to expand your reach.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Influencer identification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Partnership negotiation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Campaign management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Performance tracking</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Platforms Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  Platforms We Manage
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <svg className="h-8 w-8 mx-auto mb-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <div className="text-purple-400 font-semibold">Facebook</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <svg className="h-8 w-8 mx-auto mb-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    <div className="text-purple-400 font-semibold">Instagram</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <svg className="h-8 w-8 mx-auto mb-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    <div className="text-purple-400 font-semibold">Twitter</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <svg className="h-8 w-8 mx-auto mb-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <div className="text-purple-400 font-semibold">LinkedIn</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <svg className="h-8 w-8 mx-auto mb-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                    </svg>
                    <div className="text-purple-400 font-semibold">Pinterest</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <svg className="h-8 w-8 mx-auto mb-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 8.52c.074 1.623-.455 3.152-1.493 4.35-1.037 1.198-2.486 1.964-4.096 2.172-1.609.207-3.219-.215-4.552-1.199-1.333-.984-2.203-2.441-2.46-4.119-.257-1.677.096-3.385.998-4.822.902-1.437 2.292-2.504 3.926-3.01 1.633-.507 3.39-.391 4.943.326 1.553.717 2.798 2.01 3.513 3.647.716 1.637.891 3.478.494 5.224-.397 1.746-1.403 3.276-2.84 4.32-.18.13-.43.12-.6-.03-.17-.14-.2-.39-.08-.58.7-1.03 1.14-2.19 1.3-3.4.16-1.21.05-2.44-.33-3.6-.38-1.16-.99-2.21-1.79-3.08-.8-.87-1.77-1.53-2.84-1.94-1.07-.41-2.21-.56-3.34-.44-1.13.12-2.21.5-3.17 1.1-.96.6-1.78 1.42-2.38 2.38-.6.96-.98 2.04-1.1 3.17-.12 1.13.03 2.27.44 3.34.41 1.07 1.07 2.04 1.94 2.84.87.8 1.92 1.41 3.08 1.79 1.16.38 2.39.49 3.6.33 1.21-.16 2.37-.6 3.4-1.3.18-.13.43-.1.58.07.15.17.15.43-.01.59-1.78 1.63-4.17 2.44-6.59 2.25-2.42-.19-4.63-1.39-6.15-3.34-1.53-1.94-2.13-4.43-1.68-6.83.45-2.4 1.86-4.5 3.91-5.85 2.05-1.35 4.58-1.82 7-.13 2.42 1.69 3.75 4.51 3.58 7.41z" />
                    </svg>
                    <div className="text-purple-400 font-semibold">TikTok</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <svg className="h-8 w-8 mx-auto mb-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    <div className="text-purple-400 font-semibold">YouTube</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <svg className="h-8 w-8 mx-auto mb-2 text-purple-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.53.02C13.84 0 15.14.01 16.44.02c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                    <div className="text-purple-400 font-semibold">TikTok</div>
                  </div>
                </div>
              </div>

              {/* Our Approach Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  Our Social Media Approach
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Discovery & Analysis</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We begin by understanding your business, goals, target audience, and competitive landscape. Our team conducts thorough research to identify opportunities and challenges in your social media presence.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Strategy Development</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Based on our findings, we create a customized social media strategy that aligns with your business objectives. This includes platform selection, content themes, posting frequency, and KPI definition.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Content Creation & Curation</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our creative team develops engaging, on-brand content that resonates with your target audience. We create a balanced mix of original content, curated content, and user-generated content to maintain a consistent and engaging social media presence.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Community Management</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We actively engage with your audience by responding to comments, messages, and mentions. Our community managers foster meaningful conversations and build relationships with your followers to create a loyal community around your brand.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Analytics & Optimization</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We continuously monitor your social media performance, making data-driven adjustments to optimize results. Our analytics team tracks key metrics and provides insights to refine your strategy and improve ROI.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">6</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Reporting & Strategy Refinement</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We provide comprehensive reports that showcase the impact of our efforts on your business goals. These insights inform future strategy refinements and ensure continuous improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50 rounded-xl p-6 mb-8 sticky top-24">
                <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  Why Choose Us
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Platform Expertise</h4>
                      <p className="text-gray-400 text-sm">Our specialists are experts in each social media platform's unique features and algorithms.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Creative Excellence</h4>
                      <p className="text-gray-400 text-sm">Our content creators produce engaging, on-brand content that stands out in crowded feeds.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Data-Driven Approach</h4>
                      <p className="text-gray-400 text-sm">We make decisions based on analytics and performance data, not assumptions.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Authentic Engagement</h4>
                      <p className="text-gray-400 text-sm">We focus on building genuine connections with your audience, not just vanity metrics.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Responsive Communication</h4>
                      <p className="text-gray-400 text-sm">Our team is always available to address your questions and concerns.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Results-Focused</h4>
                      <p className="text-gray-400 text-sm">We're committed to delivering measurable results that impact your bottom line.</p>
                    </div>
                  </li>
                </ul>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="text-purple-400 text-2xl font-bold">3.5x</div>
                    <div className="text-gray-400 text-sm">Avg. Engagement Rate</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="text-purple-400 text-2xl font-bold">20%</div>
                    <div className="text-gray-400 text-sm">Lower CPA</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  <ConsultationButton fullWidth={true} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full filter blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[100px] animate-pulse-slow-delay" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Social Media Success Stories
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how our social media management services have transformed businesses and driven measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                  alt="E-commerce Social Media Case Study" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 mb-4">
                  E-commerce
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white">250% Increase in Social Engagement</h3>
                <p className="text-gray-400 mb-4">
                  How we helped an online fashion retailer increase engagement, followers, and sales through strategic social media management.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Results in 3 months</div>
                  <Link to="/case-studies" className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium">
                    <span>Read Case Study</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="SaaS Social Media Case Study" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 mb-4">
                  SaaS
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white">40% Reduction in Customer Acquisition Cost</h3>
                <p className="text-gray-400 mb-4">
                  How our social media strategy helped a SaaS company reduce CAC and increase trial sign-ups through targeted content.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Results in 6 months</div>
                  <Link to="/case-studies" className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium">
                    <span>Read Case Study</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" 
                  alt="Restaurant Social Media Case Study" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 mb-4">
                  Restaurant
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white">300% Growth in Local Followers</h3>
                <p className="text-gray-400 mb-4">
                  How we helped a restaurant chain build a loyal local following and increase foot traffic through community-focused content.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Results in 4 months</div>
                  <Link to="/case-studies" className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium">
                    <span>Read Case Study</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900/0 to-transparent opacity-80" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-[0_0_25px_rgba(139,92,246,0.15)]">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-cyan-100">
                Ready to Transform Your Social Media Presence?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our social media management services can help you build authentic connections with your audience and drive business growth. Schedule a free consultation with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <ConsultationButton />
                
                <Link to="/contact" className="group inline-flex items-center justify-center px-6 py-3 border border-purple-500/20 rounded-full text-purple-300 hover:text-white transition-colors duration-300 hover:border-purple-500/40">
                  <span>Contact Us</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom animations */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes pulse-slow-delay {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer-delay {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 6s cubic-bezier(0.4, 0, 0.6, 1) infinite 3s;
        }
        .animate-shimmer {
          animation: shimmer 8s infinite;
        }
        .animate-shimmer-delay {
          animation: shimmer 8s infinite 4s;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}