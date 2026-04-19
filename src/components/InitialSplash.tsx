'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { SplashContent } from '@/components/SplashContent';

const MIN_DISPLAY_MS = 800;

export function InitialSplash({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const started = Date.now();
    const hide = () => {
      const elapsed = Date.now() - started;
      window.setTimeout(() => setDone(true), Math.max(0, MIN_DISPLAY_MS - elapsed));
    };

    if (document.readyState === 'complete') {
      hide();
      return;
    }

    window.addEventListener('load', hide);
    return () => window.removeEventListener('load', hide);
  }, []);

  useEffect(() => {
    if (!done) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [done]);

  return (
    <>
      {!done && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center bg-gray-50 dark:bg-dark-900"
          role="status"
          aria-live="polite"
          aria-busy="true"
        >
          <span className="sr-only">Loading</span>
          <SplashContent />
        </div>
      )}
      {children}
    </>
  );
}
