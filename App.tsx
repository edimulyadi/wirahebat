import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Program } from './components/Program';
import { Innovation } from './components/Innovation';
import { Stories } from './components/Stories';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Dashboard } from './components/Dashboard';
import { AdminDashboard } from './components/AdminDashboard';

type ViewState = 'landing' | 'learner' | 'admin';

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  // Handle Member Login
  const handleLogin = () => {
    setCurrentView('learner');
    window.scrollTo(0, 0);
  };

  // Handle Admin Login
  const handleAdminLogin = () => {
    setCurrentView('admin');
    window.scrollTo(0, 0);
  };

  // Handle Logout (returns to landing)
  const handleLogout = () => {
    setCurrentView('landing');
    window.scrollTo(0, 0);
  };

  // Render Views based on state
  if (currentView === 'learner') {
    return <Dashboard onLogout={handleLogout} />;
  }

  if (currentView === 'admin') {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  // Default: Landing Page
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Header with Login Options */}
      <Navbar onLogin={handleLogin} onAdminLogin={handleAdminLogin} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Floating Stats Section */}
        <Stats />
        
        {/* Program Section (Baru: #program) */}
        <Program />

        {/* Innovation Section (Baru: #inovasi) */}
        <Innovation />
        
        {/* Success Stories Section (#kisah) */}
        <Stories />
        
        {/* About Us Section (Baru: #tentang) */}
        <About />
        
        {/* Call to Action Section (Secondary) */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Siap Menjadi Bagian dari Perubahan?
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Jangan biarkan ide hebatmu hanya menjadi wacana. Bergabunglah dengan ratusan wirausahawan Garut lainnya sekarang juga.
            </p>
            <button 
              onClick={handleLogin}
              className="bg-white text-primary font-bold py-4 px-10 rounded-xl shadow-xl hover:bg-gray-50 hover:scale-105 transition-all duration-200 text-lg"
            >
              Daftar Gratis Sekarang
            </button>
            <p className="mt-6 text-sm text-blue-200 opacity-80">
              *Pendaftaran Gelombang 2 ditutup 31 Desember 2024
            </p>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;