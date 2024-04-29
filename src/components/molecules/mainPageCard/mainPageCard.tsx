import { useTranslation } from "react-i18next";
import Card from "@/components/atoms/card/card";
import CardContent from "@/components/atoms/cardContent/cardContent";
import CardContentRow from "@/components/atoms/cardContentRow/cardContentRow";
import CardInfoWithCount from "@/components/atoms/cardInfoWithCount/cardInfoWithCount";
import CardInfoWithBoard from "@/components/atoms/cardInfoWithBoard/cardInfoWithBoard";

import { title } from "process";
import { board } from "@/components/atoms/cardInfoWithBoard/cardInfoWithBoard.css";

const MainPageCard: React.FC = () => {
  const { t } = useTranslation();
  const hotArticles = [
    {
      title: "Article 1",
      hasImage: true,
      writer: "John Doe",
      like: 10,
      dislike: 2,
      comment: 5,
    },
    {
      title: "Article 2",
      hasImage: true,
      writer: "Jane Doe",
      like: 8,
      dislike: 3,
      comment: 4,
    },
    {
      title: "Article 3",
      hasImage: true,
      writer: "John Smith",
      like: 5,
      dislike: 1,
      comment: 3,
    },
  ];
  const newArticles = [
    {
      title: "Article 4",
      hasImage: true,
      writer: "Jane Smith",
      board: "Board 1",
      time: "5minutes ago",
    },
    {
      title: "Article 5",
      hasImage: true,
      writer: "John Doe",
      board: "Board 2",
      time: "10minutes ago",
    },
    {
      title: "Article 6",
      hasImage: true,
      writer: "Jane Doe",
      board: "Board 3",
      time: "15minutes ago",
    },
  ];

  return (
    <Card>
      <CardContent title={t("hotArticles")} link="/">
        {hotArticles.map((article, index) => (
          <CardContentRow
            key={index}
            title={article.title}
            hasImage={article.hasImage}
            isNumbered={true}
            num={index + 1}
          >
            <CardInfoWithCount
              writer={article.writer}
              like={article.like}
              dislike={article.dislike}
              comment={article.comment}
            />
          </CardContentRow>
        ))}
      </CardContent>
      <CardContent title={t("newArticles")} link="/">
        {newArticles.map((article, index) => (
          <CardContentRow
            key={index}
            title={article.title}
            hasImage={article.hasImage}
            isNumbered={false}
            num={index + 1}
          >
            <CardInfoWithBoard writer={article.writer} board={article.board} time={article.time} />
          </CardContentRow>
        ))}
      </CardContent>
    </Card>
  );
};

export default MainPageCard;
