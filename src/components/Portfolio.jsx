import React, { useState } from 'react';
import { portfolioCategories, portfolioProjects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  Briefcase, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  Building2, 
  ChevronRight,
  Eye
} from 'lucide-react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = selectedCategory === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Rekam Jejak Keberhasilan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Portofolio Proyek & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400">
              Studi Kasus Klien
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Jelajahi berbagai sistem ERP, portal web aplikasi, dan produk digital yang telah kami bangun dan terapkan dengan sukses di berbagai industri.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {portfolioCategories.map((cat) => {
            const isSelected = cat.id === selectedCategory;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isSelected
                    ? 'bg-brand-500 text-slate-950 border-brand-400 shadow-lg shadow-brand-500/20 font-bold'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-brand-500/10 cursor-pointer"
              onClick={() => setActiveProject(project)}
            >
              {/* Project Image & Overlay */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                
                {/* Badge Top Left */}
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-brand-400 border border-brand-500/30">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Metric Top Right */}
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-brand-500/20 backdrop-blur-md text-brand-300 border border-brand-500/40">
                    {project.metrics}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-white font-semibold text-sm">
                  <Eye className="w-5 h-5 text-brand-400" />
                  <span>Lihat Studi Kasus</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2">
                    <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="truncate">{project.client}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 mb-4 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 4).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-slate-400 border border-slate-700/60">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Button Trigger */}
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-brand-400 group-hover:text-brand-300">
                    <span>Detail Studi Kasus</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA below Portfolio */}
        <div className="mt-14 text-center p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 max-w-4xl mx-auto shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Punya Kebutuhan Sistem atau Website Kustom untuk Bisnis Anda?
          </h3>
          <p className="text-sm text-slate-300 mb-6 max-w-2xl mx-auto">
            Diskusikan alur bisnis Anda bersama tim Technical Consultant DutaGlobalTech secara gratis tanpa komitmen.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20DutaGlobalTech,%20saya%20ingin%20konsultasi%20pembuatan%20sistem%20proyek%20baru."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-400 hover:to-emerald-500 shadow-lg shadow-brand-500/25"
          >
            <span>Mulai Konsultasi Proyek Baru</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

      {/* Case Study Modal Popup */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
