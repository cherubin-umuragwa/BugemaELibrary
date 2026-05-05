'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { User, Role } from '../types';

interface AuthContextType {
  user: User | null;
  role: Role;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
  isReady: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<Role>('guest');
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const initAuth = () => {
      try {
        if (typeof window !== 'undefined') {
          const storedAuth = localStorage.getItem('bugema_auth');
          if (storedAuth) {
            const parsed = JSON.parse(storedAuth);
            setUser(parsed);
            setRole(parsed.role);
          }
        }
      } catch (e) {
        console.error('Failed to initialize auth from localStorage', e);
      } finally {
        setIsReady(true);
      }
    };
    initAuth();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Hardcoded credentials logic
    let authenticatedUser: any = null;

    if (email === "admin@bugema.edu" && password === "admin123") {
      authenticatedUser = {
        id: "user2",
        name: "Admin User",
        email: "admin@bugema.edu",
        role: "admin",
        status: "Active",
        joinedDate: "2022-11-20"
      };
    } else if (email === "user@bugema.edu" && password === "user123") {
      authenticatedUser = {
        id: "user1",
        name: "Dr. Felix Mugisha",
        email: "user@bugema.edu",
        role: "user",
        studentId: "BU-2024-0982",
        faculty: "Agriculture",
        status: "Active",
        joinedDate: "2023-01-15"
      };
    }

    if (authenticatedUser) {
      setUser(authenticatedUser);
      setRole(authenticatedUser.role);
      localStorage.setItem('bugema_auth', JSON.stringify(authenticatedUser));
      
      if (authenticatedUser.role === 'admin') {
        router.push('/admin');
      } else {
        router.push('/dashboard');
      }
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    setRole('guest');
    localStorage.removeItem('bugema_auth');
    router.push('/');
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      role, 
      login, 
      logout, 
      isAuthenticated: !!user,
      isReady
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
