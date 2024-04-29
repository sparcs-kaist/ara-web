import * as styles from "./cardInfoWithCount.css";

import { ThumbsUp, ThumbsDown, MessageSquare } from "react-feather";

const cardInfoWithCount: React.FC<{
  writer: string;
  like: number;
  dislike: number;
  comment: number;
}> = ({ writer, like, dislike, comment }) => {
  return (
    <div className={styles.contentInfo}>
      <div className={styles.infoes}>
        <div className={styles.writer}>{writer}</div>
      </div>
      <div className={styles.count}>
        <div className={styles.likes}>
          <div className={styles.likeIcon}>
            <ThumbsUp size={14} />
          </div>
          <div className={styles.likeCount}>{like}</div>
        </div>
        <div className={styles.dislikes}>
          <div className={styles.dislikeIcon}>
            <ThumbsDown size={14} />
          </div>
          <div className={styles.dislikeCount}>{dislike}</div>
        </div>
        <div className={styles.comments}>
          <div className={styles.commentIcon}>
            <MessageSquare size={14} />
          </div>
          <div className={styles.commentCount}>{comment}</div>
        </div>
      </div>
    </div>
  );
};

export default cardInfoWithCount;
