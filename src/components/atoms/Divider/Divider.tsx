import * as styles from "./Divider.css";

export const Divider: React.FC<{ dir?: "x" | "y" }> = ({ dir }) => (
  <hr className={styles.divider({ dir })} />
);
