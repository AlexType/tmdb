import React, { FC, ReactElement } from "react";
import { Container } from "react-bootstrap";

import styles from "./Header.module.scss";

const Header: FC = (): ReactElement => {
  return (
    <div className={styles.header}>
      <Container>
        <div>2Header</div>
      </Container>
    </div>
  );
};

export default Header;
