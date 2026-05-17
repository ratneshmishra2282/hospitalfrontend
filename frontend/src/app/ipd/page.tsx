'use client';

import React from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { 
  Bed, 
  Map as MapIcon, 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const MOCK_WARDS = [
  {
    id: 'icu',
    name: 'Intensive Care Unit (ICU)',
    stats: '14 / 16 OCCUPIED',
    color: 'primary',
    beds: [
      { id: 'ICU-01', patient: 'Arthur Morgan', pid: '29402-A', status: 'Occupied', doctor: 'Dr. Adler', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100' },
      { id: 'ICU-02', patient: 'Sarah Connor', pid: '10443-C', status: 'Occupied', doctor: 'Dr. Strange', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100' },
      { id: 'ICU-03', patient: null, pid: null, status: 'Available', doctor: null, avatar: null },
      { id: 'ICU-04', patient: 'Sanitizing', pid: null, status: 'Cleaning', doctor: null, avatar: null },
    ]
  },
  {
    id: 'gw-east',
    name: 'General Ward - East Wing',
    stats: '32 / 48 OCCUPIED',
    color: 'secondary',
    beds: [
      { id: 'GW-101', patient: 'James Wilson', pid: '88219-B', status: 'Occupied', doctor: 'Dr. House', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100' },
      { id: 'GW-102', patient: 'Maria Garcia', pid: '77210-D', status: 'Occupied', doctor: 'Dr. Cuddy', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100' },
      { id: 'GW-103', patient: null, pid: null, status: 'Available', doctor: null, avatar: null },
      { id: 'GW-104', patient: 'Robert Chen', pid: '12942-F', status: 'Occupied', doctor: 'Dr. Chase', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100' },
    ]
  }
];

export default function IPDPage() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <section className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-on-surface tracking-tight leading-none mb-2 font-display">IPD Bed Management</h1>
            <p className="text-secondary font-medium">Real-time floor occupancy and facility status</p>
          </div>
          <div className="flex gap-3">
            <div className="flex bg-surface-container-high/40 p-1 rounded-full">
              <button className="px-6 py-2 bg-white rounded-full text-xs font-bold shadow-sm">Grid View</button>
              <button className="px-6 py-2 text-xs font-bold text-secondary">List View</button>
            </div>
            <button className="bg-primary text-white px-6 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg hover:shadow-primary/20 transition-all">
              <MapIcon size={16} />
              <span>Floor Map</span>
            </button>
          </div>
        </section>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-premium">
            <p className="text-[10px] font-black text-secondary tracking-widest uppercase mb-4">Total Capacity</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-on-surface font-display">248</span>
              <span className="text-secondary text-sm font-bold">Beds</span>
            </div>
            <div className="mt-4 w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '82%' }}
                transition={{ duration: 1 }}
                className="bg-primary h-full"
              ></motion.div>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-premium">
            <p className="text-[10px] font-black text-secondary tracking-widest uppercase mb-4">Available</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-primary font-display">42</span>
              <span className="text-secondary text-sm font-bold">Beds</span>
            </div>
            <div className="mt-4 flex gap-1">
              {[1, 1, 0.5, 0].map((v, i) => (
                <div key={i} className={cn("h-1.5 w-full rounded-full", v === 1 ? "bg-primary" : v === 0.5 ? "bg-primary/30" : "bg-surface-container-high")} />
              ))}
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-premium">
            <p className="text-[10px] font-black text-secondary tracking-widest uppercase mb-4">In Cleaning</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-tertiary font-display">12</span>
              <span className="text-secondary text-sm font-bold">Rooms</span>
            </div>
            <p className="mt-4 text-[10px] text-tertiary font-black uppercase tracking-tighter">Avg turn: 24 mins</p>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-premium">
            <p className="text-[10px] font-black text-secondary tracking-widest uppercase mb-4">Maintenance</p>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-black text-secondary font-display">06</span>
              <span className="text-secondary text-sm font-bold">Pending</span>
            </div>
            <button className="mt-4 text-[10px] text-primary font-black uppercase tracking-tight hover:underline">View Schedule →</button>
          </div>
        </div>

        {/* Wards Sections */}
        <div className="space-y-12">
          {MOCK_WARDS.map((ward) => (
            <section key={ward.id}>
              <div className="flex items-center gap-4 mb-6">
                <div className={cn("w-1.5 h-8 rounded-full", ward.color === 'primary' ? "bg-primary" : "bg-secondary")} />
                <h3 className="text-2xl font-black tracking-tight text-on-surface font-display">{ward.name}</h3>
                <span className={cn(
                  "px-3 py-1 text-[10px] font-black rounded-full uppercase tracking-widest",
                  ward.color === 'primary' ? "bg-primary/10 text-primary" : "bg-surface-container-high text-secondary"
                )}>
                  {ward.stats}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ward.beds.map((bed) => (
                  <motion.div 
                    key={bed.id}
                    whileHover={{ y: -4 }}
                    className={cn(
                      "group relative p-5 rounded-2xl transition-all border-2",
                      bed.status === 'Occupied' ? "bg-surface-container-lowest border-transparent shadow-premium" :
                      bed.status === 'Available' ? "bg-primary/5 border-dashed border-primary/20" :
                      "bg-tertiary/5 border-tertiary/20"
                    )}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <p className="text-[10px] font-black text-secondary mb-1 uppercase tracking-widest">{bed.id}</p>
                        <p className={cn(
                          "text-lg font-black leading-tight font-display",
                          bed.status === 'Occupied' ? "text-on-surface" : "text-on-surface/30"
                        )}>
                          {bed.patient || (bed.status === 'Available' ? 'Empty' : 'Sanitizing')}
                        </p>
                        {bed.pid && <p className="text-[10px] font-bold text-secondary mt-0.5">PID: {bed.pid}</p>}
                      </div>
                      <span className={cn(
                        "px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest",
                        bed.status === 'Occupied' ? "bg-primary text-white" :
                        bed.status === 'Available' ? "bg-primary-container text-white" :
                        "bg-tertiary text-white"
                      )}>
                        {bed.status}
                      </span>
                    </div>

                    {bed.status === 'Occupied' ? (
                      <div className="flex items-center gap-3 mb-6">
                        <img src={bed.avatar!} className="w-8 h-8 rounded-full object-cover" alt="" />
                        <div>
                          <p className="text-[10px] font-black text-on-surface">{bed.doctor}</p>
                          <p className="text-[10px] text-secondary font-medium">Primary Physician</p>
                        </div>
                      </div>
                    ) : bed.status === 'Cleaning' ? (
                      <div className="flex items-center gap-4 py-4">
                         <div className="w-10 h-10 rounded-full border-4 border-tertiary/20 border-t-tertiary animate-spin" />
                         <div>
                            <p className="text-[10px] font-black text-tertiary">Progress: 65%</p>
                            <p className="text-[10px] text-secondary font-bold">Est: 8m</p>
                         </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-4 border-2 border-dashed border-primary/10 rounded-xl mb-4 text-primary/30">
                        <Bed size={24} />
                      </div>
                    )}

                    <div className={cn(
                      "grid gap-2 transition-all",
                      bed.status === 'Occupied' ? "grid-cols-2 opacity-0 group-hover:opacity-100" : "grid-cols-1"
                    )}>
                      {bed.status === 'Occupied' ? (
                        <>
                          <button className="py-2 bg-surface-container-high text-on-surface text-[10px] font-bold rounded-lg transition-colors">Vitals</button>
                          <button className="py-2 bg-secondary text-white text-[10px] font-bold rounded-lg hover:opacity-90 transition-all">Transfer</button>
                        </>
                      ) : bed.status === 'Available' ? (
                        <button className="w-full py-3 bg-primary text-white text-[10px] font-bold rounded-xl shadow-lg shadow-primary/10">ADMIT PATIENT</button>
                      ) : null}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Floor Map Teaser */}
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 bg-surface-container-low/50 p-8 rounded-3xl relative overflow-hidden group cursor-pointer">
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-6 font-display">Interactive Floor Map</h3>
                <div className="aspect-[21/9] bg-white rounded-2xl overflow-hidden shadow-inner flex items-center justify-center text-primary/10">
                   <MapIcon size={120} />
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
              <div className="absolute bottom-12 right-12 z-20">
                 <button className="bg-white p-4 rounded-full shadow-xl text-primary hover:scale-110 transition-transform">
                    <MapIcon size={24} />
                 </button>
              </div>
           </div>
           
           <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-premium flex flex-col">
              <h3 className="text-xl font-black mb-8 font-display">Ward Distribution</h3>
              <div className="space-y-6 flex-1">
                 {[
                   { label: 'ICU', value: '88%', color: 'bg-primary' },
                   { label: 'General Ward', value: '66%', color: 'bg-primary-container' },
                   { label: 'Pediatric', value: '42%', color: 'bg-tertiary' },
                   { label: 'Maternity', value: '95%', color: 'bg-secondary' },
                 ].map((item) => (
                   <div key={item.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className={cn("w-3 h-3 rounded-full", item.color)}></div>
                         <span className="text-sm font-bold text-on-surface">{item.label}</span>
                      </div>
                      <span className="text-sm font-black text-secondary">{item.value} <span className="text-[10px] opacity-40">OCC</span></span>
                   </div>
                 ))}
              </div>
              <div className="mt-8">
                  <p className="text-[10px] text-secondary font-medium leading-relaxed mb-6 uppercase tracking-wider">Staffing levels are currently optimal for the night shift.</p>
                  <button className="w-full py-4 border-2 border-surface-container-high rounded-2xl text-sm font-black text-on-surface hover:bg-surface-container-low transition-colors">
                      Generate Shift Report
                  </button>
              </div>
           </div>
        </section>
      </div>
    </MainLayout>
  );
}
