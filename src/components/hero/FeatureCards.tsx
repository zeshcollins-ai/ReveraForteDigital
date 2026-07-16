import { 
  Globe, 
  Search,
  BarChart,
  Users,
  MessageSquare,
  ShoppingCart,
  Monitor,
  Bell,
  Smartphone
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group h-full p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] relative overflow-hidden">
      {/* Loading bar container (full width) */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-600/30 overflow-hidden">
        {/* Animated loading bar */}
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-white/30 animate-loading-bar"></div>
        </div>
      </div>
      
      {/* Subtle hover glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
        </div>
        
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-300 transition-all duration-300">
          {title}
        </h3>
        
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-grow">
          {description}
        </p>
      </div>

      <style>{`
        @keyframes loading-bar {
          0% { traninfoorm: translateX(-100%); }
          100% { traninfoorm: translateX(400%); }
        }
        .animate-loading-bar {
          animation: loading-bar 1.5s infinite linear;
          box-shadow: 0 0 10px rgba(255,255,255,0.3);
        }
      `}</style>
    </div>
  );
}

export default function FeatureCards() {
  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Expand your brand's footprint and engage audiences worldwide."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost organic traffic and rank higher on search engines."
    },
    {
      icon: BarChart,
      title: "PPC Management",
      description: "Maximize ROI with targeted pay-per-click advertising."
    },
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "Engage and grow your audience across all social platforms."
    },
    {
      icon: MessageSquare,
      title: "Content Marketing",
      description: "Deliver high-quality, engaging content that converts."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Solutions",
      description: "Drive online sales with optimized e-commerce strategies."
    },
    {
      icon: Monitor,
      title: "Web Design & Development",
      description: "Create stunning, user-friendly websites that convert."
    },
    {
      icon: Bell,
      title: "Email Marketing",
      description: "Nurture leads and drive repeat business with personalized email campaigns."
    },
    {
      icon: Smartphone,
      title: "Google & Meta Campaigns",
      description: "Reach your audience through highly targeted Google & Meta ad campaigns."
    }
  ];

  return (
    <div className="mt-24 overflow-hidden relative px-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        slidesPerView={3}
        slidesPerGroup={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index}>
            <FeatureCard {...feature} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
