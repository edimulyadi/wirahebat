import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { Logo } from './Logo';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Program Wira', href: '#program' },
  { label: 'Inovasi', href: '#inovasi' },
  { label: 'Kisah Hebat', href: '#kisah' },
  { label: 'Tentang Kami', href: '#tentang' },
];

interface NavbarProps {
  onLogin: () => void;
  onAdminLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLogin, onAdminLogin }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <a href="#" className="flex-shrink-0 hover:opacity-90 transition-opacity">
            <Logo variant="dark" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-neutral-600 hover:text-primary font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
                <Button variant="ghost" size="sm" onClick={onAdminLogin} className="text-xs text-neutral-500">
                    Admin
                </Button>
                <Button variant="primary" size="sm" onClick={onLogin}>
                    Masuk / Daftar
                </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-neutral-600 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-neutral-700 hover:text-primary hover:bg-neutral-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 px-3 flex flex-col gap-2">
              <Button variant="primary" fullWidth onClick={() => {
                setIsOpen(false);
                onLogin();
              }}>
                Masuk Member
              </Button>
              <Button variant="outline" fullWidth onClick={() => {
                setIsOpen(false);
                onAdminLogin();
              }}>
                Masuk Admin
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};