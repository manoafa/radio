'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Award,
  Heart,
  Radio,
  Mic,
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
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = ['all', 'leadership', 'programming', 'technical', 'music', 'ministry'];

  const teamMembers: TeamMember[] = [
    {
      id: '1',
      name: 'Pastor Jean Rakotoarimanana',
      role: 'Station Director',
      department: 'leadership',
      bio: 'Pastor Jean has been serving in ministry for over 20 years. He founded Radio Madagasikara ho an\'i Kristy with a vision to reach every corner of Madagascar with the Gospel. His passion for evangelism and discipleship drives the station\'s mission.',
      email: 'jean@rmk.mg',
      phone: '+261 34 12 345 67',
      experience: '20+ years',
      specialties: ['Leadership', 'Evangelism', 'Discipleship', 'Vision Casting'],
      social: {
        facebook: 'pastor.jean.rmk',
        twitter: '@pastorjeanrmk'
      }
    },
    {
      id: '2',
      name: 'Sister Marie Andriamalala',
      role: 'Program Coordinator',
      department: 'programming',
      bio: 'Sister Marie oversees all program content and ensures that every broadcast aligns with our Christian values. She has a gift for creating engaging content that speaks to people\'s hearts.',
      email: 'marie@rmk.mg',
      phone: '+261 34 12 345 68',
      experience: '15 years',
      specialties: ['Content Creation', 'Program Planning', 'Women\'s Ministry', 'Community Outreach'],
      social: {
        facebook: 'marie.andriamalala',
        instagram: '@marie_rmk'
      }
    },
    {
      id: '3',
      name: 'Pastor David Randrianarivelo',
      role: 'Youth Minister',
      department: 'ministry',
      bio: 'Pastor David has a heart for young people and leads our youth programs. His dynamic preaching style and contemporary approach help connect with the next generation of believers.',
      email: 'david@rmk.mg',
      phone: '+261 34 12 345 69',
      experience: '12 years',
      specialties: ['Youth Ministry', 'Contemporary Worship', 'Social Media', 'Event Planning'],
      social: {
        facebook: 'david.randrianarivelo',
        twitter: '@davidrmk',
        instagram: '@david_rmk'
      }
    },
    {
      id: '4',
      name: 'Pastor Sarah Rasoanaivo',
      role: 'Family Counselor',
      department: 'ministry',
      bio: 'Pastor Sarah specializes in family ministry and counseling. She hosts our family programs and provides biblical guidance for building strong Christian families.',
      email: 'sarah@rmk.mg',
      phone: '+261 34 12 345 70',
      experience: '18 years',
      specialties: ['Family Counseling', 'Marriage Ministry', 'Children\'s Programs', 'Biblical Counseling'],
      social: {
        facebook: 'sarah.rasoanaivo'
      }
    },
    {
      id: '5',
      name: 'Brother Paul Rakotondrabe',
      role: 'Technical Director',
      department: 'technical',
      bio: 'Brother Paul ensures our technical operations run smoothly. He manages our broadcasting equipment and keeps us connected to listeners across Madagascar.',
      email: 'paul@rmk.mg',
      phone: '+261 34 12 345 71',
      experience: '10 years',
      specialties: ['Broadcasting Technology', 'Equipment Maintenance', 'Signal Management', 'IT Support'],
      social: {
        facebook: 'paul.rakotondrabe'
      }
    },
    {
      id: '6',
      name: 'Sister Esther Ravelojaona',
      role: 'Music Director',
      department: 'music',
      bio: 'Sister Esther leads our worship team and music programs. Her beautiful voice and musical talent help create an atmosphere of worship and praise.',
      email: 'esther@rmk.mg',
      phone: '+261 34 12 345 72',
      experience: '8 years',
      specialties: ['Worship Leading', 'Music Production', 'Choir Direction', 'Song Writing'],
      social: {
        facebook: 'esther.ravelojaona',
        instagram: '@esther_rmk'
      }
    },
    {
      id: '7',
      name: 'Brother Thomas Andriamanjato',
      role: 'Prayer Coordinator',
      department: 'ministry',
      bio: 'Brother Thomas leads our prayer ministry and intercessory programs. He believes in the power of prayer and helps coordinate prayer requests from listeners.',
      email: 'thomas@rmk.mg',
      phone: '+261 34 12 345 73',
      experience: '14 years',
      specialties: ['Prayer Ministry', 'Intercession', 'Spiritual Warfare', 'Discipleship'],
      social: {
        facebook: 'thomas.andriamanjato'
      }
    },
    {
      id: '8',
      name: 'Sister Grace Ranaivo',
      role: 'Community Outreach Coordinator',
      department: 'programming',
      bio: 'Sister Grace coordinates our community outreach programs and partnerships with local churches. She helps us stay connected with our listeners and their needs.',
      email: 'grace@rmk.mg',
      phone: '+261 34 12 345 74',
      experience: '6 years',
      specialties: ['Community Outreach', 'Church Partnerships', 'Event Coordination', 'Volunteer Management'],
      social: {
        facebook: 'grace.ranaivo',
        instagram: '@grace_rmk'
      }
    }
  ];

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
    <div className="min-h-screen bg-dark-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-display gradient-text mb-4">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dedicated servants of God working together to spread His message 
            across Madagascar. Each team member brings unique gifts and talents 
            to serve our community.
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
                  ? 'bg-primary-500 text-white'
                  : 'bg-navy-500/20 text-gray-300 hover:bg-navy-500/40'
              }`}
            >
              {getDepartmentIcon(dept)}
              <span className="capitalize">
                {dept === 'all' ? 'All Departments' : dept}
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
              className="bg-gradient-to-br from-navy-500/10 to-primary-500/10 p-6 rounded-xl border border-navy-500/20 hover:border-primary-500/40 transition-all duration-300 cursor-pointer group"
            >
              <div className="text-center mb-4">
                <div className={`w-24 h-24 bg-gradient-to-br ${getDepartmentColor(member.department)} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-400 font-semibold mb-2">{member.role}</p>
                <div className="flex items-center justify-center space-x-1 text-sm text-gray-400">
                  {getDepartmentIcon(member.department)}
                  <span className="capitalize">{member.department}</span>
                </div>
              </div>

              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-primary-400" />
                  <span>{member.experience} experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-primary-400" />
                  <span>{member.specialties.length} specialties</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-700">
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
                className="bg-dark-800 rounded-xl p-8 max-w-2xl w-full border border-navy-500/30 max-h-[90vh] overflow-y-auto"
              >
                <div className="text-center mb-6">
                  <div className={`w-32 h-32 bg-gradient-to-br ${getDepartmentColor(selectedMember.department)} rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedMember.name}
                  </h3>
                  <p className="text-primary-400 font-semibold text-lg mb-1">
                    {selectedMember.role}
                  </p>
                  <div className="flex items-center justify-center space-x-1 text-gray-400">
                    {getDepartmentIcon(selectedMember.department)}
                    <span className="capitalize">{selectedMember.department}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">About</h4>
                    <p className="text-gray-300 leading-relaxed">
                      {selectedMember.bio}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Contact Information</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-gray-300">
                          <Mail className="w-4 h-4 text-primary-400" />
                          <span>{selectedMember.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-300">
                          <Phone className="w-4 h-4 text-primary-400" />
                          <span>{selectedMember.phone}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Experience</h4>
                      <div className="flex items-center space-x-2 text-gray-300">
                        <Calendar className="w-4 h-4 text-primary-400" />
                        <span>{selectedMember.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white mb-3">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-navy-500/20 text-navy-300 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedMember.social && (
                    <div>
                      <h4 className="text-lg font-bold text-white mb-3">Social Media</h4>
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

                <div className="mt-8 pt-6 border-t border-gray-700">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="w-full py-3 bg-gradient-to-r from-primary-500 to-navy-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
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

export default TeamPage;
