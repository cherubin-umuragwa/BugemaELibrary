'use client';

import React, { useState, useMemo } from 'react';
import { USERS } from '@/lib/dummy-data';
import { SearchBar } from '@/components/ui/SearchBar';
import { StatusBadge } from '@/components/ui/StatusBadge';
import { Pagination } from '@/components/ui/Pagination';
import { Plus, MoreVertical, Edit, UserMinus, ShieldCheck, Mail, Filter } from 'lucide-react';

export default function UsersManagementPage() {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredUsers = useMemo(() => {
    return USERS.filter(user => 
      user.name.toLowerCase().includes(search.toLowerCase()) || 
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.studentId?.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-black text-primary">Users</h1>
          <span className="px-2.5 py-1 bg-surface text-primary-light text-xs font-black rounded-lg border border-primary-light/5">
            {USERS.length} TOTAL
          </span>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white rounded-xl font-bold text-sm shadow-xl shadow-primary/20 hover:bg-black transition-all whitespace-nowrap">
          <Plus className="w-5 h-5" /> Add User
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-card border border-border-primary overflow-hidden">
        {/* Toolbar */}
        <div className="p-6 border-b border-slate-50 flex flex-col md:flex-row gap-4 items-center justify-between bg-white sticky top-0 z-10">
           <SearchBar 
             value={search} 
             onChange={setSearch} 
             placeholder="Search by name, email or ID..." 
             className="max-w-md" 
           />
           <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 text-slate-600 rounded-xl font-bold text-xs border border-transparent hover:border-border-primary transition-all">
                <Filter className="w-4 h-4" /> Filter By Role
              </button>
              <button className="p-2.5 bg-slate-50 text-slate-600 rounded-xl border border-transparent hover:border-border-primary transition-all">
                <MoreVertical className="w-5 h-5" />
              </button>
           </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border-primary bg-surface/30 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                <th className="px-6 py-4">Name & Profile</th>
                <th className="px-6 py-4">Role</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Student ID</th>
                <th className="px-6 py-4">Joined</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-primary">
              {paginatedUsers.map((user) => (
                <tr key={user.id} className="hover:bg-surface/10 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-surface rounded-lg flex items-center justify-center text-primary-light font-black text-xs border border-primary-light/5">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-primary">{user.name}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${
                      user.role === 'admin' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <StatusBadge status={user.status} />
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs font-bold text-slate-500">{user.studentId || '—'}</p>
                  </td>
                  <td className="px-6 py-4">
                     <p className="text-xs font-medium text-slate-400">{user.joinedDate}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-primary-light transition-colors rounded-lg">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-500 transition-colors rounded-lg">
                        <UserMinus className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-primary transition-colors rounded-lg">
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {paginatedUsers.length === 0 && (
          <div className="p-24 text-center">
            <h4 className="font-bold text-primary mb-2">No users found</h4>
            <p className="text-sm text-slate-500">Try broadening your search criteria.</p>
          </div>
        )}

        {/* Footer */}
        <div className="p-6 border-t border-slate-50">
           <Pagination 
             currentPage={currentPage} 
             totalPages={totalPages} 
             onPageChange={setCurrentPage} 
           />
        </div>
      </div>
    </div>
  );
}
