import '@/styles/globals.css';
import { ReactNode } from 'react';

export const metadata = { title: 'UAE PEPPOL PINT AE Learning Platform', description: 'Interactive compliance learning platform' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en" className="dark"><body>{children}</body></html>;
}
