'use client';

import { useState } from 'react';
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
  Pause,
  Upload,
  Download,
  Eye,
  Mic,
  Clock,
  Heart,
  Globe
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isLive, setIsLive] = useState(true);

  const tabs = [
    { id: 'overview', name: 'Overview', icon: BarChart3 },
    { id: 'programs', name: 'Programs', icon: Calendar },
    { id: 'podcasts', name: 'Podcasts', icon: Headphones },
    { id: 'team', name: 'Team', icon: Users },
    { id: 'settings', name: 'Settings', icon: Settings }
  ];

  const stats = [
    { title: 'Live Listeners', value: '1,247', change: '+12%', icon: Radio, color: 'text-primary-400' },
    { title: 'Total Programs', value: '24', change: '+2', icon: Calendar, color: 'text-navy-400' },
    { title: 'Podcasts', value: '156', change: '+8', icon: Headphones, color: 'text-primary-400' },
    { title: 'Team Members', value: '8', change: '0', icon: Users, color: 'text-navy-400' }
  ];

  const recentPrograms = [
    { id: 1, title: 'Morning Devotion', host: 'Pastor Jean', time: '06:00-07:00', status: 'live', listeners: 1247 },
    { id: 2, title: 'Women of Faith', host: 'Sister Marie', time: '10:00-11:00', status: 'upcoming', listeners: 0 },
    { id: 3, title: 'Youth Alive', host: 'Pastor David', time: '16:00-17:00', status: 'upcoming', listeners: 0 },
    { id: 4, title: 'Evening Prayer', host: 'Pastor Paul', time: '19:00-20:00', status: 'upcoming', listeners: 0 }
  ];

  const recentPodcasts = [
    { id: 1, title: 'The Power of Prayer', speaker: 'Pastor Jean', duration: '45:30', uploadDate: '2024-01-15', downloads: 234 },
    { id: 2, title: 'Walking in Faith', speaker: 'Sister Marie', duration: '38:15', uploadDate: '2024-01-14', downloads: 189 },
    { id: 3, title: 'God\'s Love for You', speaker: 'Pastor David', duration: '52:20', uploadDate: '2024-01-13', downloads: 312 }
  ];

  const teamMembers = [
    { id: 1, name: 'Pastor Jean', role: 'Station Director', status: 'online', lastActive: '2 min ago' },
    { id: 2, name: 'Sister Marie', role: 'Program Coordinator', status: 'online', lastActive: '5 min ago' },
    { id: 3, name: 'Pastor David', role: 'Youth Minister', status: 'offline', lastActive: '1 hour ago' },
    { id: 4, name: 'Pastor Sarah', role: 'Family Counselor', status: 'online', lastActive: '1 min ago' }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-br from-navy-500/10 to-primary-500/10 p-6 rounded-xl border border-navy-500/20"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon className={`w-8 h-8 ${stat.color}`} />
              <span className="text-sm text-green-400 font-semibold">{stat.change}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
            <p className="text-gray-400">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Live Status */}
      <div className="bg-gradient-to-r from-primary-500/20 to-navy-500/20 p-6 rounded-xl border border-primary-500/30">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">Live Broadcast Status</h3>
          <button
            onClick={() => setIsLive(!isLive)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              isLive 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-green-500 text-white hover:bg-green-600'
            }`}
          >
            {isLive ? 'Go Offline' : 'Go Live'}
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-navy-500 rounded-lg flex items-center justify-center">
            <Radio className="w-8 h-8 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white">Morning Devotion</h4>
            <p className="text-primary-400">Host: Pastor Jean</p>
            <p className="text-gray-300">1,247 listeners online</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Recent Programs</h3>
          <div className="space-y-4">
            {recentPrograms.map((program) => (
              <div key={program.id} className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
                <div>
                  <h4 className="font-semibold text-white">{program.title}</h4>
                  <p className="text-sm text-gray-400">{program.host} • {program.time}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    program.status === 'live' 
                      ? 'bg-red-500/20 text-red-400' 
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {program.status}
                  </span>
                  {program.listeners > 0 && (
                    <p className="text-sm text-primary-400 mt-1">{program.listeners} listeners</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Recent Podcasts</h3>
          <div className="space-y-4">
            {recentPodcasts.map((podcast) => (
              <div key={podcast.id} className="flex items-center justify-between p-4 bg-dark-700 rounded-lg">
                <div>
                  <h4 className="font-semibold text-white">{podcast.title}</h4>
                  <p className="text-sm text-gray-400">{podcast.speaker} • {podcast.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-primary-400">{podcast.downloads} downloads</p>
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
        <h2 className="text-2xl font-bold text-white">Program Management</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-navy-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Program</span>
        </button>
      </div>

      <div className="bg-dark-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-700">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Program</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Host</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Time</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {recentPrograms.map((program) => (
                <tr key={program.id} className="hover:bg-dark-700/50">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <Mic className="w-5 h-5 text-primary-400" />
                      <span className="font-medium text-white">{program.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{program.host}</td>
                  <td className="px-6 py-4 text-gray-300">{program.time}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      program.status === 'live' 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {program.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white transition-colors">
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
        <h2 className="text-2xl font-bold text-white">Podcast Management</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-navy-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
          <Upload className="w-5 h-5" />
          <span>Upload Podcast</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentPodcasts.map((podcast) => (
          <div key={podcast.id} className="bg-dark-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-navy-500 rounded-lg flex items-center justify-center">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">{podcast.title}</h3>
                <p className="text-sm text-gray-400">{podcast.speaker}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-gray-300 mb-4">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{podcast.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>{podcast.downloads} downloads</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-gradient-to-r from-primary-500 to-navy-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                <Play className="w-4 h-4" />
                <span>Play</span>
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
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
        <h2 className="text-2xl font-bold text-white">Team Management</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-primary-500 to-navy-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span>Add Member</span>
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-dark-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-navy-500 rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">{member.name}</h3>
                <p className="text-sm text-gray-400">{member.role}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                member.status === 'online' 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-gray-500/20 text-gray-400'
              }`}>
                {member.status}
              </span>
              <span className="text-xs text-gray-500">{member.lastActive}</span>
            </div>
            <div className="flex space-x-2">
              <button className="flex-1 py-2 bg-gradient-to-r from-navy-500 to-primary-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Edit
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
      <h2 className="text-2xl font-bold text-white">Settings</h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Broadcast Settings</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Station Name</label>
              <input
                type="text"
                defaultValue="Radio Madagasikara ho an'i Kristy"
                className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Frequency</label>
              <input
                type="text"
                defaultValue="102.4 FM"
                className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-2">Stream URL</label>
              <input
                type="url"
                defaultValue="https://stream.rmk.mg/live"
                className="w-full p-3 bg-dark-700 border border-gray-600 rounded-lg text-white focus:border-primary-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">General Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Maintenance Mode</span>
              <button className="w-12 h-6 bg-gray-600 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 transition-transform"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Auto-Play</span>
              <button className="w-12 h-6 bg-primary-500 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 right-0.5 transition-transform"></div>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300">Email Notifications</span>
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
    <div className="min-h-screen bg-dark-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-display gradient-text mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-300">
            Manage your radio station content, programs, and team members
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-dark-800 p-1 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-dark-700'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span>{tab.name}</span>
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
