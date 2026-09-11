import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Menu, 
  X, 
  ChevronRight, 
  PhoneCall, 
  Layers, 
  Sparkles,
  Globe,
  Boxes,
  Briefcase
} from 'lucide-react';

export default function Navbar({ onOpenContact, onOpenLocations }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#hero' },
    { name: 'Layanan & Produk', href: '#services' },
    { name: 'Solusi ERP', href: '#erp' },
    { name: 'Portofolio', href: '#portfolio' },
    { name: 'Estimasi Biaya', href: '#estimator' },
    { name: 'Tentang Kami', href: '#tech-stack' },
    { name: 'Kontak', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0A0E17]/90 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-emerald-500 to-cyan-400 p-[2px] shadow-lg shadow-brand-500/20 group-hover:shadow-brand-500/40 transition-all">
              <div className="w-full h-full bg-[#0A0E17] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-300 text-lg">
                  D
                </span>
                <span className="text-white font-bold text-xs -ml-0.5">GT</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-tight text-white group-hover:text-brand-400 transition-colors">
                  DutaGlobal<span className="text-brand-400">Tech</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  .com
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                Digital & Enterprise ERP Solutions
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/60 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-2.5">
            {onOpenLocations && (
              <button
                onClick={onOpenLocations}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-cyan-300 bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-700/60 transition-all shadow-sm"
              >
                <span>📍 Lokasi & Maps</span>
              </button>
            )}

            <a
              href="https://wa.me/6281234567890?text=Halo%20DutaGlobalTech,%20saya%20tertarik%20konsultasi%20layanan%20IT%20/%20ERP%20/%20Website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-400 hover:to-emerald-500 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Konsultasi</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 px-4 sm:px-6 animate-fadeIn">
          <div className="p-4 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-2xl flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-brand-400 hover:bg-slate-800/60 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 mt-1 space-y-2">
              {onOpenLocations && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLocations();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-950/90 border border-cyan-800/80 hover:bg-cyan-900 shadow-md"
                >
                  <span>📍 Lokasi Kantor & Cabang Google Maps</span>
                </button>
              )}
              <a
                href="https://wa.me/6281234567890?text=Halo%20DutaGlobalTech,%20saya%20tertarik%20konsultasi%20layanan%20IT%20/%20ERP%20/%20Website."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-400 hover:to-emerald-500 shadow-lg shadow-brand-500/20"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Konsultasi WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
