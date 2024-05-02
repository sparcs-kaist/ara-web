import clsx from "clsx";
import React from "react";

import * as styles from "./List.css";

interface ListProps {
  gap?: "xs" | "sm" | "md" | "lg" | "xl";
  wide?: "flex" | "none";
  desktop?: "flex" | "none";
  tablet?: "flex" | "none";
  mobile?: "flex" | "none";
  children: React.ReactNode;
}

export const List: React.FC<ListProps> = ({ gap, wide, desktop, tablet, mobile, children }) => {
  return (
    <ul className={clsx(styles.list({ gap, wide, desktop, tablet, mobile }))}>
      {React.Children.map(children, (child) => (
        <li>{child}</li>
      ))}
    </ul>
  );
};
