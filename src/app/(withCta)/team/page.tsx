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

type LocalizedText = {
  mg: string;
  fr: string;
  en: string;
};

interface ExcelTeamMember {
  id: string;
  name: string;
  department: TeamMember['department'];
  role: LocalizedText;
  bio: LocalizedText;
  experience: LocalizedText;
  phone: string;
}

const TeamPage = () => {
  const { t, language } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = ['all', 'leadership', 'programming', 'technical', 'music', 'ministry'] as const;

  const excelTeamMembers = useMemo<ExcelTeamMember[]>(
    () => [
      {
        id: 'MF001',
        name: 'Nirina RAKOTOMALALA',
        department: 'programming',
        role: { mg: "AFON'NY FANAHY", fr: "Feu de l'Esprit", en: 'Fire of the Spirit' },
        bio: {
          mg: "Ho an'izay maniry hiaina bebe kokoa amin'ny herin'ny Fanahy Masina sy hampirehitra ny finoany.",
          fr: "Pour ceux qui désirent vivre davantage dans la puissance du Saint-Esprit et raviver leur foi.",
          en: "For those hungry to live in the power of the Holy Spirit and rekindle their faith.",
        },
        experience: { mg: '25 taona', fr: '25 ans', en: '25 years' },
        phone: '+261 34 864 62 46',
      },
      {
        id: 'MF003',
        name: 'Eddy RABESOELINA',
        department: 'programming',
        role: { mg: 'AGAPE VOICE', fr: "Voix d'Agapé", en: 'Agape Voice' },
        bio: {
          mg: "Mampahatsiahy ny fitiavan'Andriamanitra sy mampianatra ny hiaina izany isan'andro.",
          fr: "Une émission centrée sur l'amour de Dieu pour apprendre à vivre cet amour au quotidien.",
          en: "A program centered on God's love and how to live it daily.",
        },
        experience: { mg: '25 taona', fr: '25 ans', en: '25 years' },
        phone: '340767176',
      },
      {
        id: 'MF004',
        name: 'RAHARIMANANA Lydia',
        department: 'programming',
        role: { mg: 'AMBOARAN-TONONKALO RMK', fr: 'Plateforme Poétique RMK', en: 'RMK Poetry Platform' },
        bio: {
          mg: "Sehatra hanehoana finoana sy fiainana amin'ny alalan'ny tononkalo.",
          fr: 'Un espace où la foi rencontre la créativité à travers la poésie.',
          en: 'A place where faith meets creativity through poetry.',
        },
        experience: { mg: '10 taona', fr: '10 ans', en: '10 years' },
        phone: '343273183',
      },
      {
        id: 'MF006',
        name: 'FIDY BARINIAINA',
        department: 'ministry',
        role: { mg: 'ANTSOM-PAMONJENA', fr: 'Appel au Salut', en: 'Call to Salvation' },
        bio: {
          mg: "Antso ho amin'ny famonjena sy fahafantarana an'i Jesosy.",
          fr: 'Une invitation claire à connaître Jésus.',
          en: 'A clear invitation to know Jesus.',
        },
        experience: { mg: '20 taona', fr: '20 ans', en: '20 years' },
        phone: '+261 34 49 642 01',
      },
      {
        id: 'MF007',
        name: 'Vonjy Lovasoa RAMILIARIMANANA',
        department: 'ministry',
        role: { mg: "ATAOVY MPIANATRA NY FIRENENA", fr: 'Faites des Nations des Disciples', en: 'Make Disciples of All Nations' },
        bio: {
          mg: "Ho an'izay te hitombo sy hizara ny finoany amin'ny hafa.",
          fr: 'Grandir et impacter les autres dans la foi.',
          en: 'Helping people grow and share their faith.',
        },
        experience: { mg: '40 taona', fr: '40 ans', en: '40 years' },
        phone: '+261 33 03 074 83 | +261 34 20 158 40 | +261 32 41 241 13',
      },
      {
        id: 'MF008',
        name: 'Georges ANDRIATOKINIAINA',
        department: 'ministry',
        role: { mg: 'BAIBOLY AINA', fr: 'Vivre la Bible', en: 'Bible for Life' },
        bio: {
          mg: "Mampifandray ny Tenin'Andriamanitra amin'ny fiainana sy manolotra vavaka.",
          fr: "Vivre la Parole de Dieu au quotidien avec soutien de prière.",
          en: "Bringing God's Word into daily life with prayer support.",
        },
        experience: { mg: '30 taona', fr: '30 ans', en: '30 years' },
        phone: '345175092',
      },
      {
        id: 'MF011',
        name: 'Johny RAKOTOARISON',
        department: 'programming',
        role: { mg: 'FANILO SY FANAZAVANA', fr: 'Lampe et Lumière', en: 'Lamp and Light' },
        bio: {
          mg: 'Fampaherezana fohy sy mazava.',
          fr: "De courts messages d'encouragement.",
          en: 'Short and clear encouragement messages.',
        },
        experience: { mg: '25 taona', fr: '25 ans', en: '25 years' },
        phone: '340933966',
      },
      {
        id: 'MF012',
        name: 'André RAZANATSIFERANA',
        department: 'ministry',
        role: { mg: "FEON'NY FANASITRANANA", fr: 'Voix de Guérison', en: 'Voice of Healing' },
        bio: {
          mg: "Ho an'izay mitady fanasitranana sy fanarenana.",
          fr: 'Un espace de guérison et de restauration.',
          en: 'A space for healing and restoration.',
        },
        experience: { mg: '30 taona', fr: '30 ans', en: '30 years' },
        phone: '331185858',
      },
      {
        id: 'MF013',
        name: 'Armandi Bithou KASOJA',
        department: 'ministry',
        role: { mg: 'FINOANA SY FAHALALANA', fr: 'Foi et Connaissance', en: 'Faith and Knowledge' },
        bio: {
          mg: 'Finoana sy fahalalana miara-mitombo.',
          fr: 'Grandir dans la foi et la connaissance.',
          en: 'Growing in both faith and knowledge.',
        },
        experience: { mg: '25 taona', fr: '25 ans', en: '25 years' },
        phone: '340193372',
      },
      {
        id: 'MF015',
        name: 'SALOMON',
        department: 'ministry',
        role: { mg: 'FITSAHARANA', fr: 'Repos', en: 'Rest' },
        bio: {
          mg: "Fotoana hitsaharana sy hahazoana fiadanana amin'Andriamanitra.",
          fr: 'Un moment de repos et de paix en Dieu.',
          en: 'A moment of rest and peace in God.',
        },
        experience: { mg: '30 taona', fr: '30 ans', en: '30 years' },
        phone: '+261 34 49 642 01',
      },
      {
        id: 'MF018',
        name: 'Zoky Aina & Idealy',
        department: 'music',
        role: { mg: 'ILAY TALENTAKO 13H35', fr: 'Mon Talent', en: 'My Talent' },
        bio: {
          mg: "Sehatra ho an'ny tanora sy ankizy haneho sy hampivelatra ny talentany.",
          fr: 'Un espace pour les jeunes et les enfants afin de développer leurs talents.',
          en: 'A space for youth and children to grow their talents.',
        },
        experience: { mg: '21 taona', fr: '21 ans', en: '21 years' },
        phone: '346327663',
      },
      {
        id: 'MF020',
        name: 'Voahirana Emma RAOELINA',
        department: 'ministry',
        role: { mg: 'JESOSY VATOLAMPY FAMONJENA', fr: 'Jésus, le Rocher du Salut', en: 'Jesus, the Rock of Salvation' },
        bio: {
          mg: "Jesosy no vatofehizoron'ny finoana sy famonjena.",
          fr: 'Jésus comme fondation solide de la vie.',
          en: 'Jesus as the firm foundation of life.',
        },
        experience: { mg: 'Traikefa amin’ny fanompoana', fr: 'Expérience en ministère', en: 'Ministry experience' },
        phone: '348539145',
      },
      {
        id: 'MF023',
        name: 'Lioka RANARISON Christophe',
        department: 'programming',
        role: { mg: 'MARAIM-BAOVAO', fr: 'Journal du Matin', en: 'Morning News' },
        bio: {
          mg: "Vaovao sy fanombohana tsara ny andro.",
          fr: 'Actualités et bon départ pour la journée.',
          en: 'News and a strong start for the day.',
        },
        experience: { mg: 'Traikefa amin’ny fanolorana vaovao', fr: 'Expérience en présentation', en: 'Broadcast presentation experience' },
        phone: '345829321',
      },
      {
        id: 'MF024',
        name: 'Aimée RASOARINIVONIRIANA Rabearisoa',
        department: 'ministry',
        role: { mg: 'MIARA-MISANDRATRA', fr: "S'élever Ensemble", en: 'Rising Together' },
        bio: {
          mg: "Fanohanana ireo sahirana sy ankizy mila fanampiana.",
          fr: 'Soutenir et élever les plus vulnérables.',
          en: 'Supporting and uplifting people in need.',
        },
        experience: { mg: '19 taona', fr: '19 ans', en: '19 years' },
        phone: '344643400',
      },
      {
        id: 'MF029',
        name: 'Jeannine Aimée RAKOTOARIMANANA',
        department: 'ministry',
        role: { mg: "RAPSODIAN'NY FAHAMARINANA", fr: 'Rhapsodie de la Justice', en: 'Rhapsody of Righteousness' },
        bio: {
          mg: 'Miaina amin’ny fahamarinana sy finoana.',
          fr: 'Grandir dans la justice et la foi.',
          en: 'Growing in righteousness and faith.',
        },
        experience: { mg: '5 taona', fr: '5 ans', en: '5 years' },
        phone: '+261 34 49 642 01',
      },
      {
        id: 'MF035',
        name: 'Klarys RAMAROSON',
        department: 'ministry',
        role: { mg: 'TATM TOKAN-TRANO AHAZOANA TOKAN-TRANO MIADANA', fr: 'Construire un Foyer Paisible', en: 'Building a Peaceful Home' },
        bio: {
          mg: 'Fananganana tokantrano milamina sy matanjaka.',
          fr: 'Construire un foyer paisible et solide.',
          en: 'Building a strong and peaceful home.',
        },
        experience: { mg: '13 taona', fr: '13 ans', en: '13 years' },
        phone: '0345009211/0338261565',
      },
      {
        id: 'MF037',
        name: 'Mina Iarinivo RASETARISOA',
        department: 'ministry',
        role: { mg: 'VATSIN-DALANA', fr: 'Provision pour la Route', en: 'Provision for the Journey' },
        bio: {
          mg: "Matoky ny famatsian'Andriamanitra amin'ny fiainana.",
          fr: 'Faire confiance à la provision de Dieu.',
          en: "Trusting God's provision in life.",
        },
        experience: { mg: '2 taona', fr: '2 ans', en: '2 years' },
        phone: '344145529',
      },
      {
        id: 'MF038',
        name: 'Davida Henintsoa Daniel Rajaonimanana',
        department: 'ministry',
        role: { mg: "VAVAKA HO AN'NY FIRENENA", fr: 'Prière pour la Nation', en: 'Prayer for the Nation' },
        bio: {
          mg: "Vavaka ho an'ny firenena sy ny hoaviny.",
          fr: "Prière pour l'avenir de la nation.",
          en: "Prayer for the nation's future.",
        },
        experience: { mg: '23 taona', fr: '23 ans', en: '23 years' },
        phone: '034 03 317 90',
      },
      {
        id: 'MF039',
        name: 'Fara ANDRIANARIVO',
        department: 'ministry',
        role: { mg: "VEHIVAVIN'NY ANJARA VOATENDRY", fr: 'Femme de Destinée', en: 'Woman of Purpose' },
        bio: {
          mg: 'Vehivavy miaina amin’ny tanjona sy finoana.',
          fr: 'Femmes vivant avec foi et détermination.',
          en: 'Women growing in purpose and faith.',
        },
        experience: { mg: '20 taona', fr: '20 ans', en: '20 years' },
        phone: '+261 34 49 642 01',
      },
      {
        id: 'T001',
        name: 'RAHANITRINIAINA Sylvie Constance',
        department: 'programming',
        role: {
          mg: 'SOMBIN-TANTARA / SERASERA AN-TAROBIA / TALENTA ANATY /',
          fr: 'Chroniques / Échange Interactif / Talent Intérieur',
          en: 'Story Segments / Interactive Talk / Inner Talent',
        },
        bio: {
          mg: "Tantara, resaka ary talenta ho an'ny tanora sy ny ankizy.",
          fr: 'Mélange de témoignages, discussions et talents pour les jeunes.',
          en: 'A dynamic mix of stories, talks, and talents for young listeners.',
        },
        experience: { mg: '23 taona', fr: '23 ans', en: '23 years' },
        phone: '034 19 577 41',
      },
      {
        id: 'T004',
        name: 'RAFANOMEZANTSOA Tahiry',
        department: 'programming',
        role: { mg: 'SERASERA AN-TAROBY RMK', fr: 'Échange Interactif RMK', en: 'RMK Interactive Talk' },
        bio: {
          mg: "Mampifandray ny mpihaino amin'ny resadresaka mivantana.",
          fr: "Relie les auditeurs à travers des échanges interactifs.",
          en: 'Connects listeners through interactive discussions.',
        },
        experience: { mg: '13 taona', fr: '13 ans', en: '13 years' },
        phone: '380873433',
      },
    ],
    [],
  );

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
      ...excelTeamMembers.map((member) => ({
        id: member.id,
        name: member.name,
        role: member.role[language],
        department: member.department,
        bio: member.bio[language],
        email: 'contact@rmk.mg',
        phone: member.phone || '+261 34 49 642 01',
        experience: member.experience[language],
        specialties: [t('team.excel.specialty1'), t('team.excel.specialty2')],
      })),
    ],
    [excelTeamMembers, language, t],
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
