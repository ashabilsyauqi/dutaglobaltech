import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  Send, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  HelpCircle, 
  Layers
} from 'lucide-react';

const projectTypes = [
  { id: 'web-company', name: 'Website Company Profile & Landing Page', basePrice: 4500000, baseWeeks: 1.5 },
  { id: 'web-ecommerce', name: 'Website E-Commerce & Toko Online', basePrice: 9500000, baseWeeks: 3 },
  { id: 'web-saas', name: 'Web Application / SaaS Portal Kustom', basePrice: 16000000, baseWeeks: 4 },
  { id: 'erp-starter', name: 'Sistem ERP Standar (Keuangan + Stok)', basePrice: 22000000, baseWeeks: 5 },
  { id: 'erp-enterprise', name: 'Sistem ERP Full Enterprise Multi-Cabang', basePrice: 38000000, baseWeeks: 8 },
  { id: 'mobile-app', name: 'Aplikasi Mobile (Android & iOS Flutter)', basePrice: 18000000, baseWeeks: 5 }
];

const addOnFeatures = [
  { id: 'multi-branch', name: 'Integrasi Multi-Cabang & Multi-Gudang', price: 4000000, addWeeks: 1 },
  { id: 'payment-gateway', name: 'Payment Gateway (QRIS, VA, E-Wallet)', price: 2000000, addWeeks: 0.5 },
  { id: 'payroll-hrms', name: 'Modul HRMS & Payroll Karyawan Otomatis', price: 4500000, addWeeks: 1 },
  { id: 'whatsapp-bot', name: 'Integrasi Notifikasi & Bot WhatsApp API', price: 2500000, addWeeks: 0.5 },
  { id: 'sales-crm', name: 'Modul Sales Pipeline & CRM Interaktif', price: 3500000, addWeeks: 1 },
  { id: 'cloud-dedicated', name: 'Setup Cloud Server Dedicated & SSL WAF', price: 3000000, addWeeks: 0.5 }
];

export default function Estimator() {
  const [selectedType, setSelectedType] = useState(projectTypes[3].id);
  const [selectedAddons, setSelectedAddons] = useState(['multi-branch', 'payment-gateway']);
  const [timelineSpeed, setTimelineSpeed] = useState('normal'); // 'normal' | 'express'

  const currentType = projectTypes.find((t) => t.id === selectedType) || projectTypes[0];

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  // Calculations
  const addonsTotal = selectedAddons.reduce((sum, id) => {
    const item = addOnFeatures.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const addonsWeeks = selectedAddons.reduce((sum, id) => {
    const item = addOnFeatures.find((a) => a.id === id);
    return sum + (item ? item.addWeeks : 0);
  }, 0);

  const rawPrice = currentType.basePrice + addonsTotal;
  const rawWeeks = currentType.baseWeeks + addonsWeeks;

  const finalWeeks = timelineSpeed === 'express' ? Math.max(1, Math.round(rawWeeks * 0.7)) : Math.round(rawWeeks);

  const formatIDR = (val) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const selectedAddonNames = selectedAddons
    .map((id) => addOnFeatures.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .join(', ');

  const waMessage = `Halo DutaGlobalTech,%0A%0ASaya ingin konsultasi penawaran proyek berdasarkan Estimasi Website:%0A- *Tipe Proyek*: ${encodeURIComponent(currentType.name)}%0A- *Fitur Tambahan*: ${encodeURIComponent(selectedAddonNames || 'Standar')}%0A- *Estimasi Timeline*: ~${finalWeeks} Minggu%0A- *Perkiraan Anggaran*: Mulai ${encodeURIComponent(formatIDR(rawPrice))}%0A%0AMohon info jadwal konsultasi & penawaran resmi. Terima kasih!`;

  return (
    <section id="estimator" className="py-20 relative bg-slate-950/70 border-y border-slate-800/80">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-brand-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Kalkulator Transparan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Hitung Estimasi Proyek <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-brand-400 to-cyan-400">
              Sesuai Kebutuhan Bisnis Anda
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Pilih skala sistem dan modul yang Anda perlukan untuk mendapatkan gambaran anggaran serta durasi pengerjaan.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Form / Selectors */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* 1. Project Type Selector */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                1. Pilih Jenis Layanan / Skala Proyek:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectTypes.map((type) => {
                  const isSelected = type.id === selectedType;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? 'bg-brand-500/10 border-brand-400 shadow-md shadow-brand-500/10'
                          : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <span className={`text-xs sm:text-sm font-bold leading-snug ${isSelected ? 'text-brand-300' : 'text-white'}`}>
                          {type.name}
                        </span>
                        {isSelected && (
                          <div className="w-4 h-4 rounded-full bg-brand-500 text-slate-950 flex items-center justify-center flex-shrink-0 ml-2">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        )}
                      </div>
                      <div className="mt-2 text-xs font-mono text-slate-400">
                        Mulai dari {formatIDR(type.basePrice)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Add-on Features */}
            <div>
              <label className="block text-sm font-bold text-white mb-3">
                2. Pilih Modul Tambahan / Integrasi Khusus (Opsional):
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {addOnFeatures.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                        isChecked
                          ? 'bg-cyan-500/10 border-cyan-400/80 shadow-sm'
                          : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="pr-2">
                        <div className={`text-xs font-semibold ${isChecked ? 'text-cyan-300' : 'text-slate-200'}`}>
                          {addon.name}
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                          +{formatIDR(addon.price)}
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 border ${
                        isChecked
                          ? 'bg-cyan-500 border-cyan-400 text-slate-950'
                          : 'border-slate-700 bg-slate-800'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Column: Output Summary Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-700/80 p-6 sm:p-8 shadow-2xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-xs font-mono text-brand-400 font-bold uppercase">Ringkasan Estimasi</span>
                  <h3 className="text-xl font-bold text-white">Rincian Paket Proyek</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Selected Base */}
              <div className="space-y-4 text-xs sm:text-sm mb-6">
                <div className="flex justify-between items-start text-slate-300">
                  <span>Layanan Utama:</span>
                  <span className="font-bold text-white text-right max-w-[60%]">{currentType.name}</span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span>Modul Tambahan:</span>
                  <span className="font-mono text-cyan-300">{selectedAddons.length} Modul Terpilih</span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>Estimasi Waktu:</span>
                  </span>
                  <span className="font-bold text-amber-300 font-mono">
                    ~ {finalWeeks} Minggu Kerja
                  </span>
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="p-5 rounded-2xl bg-slate-950 border border-brand-500/30 text-center mb-6">
                <span className="text-xs font-semibold text-slate-400">Estimasi Anggaran Mulai Dari</span>
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-teal-300 my-1 font-mono">
                  {formatIDR(rawPrice)}
                </div>
                <span className="text-[11px] text-slate-400 block">
                  *Termasuk Source Code, Garansi Bug 6 Bulan & Setup Cloud Server
                </span>
              </div>

              {/* Guarantees */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <span>Garansi Bebas Bug & SLA Maintenance</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-brand-400 flex-shrink-0" />
                  <span>100% Hak Cipta & Source Code diserahkan penuh</span>
                </div>
              </div>

              {/* Action Button to WhatsApp */}
              <a
                href={`https://wa.me/6281234567890?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-500 to-emerald-600 hover:from-brand-400 hover:to-emerald-500 shadow-xl shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-200"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Estimasi & Konsultasi ke WhatsApp</span>
              </a>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
