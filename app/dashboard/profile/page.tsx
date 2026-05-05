'use client';

import React from 'react';
import { useAuth } from '@/context/AuthContext';
import { User, Mail, Shield, Calendar, MapPin, Building, Phone } from 'lucide-react';

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-black text-primary">My Profile</h1>
        <p className="text-slate-500 mt-1 font-medium">View and manage your library account information.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-card border border-border-primary overflow-hidden">
        <div className="h-32 bg-blue-gradient relative">
           <div className="absolute -bottom-12 left-8 p-1 current-bg rounded-2xl bg-white border border-border-primary shadow-lg">
              <div className="w-24 h-24 bg-surface rounded-xl flex items-center justify-center text-primary-light text-3xl font-black">
                 {user?.name.charAt(0)}
              </div>
           </div>
        </div>

        <div className="pt-16 pb-10 px-8">
           <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
              <div>
                 <h2 className="text-2xl font-black text-primary">{user?.name}</h2>
                 <p className="text-sm font-bold text-primary-light uppercase tracking-widest mt-1">
                   {user?.role === 'admin' ? 'System Administrator' : 'Verified Academic Member'}
                 </p>
              </div>
              <div className="flex gap-3">
                 <button className="px-6 py-2.5 bg-primary text-white font-bold text-sm rounded-xl hover:bg-black transition-all">
                    Edit Profile
                 </button>
                 <button className="px-6 py-2.5 border-2 border-border-primary text-slate-600 font-bold text-sm rounded-xl hover:bg-surface transition-all">
                    Account Settings
                 </button>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-50">
              <div className="space-y-6">
                 <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Personal Information</h3>
                 <div className="space-y-4">
                    <DetailItem icon={Mail} label="Email Address" value={user?.email || ''} />
                    <DetailItem icon={Shield} label="Account Type" value={user?.role === 'admin' ? 'Administrator' : 'Student / Faculty'} />
                    <DetailItem icon={Building} label="Faculty / Department" value={user?.faculty || 'Library Services'} />
                 </div>
              </div>
              <div className="space-y-6">
                 <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-2">Library Status</h3>
                 <div className="space-y-4">
                    <DetailItem icon={User} label="Student ID" value={user?.studentId || 'N/A'} />
                    <DetailItem icon={Calendar} label="Member Since" value={user?.joinedDate || ''} />
                    <DetailItem icon={Shield} label="Verification Status" value="Verified & Active" />
                 </div>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="p-6 bg-white rounded-2xl border border-border-primary shadow-sm hover:border-primary-accent transition-all cursor-pointer group">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Security</h4>
            <p className="text-sm font-bold text-primary group-hover:text-primary-light">Change Password</p>
         </div>
         <div className="p-6 bg-white rounded-2xl border border-border-primary shadow-sm hover:border-primary-accent transition-all cursor-pointer group">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Notifications</h4>
            <p className="text-sm font-bold text-primary group-hover:text-primary-light">Manage Email Alerts</p>
         </div>
         <div className="p-6 bg-white rounded-2xl border border-border-primary shadow-sm hover:border-primary-accent transition-all cursor-pointer group">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Privacy</h4>
            <p className="text-sm font-bold text-primary group-hover:text-primary-light">Visibility Settings</p>
         </div>
      </div>
    </div>
  );
}

function DetailItem({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface/30 border border-transparent hover:border-primary-light/10 transition-colors">
       <div className="p-2 bg-white rounded-lg shadow-sm border border-border-primary">
          <Icon className="w-4 h-4 text-primary-light" />
       </div>
       <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
          <p className="text-sm font-bold text-primary">{value}</p>
       </div>
    </div>
  );
}
