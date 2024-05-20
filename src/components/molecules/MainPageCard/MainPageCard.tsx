import { useTranslation } from "react-i18next";

import { Card, CardContent, PostRow } from "@/components/atoms";
import { board } from "@/components/atoms/PostRow/PostRow.css";

export const MainPageCard: React.FC = () => {
  const { t } = useTranslation();
  const hotArticles = [
    {
      id: 1,
      title: "Title1",
      hasImage: true,
      hasFile: false,
      hasRank: true,
      isMainPagePost: true,
      isMessageToSchoolBoard: false,
      subInfo: {
        responseStatus: false,
        author: "Author1",
      },
      counts: {
        likes: 3,
        dislikes: 4,
        comments: 1,
      },
      rank: 1,
    },
    {
      id: 2,
      title: "Title2",
      hasImage: true,
      hasFile: false,
      hasRank: true,
      isMainPagePost: true,
      isMessageToSchoolBoard: false,
      subInfo: {
        responseStatus: false,
        author: "Author2",
      },
      counts: {
        likes: 14,
        dislikes: 2,
        comments: 3,
      },
      rank: 2,
    },
    {
      id: 3,
      title: "Title3",
      hasImage: true,
      hasFile: false,
      hasRank: true,
      isMainPagePost: true,
      isMessageToSchoolBoard: false,
      subInfo: {
        responseStatus: false,
        author: "Author3",
      },
      counts: {
        likes: 15,
        dislikes: 4,
        comments: 4,
      },
      rank: 3,
    },
  ];
  const newArticles = [
    {
      id: 4,
      title: "Title4",
      hasImage: true,
      hasFile: false,
      hasRank: false,
      isMainPagePost: true,
      isMessageToSchoolBoard: false,
      subInfo: {
        responseStatus: false,
        board: "Board1",
        author: "Author4",
        date: "9 minutes ago",
      },
      counts: {
        likes: 5,
        dislikes: 0,
        comments: 2,
      },
    },
    {
      id: 5,
      title: "Title5",
      hasImage: true,
      hasFile: false,
      hasRank: false,
      isMainPagePost: true,
      isMessageToSchoolBoard: false,
      subInfo: {
        responseStatus: false,
        board: "Board2",
        author: "Author4",
        date: "9 minutes ago",
      },
      counts: {
        likes: 3,
        dislikes: 1,
        comments: 2,
      },
    },
    {
      id: 6,
      title: "Title6",
      hasImage: true,
      hasFile: false,
      hasRank: false,
      isMainPagePost: true,
      isMessageToSchoolBoard: false,
      subInfo: {
        responseStatus: false,
        board: "Board3",
        author: "Author4",
        date: "9 minutes ago",
      },
      counts: {
        likes: 6,
        dislikes: 0,
        comments: 3,
      },
    },
  ];

  return (
    <Card>
      <CardContent title={t("hotArticles")} link="/">
        {hotArticles.map((article) => (
          <PostRow PostInfo={article} key={article.id} />
        ))}
      </CardContent>
      <CardContent title={t("newArticles")} link="/">
        {newArticles.map((article) => (
          <PostRow PostInfo={article} key={article.id} />
        ))}
      </CardContent>
    </Card>
  );
};
