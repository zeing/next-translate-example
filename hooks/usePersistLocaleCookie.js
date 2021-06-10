import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function usePersistLocaleCookie() {
  const { locale, defaultLocale } = useRouter()
  // console.log('locale', locale, defaultLocale)
  useEffect(persistLocaleCookie, [locale, defaultLocale])
  function persistLocaleCookie() {
    if (locale !== defaultLocale) {
      const date = new Date()
      const expireMs = 100 * 365 * 24 * 60 * 60 * 1000 // 100 days
      date.setTime(date.getTime() + expireMs)
      document.cookie = `NEXT_LOCALE=${locale};expires=${date.toUTCString()};path=/`
    }
  }
}
