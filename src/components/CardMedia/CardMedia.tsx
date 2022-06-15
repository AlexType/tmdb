import classNames from "classnames";
import Link from "next/link";
import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import Moment from "react-moment";
import { ICardMedia } from ".";
import { EMediaType } from "../../utils/const";
import { useClickOutside } from "../../utils/hooks/useClickOutside";
import { useLocale } from "../../utils/hooks/useLocale";
import { useTypedSelector } from "../../utils/hooks/useTypedSelector";
import { IGenre } from "../../utils/models/media/IGenre";
import Rating from "../Rating";
import Sprite from "../Sprite";
import styles from "./CardMedia.module.scss";

const CardMedia: FC<ICardMedia> = ({
  id,
  src,
  date,
  title,
  rating,
  genreIds,
  mediaType,
  originalTile,
  type = "default",
}): ReactElement => {
  const [visibilityDetails, setVisibilityDetails] = useState<boolean>(false);
  const [genres, setGenres] = useState<IGenre[]>([]);
  const rootEl = useRef<HTMLDivElement>(null);
  const { locale } = useLocale();
  const { tvGenres, movieGenres } = useTypedSelector((s) => s.media);

  useClickOutside(rootEl, () => setVisibilityDetails(false));

  useEffect(() => {
    if (mediaType === EMediaType.movie) {
      setGenres(movieGenres.filter((g) => genreIds.includes(g.id)));
    } else if (mediaType === EMediaType.tv) {
      setGenres(tvGenres.filter((g) => genreIds.includes(g.id)));
    }
  }, [genreIds, tvGenres, movieGenres]);

  return (
    <div
      ref={rootEl}
      className={classNames({
        [styles.wrapper]: true,
        [styles[`wrapper_${type}`]]: type,
      })}
    >
      <div className={styles.top}>
        <Link href={`${mediaType}/${id}`}>
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
          <p className={styles.original}>{originalTile}</p>
          <ul>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
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
        <Link href={`${mediaType}/${id}`}>
          <a className={styles.title}>{title}</a>
        </Link>
        <span className={styles.date}>
          <Moment locale={locale} date={date} format="DD MMMM YYYY" />
        </span>
        <div className={styles.rating}>
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default CardMedia;
