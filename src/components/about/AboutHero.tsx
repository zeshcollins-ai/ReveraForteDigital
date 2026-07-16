import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6">
          Pioneering the <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">Digital Frontier</span>
        </h1>
        <p className="text-2xl bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold mb-10">
          Where Innovation Meets Impact
        </p>
        <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed">
          At Revera Forte, we're not just another digital agency. We're architects of transformation, crafting digital experiences that transcend expectations and drive measurable results in an AI-powered world.
        </p>
      </div>
    </section>
  );
}