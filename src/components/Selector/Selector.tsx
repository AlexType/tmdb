import classNames from "classnames";
import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import { IBgConfig, ISelector } from ".";
import styles from "./Selector.module.scss";

const Selector: FC<ISelector> = ({
  options,
  onChange,
  type = "blue",
  selectedIndex = 0,
}): ReactElement => {
  const [activeIndex, setActiveIndex] = useState<number>(selectedIndex);
  const [{ width, left }, setBgConfig] = useState<IBgConfig>({
    width: "0",
    left: "0",
  });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = ref;
    if (current) setBgConfig(bgConfig(current));
  }, []);

  const bgConfig = (current: HTMLDivElement): IBgConfig => {
    return {
      width: `${current.offsetWidth}px`,
      left: `${current.offsetLeft}px`,
    };
  };

  const onClick = (current: HTMLDivElement, index: number): void => {
    setActiveIndex(index);
    setBgConfig(bgConfig(current));
    if (onChange) onChange(options[index]);
  };

  return (
    <div
      className={classNames({
        [styles.selector]: true,
        [styles[`selector_${type}`]]: type,
      })}
    >
      <span className={styles.bg} style={{ width, left }}></span>
      {options.map(({ title }, index) => (
        <div
          key={index}
          ref={index === selectedIndex ? ref : null}
          onClick={(e): void => onClick(e.currentTarget, index)}
          className={classNames({
            [styles.item]: true,
            [styles.active]: activeIndex === index,
          })}
        >
          {title}
        </div>
      ))}
    </div>
  );
};

export default Selector;
