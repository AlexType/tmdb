import classNames from "classnames";
import React, { FC, ReactElement, useEffect, useState } from "react";
import { IButtonProps } from ".";
import styles from "./Button.module.scss";

const Button: FC<IButtonProps> = ({
  onClick,
  children,
  type = "button",
  variant = "default",
}): ReactElement => {
  const [classes, setClasses] = useState({ [styles.button]: true });

  useEffect(() => {
    setClasses((prev) => ({ ...prev, [styles[`variant_${variant}`]]: true }));
  }, [variant]);

  return (
    <button type={type} className={classNames(classes)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
