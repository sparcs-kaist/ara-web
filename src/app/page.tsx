"use client";

import { useTranslation } from "react-i18next";

import { PostRow } from "@/components/atoms";
import { Footer, Header, MainPageCard } from "@/components/molecules";
import { ResponseStatus } from "@/constants/const";

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
        <MainPageCard />
        <PostRow
          type="withRank"
          rank={2}
          id={1}
          title={"임의의 제목"}
          hasImage={true}
          hasFile={true}
          user={{
            profileImage:
              "https://sparcs-newara.s3.amazonaws.com/user_profiles/default_pictures/blue-default2.png",
          }}
          subInfo={{
            responseStatus: ResponseStatus.AFTER_RESPONSE,
            board: "자유게시판",
            author: "조얌얌",
            views: 100,
            date: "2021-09-01",
          }}
          counts={{
            likes: 10,
            dislikes: 2,
            comments: 3,
          }}
        />

        <PostRow
          type="withPreview"
          previewImage="https://via.placeholder.com/150"
          id={1}
          title={"임의의 제목"}
          hasImage={true}
          hasFile={true}
          user={{ profileImage: "https://via.placeholder.com/150" }}
          subInfo={{
            responseStatus: ResponseStatus.AFTER_RESPONSE,
            board: "자유게시판",
            author: "조얌얌",
            views: 100,
            date: "2021-09-01",
          }}
          counts={{
            likes: 10,
            dislikes: 2,
            comments: 3,
          }}
        />

        <PostRow
          id={1}
          title={"임의의 제목"}
          hasImage={true}
          hasFile={true}
          user={{
            profileImage:
              "https://sparcs-newara.s3.amazonaws.com/user_profiles/default_pictures/blue-default2.png",
          }}
          subInfo={{
            responseStatus: ResponseStatus.AFTER_RESPONSE,
            board: "자유게시판",
            author: "조얌얌",
            views: 100,
            date: "2021-09-01",
          }}
          counts={{
            likes: 10,
            dislikes: 2,
            comments: 3,
          }}
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
