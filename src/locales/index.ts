import br from "./br";
import { createI18n } from "vue-i18n";

const messages = {
  "pt-BR": br,
};

const i18nOptions = {
  locale: navigator.language,
  fallbackLocale: "pt-BR",
  messages,
};

const i18n = createI18n(i18nOptions);

export default i18n;
