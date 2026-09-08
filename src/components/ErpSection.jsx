import React, { useState } from 'react';
import { erpModules } from '../data/erpModulesData';
import { 
  BadgeDollarSign, 
  Boxes, 
  Users, 
  TrendingUp, 
  Factory, 
  Receipt, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Layers
} from 'lucide-react';

const iconMap = {
  BadgeDollarSign: BadgeDollarSign,
  Boxes: Boxes,
  Users: Users,
  TrendingUp: TrendingUp,
  Factory: Factory,
  Receipt: Receipt
};

export default function ErpSection() {
  const [activeTab, setActiveTab] = useState(erpModules[0].id);

  const currentModule = erpModules.find((m) => m.id === activeTab) || erpModules[0];
  const CurrentIcon = iconMap[currentModule.icon] || Boxes;

  return (
    <section id="erp" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      {/* Glow highlight */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Sistem Manajemen Enterprise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Solusi ERP Kustom untuk <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-brand-400">
              Otomasi Operasional Bisnis
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Hilangkan silo data antar divisi, pantau stok realtime dari multi-cabang, dan dapatkan laporan keuangan presisi dalam hitungan detik.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {erpModules.map((mod) => {
            const TabIcon = iconMap[mod.icon] || Boxes;
            const isActive = mod.id === activeTab;
            return (
              <button
                key={mod.id}
                onClick={() => setActiveTab(mod.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-500 to-teal-600 text-white border-brand-400 shadow-lg shadow-brand-500/20 scale-[1.02]'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{mod.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Module Showcase Card */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">Modul ERP Terintegrasi</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{currentModule.name}</h3>
                </div>
              </div>

              <p className="text-base text-slate-300 leading-relaxed font-medium">
                {currentModule.tagline}
              </p>

              {/* Metric Callout */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-brand-500/30 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-brand-400 flex-shrink-0" />
                <span className="text-sm font-semibold text-brand-300">
                  {currentModule.highlightMetric}
                </span>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentModule.details.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-800/40 border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA Action */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={`https://wa.me/6281234567890?text=Halo%20DutaGlobalTech,%20saya%20ingin%20jadwalkan%20Live%20Demo%20Sistem%20ERP%20Modul%20${encodeURIComponent(currentModule.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-500 to-brand-500 hover:from-cyan-400 hover:to-brand-400 shadow-lg shadow-brand-500/20 transition-all duration-200"
                >
                  <span>Jadwalkan Live Demo ERP</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#estimator"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
                >
                  <span>Kalkulasi Kebutuhan Modul</span>
                </a>
              </div>

            </div>

            {/* Right Column: Visual Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
                <img
                  src={currentModule.previewImage}
                  alt={currentModule.name}
                  className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Arsitektur Sistem:</span>
                    <span className="text-brand-400 font-mono font-semibold">PostgreSQL • Microservices</span>
                  </div>
                  <div className="text-xs text-slate-300 font-medium">
                    Mendukung Multi-User Role, Multi-Branch & Dashboard Analisis Eksekutif.
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
