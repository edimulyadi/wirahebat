import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Use requestAnimationFrame for smoother performance during scroll
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative bg-neutral-900 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2826&auto=format&fit=crop"
          alt="Lanskap Garut yang indah"
          className="w-full h-[120%] -mt-[10%] object-cover opacity-40 will-change-transform"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 backdrop-blur-md mb-6 animate-fade-in-up">
          <Zap size={14} className="text-secondary-light" />
          <span className="text-sm font-semibold text-secondary-light uppercase tracking-wide">
            Inisiatif Kewirausahaan #1 di Garut
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up">
          Bangun Bisnis Impian <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
            Dari Garut Untuk Dunia
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Bergabunglah dengan ekosistem wirausaha paling dinamis. Kami menyediakan mentoring, 
          akses pendanaan, dan jaringan untuk mengubah ide lokal menjadi inovasi global.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <Button 
            variant="primary" 
            size="lg" 
            className="group shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
          >
            Mulai Sekarang
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/10 hover:text-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-300"
          >
            Pelajari Program
          </Button>
        </div>
      </div>
    </section>
  );
};