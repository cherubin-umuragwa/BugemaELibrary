import React from 'react';
import Link from 'next/link';
import { Book, Facebook, Twitter, Linkedin, Mail, Phone, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border-primary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary rounded-lg">
                <Book className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">Bugema E-Library</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              Advancing knowledge through digital accessibility and community-driven research support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-surface rounded-full text-primary-light hover:bg-primary-light hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-surface rounded-full text-primary-light hover:bg-primary-light hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-surface rounded-full text-primary-light hover:bg-primary-light hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-slate-500 text-sm hover:text-primary-light transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-500 text-sm hover:text-primary-light transition-colors">About Us</Link></li>
              <li><Link href="/ebooks" className="text-slate-500 text-sm hover:text-primary-light transition-colors">E-Books</Link></li>
              <li><Link href="/services" className="text-slate-500 text-sm hover:text-primary-light transition-colors">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link href="/help" className="text-slate-500 text-sm hover:text-primary-light transition-colors">Help Center</Link></li>
              <li><Link href="/requirements" className="text-slate-500 text-sm hover:text-primary-light transition-colors">Access Requirements</Link></li>
              <li><Link href="/contact" className="text-slate-500 text-sm hover:text-primary-light transition-colors">Contact Us</Link></li>
              <li><Link href="/report" className="text-slate-500 text-sm hover:text-primary-light transition-colors">Report an Issue</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-primary mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-light shrink-0" />
                <span className="text-slate-500 text-sm">library@bugema.edu</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary-light shrink-0" />
                <span className="text-slate-500 text-sm">+256 123 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-primary-light shrink-0" />
                <span className="text-slate-500 text-sm">WhatsApp Support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-primary flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} Bugema University. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-slate-400 text-xs hover:text-primary-light transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-400 text-xs hover:text-primary-light transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
