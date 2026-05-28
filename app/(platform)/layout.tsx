import { PlatformShell } from '@/components/layout/platform-shell';
import { ReactNode } from 'react';

export default function PlatformLayout({children}:{children:ReactNode}){ return <PlatformShell>{children}</PlatformShell>; }
