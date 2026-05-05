'use client';

import React from 'react';
import { StatCard } from '@/components/ui/StatCard';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  BookOpen, 
  Download, 
  ChevronRight, 
  Calendar,
  Layers,
  PieChart as PieChartIcon
} from 'lucide-react';
import { CATEGORIES } from '@/lib/dummy-data';

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-primary">System Analytics</h1>
          <p className="text-slate-500 mt-1 font-medium">Real-time performance metrics and user engagement tracking.</p>
        </div>
        <button className="px-4 py-2 text-xs font-bold text-slate-600 border-2 border-border-primary rounded-xl hover:bg-surface transition-all flex items-center gap-2">
           <Calendar className="w-4 h-4" /> Last 30 Days
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Impact" value="4.2M" change="+12% hits" icon={TrendingUp} />
        <StatCard label="Server Load" value="12%" change="Optimized" icon={Layers} />
        <StatCard label="Active Scholars" value="1.2k" change="+82 today" icon={Users} />
        <StatCard label="Storage Index" value="2.1 TB" change="+45 GB/mo" icon={BookOpen} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 space-y-8">
            {/* Monthly Uploads Mock Chart */}
            <div className="bg-white rounded-2xl shadow-card border border-border-primary p-8">
               <div className="flex items-center justify-between mb-10">
                  <h3 className="font-bold text-primary flex items-center gap-2">
                     <BarChart3 className="w-5 h-5 text-primary-light" /> Monthly Resource Growth
                  </h3>
                  <div className="flex gap-2">
                     <div className="flex items-center gap-1.5 px-3 py-1 bg-surface rounded-lg text-[10px] font-bold text-primary-light">
                        <div className="w-2 h-2 rounded-full bg-primary-light" /> UPLOADS
                     </div>
                  </div>
               </div>
               
               <div className="h-64 flex items-end justify-between gap-2 px-4">
                  {[45, 62, 58, 85, 72, 95, 110].map((val, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-4">
                       <div className="w-full bg-slate-50 rounded-t-lg relative group transition-all">
                          <div 
                            style={{ height: `${val}%` }} 
                            className="w-full bg-primary-light rounded-t-lg group-hover:bg-primary transition-all cursor-pointer relative"
                          >
                             <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                               {val}
                             </div>
                          </div>
                       </div>
                       <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                          {['MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP'][i]}
                       </span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Registration Trends */}
            <div className="bg-white rounded-2xl shadow-card border border-border-primary p-8">
               <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-primary">Global Reach by Category</h3>
                  <PieChartIcon className="w-5 h-5 text-slate-300" />
               </div>
               <div className="space-y-4">
                  {CATEGORIES.slice(0, 5).map((cat, i) => {
                    const percents = [42, 35, 28, 15, 10];
                    return (
                      <div key={cat} className="space-y-2">
                        <div className="flex justify-between text-xs font-bold">
                           <span className="text-primary">{cat}</span>
                           <span className="text-slate-400">{percents[i]}%</span>
                        </div>
                        <div className="h-2 bg-slate-50 rounded-full overflow-hidden">
                           <div 
                             style={{ width: `${percents[i]}%` }} 
                             className={cn(
                               "h-full rounded-full transition-all duration-1000",
                               i === 0 ? "bg-primary" : i === 1 ? "bg-primary-light" : "bg-primary-accent"
                             )}
                           />
                        </div>
                      </div>
                    );
                  })}
               </div>
            </div>
         </div>

         {/* Sidebar Stats */}
         <div className="space-y-8">
            <div className="bg-primary text-white rounded-2xl p-8 relative overflow-hidden">
               <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-6">Top Downloaded Resources</h3>
                  <div className="space-y-6">
                    {[1, 2, 3, 4, 5].map(i => (
                      <div key={i} className="flex items-start gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0 group cursor-pointer">
                         <div className="text-2xl font-black text-white/20 group-hover:text-white/100 transition-colors italic">0{i}</div>
                         <div className="min-w-0">
                            <p className="text-xs font-bold truncate leading-tight group-hover:text-primary-accent transition-colors">Microeconomics: An African Perspective</p>
                            <p className="text-[10px] text-white/40 mt-1 font-bold tracking-widest uppercase">1,240 READS</p>
                         </div>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="absolute -right-8 -top-8 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="bg-white rounded-2xl border border-border-primary p-8 shadow-sm">
               <h3 className="font-bold text-primary mb-6">User Regions</h3>
               <div className="space-y-4">
                  {[
                    { name: 'Uganda', val: '72%' },
                    { name: 'Kenya', val: '12%' },
                    { name: 'Tanzania', val: '8%' },
                    { name: 'Rwanda', val: '5%' },
                    { name: 'Other', val: '3%' },
                  ].map(region => (
                    <div key={region.name} className="flex items-center justify-between">
                       <span className="text-xs font-bold text-slate-500">{region.name}</span>
                       <div className="flex items-center gap-3">
                          <div className="w-24 h-1.5 bg-slate-50 rounded-full overflow-hidden">
                             <div style={{ width: region.val }} className="h-full bg-primary-light" />
                          </div>
                          <span className="text-[10px] font-black text-primary min-w-[30px]">{region.val}</span>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
