"use client";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from "react-i18next";
import i18n from "@/utils/i18n";

export default function Home() {
  const { t } = useTranslation();
  const switchLocale = () => {
    const currentLanguage = i18n.language;

    i18n.changeLanguage(currentLanguage === "en_US" ? "ko_KR" : "en_US");
  };

  return (
    <I18nextProvider i18n={i18n}>
      <main>
        <div>{t("hello")}</div>
        <button onClick={switchLocale}>{i18n.language}</button>
      </main>
    </I18nextProvider>
  );
}
