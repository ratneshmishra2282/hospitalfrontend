'use client';

import React from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Search, 
  Filter, 
  FileText, 
  Download,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const MOCK_INVOICES = [
  { id: 'INV-9021', patient: 'Elena Rodriguez', date: 'Oct 23, 2023', amount: '$1,420.00', status: 'Paid', method: 'Insurance' },
  { id: 'INV-8820', patient: 'Jameson Cooper', date: 'Oct 22, 2023', amount: '$850.00', status: 'Pending', method: 'Cash' },
  { id: 'INV-7731', patient: 'Sarah Mitchell', date: 'Oct 21, 2023', amount: '$2,100.00', status: 'Overdue', method: 'Credit Card' },
  { id: 'INV-6612', patient: 'Robert Chen', date: 'Oct 19, 2023', amount: '$450.00', status: 'Paid', method: 'Insurance' },
];

export default function BillingPage() {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-black text-on-surface tracking-tight leading-none mb-2 font-display">Revenue & Financials</h1>
            <p className="text-secondary font-medium">Billing operations, insurance claims, and hospital revenue</p>
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
            <FileText size={20} />
            <span>Create New Invoice</span>
          </button>
        </header>

        {/* Financial Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-premium border-b-4 border-primary">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                 <ArrowUpRight size={24} />
              </div>
              <span className="text-primary font-black text-xs">+14.2%</span>
            </div>
            <p className="text-[10px] font-black text-secondary tracking-widest uppercase mb-1">Total Monthly Revenue</p>
            <h3 className="text-4xl font-black text-on-surface font-display">$842,500</h3>
          </div>

          <div className="bg-surface-container-low/50 p-8 rounded-3xl">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-secondary/10 text-secondary rounded-2xl">
                 <Clock size={24} />
              </div>
            </div>
            <p className="text-[10px] font-black text-secondary tracking-widest uppercase mb-1">Outstanding Claims</p>
            <h3 className="text-4xl font-black text-on-surface font-display">$64,200</h3>
          </div>

          <div className="bg-tertiary/5 p-8 rounded-3xl border-b-4 border-tertiary">
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-tertiary/10 text-tertiary rounded-2xl">
                 <AlertCircle size={24} />
              </div>
              <span className="text-tertiary font-black text-xs">8 Critical</span>
            </div>
            <p className="text-[10px] font-black text-secondary tracking-widest uppercase mb-1">Overdue Invoices</p>
            <h3 className="text-4xl font-black text-tertiary font-display">$12,840</h3>
          </div>
        </div>

        {/* Invoice Table Board */}
        <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-premium">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-black text-on-surface font-display">Recent Transactions</h3>
              <div className="flex gap-4">
                 <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/40 w-4 h-4" />
                    <input type="text" placeholder="Search invoices..." className="bg-surface border-none rounded-xl py-2 pl-10 pr-4 text-sm font-bold outline-none focus:ring-2 focus:ring-primary/10 transition-all" />
                 </div>
                 <button className="bg-surface p-2 rounded-xl text-secondary hover:text-primary transition-colors">
                    <Filter size={20} />
                 </button>
              </div>
           </div>

           <div className="space-y-4">
              {MOCK_INVOICES.map((inv, i) => (
                <motion.div 
                  key={inv.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between p-5 bg-surface rounded-2xl group hover:shadow-md transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-6 flex-1">
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center",
                      inv.status === 'Paid' ? "bg-primary/10 text-primary" : 
                      inv.status === 'Overdue' ? "bg-tertiary/10 text-tertiary" : "bg-secondary/10 text-secondary"
                    )}>
                      {inv.status === 'Paid' ? <CheckCircle2 size={24} /> : inv.status === 'Overdue' ? <AlertCircle size={24} /> : <Clock size={24} />}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 flex-1">
                       <div>
                          <p className="text-[10px] font-black text-secondary uppercase tracking-widest">Invoiced Patient</p>
                          <p className="font-black text-on-surface">{inv.patient}</p>
                          <p className="text-[10px] font-bold text-secondary uppercase mt-0.5">{inv.id}</p>
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-secondary uppercase tracking-widest">Date</p>
                          <p className="font-bold text-on-surface">{inv.date}</p>
                       </div>
                       <div>
                          <p className="text-[10px] font-black text-secondary uppercase tracking-widest">Payment via</p>
                          <p className="font-bold text-on-surface">{inv.method}</p>
                       </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                     <div className="text-right">
                        <p className="text-xl font-black text-on-surface">{inv.amount}</p>
                        <span className={cn(
                          "text-[10px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest",
                          inv.status === 'Paid' ? "bg-primary/20 text-primary" : 
                          inv.status === 'Overdue' ? "bg-tertiary/20 text-tertiary" : "bg-secondary/20 text-secondary"
                        )}>
                          {inv.status}
                        </span>
                     </div>
                     <button className="p-3 bg-surface-container-lowest rounded-xl shadow-sm text-secondary hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
                        <Download size={20} />
                     </button>
                  </div>
                </motion.div>
              ))}
           </div>

           <button className="w-full mt-8 py-4 bg-surface text-secondary font-black text-xs uppercase tracking-widest rounded-2xl hover:bg-surface-container-low transition-colors">
              View Complete Transaction Ledger
           </button>
        </div>
      </div>
    </MainLayout>
  );
}
