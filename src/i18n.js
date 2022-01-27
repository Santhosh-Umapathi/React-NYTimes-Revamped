import i18n from "i18next";
import { initReactI18next } from "react-i18next";
//Locales
import en from "./assets/locales/en/index.json";
import de from "./assets/locales/de/index.json";

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;