'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Mail, 
  Phone, 
  Calendar,
  Award,
  Radio,
  Music,
  BookOpen,
  Globe
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  email: string;
  phone: string;
  experience: string;
  specialties: string[];
  image?: string;
  social?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
  };
}

const TeamPage = () => {
  const { t, language } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = ['all', 'leadership', 'programming', 'technical', 'music', 'ministry'] as const;

  const teamMembers: TeamMember[] = useMemo(
    () => [
      {
        id: '1',
        name: t('home.preview.t1.name'),
        role: t('home.preview.t1.role'),
        department: 'leadership',
        bio: t('team.m1.bio'),
        email: 'contact@rmk.mg',
        phone: '+261 34 49 642 01',
        experience: t('team.m1.exp'),
        specialties: [1, 2, 3, 4].map((s) => t(`team.m1.sp${s}`)),
        social: { facebook: 'rmk.madagascar' },
      },
      {
        id: '2',
        name: t('home.preview.t2.name'),
        role: t('home.preview.t2.role'),
        department: 'leadership',
        bio: t('team.m2.bio'),
        email: 'contact@rmk.mg',
        phone: '+261 34 49 642 01',
        experience: t('team.m2.exp'),
        specialties: [1, 2, 3, 4].map((s) => t(`team.m2.sp${s}`)),
        social: { facebook: 'rmk.madagascar' },
      },
      {
        id: '3',
        name: t('home.preview.t3.name'),
        role: t('home.preview.t3.role'),
        department: 'leadership',
        bio: t('team.m3.bio'),
        email: 'contact@rmk.mg',
        phone: '+261 34 49 642 01',
        experience: t('team.m3.exp'),
        specialties: [1, 2, 3, 4].map((s) => t(`team.m3.sp${s}`)),
        social: { facebook: 'rmk.madagascar' },
      },
      {
        id: '4',
        name: 'Pastor Sarah Rasoanaivo',
        role: t('team.m4.role'),
        department: 'ministry',
        bio: t('team.m4.bio'),
        email: 'sarah@rmk.mg',
        phone: '+261 34 12 345 70',
        experience: t('team.m4.exp'),
        specialties: [1, 2, 3, 4].map((s) => t(`team.m4.sp${s}`)),
        social: { facebook: 'sarah.rasoanaivo' },
      },
      {
        id: '5',
        name: 'Brother Paul Rakotondrabe',
        role: t('team.m5.role'),
        department: 'technical',
        bio: t('team.m5.bio'),
        email: 'paul@rmk.mg',
        phone: '+261 34 12 345 71',
        experience: t('team.m5.exp'),
        specialties: [1, 2, 3, 4].map((s) => t(`team.m5.sp${s}`)),
        social: { facebook: 'paul.rakotondrabe' },
      },
      {
        id: '6',
        name: 'Sister Esther Ravelojaona',
        role: t('team.m6.role'),
        department: 'music',
        bio: t('team.m6.bio'),
        email: 'esther@rmk.mg',
        phone: '+261 34 12 345 72',
        experience: t('team.m6.exp'),
        specialties: [1, 2, 3, 4].map((s) => t(`team.m6.sp${s}`)),
        social: { facebook: 'esther.ravelojaona', instagram: '@esther_rmk' },
      },
      {
        id: '7',
        name: 'Brother Thomas Andriamanjato',
        role: t('team.m7.role'),
        department: 'ministry',
        bio: t('team.m7.bio'),
        email: 'thomas@rmk.mg',
        phone: '+261 34 12 345 73',
        experience: t('team.m7.exp'),
        specialties: [1, 2, 3, 4].map((s) => t(`team.m7.sp${s}`)),
        social: { facebook: 'thomas.andriamanjato' },
      },
      {
        id: '8',
        name: 'Sister Grace Ranaivo',
        role: t('team.m8.role'),
        department: 'programming',
        bio: t('team.m8.bio'),
        email: 'grace@rmk.mg',
        phone: '+261 34 12 345 74',
        experience: t('team.m8.exp'),
        specialties: [1, 2, 3, 4].map((s) => t(`team.m8.sp${s}`)),
        social: { facebook: 'grace.ranaivo', instagram: '@grace_rmk' },
      },
    ],
    [t],
  );

  const filteredMembers = teamMembers.filter(member => 
    selectedDepartment === 'all' || member.department === selectedDepartment
  );

  const getDepartmentIcon = (department: string) => {
    switch (department) {
      case 'leadership': return <Award className="w-5 h-5" />;
      case 'programming': return <Radio className="w-5 h-5" />;
      case 'technical': return <Globe className="w-5 h-5" />;
      case 'music': return <Music className="w-5 h-5" />;
      case 'ministry': return <BookOpen className="w-5 h-5" />;
      default: return <Users className="w-5 h-5" />;
    }
  };

  const getDepartmentColor = (department: string) => {
    switch (department) {
      case 'leadership': return 'from-primary-500 to-navy-500';
      case 'programming': return 'from-navy-500 to-primary-500';
      case 'technical': return 'from-primary-500 to-navy-500';
      case 'music': return 'from-navy-500 to-primary-500';
      case 'ministry': return 'from-primary-500 to-navy-500';
      default: return 'from-navy-500 to-primary-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-4">
            {t('team.hero.title')}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('team.hero.subtitle')}
          </p>
        </motion.div>

        {/* Department Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                selectedDepartment === dept
                  ? 'bg-primary-500 text-gray-950 dark:text-white'
                  : 'bg-navy-500/10 dark:bg-navy-500/20 text-gray-800 dark:text-gray-300 hover:bg-navy-500/30 dark:hover:bg-navy-500/40'
              }`}
            >
              {getDepartmentIcon(dept)}
              <span className="capitalize">
                {t(`team.dept.${dept}`)}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedMember(member)}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500/40 dark:hover:border-primary-500/40 transition-all duration-300 cursor-pointer group shadow-sm dark:shadow-none bg-white dark:bg-dark-800"
            >
              <div className="text-center mb-4">
                <div className={`w-24 h-24 bg-gradient-to-br ${getDepartmentColor(member.department)} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <Users className="w-12 h-12 text-gray-950 dark:text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-950 dark:text-white group-hover:text-primary-400 transition-colors mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-400 font-semibold mb-2">{member.role}</p>
                <div className="flex items-center justify-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
                  {getDepartmentIcon(member.department)}
                  <span className="capitalize">{t(`team.dept.${member.department}`)}</span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-primary-400" />
                  <span>
                    {member.experience}
                    {language === 'mg' ? '' : ` ${t('common.experience')}`}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-primary-400" />
                  <span>
                    {member.specialties.length} {t('common.specialtiesCount')}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-400 line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Member Details Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-dark-800 rounded-xl p-8 max-w-2xl w-full border border-gray-200 dark:border-navy-500/30 max-h-[90vh] overflow-y-auto"
              >
                <div className="text-center mb-6">
                  <div className={`w-32 h-32 bg-gradient-to-br ${getDepartmentColor(selectedMember.department)} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                    <Users className="w-16 h-16 text-gray-950 dark:text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-950 dark:text-white mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="text-primary-400 font-semibold text-lg mb-1">
                    {selectedMember.role}
                  </p>
                  <div className="flex items-center justify-center space-x-1 text-gray-600 dark:text-gray-400">
                    {getDepartmentIcon(selectedMember.department)}
                    <span className="capitalize">{t(`team.dept.${selectedMember.department}`)}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-950 dark:text-white mb-3">{t('common.aboutSection')}</h4>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-gray-950 dark:text-white mb-3">{t('common.contactInfo')}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                          <Mail className="w-4 h-4 text-primary-400" />
                          <span>{selectedMember.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                          <Phone className="w-4 h-4 text-primary-400" />
                          <span>{selectedMember.phone}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-950 dark:text-white mb-3">{t('common.experienceLabel')}</h4>
                      <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                        <Calendar className="w-4 h-4 text-primary-400" />
                        <span>{selectedMember.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-gray-950 dark:text-white mb-3">{t('common.specialties')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-navy-500/10 dark:bg-navy-500/20 text-navy-800 dark:text-navy-300 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedMember.social && (
                    <div>
                      <h4 className="text-lg font-bold text-gray-950 dark:text-white mb-3">{t('common.socialMedia')}</h4>
                      <div className="flex space-x-4">
                        {selectedMember.social.facebook && (
                          <a
                            href={`https://facebook.com/${selectedMember.social.facebook}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 hover:text-primary-300 transition-colors"
                          >
                            Facebook
                          </a>
                        )}
                        {selectedMember.social.twitter && (
                          <a
                            href={`https://twitter.com/${selectedMember.social.twitter}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 hover:text-primary-300 transition-colors"
                          >
                            Twitter
                          </a>
                        )}
                        {selectedMember.social.instagram && (
                          <a
                            href={`https://instagram.com/${selectedMember.social.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-400 hover:text-primary-300 transition-colors"
                          >
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="w-full py-3 bg-gradient-to-r from-primary-500 to-navy-500 text-gray-950 dark:text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    {t('common.close')}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TeamPage;
