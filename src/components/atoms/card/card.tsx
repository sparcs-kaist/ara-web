import * as styles from "./Card.css";

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};
