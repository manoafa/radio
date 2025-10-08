'use client';

import { useState } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  const categories = ['all', 'sermons', 'devotionals', 'music', 'interviews', 'youth', 'family'];

  const podcasts: Podcast[] = [
    {
      id: '1',
      title: 'The Power of Prayer',
      speaker: 'Pastor Jean',
      duration: '45:30',
      date: '2024-01-15',
      description: 'Discover the transformative power of prayer in this inspiring message about building a deeper relationship with God through communication.',
      category: 'sermons',
      audioUrl: '/audio/prayer-sermon.mp3',
      isLive: false
    },
    {
      id: '2',
      title: 'Walking in Faith',
      speaker: 'Sister Marie',
      duration: '38:15',
      date: '2024-01-14',
      description: 'Learn how to walk in faith daily and trust God in every situation. Practical advice for Christian living.',
      category: 'devotionals',
      audioUrl: '/audio/faith-devotional.mp3',
      isLive: false
    },
    {
      id: '3',
      title: 'God\'s Love for You',
      speaker: 'Pastor David',
      duration: '52:20',
      date: '2024-01-13',
      description: 'Understanding the depth and breadth of God\'s unconditional love for each of us.',
      category: 'sermons',
      audioUrl: '/audio/gods-love.mp3',
      isLive: false
    },
    {
      id: '4',
      title: 'Youth Revival Night',
      speaker: 'Pastor David',
      duration: '1:25:30',
      date: '2024-01-12',
      description: 'A powerful night of worship and ministry for young people seeking God.',
      category: 'youth',
      audioUrl: '/audio/youth-revival.mp3',
      isLive: false
    },
    {
      id: '5',
      title: 'Building Strong Families',
      speaker: 'Pastor Sarah',
      duration: '41:45',
      date: '2024-01-11',
      description: 'Biblical principles for building strong, God-centered families in today\'s world.',
      category: 'family',
      audioUrl: '/audio/strong-families.mp3',
      isLive: false
    },
    {
      id: '6',
      title: 'Worship Music Collection',
      speaker: 'Worship Team',
      duration: '1:15:20',
      date: '2024-01-10',
      description: 'A beautiful collection of worship songs to lift your spirit and draw you closer to God.',
      category: 'music',
      audioUrl: '/audio/worship-collection.mp3',
      isLive: false
    },
    {
      id: '7',
      title: 'Interview with Missionary John',
      speaker: 'Pastor Jean',
      duration: '55:10',
      date: '2024-01-09',
      description: 'An inspiring interview with missionary John about his work in remote areas of Madagascar.',
      category: 'interviews',
      audioUrl: '/audio/missionary-interview.mp3',
      isLive: false
    },
    {
      id: '8',
      title: 'Morning Devotion - Live',
      speaker: 'Pastor Jean',
      duration: 'LIVE',
      date: '2024-01-15',
      description: 'Join us for live morning devotion and prayer. Currently airing.',
      category: 'devotionals',
      audioUrl: '/stream/live',
      isLive: true,
      listeners: 1247
    }
  ];

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-4">
            Podcasts & Replays
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Listen to our latest sermons, teachings, and inspirational content 
            anytime, anywhere.
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
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search podcasts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-gray-600 rounded-lg text-gray-950 dark:text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg text-gray-950 dark:text-white focus:border-primary-500 focus:outline-none transition-colors"
              >
                {categories.map(category => (
                  <option key={category} value={category} className="capitalize">
                    {category === 'all' ? 'All Categories' : category}
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
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-4">Live Now</h2>
          <div className="bg-gradient-to-r from-primary-500/20 to-navy-500/20 p-6 rounded-xl border border-primary-500/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-navy-500 rounded-lg flex items-center justify-center">
                  <Radio className="w-8 h-8 text-gray-950 dark:text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-950 dark:text-white">102.4 FM RMK Live</h3>
                  <p className="text-primary-400 font-semibold">Morning Devotion with Pastor Jean</p>
                  <p className="text-gray-300">1,247 listeners online</p>
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
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-6">Available Podcasts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPodcasts.map((podcast, index) => (
              <motion.div
                key={podcast.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-navy-500/10 to-primary-500/10 p-6 rounded-xl border border-navy-500/20 hover:border-primary-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-navy-500 rounded-lg flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-gray-950 dark:text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-950 dark:text-white group-hover:text-primary-400 transition-colors mb-1">
                      {podcast.title}
                    </h3>
                    <p className="text-gray-400 flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{podcast.speaker}</span>
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {podcast.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
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
                      <span className="text-xs">LIVE</span>
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
                    <span>{playingId === podcast.id ? 'Pause' : 'Play'}</span>
                  </button>
                  
                  <button
                    onClick={() => toggleFavorite(podcast.id)}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      favorites.includes(podcast.id)
                        ? 'bg-primary-500 text-gray-950 dark:text-white'
                        : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${favorites.includes(podcast.id) ? 'fill-current' : ''}`} />
                  </button>
                  
                  <button className="p-3 bg-gray-700 text-gray-400 rounded-lg hover:bg-gray-600 transition-all duration-300">
                    <Share2 className="w-5 h-5" />
                  </button>
                  
                  <button className="p-3 bg-gray-700 text-gray-400 rounded-lg hover:bg-gray-600 transition-all duration-300">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPodcasts.length === 0 && (
            <div className="text-center py-12">
              <Headphones className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-400 mb-2">No podcasts found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PodcastsPage;
