'use client';

import React from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { Settings } from 'lucide-react';

export default function SettingsPage() {
  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-20 h-20 bg-secondary/5 rounded-full flex items-center justify-center text-secondary mb-6">
          <Settings size={40} />
        </div>
        <h1 className="text-3xl font-black text-on-surface font-display mb-2">System Settings</h1>
        <p className="text-secondary max-w-sm">Facility-wide configurations, user roles, and security preferences will be available here.</p>
      </div>
    </MainLayout>
  );
}
