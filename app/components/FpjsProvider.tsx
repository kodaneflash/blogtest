'use client';

import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';
import { PropsWithChildren } from 'react';

export function MyFpjsProvider({ children }: PropsWithChildren) {
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