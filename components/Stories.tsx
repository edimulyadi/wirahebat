import React, { useRef } from 'react';
import { Story } from '../types';
import { Quote, ChevronLeft, ChevronRight, PlayCircle, Star, BadgeCheck } from 'lucide-react';
import { Button } from './Button';

const STORIES: Story[] = [
  {
    id: 1,
    title: "Revolusi Kulit Garut",
    category: "Fashion & Kriya",
    excerpt: "Membawa kerajinan kulit Sukaregang ke pasar Eropa melalui digital branding yang kuat.",
    founder: "Asep Sunandar",
    imageUrl: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Kopi Gunung Cikuray",
    category: "Agroteknologi",
    excerpt: "Sistem pemrosesan pasca-panen modern yang meningkatkan nilai jual biji kopi petani lokal hingga 300%.",
    founder: "Siti Nurhaliza",
    imageUrl: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Dodol Tech",
    category: "F & B Inovatif",
    excerpt: "Inovasi pengemasan dan varian rasa baru yang membuat dodol Garut relevan bagi Gen-Z.",
    founder: "Rudi Hermawan",
    imageUrl: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Domba Garut Premium",
    category: "Peternakan Modern",
    excerpt: "Platform lelang digital untuk domba kontes kelas premium yang menjangkau pembeli internasional.",
    founder: "Kang Deden",
    imageUrl: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Wisata Cipanas 2.0",
    category: "Pariwisata",
    excerpt: "Aplikasi integrasi booking hotel dan pengalaman lokal untuk wisatawan yang berkunjung ke Cipanas.",
    founder: "Teh Ninih",
    imageUrl: "https://images.unsplash.com/photo-1571896349842-6e53ce41e86a?q=80&w=800&auto=format&fit=crop"
  }
];

const TESTIMONIALS = [
  {
    id: 1,
    content: "Program mentoring Wira Hebat benar-benar mengubah cara pandang saya tentang bisnis. Omzet Batik Garutan Modern naik 200% dalam 3 bulan setelah menerapkan strategi digital marketing yang diajarkan.",
    name: "Rina Kartika",
    role: "CEO Batik Garutan Modern",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    content: "Akses ke investor yang diberikan sangat membantu startup agrotech kami untuk scaling up. Kini kopi kami sudah diekspor ke 3 negara! Terima kasih atas dukungannya.",
    name: "Budi Santoso",
    role: "Founder TaniMaju",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    content: "Komunitasnya sangat suportif. Saya menemukan co-founder dan partner bisnis strategis di sini. Ekosistem terbaik untuk anak muda Garut yang ingin maju.",
    name: "Dinda Pertiwi",
    role: "Co-Founder Chocodot Digital",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  }
];

export const Stories: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth < 768 ? container.clientWidth : container.clientWidth / 2; // Scroll 1 card on mobile, half screen on desktop
      
      const newScrollPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="kisah" className="py-20 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Kisah Hebat Wirausaha Lokal
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mb-4"></div>
            <p className="text-lg text-neutral-600">
              Inspirasi nyata dari putra-putri daerah yang berani berinovasi dan membawa perubahan.
            </p>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-neutral-300 bg-white text-neutral-600 hover:bg-primary hover:text-white hover:border-primary transition-colors focus:outline-none shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-neutral-300 bg-white text-neutral-600 hover:bg-primary hover:text-white hover:border-primary transition-colors focus:outline-none shadow-sm"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        {/* Note: We use negative margin on mobile to allow cards to bleed to the edge */}
        <div className="-mx-4 md:mx-0 mb-24">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 md:px-0 pb-12 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          >
            {STORIES.map((story) => (
              <div 
                key={story.id} 
                className="
                  flex-shrink-0 
                  w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] 
                  snap-center 
                  bg-white rounded-xl overflow-hidden shadow-sm 
                  transition-all duration-300 ease-out
                  hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] 
                  group border border-gray-100 
                  hover:border-primary/50 hover:ring-4 hover:ring-primary/10
                  flex flex-col h-auto cursor-pointer
                "
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={story.imageUrl} 
                    alt={story.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {story.category}
                  </div>
                </div>
                
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <Quote className="w-8 h-8 text-secondary/20 mb-4" />
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-neutral-600 mb-6 flex-1 leading-relaxed line-clamp-3">
                    "{story.excerpt}"
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div>
                      <p className="text-xs text-neutral-500 mb-1">Founder</p>
                      <p className="font-semibold text-neutral-800">{story.founder}</p>
                    </div>
                    <span className="text-primary font-medium text-sm hover:underline group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Baca Kisah <ChevronRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Player Module */}
        <div className="relative border-t border-neutral-200 pt-16 mb-24">
          <div className="flex flex-col items-center mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-4">
              <PlayCircle size={14} className="text-red-600" />
              <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                Galeri & Liputan
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
              Jejak Langkah Wirausaha Garut
            </h3>
            <p className="text-neutral-600 mt-2 max-w-2xl">
              Simak dokumentasi visual perjalanan komunitas kami dalam membangun ekosistem bisnis yang berkelanjutan.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative group">
            {/* Decorative BG Elements */}
            <div className="absolute -top-4 -left-4 w-full h-full bg-secondary/10 rounded-2xl -z-10 transform group-hover:-rotate-1 transition-transform duration-500"></div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/10 rounded-2xl -z-10 transform group-hover:rotate-1 transition-transform duration-500"></div>

            {/* Video Container */}
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-black border border-neutral-800">
               {/* Replace 'VIDEO_ID' with your actual YouTube Video ID */}
               <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/LXb3EKWsInQ?si=7Yg4-2Qp9_8Jq6xZ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative border-t border-neutral-200 pt-16">
          <div className="text-center mb-12">
            <span className="text-secondary font-bold tracking-wider uppercase text-xs mb-2 block">
              Testimoni
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
              Suara Wirausaha Hebat
            </h3>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Dengarkan langsung pengalaman para wirausahawan yang telah bertumbuh bersama ekosistem kami. Kepuasan mereka adalah bukti komitmen kami.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-primary/20 hover:-translate-y-2 transition-all duration-300 relative group">
                {/* Decorative Quote Mark */}
                <Quote className="w-12 h-12 text-primary/10 absolute top-6 right-6 group-hover:text-primary/20 transition-colors" />
                
                <div className="flex items-center gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-neutral-600 mb-8 italic relative z-10 leading-relaxed min-h-[80px]">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4 border-t border-gray-50 pt-6 mt-auto">
                  <div className="relative">
                    <img 
                      src={testimonial.avatarUrl} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-primary transition-all"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                      <BadgeCheck size={16} className="text-blue-500 fill-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-primary font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};