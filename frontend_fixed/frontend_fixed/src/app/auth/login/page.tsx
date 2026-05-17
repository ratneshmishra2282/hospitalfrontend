'use client';

import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6 selection:bg-primary/10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        {/* Logo Section */}
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 shadow-premium">
            <Building2 size={32} />
          </div>
          <h1 className="font-display text-4xl font-black text-on-surface tracking-tight">Clinical Sanctuary</h1>
          <p className="text-secondary font-medium mt-2">Hospital Management SaaS Interface</p>
        </div>

        {/* Login Card */}
        <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-premium border-b-4 border-primary">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-secondary uppercase tracking-widest pl-1">Clinical ID / Username</label>
              <input 
                type="text" 
                placeholder="system_admin" 
                className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 font-bold text-on-surface outline-none focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-black text-secondary uppercase tracking-widest pl-1">Password</label>
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-surface-container-low border-none rounded-xl py-4 px-6 font-bold text-on-surface outline-none focus:ring-2 focus:ring-primary/10 transition-all font-mono"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded-md border-surface-container-high text-primary focus:ring-primary/10" />
                <span className="text-xs font-bold text-secondary">Keep me signed in</span>
              </label>
              <button type="button" className="text-xs font-bold text-primary hover:underline">Forgot Password?</button>
            </div>

            <button className="w-full bg-primary text-white py-4 rounded-xl font-black flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:opacity-95 active:scale-[0.98] transition-all group">
              <span>Enter Clinical Sanctuary</span>
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-xs text-secondary font-bold uppercase tracking-widest mb-4">Powered by Cloud Health Infrastructure</p>
          <div className="flex justify-center gap-4">
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
             <span className="text-[10px] font-black text-secondary/60">SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
