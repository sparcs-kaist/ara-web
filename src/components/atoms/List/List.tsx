import clsx from "clsx";
import React from "react";

import * as styles from "./List.css";

interface ListProps {
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ gap, children }) => {
  return (
    <ul className={clsx(styles.list({ gap }))}>
      {React.Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  );
};
