'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Settings, 
  Radio, 
  Calendar, 
  Headphones, 
  Users, 
  BarChart3,
  Plus,
  Edit,
  Trash2,
  Play,
  Upload,
  Download,
  Eye,
  Mic,
  Clock
} from 'lucide-react';

const AdminDashboard = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLive, setIsLive] = useState(true);

  const tabs = useMemo(
    () => [
      { id: 'overview', nameKey: 'admin.tab.overview', icon: BarChart3 },
      { id: 'programs', nameKey: 'admin.tab.programs', icon: Calendar },
      { id: 'podcasts', nameKey: 'admin.tab.podcasts', icon: Headphones },
      { id: 'team', nameKey: 'admin.tab.team', icon: Users },
      { id: 'settings', nameKey: 'admin.tab.settings', icon: Settings },
    ],
    [],
  );

  const stats = useMemo(
    () => [
      { titleKey: 'admin.stat.liveListeners', value: '1,247', change: '+12%', icon: Radio, color: 'text-primary-400' },
      { titleKey: 'admin.stat.totalPrograms', value: '24', change: '+2', icon: Calendar, color: 'text-navy-400' },
      { titleKey: 'admin.stat.podcasts', value: '156', change: '+8', icon: Headphones, color: 'text-primary-400' },
      { titleKey: 'admin.stat.teamMembers', value: '8', change: '0', icon: Users, color: 'text-navy-400' },
    ],
    [],
  );

  const recentPrograms = useMemo(
    () => [
      { id: 1, titleKey: 'admin.mock.prog1.title', hostKey: 'admin.mock.prog1.host', time: '06:00-07:00', status: 'live' as const, listeners: 1247 },
      { id: 2, titleKey: 'admin.mock.prog2.title', hostKey: 'admin.mock.prog2.host', time: '10:00-11:00', status: 'upcoming' as const, listeners: 0 },
      { id: 3, titleKey: 'admin.mock.prog3.title', hostKey: 'admin.mock.prog3.host', time: '16:00-17:00', status: 'upcoming' as const, listeners: 0 },
      { id: 4, titleKey: 'admin.mock.prog4.title', hostKey: 'admin.mock.prog4.host', time: '19:00-20:00', status: 'upcoming' as const, listeners: 0 },
    ],
    [],
  );

  const recentPodcasts = useMemo(
    () => [
      { id: 1, titleKey: 'admin.mock.pod1.title', speakerKey: 'admin.mock.pod1.speaker', duration: '45:30', uploadDate: '2024-01-15', downloads: 234 },
      { id: 2, titleKey: 'admin.mock.pod2.title', speakerKey: 'admin.mock.pod2.speaker', duration: '38:15', uploadDate: '2024-01-14', downloads: 189 },
      { id: 3, titleKey: 'admin.mock.pod3.title', speakerKey: 'admin.mock.pod3.speaker', duration: '52:20', uploadDate: '2024-01-13', downloads: 312 },
    ],
    [],
  );

  const teamMembers = useMemo(
    () => [
      { id: 1, nameKey: 'admin.mock.team1.name', roleKey: 'admin.mock.team1.role', status: 'online' as const, lastActiveKey: 'admin.mock.lastActive1' },
      { id: 2, nameKey: 'admin.mock.team2.name', roleKey: 'admin.mock.team2.role', status: 'online' as const, lastActiveKey: 'admin.mock.lastActive2' },
      { id: 3, nameKey: 'admin.mock.team3.name', roleKey: 'admin.mock.team3.role', status: 'offline' as const, lastActiveKey: 'admin.mock.lastActive3' },
      { id: 4, nameKey: 'admin.mock.team4.name', roleKey: 'admin.mock.team4.role', status: 'online' as const, lastActiveKey: 'admin.mock.lastActive4' },
    ],
    [],
  );

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.titleKey}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gradient-to-br dark:from-navy-500/10 dark:to-primary-500/10 p-6 rounded-xl border border-gray-200 dark:border-navy-500/20 shadow-sm dark:shadow-none"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <span className="text-sm text-green-400 font-semibold">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400">{t(stat.titleKey)}</p>
          </motion.div>
        ))}
      </div>

      {/* Live Status */}
      <div className="bg-gradient-to-r from-primary-500/20 to-navy-500/20 p-6 rounded-xl border border-primary-500/30">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-950 dark:text-white">{t('admin.live.title')}</h3>
          <button
            onClick={() => setIsLive(!isLive)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              isLive 
                ? 'bg-red-500 text-gray-950 dark:text-white hover:bg-red-600' 
                : 'bg-green-500 text-gray-950 dark:text-white hover:bg-green-600'
            }`}
          >
            {isLive ? t('admin.live.goOffline') : t('admin.live.goLive')}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-navy-500 rounded-lg flex items-center justify-center">
            <Radio className="w-8 h-8 text-gray-950 dark:text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-950 dark:text-white">{t('admin.live.showTitle')}</h4>
            <p className="text-primary-400">{t('admin.live.showHost')}</p>
            <p className="text-gray-700 dark:text-gray-300">{t('admin.live.listenersLine')}</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none">
          <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-4">{t('admin.section.recentPrograms')}</h3>
          <div className="space-y-4">
            {recentPrograms.map((program) => (
              <div key={program.id} className="flex items-center justify-between p-4 bg-gray-100 dark:bg-dark-700 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-950 dark:text-white">{t(program.titleKey)}</h4>
                  <p className="text-sm text-gray-400">{t(program.hostKey)} • {program.time}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    program.status === 'live' 
                      ? 'bg-red-500/20 text-red-400' 
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {program.status === 'live' ? t('common.statusLive') : t('common.statusUpcoming')}
                  </span>
                  {program.listeners > 0 && (
                    <p className="text-sm text-primary-400 mt-1">{program.listeners} {t('common.listeners')}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none">
          <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-4">{t('admin.section.recentPodcasts')}</h3>
          <div className="space-y-4">
            {recentPodcasts.map((podcast) => (
              <div key={podcast.id} className="flex items-center justify-between p-4 bg-gray-100 dark:bg-dark-700 rounded-lg">
                <div>
                  <h4 className="font-semibold text-gray-950 dark:text-white">{t(podcast.titleKey)}</h4>
                  <p className="text-sm text-gray-400">{t(podcast.speakerKey)} • {podcast.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-primary-400">{podcast.downloads} {t('common.downloads')}</p>
                  <p className="text-xs text-gray-500">{podcast.uploadDate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderPrograms = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-white">{t('admin.programs.title')}</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-navy-500 text-gray-950 dark:text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>{t('admin.programs.add')}</span>
        </button>
      </div>

      <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm dark:shadow-none">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100 dark:bg-dark-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">{t('admin.table.program')}</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">{t('admin.table.host')}</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">{t('admin.table.time')}</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">{t('admin.table.status')}</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">{t('admin.table.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {recentPrograms.map((program) => (
                <tr key={program.id} className="hover:bg-gray-50 dark:hover:bg-dark-700/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <Mic className="w-5 h-5 text-primary-400" />
                      <span className="font-medium text-gray-950 dark:text-white">{t(program.titleKey)}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{t(program.hostKey)}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{program.time}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      program.status === 'live' 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {program.status === 'live' ? t('common.statusLive') : t('common.statusUpcoming')}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-gray-950 dark:text-white transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-950 dark:text-white transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-400 hover:text-red-300 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderPodcasts = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-white">{t('admin.podcasts.title')}</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-navy-500 text-gray-950 dark:text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
          <Upload className="w-5 h-5" />
          <span>{t('admin.podcasts.upload')}</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentPodcasts.map((podcast) => (
          <div key={podcast.id} className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-navy-500 rounded-lg flex items-center justify-center">
                <Headphones className="w-6 h-6 text-gray-950 dark:text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-950 dark:text-white">{t(podcast.titleKey)}</h3>
                <p className="text-sm text-gray-400">{t(podcast.speakerKey)}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{podcast.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>{podcast.downloads} {t('common.downloads')}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-gradient-to-r from-primary-500 to-navy-500 text-gray-950 dark:text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-4 h-4" />
                <span>{t('common.play')}</span>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-950 dark:text-white transition-colors">
                <Edit className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTeam = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-950 dark:text-white">{t('admin.team.title')}</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-navy-500 text-gray-950 dark:text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>{t('admin.team.add')}</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-navy-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-gray-950 dark:text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-950 dark:text-white">{t(member.nameKey)}</h3>
                <p className="text-sm text-gray-400">{t(member.roleKey)}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                member.status === 'online' 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-gray-500/20 text-gray-400'
              }`}>
                {member.status === 'online' ? t('common.statusOnline') : t('common.statusOffline')}
              </span>
              <span className="text-xs text-gray-500">{t(member.lastActiveKey)}</span>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-gradient-to-r from-navy-500 to-primary-500 text-gray-950 dark:text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                {t('common.edit')}
              </button>
              <button className="p-2 text-red-400 hover:text-red-300 transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-950 dark:text-white">{t('admin.settings.title')}</h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none">
          <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-4">{t('admin.settings.broadcast')}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t('admin.settings.stationName')}</label>
              <input
                type="text"
                defaultValue="Radio Madagasikara ho an'i Kristy"
                className="w-full p-3 bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t('admin.settings.frequency')}</label>
              <input
                type="text"
                defaultValue="102.4 FM"
                className="w-full p-3 bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{t('admin.settings.streamUrl')}</label>
              <input
                type="url"
                defaultValue="https://stream.rmk.mg/live"
                className="w-full p-3 bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-dark-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm dark:shadow-none">
          <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-4">{t('admin.settings.general')}</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">{t('admin.settings.maintenance')}</span>
              <button className="w-12 h-6 bg-gray-600 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">{t('admin.settings.autoplay')}</span>
              <button className="w-12 h-6 bg-primary-500 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">{t('admin.settings.emailNotif')}</span>
              <button className="w-12 h-6 bg-primary-500 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-display gradient-text mb-2">
            {t('admin.header.title')}
          </h1>
          <p className="text-gray-700 dark:text-gray-300">
            {t('admin.header.subtitle')}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-white dark:bg-dark-800 p-1 rounded-lg border border-gray-200 dark:border-transparent shadow-sm dark:shadow-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-gray-950 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-700'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{t(tab.nameKey)}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'overview' && renderOverview()}
          {activeTab === 'programs' && renderPrograms()}
          {activeTab === 'podcasts' && renderPodcasts()}
          {activeTab === 'team' && renderTeam()}
          {activeTab === 'settings' && renderSettings()}
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
