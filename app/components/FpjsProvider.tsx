'use client';

import { FpjsProvider, useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react';
import { PropsWithChildren, useEffect } from 'react';

export function MyFpjsProvider({ children }: PropsWithChildren) {
  const { isLoading, error, data, getData } = useVisitorData(
    {extendedResult: true},
    {immediate: true}
  );

  useEffect(() => {
    if (!isLoading) {
      if (data) {
        console.log('Visitor data:', data);
      }
      if (error) {
        console.error('Error fetching visitor data:', error);
      }
    }
  }, [isLoading, data, error]);

  return (
    <FpjsProvider
      loadOptions={{
        apiKey: '45Zv9bO7SOUZdfuq1EAo',
        endpoint: 'https://metrics.aibuzz.us',
        scriptUrlPattern: "https://metrics.aibuzz.us/web/v<version>/<apiKey>/loader_v<loaderVersion>.js"
      }}
    >
      {children}
    </FpjsProvider>
  );
}
