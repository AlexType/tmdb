import React, { FC, Fragment, ReactElement, useEffect } from "react";

import { useActions } from "../../utils/hooks/useActions";
import Header from "../Header";

export interface IApp {
  children: ReactElement;
}

const App: FC<IApp> = ({ children }): ReactElement => {
  const { setMovieGenres, setTvGenres } = useActions();

  useEffect((): void => {
    setTvGenres();
    setMovieGenres();
  }, []);

  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

export default App;
