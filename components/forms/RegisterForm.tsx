'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { User, Mail, Lock, ShieldCheck, AlertCircle, Info } from 'lucide-react';

export function RegisterForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    studentId: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [error, setError] = useState<string | null>(null);

  const isValid = 
    formData.fullName && 
    formData.studentId && 
    formData.email.includes('@bugema.edu') && 
    formData.password && 
    formData.password === formData.confirmPassword && 
    formData.acceptTerms;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-border-primary rounded-xl bg-white placeholder-slate-300 focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent sm:text-sm transition-all"
              placeholder="e.g. Samuel Okello"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Student ID / Faculty ID</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <ShieldCheck className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-border-primary rounded-xl bg-white placeholder-slate-300 focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent sm:text-sm transition-all"
              placeholder="e.g. S23/B345/UG"
              value={formData.studentId}
              onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">University Email</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="email"
            className="block w-full pl-10 pr-3 py-3 border border-border-primary rounded-xl bg-white placeholder-slate-300 focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent sm:text-sm transition-all"
            placeholder="student@bugema.edu"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="password"
              className="block w-full pl-10 pr-3 py-3 border border-border-primary rounded-xl bg-white placeholder-slate-300 focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent sm:text-sm transition-all"
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Confirm Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="password"
              className="block w-full pl-10 pr-3 py-3 border border-border-primary rounded-xl bg-white placeholder-slate-300 focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent sm:text-sm transition-all"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            className="h-4 w-4 text-primary-light focus:ring-primary-accent border-gray-300 rounded"
            checked={formData.acceptTerms}
            onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
          />
        </div>
        <div className="ml-3 text-xs">
          <label htmlFor="terms" className="font-bold text-slate-700">Accept library terms and conditions</label>
          <p className="text-slate-500 mt-1">I agree to the Digital Resource Policy and university library usage guidelines.</p>
        </div>
      </div>

      <div className="p-4 bg-surface border border-border-primary rounded-xl flex gap-3">
        <Info className="w-5 h-5 text-primary-light shrink-0" />
        <div className="text-xs text-slate-600 leading-relaxed">
          <p className="font-bold text-primary mb-1">Library Verification Notice</p>
          Full access to e-books and publishing tools requires manual verification of your Student ID by the library staff. This process typically takes 24-48 hours.
        </div>
      </div>

      <button
        type="button"
        disabled={!isValid}
        className={cn(
          "w-full py-4 px-4 text-sm font-bold rounded-xl transition-all shadow-lg",
          isValid 
            ? "bg-primary text-white hover:bg-black shadow-primary/20" 
            : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
        )}
      >
        Create Account
      </button>

      <p className="text-center text-sm text-slate-500">
        Already have an account? <Link href="/login" className="font-bold text-primary-light hover:underline">Login here</Link>
      </p>
    </div>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ');
}
