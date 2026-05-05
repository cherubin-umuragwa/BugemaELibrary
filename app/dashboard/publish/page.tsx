'use client';

import React from 'react';
import Link from 'next/link';
import { PublishForm } from '@/components/forms/PublishForm';
import { ChevronRight, FileText, Info, HelpCircle } from 'lucide-react';

export default function PublishPage() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb */}
      <nav className="flex text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 gap-2 items-center">
        <Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-primary">Publishing</span>
      </nav>

      <div>
        <h1 className="text-3xl font-black text-primary">Submit New Resource</h1>
        <p className="text-slate-500 mt-1 font-medium">Fill in the details below to contribute to the Bugema University digital repository.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-1 w-full">
           <PublishForm />
        </div>

        <aside className="w-full lg:w-96 space-y-6 shrink-0 lg:sticky lg:top-24">
          <div className="bg-white rounded-2xl border border-border-primary p-6 shadow-sm">
             <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-50">
                <div className="p-2 bg-primary rounded-lg">
                   <Info className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-bold text-primary">Submission Rules</h4>
             </div>
             <ul className="space-y-4">
                {[
                  "Documents must be in PDF format only for cross-platform compatibility.",
                  "Ensure the Title and Author match the information inside the file.",
                  "Maximum file size is 20MB. For larger files, contact library support.",
                  "Submissions go through a verification process before appearing in the e-library.",
                  "By submitting, you confirm that you hold the rights to publish this content."
                ].map((rule, i) => (
                  <li key={i} className="flex gap-3 text-xs text-slate-500 leading-relaxed">
                     <div className="w-1.5 h-1.5 rounded-full bg-primary-light shrink-0 mt-1.5" />
                     {rule}
                  </li>
                ))}
             </ul>
          </div>

          <div className="bg-surface rounded-2xl p-8 border border-border-primary text-center">
             <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border border-border-primary shadow-sm">
                <HelpCircle className="w-6 h-6 text-primary-light" />
             </div>
             <h4 className="font-bold text-primary mb-2">Need Assistance?</h4>
             <p className="text-xs text-slate-500 leading-relaxed mb-6">
                If you&apos;re having trouble with the upload process, our technical team is here to help.
             </p>
             <Link href="#" className="text-xs font-black uppercase tracking-widest text-primary-light hover:text-primary transition-all">
                Contact Support
             </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
