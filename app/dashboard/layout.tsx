'use client';

import React from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { Search, Bell, User as UserIcon, ChevronDown } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isReady, user } = useAuth();
  const router = useRouter();

  React.useEffect(() => {
    if (isReady && !isAuthenticated) {
      router.push('/login');
    }
  }, [isReady, isAuthenticated, router]);

  if (!isReady || !isAuthenticated) {
    return <div className="min-h-screen bg-slate-50" />;
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Sidebar />
      <div className="pl-20 md:pl-64 transition-all duration-300">
        <header className="h-16 bg-white border-b border-border-primary sticky top-0 z-30 px-8 flex items-center justify-between">
           <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search library..." 
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-1 focus:ring-primary-light transition-all" 
                />
              </div>
           </div>

           <div className="flex items-center gap-6">
              <button className="relative p-2 text-slate-400 hover:text-primary transition-colors">
                 <Bell className="w-5 h-5" />
                 <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
              <div className="h-8 w-px bg-slate-100" />
              <div className="flex items-center gap-3">
                 <div className="w-9 h-9 bg-primary-light rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md shadow-primary-light/10">
                    {user?.name.charAt(0) || 'U'}
                 </div>
                 <div className="hidden sm:block">
                    <p className="text-xs font-bold text-primary">{user?.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium">{user?.studentId || 'Faculty User'}</p>
                 </div>
                 <ChevronDown className="w-4 h-4 text-slate-400" />
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
