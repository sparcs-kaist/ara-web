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
        <div style={{ width: "40rem", padding: "2rem" }}>
          <PostRow
            type="withRank"
            rank={2}
            title={"임의의 제목"}
            hasImage={true}
            hasFile={true}
            subInfo={{
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
            profileImage="https://via.placeholder.com/150"
            title={"임의의 제목"}
            hasImage={true}
            hasFile={true}
            subInfo={{
              responseStatus: ResponseStatus.BEFORE_UPVOTES,
              author: "조얌얌",
              views: 100,
              date: "2021-09-01",
            }}
          />
          <PostRow
            type="withPreview"
            previewImage="https://via.placeholder.com/150"
            profileImage="https://via.placeholder.com/150"
            title={"엄청나게 긴 임의의 제목을 한 번 써보려고 합니다 이 정도면 됐으려나 아닌가요"}
            hasImage={true}
            hasFile={true}
            subInfo={{
              responseStatus: ResponseStatus.BEFORE_UPVOTES,
              author: "조얌얌",
              views: 100,
              date: "2021-09-01",
            }}
          />
          <PostRow
            type="withPreview"
            profileImage="https://via.placeholder.com/150"
            title={"임의의 제목"}
            hasImage={true}
            hasFile={true}
            subInfo={{
              responseStatus: ResponseStatus.BEFORE_UPVOTES,
              author: "조얌얌",
              views: 100,
              date: "2021-09-01",
            }}
          />
          <PostRow
            type="withPreview"
            profileImage="https://via.placeholder.com/150"
            title={"임의의 제목"}
            hasImage={true}
            hasFile={true}
            subInfo={{
              responseStatus: ResponseStatus.BEFORE_UPVOTES,
              author: "조얌얌",
              views: 100,
              date: "2021-09-01",
            }}
          />
          <PostRow
            title={"임의의 제목"}
            hasImage={true}
            hasFile={true}
            subInfo={{
              responseStatus: ResponseStatus.BEFORE_RESPONSE,
              board: "자유게시판",
              author: "조얌얌",
              date: "2021-09-01",
            }}
            counts={{
              likes: 10,
              dislikes: 2,
              comments: 3,
            }}
          />
          <PostRow
            title={"임의의 제목"}
            hasImage={true}
            hasFile={true}
            subInfo={{
              responseStatus: ResponseStatus.AFTER_RESPONSE,
              board: "자유게시판",
              author: "조얌얌",
            }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
