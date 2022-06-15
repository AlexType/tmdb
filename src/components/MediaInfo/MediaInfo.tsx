import Head from "next/head";
import React, { FC, Fragment, ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Moment from "react-moment";

import { IMediaInfoProps } from ".";
import { imgPath } from "../../utils/const";
import Rating from "../Rating";
import styles from "./MediaInfo.module.scss";

const MediaInfo: FC<IMediaInfoProps> = ({
  title,
  genres,
  runtime,
  overview,
  poster_path,
  vote_average,
  release_date,
  backdrop_path,
}): ReactElement => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>

      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `url(${imgPath(
            backdrop_path,
            "w1920_and_h800_multi_faces"
          )})`,
        }}
      >
        <div className={styles.mask}>
          <Container>
            <Row className="align-items-center gx-5">
              <Col xs={3}>
                <div className={styles.img}>
                  <img
                    alt={title}
                    src={imgPath(poster_path, "w600_and_h900_bestv2")}
                  />
                </div>
              </Col>
              <Col>
                <h1 className={styles.title}>
                  {title}{" "}
                  <span>
                    (<Moment date={release_date} format="YYYY" />)
                  </span>
                </h1>
                <ul className={styles.info}>
                  <li>{<Moment date={release_date} format="DD/MM/YYYY" />}</li>
                  <li>
                    <p className="enumeration">
                      {genres.map((genre) => (
                        <span key={genre.id}>{genre.name}</span>
                      ))}
                    </p>
                  </li>
                  <li>{runtime} M.</li>
                </ul>

                <Row className="align-items-center gx-2 my-3">
                  <Col xs="auto">
                    <Rating
                      rating={vote_average}
                      size={70}
                      strokeWidth={5}
                      fontSize="20px"
                    />
                  </Col>
                  <Col xs="auto">
                    <p className="fw-bold fs-14">
                      Пользовательский <br />
                      счёт
                    </p>
                  </Col>
                </Row>
                <p className={styles.subtitle}>Обзор</p>
                <p className="mt-3">{overview}</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Fragment>
  );
};

export default MediaInfo;
