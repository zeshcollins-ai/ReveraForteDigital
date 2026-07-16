import React from 'react';
import { ArrowRight, CheckCircle, ChevronRight, Home, Code, Database, Shield, Cpu, GitBranch } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationButton from '../../components/ConsultationButton';

export default function SoftwareDevelopment() {
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
                Software Development
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
                  Enterprise Solutions
                </span>
              </div>
              
              {/* Headline with enhanced gradient and subtle animation */}
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-cyan-100 tracking-tight leading-tight">
                Software Development <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  That Traninfoorms
                </span>
              </h1>
              
              {/* Improved subheading with better typography */}
              <p className="text-gray-300 text-xl leading-relaxed font-light mb-8 md:mb-10">
                Custom software solutions designed to solve complex business challenges and drive innovation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <ConsultationButton />
                
                <Link to="/contact" className="group inline-flex items-center justify-center px-6 py-3 border border-purple-500/20 rounded-full text-purple-300 hover:text-white transition-colors duration-300 hover:border-purple-500/40">
                  <span>View Portfolio</span>
                  <ArrowRight className="ml-2 h-4 w-4 traninfoorm transition-traninfoorm duration-500 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block relative mt-10 md:mt-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/30 to-cyan-500/30 blur-xl opacity-50 animate-pulse-slow"></div>
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_25px_rgba(139,92,246,0.15)]">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
                  alt="Software Development" 
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
                Enterprise Software Solutions
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                In today's rapidly evolving digital landscape, custom software can be the difference between staying competitive and falling behind. Our software development services are designed to create tailored solutions that address your unique business challenges and unlock new opportunities for growth.
              </p>
              
              <p className="text-gray-300 mb-10 leading-relaxed">
                We combine technical expertise with deep industry knowledge to build robust, scalable, and secure software applications that streamline operations, enhance customer experiences, and drive innovation. Our development process is collaborative, transparent, and focused on delivering measurable business value.
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Service 1 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Code className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Custom Software Development</h3>
                  <p className="text-gray-400 mb-4">Tailored software solutions designed to address your specific business needs.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Enterprise Applications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Workflow Automation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Integration Solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Legacy System Modernization</span>
                    </li>
                  </ul>
                </div>

                {/* Service 2 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">AI & Machine Learning</h3>
                  <p className="text-gray-400 mb-4">Intelligent solutions that leverage data to drive insights and automation.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Predictive Analytics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Natural Language Processing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Computer Vision</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Recommendation Systems</span>
                    </li>
                  </ul>
                </div>

                {/* Service 3 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Database & Data Management</h3>
                  <p className="text-gray-400 mb-4">Robust data solutions for storage, processing, and analysis.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Database Design & Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Data Warehousing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">ETL Processes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Business Intelligence</span>
                    </li>
                  </ul>
                </div>

                {/* Service 4 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Security & Compliance</h3>
                  <p className="text-gray-400 mb-4">Secure software solutions that protect your data and meet regulatory requirements.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Security Architecture</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Compliance Solutions</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Identity & Access Management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Security Testing & Auditing</span>
                    </li>
                  </ul>
                </div>

                {/* Service 5 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <GitBranch className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">DevOps & CI/CD</h3>
                  <p className="text-gray-400 mb-4">Streamlined development and deployment processes for faster time-to-market.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">CI/CD Pipeline Setup</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Infrastructure as Code</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Containerization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Monitoring & Logging</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Technologies Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  Technologies We Use
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">Java</div>
                    <div className="text-gray-400 text-sm">Enterprise</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">Python</div>
                    <div className="text-gray-400 text-sm">AI/ML</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">.NET</div>
                    <div className="text-gray-400 text-sm">Enterprise</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">Node.js</div>
                    <div className="text-gray-400 text-sm">Microservices</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">AWS</div>
                    <div className="text-gray-400 text-sm">Cloud</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">Azure</div>
                    <div className="text-gray-400 text-sm">Cloud</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">Kubernetes</div>
                    <div className="text-gray-400 text-sm">Orchestration</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">TensorFlow</div>
                    <div className="text-gray-400 text-sm">AI/ML</div>
                  </div>
                </div>
              </div>

              {/* Our Approach Section */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                  Our Development Approach
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Discovery & Requirements Analysis</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We begin by deeply understanding your business objectives, challenges, and requirements. Our team conducts thorough research and stakeholder interviews to identify the core problems that need to be solved and define clear success criteria.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Architecture & Design</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our architects design a robust, scalable, and secure software architecture that aligns with your business needs. We create detailed technical specifications, data models, and system diagrams to guide the development process.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Agile Development</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We follow agile methodologies, breaking the project into manageable sprints with regular deliverables. This approach ensures transparency, flexibility, and continuous feedback throughout the development process.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Quality Assurance</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our comprehensive QA process includes automated testing, manual testing, security testing, and performance testing to ensure that your software meets the highest quality standards and performs reliably under all conditions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Deployment & Integration</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We handle the deployment process, ensuring smooth integration with your existing systems and infrastructure. Our DevOps practices enable efficient, reliable, and repeatable deployments with minimal disruption.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">6</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Support & Evolution</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our relationship continues after launch with comprehensive support, maintenance, and ongoing enhancements. We help your software evolve to meet changing business needs and leverage new technologies.
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
                      <h4 className="font-semibold text-white">Technical Excellence</h4>
                      <p className="text-gray-400 text-sm">Our engineers are experts in the latest technologies and best practices.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Business-Focused Approach</h4>
                      <p className="text-gray-400 text-sm">We focus on delivering solutions that drive real business value.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Scalable Architecture</h4>
                      <p className="text-gray-400 text-sm">Our solutions are designed to grow with your business and adapt to changing needs.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Security by Design</h4>
                      <p className="text-gray-400 text-sm">Security is integrated into every phase of our development process.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Agile Methodology</h4>
                      <p className="text-gray-400 text-sm">Our iterative approach ensures flexibility, transparency, and continuous improvement.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Long-term Partnership</h4>
                      <p className="text-gray-400 text-sm">We're committed to your success beyond the initial development phase.</p>
                    </div>
                  </li>
                </ul>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="text-purple-400 text-2xl font-bold">60%</div>
                    <div className="text-gray-400 text-sm">Efficiency Increase</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="text-purple-400 text-2xl font-bold">25%</div>
                    <div className="text-gray-400 text-sm">Development Time Reduction</div>
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
              Featured Software Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore some of our recent software development projects that showcase our expertise and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                  alt="Enterprise Resource Planning System" 
                  className="w-full h-full object-cover transition-traninfoorm duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 mb-4">
                  Enterprise
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white">ERP System for Manufacturing</h3>
                <p className="text-gray-400 mb-4">
                  A comprehensive ERP solution that streamlined operations, reduced costs, and improved decision-making for a manufacturing company.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Java, Spring, PostgreSQL</div>
                  <Link to="/case-studies" className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium">
                    <span>View Case Study</span>
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
                  alt="AI-Powered Analytics Platform" 
                  className="w-full h-full object-cover transition-traninfoorm duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 mb-4">
                  AI/ML
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white">Predictive Analytics Platform</h3>
                <p className="text-gray-400 mb-4">
                  An AI-powered analytics platform that helped a financial services company predict market trends and optimize investment strategies.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Python, TensorFlow, AWS</div>
                  <Link to="/case-studies" className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium">
                    <span>View Case Study</span>
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
                  alt="Healthcare Management System" 
                  className="w-full h-full object-cover transition-traninfoorm duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 mb-4">
                  Healthcare
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white">Patient Management System</h3>
                <p className="text-gray-400 mb-4">
                  A secure, HIPAA-compliant healthcare management system that improved patient care and operational efficiency for a hospital network.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">.NET, Azure, SQL Server</div>
                  <Link to="/case-studies" className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium">
                    <span>View Case Study</span>
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
                Ready to Traninfoorm Your Business with Custom Software?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our software development services can help you solve complex challenges and drive innovation. Schedule a free consultation with our experts today.
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