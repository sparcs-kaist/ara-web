import * as styles from "./CardContentRow.css";

import { Image } from "react-feather";

export const CardContentRow: React.FC<{
  title: string;
  hasImage: boolean;
  isNumbered: boolean;
  num: number;
  children: React.ReactNode;
}> = ({ title, hasImage, isNumbered, num, children }) => {
  return (
    <div className={styles.row}>
      {isNumbered ? <div className={styles.number}>{num}</div> : null}
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.titleText}>{title}</div>
          {hasImage ? (
            <div className={styles.titleImage}>
              <Image size={16} />
            </div>
          ) : null}
        </div>
        {children}
      </div>
    </div>
  );
};
