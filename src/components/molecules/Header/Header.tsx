"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bell, Edit, Menu, User } from "react-feather";
import { useTranslation } from "react-i18next";

import Anchors from "@/components/atoms/Anchor/Anchor.css";
import Buttons from "@/components/atoms/Button/Button.css";
import { Dropdown } from "@/components/atoms/Dropdown/Dropdown";
import { Invisible } from "@/components/atoms/Invisible/Invisible";
import { List } from "@/components/atoms/List/List";
import * as listStyles from "@/components/atoms/List/List.css";
import { useBoardGroups } from "@/lib/queries";
import i18n from "@/utils/i18n";

import * as styles from "./Header.css";

export const Header: React.FC = () => {
  const boardGroups = useBoardGroups().data;
  const { t } = useTranslation();

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Link href="#" className={styles.logo}>
          <Image src="/images/ara-logo.svg" alt="Ara" width={45} height={25} />
        </Link>
        <Invisible desktop tablet mobile>
          <nav className={listStyles.list({ gap: "xl" })}>
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
                boards={boardGroup.boards}
                openOnHover={true}
              />
            ))}
          </nav>
        </Invisible>
        <Invisible wide>
          <List>
            <button className={Buttons.iconButton}>
              <Edit size={20} />
            </button>
            <button className={Buttons.iconButton}>
              <Bell size={20} />
            </button>
            <button className={Buttons.iconButton}>
              <Menu size={20} />
            </button>
          </List>
        </Invisible>
        <Invisible underWide>
          <List>
            <Link href="#" className={Anchors.outlinedAnchor}>
              게시물 작성하기
            </Link>
            <button className={Buttons.iconButton}>
              <Bell size={20} />
            </button>
            <button className={Buttons.iconButton}>
              <User size={20} />
            </button>
          </List>
        </Invisible>
      </header>
    </div>
  );
};
