import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  Clock, 
  Globe, 
  ChevronRight,
  Linkedin,
  Twitter,
  Instagram,
  Facebook
} from 'lucide-react';
import '../components/contact/contactAnimations.css';
import GalaxyBackground from '../components/about/GalaxyBackground';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    budget: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [activeTab, setActiveTab] = useState<'general' | 'support' | 'sales'>('general');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after success
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: '',
          budget: ''
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <>
      {/* Galaxy background for the entire page (including behind the footer) */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 z-0" />
      <div className="fixed inset-0 z-0">
        <GalaxyBackground />
      </div>
      
      {/* Content with relative positioning to appear above the background */}
      <div className="relative z-10 overflow-hidden">
      
      {/* Hero section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="contact-hero-container">
            <div className="contact-hero-content">
              <div className="contact-hero-header">
                <div className="contact-hero-title-container">
                  <h1 className="text-4xl md:text-5xl font-black tracking-tight glitch-text" data-text="CONNECT WITH US">
                    <span className="relative z-10 inline-block">CONNECT WITH US</span>
                  </h1>
                  <div className="contact-hero-underline"></div>
                </div>
                
                <p className="contact-hero-subtitle">
                  <span className="text-cyan-400">&lt;</span> INITIATE.COMMUNICATION.PROTOCOL <span className="text-purple-400">&gt;</span>
                </p>
              </div>
              
              <div className="contact-hero-description">
                <p className="text-lg text-gray-300 mb-6">
                  Ready to transform your digital presence? Our team of experts is standing by to help you navigate the future of marketing.
                </p>
                
                <div className="contact-hero-stats">
                  <div className="contact-stat">
                    <div className="contact-stat-value">24/7</div>
                    <div className="contact-stat-label">SUPPORT</div>
                  </div>
                  <div className="contact-stat">
                    <div className="contact-stat-value">15m</div>
                    <div className="contact-stat-label">AVG RESPONSE</div>
                  </div>
                  <div className="contact-stat">
                    <div className="contact-stat-value">100%</div>
                    <div className="contact-stat-label">SATISFACTION</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-hero-visual">
              <div className="contact-globe-container">
                <div className="contact-globe"></div>
                <div className="contact-globe-overlay"></div>
                <div className="contact-globe-ping ping-1"></div>
                <div className="contact-globe-ping ping-2"></div>
                <div className="contact-globe-ping ping-3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact methods section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="contact-methods-header">
            <h2 className="text-3xl font-bold mb-2">Communication Channels</h2>
            <div className="contact-methods-line"></div>
          </div>
          
          <div className="contact-methods-tabs">
            <button 
              className={`contact-tab ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => setActiveTab('general')}
            >
              General Inquiries
            </button>
            <button 
              className={`contact-tab ${activeTab === 'support' ? 'active' : ''}`}
              onClick={() => setActiveTab('support')}
            >
              Technical Support
            </button>
            <button 
              className={`contact-tab ${activeTab === 'sales' ? 'active' : ''}`}
              onClick={() => setActiveTab('sales')}
            >
              Sales Department
            </button>
          </div>
          
          <div className="contact-methods-grid">
            <div className="contact-method-card">
              <div className="contact-method-icon">
                <Mail className="h-6 w-6 text-white" />
                <div className="contact-method-icon-pulse"></div>
              </div>
              <h3 className="contact-method-title">Email Us</h3>
              <p className="contact-method-value">
                {activeTab === 'general' && 'info@reveraforte.com'}
                {activeTab === 'support' && 'support@reveraforte.com'}
                {activeTab === 'sales' && 'sales@reveraforte.com'}
              </p>
              <p className="contact-method-description">
                {activeTab === 'general' && 'For general inquiries and information'}
                {activeTab === 'support' && 'For technical assistance and troubleshooting'}
                {activeTab === 'sales' && 'For pricing and package information'}
              </p>
              <div className="contact-method-decoration">
                <div className="contact-method-corner top-left"></div>
                <div className="contact-method-corner top-right"></div>
                <div className="contact-method-corner bottom-left"></div>
                <div className="contact-method-corner bottom-right"></div>
              </div>
            </div>
            
            <div className="contact-method-card">
              <div className="contact-method-icon">
                <Phone className="h-6 w-6 text-white" />
                <div className="contact-method-icon-pulse"></div>
              </div>
              <h3 className="contact-method-title">Call Us</h3>
              <p className="contact-method-value">
                {activeTab === 'general' && '+1 (555) 123-4567'}
                {activeTab === 'support' && '+1 (555) 987-6543'}
                {activeTab === 'sales' && '+1 (555) 456-7890'}
              </p>
              <p className="contact-method-description">
                {activeTab === 'general' && 'Our main reception line'}
                {activeTab === 'support' && 'Direct line to our support team'}
                {activeTab === 'sales' && 'Connect with our sales specialists'}
              </p>
              <div className="contact-method-decoration">
                <div className="contact-method-corner top-left"></div>
                <div className="contact-method-corner top-right"></div>
                <div className="contact-method-corner bottom-left"></div>
                <div className="contact-method-corner bottom-right"></div>
              </div>
            </div>
            
            <div className="contact-method-card">
              <div className="contact-method-icon">
                <Clock className="h-6 w-6 text-white" />
                <div className="contact-method-icon-pulse"></div>
              </div>
              <h3 className="contact-method-title">Hours</h3>
              <p className="contact-method-value">
                {activeTab === 'general' && 'Mon-Fri: 9AM - 6PM EST'}
                {activeTab === 'support' && '24/7 Support Available'}
                {activeTab === 'sales' && 'Mon-Fri: 8AM - 8PM EST'}
              </p>
              <p className="contact-method-description">
                {activeTab === 'general' && 'Our standard business hours'}
                {activeTab === 'support' && 'Round-the-clock technical assistance'}
                {activeTab === 'sales' && 'Extended hours for sales inquiries'}
              </p>
              <div className="contact-method-decoration">
                <div className="contact-method-corner top-left"></div>
                <div className="contact-method-corner top-right"></div>
                <div className="contact-method-corner bottom-left"></div>
                <div className="contact-method-corner bottom-right"></div>
              </div>
            </div>
            
            <div className="contact-method-card">
              <div className="contact-method-icon">
                <MapPin className="h-6 w-6 text-white" />
                <div className="contact-method-icon-pulse"></div>
              </div>
              <h3 className="contact-method-title">Location</h3>
              <p className="contact-method-value">
                {activeTab === 'general' && '123 Innovation Way'}
                {activeTab === 'support' && 'Global Support Centers'}
                {activeTab === 'sales' && 'Regional Sales Offices'}
              </p>
              <p className="contact-method-description">
                {activeTab === 'general' && 'San Francisco, CA 94103'}
                {activeTab === 'support' && 'With teams in US, EU, and APAC'}
                {activeTab === 'sales' && 'Schedule an in-person consultation'}
              </p>
              <div className="contact-method-decoration">
                <div className="contact-method-corner top-left"></div>
                <div className="contact-method-corner top-right"></div>
                <div className="contact-method-corner bottom-left"></div>
                <div className="contact-method-corner bottom-right"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact form section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="contact-form-container">
            <div className="contact-form-header">
              <div className="contact-form-icon-container">
                <MessageSquare className="h-6 w-6 text-white" />
                <div className="contact-form-icon-glow"></div>
              </div>
              <h2 className="contact-form-title">SEND US A MESSAGE</h2>
              <div className="contact-form-subtitle">
                <span className="text-cyan-400">&lt;</span> SECURE.TRANSMISSION.PROTOCOL <span className="text-purple-400">&gt;</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-grid">
                <div className="contact-form-field">
                  <label htmlFor="name" className="contact-form-label">Full Name</label>
                  <div className="contact-input-container">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="contact-input"
                      placeholder="Enter your full name"
                    />
                    <div className="contact-input-line"></div>
                  </div>
                </div>
                
                <div className="contact-form-field">
                  <label htmlFor="email" className="contact-form-label">Email Address</label>
                  <div className="contact-input-container">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="contact-input"
                      placeholder="Enter your email address"
                    />
                    <div className="contact-input-line"></div>
                  </div>
                </div>
                
                <div className="contact-form-field">
                  <label htmlFor="company" className="contact-form-label">Company Name</label>
                  <div className="contact-input-container">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="contact-input"
                      placeholder="Enter your company name"
                    />
                    <div className="contact-input-line"></div>
                  </div>
                </div>
                
                <div className="contact-form-field">
                  <label htmlFor="phone" className="contact-form-label">Phone Number</label>
                  <div className="contact-input-container">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="contact-input"
                      placeholder="Enter your phone number"
                    />
                    <div className="contact-input-line"></div>
                  </div>
                </div>
                
                <div className="contact-form-field">
                  <label htmlFor="service" className="contact-form-label">Service Interested In</label>
                  <div className="contact-select-container">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="contact-select"
                    >
                      <option value="" disabled>Select a service</option>
                      <option value="ai-marketing">AI-Powered Marketing</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="content-strategy">Content Strategy</option>
                      <option value="seo-optimization">SEO Optimization</option>
                      <option value="social-media">Social Media Management</option>
                      <option value="web-development">Web Development</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="contact-select-arrow">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <div className="contact-input-line"></div>
                  </div>
                </div>
                
                <div className="contact-form-field">
                  <label htmlFor="budget" className="contact-form-label">Project Budget</label>
                  <div className="contact-select-container">
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="contact-select"
                    >
                      <option value="" disabled>Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-plus">$50,000+</option>
                      <option value="not-sure">Not sure yet</option>
                    </select>
                    <div className="contact-select-arrow">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <div className="contact-input-line"></div>
                  </div>
                </div>
                
                <div className="contact-form-field col-span-2">
                  <label htmlFor="message" className="contact-form-label">Your Message</label>
                  <div className="contact-textarea-container">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="contact-textarea"
                      placeholder="Tell us about your project or inquiry"
                      rows={5}
                    ></textarea>
                    <div className="contact-input-line"></div>
                  </div>
                </div>
              </div>
              
              <div className="contact-form-submit">
                <button 
                  type="submit" 
                  className={`contact-submit-button ${formStatus === 'submitting' ? 'submitting' : ''} ${formStatus === 'success' ? 'success' : ''} ${formStatus === 'error' ? 'error' : ''}`}
                  disabled={formStatus !== 'idle'}
                >
                  <span className="contact-button-text">
                    {formStatus === 'idle' && 'Send Message'}
                    {formStatus === 'submitting' && 'Sending...'}
                    {formStatus === 'success' && 'Message Sent!'}
                    {formStatus === 'error' && 'Error Sending'}
                  </span>
                  <Send className="h-5 w-5 ml-2" />
                  <div className="contact-button-progress"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Global presence section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="global-presence-container">
            <div className="global-presence-header">
              <div className="global-presence-icon">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h2 className="global-presence-title">GLOBAL PRESENCE</h2>
              <div className="global-presence-line"></div>
            </div>
            
            <div className="global-presence-grid">
              <div className="global-office">
                <div className="global-office-header">
                  <h3 className="global-office-name">Wyoming</h3>
                  <div className="global-office-status active">HEADQUARTERS</div>
                </div>
                <p className="global-office-address">
                  1309 Coffeen Avenue STE 1200<br />
                  Sheridan Wyoming 82801<br />
                  United States
                </p>
                <div className="global-office-contact">
                  <div className="global-office-phone">+1 (555) 123-4567</div>
                  <div className="global-office-email">sf@reveraforte.com</div>
                </div>
              </div>
              
              <div className="global-office">
                <div className="global-office-header">
                  <h3 className="global-office-name">Asia-Pacific</h3>
                  <div className="global-office-status">REGIONAL OFFICE</div>
                </div>
                <p className="global-office-address">
                  13, Dodda Basti, Block 4<br />
                  Bengaluru, Karnataka 560056<br />
                  India
                </p>
                <div className="global-office-contact">
                  <div className="global-office-phone">+1 (555) 234-5678</div>
                  <div className="global-office-email">ny@reveraforte.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Social media section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="social-media-container">
            <div className="social-media-header">
              <h2 className="social-media-title">CONNECT WITH US</h2>
              <p className="social-media-subtitle">Follow our digital presence across platforms</p>
              <div className="social-media-line"></div>
            </div>
            
            <div className="social-media-grid">
              <a href="#" className="social-media-card linkedin">
                <div className="social-media-icon">
                  <Linkedin className="h-6 w-6" />
                </div>
                <div className="social-media-content">
                  <h3 className="social-media-name">LinkedIn</h3>
                  <p className="social-media-handle">@reveraforte</p>
                </div>
                <div className="social-media-arrow">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </a>
              
              <a href="#" className="social-media-card twitter">
                <div className="social-media-icon">
                  <Twitter className="h-6 w-6" />
                </div>
                <div className="social-media-content">
                  <h3 className="social-media-name">Twitter</h3>
                  <p className="social-media-handle">@reveraforte</p>
                </div>
                <div className="social-media-arrow">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </a>
              
              <a href="#" className="social-media-card instagram">
                <div className="social-media-icon">
                  <Instagram className="h-6 w-6" />
                </div>
                <div className="social-media-content">
                  <h3 className="social-media-name">Instagram</h3>
                  <p className="social-media-handle">@reveraforte</p>
                </div>
                <div className="social-media-arrow">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </a>
              
              <a href="#" className="social-media-card facebook">
                <div className="social-media-icon">
                  <Facebook className="h-6 w-6" />
                </div>
                <div className="social-media-content">
                  <h3 className="social-media-name">Facebook</h3>
                  <p className="social-media-handle">@reveraforte</p>
                </div>
                <div className="social-media-arrow">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </>
);
}