'use client';

import { type PropsWithChildren } from 'react';
import { useLaunchParams } from '@telegram-apps/sdk-react';
import { useClientOnce } from '@/hooks/useClientOnce';
import { useDidMount } from '@/hooks/useDidMount';
import { init } from '@/core/init';
import { ErrorBoundary } from '@/components/shared/ErrorBoundary';
import { UseTelegramMock } from '@/hooks/useTelegramMock';
import SplashScreen from '@/components/shared/splash-screen';
import { isDev } from '@/utils';

export default function InitTelegram({ children }: PropsWithChildren) {
  UseTelegramMock(isDev);

  const didMount = useDidMount();

  const launchParams = useLaunchParams();

  const debug = isDev || launchParams?.startParam === 'debug';

  useClientOnce(() => {
    init(debug);
  });

  if (!didMount) {
    return <SplashScreen />;
  }

  return <ErrorBoundary fallback={TelegramErrorPage}>{children}</ErrorBoundary>;
}

function TelegramErrorPage({
  error,
  reset,
}: {
  error?: Error & { digest?: string };
  reset?: () => void;
}) {
  console.warn(error);
  return (
    <main>
      <pre>it seems you do not use telegram env</pre>
      <button onClick={reset}></button>
    </main>
  );
}
