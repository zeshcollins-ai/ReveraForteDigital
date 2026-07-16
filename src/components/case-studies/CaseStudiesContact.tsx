import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CaseStudiesContact() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="bg-gradient-to-br from-blue-900/30 via-indigo-900/30 to-purple-900/30 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-blue-500/20">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            
            <p className="text-gray-300 mb-8">
              Join the ranks of our succesinfoul clients who have traninfoormed their businesses with our innovative solutions. Let's discuss how we can help you achieve your goals.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Custom-tailored strategies for your specific needs",
                "Dedicated team of experts at your service",
                "Transparent process and regular progress updates",
                "Measurable results and data-driven approach"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-200">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full text-white font-medium flex items-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-transparent border border-indigo-500 rounded-full text-white font-medium"
              >
                View All Services
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
            
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm text-gray-400 mb-1">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your company"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm text-gray-400 mb-1">Project Description</label>
                <textarea 
                  id="project" 
                  rows={4}
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project and goals..."
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-1">Interested in</label>
                <div className="grid grid-cols-2 gap-2">
                  {["Web Development", "Mobile Apps", "UI/UX Design", "Digital Marketing"].map((service, idx) => (
                    <div key={idx} className="flex items-center">
                      <input 
                        type="checkbox" 
                        id={`service-${idx}`} 
                        className="mr-2 accent-blue-500"
                      />
                      <label htmlFor={`service-${idx}`} className="text-sm text-gray-300">{service}</label>
                    </div>
                  ))}
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg text-white font-medium"
              >
                Submit Request
              </motion.button>
              
              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}