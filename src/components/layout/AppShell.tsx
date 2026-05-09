import React from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { Toaster } from 'sonner';
export function AppShell({ children }: {children: React.ReactNode;}) {
  return (
    <div className="flex h-screen bg-sand-50 overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Subtle background motif */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-network-pattern bg-cover bg-center mix-blend-multiply"></div>

        <TopBar />
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 relative z-10">
          {children}
        </main>
      </div>
      <Toaster position="top-right" richColors theme="light" />
    </div>);

}