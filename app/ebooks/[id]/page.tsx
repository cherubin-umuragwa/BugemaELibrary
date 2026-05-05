'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BookCard } from '@/components/ui/BookCard';
import { BOOKS } from '@/lib/dummy-data';
import { 
  Download, 
  BookOpen, 
  Share2, 
  Bookmark, 
  Quote, 
  Printer, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2,
  FileText,
  Clock,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function BookDetailPage() {
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPreviewPages = 42;
  
  const book = useMemo(() => {
    return BOOKS.find(b => b.id === params.id) || BOOKS[0];
  }, [params.id]);

  const recommendedBooks = BOOKS.filter(b => b.id !== book.id).slice(0, 5);

  return (
    <div className="min-h-screen bg-slate-50/50">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex mb-8 text-xs font-bold uppercase tracking-widest text-slate-400 gap-2 items-center overflow-x-auto whitespace-nowrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/ebooks" className="hover:text-primary transition-colors">E-Books</Link>
            <span>/</span>
            <span className="text-primary truncate">{book.title}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Sidebar */}
            <aside className="w-full lg:w-80 shrink-0 sticky top-32">
              <div className="bg-white rounded-2xl shadow-card border border-border-primary overflow-hidden mb-6 p-1.5 transition-transform hover:scale-[1.02] duration-500">
                <div className={cn("aspect-[3/4] rounded-xl flex flex-col items-center justify-center p-8 text-white relative", book.coverColor || 'bg-blue-600')}>
                   <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-lg">
                      <BookOpen className="w-5 h-5 text-white/80" />
                   </div>
                   <div className="text-center">
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 opacity-70">BUGEMA UNIVERSITY</p>
                     <h3 className="text-lg font-bold leading-tight mb-2 px-4">{book.title}</h3>
                     <p className="text-xs font-medium italic opacity-80">{book.author}</p>
                   </div>
                   <div className="absolute bottom-6 left-0 right-0 flex justify-center">
                      <span className="text-[10px] font-bold tracking-widest opacity-60">BUGEMA UNIVERSITY PRESS</span>
                   </div>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <button className="w-full py-3.5 border-2 border-primary-light text-primary-light rounded-xl font-bold text-sm hover:bg-surface transition-all flex items-center justify-center gap-2 group">
                  <BookOpen className="w-4 h-4 transition-transform group-hover:scale-110" /> READ ONLINE
                </button>
                <button className="w-full py-3.5 bg-primary-light text-white rounded-xl font-bold text-sm shadow-lg shadow-primary-light/20 hover:bg-primary-accent transition-all flex items-center justify-center gap-2 group">
                  <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" /> DOWNLOAD PDF
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-border-primary p-6 mb-6 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary mb-4 border-b border-slate-50 pb-3">Publication Info</h4>
                <div className="space-y-3">
                   <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-400">ISBN</span>
                      <span className="font-medium text-slate-600">{book.isbn}</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-400">Format</span>
                      <span className="font-medium text-slate-600">Digital PDF</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-400">Language</span>
                      <span className="font-medium text-slate-600">English</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-400">Pages</span>
                      <span className="font-medium text-slate-600">{book.pages}</span>
                   </div>
                   <div className="flex justify-between items-center text-xs">
                      <span className="font-bold text-slate-400">Year</span>
                      <span className="font-medium text-slate-600">{book.year}</span>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-xl border border-border-primary text-slate-400 hover:text-primary transition-all shadow-sm">
                    <Share2 className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Share</span>
                 </button>
                 <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-xl border border-border-primary text-slate-400 hover:text-primary transition-all shadow-sm">
                    <Bookmark className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Save</span>
                 </button>
                 <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-xl border border-border-primary text-slate-400 hover:text-primary transition-all shadow-sm">
                    <Quote className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Cite</span>
                 </button>
                 <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white rounded-xl border border-border-primary text-slate-400 hover:text-primary transition-all shadow-sm">
                    <Printer className="w-5 h-5" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">Print</span>
                 </button>
              </div>
            </aside>

            {/* Main Area */}
            <div className="flex-1 space-y-8 min-w-0">
               <div>
                  <span className="inline-block px-3 py-1 bg-surface text-primary-light text-[10px] font-black uppercase tracking-wider rounded-md mb-4 border border-primary-light/10">
                    {book.category}
                  </span>
                  <h1 className="text-4xl lg:text-5xl font-black text-primary mb-6 leading-tight">{book.title}</h1>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full text-slate-600 font-bold">
                       <UserPlus className="w-4 h-4" /> {book.author}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 font-medium">
                       <Clock className="w-4 h-4" /> Added 2 months ago
                    </div>
                    <div className="flex items-center gap-2 text-primary-light font-bold">
                       <CheckCircle className="w-4 h-4" /> Scholarly Resource
                    </div>
                  </div>
               </div>

               {/* PDF Viewer Placeholder */}
               <div className="bg-[#e2e8f0] rounded-2xl border border-border-primary overflow-hidden shadow-inner flex flex-col h-[700px]">
                  <div className="bg-white border-b border-border-primary p-4 flex items-center justify-between">
                     <div className="flex items-center gap-4 px-3 py-1.5 bg-surface rounded-lg text-[10px] font-bold text-primary border border-primary-light/10">
                        <span className="opacity-50">100%</span>
                     </div>
                     <div className="flex items-center gap-6">
                        <div className="flex items-center gap-4">
                           <button 
                             onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                             className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors"
                           >
                             <ChevronLeft className="w-5 h-5" />
                           </button>
                           <span className="text-xs font-bold text-slate-600">
                             {currentPage} / {totalPreviewPages}
                           </span>
                           <button 
                             onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
                             className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 transition-colors"
                           >
                             <ChevronRight className="w-5 h-5" />
                           </button>
                        </div>
                     </div>
                     <div className="flex items-center gap-2">
                        <button className="p-2 text-slate-400 hover:text-primary"><Printer className="w-5 h-5" /></button>
                        <button className="p-2 text-slate-400 hover:text-primary"><Maximize2 className="w-5 h-5" /></button>
                     </div>
                  </div>
                  
                  <div className="flex-1 overflow-auto p-8 flex justify-center bg-slate-300/40">
                     <motion.div 
                        key={currentPage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full max-w-[550px] aspect-[1/1.4] bg-white shadow-2xl rounded-sm p-12 flex flex-col relative"
                      >
                        <p className="text-[10px] text-slate-300 absolute top-8 left-12 font-bold tracking-widest uppercase">Bugema University Library | Page {currentPage}</p>
                        
                        {/* Simulated text lines */}
                        <div className="flex-1 flex flex-col justify-center items-center gap-8 relative border-2 border-slate-50 rounded-lg">
                           <div className="text-slate-100 select-none pointer-events-none">
                              <FileText className="w-32 h-32" />
                           </div>
                           <div className="absolute inset-0 p-8 space-y-4">
                              <div className="h-4 bg-slate-100/50 rounded w-full" />
                              <div className="h-4 bg-slate-100/50 rounded w-full" />
                              <div className="h-4 bg-slate-100/50 rounded w-3/4" />
                              <div className="h-4 bg-slate-50 rounded w-full mt-8" />
                              <div className="h-4 bg-slate-50 rounded w-full" />
                              <div className="h-4 bg-slate-50 rounded w-11/12" />
                              <div className="h-4 bg-slate-50 rounded w-full" />
                              <div className="h-4 bg-slate-50 rounded w-full" />
                              <div className="h-4 bg-slate-50 rounded w-5/6" />
                           </div>
                           
                           {currentPage > 5 && (
                             <div className="absolute inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center p-12 text-center">
                                <Link href="/login" className="px-8 py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-xl shadow-primary/20 mb-4">LOG IN TO CONTINUE READING</Link>
                                <p className="text-sm text-slate-400 font-medium">Restricted to first 5 pages for visitors</p>
                             </div>
                           )}
                        </div>
                        
                        <p className="text-[10px] text-slate-200 text-center font-bold absolute bottom-8 left-0 right-0">© {book.year} BUGEMA UNIVERSITY PRESS • ALL RIGHTS RESERVED</p>
                     </motion.div>
                  </div>
                  
                  <div className="bg-slate-900 px-6 py-2.5 text-center">
                     <p className="text-[10px] text-white/50 font-bold tracking-[0.2em] uppercase">Private & Secured Document Rendering Engine</p>
                  </div>
               </div>

               {/* Description */}
               <div className="bg-white rounded-2xl border border-border-primary p-8 shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-6">About this Publication</h3>
                  <p className="text-slate-500 leading-relaxed text-sm mb-8">
                    {book.description} This comprehensive resource provided by the Bugema University library collection aims to support academic excellence and depth in research. Specifically, it offers readers critical insights, data-driven analysis, and academic context relevant to its field. 
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["#Sustainability", "#Farming", "#EastAfrica", "#Research", "#Ecology"].map(tag => (
                      <span key={tag} className="px-3 py-1 bg-surface text-primary-light text-[11px] font-bold rounded-lg border border-primary-light/5 hover:border-primary-light/20 transition-all cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
               </div>

               {/* Recommended Section */}
               <div>
                  <div className="flex items-center justify-between mb-8">
                     <h3 className="text-xl font-bold text-primary">Recommended Resources</h3>
                     <Link href="/ebooks" className="text-xs font-bold text-primary-light hover:underline flex items-center gap-1 group">
                        View All E-Books <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                     </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                     {recommendedBooks.map(b => (
                       <div key={b.id} className="min-w-0">
                         <div className={`aspect-[3/4] rounded-xl mb-3 flex flex-col items-center justify-center text-white px-4 relative ${b.coverColor || 'bg-blue-600'} group cursor-pointer overflow-hidden`}>
                            <div className="text-center transition-transform group-hover:scale-95">
                               <h4 className="text-[10px] font-bold line-clamp-3 mb-1 px-2">{b.title}</h4>
                               <p className="text-[8px] opacity-70 italic line-clamp-1">{b.author}</p>
                            </div>
                            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                               <Link href={`/ebooks/${b.id}`} className="px-4 py-2 bg-white rounded-lg text-primary text-[10px] font-bold shadow-xl">VIEW</Link>
                            </div>
                         </div>
                         <h4 className="text-xs font-bold text-primary truncate px-1">{b.title}</h4>
                         <p className="text-[10px] text-slate-400 px-1 truncate">{b.author}</p>
                       </div>
                     ))}
                  </div>
               </div>

               {/* CTA Banner */}
               <div className="bg-primary text-white rounded-2xl p-10 overflow-hidden relative shadow-2xl shadow-primary/20">
                  <div className="absolute top-0 right-0 p-16 opacity-5 rotate-12">
                     <BookOpen className="w-64 h-64" />
                  </div>
                  <div className="relative z-10 text-center max-w-xl mx-auto">
                     <h3 className="text-2xl font-bold mb-4">Found this resource helpful?</h3>
                     <p className="text-white/60 text-sm mb-8">Login to access your personal bookshelf and sync your reading progress across devices.</p>
                     <div className="flex flex-wrap justify-center gap-4">
                       <Link href="/login" className="px-8 py-3 bg-white text-primary rounded-xl font-bold text-sm hover:bg-slate-100 transition-all">LOG IN</Link>
                       <Link href="/register" className="px-8 py-3 border-2 border-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-all">CREATE ACCOUNT</Link>
                     </div>
                  </div>
               </div>
            </div>
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

function UserPlus(props: any) {
  return (
    <svg 
      {...props} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="16" x2="22" y1="11" y2="11" />
    </svg>
  );
}
