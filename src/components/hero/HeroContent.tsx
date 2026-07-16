import React from 'react';
import Button from '../common/Button';
import { ArrowRight } from 'lucide-react';
import ConsultationButton from '../ConsultationButton';

export default function HeroContent() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen m-0 pt-32">
      <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8">
        Traninfoorm Your Digital Future with
        <span className="block mt-2 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Revera Forte
        </span>
      </h1>
      <p className="text-xl text-gray-300 mb-12 max-w-2xl">
        Elevate your brand with AI-powered strategies and cutting-edge digital solutions.
      </p>
	  <div className="flex flex-wrap gap-4 justify-center">
		  <Button variant="primary" icon={ArrowRight}>
			Get Started
		  </Button>
		  <ConsultationButton variant="primary" size="md" />
		  <Button variant="secondary">Learn More</Button>
		</div>
    </div>
  );
}
