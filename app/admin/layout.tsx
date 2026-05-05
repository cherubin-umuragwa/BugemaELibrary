'use client';

import React from 'react';
import { AdminSidebar as Sidebar } from '@/components/layout/AdminSidebar';
import { Search, Settings, Grid, Bell, User as UserIcon } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isReady, role } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (isReady) {
      if (!isAuthenticated) {
        router.push('/login');
      } else if (role !== 'admin') {
        router.push('/dashboard');
      }
    }
  }, [isReady, isAuthenticated, role, router]);

  if (!isReady || !isAuthenticated || role !== 'admin') {
    return <div className="min-h-screen bg-slate-50" />;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <div className="pl-20 md:pl-64 transition-all duration-300">
        <header className="h-16 bg-white border-b border-border-primary sticky top-0 z-30 px-8 flex items-center justify-between">
           <div className="flex-1 max-w-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Master search..." 
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-1 focus:ring-primary transition-all" 
                />
              </div>
           </div>

           <div className="flex items-center gap-4">
              <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                 <Settings className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-primary transition-colors">
                 <Grid className="w-5 h-5" />
              </button>
              <div className="h-8 w-px bg-slate-100 mx-2" />
              <div className="flex items-center gap-2">
                 <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold text-[10px]">
                    AD
                 </div>
              </div>
           </div>
        </header>

        <main className="p-8">
           {children}
        </main>
      </div>
    </div>
  );
}
