import type { ReactNode } from 'react';
import { JoinOurMission } from '@/components/JoinOurMission';

/**
 * Routes in this group get the global “Join Our Mission” footer.
 * /donate and /contact live outside this group so they stay clean.
 */
export default function WithCtaLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <JoinOurMission />
    </>
  );
}
