"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Bell, Edit, Menu, User } from "react-feather";
import { useTranslation } from "react-i18next";

import { IconButton } from "@/components/atoms";
import Anchors from "@/components/atoms/Anchor/Anchor.css";
import { Dropdown } from "@/components/atoms/Dropdown/Dropdown";
import { Invisible } from "@/components/atoms/Invisible/Invisible";
import { List } from "@/components/atoms/List/List";
import * as listStyles from "@/components/atoms/List/List.css";
import { DropdownSkeleton } from "@/components/atoms/Skeleton/DropdownSkeleton";
import { useBoolean } from "@/lib/hooks/useBoolean";
import { useBoardGroups } from "@/lib/queries";
import i18n from "@/utils/i18n";

import * as styles from "./Header.css";
import { Sidebar } from "./Sidebar";

export const DropdownGroup: React.FC = () => {
  const boardGroups = useBoardGroups().data;

  return (
    <>
      {boardGroups.map((boardGroup) => (
        <Dropdown
          key={boardGroup.id}
          title={i18n.language === "ko_KR" ? boardGroup.koName : boardGroup.enName}
          boards={boardGroup.boards}
          openOnHover={true}
        />
      ))}
    </>
  );
};

export const Header: React.FC = () => {
  const { value: isSidebarOpened, toggle: setIsSidebarOpened } = useBoolean(false);

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
            <Suspense fallback={<DropdownSkeleton />}>
              <DropdownGroup />
            </Suspense>
          </nav>
        </Invisible>
        <Invisible wide>
          <List>
            <IconButton icon={Edit} size={20} />
            <IconButton icon={Bell} size={20} />
            <IconButton icon={Menu} size={20} onClick={setIsSidebarOpened} />
          </List>
        </Invisible>
        <Invisible underWide>
          <List>
            <Link href="#" className={Anchors.outlinedAnchor}>
              게시물 작성하기
            </Link>
            <IconButton icon={Bell} size={20} />
            <IconButton icon={User} size={20} />
          </List>
        </Invisible>
      </header>
      <Invisible wide>
        <Sidebar isOpened={isSidebarOpened} close={setIsSidebarOpened} />
      </Invisible>
    </div>
  );
};
