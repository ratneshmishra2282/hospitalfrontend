import React from 'react';
import { Sidebar } from './sidebar';
import { Header } from './header';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary/10">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="pt-24 p-8 min-h-[calc(100vh-64px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
