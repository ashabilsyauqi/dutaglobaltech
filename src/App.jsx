import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ErpSection from './components/ErpSection';
import Portfolio from './components/Portfolio';
import Estimator from './components/Estimator';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import LocationsModal from './components/LocationsModal';
import { MessageCircle, PhoneCall, MapPin } from 'lucide-react';

export default function App() {
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0E17] text-slate-100 flex flex-col selection:bg-brand-500 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenLocations={() => setIsLocationsOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Services />
        <ErpSection />
        <Portfolio />
        <Estimator />
        <TechStack />
        <Testimonials />
        <ContactSection onOpenLocations={() => setIsLocationsOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenLocations={() => setIsLocationsOpen(true)} />

      {/* Interactive Google Maps & Branches Modal */}
      <LocationsModal
        isOpen={isLocationsOpen}
        onClose={() => setIsLocationsOpen(false)}
      />

      {/* Floating Quick WhatsApp Button */}
      <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Floating Google Maps Location Shortcut */}
        <button
          onClick={() => setIsLocationsOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#0c162d] text-cyan-300 border border-cyan-700/60 shadow-xl hover:bg-cyan-950 hover:scale-105 transition-all duration-200 text-xs font-bold"
          aria-label="Buka Lokasi & Google Maps"
        >
          <MapPin className="w-4 h-4 text-cyan-400 animate-bounce" />
          <span className="hidden sm:inline-block">Lokasi Google Maps</span>
        </button>

        <a
          href="https://wa.me/6281234567890?text=Halo%20DutaGlobalTech,%20saya%20ingin%20konsultasi%20layanan%20Website%20/%20ERP%20/%20Produk%20Digital."
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-3 p-3.5 sm:px-4 sm:py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-2xl shadow-emerald-500/40 hover:shadow-emerald-500/60 hover:scale-105 transition-all duration-300"
          aria-label="Chat WhatsApp Langsung"
        >
          <div className="w-3 h-3 rounded-full bg-white animate-ping absolute -top-1 -right-1" />
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="hidden sm:inline-block text-xs font-bold tracking-wide">
            Konsultasi WhatsApp
          </span>
        </a>
      </aside>
    </div>
  );
}
