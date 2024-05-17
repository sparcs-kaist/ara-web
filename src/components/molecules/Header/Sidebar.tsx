import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { X } from "react-feather";
import { useTranslation } from "react-i18next";

import { Divider } from "@/components/atoms";
import Anchors from "@/components/atoms/Anchor/Anchor.css";
import { Dropdown } from "@/components/atoms/Dropdown/Dropdown";
import { useBoardGroups } from "@/lib/queries";
import i18n from "@/utils/i18n";

import * as styles from "./Sidebar.css";

interface SidebarProps {
  isOpened: boolean;
  close: () => void;
}
export const Sidebar: React.FC<SidebarProps> = ({ isOpened, close }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdown = (index: number) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  const closeSidebar = () => {
    if (isOpened) {
      setOpenDropdown(null);
      close();
    }
  };

  const boardGroups = useBoardGroups().data;
  const { t } = useTranslation();

  return (
    <>
      {isOpened && <div className={styles.backdrop} onClick={closeSidebar} />}
      <div className={clsx(styles.sidebar, isOpened && styles.opened)}>
        <button className={styles.closeButton} onClick={closeSidebar}>
          <X size={20} />
        </button>
        <nav className={styles.navigation}>
          <Link href="#" className={Anchors.textAnchor}>
            {t("header.all")}
          </Link>
          <Link href="#" className={Anchors.textAnchor}>
            {t("header.top")}
          </Link>
          <Link href="#" className={Anchors.textAnchor}>
            {t("header.calendar")}
          </Link>
          <Divider dir="x" />
          {boardGroups?.map((boardGroup) => (
            <Dropdown
              key={boardGroup.id}
              title={i18n.language == "ko_KR" ? boardGroup.koName : boardGroup.enName}
              boards={boardGroup.boards}
              openOnHover={false}
              isOpened={openDropdown == boardGroup.id}
              onClick={() => handleDropdown(boardGroup.id)}
            />
          ))}
        </nav>
      </div>
    </>
  );
};
