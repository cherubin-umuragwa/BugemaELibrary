import React from 'react';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: 'Approved' | 'Pending' | 'Rejected' | 'Active' | 'Suspended';
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const styles = {
    Approved: "bg-green-100 text-green-700 border-green-200",
    Active: "bg-green-100 text-green-700 border-green-200",
    Pending: "bg-amber-100 text-amber-700 border-amber-200",
    Rejected: "bg-red-100 text-red-700 border-red-200",
    Suspended: "bg-red-100 text-red-700 border-red-200",
  };

  const currentStyles = styles[status as keyof typeof styles] || styles.Pending;

  return (
    <span className={cn(
      "px-2.5 py-0.5 text-xs font-bold rounded-full border",
      currentStyles,
      className
    )}>
      {status}
    </span>
  );
}
