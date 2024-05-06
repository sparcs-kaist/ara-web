"use client";

import Link from "next/link";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTranslation } from "react-i18next";

import { BaseBoard } from "@/types";
import i18n from "@/utils/i18n";

import * as styles from "./Dropdown.css";

interface DropdownProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  boards: BaseBoard[];
}

export const Dropdown: React.FC<DropdownProps> = ({ title, isOpen, onToggle, boards }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownButton} onClick={onToggle}>
        {t(title)}
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {isOpen && (
        <ul className={styles.dropdownAnchorList}>
          {boards.map((board) => (
            <li key={board.id} className={styles.dropdownAnchorWrapper}>
              <Link href="#" className={styles.dropdownAnchor}>
                {i18n.language == "ko_KR" ? board.koName : board.enName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
