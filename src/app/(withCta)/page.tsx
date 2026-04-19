'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useRef, useEffect, useMemo } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { 
  Heart, 
  Users, 
  Target, 
  Eye, 
  Play, 
  Calendar,
  Headphones,
  Clock,
  ChevronLeft,
  ChevronRight,
  Radio,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const { t } = useLanguage();
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragX = useMotionValue(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const popularPrograms = useMemo(
    () =>
      [1, 2, 3, 4].map((n, i) => {
        const icons = [Radio, Heart, Users, Heart, Users, Radio] as const;
        const colors = [
          'from-primary-500 to-navy-500',
          'from-navy-500 to-primary-500',
          'from-primary-500 to-navy-500',
          'from-navy-500 to-primary-500',
          'from-primary-500 to-navy-500',
          'from-navy-500 to-primary-500',
        ] as const;
        return {
          title: t(`prog.${n}.title`),
          time: t(`prog.${n}.time`),
          host: t(`prog.${n}.host`),
          description: t(`prog.${n}.desc`),
          icon: icons[i],
          color: colors[i],
        };
      }),
    [t],
  );

  const homePodcasts = useMemo(
    () => [
      {
        title: t('home.podfeat.1.title'),
        speaker: t('home.podfeat.1.speaker'),
        duration: t('home.ui.homePod1Dur'),
        date: t('common.yesterday'),
        gradient: 'from-primary-500 to-primary-600',
      },
      {
        title: t('home.podfeat.2.title'),
        speaker: t('home.podfeat.2.speaker'),
        duration: t('home.ui.homePod2Dur'),
        date: t('common.daysAgo2'),
        gradient: 'from-navy-500 to-navy-600',
      },
      {
        title: t('home.podfeat.3.title'),
        speaker: t('home.podfeat.3.speaker'),
        duration: t('home.ui.homePod3Dur'),
        date: t('common.daysAgo3'),
        gradient: 'from-primary-500 to-navy-500',
      },
    ],
    [t],
  );

  const homeTeamPreview = useMemo(
    () =>
      [1, 2, 3, 4].map((n, i) => {
        const gradients = [
          'from-primary-500 to-primary-600',
          'from-navy-500 to-navy-600',
          'from-primary-500 to-navy-500',
          'from-navy-500 to-primary-500',
        ] as const;
        return {
          name: t(`home.preview.t${n}.name`),
          role: t(`home.preview.t${n}.role`),
          description: t(`home.preview.t${n}.desc`),
          gradient: gradients[i],
        };
      }),
    [t],
  );
  
  const carouselX = useTransform(dragX, (latest) => {
    const baseOffset = -currentProgramIndex * 100;
    const width = carouselRef.current?.offsetWidth || 1;
    const dragOffset = (latest / width) * 100;
    return `${baseOffset + dragOffset}%`;
  });

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    const x = dragX.get();
    const threshold = 50;
    
    if (x > threshold && currentProgramIndex > 0) {
      setCurrentProgramIndex(currentProgramIndex - 1);
    } else if (x < -threshold && currentProgramIndex < popularPrograms.length - 1) {
      setCurrentProgramIndex(currentProgramIndex + 1);
    }
    
    dragX.set(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentProgramIndex((prev) => (prev + 1) % popularPrograms.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDragging, popularPrograms.length]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 sm:pt-28">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full min-h-[100dvh] object-cover"
          src="/Background.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden
        />
        {/* Strong overlay so hero copy and fixed nav stay readable over the video */}
        <div className="absolute inset-0 bg-black/70" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/35" aria-hidden />

        <div className="relative z-10 flex h-full w-full items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8 max-w-4xl mx-auto px-8"
          >
            {/* Main Title */}
            <div>
              <h1 className="text-6xl md:text-8xl font-bold font-display gradient-text drop-shadow-md [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
                {t('home.ui.headline')}
              </h1>
              <br/>
              <h2 className="text-2xl md:text-4xl font-semibold text-white drop-shadow-md [text-shadow:0_1px_16px_rgba(0,0,0,0.5)]">
                {t('home.ui.fm')}
              </h2>
              <br/>
              <p className="text-xl md:text-2xl text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.55)]">
                {t('home.ui.intro')}
              </p>
            </div>
            <br/>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-navy-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <Play className="w-6 h-6" />
                <span>{t('home.hero.listenLive')}</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/80 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar className="w-6 h-6" />
                <span>{t('home.hero.viewPrograms')}</span>
              </motion.button>
            </div>
            <br/>

            {/* Live Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center space-x-2"
            >
              {/* <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-white">{t('home.ui.liveLine')}</span> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section - Redesigned with animations and visual elements */}
      <section className="bg-gradient-to-br from-orange-50 via-blue-50 to-orange-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-navy-200/30 dark:bg-navy-500/10 rounded-full blur-3xl"
            animate={{
              x: [0, -80, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-primary-500 mx-auto" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-6">
              {t('home.ui.aboutTitle')}
            </h2>
            <p className="text-xl text-navy-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t('home.ui.aboutLead')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 justify-center">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white dark:bg-dark-800 p-8 rounded-2xl border-2 border-primary-200 dark:border-primary-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center mb-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 text-center">{t('home.ui.missionTitle')}</h3>
                <p className="text-navy-700 dark:text-gray-300 leading-relaxed">
                  {t('home.ui.missionText')}
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white dark:bg-dark-800 p-8 rounded-2xl border-2 border-navy-200 dark:border-navy-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-navy-500/20 to-transparent rounded-br-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center mb-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-navy-500 to-navy-600 rounded-full flex items-center justify-center shadow-lg">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 text-center">{t('home.ui.visionTitle')}</h3>
                <p className="text-navy-700 dark:text-gray-300 leading-relaxed">
                  {t('home.ui.visionText')}
                </p>
              </div>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="bg-white dark:bg-dark-800 p-8 rounded-2xl border-2 border-primary-200 dark:border-primary-500/30 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-tl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="flex justify-center mb-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-navy-500 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-navy-800 dark:text-white mb-4 text-center">{t('home.ui.valuesTitle')}</h3>
                <p className="text-navy-700 dark:text-gray-300 leading-relaxed">
                  {t('home.ui.valuesText')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section - Animated Slideshow */}
      <section className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50/50 via-transparent to-navy-50/50 dark:from-dark-700/30 dark:via-transparent dark:to-dark-700/30"></div>
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-6">
              {t('home.ui.programsTitle')}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t('home.ui.programsSubtitle')}
            </p>
          </motion.div>

          {/* Animated Slideshow */}
          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <button
                onClick={() => setCurrentProgramIndex((prev) => (prev - 1 + popularPrograms.length) % popularPrograms.length)}
                className="p-3 rounded-full bg-white dark:bg-dark-800 border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex-1 flex gap-2 justify-center">
                {popularPrograms.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProgramIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentProgramIndex
                        ? 'bg-primary-500 w-8'
                        : 'bg-gray-300 dark:bg-gray-600 w-2'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentProgramIndex((prev) => (prev + 1) % popularPrograms.length)}
                className="p-3 rounded-full bg-white dark:bg-dark-800 border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="relative overflow-hidden rounded-3xl h-[550px]">
              <motion.div
                ref={carouselRef}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.3}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                className="cursor-grab active:cursor-grabbing h-full"
              >
                <motion.div 
                  className="flex h-full"
                  style={{ 
                    x: isDragging ? carouselX : `-${currentProgramIndex * 100}%`
                  }}
                  animate={!isDragging ? { 
                    x: `-${currentProgramIndex * 100}%` 
                  } : {}}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30 
                  }}
                >
                  {popularPrograms.map((program, index) => {
                    const Icon = program.icon;
                    const isActive = index === currentProgramIndex;
                    
                    return (
                      <motion.div
                        key={program.title}
                        initial={false}
                        animate={{
                          scale: isActive ? 1 : 0.85,
                          opacity: isActive ? 1 : 0.5,
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex-shrink-0 w-full px-4 h-full"
                      >
                        <div className={`bg-gradient-to-br ${program.color} p-8 rounded-3xl shadow-2xl h-full transform transition-all duration-500 ${
                          isActive ? 'rotate-0' : 'rotate-1'
                        }`}>
                          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col">
                            <div className="flex items-center justify-between mb-6">
                              <div className={`w-16 h-16 bg-white/20 dark:bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm`}>
                                <Icon className="w-8 h-8 text-white" />
                              </div>
                              <Clock className="w-6 h-6 text-white/80" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">
                              {program.title}
                            </h3>
                            <p className="text-white font-semibold mb-3 text-lg">{program.time}</p>
                            <p className="text-white mb-4">{t('common.host')} {program.host}</p>
                            <p className="text-white/95 text-sm flex-grow">{program.description}</p>
                            {isActive && (
                              <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-6"
                              >
                                <button className="w-full py-3 bg-white text-primary-600 dark:text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg">
                                  <Play className="w-5 h-5" />
                                  <span>{t('home.ui.listenNow')}</span>
                                </button>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-navy-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg"
            >
              <Calendar className="w-6 h-6" />
              <span>{t('home.schedule.viewAll')}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Podcast Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark-800 dark:to-dark-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ rotate: -180 }}
              whileInView={{ rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <Headphones className="w-16 h-16 text-primary-500" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-6">
              {t('home.ui.podcastsTitle')}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t('home.ui.podcastsSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {homePodcasts.map((podcast, index) => (
              <motion.div
                key={podcast.title}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group border-2 border-gray-200 dark:border-gray-700"
              >
                <div className={`h-32 bg-gradient-to-br ${podcast.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <Headphones className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white text-sm font-semibold">{podcast.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {podcast.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{t('common.by')} {podcast.speaker}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{podcast.date}</span>
                  </div>
                  <button className="w-full py-3 bg-gradient-to-r from-primary-500 to-navy-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                    <Play className="w-5 h-5" />
                    <span>{t('home.ui.playNow')}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/podcasts"
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-primary-500 text-primary-600 dark:text-primary-400 rounded-full font-semibold text-lg hover:bg-primary-50 dark:hover:bg-primary-500/10 transition-all duration-300 shadow-lg"
            >
              <Headphones className="w-6 h-6" />
              <span>{t('home.ui.browsePodcasts')}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section - Redesigned */}
      <section className="py-20 bg-white dark:bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100/30 dark:bg-primary-900/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-navy-100/30 dark:bg-navy-900/20 rounded-full blur-3xl"></div>
        </div>
        <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <Users className="w-16 h-16 text-primary-500" />
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-6">
              {t('team.hero.title')}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t('home.ui.teamSubtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {homeTeamPreview.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-full mx-auto flex items-center justify-center shadow-2xl relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <Users className="w-16 h-16 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-500 to-navy-500 rounded-full"
                  />
                </div>
                <div className="bg-white dark:bg-dark-800 p-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/team"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-navy-500 to-primary-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg"
            >
              <Users className="w-6 h-6" />
              <span>{t('home.ui.meetFullTeam')}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
