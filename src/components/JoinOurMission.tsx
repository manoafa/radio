'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, Globe } from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

export function JoinOurMission() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 via-navy-500 to-primary-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" aria-hidden />
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold font-display text-white">
            {t('home.ui.joinTitle')}
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">{t('home.ui.joinSubtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/donate"
              className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl"
            >
              <Heart className="w-6 h-6" />
              <span>{t('donate.button.now')}</span>
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
            >
              <Globe className="w-6 h-6" />
              <span>{t('home.ui.contactUs')}</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
