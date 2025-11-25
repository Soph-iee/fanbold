'use client';

import { Toaster } from '@mosespace/toast';
import DevToolsBlocker from './dev-tool-blocker';
import { Analytics } from '@vercel/analytics/next';

export default function Providers({ children }: { children: React.ReactNode }) {
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <>
      <Toaster position={'bottom-right'} />
      {children}
      <Analytics />
      {isProduction && <DevToolsBlocker />}
    </>
  );
}
