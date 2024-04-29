"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Anchors from "@/components/atoms/Anchor/Anchor.css";
import { Dropdown } from "@/components/atoms/Dropdown/Dropdown";
import { useBoardGroups } from "@/lib/queries";
import i18n from "@/utils/i18n";

import * as styles from "./Header.css";
import { HeaderButtonList } from "./HeaderButtonList";

export const Header: React.FC = () => {
  const { t } = useTranslation();

  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdown = (index: number) => {
    if (openDropdown === index) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(index);
    }
  };

  const boardGroups = useBoardGroups().data;

  return (
    <header className={styles.header}>
      <Link href="#" className={styles.logo}>
        <Image src="/images/ara-logo.svg" alt="Ara" width={45} height={25} />
      </Link>

      <nav className={styles.anchorList}>
        <Link href="#" className={Anchors.textAnchor}>
          {t("header.all")}
        </Link>
        <Link href="#" className={Anchors.textAnchor}>
          {t("header.top")}
        </Link>
        <Link href="#" className={Anchors.textAnchor}>
          {t("header.calendar")}
        </Link>
        {boardGroups?.map((boardGroup) => (
          <Dropdown
            key={boardGroup.id}
            title={i18n.language == "ko_KR" ? boardGroup.koName : boardGroup.enName}
            isOpen={openDropdown == boardGroup.id}
            onToggle={() => handleDropdown(boardGroup.id)}
            boards={boardGroup.boards}
          />
        ))}
      </nav>

      <HeaderButtonList.Full />
    </header>
  );
};
