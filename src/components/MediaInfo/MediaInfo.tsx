import React, { FC, ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IMediaInfo } from ".";

import styles from "./MediaInfo.module.scss";

const MediaInfo: FC<IMediaInfo> = ({ svg }): ReactElement => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage:
          "url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8H64YmIYxpRJgSTuLUGRUSyi2kN.jpg)",
      }}
    >
      <div className={styles.mask}>
        <Container>
          <Row>
            <Col xs="auto">
              <div>
                <img
                  src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/f9pwFmYsbXUs3lJQszkhaZH0LuE.jpg"
                  alt=""
                />
              </div>
            </Col>
            <Col>
              <h1 className={styles.title}>
                Оби-Ван Кеноби <span>(2022)</span>
              </h1>
              <ul className={styles.info}>
                <li>НФ и Фэнтези, Боевик и Приключения, драма</li>
                <li>56m</li>
              </ul>
              <p>Обзор</p>
              <p className={styles.description}>
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
