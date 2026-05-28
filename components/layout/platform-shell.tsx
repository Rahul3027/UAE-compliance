'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/config/navigation';
import { ReactNode } from 'react';

export function PlatformShell({ children }: { children: ReactNode }) {
  const path = usePathname();
  return <div className="min-h-screen grid md:grid-cols-[280px_1fr]"><aside className="panel p-4 m-4 sticky top-4 h-[calc(100vh-2rem)] overflow-auto"><h1 className="font-bold mb-4">PINT AE Lab</h1>{navItems.map(([label,href])=><Link key={href} href={href} className={`block px-3 py-2 rounded-lg text-sm mb-1 ${path===href?'bg-cyan-500/20 text-cyan-300':'text-slate-300 hover:bg-slate-700/40'}`}>{label}</Link>)}</aside><main className="p-4 md:p-8">{children}</main></div>;
}
