'use client';

import React from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/main-layout';
import { 
  Plus, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  MoreHorizontal,
  ChevronRight,
  Filter
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const MOCK_APPOINTMENTS = [
  { id: 'APP-01', patient: 'Elena Rodriguez', time: '09:00 AM', doctor: 'Dr. Sarah Jenkins', specialty: 'Cardiology', status: 'Arrived', visitType: 'Follow-up' },
  { id: 'APP-02', patient: 'Jameson Cooper', time: '09:30 AM', doctor: 'Dr. Sarah Jenkins', specialty: 'Cardiology', status: 'In-Consultation', visitType: 'Initial' },
  { id: 'APP-03', patient: 'Robert Chen', time: '10:00 AM', doctor: 'Dr. Michael Vane', specialty: 'General', status: 'Pending', visitType: 'Follow-up' },
  { id: 'APP-04', patient: 'Sarah Mitchell', time: '10:15 AM', doctor: 'Dr. Elena Vance', specialty: 'Dermatology', status: 'Pending', visitType: 'Screening' },
  { id: 'APP-05', patient: 'Alice Thompson', time: '11:00 AM', doctor: 'Dr. Sarah Jenkins', specialty: 'Cardiology', status: 'Pending', visitType: 'Initial' },
];

export default function AppointmentsPage() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="font-display text-3xl font-black text-on-surface tracking-tight">Appointment Queue</h1>
            <p className="text-secondary font-medium mt-1">Real-time patient arrivals and consulting status</p>
          </div>
          <div className="flex gap-3">
             <button className="bg-white p-3 rounded-xl shadow-sm text-secondary hover:text-primary transition-colors">
              <CalendarIcon size={20} />
            </button>
            <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
              <Plus size={20} />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>

        {/* Stats Summary for Queue */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-surface-container-low/30 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-[10px] text-secondary font-black uppercase tracking-widest">Awaiting</p>
              <h3 className="text-2xl font-black text-on-surface font-display">12 <span className="text-sm font-medium text-secondary">Patients</span></h3>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
              <Clock size={20} />
            </div>
          </div>
          <div className="bg-primary/5 p-6 rounded-2xl flex items-center justify-between border-l-4 border-primary">
            <div>
              <p className="text-[10px] text-primary font-black uppercase tracking-widest">Arrived</p>
              <h3 className="text-2xl font-black text-primary font-display">04 <span className="text-sm font-medium opacity-60">Patients</span></h3>
            </div>
            <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-md">
              <User size={20} />
            </div>
          </div>
          <div className="bg-surface-container-low/30 p-6 rounded-2xl flex items-center justify-between">
            <div>
              <p className="text-[10px] text-secondary font-black uppercase tracking-widest">Completed</p>
              <h3 className="text-2xl font-black text-on-surface font-display">28 <span className="text-sm font-medium text-secondary">Today</span></h3>
            </div>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm">
              <Filter size={20} />
            </div>
          </div>
        </div>

        {/* Queue Board */}
        <div className="bg-surface-container-lowest rounded-2xl shadow-premium overflow-hidden">
          <div className="grid grid-cols-6 p-6 border-b border-on-surface/5 bg-surface-container-low/20">
             <div className="col-span-2 text-[10px] text-secondary font-black uppercase tracking-widest">Patient</div>
             <div className="text-[10px] text-secondary font-black uppercase tracking-widest">Time</div>
             <div className="text-[10px] text-secondary font-black uppercase tracking-widest">Consultant</div>
             <div className="text-[10px] text-secondary font-black uppercase tracking-widest">Status</div>
             <div className="text-right text-[10px] text-secondary font-black uppercase tracking-widest">Actions</div>
          </div>

          <div className="divide-y divide-on-surface/5">
            {MOCK_APPOINTMENTS.map((app, i) => (
              <motion.div 
                key={app.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-6 p-6 items-center group hover:bg-surface-container-low/20 transition-colors cursor-pointer"
              >
                <div className="col-span-2 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-secondary font-bold text-sm">
                    {app.patient.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <Link href={`/patients/${app.id}`} className="font-bold text-on-surface hover:text-primary transition-colors">{app.patient}</Link>
                    <p className="text-[10px] text-secondary uppercase font-medium">{app.visitType}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-secondary" />
                  <span className="text-sm font-bold text-on-surface">{app.time}</span>
                </div>

                <div>
                  <p className="text-sm font-bold text-on-surface">{app.doctor}</p>
                  <p className="text-[10px] text-secondary font-medium">{app.specialty}</p>
                </div>

                <div>
                  <span className={cn(
                    "text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest",
                    app.status === 'Arrived' ? "bg-primary text-white" : 
                    app.status === 'In-Consultation' ? "bg-tertiary text-white" :
                    "bg-surface-container-high text-secondary"
                  )}>
                    {app.status}
                  </span>
                </div>

                <div className="flex justify-end gap-2">
                  <button className="p-2 text-secondary/30 hover:text-primary transition-colors hover:bg-white rounded-lg shadow-sm">
                    <ChevronRight size={18} />
                  </button>
                  <button className="p-2 text-secondary/30 hover:text-primary transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
