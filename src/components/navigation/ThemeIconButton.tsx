'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

type Props = {
  isDarkMode: boolean;
  onToggle: () => void;
  ariaLight: string;
  ariaDark: string;
  className: string;
};

export function ThemeIconButton({ isDarkMode, onToggle, ariaLight, ariaDark, className }: Props) {
  return (
    <button type="button" onClick={onToggle} className={className} aria-label={isDarkMode ? ariaLight : ariaDark}>
      <motion.div initial={false} animate={{ rotate: isDarkMode ? 180 : 0 }} transition={{ duration: 0.25 }}>
        {isDarkMode ? <Moon className="size-4" strokeWidth={2} /> : <Sun className="size-4" strokeWidth={2} />}
      </motion.div>
    </button>
  );
}
