import type { LucideIcon } from 'lucide-react';
import { Radio, Home, Calendar, Headphones, Users, Heart } from 'lucide-react';
import type { Language } from '@/app/context/LanguageContext';

export const LANG_OPTIONS: { code: Language; flag: string; name: string }[] = [
  { code: 'en', flag: '/US.png', name: 'English' },
  { code: 'fr', flag: '/FR.png', name: 'Français' },
  { code: 'mg', flag: '/MG.png', name: 'Malagasy' },
];

export const DESKTOP_NAV: { nameKey: string; href: string; icon: LucideIcon }[] = [
  { nameKey: 'nav.about', href: '/about', icon: Radio },
  { nameKey: 'nav.programs', href: '/programs', icon: Calendar },
  { nameKey: 'nav.podcasts', href: '/podcasts', icon: Headphones },
  { nameKey: 'nav.team', href: '/team', icon: Users },
  { nameKey: 'nav.donate', href: '/donate', icon: Heart },
];

export const MOBILE_NAV: { nameKey: string; href: string; icon: LucideIcon }[] = [
  { nameKey: 'nav.home', href: '/', icon: Home },
  ...DESKTOP_NAV,
];

export const CONTACT_HREF = '/contact';
