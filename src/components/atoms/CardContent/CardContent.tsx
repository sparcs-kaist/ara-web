import { ChevronRight } from "react-feather";

import * as styles from "./CardContent.css";

export const CardContent: React.FC<{ title: string; link: string; children: React.ReactNode }> = ({
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
        <ChevronRight size={24} className={styles.icon} />
      </div>
      <div className={styles.posts}>{children}</div>
    </div>
  );
};
