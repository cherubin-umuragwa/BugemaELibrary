import React from 'react';
import Link from 'next/link';
import { Book as BookIcon, Download, Eye } from 'lucide-react';
import { Book } from '@/types';
import { motion } from 'framer-motion';

interface BookCardProps {
  book: Book;
  viewType?: 'grid' | 'list';
}

export function BookCard({ book, viewType = 'grid' }: BookCardProps) {
  if (viewType === 'list') {
    return (
      <div className="p-4 bg-white rounded-xl border border-border-primary hover:border-primary-accent transition-all flex gap-4 items-center shadow-sm">
        <div className={`w-16 h-20 rounded shadow-sm flex items-center justify-center ${book.coverColor || 'bg-blue-600'}`}>
          <BookIcon className="w-8 h-8 text-white/40" />
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h4 className="font-bold text-primary">{book.title}</h4>
            <span className="text-xs font-medium px-2 py-1 bg-surface text-primary-light rounded">{book.category}</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">{book.author} • {book.year}</p>
        </div>
        <div className="flex gap-2">
          <Link href={`/ebooks/${book.id}`} className="p-2 text-primary-light hover:bg-surface rounded transition-colors">
            <Eye className="w-5 h-5" />
          </Link>
          <button className="p-2 text-primary-light hover:bg-surface rounded transition-colors">
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow-card border border-border-primary overflow-hidden flex flex-col h-full group"
    >
      <div className={`aspect-[3/4] relative ${book.coverColor || 'bg-blue-600'} flex items-center justify-center p-6 transition-all group-hover:brightness-110`}>
        <div className="absolute top-2 right-2 z-10">
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-white/20 backdrop-blur-md text-white rounded-full">
            {book.category}
          </span>
        </div>
        <BookIcon className="w-20 h-20 text-white/20" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
           <p className="text-xs font-bold opacity-80 uppercase tracking-widest mb-1">E-BOOK</p>
           <h4 className="text-sm font-bold leading-tight line-clamp-2">{book.title}</h4>
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-primary line-clamp-1">{book.title}</h3>
        <p className="text-xs text-slate-500 mt-1">{book.author}</p>
        <p className="text-xs text-slate-400 mt-3 line-clamp-2 flex-1">{book.description}</p>
        
        <div className="flex items-center justify-between mt-4 pb-3 border-b border-slate-50">
          <span className="text-[10px] font-bold text-slate-400">{book.year}</span>
          <span className="text-[10px] font-bold text-slate-400">{book.pages} PAGES</span>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mt-4">
          <Link 
            href={`/ebooks/${book.id}`}
            className="flex items-center justify-center gap-1.5 py-2 text-xs font-bold text-primary-light border border-primary-light rounded-lg hover:bg-surface transition-colors"
          >
            <Eye className="w-3.5 h-3.5" /> View
          </Link>
          <button className="flex items-center justify-center gap-1.5 py-2 text-xs font-bold bg-primary-light text-white rounded-lg hover:bg-primary-accent transition-colors">
            <Download className="w-3.5 h-3.5" /> Download
          </button>
        </div>
      </div>
    </motion.div>
  );
}
