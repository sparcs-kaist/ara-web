"use client";

import clsx from "clsx";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "react-feather";
import { useTranslation } from "react-i18next";

import type { Board } from "@/types";
import i18n from "@/utils/i18n";

import * as styles from "./Dropdown.css";

type ChevronProps = {
  openOnHover: boolean;
  isOpened: boolean;
};

const Chevron: React.FC<ChevronProps> = ({ openOnHover, isOpened }) => {
  if (openOnHover) {
    return (
      <>
        <ChevronUp size={16} className={styles.dropdownOpen} />
        <ChevronDown size={16} className={styles.dropdownClose} />
      </>
    );
  }
  return isOpened ? <ChevronUp size={16} /> : <ChevronDown size={16} />;
};

type DropdownProps = {
  title: string;
  boards: Board[];
} & (
  | { openOnHover: true; isOpened?: never; onClick?: never }
  | { openOnHover: false; isOpened: boolean; onClick: () => void }
);

export const Dropdown: React.FC<DropdownProps> = ({
  title,
  boards,
  openOnHover,
  isOpened = true,
  onClick,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.dropdown}>
      <div
        className={styles.dropdownButton}
        onClick={onClick}
        aria-checked={!openOnHover && isOpened}
      >
        {t(title)}
        <Chevron openOnHover={openOnHover} isOpened={isOpened} />
      </div>
      {isOpened && (
        <div className={styles.dropdownAnchorListWrapper}>
          <ul className={clsx(openOnHover && styles.dropdownAnchorList)}>
            {boards.map((board) => (
              <li key={board.id} className={styles.dropdownAnchorWrapper}>
                <Link href="#" className={styles.dropdownAnchor}>
                  {i18n.language === "ko_KR" ? board.name.ko : board.name.en}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
