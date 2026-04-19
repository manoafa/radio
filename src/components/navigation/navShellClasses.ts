export function getNavShellClasses(isHomeOverHero: boolean, scrolled: boolean) {
  const navBar =
    isHomeOverHero
      ? 'bg-black/55 backdrop-blur-md border-b border-white/15 shadow-lg'
      : scrolled
        ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-lg shadow-2xl border-b border-gray-200 dark:border-navy-500/30'
        : 'bg-transparent border-b border-cyan-600/30';

  const flagBtn = (active: boolean) =>
    `rounded-md p-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
      active
        ? isHomeOverHero
          ? 'bg-white/20 ring-1 ring-white/60'
          : 'bg-primary-500/15 ring-1 ring-primary-500/50 dark:bg-primary-500/25'
        : isHomeOverHero
          ? 'opacity-75 hover:opacity-100 hover:bg-white/10'
          : 'opacity-70 hover:opacity-100 hover:bg-gray-200/80 dark:hover:bg-navy-500/30'
    }`;

  const themeBtn = `flex items-center justify-center rounded-md p-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
    isHomeOverHero
      ? 'text-white hover:bg-white/15'
      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200/90 dark:hover:bg-navy-500/40'
  }`;

  return {
    navBar,
    flagBtn,
    themeBtn,
    desktopLink: isHomeOverHero
      ? 'text-white hover:text-primary-300 drop-shadow-sm'
      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white',
    desktopIcon: isHomeOverHero ? 'text-white group-hover:text-primary-300' : 'group-hover:text-primary-500',
    mobileLink: isHomeOverHero
      ? 'text-white hover:text-primary-300'
      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white',
    mobileIcon: isHomeOverHero ? 'text-white group-hover:text-primary-300' : 'group-hover:text-primary-500',
    burger: isHomeOverHero
      ? 'text-white hover:bg-white/15'
      : 'text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-navy-500/40',
    drawer: isHomeOverHero ? 'bg-black/85 border-white/15' : 'border-gray-300 dark:border-navy-500/20',
    phoneCta: isHomeOverHero
      ? 'bg-white/10 text-white ring-2 ring-white/30 hover:bg-white/15'
      : 'bg-primary-500/10 text-primary-700 dark:text-primary-300 ring-2 ring-primary-500/40 hover:bg-primary-500/15',
    phoneDesktop: isHomeOverHero
      ? 'text-white hover:bg-white/15 hover:text-primary-300 shadow-md ring-2 ring-white/30 hover:ring-primary-300/60'
      : 'text-primary-600 dark:text-primary-400 hover:bg-primary-500/10 dark:hover:bg-primary-500/20 shadow-md ring-2 ring-primary-500/40 hover:ring-primary-500/70',
  };
}
