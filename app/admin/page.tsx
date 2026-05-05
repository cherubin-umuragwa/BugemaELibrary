'use client';

import React from 'react';
import { StatCard } from '@/components/ui/StatCard';
import { ModerationQueue } from '@/components/moderation/ModerationQueue';
import { PENDING_SUBMISSIONS, SYSTEM_LOGS } from '@/lib/dummy-data';
import { 
  Users, 
  BookOpen, 
  CheckCircle, 
  Download, 
  FileDown, 
  Activity, 
  AlertTriangle,
  ArrowRight,
  Info
} from 'lucide-react';
import Link from 'next/link';

export default function AdminHomePage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-primary">Admin Dashboard</h1>
          <p className="text-slate-500 mt-1 font-medium">System overview and content moderation for Bugema E-Library.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-xs font-bold text-slate-600 border-2 border-border-primary rounded-xl hover:bg-surface transition-all flex items-center gap-2">
            <FileDown className="w-4 h-4" /> Export Logs
          </button>
          <button className="px-4 py-2 text-xs font-bold text-white bg-primary rounded-xl hover:bg-black transition-all shadow-lg shadow-primary/20 flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" /> System Health
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Active Users" value="4,281" change="+12% from last month" icon={Users} />
        <StatCard label="Published E-Books" value="1,892" change="+5% growth" icon={BookOpen} />
        <StatCard label="Pending Approvals" value="24" change="Needs attention" icon={CheckCircle} />
        <StatCard label="Total Downloads" value="12.5k" change="Steady traffic" icon={Download} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
           <h3 className="text-lg font-black text-primary">Moderation Queue</h3>
           <Link href="/admin/approvals" className="text-xs font-bold text-primary-light hover:underline">View Full Queue</Link>
        </div>
        <ModerationQueue items={PENDING_SUBMISSIONS.slice(0, 5)} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         {/* System Logs */}
         <div className="bg-white rounded-2xl shadow-card border border-border-primary overflow-hidden h-fit">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
               <h3 className="font-bold text-primary flex items-center gap-2">
                 <Activity className="w-5 h-5 text-primary-light" /> Recent System Logs
               </h3>
               <Link href="#" className="text-xs font-bold text-slate-400 hover:text-primary-light">Filter</Link>
            </div>
            <div className="p-2 space-y-1">
               {SYSTEM_LOGS.map((log) => (
                 <div key={log.id} className="p-4 rounded-xl hover:bg-slate-50 flex items-center justify-between group transition-colors">
                    <div className="flex items-center gap-4">
                       <div className={`p-2 rounded-lg ${
                         log.type === 'error' ? 'bg-red-50 text-red-500' :
                         log.type === 'warning' ? 'bg-amber-50 text-amber-500' :
                         log.type === 'success' ? 'bg-green-50 text-green-500' : 'bg-surface text-primary-light'
                       }`}>
                          {log.type === 'error' ? <AlertTriangle className="w-4 h-4" /> : <Info className="w-4 h-4" />}
                       </div>
                       <p className="text-sm font-medium text-slate-600 line-clamp-1">{log.message}</p>
                    </div>
                    <span className="text-[10px] font-bold text-slate-300 min-w-fit">{log.timestamp}</span>
                 </div>
               ))}
               <Link href="#" className="flex items-center justify-center py-4 text-xs font-bold text-primary-light hover:underline gap-1 mt-2">
                 View all system logs <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
         </div>

         {/* Resources Management */}
         <div className="bg-white rounded-2xl shadow-card border border-border-primary p-8 space-y-6">
            <h3 className="font-bold text-primary">Library Quick Tips</h3>
            
            <div className="p-6 bg-surface rounded-2xl border border-primary-light/5">
                <p className="text-xs text-primary-light font-black uppercase tracking-[0.2em] mb-2">Moderation Policy</p>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Ensure all PDFs have a valid Title and Author field. Reject scans that are illegible or missing citations.
                </p>
            </div>

            <div className="space-y-4 pt-2">
               <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                  <div className="flex items-center gap-3">
                     <Users className="w-5 h-5 text-slate-400" />
                     <span className="text-sm font-bold text-slate-700">User Support</span>
                  </div>
                  <span className="text-xs font-bold text-primary-light">3 tickets awaiting</span>
               </div>
               <button className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-sm shadow-xl shadow-primary/20 hover:bg-black transition-all">
                  Open Support Portal
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
