import React, { FC, ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./Header.module.scss";

import { useLocale } from "../../utils/hooks/useLocale";
import Button from "../Button";

const Header: FC = (): ReactElement => {
  const { toggleLocale, locale } = useLocale();

  return (
    <div className={styles.header}>
      <Container>
        <Row>
          <Col xs="auto"></Col>
          <Col xs="auto">
            <Button
              value={locale || "lang"}
              variant="white-border"
              onClick={toggleLocale}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
