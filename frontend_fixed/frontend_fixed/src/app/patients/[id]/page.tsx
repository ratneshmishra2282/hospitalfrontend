'use client';

import React from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { 
  ArrowLeft, 
  Edit3, 
  Printer, 
  FilePlus, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  Heart,
  Activity,
  Droplet
} from 'lucide-react';
import { PatientTimeline } from '@/components/patient/timeline';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function PatientProfilePage() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        {/* Back and Actions */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/patients" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-bold">
            <ArrowLeft size={18} />
            <span>Back to Directory</span>
          </Link>
          <div className="flex gap-3">
            <button className="bg-white p-3 rounded-xl shadow-sm text-secondary hover:text-primary transition-colors">
              <Printer size={20} />
            </button>
            <button className="bg-white p-3 rounded-xl shadow-sm text-secondary hover:text-primary transition-colors">
              <Edit3 size={20} />
            </button>
            <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
              <FilePlus size={20} />
              <span>New Encounter</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Patient Profile Card */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface-container-lowest p-8 rounded-2xl shadow-premium text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-24 bg-primary/5" />
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-surface-container-lowest border-4 border-surface mx-auto mb-4 flex items-center justify-center text-primary font-black text-3xl shadow-sm">
                  ER
                </div>
                <h2 className="text-2xl font-black text-on-surface font-display">Elena Rodriguez</h2>
                <p className="text-secondary font-bold uppercase tracking-widest text-xs mt-1">MRN: PT-8921</p>
                
                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="bg-surface p-3 rounded-xl">
                    <p className="text-[10px] text-secondary font-black uppercase tracking-tighter">Age</p>
                    <p className="text-sm font-bold text-on-surface">42 Y</p>
                  </div>
                  <div className="bg-surface p-3 rounded-xl">
                    <p className="text-[10px] text-secondary font-black uppercase tracking-tighter">Gender</p>
                    <p className="text-sm font-bold text-on-surface">Female</p>
                  </div>
                  <div className="bg-surface p-3 rounded-xl">
                    <p className="text-[10px] text-secondary font-black uppercase tracking-tighter">Blood</p>
                    <p className="text-sm font-bold text-on-surface text-tertiary">O+</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vitals Summary */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-surface-container-lowest p-6 rounded-2xl shadow-premium"
            >
              <h3 className="font-display font-bold text-on-surface mb-6 flex items-center gap-2">
                <Heart size={18} className="text-tertiary" />
                <span>Last Vitals</span>
              </h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/5 text-primary rounded-lg">
                      <Activity size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-secondary font-bold uppercase tracking-tighter">Blood Pressure</p>
                      <p className="text-sm font-black text-on-surface">120/80 <span className="text-[10px] font-medium text-secondary">mmHg</span></p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-black uppercase tracking-widest">Normal</span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-tertiary/10 text-tertiary rounded-lg">
                      <Droplet size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-secondary font-bold uppercase tracking-tighter">SpO2</p>
                      <p className="text-sm font-black text-on-surface">98 <span className="text-[10px] font-medium text-secondary">%</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-surface-container-low/50 p-6 rounded-2xl"
            >
              <h3 className="font-display font-bold text-on-surface mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-secondary">
                  <Phone size={16} />
                  <span className="text-sm font-medium">+1 555-0123</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <Mail size={16} />
                  <span className="text-sm font-medium">elena.r@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-secondary">
                  <MapPin size={16} />
                  <span className="text-sm font-medium leading-tight">123 Clinical Way, Medical District, NY 10001</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-2">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-surface p-2 rounded-2xl"
            >
              <div className="flex justify-between items-center mb-8 px-4">
                <h3 className="font-display text-2xl font-black text-on-surface">Medical Timeline</h3>
                <div className="flex gap-2">
                  <button className="text-xs font-bold text-primary bg-primary/5 px-3 py-1.5 rounded-full">All Events</button>
                  <button className="text-xs font-bold text-secondary hover:bg-surface-container-low px-3 py-1.5 rounded-full transition-colors">Encounters</button>
                  <button className="text-xs font-bold text-secondary hover:bg-surface-container-low px-3 py-1.5 rounded-full transition-colors">Lab Results</button>
                </div>
              </div>
              
              <PatientTimeline />
            </motion.div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
