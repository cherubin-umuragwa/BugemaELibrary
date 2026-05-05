'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Plus, Search, Eye, Edit, Trash2, ChevronLeft, ChevronRight, SlidersHorizontal, Upload as UploadIcon, BarChart3, TrendingUp, Check } from 'lucide-react';
import { MY_UPLOADS, CATEGORIES } from '@/lib/dummy-data';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { SearchBar } from '@/components/ui/SearchBar';
import { motion, AnimatePresence } from 'framer-motion';

export default function MyUploadsPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredUploads = useMemo(() => {
    return MY_UPLOADS.filter(u => {
      const matchesSearch = u.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category ? u.category === category : true;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const totalPages = Math.ceil(filteredUploads.length / itemsPerPage);
  const paginatedUploads = filteredUploads.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-primary">My Uploads</h1>
          <p className="text-slate-500 mt-1 font-medium">Manage and track the status of your submitted academic resources.</p>
        </div>
        <Link 
          href="/dashboard/publish" 
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary-light text-white rounded-xl font-bold text-sm shadow-xl shadow-primary-light/20 hover:bg-primary-accent transition-all whitespace-nowrap"
        >
          <Plus className="w-5 h-5" /> Publish New Resource
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-card border border-border-primary overflow-hidden">
        {/* Filters */}
        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row gap-4 items-center justify-between">
           <SearchBar 
             value={search} 
             onChange={setSearch} 
             placeholder="Search by title..." 
             className="max-w-xs" 
           />
           
           <div className="flex items-center gap-3 w-full md:w-auto">
             <div className="relative flex-1 md:flex-none">
                <select 
                  className="w-full md:w-auto appearance-none bg-slate-50 border border-transparent rounded-xl px-4 py-2.5 text-xs font-bold text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary-light pr-10 cursor-pointer"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.slice(0, 8).map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <ChevronLeft className="absolute right-3 top-3 w-3 h-3 text-slate-400 pointer-events-none -rotate-90" />
             </div>
             <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 text-slate-600 rounded-xl font-bold text-xs border border-transparent hover:border-border-primary transition-all">
                <SlidersHorizontal className="w-3.5 h-3.5" /> Filter
             </button>
           </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border-primary bg-surface/30 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-4">Title & Description</th>
                <th className="px-6 py-4">Date Uploaded</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">File Size</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-primary">
              {paginatedUploads.map((upload) => (
                <tr key={upload.id} className="hover:bg-surface/10 transition-colors group">
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-primary line-clamp-1">{upload.title}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{upload.category}</p>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm font-medium text-slate-600">{upload.submittedAt}</p>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={upload.status} />
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-slate-500">{upload.fileSize}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3">
                      <button className="p-1.5 text-slate-400 hover:text-primary-light transition-colors rounded-lg hover:bg-surface">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-amber-500 transition-colors rounded-lg hover:bg-amber-50">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-red-500 transition-colors rounded-lg hover:bg-red-50">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
           <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Showing <span className="text-primary">{Math.min((currentPage-1)*itemsPerPage+1, filteredUploads.length)}-{Math.min(currentPage*itemsPerPage, filteredUploads.length)}</span> of {filteredUploads.length} uploads
           </p>
           <div className="flex items-center gap-4">
              <button 
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-border-primary hover:bg-surface disabled:opacity-50 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-primary">Page {currentPage} of {totalPages || 1}</span>
              <button 
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
                className="p-2 rounded-lg border border-border-primary hover:bg-surface disabled:opacity-50 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
           </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
         <div className="p-6 bg-white rounded-2xl border border-border-primary shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-primary-light">
               <UploadIcon className="w-6 h-6" />
            </div>
            <div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Uploads</p>
               <h4 className="text-xl font-bold text-primary">12</h4>
            </div>
         </div>
         <div className="p-6 bg-white rounded-2xl border border-border-primary shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-primary-light">
               <BarChart3 className="w-6 h-6" />
            </div>
            <div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Reads</p>
               <h4 className="text-xl font-bold text-primary">1,482</h4>
            </div>
         </div>
         <div className="p-6 bg-white rounded-2xl border border-border-primary shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 bg-surface rounded-xl flex items-center justify-center text-primary-light">
               <Check className="w-6 h-6" />
            </div>
            <div>
               <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Approval Rate</p>
               <h4 className="text-xl font-bold text-primary">92%</h4>
            </div>
         </div>
      </div>
    </div>
  );
}
