import * as styles from "./CardInfoWithBoard.css";

import { ThumbsUp, ThumbsDown, MessageSquare } from "react-feather";

export const CardInfoWithBoard: React.FC<{
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
