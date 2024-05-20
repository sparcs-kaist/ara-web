import { useTranslation } from "react-i18next";

import { Card, CardContent, PostRow } from "@/components/atoms";
import { ResponseStatusType } from "@/constants/const";

export const MainPageCard: React.FC = () => {
  const { t } = useTranslation();
  const hotArticles = [
    {
      id: 1,
      title: "Title1",
      hasImage: true,
      hasFile: false,
      subInfo: {
        author: "Author1",
      },
      counts: {
        likes: 3,
        dislikes: 4,
        comments: 1,
      },
      user: {
        profileImage: "https://via.placeholder.com/150",
      },
    },
    {
      id: 2,
      title: "Title2",
      hasImage: true,
      hasFile: false,
      subInfo: {
        author: "Author2",
      },
      counts: {
        likes: 14,
        dislikes: 2,
        comments: 3,
      },
      user: {
        profileImage: "https://via.placeholder.com/150",
      },
    },
    {
      id: 3,
      title: "Title3",
      hasImage: true,
      hasFile: false,
      subInfo: {
        author: "Author3",
      },
      counts: {
        likes: 15,
        dislikes: 4,
        comments: 4,
      },
      user: {
        profileImage: "https://via.placeholder.com/150",
      },
    },
  ];
  const newArticles = [
    {
      id: 4,
      title: "Title4",
      hasImage: true,
      hasFile: false,
      subInfo: {
        board: "Board1",
        author: "Author4",
        date: "9 minutes ago",
      },
      user: {
        profileImage: "https://via.placeholder.com/150",
      },
    },
    {
      id: 5,
      title: "Title5",
      hasImage: true,
      hasFile: false,
      subInfo: {
        board: "Board2",
        author: "Author4",
        date: "9 minutes ago",
      },
      user: {
        profileImage: "https://via.placeholder.com/150",
      },
    },
    {
      id: 6,
      title: "Title6",
      hasImage: true,
      hasFile: false,
      subInfo: {
        board: "Board3",
        author: "Author4",
        date: "9 minutes ago",
      },
      user: {
        profileImage: "https://via.placeholder.com/150",
      },
    },
  ];

  return (
    <Card>
      <CardContent title={t("hotArticles")} link="/">
        {hotArticles.map((article, index) => (
          <PostRow type="withRank" rank={index + 1} {...article} key={article.id} />
        ))}
      </CardContent>
      <CardContent title={t("newArticles")} link="/">
        {newArticles.map((article) => (
          <PostRow {...article} key={article.id} />
        ))}
      </CardContent>
    </Card>
  );
};
