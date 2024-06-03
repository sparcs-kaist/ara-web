"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Bell, Edit, Menu, User, X } from "react-feather";
import { useTranslation } from "react-i18next";

import {
  Dialog,
  Divider,
  IconButton,
  Invisible,
  Item,
  List,
  OutlinedLink,
  TextLink,
} from "@/components/atoms";
import { useDialog } from "@/lib/hooks";

import { ClickableDropdowns, DropdownSkeletons, HoverDropdowns } from "./Dropdown";
import * as styles from "./Header.css";

export const Header: React.FC = () => {
  const { ref: dialogRef, open, close } = useDialog();

  const { t } = useTranslation();

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <Link href="#" className={styles.logo}>
          <Image src="/images/ara-logo.svg" alt="Ara" width={45} height={25} />
        </Link>
        <Invisible desktop tablet mobile>
          <nav>
            <List dir="x" gap="xl">
              <Item>
                <TextLink href="#" text={t("header.all")} />
              </Item>
              <Item>
                <TextLink href="#" text={t("header.top")} />
              </Item>
              <Item>
                <TextLink href="#" text={t("header.calendar")} />
              </Item>
              <Suspense fallback={<DropdownSkeletons num={5} />}>
                <HoverDropdowns />
              </Suspense>
            </List>
          </nav>
        </Invisible>
        <Invisible wide>
          <List dir="x" gap="md">
            <Item>
              <IconButton icon={Edit} size={20} />
            </Item>
            <Item>
              <IconButton icon={Bell} size={20} />
            </Item>
            <Item>
              <IconButton icon={Menu} size={20} onClick={open} />
            </Item>
          </List>
        </Invisible>
        <Invisible underWide>
          <List dir="x" gap="md">
            <Item>
              <OutlinedLink href="#">게시물 작성하기</OutlinedLink>
            </Item>
            <Item>
              <IconButton icon={Bell} size={20} />
            </Item>
            <Item>
              <IconButton icon={User} size={20} />
            </Item>
          </List>
        </Invisible>
      </header>
      <Invisible wide>
        <Dialog
          ref={dialogRef}
          close={close}
          className={styles.dialog}
          innerClassName={styles.dialogInner}
        >
          <div className={styles.closeButtonWrapper}>
            <IconButton icon={X} size={20} onClick={close} />
          </div>
          <nav className={styles.navigation}>
            <List gap="xl">
              <Item>
                <TextLink href="#" text={t("header.all")} />
              </Item>
              <Item>
                <TextLink href="#" text={t("header.top")} />
              </Item>
              <Item>
                <TextLink href="#" text={t("header.calendar")} />
              </Item>
              <Item>
                <Divider />
              </Item>
              <Suspense fallback={<DropdownSkeletons num={5} />}>
                <ClickableDropdowns />
              </Suspense>
            </List>
          </nav>
        </Dialog>
      </Invisible>
    </div>
  );
};
