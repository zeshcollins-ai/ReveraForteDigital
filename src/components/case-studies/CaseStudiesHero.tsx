import React from 'react';
import { motion } from 'framer-motion';

export default function CaseStudiesHero() {
  return (
    <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 mb-6">
          Our Success Stories
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
          Explore how we've helped businesses transform their digital presence and achieve remarkable results through innovative strategies and cutting-edge technologies.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full text-white font-medium cursor-pointer"
          >
            All Case Studies
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-transparent border border-indigo-500 rounded-full text-white font-medium cursor-pointer"
          >
            By Industry
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-16 flex justify-center"
      >
        <div className="grid grid-cols-3 gap-4 max-w-3xl">
          <div className="bg-gradient-to-br from-blue-500/20 to-indigo-600/20 backdrop-blur-sm p-4 rounded-xl border border-blue-500/30">
            <h3 className="text-3xl font-bold text-blue-400 mb-1">150%</h3>
            <p className="text-gray-300">Average ROI</p>
          </div>
          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-600/20 backdrop-blur-sm p-4 rounded-xl border border-indigo-500/30">
            <h3 className="text-3xl font-bold text-indigo-400 mb-1">40+</h3>
            <p className="text-gray-300">Success Stories</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 backdrop-blur-sm p-4 rounded-xl border border-purple-500/30">
            <h3 className="text-3xl font-bold text-purple-400 mb-1">95%</h3>
            <p className="text-gray-300">Client Satisfaction</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}