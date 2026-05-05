'use client';

import React from 'react';
import Link from 'next/link';
import { Book, UserPlus } from 'lucide-react';
import { RegisterForm } from '@/components/forms/RegisterForm';
import { motion } from 'framer-motion';

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 p-32 opacity-[0.03] -rotate-12 pointer-events-none">
        <Book className="w-96 h-96" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-xl relative z-10">
        <Link href="/" className="flex items-center justify-center gap-3 group mb-8">
          <div className="p-2.5 bg-primary-light rounded-xl group-hover:lg:rotate-6 transition-transform shadow-lg shadow-primary-light/10">
            <UserPlus className="w-8 h-8 text-white" />
          </div>
          <span className="text-2xl font-bold text-primary tracking-tight">Bugema E-Library</span>
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white py-10 px-8 shadow-card border border-border-primary sm:rounded-2xl sm:px-12"
        >
          <div className="text-center mb-10">
             <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center mx-auto mb-4 border border-border-primary">
                <Book className="w-6 h-6 text-primary-light" />
             </div>
            <h2 className="text-3xl font-black text-primary">Join the E-Library</h2>
            <p className="mt-2 text-sm text-slate-500 font-medium">
              Enter your details below to register for a university library account.
            </p>
          </div>

          <RegisterForm />
        </motion.div>
        
        <p className="mt-8 text-center text-xs text-slate-400 font-medium">
          © {new Date().getFullYear()} Bugema University Library Services
        </p>
      </div>
    </div>
  );
}
