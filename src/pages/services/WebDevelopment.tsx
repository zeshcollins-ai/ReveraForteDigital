import React from 'react';
import { ArrowRight, CheckCircle, ChevronRight, Home, Code2, Layout, Server, Globe, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import ConsultationButton from '../../components/ConsultationButton';

export default function WebDevelopment() {
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
                Web Development
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
                  Digital Solutions
                </span>
              </div>
              
              {/* Headline with enhanced gradient and subtle animation */}
              <h1 className="text-5xl sm:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-100 to-cyan-100 tracking-tight leading-tight">
                Web Development <br className="hidden md:block" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                  That Inspires
                </span>
              </h1>
              
              {/* Improved subheading with better typography */}
              <p className="text-gray-300 text-xl leading-relaxed font-light mb-8 md:mb-10">
                Custom websites and web applications built with cutting-edge technology to elevate your digital presence.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <ConsultationButton />
                
                <Link to="/contact" className="group inline-flex items-center justify-center px-6 py-3 border border-purple-500/20 rounded-full text-purple-300 hover:text-white transition-colors duration-300 hover:border-purple-500/40">
                  <span>View Portfolio</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hidden md:block relative mt-10 md:mt-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/30 to-cyan-500/30 blur-xl opacity-50 animate-pulse-slow"></div>
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_25px_rgba(139,92,246,0.15)]">
                <img 
                  src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800" 
                  alt="Web Development" 
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
                Custom Web Development Solutions
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                In today's digital-first world, your website is often the first interaction customers have with your brand. Our web development services are designed to create impactful, functional, and visually stunning digital experiences that convert visitors into customers.
              </p>
              
              <p className="text-gray-300 mb-10 leading-relaxed">
                We combine technical expertise with creative design to build websites and web applications that not only look great but also perform exceptionally well. Our development process focuses on creating scalable, secure, and user-friendly solutions tailored to your specific business needs.
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {/* Service 1 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Layout className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Website Design & Development</h3>
                  <p className="text-gray-400 mb-4">Custom websites tailored to your business needs and brand identity.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Custom Website Development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Responsive Design</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Single-Page Applications (SPA)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Content Management System (CMS)</span>
                    </li>
                  </ul>
                </div>

                {/* Service 2 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Front-End Development</h3>
                  <p className="text-gray-400 mb-4">Engaging user interfaces with modern frameworks and technologies.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">UI/UX Design Integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Interactive Prototypes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Performance Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Cross-browser Compatibility</span>
                    </li>
                  </ul>
                </div>

                {/* Service 3 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Server className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Back-End Development</h3>
                  <p className="text-gray-400 mb-4">Robust server-side solutions for your applications and websites.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">API Development and Integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Database Management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Server-Side Development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Security Implementation</span>
                    </li>
                  </ul>
                </div>

                {/* Service 4 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Web Application Development</h3>
                  <p className="text-gray-400 mb-4">Feature-rich web applications for complex business needs.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Progressive Web Apps (PWAs)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">SaaS Product Development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Custom Web Portals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Enterprise Solutions</span>
                    </li>
                  </ul>
                </div>

                {/* Service 5 */}
                <div className="bg-gray-900/50 border border-gray-800/50 rounded-xl p-6 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                  <div className="mb-4 p-3 inline-block rounded-lg bg-purple-900/30 text-purple-400">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Maintenance & Support</h3>
                  <p className="text-gray-400 mb-4">Keeping your web assets running smoothly and securely.</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Website Updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Bug Fixing & Troubleshooting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Performance Monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Security Patches</span>
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
                    <div className="text-purple-400 font-semibold mb-1">React</div>
                    <div className="text-gray-400 text-sm">Front-end</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">Angular</div>
                    <div className="text-gray-400 text-sm">Front-end</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">Vue.js</div>
                    <div className="text-gray-400 text-sm">Front-end</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">Next.js</div>
                    <div className="text-gray-400 text-sm">Full-stack</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">Node.js</div>
                    <div className="text-gray-400 text-sm">Back-end</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">Python</div>
                    <div className="text-gray-400 text-sm">Back-end</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">MongoDB</div>
                    <div className="text-gray-400 text-sm">Database</div>
                  </div>
                  <div className="bg-gray-900/30 border border-gray-800/30 rounded-lg p-4 text-center hover:border-purple-500/20 transition-all duration-300">
                    <div className="text-purple-400 font-semibold mb-1">PostgreSQL</div>
                    <div className="text-gray-400 text-sm">Database</div>
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
                      <h3 className="text-xl font-semibold text-white mb-2">Discovery & Planning</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We begin by understanding your business goals, target audience, and project requirements. Our team conducts thorough research to identify the best technical approach and creates a detailed project roadmap.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Design & Prototyping</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our designers create wireframes and interactive prototypes that visualize the user experience. We collaborate closely with you to refine the design until it perfectly aligns with your vision and brand identity.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our development team brings the designs to life using the most appropriate technologies for your project. We follow agile methodologies, with regular sprints and check-ins to ensure transparency and flexibility throughout the development process.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Testing & Quality Assurance</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We rigorously test all aspects of your website or application, including functionality, performance, security, and user experience. Our QA process ensures that the final product is bug-free and works flawlessly across all devices and browsers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">5</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Deployment & Launch</h3>
                      <p className="text-gray-300 leading-relaxed">
                        We handle the deployment process, ensuring a smooth transition to the live environment. Our team optimizes server configurations, implements security measures, and conducts final checks before launch.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-4">
                      <span className="text-purple-400 font-semibold">6</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Ongoing Support & Maintenance</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Our relationship doesn't end at launch. We provide ongoing support and maintenance to ensure your website or application continues to perform optimally. This includes regular updates, security patches, and performance monitoring.
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
                      <p className="text-gray-400 text-sm">Our developers are experts in the latest web technologies and best practices.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">User-Centered Design</h4>
                      <p className="text-gray-400 text-sm">We prioritize user experience to create intuitive and engaging interfaces.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Scalable Solutions</h4>
                      <p className="text-gray-400 text-sm">Our applications are built to grow with your business and adapt to changing needs.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Performance Optimization</h4>
                      <p className="text-gray-400 text-sm">We ensure fast loading times and smooth performance across all devices.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Security Focus</h4>
                      <p className="text-gray-400 text-sm">We implement robust security measures to protect your data and users.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-900/50 border border-purple-500/30 flex items-center justify-center mr-3 mt-0.5">
                      <CheckCircle className="h-3 w-3 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Transparent Process</h4>
                      <p className="text-gray-400 text-sm">We keep you informed and involved throughout the development journey.</p>
                    </div>
                  </li>
                </ul>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="text-purple-400 text-2xl font-bold">40%</div>
                    <div className="text-gray-400 text-sm">Avg. Conversion Rate</div>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <div className="text-purple-400 text-2xl font-bold">3s</div>
                    <div className="text-gray-400 text-sm">Avg. Load Time</div>
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

      {/* Portfolio Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full filter blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full filter blur-[100px] animate-pulse-slow-delay" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
              Featured Web Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore some of our recent web development projects that showcase our expertise and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                  alt="E-commerce Website" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 mb-4">
                  E-commerce
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white">LuxeMarket Online Store</h3>
                <p className="text-gray-400 mb-4">
                  A high-performance e-commerce platform with advanced filtering, real-time inventory, and seamless checkout experience.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">React, Node.js, MongoDB</div>
                  <Link to="/case-studies" className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium">
                    <span>View Project</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                  alt="SaaS Dashboard" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 mb-4">
                  SaaS
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white">AnalyticsPro Dashboard</h3>
                <p className="text-gray-400 mb-4">
                  A comprehensive analytics dashboard with real-time data visualization, custom reporting, and user management.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Vue.js, Python, PostgreSQL</div>
                  <Link to="/case-studies" className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium">
                    <span>View Project</span>
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800/50 rounded-xl overflow-hidden hover:border-purple-500/30 transition-all duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" 
                  alt="Real Estate Platform" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300 mb-4">
                  Real Estate
                </span>
                <h3 className="text-xl font-semibold mb-2 text-white">HomeFindr Platform</h3>
                <p className="text-gray-400 mb-4">
                  A feature-rich real estate platform with advanced search, virtual tours, and agent-client communication tools.
                </p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">Next.js, Express, MySQL</div>
                  <Link to="/case-studies" className="text-purple-400 hover:text-purple-300 flex items-center text-sm font-medium">
                    <span>View Project</span>
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
                Ready to Build Your Next Web Project?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our web development services can help you create a powerful online presence. Schedule a free consultation with our experts today.
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