'use client';

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Mail, Lock, AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function LoginForm() {
  const { login } = useAuth();
  const [email, setEmail] = useState('user@bugema.edu');
  const [password, setPassword] = useState('user123');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      const success = await login(email, password);
      if (!success) {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-border-primary rounded-xl bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent sm:text-sm transition-all"
              placeholder="m.student@bugema.edu"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
            <Link href="#" className="text-xs font-bold text-primary-light hover:underline">Forgot password?</Link>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-border-primary rounded-xl bg-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent sm:text-sm transition-all"
              placeholder="••••••••"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className="h-4 w-4 text-primary-light focus:ring-primary-accent border-gray-300 rounded"
          defaultChecked
        />
        <label htmlFor="remember-me" className="ml-2 block text-xs font-medium text-slate-600">
          Remember this device for 30 days
        </label>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="group relative w-full flex justify-center items-center gap-2 py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-primary hover:bg-black transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary shadow-lg shadow-primary/20"
      >
        {isLoading ? 'Signing in...' : (
          <>
            Sign In to Library <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

      <div className="relative pt-2">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-border-primary"></div>
        </div>
        <div className="relative flex justify-center text-xs font-bold uppercase tracking-widest">
          <span className="px-2 bg-white text-slate-400">New to the Library?</span>
        </div>
      </div>

      <Link
        href="/register"
        className="w-full flex justify-center py-3.5 px-4 border-2 border-border-primary text-sm font-bold rounded-xl text-slate-600 bg-white hover:bg-surface hover:border-primary-accent transition-all"
      >
        Create a Student Account
      </Link>
    </form>
  );
}
