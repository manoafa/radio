'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  Target,
  Eye,
  Heart,
  Users,
  Radio,
  Globe,
  Award,
  Calendar,
  Mic,
  BookOpen,
  Shield,
  Lightbulb,
} from 'lucide-react';
import { useLanguage } from '@/app/context/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  const values = useMemo(
    () => [
    {
      icon: Heart,
      titleKey: 'aboutPage.v1.title',
      descKey: 'aboutPage.v1.desc',
    },
    {
      icon: Shield,
      titleKey: 'aboutPage.v2.title',
      descKey: 'aboutPage.v2.desc',
    },
    {
      icon: Award,
      titleKey: 'aboutPage.v3.title',
      descKey: 'aboutPage.v3.desc',
    },
    {
      icon: Users,
      titleKey: 'aboutPage.v4.title',
      descKey: 'aboutPage.v4.desc',
    },
    {
      icon: BookOpen,
      titleKey: 'aboutPage.v5.title',
      descKey: 'aboutPage.v5.desc',
    },
    {
      icon: Lightbulb,
      titleKey: 'aboutPage.v6.title',
      descKey: 'aboutPage.v6.desc',
    },
    ],
    [],
  );

  const milestones = useMemo(
    () => [
      { year: '2010', titleKey: 'aboutPage.ms2010.title', descKey: 'aboutPage.ms2010.desc' },
      { year: '2012', titleKey: 'aboutPage.ms2012.title', descKey: 'aboutPage.ms2012.desc' },
      { year: '2015', titleKey: 'aboutPage.ms2015.title', descKey: 'aboutPage.ms2015.desc' },
      { year: '2018', titleKey: 'aboutPage.ms2018.title', descKey: 'aboutPage.ms2018.desc' },
      { year: '2020', titleKey: 'aboutPage.ms2020.title', descKey: 'aboutPage.ms2020.desc' },
      { year: '2024', titleKey: 'aboutPage.ms2024.title', descKey: 'aboutPage.ms2024.desc' },
    ],
    [],
  );

  const leadership = useMemo(
    () => [
      {
        nameKey: 'home.preview.t1.name',
        roleKey: 'home.preview.t1.role',
        bioKey: 'home.preview.t1.desc',
      },
      {
        nameKey: 'home.preview.t2.name',
        roleKey: 'home.preview.t2.role',
        bioKey: 'home.preview.t2.desc',
      },
      {
        nameKey: 'home.preview.t3.name',
        roleKey: 'home.preview.t3.role',
        bioKey: 'home.preview.t3.desc',
      },
    ],
    [],
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-100 via-blue-100 to-orange-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="absolute inset-0 animated-bg opacity-60 dark:opacity-100"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display gradient-text mb-6">
              {t('aboutPage.heroTitle')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t('aboutPage.heroLead')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-500/20 to-primary-500/20 p-8 rounded-2xl border border-navy-500/30 hover:border-primary-500/50 transition-all duration-300"
            >
              <Target className="w-16 h-16 text-primary-500 mb-6" />
              <h2 className="text-3xl font-bold text-gray-950 dark:text-white mb-4">{t('aboutPage.missionTitle')}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('aboutPage.missionBody')}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500/20 to-navy-500/20 p-8 rounded-2xl border border-primary-500/30 hover:border-navy-500/50 transition-all duration-300"
            >
              <Eye className="w-16 h-16 text-navy-500 mb-6" />
              <h2 className="text-3xl font-bold text-gray-950 dark:text-white mb-4">{t('aboutPage.visionTitle')}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('aboutPage.visionBody')}
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-500/20 to-primary-500/20 p-8 rounded-2xl border border-navy-500/30 hover:border-primary-500/50 transition-all duration-300"
            >
              <Heart className="w-16 h-16 text-primary-500 mb-6" />
              <h2 className="text-3xl font-bold text-gray-950 dark:text-white mb-4">{t('aboutPage.valuesColumnTitle')}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {t('aboutPage.valuesColumnBody')}
              </p>
            </motion.div>
          </div>

          {/* Detailed Values */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-display gradient-text mb-8">
              {t('aboutPage.coreValuesTitle')}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.titleKey}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 dark:bg-dark-700 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500/50 transition-all duration-300"
                >
                  <value.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-3">{t(value.titleKey)}</h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{t(value.descKey)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50 dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-display gradient-text mb-6">
              {t('aboutPage.storyTitle')}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t('aboutPage.storyLead')}
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-navy-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gradient-to-br from-navy-500/10 to-primary-500/10 p-6 rounded-xl border border-navy-500/20">
                      <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-2">{t(milestone.titleKey)}</h3>
                      <p className="text-primary-400 font-semibold text-lg mb-3">{milestone.year}</p>
                      <p className="text-gray-700 dark:text-gray-300">{t(milestone.descKey)}</p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-navy-500 rounded-full flex items-center justify-center relative z-10">
                    <Calendar className="w-4 h-4 text-gray-950 dark:text-white" />
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-display gradient-text mb-6">
              {t('aboutPage.leadershipTitle')}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t('aboutPage.leadershipLead')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.nameKey}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-navy-500/10 to-primary-500/10 p-8 rounded-xl border border-navy-500/20 hover:border-primary-500/40 transition-all duration-300 text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-navy-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-950 dark:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-2">{t(leader.nameKey)}</h3>
                <p className="text-primary-400 font-semibold text-lg mb-4">{t(leader.roleKey)}</p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t(leader.bioKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-gray-50 dark:bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-display gradient-text mb-6">
              {t('aboutPage.impactTitle')}
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              {t('aboutPage.impactLead')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-navy-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Radio className="w-10 h-10 text-gray-950 dark:text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-950 dark:text-white mb-2">50,000+</h3>
              <p className="text-gray-700 dark:text-gray-300">{t('aboutPage.impactStat1')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-navy-500 to-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Globe className="w-10 h-10 text-gray-950 dark:text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-950 dark:text-white mb-2">22</h3>
              <p className="text-gray-700 dark:text-gray-300">{t('aboutPage.impactStat2')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-navy-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Mic className="w-10 h-10 text-gray-950 dark:text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-950 dark:text-white mb-2">24/7</h3>
              <p className="text-gray-700 dark:text-gray-300">{t('aboutPage.impactStat3')}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-navy-500 to-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Heart className="w-10 h-10 text-gray-950 dark:text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-950 dark:text-white mb-2">14+</h3>
              <p className="text-gray-700 dark:text-gray-300">{t('aboutPage.impactStat4')}</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
