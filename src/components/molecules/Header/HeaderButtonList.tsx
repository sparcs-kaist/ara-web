import { Bell, Edit, Menu, User } from "react-feather";

import Anchors from "@/components/atoms/Anchor/Anchor.css";
import Buttons from "@/components/atoms/Button/Button.css";

import * as styles from "./Header.css";

const Full: React.FC = () => {
  return (
    <div className={styles.buttonList}>
      <button className={Anchors.outlinedAnchor}>게시물 작성하기</button>
      <button className={Buttons.iconButton}>
        <Bell size={20} />
      </button>
      <button className={Buttons.iconButton}>
        <User size={20} />
      </button>
    </div>
  );
};

const Simple: React.FC = () => {
  return (
    <div className={styles.buttonList}>
      <button className={Buttons.iconButton}>
        <Edit size={20} />
      </button>
      <button className={Buttons.iconButton}>
        <Bell size={20} />
      </button>
      <button className={Buttons.iconButton}>
        <Menu size={20} />
      </button>
    </div>
  );
};

export const HeaderButtonList = {
  Full,
  Simple,
};
