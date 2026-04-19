'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from '@/app/context/ThemeContext';
import { LanguageProvider } from '@/app/context/LanguageContext';
import { InitialSplash } from '@/components/InitialSplash';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <InitialSplash>{children}</InitialSplash>
      </LanguageProvider>
    </ThemeProvider>
  );
}
