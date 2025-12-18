import React from 'react';
import { Rocket, Users, Coins, ArrowUpRight } from 'lucide-react';

const PROGRAMS = [
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Inkubator Bisnis",
    description: "Program intensif 12 minggu untuk memvalidasi ide, membangun MVP, dan menyusun strategi pasar yang solid."
  },
  {
    icon: <Users className="w-8 h-8 text-secondary" />,
    title: "Mentoring Eksklusif",
    description: "Bimbingan langsung (1-on-1) dengan praktisi bisnis sukses asli Garut dan pakar industri nasional."
  },
  {
    icon: <Coins className="w-8 h-8 text-primary" />,
    title: "Akses Pendanaan",
    description: "Hubungkan startup Anda dengan jaringan investor angel dan venture capital melalui Demo Day tahunan kami."
  }
];

export const Program: React.FC = () => {
  return (
    <section id="program" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">Akselerasi Pertumbuhan</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2 mb-4">Program Unggulan Kami</h2>
          <p className="text-lg text-neutral-600">
            Kurikulum komprehensif yang dirancang khusus untuk membantu wirausaha Garut naik kelas, dari ide hingga ekspansi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROGRAMS.map((program, idx) => (
            <div key={idx} className="group p-8 rounded-2xl border border-gray-100 hover:border-primary/20 bg-neutral-50 hover:bg-white hover:shadow-xl transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-6 h-6 text-primary" />
              </div>
              <div className="mb-6 p-4 bg-white rounded-xl shadow-sm inline-block group-hover:scale-110 transition-transform duration-300">
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">{program.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};