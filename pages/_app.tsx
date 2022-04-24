import React from 'react';
import type { AppProps } from 'next/app';
import { BaseProvider } from 'baseui';
import { Provider as StyletronProvider } from 'styletron-react';
import SkillexTheme from '../lib/theme';
import styletron from '../lib/styletron';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyletronProvider value={styletron}>
      <BaseProvider theme={SkillexTheme}>
        <Component {...pageProps} />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
