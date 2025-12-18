import React from 'react';
import { Users, Briefcase, Lightbulb, TrendingUp } from 'lucide-react';
import { Statistic } from '../types';

const STATS: Statistic[] = [
  { id: 1, value: "350+", label: "Inovator Bergabung", icon: <Users className="w-6 h-6 text-primary" /> },
  { id: 2, value: "80+", label: "Startup Binaan", icon: <Briefcase className="w-6 h-6 text-secondary" /> },
  { id: 3, value: "50", label: "Program Pelatihan", icon: <Lightbulb className="w-6 h-6 text-primary" /> },
  { id: 4, value: "Rp 2M+", label: "Pendanaan Tersalurkan", icon: <TrendingUp className="w-6 h-6 text-secondary" /> },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-white relative -mt-10 z-20 mx-4 md:mx-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {STATS.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center text-center p-4">
                <div className="mb-4 p-3 bg-neutral-50 rounded-full">
                  {stat.icon}
                </div>
                <span className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};