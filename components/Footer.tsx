import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Platform ekosistem kewirausahaan terpadu di Kabupaten Garut. 
              Mendorong pertumbuhan ekonomi lokal melalui inovasi dan kolaborasi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Program</h4>
            <ul className="space-y-3">
              {['Akselerator UMKM', 'Mentoring Bisnis', 'Akses Modal', 'Event Komunitas'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-neutral-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0" />
                <span>Jl. Patriot No. 12, Tarogong Kidul,<br/>Kabupaten Garut, Jawa Barat 44151</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:halo@wirahebatgarut.id" className="hover:text-white">halo@wirahebatgarut.id</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Ikuti Kami</h4>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-white"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-neutral-500">
              Dukung terus UMKM Lokal. #GarutBangkit
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Wira Hebat Garut. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Kebijakan Privasi</a>
            <a href="#" className="hover:text-white">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  );
};