import Skeleton from "react-loading-skeleton";

import * as listStyles from "@/components/atoms/List/List.css";

import * as styles from "./DropdownSkeleton.css";

export const DropdownSkeleton: React.FC<{ dir?: "x" | "y" }> = ({ dir = "x" }) => {
  return (
    <div className={listStyles.list({ gap: "xl", dir })}>
      <Skeleton className={styles.dropdownSkeleton} />
      <Skeleton className={styles.dropdownSkeleton} />
      <Skeleton className={styles.dropdownSkeleton} />
      <Skeleton className={styles.dropdownSkeleton} />
      <Skeleton className={styles.dropdownSkeleton} />
    </div>
  );
};
