'use client';

import React, { useState } from 'react';
import { Upload, FileText, X, Check, AlertCircle } from 'lucide-react';
import { CATEGORIES } from '@/lib/dummy-data';
import { cn } from '@/lib/utils';

export function PublishForm() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    file: null as File | null
  });
  const [fileName, setFileName] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type === 'application/pdf') {
        setFileName(file.name);
        setFormData({ ...formData, file });
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);
      setFormData({ ...formData, file });
    }
  };

  return (
    <div className="space-y-8">
      <div className="p-6 bg-white rounded-2xl shadow-card border border-border-primary">
        <h3 className="text-lg font-bold text-primary mb-6 pb-4 border-b border-slate-50">Resource Information</h3>
        <p className="text-xs text-slate-400 mb-6">All fields marked with an asterisk (*) are required for submission.</p>

        <div className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Resource Title *</label>
            <input
              type="text"
              className="block w-full px-4 py-3 border border-border-primary rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent text-sm transition-all"
              placeholder="e.g. Impact of Digital Transformation in East African Higher Education"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
            <p className="mt-1.5 text-[10px] text-slate-400 font-medium italic">Use a clear, academic title for better searchability.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Primary Author *</label>
              <input
                type="text"
                className="block w-full px-4 py-3 border border-border-primary rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent text-sm transition-all"
                placeholder="e.g. Dr. Samuel Musoke"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Category *</label>
              <select
                className="block w-full px-4 py-3 border border-border-primary rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent text-sm transition-all appearance-none bg-white"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                <option value="">Select a category</option>
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Abstract / Description *</label>
            <textarea
              rows={5}
              className="block w-full px-4 py-3 border border-border-primary rounded-xl focus:outline-none focus:ring-1 focus:ring-primary-accent focus:border-primary-accent text-sm transition-all"
              placeholder="Provide a brief summary of your research or resource..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Resource File (PDF) *</label>
            <div 
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
              className={cn(
                "relative border-2 border-dashed rounded-2xl p-8 transition-all flex flex-col items-center justify-center gap-4 cursor-pointer",
                isDragging ? "border-primary-light bg-surface" : "border-border-primary bg-slate-50 hover:bg-surface hover:border-primary-accent",
                fileName && "border-success/40 bg-green-50/30"
              )}
            >
              <input 
                type="file" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                accept=".pdf"
                onChange={handleFileChange}
              />
              <div className="p-4 bg-white rounded-full shadow-sm border border-border-primary">
                {fileName ? (
                  <FileText className="w-8 h-8 text-success" />
                ) : (
                  <Upload className="w-8 h-8 text-primary-light" />
                )}
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-primary">
                  {fileName ? fileName : "Click to upload or drag and drop"}
                </p>
                <p className="text-xs text-slate-400 mt-1">PDF DOCUMENTS ONLY (MAX 20MB)</p>
              </div>
              {fileName && (
                <button 
                  onClick={(e) => { e.stopPropagation(); setFileName(''); setFormData({ ...formData, file: null }); }}
                  className="absolute top-4 right-4 p-1 rounded-full hover:bg-red-50 text-slate-400 hover:text-red-500"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button className="px-6 py-3 border-2 border-border-primary text-sm font-bold text-slate-600 rounded-xl hover:bg-surface transition-all">
          Cancel Submission
        </button>
        <button className="px-6 py-3 border-2 border-border-primary text-sm font-bold text-primary-light rounded-xl hover:bg-surface transition-all">
          Save Draft
        </button>
        <button 
          className={cn(
            "px-8 py-3 bg-primary text-white text-sm font-bold rounded-xl transition-all shadow-lg shadow-primary/20 ml-auto",
            (!formData.title || !formData.author || !formData.category || !formData.file) && "opacity-50 cursor-not-allowed"
          )}
        >
          Submit for Review
        </button>
      </div>
    </div>
  );
}
