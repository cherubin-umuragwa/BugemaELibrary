'use client';

import React, { useState } from 'react';
import { ModerationQueue } from '@/components/moderation/ModerationQueue';
import { PENDING_SUBMISSIONS, CATEGORIES } from '@/lib/dummy-data';
import { CheckCircle, Clock, XCircle, Filter, Calendar, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ApprovalsPage() {
  const [activeTab, setActiveTab] = useState<'Pending' | 'Approved' | 'Rejected'>('Pending');

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-primary">Moderation Queue</h1>
        <p className="text-slate-500 mt-1 font-medium italic">Full-scale content review and verification portal.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex-1 w-full space-y-6">
           {/* Tabs */}
           <div className="flex bg-white p-1 rounded-2xl border border-border-primary shadow-sm w-fit">
              {[
                { name: 'Pending', icon: Clock, count: 24, color: 'text-amber-500' },
                { name: 'Approved', icon: CheckCircle, count: 1240, color: 'text-green-500' },
                { name: 'Rejected', icon: XCircle, count: 15, color: 'text-red-500' }
              ].map(tab => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name as any)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all",
                    activeTab === tab.name 
                      ? "bg-slate-900 text-white shadow-lg shadow-slate-900/10" 
                      : "text-slate-500 hover:bg-slate-50"
                  )}
                >
                  <tab.icon className={cn("w-4 h-4", activeTab === tab.name ? "text-white" : tab.color)} />
                  {tab.name}
                  <span className={cn(
                    "ml-1 px-1.5 py-0.5 rounded-md text-[10px] font-black",
                    activeTab === tab.name ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400"
                  )}>
                    {tab.count}
                  </span>
                </button>
              ))}
           </div>

           <ModerationQueue items={PENDING_SUBMISSIONS} />
        </div>

        <aside className="w-full lg:w-80 space-y-6 shrink-0">
          <div className="bg-white rounded-2xl border border-border-primary p-6 shadow-sm">
             <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
                <Filter className="w-4 h-4 text-primary-light" /> Refine Queue
             </h4>
             
             <div className="space-y-6">
                <div>
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Category Filter</label>
                   <select className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm font-medium text-slate-600 focus:ring-1 focus:ring-primary-light">
                      <option>All Academic Fields</option>
                      {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                   </select>
                </div>

                <div>
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Submission Era</label>
                   <div className="grid grid-cols-2 gap-2">
                      <button className="py-2 bg-primary text-white rounded-lg text-[10px] font-bold">24 HOURS</button>
                      <button className="py-2 bg-slate-50 text-slate-400 rounded-lg text-[10px] font-bold hover:bg-slate-100 transition-colors">THIS WEEK</button>
                   </div>
                </div>

                <div>
                   <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Search Contributor</label>
                   <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <input type="text" placeholder="Dr. Samuel..." className="w-full pl-9 pr-4 py-3 bg-slate-50 border-none rounded-xl text-sm focus:ring-1 focus:ring-primary-light" />
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-primary text-white rounded-2xl p-8 relative overflow-hidden">
             <div className="relative z-10">
                <p className="text-[10px] font-black text-white/50 uppercase tracking-widest mb-2">Bulk Actions</p>
                <h4 className="text-lg font-bold mb-4">Auto-verify submissions from Faculty Members?</h4>
                <div className="space-y-2">
                   <button className="w-full py-3 bg-white text-primary rounded-xl font-bold text-xs hover:bg-slate-100 transition-all">ENABLE AUTO-QUEUE</button>
                   <p className="text-[10px] text-white/40 italic text-center">Affects 12 items currently</p>
                </div>
             </div>
             <CheckCircle className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5" />
          </div>
        </aside>
      </div>
    </div>
  );
}
