import type { AppProps } from "next/app";
import React, { FC, ReactElement } from "react";
import "../src/assets/styles/index.scss";

const MyApp: FC<AppProps> = ({ Component, pageProps }): ReactElement => {
  return <Component {...pageProps} />;
};

export default MyApp;
