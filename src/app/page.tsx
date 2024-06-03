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
      <main>
        <button
          onClick={() => switchLocale()}
          style={{ borderRadius: "0.6rem", padding: "0.4rem 0.8rem", backgroundColor: "#f0f0f0" }}
        >
          Switch Locale
        </button>
      </main>
      <Footer />
    </main>
  );
};

export default Home;
