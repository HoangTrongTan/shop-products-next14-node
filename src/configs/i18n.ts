import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'

i18n
  .use(Backend)
  // Enable automatic language detection
  .use(LanguageDetector)

  // Enables the hook initialization module
  .use(initReactI18next)
  .init({
    lng: 'vi',
    backend: {
      /* translation file path */
      loadPath: '/locales/{{lng}}.json'
    },
    fallbackLng: 'vi',
    debug: false,
    keySeparator: false, //chẳng hạn truyền key như a.b or a/b thì để là false sẽ tự động phân biệt cho mình.
    react: {
      useSuspense: false //
    },
    interpolation: {
      escapeValue: false, //"laptrinh <strong>thatde</strong>"
      formatSeparator: ',' //có thể để 100000 thành 100,000 nó sẽ tự hiểu
    }
  })

export default i18n

export const LANGUAGES_OPTIONS = [
  {
    lang: "Tiếng Việt",
    value: "vi"
  },
  {
    lang: "English",
    value: "en"
  }
]