'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BookOpen, 
  Upload, 
  Files, 
  User as UserIcon, 
  LogOut,
  ChevronLeft,
  ChevronRight,
  Book
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { cn } from '@/lib/utils';

export function Sidebar() {
  const pathname = usePathname();
  const { logout, user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'E-Books', href: '/ebooks', icon: BookOpen },
    { name: 'Publish', href: '/dashboard/publish', icon: Upload },
    { name: 'My Uploads', href: '/dashboard/my-uploads', icon: Files },
    { name: 'Profile', href: '/dashboard/profile', icon: UserIcon },
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
            <div className="p-1.5 bg-primary rounded-lg">
              <Book className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-primary truncate">Bugema E-Library</span>
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
                  ? "bg-primary-light text-white shadow-md shadow-primary-light/20" 
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
          <div className="p-4 bg-surface rounded-2xl mb-4">
            <p className="text-[10px] uppercase font-bold text-primary-light mb-1">Authenticated as</p>
            <p className="text-sm font-bold text-primary truncate">{user?.name}</p>
            <p className="text-[10px] text-slate-500 truncate">{user?.email}</p>
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
