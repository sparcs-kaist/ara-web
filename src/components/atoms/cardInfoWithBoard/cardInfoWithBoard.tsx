import * as styles from "./cardInfoWithBoard.css";

import { ThumbsUp, ThumbsDown, MessageSquare } from "react-feather";

const cardInfoWithBoard: React.FC<{
  board: string;
  writer: string;
  time: string;
}> = ({ board, writer, time }) => {
  return (
    <div className={styles.contentInfo}>
      <div className={styles.infoes}>
        <div className={styles.board}>{board}</div>
        <div className={styles.divider}>·</div>
        <div className={styles.writer}>{writer}</div>
        <div className={styles.divider}>·</div>
        <div className={styles.time}>{time}</div>
      </div>
    </div>
  );
};

export default cardInfoWithBoard;
