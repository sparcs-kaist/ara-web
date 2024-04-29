import * as styles from "./Divider.css";

export const Divider: React.FC<{ dir?: "x" | "y" }> = ({ dir = "x" }) => (
  <hr className={dir === "x" ? styles.divX : styles.divY} />
);
