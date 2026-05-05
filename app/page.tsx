'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BookOpen, Search, Users, Download, ShieldCheck, ArrowRight, MessageSquare, ExternalLink, Globe, Zap, Users2, FileText, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface text-primary-light rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light"></span>
                  </span>
                  Official Repository
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-primary leading-[1.1] mb-6">
                  Welcome to <br />
                  <span className="text-primary-light">Bugema E-Library</span>
                </h1>
                <p className="text-lg text-slate-500 leading-relaxed max-w-xl mb-10">
                  Empowering Bugema University students and researchers with a world-class digital repository. Access thousands of academic resources, journals, and publications from anywhere in the world.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/ebooks" 
                    className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-sm shadow-xl shadow-primary/20 hover:bg-black transition-all flex items-center gap-2"
                  >
                    Explore Books <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="/login" 
                    className="px-8 py-4 text-primary-light border-2 border-primary-light rounded-xl font-bold text-sm hover:bg-surface transition-all"
                  >
                    Login to Access
                  </Link>
                </div>
                
                <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-slate-100 pt-8">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">15k+</span>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">E-Books</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">Open Access</span>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Availability</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-primary">24/7</span>
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Remote Portal</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="p-1.5 bg-border-primary rounded-3xl overflow-hidden shadow-2xl rotate-2">
                   <div className="aspect-[4/3] bg-blue-gradient rounded-[calc(1.5rem-0.375rem)] flex items-center justify-center">
                      <div className="text-white/20">
                         <Globe className="w-48 h-48" />
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center p-8">
                        <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                           <div className="flex items-center gap-3 mb-4">
                              <div className="w-8 h-8 rounded-full bg-white/20" />
                              <div className="w-32 h-2 rounded-full bg-white/20" />
                           </div>
                           <div className="space-y-3">
                              <div className="w-full h-2 rounded-full bg-white/10" />
                              <div className="w-full h-2 rounded-full bg-white/10" />
                              <div className="w-3/4 h-2 rounded-full bg-white/10" />
                           </div>
                           <div className="mt-6 flex gap-2">
                             <div className="w-full h-8 rounded-lg bg-primary-light" />
                             <div className="w-12 h-8 rounded-lg bg-white/10" />
                           </div>
                        </div>
                      </div>
                   </div>
                </div>
                {/* Decorative dots */}
                <div className="absolute -top-12 -right-12 w-32 h-32 opacity-20 pointer-events-none">
                  <div className="grid grid-cols-4 gap-4">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-24 bg-surface/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Choose Our E-Library?</h2>
              <p className="text-slate-500">We provide the tools and resources necessary for academic excellence and seamless knowledge sharing.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Search, title: 'Global Search', desc: 'Find specific topics, authors, or ISBNs across our entire database in seconds with our advanced indexing.' },
                { icon: Download, title: 'Instant Download', desc: 'Download resources in PDF or EPUB formats for offline study. Keep your library with you at all times.' },
                { icon: Users2, title: 'Peer Publishing', desc: 'Contribute to the academic community by uploading your own research papers and vetted publications.' },
                { icon: Zap, title: 'Virtual Reading', desc: 'Experience a seamless web-based reading interface with bookmarking and annotation capabilities.' },
              ].map((feature, idx) => (
                <div 
                  key={idx} 
                  className="p-8 bg-white rounded-2xl border border-border-primary hover:border-primary-accent hover:shadow-card transition-all group"
                >
                  <div className="p-3 bg-surface rounded-xl w-fit mb-6 group-hover:bg-primary-light group-hover:text-white transition-all">
                    <feature.icon className="w-6 h-6 text-primary-light group-hover:text-white transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Steps Section */}
        <section className="py-24 bg-white border-y border-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-8">
                  Start Your Research Journey in 4 Simple Steps
                </h2>
                <Link href="/register" className="inline-flex items-center gap-2 text-primary-light font-bold hover:gap-4 transition-all">
                  Create an account today <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 relative">
                {[
                  { num: '01', title: 'Register & Verify', desc: 'Use your student ID or faculty credentials to create a secure account and gain full library privileges.' },
                  { num: '02', title: 'Browse & Discover', desc: 'Explore categories ranging from Health Sciences to Technology using our intuitive navigation system.' },
                  { num: '03', title: 'Read or Download', desc: 'Access books immediately on your browser or save them to your local device for offline access.' },
                  { num: '04', title: 'Publish Research', desc: 'Share your verified academic contributions with the Bugema community through our publishing portal.' },
                ].map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-6 top-0 text-3xl font-black text-slate-100 italic">{step.num}</span>
                    <div className="relative z-10 pl-6 border-l-2 border-primary-light/10">
                      <h4 className="font-bold text-primary mb-2">{step.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section id="services" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Services</h2>
                <p className="text-slate-500">Connecting scholars to specialized support and archival assets.</p>
              </div>
              <Link href="/services" className="px-6 py-3 border-2 border-border-primary text-sm font-bold text-slate-600 rounded-xl hover:bg-surface transition-all">
                View All Services
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Remote Access Portal', desc: 'Gain full access to our paid journals and premium databases from the comfort of your home using your student credentials.' },
                { title: 'Digital Archive Project', desc: 'Preserving the legacy of Bugema University with digitized historical documents, thesis papers, and university publications.' },
                { title: 'Research Consultation', desc: 'Connect with expert librarians for specialized research guidance, citation assistance, and database navigation support.' },
              ].map((service, idx) => (
                <div key={idx} className="flex flex-col rounded-2xl overflow-hidden border border-border-primary group">
                  <div className="aspect-video bg-blue-tint relative flex items-center justify-center overflow-hidden">
                    <div className="text-primary-light/10">
                       <FileText className="w-24 h-24" />
                    </div>
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <span className="px-4 py-2 bg-white rounded-lg text-primary text-xs font-bold shadow-xl">VIEW SERVICE</span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <h4 className="font-bold text-primary mb-3">{service.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-1">{service.desc}</p>
                    <Link href="#" className="text-xs font-black uppercase tracking-widest text-primary-light hover:text-primary transition-colors flex items-center gap-1">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Trusted by the Bugema Community</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="p-8 bg-surface/50 rounded-2xl border border-border-primary relative">
                  <div className="absolute top-8 right-8 text-primary/10">
                    <MessageSquare className="w-12 h-12" />
                  </div>
                  <p className="text-slate-600 italic text-sm leading-relaxed mb-10 relative z-10">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white font-bold">
                       {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-sm">{t.name}</h4>
                      <p className="text-xs text-slate-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-24 opacity-5 rotate-12">
             <BookOpen className="w-96 h-96" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to enhance your academic performance?</h2>
            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">Join thousands of students and faculty members already benefiting from the Bugema E-Library.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/register" 
                className="px-10 py-4 bg-white text-primary rounded-xl font-bold text-sm shadow-xl hover:bg-slate-100 transition-all"
              >
                Join Now
              </Link>
              <Link 
                href="/ebooks" 
                className="px-10 py-4 border-2 border-white/20 text-white rounded-xl font-bold text-sm hover:bg-white/10 transition-all"
              >
                Browse Books
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
