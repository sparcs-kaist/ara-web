import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import usTranslations from "@/locales/en_US.json";
import krTranslations from "@/locales/ko_KR.json";

const resources = {
  en_US: { translation: usTranslations },
  ko_KR: { translation: krTranslations },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "ko_KR",
  interpolation: { escapeValue: true },
});

export default i18n;
