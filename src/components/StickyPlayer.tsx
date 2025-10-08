'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Heart,
  Share2,
  Download
} from 'lucide-react';

const StickyPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [duration, setDuration] = useState('00:00');
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentShow] = useState({
    title: "Morning Devotion",
    host: "Pastor Jean",
    listeners: 1247
  });

  const audioRef = useRef<HTMLAudioElement>(null);

  // Mock live radio stream URL - replace with actual stream
  const streamUrl = "https://stream.example.com/radio"; // Replace with actual stream

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseInt(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-0 left-0 right-0 border-cyan-600/30 backdrop-blur-md border-t border-navy-500/20"
      >
        {/* Hidden audio element */}
        <audio
          ref={audioRef}
          src={streamUrl}
          preload="none"
          onTimeUpdate={() => {
            if (audioRef.current) {
              const minutes = Math.floor(audioRef.current.currentTime / 60);
              const seconds = Math.floor(audioRef.current.currentTime % 60);
              setCurrentTime(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
            }
          }}
          onLoadedMetadata={() => {
            if (audioRef.current) {
              const minutes = Math.floor(audioRef.current.duration / 60);
              const seconds = Math.floor(audioRef.current.duration % 60);
              setDuration(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
            }
          }}
        />

        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            {/* Station Info */}
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="w-40 h-20 bg-gradient-to-br from-primary-500 to-navy-500 rounded-lg flex items-center justify-center shadow-lg p-2">
                  <Image
                    src="/RMK.png"
                    alt="102.4 FM RMK Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                {isPlaying && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                )}
              </motion.div>
              
              <div className="hidden sm:block">
                <h3 className="font-bold text-gray-950 dark:text-white">102.4 Mhz</h3>
                <p className="text-sm text-gray-400">
                  {isPlaying ? `Now Playing: ${currentShow.title}` : 'RMK'}
                </p>
                {isPlaying && (
                  <p className="text-xs text-primary-400">
                    Host: {currentShow.host} • {currentShow.listeners} listeners
                  </p>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-6">
              {/* Play/Pause Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={togglePlayPause}
                className="w-16 h-16 bg-gradient-to-r from-primary-500 to-navy-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-gray-950 dark:text-white" />
                ) : (
                  <Play className="w-8 h-8 text-gray-950 dark:text-white ml-1" />
                )}
              </motion.button>

              {/* Volume Control */}
              <div className="hidden md:flex items-center space-x-2">
                <button onClick={toggleMute} className="text-gray-400 hover:text-gray-950 dark:hover:text-white">
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="p-3 text-gray-400 hover:text-primary-500 transition-colors"
                >
                  <Heart className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="p-3 text-gray-400 hover:text-primary-500 transition-colors"
                >
                  <Share2 className="w-6 h-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-3 text-gray-400 hover:text-primary-500 transition-colors"
                >
                  <Maximize2 className="w-6 h-6" />
                </motion.button>
              </div>
            </div>
          </div>

          {/* Expanded Player */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-6 pt-6 border-t border-navy-500/20 px-4"
              >
                <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-navy-500 rounded-lg flex items-center justify-center p-2">
                    <Image
                      src="/RMK.png"
                      alt="102.4 FM RMK Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                    <div>
                      <h4 className="font-bold text-gray-950 dark:text-white">{currentShow.title}</h4>
                      <p className="text-sm text-gray-400">Host: {currentShow.host}</p>
                      <p className="text-xs text-primary-400">{currentShow.listeners} listeners online</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <p className="text-sm text-gray-400">Time</p>
                      <p className="text-gray-950 dark:text-white font-mono">{currentTime}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="text-gray-950 dark:text-white font-mono">{duration}</p>
                    </div>
                    <button className="px-4 py-2 bg-navy-500 text-gray-950 dark:text-white rounded-lg hover:bg-navy-600 transition-colors">
                      <Download className="w-4 h-4 inline mr-2" />
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Spacer to prevent content from being hidden behind sticky player */}
      <div className="h-20"></div>
    </>
  );
};

export default StickyPlayer;
