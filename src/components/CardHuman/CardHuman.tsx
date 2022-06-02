import Link from "next/link";
import React, { FC, ReactElement } from "react";
import { ICardHuman } from ".";
import styles from "./CardHuman.module.scss";

const CardHuman: FC<ICardHuman> = ({ src, name, roles }): ReactElement => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <Link href="/">
          <a>
            <img src={src} alt={name} />
          </a>
        </Link>
      </div>
      <div className={styles.bottom}>
        <Link href="/">
          <a className={styles.name}>{name}</a>
        </Link>
        {roles?.length && (
          <p className={styles.roles}>
            {roles.map((role, index) => (
              <span key={index}>{role}</span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardHuman;
