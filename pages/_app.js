import usePersistLocaleCookie from 'hooks/usePersistLocaleCookie'
import { NextSeo } from 'next-seo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  usePersistLocaleCookie()

  return (
    <>
      <NextSeo
        title="Smart Link"
        description="Smart Link"
        canonical="https://www.omise.co/"
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon-16x16.png',
            size: '16x16',
          },
          {
            rel: 'icon',
            href: '/favicon-32x32.png',
            size: '32x32',
          },
        ]}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
