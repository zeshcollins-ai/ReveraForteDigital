import React from 'react';
import { ArrowRight, TrendingUp, Code, Award, Handshake, Layers, Lightbulb } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  exampleStat: string;
}

function FeatureCard({ icon: Icon, title, description, exampleStat }: FeatureCardProps) {
  return (
    <div
      className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-colors transform hover:scale-[1.02] hover:shadow-xl"
      style={{
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        perspective: '1000px', // Remove this if you don't want the 3D effect
      }}
    >
      <div
        className="flip-card-inner"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          textAlign: 'center',
          transition: 'transform 0.8s',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front Side */}
        <div
          className="flip-card-front"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: '#bbb',
            color: 'black',
          }}
        >
          <Icon className="h-8 w-8 text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <p className="text-sm text-gray-300">
            <span className="font-semibold">Example:</span> {exampleStat}
          </p>
        </div>

        {/* Back Side */}
        <div
          className="flip-card-back"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: 'dodgerblue',
            color: 'white',
            transform: 'rotateY(180deg)',
          }}
        >
          <h3 className="text-xl font-semibold text-white mb-2">More About {title}</h3>
          <p className="text-gray-200 mb-4">{description}</p>
          <p className="text-sm text-gray-100">
            <span className="font-semibold">Example:</span> {exampleStat}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Data-Driven Digital Marketing Strategies',
      description:
        'We don’t guess—we analyze. Our data-driven approach ensures your campaigns are optimized for maximum ROI. From SEO and PPC to social media marketing, we deliver measurable results.',
      exampleStat: 'Increased client traffic by 200% and conversions by 150% in just 6 months.',
    },
    {
      icon: Code,
      title: 'Cutting-Edge Tech Solutions',
      description:
        'We build custom tech solutions that empower your business. Whether it’s web development, app creation, or AI-driven tools, we deliver scalable, future-proof solutions.',
      exampleStat: 'Developed 50+ custom software solutions for global brands.',
    },
    {
      icon: Award,
      title: 'Award-Winning Creative Expertise',
      description:
        'Our team of designers and content creators craft stunning visuals and compelling narratives that resonate with your audience and elevate your brand.',
      exampleStat: 'Winner of 10+ design and marketing awards in 2023.',
    },
    {
      icon: Handshake,
      title: 'Proven Track Record',
      description:
        'Trusted by startups and Fortune 500 companies alike, we’ve helped over 100+ brands achieve their digital goals.',
      exampleStat: '90% client retention rate over the past 5 years.',
    },
    {
      icon: Handshake,
      title: 'Transparent and Collaborative Process',
      description:
        'We believe in transparency. From regular progress updates to detailed reporting, you’ll always know where your investment is going.',
      exampleStat: '100% client satisfaction with our communication and reporting.',
    },
    {
      icon: Layers,
      title: 'End-to-End Digital Solutions',
      description:
        'From strategy to execution, we offer a full suite of services—SEO, content marketing, social media, web development, and more—all under one roof.',
      exampleStat: 'Delivered 360° digital solutions for 80+ clients.',
    },
    {
      icon: Lightbulb,
      title: 'Future-Ready Innovation',
      description:
        'We stay ahead of the curve by leveraging the latest tools and technologies, ensuring your business is always one step ahead.',
      exampleStat: 'Pioneered AI-driven marketing strategies for 20+ clients.',
    },
  ];

  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Why We’re Your Trusted Partner in Digital Marketing and Tech Solutions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flip-card"
            style={{
              backgroundColor: 'transparent',
              width: '100%',
              height: '300px', // Adjust height as needed
              perspective: '1000px',
            }}
          >
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-lg bg-gradient-to-r from-purple-500 to-cyan-500 text-white hover:opacity-90 transition-all"
        >
          Ready to Transform Your Business? Let’s Talk!
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}