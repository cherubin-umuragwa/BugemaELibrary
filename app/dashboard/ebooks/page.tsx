'use client';

import React, { useState } from 'react';
import { BOOKS, CATEGORIES } from '@/lib/dummy-data';
import { BookCard } from '@/components/ui/BookCard';
import { SearchBar } from '@/components/ui/SearchBar';
import { SlidersHorizontal, LayoutGrid, List } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DashboardEbooksPage() {
  const [search, setSearch] = useState('');
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBooks = BOOKS.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) || 
                         book.author.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || book.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-primary">Library Catalog</h1>
        <p className="text-slate-500 mt-1 font-medium">Browse and search the full collection of digital resources available to you.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
        <SearchBar 
          value={search} 
          onChange={setSearch} 
          placeholder="Search books, authors, or research topics..." 
          className="max-w-xl"
        />

        <div className="flex items-center gap-3 bg-white p-1.5 rounded-xl border border-border-primary shadow-sm h-fit">
          <button 
            onClick={() => setViewType('grid')}
            className={cn(
              "p-2 rounded-lg transition-all",
              viewType === 'grid' ? "bg-primary text-white" : "text-slate-400 hover:text-primary"
            )}
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setViewType('list')}
            className={cn(
              "p-2 rounded-lg transition-all",
              viewType === 'list' ? "bg-primary text-white" : "text-slate-400 hover:text-primary"
            )}
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Categories Scroller */}
      <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar">
         {['All', ...CATEGORIES.slice(0, 10)].map(cat => (
           <button
             key={cat}
             onClick={() => setActiveCategory(cat)}
             className={cn(
               "px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all border",
               activeCategory === cat 
                 ? "bg-primary text-white border-primary shadow-lg shadow-primary/20" 
                 : "bg-white text-slate-500 border-border-primary hover:border-primary-light"
             )}
           >
             {cat}
           </button>
         ))}
      </div>

      <div className={cn(
        "grid gap-8",
        viewType === 'grid' ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
      )}>
        {filteredBooks.map(book => (
          <BookCard 
            key={book.id} 
            book={book} 
            viewType={viewType}
          />
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div className="py-32 text-center bg-white rounded-3xl border border-border-primary border-dashed">
          <div className="w-16 h-16 bg-surface rounded-full flex items-center justify-center mx-auto mb-4">
             <SlidersHorizontal className="w-6 h-6 text-slate-300" />
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">No results found</h3>
          <p className="text-slate-500 max-w-xs mx-auto text-sm">We couldn&apos;t find anything matching your search. Try adjusting your keywords or category.</p>
        </div>
      )}
    </div>
  );
}
