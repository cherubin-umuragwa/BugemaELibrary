'use client';

import React, { useState } from 'react';
import { Eye, Check, X, MoreVertical } from 'lucide-react';
import { Submission } from '@/types';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { motion, AnimatePresence } from 'framer-motion';

interface ModerationQueueProps {
  items: Submission[];
}

export function ModerationQueue({ items }: ModerationQueueProps) {
  const [queue, setQueue] = useState(items);
  const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  const handleAction = (id: string, action: 'approve' | 'reject') => {
    setQueue(prev => prev.filter(item => item.id !== id));
    
    setToast({
      message: action === 'approve' ? 'Approved successfully' : 'Submission rejected',
      type: action === 'approve' ? 'success' : 'error'
    });

    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-card border border-border-primary overflow-hidden relative">
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute top-4 right-4 z-50 px-4 py-2 rounded-xl text-sm font-bold shadow-lg flex items-center gap-2 ${
              toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
            }`}
          >
            {toast.type === 'success' ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-body">
          <thead>
            <tr className="border-b border-border-primary bg-surface/50 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <th className="px-6 py-4">Document Title</th>
              <th className="px-6 py-4">Contributor</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Submitted</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-primary">
            {queue.map((item) => (
              <tr key={item.id} className="hover:bg-surface/30 transition-colors group">
                <td className="px-6 py-4">
                  <p className="text-sm font-bold text-primary line-clamp-1">{item.title}</p>
                  <p className="text-[10px] text-slate-400 font-medium">PDF Document • {item.fileSize}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="text-sm font-medium text-slate-600">{item.contributor}</p>
                </td>
                <td className="px-6 py-4">
                   <span className="text-[10px] font-bold px-2 py-1 bg-surface text-primary-light rounded uppercase">
                    {item.category}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm text-slate-500">{item.submittedAt}</p>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1.5 text-slate-400 hover:text-primary transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleAction(item.id, 'approve')}
                      className="px-3 py-1.5 text-xs font-bold text-primary-light hover:bg-surface rounded-lg transition-colors"
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => handleAction(item.id, 'reject')}
                      className="px-3 py-1.5 text-xs font-bold text-slate-400 hover:text-red-500 transition-colors"
                    >
                      Reject
                    </button>
                    <button className="p-1.5 text-slate-400 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {queue.length === 0 && (
        <div className="p-12 text-center">
          <div className="p-4 bg-surface rounded-full w-fit mx-auto mb-4 border border-border-primary">
            <Check className="w-8 h-8 text-primary-light" />
          </div>
          <h4 className="font-bold text-primary">All Clear!</h4>
          <p className="text-sm text-slate-500">No pending submissions to moderate.</p>
        </div>
      )}
    </div>
  );
}
