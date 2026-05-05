import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 rounded-lg border border-border-primary hover:bg-surface disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      
      {pages.map(page => {
        // Simple logic to show current, first, last and dots
        const isSelected = page === currentPage;
        const isNear = Math.abs(page - currentPage) <= 1;
        const isExtreme = page === 1 || page === totalPages;

        if (!isNear && !isExtreme) {
          if (page === 2 || page === totalPages - 1) {
            return <span key={page} className="px-2 text-slate-400">...</span>;
          }
          return null;
        }

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn(
              "w-10 h-10 rounded-lg text-sm font-bold transition-all",
              isSelected 
                ? "bg-primary-light text-white shadow-md shadow-primary-light/20" 
                : "border border-border-primary hover:border-primary-accent text-slate-600"
            )}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg border border-border-primary hover:bg-surface disabled:opacity-50 disabled:hover:bg-transparent transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
