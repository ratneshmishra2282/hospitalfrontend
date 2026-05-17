'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/main-layout';
import { 
  Search, 
  UserPlus, 
  Filter, 
  MoreVertical, 
  ChevronRight,
  Phone,
  Mail,
  Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_PATIENTS = [
  { id: 'PT-8921', name: 'Elena Rodriguez', age: 42, gender: 'Female', phone: '+1 555-0123', email: 'elena.r@example.com', lastVisit: '2 days ago', status: 'In-Patient' },
  { id: 'PT-4420', name: 'Jameson Cooper', age: 29, gender: 'Male', phone: '+1 555-0456', email: 'j.cooper@example.com', lastVisit: '1 week ago', status: 'OPD' },
  { id: 'PT-3102', name: 'Sarah Mitchell', age: 31, gender: 'Female', phone: '+1 555-0789', email: 's.mitchell@example.com', lastVisit: 'Today', status: 'In-Patient' },
  { id: 'PT-1294', name: 'Robert Chen', age: 55, gender: 'Male', phone: '+1 555-0990', email: 'r.chen@example.com', lastVisit: '3 weeks ago', status: 'Follow-up' },
  { id: 'PT-7721', name: 'Alice Thompson', age: 24, gender: 'Female', phone: '+1 555-0222', email: 'alice.t@example.com', lastVisit: '5 days ago', status: 'OPD' },
];

export default function PatientsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPatients = MOCK_PATIENTS.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="font-display text-3xl font-black text-on-surface tracking-tight">Patient Directory</h1>
            <p className="text-secondary font-medium mt-1">Manage and search patient medical records</p>
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
            <UserPlus size={20} />
            <span>Register New Patient</span>
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-surface-container-low/30 p-4 rounded-xl mb-8 flex gap-4">
          <div className="relative flex-1 group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/40 w-4 h-4 transition-colors group-focus-within:text-primary" />
            <input
              type="text"
              placeholder="Search by name, patient ID, or phone number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-container-lowest border-none rounded-lg py-3 pl-10 pr-4 text-sm font-body outline-none focus:ring-2 focus:ring-primary/10 transition-all shadow-sm"
            />
          </div>
          <button className="bg-surface-container-lowest p-3 rounded-lg text-secondary hover:text-primary transition-colors shadow-sm">
            <Filter size={20} />
          </button>
        </div>

        {/* Patient Grid/List */}
        <div className="grid grid-cols-1 gap-4">
          <AnimatePresence mode='popLayout'>
            {filteredPatients.map((patient, i) => (
              <motion.div
                key={patient.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="group bg-surface-container-lowest p-6 rounded-xl shadow-premium hover:shadow-primary/5 transition-all cursor-pointer flex items-center justify-between"
              >
                <div className="flex items-center gap-6 flex-1">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold text-lg">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 flex-1">
                    <div>
                      <h3 className="font-bold text-on-surface group-hover:text-primary transition-colors">{patient.name}</h3>
                      <p className="text-xs text-secondary font-medium mt-1 uppercase tracking-widest">{patient.id}</p>
                    </div>
                    
                    <div className="hidden md:block">
                      <p className="text-xs text-secondary uppercase font-bold tracking-tighter mb-1">Contact</p>
                      <div className="flex items-center gap-2 text-sm text-on-surface/70">
                        <Phone size={14} />
                        <span>{patient.phone}</span>
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <p className="text-xs text-secondary uppercase font-bold tracking-tighter mb-1">Details</p>
                      <p className="text-sm text-on-surface/70">{patient.age} Y • {patient.gender}</p>
                    </div>

                    <div className="hidden md:block">
                      <p className="text-xs text-secondary uppercase font-bold tracking-tighter mb-1">Status</p>
                      <span className={cn(
                        "text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-widest",
                        patient.status === 'In-Patient' ? "bg-primary text-white" : 
                        patient.status === 'OPD' ? "bg-secondary-container text-secondary" :
                        "bg-surface-container-highest text-secondary"
                      )}>
                        {patient.status}
                      </span>
                    </div>
                  </div>
                </div>

                <Link 
                  href={`/patients/${patient.id}`}
                  className="p-2 text-secondary/30 hover:text-primary transition-colors hover:bg-white rounded-lg shadow-sm"
                >
                  <ChevronRight size={20} />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {filteredPatients.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-surface-container-low rounded-full flex items-center justify-center mx-auto mb-4 text-secondary/20">
                <Search size={40} />
              </div>
              <h3 className="font-display text-xl font-bold text-on-surface">No patients found</h3>
              <p className="text-secondary">Try searching for a different name or ID</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
