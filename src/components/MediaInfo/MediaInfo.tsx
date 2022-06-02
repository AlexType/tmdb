import React, { FC, ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { IMediaInfo } from ".";
import { imgPathCreator } from "../../utils/const";
import Rating from "../Rating";
import styles from "./MediaInfo.module.scss";

const MediaInfo: FC<IMediaInfo> = ({
  poster_path,
  title,
  release,
}): ReactElement => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: `url(${imgPathCreator(
          poster_path,
          "w1920_and_h800_multi_faces"
        )})`,
      }}
    >
      <div className={styles.mask}>
        <Container>
          <Row className="align-items-center">
            <Col xs="auto">
              <div>
                <img
                  src={imgPathCreator(poster_path, "w600_and_h900_bestv2")}
                  alt=""
                />
              </div>
            </Col>
            <Col>
              <h1 className={styles.title}>
                {title} <span>({release})</span>
              </h1>
              <ul className={styles.info}>
                <li>
                  <p className="enumeration">
                    <span>НФ и Фэнтези</span>
                    <span>Боевик и Приключения</span>
                    <span>драма</span>
                  </p>
                </li>
                <li>56m</li>
              </ul>

              <Row className="align-items-center gx-2 my-3">
                <Col xs="auto">
                  <Rating
                    rating={9}
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
              <p className="mt-3">
                В центре внимания Оби-Вана Кеноби через 10 лет после окончания
                Войн клонов, где он потерпел величайшее поражение; падение и
                развращение его лучшего друга и ученика-джедая, Энакина
                Скайуокера, ставшего злым Повелителем ситов Дартом Вейдером.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MediaInfo;
