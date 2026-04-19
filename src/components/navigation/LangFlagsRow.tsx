'use client';

import Image from 'next/image';
import { LANG_OPTIONS } from '@/components/navigation/constants';
import type { Language } from '@/app/context/LanguageContext';

type Props = {
  compact?: boolean;
  language: string;
  setLanguage: (code: Language) => void;
  ariaLabel: string;
  flagBtnClass: (active: boolean) => string;
};

export function LangFlagsRow({ compact, language, setLanguage, ariaLabel, flagBtnClass }: Props) {
  return (
    <div className={`flex items-center ${compact ? 'gap-0.5' : 'gap-1'}`} role="group" aria-label={ariaLabel}>
      {LANG_OPTIONS.map((lang) => (
        <button
          key={lang.code}
          type="button"
          onClick={() => setLanguage(lang.code)}
          aria-pressed={language === lang.code}
          aria-label={lang.name}
          title={lang.name}
          className={flagBtnClass(language === lang.code)}
        >
          <Image
            src={lang.flag}
            alt=""
            width={compact ? 20 : 22}
            height={compact ? 13 : 14}
            className="object-cover rounded-sm shadow-sm"
          />
        </button>
      ))}
    </div>
  );
}
