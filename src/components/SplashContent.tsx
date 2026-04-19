'use client';

import Image from 'next/image';

export function SplashContent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="flex h-28 w-28 animate-[spin_2.8s_linear_infinite] items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-navy-500 p-4 shadow-lg glow-orange md:h-32 md:w-32"
        aria-hidden
      >
        <Image
          src="/RMK.png"
          alt=""
          width={96}
          height={96}
          className="h-full w-full object-contain"
          priority
        />
      </div>
    </div>
  );
}
