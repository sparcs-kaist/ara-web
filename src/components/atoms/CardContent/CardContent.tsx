import Link from "next/link";
import { ChevronRight } from "react-feather";

import * as styles from "./CardContent.css";

export const CardContent: React.FC<{ title: string; link: string; children: React.ReactNode }> = ({
  title,
  link,
  children,
}) => {
  return (
    <div className={styles.box}>
      <Link href={link}>
        <div className={styles.title}>{title}</div>
        <ChevronRight size={24} className={styles.icon} />
      </Link>
      <div className={styles.posts}>{children}</div>
    </div>
  );
};
