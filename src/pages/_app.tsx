import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'

import { DEFAULT_SEO } from '@/utils'

import '../styles/globals.css'
import '../styles/fonts.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
