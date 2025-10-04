'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { 
  Radio, 
  Heart, 
  Users, 
  Target, 
  Eye, 
  Star, 
  Play, 
  Calendar,
  Headphones,
  Globe,
  Clock,
  Mic
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden" 
        style={{ marginLeft: '-50px', marginRight: '-50px' }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 animated-bg"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => {
            // Use a seeded random function for consistent positioning
            const seededRandom = (seed: number) => {
              const x = Math.sin(seed) * 10000;
              return x - Math.floor(x);
            };
            
            const left = seededRandom(i * 0.1) * 100;
            const top = seededRandom(i * 0.1 + 100) * 100;
            const duration = 3 + seededRandom(i * 0.1 + 200) * 2;
            const delay = seededRandom(i * 0.1 + 300) * 2;
            
            return (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-500/20 rounded-full"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: duration,
                  repeat: Infinity,
                  delay: delay,
                }}
              />
            );
          })}
        </div>

        <div className="relative z-10 w-full h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8 max-w-4xl mx-auto px-8"
          >
            {/* Logo */}
            <motion.div
              className="w-40 h-40 bg-gradient-to-br from-primary-500 to-navy-500 rounded-full glow-orange p-4"
              animate={{
                x: [0, 100, -80, 60, -40, 0],
                y: [0, -50, 30, -20, 40, 0],
                rotate: [0, 180, 360, 180, 0],
                scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.2, 0.4, 0.6, 0.8, 1]
              }}
            >
              <Image
                src="/RMK.png"
                alt="102.4 FM RMK Logo"
                width={120}
                height={120}
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>

            {/* Main Title */}
            <div>
              <h1 className="text-6xl md:text-8xl font-bold font-display gradient-text">
                The radio that unites us
              </h1><br/>
              <h2 className="text-2xl md:text-4xl font-semibold text-white">
                RMK 102.4 FM
              </h2><br/>
              <p className="text-xl md:text-2xl text-gray-300">
                Broadcasting faith, hope, and love across Madagascar.<br/> 
                Join us in spreading the Gospel through inspiring programs, 
                uplifting music, and spiritual content.
              </p>
            </div><br/>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-navy-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <Play className="w-12 h-12" />
                <span>Listen Live</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                  className="px-8 py-6 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-5"
              >
                <Calendar className="w-10 h-10" />
                <span>View Programs</span>
              </motion.button>
            </div><br/>

            {/* Live Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center space-x-2 text-primary-400"
            >
              <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">LIVE NOW: Morning Devotion with Pastor Jean</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-dark-800">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-6">
              About Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Radio Madagasikara ho an'i Kristy (RMK) is a Christian radio station 
              dedicated to spreading the Gospel and strengthening the faith of 
              believers across Madagascar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-500/20 to-primary-500/20 p-8 rounded-2xl border border-navy-500/30 hover:border-primary-500/50 transition-all duration-300"
            >
              <Target className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To proclaim the Gospel of Jesus Christ through radio broadcasting, 
                providing spiritual nourishment, encouragement, and hope to all 
                people across Madagascar.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-500/20 to-navy-500/20 p-8 rounded-2xl border border-primary-500/30 hover:border-navy-500/50 transition-all duration-300"
            >
              <Eye className="w-12 h-12 text-navy-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the leading Christian radio station in Madagascar, 
                transforming lives through the power of God's Word and 
                building a strong, united Christian community.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-navy-500/20 to-primary-500/20 p-8 rounded-2xl border border-navy-500/30 hover:border-primary-500/50 transition-all duration-300"
            >
              <Heart className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-gray-300">
                Faith, Integrity, Excellence, Love, Unity, and Service. 
                We are committed to broadcasting content that glorifies God 
                and edifies His people.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-20 bg-dark-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our diverse range of Christian programs designed to 
              inspire, educate, and strengthen your faith.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Morning Devotion",
                time: "6:00 AM - 7:00 AM",
                host: "Pastor Jean",
                description: "Start your day with prayer, worship, and God's Word."
              },
              {
                title: "Women of Faith",
                time: "10:00 AM - 11:00 AM",
                host: "Sister Marie",
                description: "Encouraging and empowering women in their Christian journey."
              },
              {
                title: "Youth Alive",
                time: "4:00 PM - 5:00 PM",
                host: "Pastor David",
                description: "Dynamic programs for young people seeking God."
              },
              {
                title: "Evening Prayer",
                time: "7:00 PM - 8:00 PM",
                host: "Pastor Paul",
                description: "End your day in prayer and reflection."
              },
              {
                title: "Family Hour",
                time: "8:00 PM - 9:00 PM",
                host: "Pastor Sarah",
                description: "Building strong Christian families through God's Word."
              },
              {
                title: "Night Worship",
                time: "9:00 PM - 10:00 PM",
                host: "Worship Team",
                description: "End the day with praise and worship music."
              }
            ].map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-navy-500/10 to-primary-500/10 p-6 rounded-xl border border-navy-500/20 hover:border-primary-500/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                    {program.title}
                  </h3>
                  <Clock className="w-5 h-5 text-gray-400" />
                </div>
                <p className="text-primary-400 font-semibold mb-2">{program.time}</p>
                <p className="text-gray-400 mb-4">Host: {program.host}</p>
                <p className="text-gray-300 text-sm">{program.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-navy-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              <Calendar className="w-6 h-6" />
              <span>View Full Schedule</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Podcast Section */}
      <section className="py-20 bg-dark-800">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-6">
              Latest Podcasts
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Listen to our latest sermons, teachings, and inspirational content 
              anytime, anywhere.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "The Power of Prayer",
                speaker: "Pastor Jean",
                duration: "45 min",
                date: "Yesterday"
              },
              {
                title: "Walking in Faith",
                speaker: "Sister Marie",
                duration: "38 min",
                date: "2 days ago"
              },
              {
                title: "God's Love for You",
                speaker: "Pastor David",
                duration: "52 min",
                date: "3 days ago"
              }
            ].map((podcast, index) => (
              <motion.div
                key={podcast.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-navy-500/10 to-primary-500/10 p-6 rounded-xl border border-navy-500/20 hover:border-primary-500/40 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-navy-500 rounded-lg flex items-center justify-center">
                    <Headphones className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {podcast.title}
                    </h3>
                    <p className="text-gray-400">by {podcast.speaker}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{podcast.duration}</span>
                  <span>{podcast.date}</span>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-primary-500 to-navy-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Play Now</span>
                </button>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/podcasts"
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            >
              <Headphones className="w-6 h-6" />
              <span>Browse All Podcasts</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark-900">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Dedicated servants of God working together to spread His message 
              across Madagascar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Pastor Jean",
                role: "Station Director",
                description: "Leading the station with vision and faith."
              },
              {
                name: "Sister Marie",
                role: "Program Coordinator",
                description: "Ensuring quality Christian content."
              },
              {
                name: "Pastor David",
                role: "Youth Minister",
                description: "Connecting with young believers."
              },
              {
                name: "Pastor Sarah",
                role: "Family Counselor",
                description: "Strengthening Christian families."
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-navy-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-primary-400 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/team"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-navy-500 to-primary-500 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
            >
              <Users className="w-6 h-6" />
              <span>Meet Full Team</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-navy-500 to-primary-500">
        <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display text-white">
              Join Our Mission
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Support our ministry and help us reach more people with the Gospel. 
              Your donations help us maintain our equipment and expand our reach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/donate"
                className="px-8 py-4 bg-white text-navy-500 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2"
              >
                <Heart className="w-6 h-6" />
                <span>Donate Now</span>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
              >
                <Globe className="w-6 h-6" />
                <span>Contact Us</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
