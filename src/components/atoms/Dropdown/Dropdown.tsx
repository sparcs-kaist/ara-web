"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTranslation } from "react-i18next";

import { BaseBoard } from "@/types";
import i18n from "@/utils/i18n";

import * as styles from "./Dropdown.css";

interface DropdownProps {
  title: string;
  boards: BaseBoard[];
}

export const Dropdown: React.FC<DropdownProps> = ({ title, boards }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownButton}>
        {t(title)}
        <ChevronUp size={16} className={styles.dropdownOpen} />
        <ChevronDown size={16} className={styles.dropdownClose} />
      </div>
      <div className={styles.dropdownAnchorListWrapper}>
        <ul className={styles.dropdownAnchorList}>
          {boards.map((board) => (
            <li key={board.id} className={styles.dropdownAnchorWrapper}>
              <Link href="#" className={styles.dropdownAnchor}>
                {i18n.language == "ko_KR" ? board.koName : board.enName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
