"use client";

import { t } from "i18next";
import { Fragment } from "react";
import { useTranslation } from "react-i18next";

import { Card, Divider, Item, List, PostRow } from "@/components/atoms";
import { Footer, Header, TitledSection } from "@/components/molecules";
import { hotArticles, newArticles } from "@/mock/data";

const Home: React.FC = () => {
  const { i18n } = useTranslation();

  const switchLocale = () => {
    const currentLanguage = i18n.language;
    i18n.changeLanguage(currentLanguage === "en_US" ? "ko_KR" : "en_US");
  };

  return (
    <>
      <Header />
      <main>
        <button
          onClick={() => switchLocale()}
          style={{ borderRadius: "0.6rem", padding: "0.4rem 0.8rem", backgroundColor: "#f0f0f0" }}
        >
          Switch Locale
        </button>
        <button onClick={switchLocale}>{i18n.language}</button>
        <Card>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.6rem",
              width: "100%",
            }}
          >
            <TitledSection title={t("hotArticles")} link="/">
              <List gap="sm">
                {hotArticles.map((article, index) => (
                  <Fragment key={article.id}>
                    {index > 0 && (
                      <Item>
                        <Divider />
                      </Item>
                    )}
                    <Item>
                      <PostRow
                        type="withRank"
                        rank={index + 1}
                        title={article.title}
                        hasImage={true}
                        hasFile={true}
                        subInfo={{
                          author: article.subInfo.author,
                        }}
                        counts={article.counts}
                      />
                    </Item>
                  </Fragment>
                ))}
              </List>
            </TitledSection>
            <TitledSection title={t("newArticles")} link="/">
              <List gap="sm">
                {newArticles.map((article, index) => (
                  <Fragment key={article.id}>
                    {index > 0 && (
                      <Item>
                        <Divider />
                      </Item>
                    )}
                    <Item>
                      <PostRow
                        rank={index + 1}
                        title={article.title}
                        hasImage={true}
                        hasFile={true}
                        subInfo={{
                          board: article.subInfo.board,
                          author: article.subInfo.author,
                          date: article.subInfo.date,
                        }}
                      />
                    </Item>
                  </Fragment>
                ))}
              </List>
            </TitledSection>
          </div>
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default Home;
