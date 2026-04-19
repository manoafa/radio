'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { SplashContent } from '@/components/SplashContent';

export default function RouteLoading() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-gray-50 dark:bg-dark-900"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className="sr-only">Loading</span>
      <SplashContent />
    </div>,
    document.body,
  );
}
