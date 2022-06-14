import "../src/assets/styles/index.scss";

import { appWithTranslation } from "next-i18next";
import React, { FC, ReactElement } from "react";
import { Provider } from "react-redux";

import App from "../src/components/App";
import { store } from "../src/utils/redux/store";

import type { AppProps } from "next/app";

const MyApp: FC<AppProps> = ({ Component, pageProps }): ReactElement => {
  return (
    <Provider store={store}>
      <App>
        <Component {...pageProps} />
      </App>
    </Provider>
  );
};

export default appWithTranslation(MyApp);
