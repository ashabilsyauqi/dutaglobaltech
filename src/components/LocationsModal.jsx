import React, { useState, useEffect } from 'react';
import { locationsData as initialLocations } from '../data/locationsData';
import { 
  X, 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  ExternalLink, 
  Navigation,
  Eye,
  Building2,
  Edit3,
  Plus,
  Trash2,
  Save,
  RotateCcw,
  Check
} from 'lucide-react';

const STORAGE_KEY = 'dutaglobaltech_locations_data';

export default function LocationsModal({ isOpen, onClose }) {
  const [locations, setLocations] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialLocations;
    } catch (e) {
      return initialLocations;
    }
  });

  const [activeEmbedId, setActiveEmbedId] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Sync to localStorage whenever locations changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(locations));
    } catch (e) {
      console.error(e);
    }
  }, [locations]);

  if (!isOpen) return null;

  const handleEditClick = (loc) => {
    setEditingItem({ ...loc });
  };

  const handleAddNew = () => {
    const newLoc = {
      id: 'loc-' + Date.now(),
      name: 'Cabang Baru / Workshop Baru',
      tag: 'Cabang Baru',
      status: 'Buka (08:00 - 22:00)',
      statusColor: 'text-emerald-400',
      address: 'Jl. Contoh Alamat No. 1, Jakarta',
      operatingHours: '08:00 - 22:00 WIB',
      phone: '021-1234-5678',
      mapsUrl: 'https://www.google.com/maps',
      embedUrl: 'https://maps.google.com/maps?q=Jakarta&t=&z=15&ie=UTF8&iwloc=&output=embed',
      whatsappText: 'Halo DutaGlobalTech, saya ingin konsultasi layanan.'
    };
    setEditingItem(newLoc);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    if (!editingItem) return;

    // Generate mapsUrl & embedUrl automatically if user changes address and left URLs default
    const formattedQuery = encodeURIComponent(editingItem.address);
    const updated = {
      ...editingItem,
      mapsUrl: editingItem.mapsUrl || `https://www.google.com/maps/search/?api=1&query=${formattedQuery}`,
      embedUrl: `https://maps.google.com/maps?q=${formattedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`
    };

    setLocations((prev) => {
      const exists = prev.some((item) => item.id === updated.id);
      if (exists) {
        return prev.map((item) => (item.id === updated.id ? updated : item));
      } else {
        return [...prev, updated];
      }
    });

    setEditingItem(null);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleDelete = (id) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus lokasi ini?')) {
      setLocations((prev) => prev.filter((item) => item.id !== id));
      if (editingItem && editingItem.id === id) {
        setEditingItem(null);
      }
    }
  };

  const handleResetDefault = () => {
    if (window.confirm('Kembalikan seluruh daftar lokasi ke pengaturan awal?')) {
      setLocations(initialLocations);
      localStorage.removeItem(STORAGE_KEY);
      setEditingItem(null);
      setIsEditMode(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-[#091122] border border-blue-900/70 shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-blue-900/50 bg-[#0c162d]">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🏢</div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Lokasi Workshop & Cabang
                </h3>
                {saveSuccess && (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 animate-pulse">
                    <Check className="w-3 h-3" /> Tersimpan
                  </span>
                )}
              </div>
              <p className="text-[11px] sm:text-xs text-blue-300/70">
                Pilih cabang terdekat untuk rute Google Maps & WhatsApp
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Edit Mode Toggle Button */}
            <button
              onClick={() => {
                setIsEditMode(!isEditMode);
                setEditingItem(null);
              }}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                isEditMode
                  ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                  : 'bg-slate-800/90 text-cyan-300 border-slate-700 hover:bg-slate-700 hover:border-cyan-500'
              }`}
              title="Kelola & Edit Alamat Cabang"
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>{isEditMode ? 'Selesai Edit' : 'Edit Lokasi'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-slate-700"
              aria-label="Tutup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Edit Form Modal Overlay (if an item is being edited) */}
        {editingItem ? (
          <div className="overflow-y-auto p-5 sm:p-6 bg-[#0B1426]">
            <div className="flex items-center justify-between pb-3 border-b border-blue-900/40 mb-4">
              <h4 className="text-sm font-bold text-cyan-300 flex items-center gap-2">
                <Edit3 className="w-4 h-4" />
                <span>Form Edit / Tambah Cabang</span>
              </h4>
              <button
                type="button"
                onClick={() => setEditingItem(null)}
                className="text-xs text-slate-400 hover:text-white"
              >
                Batal
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Nama Cabang / Workshop *</label>
                  <input
                    type="text"
                    required
                    value={editingItem.name}
                    onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-blue-900 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="Contoh: Workshop Snaprint Percetakan Negara (HQ)"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Label Tag Cabang *</label>
                  <input
                    type="text"
                    required
                    value={editingItem.tag}
                    onChange={(e) => setEditingItem({ ...editingItem, tag: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-blue-900 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="Contoh: Pusat Produksi 24 Jam / Cabang Hub Selatan"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Status Buka *</label>
                  <input
                    type="text"
                    required
                    value={editingItem.status}
                    onChange={(e) => setEditingItem({ ...editingItem, status: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-blue-900 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="Contoh: Buka Sekarang / Buka (08:00 - 22:00)"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Nomor Telepon / Hotline *</label>
                  <input
                    type="text"
                    required
                    value={editingItem.phone}
                    onChange={(e) => setEditingItem({ ...editingItem, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-blue-900 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="Contoh: 021-4288-9999 / +62 812-3456-7890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Alamat Lengkap Sesuai Google Maps *</label>
                <textarea
                  rows={2}
                  required
                  value={editingItem.address}
                  onChange={(e) => setEditingItem({ ...editingItem, address: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-blue-900 text-white focus:outline-none focus:border-cyan-400 resize-none"
                  placeholder="Contoh: Jl. Percetakan Negara Raya No. 128, Cempaka Putih, Jakarta Pusat 10570"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Jam Operasional *</label>
                  <input
                    type="text"
                    required
                    value={editingItem.operatingHours}
                    onChange={(e) => setEditingItem({ ...editingItem, operatingHours: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-blue-900 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="Contoh: Buka 24 Jam Non-Stop / 08:00 - 22:00 WIB"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Link Google Maps (Opsional)</label>
                  <input
                    type="url"
                    value={editingItem.mapsUrl}
                    onChange={(e) => setEditingItem({ ...editingItem, mapsUrl: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-blue-900 text-white focus:outline-none focus:border-cyan-400"
                    placeholder="https://maps.google.com/?q=..."
                  />
                </div>
              </div>

              <div className="pt-3 flex items-center justify-end gap-2 border-t border-blue-900/40">
                <button
                  type="button"
                  onClick={() => setEditingItem(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold shadow-lg shadow-cyan-500/20"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Simpan Perubahan</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Modal Body - Location Cards List */
          <div className="overflow-y-auto p-5 sm:p-6 space-y-4">
            
            {/* Top Toolbar in Edit Mode */}
            {isEditMode && (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 flex flex-wrap items-center justify-between gap-2 text-xs animate-fadeIn">
                <span className="text-amber-300 font-medium">
                  🛠️ Mode Edit Aktif: Anda dapat mengubah atau menambah cabang di bawah ini.
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleAddNew}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Tambah Cabang</span>
                  </button>
                  <button
                    onClick={handleResetDefault}
                    className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
                    title="Reset ke pengaturan awal"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            )}

            {locations.map((loc) => {
              const isEmbedActive = activeEmbedId === loc.id;

              return (
                <div
                  key={loc.id}
                  className={`rounded-2xl bg-[#0d1b34] border p-5 transition-all duration-200 shadow-lg relative ${
                    isEditMode ? 'border-amber-500/50 hover:border-amber-400' : 'border-blue-900/60 hover:border-cyan-500/50'
                  }`}
                >
                  {/* Top Status & Badge */}
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/90 text-cyan-300 border border-cyan-800/50">
                      {loc.tag}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>{loc.status}</span>
                      </div>

                      {/* Edit & Delete Action Buttons per card in Edit Mode */}
                      {isEditMode && (
                        <div className="flex items-center gap-1 ml-2 pl-2 border-l border-slate-700">
                          <button
                            onClick={() => handleEditClick(loc)}
                            className="p-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-slate-950 transition-colors"
                            title="Edit Cabang Ini"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete(loc.id)}
                            className="p-1.5 rounded-lg bg-red-500/20 hover:bg-red-500 text-red-300 hover:text-white transition-colors"
                            title="Hapus Cabang Ini"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
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
                      href={`https://wa.me/6281234567890?text=${encodeURIComponent(loc.whatsappText || `Halo, saya ingin konsultasi dengan ${loc.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-brand-400" />
                      <span>Chat WhatsApp</span>
                    </a>

                    {/* Edit Shortcut inside card */}
                    <button
                      onClick={() => handleEditClick(loc)}
                      className="inline-flex items-center gap-1 px-3 py-2.5 rounded-xl text-xs font-semibold text-amber-300 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-700/50 transition-colors"
                      title="Edit Alamat atau Informasi Cabang Ini"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      <span>Edit</span>
                    </button>

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
        )}

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-blue-900/40 bg-[#0c162d] flex items-center justify-between text-xs text-slate-400">
          <span>* Alamat terverifikasi di Google Maps & Street View</span>
          <div className="flex items-center gap-2">
            {!editingItem && !isEditMode && (
              <button
                onClick={() => setIsEditMode(true)}
                className="px-3 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 hover:bg-amber-500 hover:text-slate-950 font-semibold border border-amber-500/40 transition-colors flex items-center gap-1"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Cabang</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold transition-colors"
            >
              Tutup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
