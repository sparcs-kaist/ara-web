import clsx from "clsx";
import type { Icon as IconType } from "react-feather";

import { iconButton } from "./Button.css";

type BaseButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

type IconButtonProps = BaseButtonProps & {
  icon: IconType;
  color?: string;
  size?: string | number;
};

export const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  color,
  size,
  className,
  ...props
}) => (
  <button className={clsx(iconButton, className)} {...props}>
    <Icon color={color} size={size} />
  </button>
);
