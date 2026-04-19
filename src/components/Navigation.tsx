'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { useTheme } from '@/app/context/ThemeContext';
import { useLanguage } from '@/app/context/LanguageContext';
import { DESKTOP_NAV, MOBILE_NAV, CONTACT_HREF } from '@/components/navigation/constants';
import { LangFlagsRow } from '@/components/navigation/LangFlagsRow';
import { ThemeIconButton } from '@/components/navigation/ThemeIconButton';
import { getNavShellClasses } from '@/components/navigation/navShellClasses';

export default function Navigation() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHomeOverHero = pathname === '/' && !scrolled;
  const isDarkMode = theme === 'dark';
  const c = getNavShellClasses(isHomeOverHero, scrolled);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav initial={{ y: 0 }} animate={{ y: 0 }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${c.navBar}`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group min-w-0 shrink">
            <motion.div whileHover={{ scale: 1.05, rotate: 5 }} className="relative shrink-0">
              <Image src="/RMK.png" alt="102.4 FM RMK Logo" width={75} height={75} className="object-contain w-40 h-25" />
            </motion.div>
            <div className="hidden sm:block min-w-0">
              <h1 className={`text-xl font-bold font-display ${isHomeOverHero ? 'text-white drop-shadow-sm' : 'gradient-text'}`}>
                Radio Madagasikara ho an&apos;i Kristy
              </h1>
              <p className={`text-xs ${isHomeOverHero ? 'text-white/75' : 'text-gray-400'}`}>102.4 FM</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-[25px]">
            {DESKTOP_NAV.map((item) => (
              <Link key={item.nameKey} href={item.href} className={`flex items-center gap-2 transition-colors duration-200 group ${c.desktopLink}`}>
                <item.icon className={`w-8 shrink-0 transition-colors ${c.desktopIcon}`} />
                <span className="font-medium">{t(item.nameKey)}</span>
              </Link>
            ))}
            <Link
              href={CONTACT_HREF}
              aria-label={t('nav.contact')}
              title={t('nav.contact')}
              className={`flex items-center justify-center rounded-full p-2.5 transition-all duration-200 ${c.phoneDesktop}`}
            >
              <Phone className="size-5" strokeWidth={2.25} aria-hidden />
            </Link>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <div className="hidden md:flex items-center gap-1.5">
              <LangFlagsRow language={language} setLanguage={setLanguage} ariaLabel={t('ui.language')} flagBtnClass={c.flagBtn} />
              <ThemeIconButton
                isDarkMode={isDarkMode}
                onToggle={toggleTheme}
                ariaLight={t('ui.lightMode')}
                ariaDark={t('ui.darkMode')}
                className={c.themeBtn}
              />
            </div>
            <div className="flex md:hidden items-center gap-1">
              <LangFlagsRow compact language={language} setLanguage={setLanguage} ariaLabel={t('ui.language')} flagBtnClass={c.flagBtn} />
              <ThemeIconButton
                isDarkMode={isDarkMode}
                onToggle={toggleTheme}
                ariaLight={t('ui.lightMode')}
                ariaDark={t('ui.darkMode')}
                className={c.themeBtn}
              />
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label={isOpen ? t('common.close') : 'Menu'}
                className={`rounded-lg p-1.5 transition-colors ${c.burger}`}
              >
                {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t backdrop-blur-md ${c.drawer}`}
          >
            <div className="px-4 py-6 space-y-4">
              {MOBILE_NAV.map((item, index) => (
                <motion.div key={item.nameKey} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }}>
                  <Link href={item.href} onClick={() => setIsOpen(false)} className={`flex items-center space-x-3 transition-colors duration-200 group py-2 ${c.mobileLink}`}>
                    <item.icon className={`w-5 h-5 transition-colors ${c.mobileIcon}`} />
                    <span className="font-medium">{t(item.nameKey)}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: MOBILE_NAV.length * 0.1 }}>
                <Link
                  href={CONTACT_HREF}
                  onClick={() => setIsOpen(false)}
                  aria-label={t('nav.contact')}
                  className={`flex items-center justify-center gap-3 rounded-2xl py-4 px-4 transition-colors ${c.phoneCta}`}
                >
                  <Phone className="size-11 shrink-0" strokeWidth={2.25} aria-hidden />
                  <span className="sr-only">{t('nav.contact')}</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
