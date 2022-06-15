import React, { FC, ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";

import styles from "./Header.module.scss";

import Link from "next/link";
import { useLocale } from "../../utils/hooks/useLocale";
import Button from "../Button";
import NavList from "./components/NavList";

const Header: FC = (): ReactElement => {
  const { toggleLocale, locale } = useLocale();

  return (
    <div className={styles.header}>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs="auto">
            <Row className="align-items-center">
              <Col xs="auto">
                <Link href="/">
                  <a className="d-block">
                    <img className={styles.logo} src="/images/logo.svg" />
                  </a>
                </Link>
              </Col>
              <Col xs="auto">
                <NavList />
              </Col>
            </Row>
          </Col>
          <Col xs="auto">
            <Button variant="white-border" onClick={toggleLocale}>
              <span className={styles.locale}>{locale}</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
