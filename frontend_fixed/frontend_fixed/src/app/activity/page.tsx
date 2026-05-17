'use client';

import React from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { History } from 'lucide-react';

export default function ActivityPage() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
          <History size={40} />
        </div>
        <h1 className="text-3xl font-black text-on-surface font-display mb-2">Facility Activity Feed</h1>
        <p className="text-secondary max-w-sm">A complete audit trail of all patient admissions, discharges, and clinical events across the facility.</p>
      </div>
    </MainLayout>
  );
}
