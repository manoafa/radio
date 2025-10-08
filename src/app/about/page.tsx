'use client';

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
  Lightbulb
} from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: 'Love',
      description: 'We demonstrate God\'s love through our programs and community outreach, showing compassion to all people regardless of their background or circumstances.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our operations, ensuring that our content reflects biblical truth and Christian values.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from program quality to technical operations, always giving our best to serve God and our community.'
    },
    {
      icon: Users,
      title: 'Unity',
      description: 'We promote unity within the body of Christ, bringing together believers from different denominations and backgrounds in worship and fellowship.'
    },
    {
      icon: BookOpen,
      title: 'Service',
      description: 'We are committed to serving our community through practical ministry, supporting local churches, and meeting the spiritual needs of our listeners.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies and creative approaches to reach more people with the Gospel while maintaining our core Christian values.'
    }
  ];

  const milestones = [
    {
      year: '2010',
      title: 'Foundation',
      description: 'Radio Madagasikara ho an\'i Kristy was founded with a vision to reach every corner of Madagascar with the Gospel.'
    },
    {
      year: '2012',
      title: 'First Broadcast',
      description: 'Our first live broadcast reached listeners in Antananarivo and surrounding areas, marking the beginning of our ministry.'
    },
    {
      year: '2015',
      title: 'Expansion',
      description: 'We expanded our reach to cover major cities across Madagascar, increasing our listener base significantly.'
    },
    {
      year: '2018',
      title: 'Digital Platform',
      description: 'Launched our online streaming platform, allowing listeners worldwide to tune in to our programs.'
    },
    {
      year: '2020',
      title: 'Community Impact',
      description: 'During the pandemic, we provided spiritual support and practical help to thousands of families across Madagascar.'
    },
    {
      year: '2024',
      title: 'Modern Technology',
      description: 'Upgraded to state-of-the-art broadcasting equipment and launched our comprehensive website and mobile app.'
    }
  ];

  const leadership = [
    {
      name: 'Pastor Jean Rakotoarimanana',
      role: 'Founder & Station Director',
      bio: 'Pastor Jean founded RMK with a vision to transform Madagascar through the power of radio ministry. With over 20 years of pastoral experience, he leads our team with wisdom and compassion.',
      image: '/images/pastor-jean.jpg'
    },
    {
      name: 'Sister Marie Andriamalala',
      role: 'Program Director',
      bio: 'Sister Marie oversees all program content and ensures that every broadcast aligns with our Christian values. Her creative vision has shaped our most popular programs.',
      image: '/images/sister-marie.jpg'
    },
    {
      name: 'Pastor David Randrianarivelo',
      role: 'Youth Ministry Director',
      bio: 'Pastor David leads our youth programs and contemporary worship initiatives. His dynamic approach helps connect young people with God\'s love.',
      image: '/images/pastor-david.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 animated-bg"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-display gradient-text mb-6">
              About RMK
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Radio Madagasikara ho an&apos;i Kristy (RMK) is more than just a radio station. 
              We are a ministry dedicated to spreading the Gospel, strengthening believers, 
              and transforming communities across Madagascar through the power of Christian broadcasting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-dark-800">
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
              <h2 className="text-3xl font-bold text-gray-950 dark:text-white mb-4">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To proclaim the Gospel of Jesus Christ through radio broadcasting, providing 
                spiritual nourishment, encouragement, and hope to all people across Madagascar. 
                We are committed to building up the body of Christ and reaching the lost with 
                the message of salvation.
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
              <h2 className="text-3xl font-bold text-gray-950 dark:text-white mb-4">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To be the leading Christian radio station in Madagascar, transforming lives 
                through the power of God&apos;s Word and building a strong, united Christian 
                community. We envision a Madagascar where every person has access to 
                biblical truth and spiritual encouragement.
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
              <h2 className="text-3xl font-bold text-gray-950 dark:text-white mb-4">Our Values</h2>
              <p className="text-gray-300 leading-relaxed">
                Faith, Integrity, Excellence, Love, Unity, and Service. We are committed 
                to broadcasting content that glorifies God and edifies His people. Every 
                program, every song, and every word spoken reflects our dedication to 
                biblical truth and Christian values.
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
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-dark-700 p-6 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300"
                >
                  <value.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-950 dark:text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-display gradient-text mb-6">
              Our Story
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From humble beginnings to becoming Madagascar&apos;s premier Christian radio station, 
              discover the journey that has shaped our ministry.
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
                      <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-2">{milestone.title}</h3>
                      <p className="text-primary-400 font-semibold text-lg mb-3">{milestone.year}</p>
                      <p className="text-gray-300">{milestone.description}</p>
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
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-display gradient-text mb-6">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the dedicated leaders who guide our ministry and ensure that every 
              broadcast reflects our commitment to spreading God&apos;s love.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-navy-500/10 to-primary-500/10 p-8 rounded-xl border border-navy-500/20 hover:border-primary-500/40 transition-all duration-300 text-center"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-navy-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-950 dark:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-2">{leader.name}</h3>
                <p className="text-primary-400 font-semibold text-lg mb-4">{leader.role}</p>
                <p className="text-gray-300 leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-display gradient-text mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Through God&apos;s grace, we have been able to touch countless lives across Madagascar 
              and beyond. Here are some of the ways we&apos;re making a difference.
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
              <p className="text-gray-300">Daily Listeners</p>
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
              <p className="text-gray-300">Regions Covered</p>
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
              <p className="text-gray-300">Broadcasting</p>
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
              <p className="text-gray-300">Years of Service</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-navy-500 to-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold font-display text-gray-950 dark:text-white">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-950 dark:text-white/90 max-w-3xl mx-auto">
              Be part of our journey as we continue to spread the Gospel and transform 
              lives across Madagascar. Your support helps us reach more people with 
              the message of hope and salvation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-white text-navy-500 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2">
                <Heart className="w-6 h-6" />
                <span>Support Our Ministry</span>
              </button>
              <button className="px-8 py-4 border-2 border-white text-gray-950 dark:text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-2">
                <Radio className="w-6 h-6" />
                <span>Listen Live</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
