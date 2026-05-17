'use client';

import React from 'react';
import { Search, Bell, MessageSquare, LayoutGrid } from 'lucide-react';
import { MOCK_USER } from '@/lib/mock-data';

export function Header() {
  return (
    <header className="fixed top-0 left-64 right-0 h-16 bg-surface/80 backdrop-blur-md flex justify-between items-center px-8 z-40">
      <div className="flex items-center gap-8 w-1/2">
        <h2 className="text-xl font-black text-primary font-display tracking-tight shrink-0">
          Clinical Sanctuary
        </h2>
        <div className="relative w-full max-w-sm group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary/40 w-4 h-4 transition-colors group-focus-within:text-primary" />
          <input
            type="text"
            placeholder="Search patient IDs, clinicians, or records..."
            className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm font-body outline-none focus:ring-2 focus:ring-primary/10 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <button className="relative p-2 text-secondary hover:text-primary transition-all">
            <Bell size={20} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-tertiary rounded-full border-2 border-surface"></span>
          </button>
          <button className="p-2 text-secondary hover:text-primary transition-all">
            <MessageSquare size={20} />
          </button>
          <button className="p-2 text-secondary hover:text-primary transition-all">
            <LayoutGrid size={20} />
          </button>
        </div>
        
        <div className="h-8 w-[1px] bg-on-surface/5"></div>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-on-surface leading-none font-display">
              {MOCK_USER.name}
            </p>
            <p className="text-[10px] text-secondary font-bold mt-1 uppercase tracking-wider opacity-60">
              {MOCK_USER.role}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/10 shadow-sm">
            <img 
              src={MOCK_USER.avatar} 
              alt={MOCK_USER.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
