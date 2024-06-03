import Link, { type LinkProps } from "next/link";

import { outlinedLink, textLink } from "./Link.css";

type BaseLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps | "className"
> &
  LinkProps;

type TextLinkProps = Omit<BaseLinkProps, "children"> & { text: string };

export const TextLink: React.FC<TextLinkProps> = ({ text, ...props }) => (
  <Link className={textLink} {...props}>
    {text}
  </Link>
);

type OutlinedLinkProps = Omit<BaseLinkProps, "children"> & { children: string };

export const OutlinedLink: React.FC<OutlinedLinkProps> = ({ children, ...props }) => (
  <Link className={outlinedLink} {...props}>
    {children}
  </Link>
);
