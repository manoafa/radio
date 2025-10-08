'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Play, 
  Pause, 
  Radio, 
  Mic,
  ChevronLeft,
  ChevronRight,
  Grid3X3,
  Clock3
} from 'lucide-react';

interface Program {
  id: string;
  title: string;
  host: string;
  startTime: string;
  endTime: string;
  description: string;
  category: string;
  isLive: boolean;
  listeners: number;
  image?: string;
}

const ProgramsPage = () => {
  const [view, setView] = useState<'month' | 'week' | 'day'>('week');
  const [currentDate] = useState(new Date());
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Mock program data
  const programs: Program[] = [
    {
      id: '1',
      title: 'Morning Devotion',
      host: 'Pastor Jean',
      startTime: '06:00',
      endTime: '07:00',
      description: 'Start your day with prayer, worship, and God&apos;s Word. Join us for a time of spiritual reflection and encouragement.',
      category: 'Devotion',
      isLive: true,
      listeners: 1247
    },
    {
      id: '2',
      title: 'Women of Faith',
      host: 'Sister Marie',
      startTime: '10:00',
      endTime: '11:00',
      description: 'Encouraging and empowering women in their Christian journey. Topics include faith, family, and personal growth.',
      category: 'Women',
      isLive: false,
      listeners: 0
    },
    {
      id: '3',
      title: 'Youth Alive',
      host: 'Pastor David',
      startTime: '16:00',
      endTime: '17:00',
      description: 'Dynamic programs for young people seeking God. Contemporary music, relevant topics, and spiritual guidance.',
      category: 'Youth',
      isLive: false,
      listeners: 0
    },
    {
      id: '4',
      title: 'Evening Prayer',
      host: 'Pastor Paul',
      startTime: '19:00',
      endTime: '20:00',
      description: 'End your day in prayer and reflection. A time of peace and spiritual renewal.',
      category: 'Prayer',
      isLive: false,
      listeners: 0
    },
    {
      id: '5',
      title: 'Family Hour',
      host: 'Pastor Sarah',
      startTime: '20:00',
      endTime: '21:00',
      description: 'Building strong Christian families through God&apos;s Word. Practical advice and biblical wisdom.',
      category: 'Family',
      isLive: false,
      listeners: 0
    },
    {
      id: '6',
      title: 'Night Worship',
      host: 'Worship Team',
      startTime: '21:00',
      endTime: '22:00',
      description: 'End the day with praise and worship music. Uplifting songs and spiritual encouragement.',
      category: 'Worship',
      isLive: false,
      listeners: 0
    }
  ];

  const getCurrentProgram = () => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    return programs.find(program => {
      const [startHour, startMin] = program.startTime.split(':').map(Number);
      const [endHour, endMin] = program.endTime.split(':').map(Number);
      const startMinutes = startHour * 60 + startMin;
      const endMinutes = endHour * 60 + endMin;
      
      return currentTime >= startMinutes && currentTime <= endMinutes;
    });
  };

  const formatTime = (time: string) => {
    const [hours, minutes] = time.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getTimeSlots = () => {
    const slots = [];
    for (let hour = 0; hour < 24; hour++) {
      slots.push({
        time: `${hour.toString().padStart(2, '0')}:00`,
        display: formatTime(`${hour.toString().padStart(2, '0')}:00`)
      });
    }
    return slots;
  };

  // const timeSlots = getTimeSlots();

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
            Program Schedule
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our diverse range of Christian programs designed to inspire, 
            educate, and strengthen your faith.
          </p>
        </motion.div>

        {/* View Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0"
        >
          <div className="flex space-x-2">
            <button
              onClick={() => setView('month')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                view === 'month'
                  ? 'bg-primary-500 text-gray-950 dark:text-white'
                  : 'bg-navy-500/20 text-gray-300 hover:bg-navy-500/40'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span>Month</span>
            </button>
            <button
              onClick={() => setView('week')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                view === 'week'
                  ? 'bg-primary-500 text-gray-950 dark:text-white'
                  : 'bg-navy-500/20 text-gray-300 hover:bg-navy-500/40'
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
              <span>Week</span>
            </button>
            <button
              onClick={() => setView('day')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                view === 'day'
                  ? 'bg-primary-500 text-gray-950 dark:text-white'
                  : 'bg-navy-500/20 text-gray-300 hover:bg-navy-500/40'
              }`}
            >
              <Clock3 className="w-5 h-5" />
              <span>Day</span>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-950 dark:text-white">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-gray-950 dark:text-white font-semibold">
              {currentDate.toLocaleDateString('en-US', { 
                month: 'long', 
                year: 'numeric' 
              })}
            </span>
            <button className="p-2 text-gray-400 hover:text-gray-950 dark:text-white">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

        {/* Current Program */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-4">Now Playing</h2>
          {getCurrentProgram() ? (
            <div className="bg-gradient-to-r from-primary-500/20 to-navy-500/20 p-6 rounded-xl border border-primary-500/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-navy-500 rounded-lg flex items-center justify-center">
                    <Radio className="w-8 h-8 text-gray-950 dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-950 dark:text-white">
                      {getCurrentProgram()?.title}
                    </h3>
                    <p className="text-primary-400 font-semibold">
                      Host: {getCurrentProgram()?.host}
                    </p>
                    <p className="text-gray-300">
                      {formatTime(getCurrentProgram()?.startTime || '')} - {formatTime(getCurrentProgram()?.endTime || '')}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-400">Listeners</p>
                    <p className="text-xl font-bold text-primary-400">
                      {getCurrentProgram()?.listeners}
                    </p>
                  </div>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 bg-gradient-to-r from-primary-500 to-navy-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-gray-950 dark:text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-gray-950 dark:text-white ml-1" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-dark-800 p-6 rounded-xl border border-gray-700 text-center">
              <p className="text-gray-400">No program is currently airing</p>
            </div>
          )}
        </motion.div>

        {/* Program Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-dark-800 rounded-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-950 dark:text-white mb-6">Today&apos;s Schedule</h2>
          
          <div className="space-y-4">
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProgram(program)}
                className="bg-gradient-to-r from-navy-500/10 to-primary-500/10 p-4 rounded-lg border border-navy-500/20 hover:border-primary-500/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-navy-500 rounded-lg flex items-center justify-center">
                      <Mic className="w-6 h-6 text-gray-950 dark:text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-950 dark:text-white group-hover:text-primary-400 transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-gray-400">Host: {program.host}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-primary-400 font-semibold">
                      {formatTime(program.startTime)} - {formatTime(program.endTime)}
                    </p>
                    <p className="text-sm text-gray-400">{program.category}</p>
                    {program.isLive && (
                      <div className="flex items-center space-x-1 mt-1">
                        <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-primary-400">LIVE</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Program Details Modal */}
        <AnimatePresence>
          {selectedProgram && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedProgram(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-dark-800 rounded-xl p-6 max-w-md w-full border border-navy-500/30"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-navy-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Radio className="w-10 h-10 text-gray-950 dark:text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-2">
                    {selectedProgram.title}
                  </h3>
                  <p className="text-primary-400 font-semibold">
                    Host: {selectedProgram.host}
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Time:</span>
                    <span className="text-gray-950 dark:text-white">
                      {formatTime(selectedProgram.startTime)} - {formatTime(selectedProgram.endTime)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Category:</span>
                    <span className="text-gray-950 dark:text-white">{selectedProgram.category}</span>
                  </div>
                  {selectedProgram.isLive && (
                    <div className="flex justify-between">
                      <span className="text-gray-400">Listeners:</span>
                      <span className="text-primary-400 font-semibold">
                        {selectedProgram.listeners}
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {selectedProgram.description}
                </p>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex-1 py-3 bg-gradient-to-r from-primary-500 to-navy-500 text-gray-950 dark:text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5" />
                    ) : (
                      <Play className="w-5 h-5" />
                    )}
                    <span>{isPlaying ? 'Pause' : 'Play'}</span>
                  </button>
                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-all duration-300"
                  >
                    Close
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

export default ProgramsPage;
