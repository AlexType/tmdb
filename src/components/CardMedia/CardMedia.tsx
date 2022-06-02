import classNames from "classnames";
import Link from "next/link";
import React, { FC, ReactElement, useRef, useState } from "react";
import { ICardMedia } from ".";
import { useClickOutside } from "../../utils/hooks/useClickOutside";
import Rating from "../Rating";
import Sprite from "../Sprite";
import styles from "./CardMedia.module.scss";

const CardMedia: FC<ICardMedia> = ({
  src,
  title,
  type = "default",
}): ReactElement => {
  const [visibilityDetails, setVisibilityDetails] = useState<boolean>(false);

  const rootEl = useRef<HTMLDivElement>(null);

  useClickOutside(rootEl, () => setVisibilityDetails(false));

  return (
    <div
      ref={rootEl}
      className={classNames({
        [styles.wrapper]: true,
        [styles[`wrapper_${type}`]]: type,
      })}
    >
      <div className={styles.top}>
        <Link href="#">
          <a>
            <img src={src} alt={title} />
          </a>
        </Link>
        <div
          className={classNames({
            [styles.details]: true,
            [styles.show]: visibilityDetails,
          })}
        >
          <p className={styles.original}>The walking dead</p>
          <ul>
            <li>комедия,</li>
            <li>ужасы,</li>
            <li>драма,</li>
            <li>триллер</li>
          </ul>
        </div>
        <button
          onClick={(): void => setVisibilityDetails(!visibilityDetails)}
          className={classNames({
            btn: true,
            [styles.btn]: true,
            [styles.show]: visibilityDetails,
          })}
        >
          <Sprite svg="arrow-down" />
        </button>
      </div>
      <div className={styles.bottom}>
        <Link href="#">
          <a className={styles.title}>{title}</a>
        </Link>
        <span className={styles.date}>31 окт 2010</span>
        <div className={styles.rating}>
          <Rating rating={8} />
        </div>
      </div>
    </div>
  );
};

export default CardMedia;
