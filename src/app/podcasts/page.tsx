'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Download, 
  Share2, 
  Heart,
  Clock,
  User,
  Calendar,
  Headphones,
  Radio,
  Search,
  Filter
} from 'lucide-react';

interface Podcast {
  id: string;
  title: string;
  speaker: string;
  duration: string;
  date: string;
  description: string;
  category: string;
  audioUrl: string;
  imageUrl?: string;
  isLive?: boolean;
  listeners?: number;
}

const PodcastsPage = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const categoryIds = ['all', 'sermons', 'devotionals', 'music', 'interviews', 'youth', 'family'] as const;

  const podcasts: Podcast[] = useMemo(
    () => [
      {
        id: '1',
        title: t('podcasts.row.1.title'),
        speaker: t('podcasts.row.1.speaker'),
        duration: '45:30',
        date: '2024-01-15',
        description: t('podcasts.row.1.desc'),
        category: 'sermons',
        audioUrl: '/audio/prayer-sermon.mp3',
        isLive: false,
      },
      {
        id: '2',
        title: t('podcasts.row.2.title'),
        speaker: t('podcasts.row.2.speaker'),
        duration: '38:15',
        date: '2024-01-14',
        description: t('podcasts.row.2.desc'),
        category: 'devotionals',
        audioUrl: '/audio/faith-devotional.mp3',
        isLive: false,
      },
      {
        id: '3',
        title: t('podcasts.row.3.title'),
        speaker: t('podcasts.row.3.speaker'),
        duration: '52:20',
        date: '2024-01-13',
        description: t('podcasts.row.3.desc'),
        category: 'sermons',
        audioUrl: '/audio/gods-love.mp3',
        isLive: false,
      },
      {
        id: '4',
        title: t('podcasts.row.4.title'),
        speaker: t('podcasts.row.4.speaker'),
        duration: '1:25:30',
        date: '2024-01-12',
        description: t('podcasts.row.4.desc'),
        category: 'youth',
        audioUrl: '/audio/youth-revival.mp3',
        isLive: false,
      },
      {
        id: '5',
        title: t('podcasts.row.5.title'),
        speaker: t('podcasts.row.5.speaker'),
        duration: '41:45',
        date: '2024-01-11',
        description: t('podcasts.row.5.desc'),
        category: 'family',
        audioUrl: '/audio/strong-families.mp3',
        isLive: false,
      },
      {
        id: '6',
        title: t('podcasts.row.6.title'),
        speaker: t('podcasts.row.6.speaker'),
        duration: '1:15:20',
        date: '2024-01-10',
        description: t('podcasts.row.6.desc'),
        category: 'music',
        audioUrl: '/audio/worship-collection.mp3',
        isLive: false,
      },
      {
        id: '7',
        title: t('podcasts.row.7.title'),
        speaker: t('podcasts.row.7.speaker'),
        duration: '55:10',
        date: '2024-01-09',
        description: t('podcasts.row.7.desc'),
        category: 'interviews',
        audioUrl: '/audio/missionary-interview.mp3',
        isLive: false,
      },
      {
        id: '8',
        title: t('podcasts.row.8.title'),
        speaker: t('podcasts.row.8.speaker'),
        duration: t('podcasts.view.durationLive'),
        date: '2024-01-15',
        description: t('podcasts.row.8.desc'),
        category: 'devotionals',
        audioUrl: '/stream/live',
        isLive: true,
        listeners: 1247,
      },
    ],
    [t],
  );

  const filteredPodcasts = podcasts.filter(podcast => {
    const matchesSearch = podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         podcast.speaker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || podcast.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const togglePlay = (id: string) => {
    setPlayingId(playingId === id ? null : id);
  };

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const localeTag = language === 'fr' ? 'fr-FR' : language === 'mg' ? 'mg-MG' : 'en-US';

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(localeTag, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
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
            {t('podcasts.view.pageTitle')}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {t('podcasts.view.pageSubtitle')}
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('podcasts.view.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white focus:border-primary-500 focus:outline-none transition-colors"
              >
                {categoryIds.map((category) => (
                  <option key={category} value={category} className="capitalize">
                    {t(`podcasts.cat.${category}`)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </motion.div>

        {/* Live Stream */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-4">{t('podcasts.view.liveNow')}</h2>
          <div className="bg-gradient-to-r from-primary-500/20 to-navy-500/20 dark:from-dark-800 dark:to-dark-900 p-6 rounded-xl border border-primary-200 dark:border-primary-500/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-navy-500 rounded-lg flex items-center justify-center">
                  <Radio className="w-8 h-8 text-gray-950 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-950 dark:text-white">{t('podcasts.view.liveStation')}</h3>
                  <p className="text-primary-400 font-semibold">{t('podcasts.view.liveSubtitle')}</p>
                  <p className="text-gray-700 dark:text-gray-300">{t('podcasts.view.listenersCount')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => togglePlay('live')}
                  className="w-12 h-12 bg-gradient-to-r from-primary-500 to-navy-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {playingId === 'live' ? (
                    <Pause className="w-6 h-6 text-gray-950 dark:text-white" />
                  ) : (
                    <Play className="w-6 h-6 text-gray-950 dark:text-white ml-1" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Podcasts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-6">{t('podcasts.view.gridTitle')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPodcasts.map((podcast, index) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary-500/40 dark:hover:border-primary-500/40 transition-all duration-300 group shadow-sm dark:shadow-none"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-navy-500 rounded-lg flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-gray-950 dark:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-950 dark:text-white group-hover:text-primary-400 transition-colors mb-1">
                      {podcast.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{podcast.speaker}</span>
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {podcast.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{podcast.duration}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(podcast.date)}</span>
                    </span>
                  </div>
                  {podcast.isLive && (
                    <div className="flex items-center space-x-1 text-primary-400">
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                      <span className="text-xs">{t('common.live')}</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => togglePlay(podcast.id)}
                    className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-navy-500 text-gray-950 dark:text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {playingId === podcast.id ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                    <span>{playingId === podcast.id ? t('common.pause') : t('common.play')}</span>
                  </button>
                  
                  <button
                    onClick={() => toggleFavorite(podcast.id)}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      favorites.includes(podcast.id)
                        ? 'bg-primary-500 text-gray-950 dark:text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(podcast.id) ? 'fill-current' : ''}`} />
                  </button>
                  
                  <button className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300">
                    <Share2 className="w-5 h-5" />
                  </button>
                  
                  <button className="p-3 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPodcasts.length === 0 && (
            <div className="text-center py-12">
              <Headphones className="w-16 h-16 text-gray-500 dark:text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-400 mb-2">{t('podcasts.view.emptyTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-500">{t('podcasts.view.emptyHint')}</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PodcastsPage;
