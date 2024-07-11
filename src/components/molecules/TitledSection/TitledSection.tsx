import Link from "next/link";
import { ChevronRight } from "react-feather";

import * as styles from "./TitledSection.css";

export const TitledSection: React.FC<{
  title: string;
  link: string;
  children: React.ReactNode;
}> = ({ title, link, children }) => (
  <div className={styles.layout}>
    <Link href={link} className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <ChevronRight size={24} className={styles.icon} />
    </Link>
    {children}
  </div>
);
