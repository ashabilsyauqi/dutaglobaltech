import React, { useState } from 'react';
import { locationsData } from '../data/locationsData';
import { 
  X, 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  ExternalLink, 
  Navigation,
  Eye,
  Building2
} from 'lucide-react';

export default function LocationsModal({ isOpen, onClose }) {
  const [activeEmbedId, setActiveEmbedId] = useState(null);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#091122] border border-blue-900/60 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-blue-900/40 bg-[#0c162d]">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🏢</div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Lokasi Kantor & Cabang DutaGlobalTech
              </h3>
              <p className="text-xs text-blue-300/70">
                Pilih cabang terdekat untuk rute Google Maps & konsultasi langsung
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
            aria-label="Tutup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body - Location Cards */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-4">
          {locationsData.map((loc) => {
            const isEmbedActive = activeEmbedId === loc.id;

            return (
              <div
                key={loc.id}
                className="rounded-2xl bg-[#0d1b34] border border-blue-900/60 p-5 hover:border-cyan-500/50 transition-all duration-200 shadow-lg relative"
              >
                {/* Top Status & Badge */}
                <div className="flex items-center justify-between mb-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/90 text-cyan-300 border border-cyan-800/50">
                    {loc.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{loc.status}</span>
                  </div>
                </div>

                {/* Location Title */}
                <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">
                  {loc.name}
                </h4>

                {/* Real Address */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </p>

                {/* Hours & Phone */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-300 font-medium mb-4 pb-3 border-b border-blue-900/40">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm">⏰</span>
                    <span>{loc.operatingHours}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-cyan-300">
                    <span className="text-sm">📞</span>
                    <span>{loc.phone}</span>
                  </div>
                </div>

                {/* Interactive Map Embed Preview */}
                {isEmbedActive && (
                  <div className="mb-4 rounded-xl overflow-hidden border border-cyan-500/40 shadow-inner h-56 animate-fadeIn">
                    <iframe
                      title={`Peta ${loc.name}`}
                      src={loc.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {/* Buka Google Maps Button */}
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all duration-200"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Buka Google Maps</span>
                    <ExternalLink className="w-3 h-3 opacity-80" />
                  </a>

                  {/* Chat WhatsApp Button */}
                  <a
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(loc.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-brand-400" />
                    <span>Chat WhatsApp</span>
                  </a>

                  {/* Toggle Map View */}
                  <button
                    onClick={() => setActiveEmbedId(isEmbedActive ? null : loc.id)}
                    className="inline-flex items-center gap-1 px-3 py-2.5 rounded-xl text-xs font-medium text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50 transition-colors ml-auto"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isEmbedActive ? 'Tutup Peta' : 'Pratinjau Peta'}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-blue-900/40 bg-[#0c162d] flex items-center justify-between text-xs text-slate-400">
          <span>* Alamat terverifikasi di Google Maps & Street View</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
}
