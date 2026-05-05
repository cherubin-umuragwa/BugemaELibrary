'use client';

import React, { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SearchBar } from '@/components/ui/SearchBar';
import { BookCard } from '@/components/ui/BookCard';
import { Pagination } from '@/components/ui/Pagination';
import { BOOKS, CATEGORIES } from '@/lib/dummy-data';
import { SlidersHorizontal, Grid, List as ListIcon, ChevronDown, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function EbooksCatalog() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredBooks = useMemo(() => {
    return BOOKS.filter(book => {
      const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) || 
                          book.author.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory ? book.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const paginatedBooks = filteredBooks.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Discover Our Digital Collection</h1>
            <p className="text-slate-500">Access thousands of textbooks, research papers, and periodicals from the Bugema University academic archives.</p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <SearchBar 
                value={search} 
                onChange={(val) => { setSearch(val); setCurrentPage(1); }} 
                placeholder="By title, author, ISBN, or keywords..."
                className="max-w-none flex-1" 
              />
              <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:bg-black transition-all">
                Search
              </button>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 pb-8 border-b border-slate-50">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-surface text-primary-light rounded-xl font-bold text-sm">
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </div>
              
              <div className="relative group">
                <select 
                  className="appearance-none bg-white border border-border-primary rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary-light pr-10 cursor-pointer"
                  value={selectedCategory}
                  onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>

              {selectedCategory && (
                <button 
                  onClick={() => setSelectedCategory('')}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <X className="w-3.5 h-3.5" /> Clear All
                </button>
              )}
            </div>

            <div className="flex items-center gap-6">
              <div className="flex bg-slate-50 p-1 rounded-xl border border-border-primary">
                <button 
                  onClick={() => setViewType('grid')}
                  className={cn(
                    "p-2 rounded-lg transition-all",
                    viewType === 'grid' ? "bg-white text-primary shadow-sm" : "text-slate-400"
                  )}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewType('list')}
                  className={cn(
                    "p-2 rounded-lg transition-all",
                    viewType === 'list' ? "bg-white text-primary shadow-sm" : "text-slate-400"
                  )}
                >
                  <ListIcon className="w-4 h-4" />
                </button>
              </div>

              <div className="relative group">
                <select className="appearance-none bg-white border border-border-primary rounded-xl px-4 py-2.5 text-sm font-medium text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary-light pr-10 cursor-pointer">
                  <option>Sort by: Newest</option>
                  <option>Title: A-Z</option>
                  <option>Most Popular</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-sm font-medium text-slate-500">
              Showing <span className="text-primary font-bold">{Math.min((currentPage - 1) * itemsPerPage + 1, filteredBooks.length)}-{Math.min(currentPage * itemsPerPage, filteredBooks.length)}</span> of <span className="text-primary font-bold">{filteredBooks.length.toLocaleString()}</span> results
            </p>
          </div>

          {/* Book Grid */}
          <div className={cn(
            "grid gap-8",
            viewType === 'grid' ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" : "grid-cols-1"
          )}>
            <AnimatePresence mode="popLayout">
              {paginatedBooks.map((book) => (
                <motion.div
                  key={book.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <BookCard book={book} viewType={viewType} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty State */}
          {paginatedBooks.length === 0 && (
            <div className="py-24 text-center">
              <div className="p-6 bg-surface rounded-full w-fit mx-auto mb-6 border border-border-primary">
                 <Search className="w-12 h-12 text-primary-light" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-2">No matching resources found</h3>
              <p className="text-slate-500 max-w-sm mx-auto">Try adjusting your search terms or filters to find what you&apos;re looking for.</p>
              <button 
                onClick={() => { setSearch(''); setSelectedCategory(''); }}
                className="mt-8 px-6 py-2.5 text-sm font-bold text-primary-light border-2 border-primary-light rounded-xl hover:bg-surface transition-all"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          <div className="mt-20">
            <Pagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
