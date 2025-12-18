import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="tentang" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 rounded-[2.5rem] p-8 md:p-12 lg:p-20 flex flex-col md:flex-row items-center gap-12 lg:gap-20 border border-gray-100">
          
          {/* Image Grid */}
          <div className="md:w-1/2 order-2 md:order-1 relative">
             <div className="grid grid-cols-2 gap-4">
               <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" 
                className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover mt-12 transform hover:-translate-y-2 transition-transform duration-300" 
                alt="Kolaborasi tim" 
               />
               <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop" 
                className="rounded-2xl shadow-lg w-full h-48 md:h-64 object-cover transform hover:translate-y-2 transition-transform duration-300" 
                alt="Mentoring bisnis" 
               />
             </div>
             {/* Decorative pattern */}
             <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 order-1 md:order-2">
            <span className="text-primary font-bold tracking-wider uppercase text-xs mb-2 block">Tentang Kami</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              Membangun Masa Depan Garut Lewat Wirausaha
            </h2>
            <p className="text-neutral-600 text-lg mb-6 leading-relaxed">
              Wira Hebat Garut adalah inisiatif kolaboratif antara pemerintah daerah, komunitas bisnis, dan akademisi. 
              Visi kami adalah menjadikan Garut sebagai pusat kewirausahaan kreatif di Jawa Barat pada tahun 2030.
            </p>
            <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
              Kami percaya bahwa setiap anak muda Garut memiliki potensi untuk menjadi <span className="text-secondary font-bold">Wirausaha Hebat</span> yang berdampak bagi lingkungan sekitar.
            </p>
            <div className="flex gap-4">
              <Button variant="outline">
                Hubungi Tim Kami
              </Button>
              <Button variant="ghost" className="text-primary hover:bg-primary/5">
                Lihat Laporan Tahunan <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};