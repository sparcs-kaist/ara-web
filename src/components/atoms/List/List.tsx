import clsx from "clsx";
import React from "react";

import * as styles from "./List.css";

type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  dir?: "x" | "y";
  gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
};

export const List: React.FC<ListProps> = ({ dir, gap, className, children, ...props }) => (
  <ul className={clsx(styles.list({ gap, dir }), className)} {...props}>
    {children}
  </ul>
);

type ItemProps = React.LiHTMLAttributes<HTMLLIElement>;

export const Item: React.FC<ItemProps> = ({ children, ...props }) => <li {...props}>{children}</li>;
