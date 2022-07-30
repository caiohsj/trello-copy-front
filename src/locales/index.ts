import br from './br'

const messages = {
  "pt-BR": br
}

const i18n = {
  locale: navigator.language,
  fallbackLocale: 'pt-BR',
  messages
}

export default i18n