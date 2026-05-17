'use client';

import React from 'react';
import { 
  Stethoscope, 
  FileText, 
  Beaker, 
  CreditCard,
  History,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const MOCK_TIMELINE = [
  { id: 1, date: 'Oct 23, 2023', time: '10:15 AM', type: 'Encounter', title: 'Cardiology Consultation', provider: 'Dr. Sarah Jenkins', detail: 'Regular checkup for hypertension. Vitals stable.', icon: Stethoscope, color: 'primary' },
  { id: 2, date: 'Oct 23, 2023', time: '11:00 AM', type: 'Lab', title: 'Blood Panel (Complete)', provider: 'Main Laboratory', detail: 'Results pending. Ordered CBC, Lipid Profile.', icon: Beaker, color: 'tertiary' },
  { id: 3, date: 'Oct 15, 2023', time: '02:30 PM', type: 'Billing', title: 'Invoice Paid - $250.00', provider: 'Billing Dept', detail: 'Payment received via Insurance (Aetna).', icon: CreditCard, color: 'secondary' },
  { id: 4, date: 'Sep 28, 2023', time: '09:00 AM', type: 'History', title: 'Initial Registration', provider: 'Admin', detail: 'Patient profile created. MRN issued.', icon: History, color: 'surface-container-highest' },
];

export function PatientTimeline() {
  return (
    <div className="relative pl-8">
      {/* The Track (Ghost Border) */}
      <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-primary/10 rounded-full" />

      <div className="space-y-12">
        {MOCK_TIMELINE.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative"
          >
            {/* The Node */}
            <div className={cn(
              "absolute -left-[25px] top-1 w-5 h-5 rounded-full border-4 border-surface z-10 flex items-center justify-center",
              item.color === 'primary' ? "bg-primary" :
              item.color === 'tertiary' ? "bg-tertiary" :
              item.color === 'secondary' ? "bg-secondary" : "bg-slate-400"
            )}>
              {i === 0 && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="shrink-0 w-32 md:text-right">
                <p className="text-sm font-bold text-on-surface">{item.date}</p>
                <p className="text-xs text-secondary font-medium">{item.time}</p>
              </div>

              <div className="flex-1 bg-surface-container-lowest p-6 rounded-xl shadow-premium group hover:shadow-primary/10 transition-all border-l-4 border-transparent hover:border-primary">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-2 rounded-lg",
                      item.color === 'primary' ? "bg-primary/5 text-primary" :
                      item.color === 'tertiary' ? "bg-tertiary/5 text-tertiary" :
                      item.color === 'secondary' ? "bg-secondary/5 text-secondary" : "bg-slate-100 text-slate-500"
                    )}>
                      <item.icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-xs text-secondary font-medium">{item.provider}</p>
                    </div>
                  </div>
                  <span className={cn(
                    "text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-widest",
                    item.color === 'primary' ? "bg-primary/10 text-primary" : "bg-surface-container-low text-secondary"
                  )}>
                    {item.type}
                  </span>
                </div>
                <p className="text-sm text-on-surface/70 mt-3 leading-relaxed">
                  {item.detail}
                </p>
                
                {item.type === 'Lab' && (
                  <div className="mt-4 flex gap-2">
                    <button className="text-xs font-bold text-primary hover:underline">View Results</button>
                    <button className="text-xs font-bold text-secondary hover:underline">Download PDF</button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* End Node */}
        <div className="relative">
          <div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-primary/20" />
          <p className="text-[10px] text-secondary font-bold uppercase tracking-widest pl-4">Beginning of medical record</p>
        </div>
      </div>
    </div>
  );
}
