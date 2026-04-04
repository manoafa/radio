'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import { TRANSLATIONS, type Language } from './translations';

export type { Language };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const FALLBACK_TITLE = "Radio Madagasikara ho an'i Kristy - 102.4 FM RMK";

function getTranslations(lang: Language): Record<string, string> {
  return TRANSLATIONS[lang] ?? TRANSLATIONS.en;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('language') as Language | null;
    if (saved && ['fr', 'en', 'mg'].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    const tr = getTranslations(language);
    document.title = tr['site.title'] ?? FALLBACK_TITLE;
  }, [language, mounted]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    const tr = getTranslations(language);
    return tr[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
