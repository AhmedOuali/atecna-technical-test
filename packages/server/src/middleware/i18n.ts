import i18n from 'i18n'
import path from 'path'

i18n.configure({
  locales: ['en', 'fr'],
  api: {
    __: 'translate', // now req.__ becomes req.t
    __n: 'tn' // and req.__n can be called as req.tn
  },
  header: 'accept-language',
  defaultLocale: 'en',
  directory: path.join(__dirname, '..', 'locales'),
  updateFiles: false
})

export default i18n
