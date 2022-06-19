import { DefaultSeo } from 'next-seo';
import { DEFAULT_SEO } from '@/utils';
import type { AppProps } from 'next/app';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
