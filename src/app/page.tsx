"use client";

import { useTranslation } from "react-i18next";

import { Footer, Header } from "@/components/molecules";

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const switchLocale = () => {
    const currentLanguage = i18n.language;
    i18n.changeLanguage(currentLanguage === "en_US" ? "ko_KR" : "en_US");
  };

  return (
    <main>
      <Header />
      <Footer />
    </main>
  );
};

export default Home;
