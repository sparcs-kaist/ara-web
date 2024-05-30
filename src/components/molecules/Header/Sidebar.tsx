import clsx from "clsx";
import { Suspense, useState } from "react";
import { X } from "react-feather";
import { useTranslation } from "react-i18next";

import { Divider, TextLink } from "@/components/atoms";
import { Dropdown } from "@/components/atoms/Dropdown/Dropdown";
import { DropdownSkeleton } from "@/components/atoms/Skeleton/DropdownSkeleton";
import { useBoardGroups } from "@/lib/queries";
import i18n from "@/utils/i18n";

import * as styles from "./Sidebar.css";

type SidebarProps = {
  isOpened: boolean;
  close: () => void;
};

type DropdownGroupProps = {
  openedGroupId: number | null;
  setOpenedGroupId: (index: number | null) => void;
};

export const DropdownGroup: React.FC<DropdownGroupProps> = ({
  openedGroupId,
  setOpenedGroupId,
}) => {
  const boardGroups = useBoardGroups().data;

  const handleDropdown = (index: number) => {
    if (openedGroupId === index) {
      setOpenedGroupId(null);
    } else {
      setOpenedGroupId(index);
    }
  };

  return (
    <>
      {boardGroups?.map((boardGroup) => (
        <Dropdown
          key={boardGroup.id}
          title={i18n.language === "ko_KR" ? boardGroup.koName : boardGroup.enName}
          boards={boardGroup.boards}
          openOnHover={false}
          isOpened={openedGroupId === boardGroup.id}
          onClick={() => handleDropdown(boardGroup.id)}
        />
      ))}
    </>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({ isOpened, close }) => {
  const [openedGroupId, setOpenedGroupId] = useState<number | null>(null);
  const { t } = useTranslation();

  const closeSidebar = () => {
    if (isOpened) {
      setOpenedGroupId(null);
      close();
    }
  };

  return (
    <>
      {isOpened && <div className={styles.backdrop} onClick={closeSidebar} />}
      <div className={clsx(styles.sidebar, isOpened && styles.opened)}>
        <button className={styles.closeButton} onClick={closeSidebar}>
          <X size={20} />
        </button>
        <nav className={styles.navigation}>
          <TextLink href="#">{t("header.all")}</TextLink>
          <TextLink href="#">{t("header.top")}</TextLink>
          <TextLink href="#">{t("header.calendar")}</TextLink>
          <Divider dir="x" />
          <Suspense fallback={<DropdownSkeleton dir="y" />}>
            <DropdownGroup openedGroupId={openedGroupId} setOpenedGroupId={setOpenedGroupId} />
          </Suspense>
        </nav>
      </div>
    </>
  );
};
