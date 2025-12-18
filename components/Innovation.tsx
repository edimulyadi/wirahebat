import React from 'react';
import { Sprout, Shirt, Map, UtensilsCrossed, ArrowRight, Cpu } from 'lucide-react';

const INNOVATION_SECTORS = [
  {
    id: 'agrotech',
    icon: <Sprout className="w-8 h-8 text-green-400" />,
    title: "Smart Farming & Agroteknologi",
    description: "Meningkatkan produktivitas komoditas unggulan Garut seperti Kopi Arabika Cikuray, Akar Wangi, dan Jeruk Garut melalui penerapan IoT (Internet of Things) dan manajemen pasca-panen modern.",
    tags: ["Sensor Tanah IoT", "Drip Irrigation", "Marketplace Tani"]
  },
  {
    id: 'fashion',
    icon: <Shirt className="w-8 h-8 text-orange-400" />,
    title: "Revolusi Industri Kulit Sukaregang",
    description: "Transformasi digital untuk pengrajin kulit Sukaregang. Fokus pada desain 3D, branding global, dan sistem e-commerce terintegrasi untuk menembus pasar ekspor fashion internasional.",
    tags: ["3D Prototyping", "Global Branding", "Eco-Leather"]
  },
  {
    id: 'tourism',
    icon: <Map className="w-8 h-8 text-blue-400" />,
    title: "Wisata Digital & Ecotourism 4.0",
    description: "Mengintegrasikan keindahan alam Garut (Cipanas, Papandayan, Santolo) dengan platform booking terpadu, tur virtual (VR), dan pengalaman wisata berbasis komunitas yang berkelanjutan.",
    tags: ["Virtual Tour", "Smart Ticketing", "Sustainable Travel"]
  },
  {
    id: 'food',
    icon: <UtensilsCrossed className="w-8 h-8 text-yellow-400" />,
    title: "Food Tech & Hilirisasi Pangan",
    description: "Inovasi pengolahan pangan untuk memperpanjang masa simpan Dodol, Burayot, dan Sambal Cibiuk tanpa pengawet berbahaya, serta pengembangan kemasan retort modern untuk ekspor.",
    tags: ["Retort Packaging", "Food Science", "HACCP Ready"]
  }
];

export const Innovation: React.FC = () => {
  return (
    <section id="inovasi" className="py-24 bg-neutral-900 text-white overflow-hidden scroll-mt-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 mb-4">
            <Cpu size={14} className="text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              Ekosistem Digital Masa Depan
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Mendorong Inovasi di <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Sektor Strategis Garut</span>
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Kami tidak hanya berbicara tentang teknologi canggih, tetapi bagaimana inovasi tersebut dapat memberdayakan potensi lokal Garut agar memiliki nilai tambah tinggi dan daya saing global.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {INNOVATION_SECTORS.map((sector) => (
            <div 
              key={sector.id}
              className="group relative bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 rounded-2xl p-8 hover:bg-neutral-800 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                {/* Icon Box */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {sector.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-neutral-400 mb-6 leading-relaxed text-sm sm:text-base">
                    {sector.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {sector.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-700 text-neutral-300 border border-neutral-600">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex items-center text-sm font-semibold text-primary cursor-pointer hover:underline group/link">
                    Pelajari Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Context */}
        <div className="mt-16 text-center border-t border-neutral-800 pt-10">
          <p className="text-neutral-500 text-sm max-w-2xl mx-auto">
            Inisiatif ini didukung oleh kolaborasi antara Pemerintah Kabupaten Garut, Universitas Lokal, dan Komunitas Startup Jawa Barat untuk mewujudkan visi Garut Smart City 2030.
          </p>
        </div>

      </div>
    </section>
  );
};