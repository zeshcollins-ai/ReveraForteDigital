import React from 'react';
import { ArrowRight, CheckCircle, ChevronRight, Home, Users, Database, List, PieChart, Eraser, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationButton from '../../components/ConsultationButton';

export default function B2BOutreach() {
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
                B2B Outreach
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
                  Data Solutions
                </span>
              </div>
              
              {/* Headline with enhanced gradient and subtle animation */}
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-cyan-100 tracking-tight leading-tight">
                B2B Outreach <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  That Delivers Results
                </span>
              </h1>
              
              {/* Improved subheading with better typography */}
              <p className="text-gray-300 text-xl leading-relaxed font-light mb-8 md:mb-10">
                Targeted B2B database solutions and lead generation strategies to connect with your ideal customers and drive business growth.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <ConsultationButton />
                
                <Link to="/contact" className="group inline-flex items-center justify-center px-6 py-3 border border-purple-500/20 rounded-full text-purple-300 hover:text-white transition-colors duration-300 hover:border-purple-500/40">
                  <span>Request Sample Data</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block relative mt-10 md:mt-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/30 to-cyan-500/30 blur-xl opacity-50 animate-pulse-slow"></div>
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_25px_rgba(139,92,246,0.15)]">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                  alt="B2B Database" 
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
                Comprehensive B2B Database Solutions
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                In today's competitive B2B landscape, connecting with the right decision-makers at the right companies is essential for business growth. Our B2B outreach services provide you with high-quality, verified data and strategic outreach approaches to help you build meaningful business relationships.
              </p>
              
              <p className="text-gray-300 mb-10 leading-relaxed">
                We combine advanced data collection methods, rigorous verification processes, and industry expertise to deliver targeted B2B databases that enable precise outreach campaigns. Our solutions are designed to help you identify and connect with potential clients who are most likely to benefit from your products or services.
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Service 1 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Lead Generation</h3>
                  <p className="text-gray-400 mb-4">Sourcing high-quality, verified leads tailored to your target market.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Industry-specific targeting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Decision-maker identification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Contact verification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Customized lead profiles</span>
                    </li>
                  </ul>
                </div>

                {/* Service 2 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Data Enrichment</h3>
                  <p className="text-gray-400 mb-4">Enhancing existing datasets with valuable business information.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Company firmographics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Contact details</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Technographic data</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Intent signals</span>
                    </li>
                  </ul>
                </div>

                {/* Service 3 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <List className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Contact List Building</h3>
                  <p className="text-gray-400 mb-4">Creating segmented and targeted contact lists for precise outreach.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Role-based segmentation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Industry classification</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Company size filtering</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Geographic targeting</span>
                    </li>
                  </ul>
                </div>

                {/* Service 4 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <PieChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Market Segmentation Analysis</h3>
                  <p className="text-gray-400 mb-4">Detailed customer segmentation for targeted marketing strategies.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Behavioral analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Demographic profiling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Buying pattern recognition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Competitive positioning</span>
                    </li>
                  </ul>
                </div>

                {/* Service 5 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Eraser className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Database Cleansing</h3>
                  <p className="text-gray-400 mb-4">Removing duplicates and outdated information for improved accuracy.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Duplicate removal</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Data validation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Information updating</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Format standardization</span>
                    </li>
                  </ul>
                </div>

                {/* Service 6 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <LinkIcon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">CRM Integration</h3>
                  <p className="text-gray-400 mb-4">Syncing databases with popular CRM tools for seamless workflows.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Salesforce integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">HubSpot connectivity</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Microsoft Dynamics sync</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Custom API development</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Quality Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  Our Data Quality Promise
                </h2>
                
                <div className="bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-purple-400 text-4xl font-bold mb-2">98%</div>
                      <div className="text-gray-300">Data Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 text-4xl font-bold mb-2">99.5%</div>
                      <div className="text-gray-300">Email Deliverability</div>
                    </div>
                    <div className="text-center">
                      <div className="text-purple-400 text-4xl font-bold mb-2">95%</div>
                      <div className="text-gray-300">Phone Connectivity</div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We understand that the quality of your B2B database directly impacts the success of your outreach efforts. That's why we've implemented a rigorous multi-step verification process to ensure that you receive only the most accurate and up-to-date information.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Initial Data Collection</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We gather information from multiple reliable sources, including business registries, company websites, professional networks, and industry databases.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Automated Verification</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our proprietary algorithms check for data consistency, format standardization, and remove duplicates and obvious errors.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Human Verification</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our team of data specialists manually reviews the information to catch nuances that automated systems might miss, ensuring the highest level of accuracy.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Regular Updates</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We continuously update our databases to reflect changes in company information, contact details, and industry developments.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Compliance Checks</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We ensure that all data collection and processing complies with relevant regulations, including GDPR, CCPA, and other privacy laws.
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
                  Why Choose Our B2B Database
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Precision Targeting</h4>
                      <p className="text-gray-400 text-sm">Our databases are highly segmented for precise audience targeting.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Verified Contacts</h4>
                      <p className="text-gray-400 text-sm">All contact information is rigorously verified for accuracy.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Comprehensive Data</h4>
                      <p className="text-gray-400 text-sm">Rich profiles with firmographics, technographics, and intent signals.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Compliance Focused</h4>
                      <p className="text-gray-400 text-sm">All data is collected and processed in compliance with privacy regulations.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Regular Updates</h4>
                      <p className="text-gray-400 text-sm">Continuous updates ensure you always have the most current information.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Seamless Integration</h4>
                      <p className="text-gray-400 text-sm">Easy integration with your existing CRM and marketing tools.</p>
                    </div>
                  </li>
                </ul>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="text-purple-400 text-2xl font-bold">45%</div>
                    <div className="text-gray-400 text-sm">Avg. Conversion Rate</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="text-purple-400 text-2xl font-bold">3x</div>
                    <div className="text-gray-400 text-sm">Sales Pipeline Growth</div>
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

      {/* Industries Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full filter blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[100px] animate-pulse-slow-delay" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Industries We Serve
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our B2B database solutions are tailored to meet the specific needs of various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Industry 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
              <div className="h-16 w-16 rounded-full bg-purple-900/30 border border-purple-500/20 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Technology & SaaS</h3>
              <p className="text-gray-400 mb-4">
                Connect with IT decision-makers, CTOs, and technology purchasers at companies looking for innovative solutions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Software companies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">IT service providers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Cloud services</span>
                </li>
              </ul>
            </div>

            {/* Industry 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
              <div className="h-16 w-16 rounded-full bg-purple-900/30 border border-purple-500/20 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Financial Services</h3>
              <p className="text-gray-400 mb-4">
                Reach financial decision-makers, CFOs, and finance professionals seeking innovative financial solutions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Banking institutions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Investment firms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Insurance companies</span>
                </li>
              </ul>
            </div>

            {/* Industry 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300">
              <div className="h-16 w-16 rounded-full bg-purple-900/30 border border-purple-500/20 flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Healthcare & Life Sciences</h3>
              <p className="text-gray-400 mb-4">
                Connect with healthcare administrators, medical directors, and procurement specialists in the healthcare sector.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Hospitals & clinics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Pharmaceutical companies</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">Medical device manufacturers</span>
                </li>
              </ul>
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
                Ready to Supercharge Your B2B Outreach?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our B2B database solutions can help you connect with the right decision-makers and grow your business. Schedule a free consultation with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <ConsultationButton />
                
                <Link to="/contact" className="group inline-flex items-center justify-center px-6 py-3 border border-purple-500/20 rounded-full text-purple-300 hover:text-white transition-colors duration-300 hover:border-purple-500/40">
                  <span>Request Sample Data</span>
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