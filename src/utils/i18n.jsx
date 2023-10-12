import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import pt from './pt.json'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  lng: 'pt', // if you're using a language detector, do not define the lng option
  fallbackLng: 'en',
  resources: {
    en,
    pt,
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
})

export default i18n
