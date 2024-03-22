"use client";

import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const switchLocale = () => {
    const currentLanguage = i18n.language;
    i18n.changeLanguage(currentLanguage === "en_US" ? "ko_KR" : "en_US");
  };

  return (
    <main>
      <div>{t("hello")}</div>
      <button onClick={switchLocale}>{i18n.language}</button>
    </main>
  );
};

export default Home;
