import React from 'react';
import { ArrowRight, CheckCircle, ChevronRight, Home, Search, BarChart2, Settings, FileText, Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationButton from '../../components/ConsultationButton';

export default function SeoServices() {
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
          <div className="absolute top-1/2 left-1/2 traninfoorm -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/0 via-gray-900/20 to-transparent opacity-60" />
          
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
                SEO Services
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
                  Search Optimization
                </span>
              </div>
              
              {/* Headline with enhanced gradient and subtle animation */}
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-cyan-100 tracking-tight leading-tight">
                SEO Services <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  That Drive Visibility
                </span>
              </h1>
              
              {/* Improved subheading with better typography */}
              <p className="text-gray-300 text-xl leading-relaxed font-light mb-8 md:mb-10">
                Boost your organic search rankings with data-driven SEO strategies that increase traffic, engagement, and conversions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <ConsultationButton />
                
                <Link to="/contact" className="group inline-flex items-center justify-center px-6 py-3 border border-purple-500/20 rounded-full text-purple-300 hover:text-white transition-colors duration-300 hover:border-purple-500/40">
                  <span>View Case Studies</span>
                  <ArrowRight className="ml-2 h-4 w-4 traninfoorm transition-traninfoorm duration-500 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block relative mt-10 md:mt-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/30 to-cyan-500/30 blur-xl opacity-50 animate-pulse-slow"></div>
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_25px_rgba(139,92,246,0.15)]">
                <img 
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800" 
                  alt="SEO Strategy" 
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
                Comprehensive SEO Solutions
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                In today's competitive digital landscape, ranking high in search engine results is essential for business growth. Our SEO services are designed to improve your website's visibility, drive targeted traffic, and increase conversions through sustainable, white-hat techniques.
              </p>
              
              <p className="text-gray-300 mb-10 leading-relaxed">
                We combine technical expertise with content strategy and off-page optimization to create a holistic SEO approach that delivers long-term results. Our data-driven methodology ensures that every decision is backed by analytics and performance metrics.
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Service 1 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Search className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Technical SEO</h3>
                  <p className="text-gray-400 mb-4">Optimize your website's infrastructure to improve crawlability, indexation, and performance.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Site architecture analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Page speed optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Mobile-friendly testing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Schema markup implementation</span>
                    </li>
                  </ul>
                </div>

                {/* Service 2 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">On-Page SEO</h3>
                  <p className="text-gray-400 mb-4">Optimize individual pages to improve relevance and rankings for targeted keywords.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Keyword research & mapping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Content optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Meta tag enhancement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Internal linking strategy</span>
                    </li>
                  </ul>
                </div>

                {/* Service 3 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Link2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Off-Page SEO</h3>
                  <p className="text-gray-400 mb-4">Build your site's authority through high-quality backlinks and brand mentions.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Link building campaigns</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Digital PR strategies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Brand mention monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Competitor backlink analysis</span>
                    </li>
                  </ul>
                </div>

                {/* Service 4 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <BarChart2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">SEO Analytics & Reporting</h3>
                  <p className="text-gray-400 mb-4">Track performance and gain insights to continuously improve your SEO strategy.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Ranking position tracking</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Traffic analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Conversion tracking</span>
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
                    <Settings className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">SEO Automation</h3>
                  <p className="text-gray-400 mb-4">Leverage cutting-edge tools to streamline and enhance your SEO efforts.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Automated keyword research</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">SEO monitoring & alerts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Content optimization tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Technical SEO automation</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Our Approach Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  Our SEO Approach
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Comprehensive SEO Audit</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We begin with a thorough analysis of your website's current SEO performance, identifying strengths, weaknesses, and opportunities for improvement. This includes technical assessment, content evaluation, and competitive analysis.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Strategic Planning</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Based on our findings, we develop a customized SEO strategy that aligns with your business goals. This includes keyword targeting, content planning, technical improvements, and link building priorities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">On-Site Optimization</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We implement technical improvements to enhance your site's crawlability and user experience. This includes optimizing site structure, improving page speed, fixing crawl errors, and implementing schema markup.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Content Enhancement</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We optimize existing content and develop new content that targets valuable keywords while providing value to your audience. This includes meta tag optimization, content creation, and internal linking strategy.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Off-Page Optimization</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We build your site's authority through ethical link building strategies, digital PR, and brand mentions. Our approach focuses on quality over quantity to ensure sustainable results.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">6</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Monitoring & Refinement</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We continuously track your SEO performance, making data-driven adjustments to optimize results. Regular reporting keeps you informed of progress and ROI.
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
                  Why Choose Our SEO Services
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Data-Driven Strategy</h4>
                      <p className="text-gray-400 text-sm">Every recommendation is backed by analytics and performance data.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">White-Hat Techniques</h4>
                      <p className="text-gray-400 text-sm">We only use ethical, sustainable methods that comply with search engine guidelines.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Holistic Approach</h4>
                      <p className="text-gray-400 text-sm">We address all aspects of SEO for comprehensive optimization.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Transparent Reporting</h4>
                      <p className="text-gray-400 text-sm">Regular, detailed reports that demonstrate real business impact.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Industry Expertise</h4>
                      <p className="text-gray-400 text-sm">Our specialists stay current with algorithm updates and industry trends.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Results-Focused</h4>
                      <p className="text-gray-400 text-sm">We prioritize metrics that impact your bottom line, not just vanity metrics.</p>
                    </div>
                  </li>
                </ul>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="text-purple-400 text-2xl font-bold">230%</div>
                    <div className="text-gray-400 text-sm">Avg. Traffic Increase</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="text-purple-400 text-2xl font-bold">90%</div>
                    <div className="text-gray-400 text-sm">Client Retention</div>
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
              SEO Success Stories
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See how our SEO strategies have traninfoormed businesses and driven measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                  alt="E-commerce SEO Case Study" 
                  className="w-full h-full object-cover transition-traninfoorm duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 mb-4">
                  E-commerce
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white">320% Organic Traffic Growth</h3>
                <p className="text-gray-400 mb-4">
                  How we helped an online retailer increase organic traffic and boost revenue through technical SEO and content optimization.
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

            {/* Case Study 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="SaaS SEO Case Study" 
                  className="w-full h-full object-cover transition-traninfoorm duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 mb-4">
                  SaaS
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white">185% Increase in Qualified Leads</h3>
                <p className="text-gray-400 mb-4">
                  How our keyword strategy and content marketing approach helped a SaaS company generate more qualified leads.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Results in 9 months</div>
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
                  alt="Real Estate SEO Case Study" 
                  className="w-full h-full object-cover transition-traninfoorm duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 mb-4">
                  Real Estate
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white">Top 3 Rankings for 50+ Keywords</h3>
                <p className="text-gray-400 mb-4">
                  How we helped a real estate agency dominate local search results and increase property inquiries.
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
          <div className="absolute top-1/2 left-1/2 traninfoorm -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900/0 to-transparent opacity-80" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 border border-gray-700/50 shadow-[0_0_25px_rgba(139,92,246,0.15)]">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-cyan-100">
                Ready to Improve Your Search Rankings?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our SEO services can help you achieve better visibility, more traffic, and increased conversions. Schedule a free consultation with our SEO experts today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <ConsultationButton />
                
                <Link to="/contact" className="group inline-flex items-center justify-center px-6 py-3 border border-purple-500/20 rounded-full text-purple-300 hover:text-white transition-colors duration-300 hover:border-purple-500/40">
                  <span>Contact Us</span>
                  <ArrowRight className="ml-2 h-4 w-4 traninfoorm transition-traninfoorm duration-500 group-hover:translate-x-1" />
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
          0% { traninfoorm: translateX(-100%); }
          100% { traninfoorm: translateX(100%); }
        }
        @keyframes shimmer-delay {
          0% { traninfoorm: translateX(-100%); }
          100% { traninfoorm: translateX(100%); }
        }
        @keyframes ping-slow {
          0% { traninfoorm: scale(1); opacity: 1; }
          75%, 100% { traninfoorm: scale(1.5); opacity: 0; }
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