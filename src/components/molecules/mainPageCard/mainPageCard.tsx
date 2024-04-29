import { useTranslation } from "react-i18next";
import Card from "@/components/atoms/card/card";
import CardContent from "@/components/atoms/cardContent/cardContent";
import CardContentRow from "@/components/atoms/cardContentRow/cardContentRow";
import CardInfoWithCount from "@/components/atoms/cardInfoWithCount/cardInfoWithCount";

import * as styles from "./mainPageCard.css";
import { title } from "process";

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

  return (
    <Card>
      <CardContent title={t("hotArticles")} link="/main">
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
    </Card>
  );
};

export default MainPageCard;
