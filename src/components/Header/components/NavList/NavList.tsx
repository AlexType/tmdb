import React, { FC, ReactElement } from "react";

import styles from "./NavList.module.scss";

import { useTranslation } from "next-i18next";
import Link from "next/link";

export const NavList: FC = (): ReactElement => {
  const { t } = useTranslation("common");

  const listLinks = [
    {
      href: "/movie",
      value: "MOVIE",
    },
    {
      href: "/tv",
      value: "TV_SHOWS",
    },
    {
      href: "/people",
      value: "PEOPLE",
    },
  ];

  return (
    <ul className={styles.list}>
      {listLinks.map(({ href, value }) => (
        <li key={href}>
          <Link href={href}>
            <a>{t(value)}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
