'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Users, 
  ClipboardList, 
  Stethoscope, 
  LineChart, 
  Settings, 
  HelpCircle,
  Building2,
  Bed,
  CreditCard
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { MOCK_FACILITY } from '@/lib/mock-data';

const navItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Patient Records', href: '/patients', icon: Users },
  { name: 'Appointment Queue', href: '/appointments', icon: ClipboardList },
  { name: 'Clinical Encounter', href: '/encounters', icon: Stethoscope },
  { name: 'IPD / Bed Management', href: '/ipd', icon: Bed },
  { name: 'Billing & Revenue', href: '/billing', icon: CreditCard },
  { name: 'Analytics', href: '/analytics', icon: LineChart },
];

const secondaryNav = [
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Support', href: '/support', icon: HelpCircle },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low/50 shadow-premium flex flex-col z-50">
      <div className="p-6 flex flex-col h-full">
        {/* Facility Switcher (Glassmorphic) */}
        <div className="flex items-center gap-3 mb-8 glass-effect p-3 rounded-xl border-l-4 border-primary shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
            <Building2 size={24} />
          </div>
          <div className="overflow-hidden">
            <h2 className="text-sm font-bold text-on-surface truncate font-display">
              {MOCK_FACILITY.name}
            </h2>
            <p className="text-[10px] text-secondary font-bold uppercase tracking-wider opacity-60">
              Facility Switcher
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                  isActive 
                    ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary rounded-l-none" 
                    : "text-secondary hover:bg-surface-container-high hover:text-primary"
                )}
              >
                <item.icon size={20} className={cn(
                  "transition-colors",
                  isActive ? "text-primary" : "text-secondary group-hover:text-primary"
                )} />
                <span className="text-sm font-display">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Nav */}
        <div className="mt-auto pt-4 space-y-1 border-t border-on-surface/5">
          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-2 text-secondary hover:text-primary transition-colors group"
            >
              <item.icon size={18} className="group-hover:text-primary" />
              <span className="text-sm font-display">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
