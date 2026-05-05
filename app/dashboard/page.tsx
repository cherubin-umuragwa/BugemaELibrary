'use client';

import React from 'react';
import Link from 'next/link';
import { StatCard } from '@/components/ui/StatCard';
import { BookOpen, Upload, Award, Clock, ChevronRight, FileText, ArrowRight, User as UserIcon } from 'lucide-react';
import { RECENT_ACTIVITY, BOOKS } from '@/lib/dummy-data';
import { useAuth } from '@/context/AuthContext';
import { motion } from 'framer-motion';

export default function UserDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-primary">Welcome back, {user?.name.split(' ')[1]}!</h1>
        <p className="text-slate-500 mt-1 font-medium italic">You have <span className="text-primary-light font-bold">3 new</span> book approvals pending and 12 downloads this week.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Books Borrowed" value="24" change="+3 this week" icon={BookOpen} />
        <StatCard label="Personal Uploads" value="15" change="+1 new" icon={Upload} />
        <StatCard label="Research Credits" value="1,240" change="+50 earned" icon={Award} />
        <StatCard label="Reading Hours" value="156h" change="+12h this month" icon={Clock} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-card border border-border-primary overflow-hidden">
             <div className="p-6 border-b border-slate-50 flex items-center justify-between">
                <h3 className="font-bold text-primary flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary-light" /> Recent Activity
                </h3>
                <Link href="#" className="text-xs font-bold text-slate-400 hover:text-primary-light transition-colors">View All</Link>
             </div>
             <div className="divide-y divide-slate-50">
                {RECENT_ACTIVITY.map((activity) => (
                  <Link 
                    key={activity.id} 
                    href="#" 
                    className="p-6 flex items-center justify-between hover:bg-slate-50 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-surface rounded-xl flex items-center justify-center text-primary-light group-hover:bg-primary-light group-hover:text-white transition-all">
                          {activity.type === 'published' ? <Upload className="w-5 h-5" /> : 
                           activity.type === 'downloaded' ? <FileText className="w-5 h-5" /> : 
                           activity.type === 'reading' ? <Clock className="w-5 h-5" /> : 
                           <FileText className="w-5 h-5" />}
                       </div>
                       <div>
                          <p className="text-sm font-bold text-primary">
                            <span className="capitalize">{activity.type}:</span> {activity.title}
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">{activity.timestamp}</p>
                       </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-200 group-hover:text-primary transition-all group-hover:translate-x-1" />
                  </Link>
                ))}
             </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="space-y-6 text-center">
           {/* Profile Card */}
           <div className="bg-white rounded-2xl shadow-card border border-border-primary p-8">
              <div className="w-20 h-20 bg-surface rounded-full mx-auto mb-4 border-4 border-white shadow-xl flex items-center justify-center font-black text-2xl text-primary-light">
                 {user?.name.charAt(0)}
              </div>
              <h4 className="text-lg font-bold text-primary">{user?.name}</h4>
              <p className="text-xs text-slate-400 font-medium mb-6">ID: {user?.studentId || 'FACULTY'}</p>
              <button className="w-full py-3 bg-surface text-primary-light rounded-xl font-bold text-sm hover:bg-primary-light hover:text-white transition-all">
                 Edit Profile
              </button>
           </div>

           {/* New Publication Card */}
           <div className="bg-primary-light text-white rounded-2xl p-8 relative overflow-hidden text-left group">
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Upload className="w-32 h-32" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-white/60 mb-2">Publish Resource</p>
              <h4 className="text-lg font-bold mb-4">Share your research papers or digital books for university approval.</h4>
              <Link 
                href="/dashboard/publish" 
                className="inline-flex items-center justify-center py-3 px-6 bg-primary text-white rounded-xl font-bold text-sm hover:bg-black transition-all shadow-xl shadow-primary/20"
              >
                Start Upload
              </Link>
           </div>

           {/* Notice Box */}
           <div className="p-6 bg-amber-50 rounded-2xl border border-amber-100 text-left">
              <h4 className="text-sm font-bold text-amber-700 flex items-center gap-2 mb-2">
                 <Clock className="w-4 h-4" /> System Notice
              </h4>
              <p className="text-xs text-amber-600 font-medium leading-relaxed">
                 The digital archives will be undergoing maintenance this Saturday from 10 PM to 2 AM EAT.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
