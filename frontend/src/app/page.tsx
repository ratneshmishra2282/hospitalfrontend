'use client';

import React from 'react';
import Link from 'next/link';
import { MainLayout } from '@/components/layout/main-layout';
import { 
  UserPlus, 
  TrendingUp, 
  Bed, 
  CreditCard, 
  AlertTriangle,
  Check,
  History,
  MoreVertical
} from 'lucide-react';
import { MOCK_DASHBOARD_STATS, MOCK_RECENT_ACTIVITY, MOCK_FACILITY } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <MainLayout>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Header */}
        <header className="mb-10 flex justify-between items-end">
          <div>
            <h1 className="font-display text-3xl font-black text-on-surface tracking-tight">
              Clinical Sanctuary
            </h1>
            <p className="text-secondary font-medium mt-1">
              Facility Overview for {MOCK_FACILITY.name} • Monday, Oct 23
            </p>
          </div>
          <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
            <UserPlus size={20} />
            <span>Admit New Patient</span>
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {MOCK_DASHBOARD_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "p-6 rounded-xl shadow-premium relative overflow-hidden transition-all hover:scale-[1.02]",
                stat.color === 'primary' ? "bg-surface-container-lowest border-l-4 border-primary" : 
                stat.color === 'primary-container' ? "bg-primary text-white" :
                stat.color === 'tertiary' ? "bg-tertiary/10 border-l-4 border-tertiary" :
                "bg-surface-container-lowest border-l-4 border-secondary"
              )}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <div className={cn(
                    "p-2 rounded-lg",
                    stat.color === 'primary-container' ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
                  )}>
                    {stat.icon === 'ward' && <TrendingUp size={20} />}
                    {stat.icon === 'bed' && <Bed size={20} />}
                    {stat.icon === 'payments' && <CreditCard size={20} />}
                    {stat.icon === 'inventory_2' && <AlertTriangle size={20} />}
                  </div>
                  {stat.trend && (
                    <span className={cn(
                      "text-xs font-bold",
                      stat.color === 'primary-container' ? "text-white" : "text-primary"
                    )}>
                      {stat.trend}
                    </span>
                  )}
                </div>
                <h3 className={cn(
                  "font-display text-3xl font-black mb-1",
                  stat.color === 'primary-container' ? "text-white" : "text-on-surface"
                )}>
                  {stat.value}
                </h3>
                <p className={cn(
                  "text-sm font-medium",
                  stat.color === 'primary-container' ? "text-white/80" : "text-secondary"
                )}>
                  {stat.label}
                </p>
              </div>
              
              {stat.color === 'primary-container' && (
                <div className="absolute -bottom-4 -right-4 opacity-10">
                   <Bed size={120} />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Analytics & Activity Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Placeholder */}
          <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl shadow-premium">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="font-display text-xl font-bold text-on-surface">Weekly Patient Volume</h2>
                <p className="text-secondary text-sm">Admissions vs. Discharges</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Admissions</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-secondary">
                  <div className="w-2 h-2 rounded-full bg-secondary-container"></div>
                  <span>Discharges</span>
                </div>
              </div>
            </div>
            
            {/* Custom SVG/CSS Bar Chart */}
            <div className="flex items-end justify-between h-64 gap-4 px-4">
              {[65, 80, 95, 60, 75, 40, 35].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                  <div className="w-full flex gap-1 items-end justify-center h-full">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${val}%` }}
                      transition={{ delay: 0.5 + i * 0.05, duration: 0.8 }}
                      className="w-3 bg-primary rounded-t-sm transition-all group-hover:opacity-80"
                    ></motion.div>
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${val * 0.7}%` }}
                      transition={{ delay: 0.7 + i * 0.05, duration: 0.8 }}
                      className="w-3 bg-secondary/20 rounded-t-sm"
                    ></motion.div>
                  </div>
                  <span className="text-[10px] font-bold text-secondary">
                    {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-surface-container-low/30 p-8 rounded-xl flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display text-xl font-bold text-on-surface">Recent Activity</h2>
              <Link href="/activity" className="text-primary text-xs font-bold hover:underline">View All</Link>
            </div>
            <div className="space-y-6 flex-1">
              {MOCK_RECENT_ACTIVITY.map((activity, i) => (
                <motion.div 
                  key={activity.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="relative shrink-0">
                    <img 
                      src={activity.avatar} 
                      alt={activity.user} 
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                    />
                    <div className={cn(
                      "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center",
                      activity.type === 'success' ? "bg-primary" : "bg-secondary"
                    )}>
                      {activity.type === 'success' ? <Check size={8} className="text-white" /> : <History size={8} className="text-white" />}
                    </div>
                  </div>
                  <div className="flex-1 border-b border-on-surface/5 pb-4">
                    <p className="text-sm font-bold text-on-surface">{activity.user}</p>
                    <p className="text-xs text-secondary mt-0.5">{activity.action}</p>
                    <p className="text-[10px] text-secondary/50 font-medium mt-1 uppercase tracking-wider">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Stats Footer */}
        <div className="mt-8 bg-surface-container-high/40 p-4 rounded-xl flex items-center justify-between">
          <div className="flex gap-8 px-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Active Staff</span>
              <span className="font-display font-black text-primary">142 On-Duty</span>
            </div>
            <div className="w-[1px] h-8 bg-on-surface/5"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Avg. Wait Time</span>
              <span className="font-display font-black text-on-surface">18 Minutes</span>
            </div>
            <div className="w-[1px] h-8 bg-on-surface/5"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">Lab Load</span>
              <span className="font-display font-black text-on-surface">64 Samples</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="bg-white px-4 py-2 rounded-lg text-sm font-bold text-on-surface shadow-sm hover:bg-surface transition-colors">
              Generate Report
            </button>
            <button className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:opacity-90 transition-opacity">
              Export Logs
            </button>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
}
