'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Radio, Home, Calendar, Headphones, Users, Heart, Settings } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About Us', href: '/about', icon: Radio },
    { name: 'Programs', href: '/programs', icon: Calendar },
    { name: 'Podcasts', href: '/podcasts', icon: Headphones },
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Donate', href: '/donate', icon: Heart },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-10 right-10 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-900/95 backdrop-blur-md shadow-lg border-b border-navy-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 w-full px-[100px]">
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
                  className="object-contain"
                />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
              </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold font-display gradient-text">
                Radio Madagasikara ho an'i Kristy
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
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <item.icon className="w-4 h-4 group-hover:text-primary-500 transition-colors" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Selector */}
            <div className="hidden sm:flex items-center" style={{ gap: '25px' }}>
              <button className="flex items-center space-x-2 px-3 py-1 text-xs bg-navy-500/20 text-navy-300 rounded-full hover:bg-navy-500/40 transition-colors">
                <Image src="/US.png" alt="US Flag" width={20} height={15} className="object-contain" />
                <span>EN</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-1 text-xs text-gray-400 hover:text-white transition-colors">
                <Image src="/FR.png" alt="French Flag" width={20} height={15} className="object-contain" />
                <span>FR</span>
              </button>
              <button className="flex items-center space-x-2 px-3 py-1 text-xs text-gray-400 hover:text-white transition-colors">
                <Image src="/MG.png" alt="Madagascar Flag" width={20} height={15} className="object-contain" />
                <span>MG</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg bg-navy-500/20 text-white hover:bg-navy-500/40 transition-colors"
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
            className="md:hidden bg-dark-800/95 backdrop-blur-md border-t border-navy-500/20"
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
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group py-2"
                  >
                    <item.icon className="w-5 h-5 group-hover:text-primary-500 transition-colors" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="flex items-center pt-4 border-t border-navy-500/20" style={{ gap: '10px' }}>
                <span className="text-sm text-gray-400">Language:</span>
                <button className="flex items-center space-x-2 px-3 py-1 text-xs bg-navy-500/20 text-navy-300 rounded-full">
                  <Image src="/US.png" alt="US Flag" width={20} height={15} className="object-contain" />
                  <span>EN</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-1 text-xs text-gray-400">
                  <Image src="/FR.png" alt="French Flag" width={20} height={15} className="object-contain" />
                  <span>FR</span>
                </button>
                <button className="flex items-center space-x-2 px-3 py-1 text-xs text-gray-400">
                  <Image src="/MG.png" alt="Madagascar Flag" width={20} height={15} className="object-contain" />
                  <span>MG</span>
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
