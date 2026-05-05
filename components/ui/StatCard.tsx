import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  icon?: LucideIcon;
}

export function StatCard({ label, value, change, icon: Icon }: StatCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-white rounded-xl shadow-card border border-border-primary flex items-start justify-between"
    >
      <div>
        <p className="text-sm font-medium text-slate-500 mb-1">{label}</p>
        <h3 className="text-2xl font-bold text-primary">{value}</h3>
        {change && (
          <p className="text-xs font-medium text-success mt-1">{change}</p>
        )}
      </div>
      {Icon && (
        <div className="p-2 bg-surface rounded-lg">
          <Icon className="w-5 h-5 text-primary-light" />
        </div>
      )}
    </motion.div>
  );
}
