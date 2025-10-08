'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Radio, Home, Calendar, Headphones, Users, Heart, Globe, Sun, Moon } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isLangOpen && !target.closest('.language-selector')) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLangOpen]);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark';
    setIsDarkMode(prefersDark);
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Radio },
    { name: 'Programs', href: '/programs', icon: Calendar },
    { name: 'Podcasts', href: '/podcasts', icon: Headphones },
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Donate', href: '/donate', icon: Heart },
  ];

  const languages = [
    { code: 'EN', flag: '/US.png', name: 'English' },
    { code: 'FR', flag: '/FR.png', name: 'Français' },
    { code: 'MG', flag: '/MG.png', name: 'Malagasy' },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-transparent backdrop-blur-lg shadow-2xl border-b border-gray-300 dark:border-navy-500/30' 
          : 'bg-transparent border-b border-cyan-600/30'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative"
              >
                <Image
                  src="/RMK.png"
                  alt="102.4 FM RMK Logo"
                  width={75}
                  height={75}
                  className="object-contain w-40 h-25"
                />
              </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold font-display gradient-text">
                Radio Madagasikara ho an&apos;i Kristy
              </h1>
              <p className="text-xs text-gray-400">102.4 FM</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center" style={{ gap: '25px' }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group"
              >
                <item.icon className="w-8 group-hover:text-primary-500 transition-colors" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Language Selector, Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-1">
            {/* Language Selector */}
            <div className="hidden sm:block relative language-selector">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-300 rounded-lg hover:border border-gray-300 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">{selectedLang}</span>
              </button>

              {/* Language Dropdown */}
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 backdrop-blur-lg border border-gray-300 dark:border-navy-500/30 rounded-lg shadow-2xl overflow-hidden z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setSelectedLang(lang.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                          selectedLang === lang.code
                            ? 'border border-gray-300 dark:border-navy-500/30 text-gray-900 dark:text-white'
                            : 'text-gray-600 dark:text-gray-300 hover:border border-gray-300 hover:text-gray-900 dark:hover:text-white'
                        }`}
                      >
                        <Image
                          src={lang.flag}
                          alt={`${lang.name} Flag`}
                          width={24}
                          height={16}
                          className="object-contain"
                        />
                        <span className="font-medium">{lang.name}</span>
                        <span className="text-sm text-gray-400 ml-auto">{lang.code}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="hidden sm:flex items-center justify-center p-2.5 text-gray-700 dark:text-gray-300 rounded-lg hover:border border-gray-300 dark:hover:bg-navy-500/40 transition-colors"
              aria-label="Toggle theme"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isDarkMode ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              </motion.div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-lg text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-navy-500/40 transition-colors w-12"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-md border-t border-gray-300 dark:border-navy-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 group py-2"
                  >
                    <item.icon className="w-5 h-5 group-hover:text-primary-500 transition-colors" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="pt-4 border-t border-gray-300 dark:border-navy-500/20">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">Language:</span>
                </div>
                <div className="space-y-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setSelectedLang(lang.code)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        selectedLang === lang.code
                          ? 'border border-gray-300 dark:border-navy-500/30 text-gray-900 dark:text-white'
                          : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-navy-500/20 hover:text-gray-900 dark:hover:text-white'
                      }`}
                    >
                      <Image
                        src={lang.flag}
                        alt={`${lang.name} Flag`}
                        width={24}
                        height={16}
                        className="object-contain"
                      />
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-xs text-gray-400 ml-auto">{lang.code}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Theme Toggle */}
              <div className="pt-4 border-t border-gray-300 dark:border-navy-500/20">
                <div className="flex items-center gap-2 mb-3">
                  {isDarkMode ? <Moon className="w-4 h-4 text-gray-500 dark:text-gray-400" /> : <Sun className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
                  <span className="text-sm text-gray-600 dark:text-gray-400">Theme:</span>
                </div>
                <button
                  onClick={toggleTheme}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors hover:bg-gray-300 dark:hover:bg-navy-500/30 text-gray-900 dark:text-white"
                >
                  <motion.div
                    animate={{ rotate: isDarkMode ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                  </motion.div>
                  <span className="font-medium">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
