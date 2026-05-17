'use client';

import React from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { HelpCircle } from 'lucide-react';

export default function SupportPage() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center text-primary mb-6">
          <HelpCircle size={40} />
        </div>
        <h1 className="text-3xl font-black text-on-surface font-display mb-2">Help & Support</h1>
        <p className="text-secondary max-w-sm">Access documentation, contact clinical support, or report a system issue from this portal.</p>
      </div>
    </MainLayout>
  );
}
