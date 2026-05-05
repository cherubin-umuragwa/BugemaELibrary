'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  Users, 
  CheckCircle, 
  BarChart3, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  BookMarked
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';

export function AdminSidebar() {
  const pathname = usePathname();
  const { logout, user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: 'Admin Home', href: '/admin', icon: Home },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Approvals', href: '/admin/approvals', icon: CheckCircle },
    { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
  ];

  return (
    <div 
      className={cn(
        "h-screen fixed left-0 top-0 bg-white border-r border-border-primary flex flex-col transition-all duration-300 z-40",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      <div className="p-6 flex items-center justify-between">
        {!isCollapsed && (
          <Link href="/" className="flex items-center gap-2">
            <div className="p-1.5 bg-primary-light rounded-lg">
              <span className="font-black text-white text-lg">B</span>
            </div>
            <span className="font-bold text-primary tracking-tight truncate">Admin Portal</span>
          </Link>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={cn(
            "p-1.5 rounded-lg border border-border-primary hover:bg-surface text-slate-400 hover:text-primary transition-colors",
            isCollapsed && "mx-auto"
          )}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all group",
                isActive 
                  ? "bg-primary text-white shadow-md shadow-primary/20" 
                  : "text-slate-600 hover:bg-surface hover:text-primary"
              )}
            >
              <item.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-slate-400 group-hover:text-primary")} />
              {!isCollapsed && <span className="font-medium text-sm">{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto">
         {!isCollapsed && (
          <div className="p-4 bg-primary text-white rounded-2xl mb-4 overflow-hidden relative">
            <div className="relative z-10">
              <p className="text-[10px] uppercase font-bold text-white/60 mb-1">Administrator</p>
              <p className="text-sm font-bold truncate">{user?.name}</p>
            </div>
            <BookMarked className="absolute -right-4 -bottom-4 w-16 h-16 text-white/5" />
          </div>
        )}
        <button
          onClick={logout}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all group",
            isCollapsed && "justify-center"
          )}
        >
          <LogOut className="w-5 h-5 text-slate-400 group-hover:text-red-600" />
          {!isCollapsed && <span className="font-medium text-sm">Logout</span>}
        </button>
      </div>
    </div>
  );
}
