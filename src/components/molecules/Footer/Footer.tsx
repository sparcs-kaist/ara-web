"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Divider } from "@/components/atoms";

import * as styles from "./Footer.css";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <Image src="/images/sparcs-logo.svg" alt="SPARCS" width={85} height={25} />
      <ul className={styles.linkList}>
        <li>
          <Link href="#" className={styles.link}>
            {t("footer.termsOfService")}
          </Link>
        </li>
        <li aria-hidden>
          <Divider dir="y" />
        </li>
        <li>
          <Link href="#" className={styles.link}>
            {t("footer.privacyPolicy")}
          </Link>
        </li>
        <li aria-hidden>
          <Divider dir="y" />
        </li>
        <li>
          <Link href="#" className={styles.link}>
            {t("footer.contributors")}
          </Link>
        </li>
        <li aria-hidden>
          <Divider dir="y" />
        </li>
        <li>
          <button type="button" className={styles.link}>
            {t("footer.chatInquiry")}
          </button>
        </li>
      </ul>
      <p className={styles.caution}>{t("footer.caution")}</p>
      <span>
        {t("footer.contact")}: <a href="mailto:ara@sparcs.org">ara@sparcs.org</a>
      </span>
    </footer>
  );
};
