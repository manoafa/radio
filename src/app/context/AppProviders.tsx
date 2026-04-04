'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from '@/app/context/ThemeContext';
import { LanguageProvider } from '@/app/context/LanguageContext';

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
