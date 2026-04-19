import type { Language } from './types';
import { about } from './segments/about';
import { aboutRmkPage } from './segments/aboutRmkPage';
import { admin } from './segments/admin';
import { base } from './segments/base';
import { contact } from './segments/contact';
import { donate } from './segments/donate';
import { home } from './segments/home';
import { podcasts } from './segments/podcasts';
import { programsPage } from './segments/programsPage';
import { schedulePrograms } from './segments/schedulePrograms';
import { shows } from './segments/shows';
import { team } from './segments/team';

export type { Language } from './types';

function mergeLang(lang: Language): Record<string, string> {
  return {
    ...base[lang],
    ...shows[lang],
    ...schedulePrograms[lang],
    ...home[lang],
    ...about[lang],
    ...aboutRmkPage[lang],
    ...programsPage[lang],
    ...podcasts[lang],
    ...team[lang],
    ...donate[lang],
    ...contact[lang],
    ...admin[lang],
  };
}

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: mergeLang('en'),
  fr: mergeLang('fr'),
  mg: mergeLang('mg'),
};
