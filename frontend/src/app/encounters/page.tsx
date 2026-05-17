'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/main-layout';
import { 
  Stethoscope, 
  Activity, 
  Pill, 
  Beaker, 
  Save, 
  X,
  Plus,
  ArrowRight,
  Heart,
  Thermometer,
  Wind
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const MOCK_MEDICINES = [
  { id: 'm1', name: 'Amoxicillin 500mg', type: 'Capsule' },
  { id: 'm2', name: 'Paracetamol 650mg', type: 'Tablet' },
  { id: 'm3', name: 'Lisinopril 10mg', type: 'Tablet' },
  { id: 'm4', name: 'Metformin 500mg', type: 'Tablet' },
];

export default function EncounterBuilder() {
  const [activeTab, setActiveTab] = useState('vitals');
  
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        {/* Encounter Header */}
        <header className="mb-8 flex justify-between items-center bg-surface-container-lowest p-6 rounded-2xl shadow-premium">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-xl">
              ER
            </div>
            <div>
              <div className="flex items-center gap-3">
                <Link href="/patients/PT-8921" className="font-display text-2xl font-black text-on-surface hover:text-primary transition-colors">Elena Rodriguez</Link>
                <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-black uppercase tracking-widest">In-Progress</span>
              </div>
              <p className="text-secondary font-medium">MRN: PT-8921 • 42 Y • Female • O+</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-2 rounded-xl font-bold text-secondary hover:bg-surface-container-low transition-colors">Discard</button>
            <button className="bg-primary text-white px-8 py-2 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
              <Save size={18} />
              <span>Sign Encounter</span>
            </button>
          </div>
        </header>

        {/* Builder Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Tabs */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'vitals', label: 'Vitals & Measurements', icon: Activity },
              { id: 'notes', label: 'Clinical Notes (SOAP)', icon: Stethoscope },
              { id: 'prescription', label: 'Prescription Builder', icon: Pill },
              { id: 'lab', label: 'Lab & Diagnostics', icon: Beaker },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-4 rounded-xl transition-all duration-200 text-left",
                  activeTab === tab.id 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-secondary hover:bg-surface-container-low hover:text-primary"
                )}
              >
                <tab.icon size={20} />
                <span className="font-bold text-sm font-display">{tab.label}</span>
                {activeTab === tab.id && <ArrowRight size={16} className="ml-auto" />}
              </button>
            ))}
          </div>

          {/* Form Content */}
          <div className="lg:col-span-3">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-premium min-h-[500px]"
            >
              {activeTab === 'vitals' && (
                <div className="space-y-8">
                  <h3 className="font-display text-xl font-black text-on-surface mb-6">Patient Vitals</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-xs font-black text-secondary uppercase tracking-widest pl-1">Blood Pressure (mmHg)</label>
                      <div className="flex gap-2">
                        <input type="text" placeholder="120" className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 text-center font-black text-xl outline-none focus:ring-2 focus:ring-primary/10 transition-all" />
                        <span className="flex items-center font-black text-secondary">/</span>
                        <input type="text" placeholder="80" className="w-full bg-surface-container-low border-none rounded-xl py-4 px-4 text-center font-black text-xl outline-none focus:ring-2 focus:ring-primary/10 transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-secondary uppercase tracking-widest pl-1">Heart Rate (bpm)</label>
                      <div className="relative">
                        <Heart className="absolute left-4 top-1/2 -translate-y-1/2 text-tertiary/40" />
                        <input type="text" placeholder="72" className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-4 font-black text-xl outline-none focus:ring-2 focus:ring-primary/10 transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-secondary uppercase tracking-widest pl-1">Temperature (°C)</label>
                      <div className="relative">
                        <Thermometer className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-400/40" />
                        <input type="text" placeholder="36.5" className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-4 font-black text-xl outline-none focus:ring-2 focus:ring-primary/10 transition-all" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-secondary uppercase tracking-widest pl-1">SpO2 (%)</label>
                      <div className="relative">
                        <Wind className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400/40" />
                        <input type="text" placeholder="98" className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-4 font-black text-xl outline-none focus:ring-2 focus:ring-primary/10 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notes' && (
                <div className="space-y-6">
                  <h3 className="font-display text-xl font-black text-on-surface">Clinical Notes</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-[10px] font-black text-primary uppercase tracking-widest pl-1">Subjective (Symptoms)</label>
                      <textarea placeholder="e.g. Patient complains of chest pain for 2 days..." className="w-full bg-surface-container-low border-none rounded-xl p-4 mt-2 h-24 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none"></textarea>
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-secondary uppercase tracking-widest pl-1">Objective (Findings)</label>
                      <textarea placeholder="e.g. Tenderness on palpation, no swelling..." className="w-full bg-surface-container-low border-none rounded-xl p-4 mt-2 h-24 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none"></textarea>
                    </div>
                    <div>
                      <label className="text-[10px] font-black text-secondary uppercase tracking-widest pl-1">Assessment (Diagnosis)</label>
                      <textarea placeholder="e.g. Suspected acute bronchitis..." className="w-full bg-surface-container-low border-none rounded-xl p-4 mt-2 h-20 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/10 transition-all resize-none"></textarea>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'prescription' && (
                <div className="space-y-6">
                   <div className="flex justify-between items-center mb-6">
                    <h3 className="font-display text-xl font-black text-on-surface">Prescription Builder</h3>
                    <button className="text-primary text-xs font-black uppercase tracking-widest bg-primary/5 px-4 py-2 rounded-full flex items-center gap-2">
                      <Plus size={14} />
                      <span>Add Medicine</span>
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="relative">
                      <input type="text" placeholder="Search pharmacy catalog..." className="w-full bg-surface-container-low border-none rounded-xl py-3 pl-10 pr-4 text-sm font-medium outline-none focus:ring-2 focus:ring-primary/10 transition-all" />
                      <Pill className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/30" size={18} />
                    </div>
                    
                    <div className="divide-y divide-on-surface/5 bg-surface p-4 rounded-xl">
                      {MOCK_MEDICINES.slice(0, 2).map((med) => (
                        <div key={med.id} className="py-4 flex justify-between items-center group">
                          <div>
                            <p className="font-bold text-on-surface group-hover:text-primary transition-colors">{med.name}</p>
                            <p className="text-[10px] text-secondary font-medium">{med.type} • Twice daily • After meals</p>
                          </div>
                          <button className="text-secondary/20 hover:text-error transition-colors">
                            <X size={18} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'lab' && (
                 <div className="space-y-6 text-center py-12">
                   <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-4 text-secondary/20">
                    <Beaker size={40} />
                  </div>
                  <h3 className="font-display text-xl font-black text-on-surface">Laboratory Orders</h3>
                  <p className="text-secondary max-w-xs mx-auto text-sm">Select tests from the catalog to add them to this clinical encounter.</p>
                  <button className="mt-6 bg-secondary text-white px-6 py-2 rounded-xl font-bold text-sm">Open Lab Catalog</button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
