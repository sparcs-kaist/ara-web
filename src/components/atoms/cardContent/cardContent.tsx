import * as styles from "./CardContent.css";

import { ChevronRight } from "react-feather";

const CardContent: React.FC<{ title: string; link: string; children: React.ReactNode }> = ({
  title,
  link,
  children,
}) => {
  function movePage() {
    window.location.href = link;
  }

  return (
    <div className={styles.box}>
      <div className={styles.content} onClick={movePage}>
        <div className={styles.title}>{title}</div>
        <div className={styles.icon}>
          <ChevronRight size={24} />
        </div>
      </div>
      <div className={styles.posts}>{children}</div>
    </div>
  );
};

export default CardContent;
