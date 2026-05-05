'use client';

import React from 'react';
import Link from 'next/link';
import { Book } from 'lucide-react';
import { LoginForm } from '@/components/forms/LoginForm';
import { motion } from 'framer-motion';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-32 opacity-[0.03] rotate-12 pointer-events-none">
        <Book className="w-96 h-96" />
      </div>
      
      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Link href="/" className="flex items-center justify-center gap-3 group mb-8">
          <div className="p-2.5 bg-primary rounded-xl group-hover:rotate-6 transition-transform shadow-lg shadow-primary/10">
            <Book className="w-8 h-8 text-white" />
          </div>
          <span className="text-2xl font-bold text-primary tracking-tight">Bugema E-Library</span>
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white py-10 px-6 shadow-card border border-border-primary sm:rounded-2xl sm:px-12"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-primary">Welcome Back</h2>
            <p className="mt-2 text-sm text-slate-500 font-medium tracking-tight">
              Access your digital bookshelf and resources.
            </p>
          </div>

          <LoginForm />
          
          <p className="mt-10 pt-6 border-t border-slate-50 text-center text-xs text-slate-400 font-medium px-4">
            By signing in, you agree to our <Link href="#" className="text-primary-light hover:underline">Terms of Use</Link> and <Link href="#" className="text-primary-light hover:underline">Privacy Policy</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
