'use client';

import React from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { Construction } from 'lucide-react';

export default function PlaceholderPage() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
          <Construction size={40} />
        </div>
        <h1 className="text-3xl font-black text-on-surface font-display mb-2">Module Under Development</h1>
        <p className="text-secondary max-w-sm">This module is currently being optimized for the "Clinical Sanctuary" experience. Check back soon for advanced analytics and insights.</p>
      </div>
    </MainLayout>
  );
}
