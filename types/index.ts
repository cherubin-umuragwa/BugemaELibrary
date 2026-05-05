export type Role = 'admin' | 'user' | 'guest';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  studentId?: string;
  faculty?: string;
  status: 'Active' | 'Pending' | 'Suspended';
  joinedDate: string;
  avatar?: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  year: string;
  pages: number;
  description: string;
  publisher: string;
  isbn: string;
  coverColor?: string;
  isFeatured?: boolean;
}

export interface Submission {
  id: string;
  title: string;
  contributor: string;
  category: string;
  submittedAt: string;
  status: 'Pending' | 'Approved' | 'Rejected';
  fileSize: string;
  description?: string;
}

export interface Upload extends Submission {
  reads?: number;
}

export interface Activity {
  id: string;
  type: 'published' | 'downloaded' | 'reading' | 'draft';
  title: string;
  timestamp: string;
}

export interface Log {
  id: string;
  message: string;
  timestamp: string;
  type: 'info' | 'warning' | 'error' | 'success';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
}
