import type { Icon as IconType } from "react-feather";

import { iconButton } from "./Button.css";

type BaseButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

type IconButtonProps = BaseButtonProps & {
  icon: IconType;
  color?: string;
  size?: string | number;
};

export const IconButton: React.FC<IconButtonProps> = ({ icon: Icon, color, size, ...props }) => (
  <button className={iconButton} {...props}>
    <Icon color={color} size={size} />
  </button>
);
