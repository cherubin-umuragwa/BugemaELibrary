import { Book, Submission, Upload, Activity, Log, User, Testimonial } from '../types';

export const CATEGORIES = [
  "Computer Science",
  "Humanities",
  "Health Sciences",
  "Agriculture",
  "Business",
  "Theology",
  "Pure Sciences",
  "Arts",
  "Engineering",
  "Education",
  "Economics",
  "History",
  "Technology"
];

export const BOOKS: Book[] = [
  {
    id: "1",
    title: "Introduction to Computational Theory",
    author: "Dr. Samuel Okello",
    category: "Computer Science",
    year: "2023",
    pages: 450,
    description: "A comprehensive guide to automata, formal languages, and computational complexity for undergraduate students.",
    publisher: "Bugema University Press",
    isbn: "978-3-16-148410-0",
    coverColor: "bg-blue-600"
  },
  {
    id: "2",
    title: "The History of East African Literature",
    author: "Prof. Maria Namubiru",
    category: "Humanities",
    year: "2021",
    pages: 320,
    description: "Exploration of oral traditions and modern literary movements across the East African region.",
    publisher: "Bugema University Press",
    isbn: "978-1-56-619909-4",
    coverColor: "bg-indigo-600"
  },
  {
    id: "3",
    title: "Modern Nursing Practices",
    author: "Grace Atieno",
    category: "Health Sciences",
    year: "2024",
    pages: 580,
    description: "Essential protocols and patient care strategies for clinical environments in the 21st century.",
    publisher: "Bugema University Press",
    isbn: "978-0-12-345678-9",
    coverColor: "bg-sky-600"
  },
  {
    id: "4",
    title: "Sustainable Agriculture in Tropical Climates",
    author: "John Museveni",
    category: "Agriculture",
    year: "2022",
    pages: 215,
    description: "Techniques for soil preservation and crop rotation specifically designed for tropical agriculture.",
    publisher: "Bugema University Press",
    isbn: "978-9-87-654321-0",
    coverColor: "bg-emerald-600"
  },
  {
    id: "5",
    title: "Macroeconomics: An African Perspective",
    author: "Dr. David Kato",
    category: "Business",
    year: "2023",
    pages: 410,
    description: "Understanding economic cycles, fiscal policy, and development through the lens of emerging markets.",
    publisher: "Bugema University Press",
    isbn: "978-4-56-789012-3",
    coverColor: "bg-blue-800"
  },
  {
    id: "6",
    title: "Theology and Social Justice",
    author: "Rev. Dr. Peter Lule",
    category: "Theology",
    year: "2020",
    pages: 290,
    description: "A critical analysis of religious texts in the context of modern social advocacy and reform.",
    publisher: "Bugema University Press",
    isbn: "978-6-54-321098-7",
    coverColor: "bg-purple-700"
  },
  {
    id: "7",
    title: "Advanced Organic Chemistry",
    author: "Sarah Birungi",
    category: "Pure Sciences",
    year: "2022",
    pages: 670,
    description: "In-depth study of molecular structures, reactions, and synthesis for senior researchers.",
    publisher: "Bugema University Press",
    isbn: "978-7-89-012345-6",
    coverColor: "bg-cyan-700"
  },
  {
    id: "8",
    title: "Principles of Graphic Design",
    author: "Alex Mwangi",
    category: "Arts",
    year: "2024",
    pages: 180,
    description: "A foundational textbook covering typography, color theory, and digital layout principles.",
    publisher: "Bugema University Press",
    isbn: "978-8-90-123456-7",
    coverColor: "bg-rose-600"
  }
];

export const PENDING_SUBMISSIONS: Submission[] = [
  { id: "p1", title: "Principles of African Macroeconomics", contributor: "Dr. John S. Okello", category: "Economics", submittedAt: "2024-05-12", status: "Pending", fileSize: "4.5 MB" },
  { id: "p2", title: "The Digital Transformation of Agriculture", contributor: "Sarah Namatovu", category: "Technology", submittedAt: "2024-05-13", status: "Pending", fileSize: "8.2 MB" },
  { id: "p3", title: "Bugema University: A Centennial History", contributor: "Prof. David Musisi", category: "History", submittedAt: "2024-05-14", status: "Pending", fileSize: "15.4 MB" },
  { id: "p4", title: "Network Security Fundamentals", contributor: "Eng. Robert Kato", category: "Computer Science", submittedAt: "2024-05-14", status: "Pending", fileSize: "3.7 MB" },
  { id: "p5", title: "Modern Pedagogical Approaches", contributor: "Lydia Birungi", category: "Education", submittedAt: "2024-05-15", status: "Pending", fileSize: "5.1 MB" },
  { id: "p6", title: "Biblical Ethics in Business", contributor: "Dr. Peter Lule", category: "Theology", submittedAt: "2024-05-16", status: "Pending", fileSize: "2.8 MB" }
];

export const MY_UPLOADS: Upload[] = [
  { id: "u1", title: "Advanced Engineering Mathematics - Semester 1 Notes", contributor: "Dr. Felix Mugisha", category: "Engineering", submittedAt: "2023-10-12", status: "Approved", fileSize: "4.2 MB", reads: 450 },
  { id: "u2", title: "Modern Agricultural Practices in East Africa", contributor: "Dr. Felix Mugisha", category: "Agriculture", submittedAt: "2023-11-05", status: "Pending", fileSize: "12.8 MB", reads: 0 },
  { id: "u3", title: "Historical Perspectives of Bugema University", contributor: "Dr. Felix Mugisha", category: "History", submittedAt: "2023-12-01", status: "Approved", fileSize: "8.5 MB", reads: 890 },
  { id: "u4", title: "Introduction to Python Programming (Updated)", contributor: "Dr. Felix Mugisha", category: "Computer Science", submittedAt: "2024-01-14", status: "Rejected", fileSize: "2.1 MB", reads: 12 },
  { id: "u5", title: "Theology and Ethics in the 21st Century", contributor: "Dr. Felix Mugisha", category: "Theology", submittedAt: "2024-02-20", status: "Pending", fileSize: "5.6 MB", reads: 0 }
];

export const RECENT_ACTIVITY: Activity[] = [
  { id: "a1", type: "published", title: "'Advanced Sustainable Agriculture in East Africa'", timestamp: "2 hours ago" },
  { id: "a2", type: "downloaded", title: "'History of Bugema University Vol. 2'", timestamp: "Yesterday, 4:30 PM" },
  { id: "a3", type: "reading", title: "'Principles of Modern Theology'", timestamp: "Sept 24, 2023" },
  { id: "a4", type: "downloaded", title: "'Economics of Developing Nations'", timestamp: "Sept 22, 2023" },
  { id: "a5", type: "draft", title: "'Biblical Interpretations in the 21st Century'", timestamp: "Sept 20, 2023" }
];

export const SYSTEM_LOGS: Log[] = [
  { id: "l1", message: "User verification triggered for Student ID #202401", timestamp: "12 mins ago", type: "info" },
  { id: "l2", message: "Bulk import of 50 Engineering Journals completed", timestamp: "1 hour ago", type: "success" },
  { id: "l3", message: "Failed login attempt from unauthorized IP 192.168.1.1", timestamp: "2 hours ago", type: "warning" },
  { id: "l4", message: "Automated backup of library database successful", timestamp: "4 hours ago", type: "success" }
];

export const USERS: User[] = [
  { id: "user1", name: "Dr. Felix Mugisha", email: "user@bugema.edu", role: "user", studentId: "BU-2024-0982", faculty: "Agriculture", status: "Active", joinedDate: "2023-01-15" },
  { id: "user2", name: "Admin User", email: "admin@bugema.edu", role: "admin", status: "Active", joinedDate: "2022-11-20" },
  { id: "user3", name: "Sarah Namubiru", email: "sarah.n@bugema.edu", role: "user", studentId: "BU-2024-1022", faculty: "Health Sciences", status: "Active", joinedDate: "2024-02-12" },
  { id: "user4", name: "James Okello", email: "j.okello@bugema.edu", role: "user", status: "Pending", joinedDate: "2024-04-20" },
  { id: "user5", name: "Robert Kato", email: "r.kato@bugema.edu", role: "user", studentId: "BU-2023-0871", faculty: "Engineering", status: "Active", joinedDate: "2023-09-05" },
  { id: "user6", name: "Lydia Birungi", email: "l.birungi@bugema.edu", role: "user", studentId: "BU-2024-1144", faculty: "Education", status: "Suspended", joinedDate: "2024-03-22" },
  { id: "user7", name: "David Musisi", email: "d.musisi@bugema.edu", role: "user", status: "Active", joinedDate: "2023-12-10" },
  { id: "user8", name: "Namatovu Sarah", email: "namatovu.s@bugema.edu", role: "user", studentId: "BU-2024-1233", faculty: "Technology", status: "Active", joinedDate: "2024-01-30" }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: "t1", name: "Sarah Namubiru", role: "Nursing Student", quote: "The e-library has been a game-changer for my research. Being able to download high-quality textbooks for free is a huge blessing." },
  { id: "t2", name: "Dr. James Okello", role: "Senior Lecturer", quote: "As a faculty member, the publishing portal allows me to share curriculum resources directly with my students efficiently." },
  { id: "t3", name: "David Mukasa", role: "Postgrad Researcher", quote: "The search function is incredibly precise. I found the specific 1990s thesis I was looking for in just under one minute." }
];
