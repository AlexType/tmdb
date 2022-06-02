import React, { FC, ReactElement, useEffect, useRef, useState } from "react";

import { IRating } from ".";
import { ratingColor } from "../../utils/const";
import styles from "./Rating.module.scss";

const Rating: FC<IRating> = ({
  rating,
  size = 40,
  strokeWidth = 3,
  fontSize = "11px",
}): ReactElement => {
  const [circumference, setCircumference] = useState<number>(0);

  const ref = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (ref.current) {
      setCircumference(Math.PI * 2 * ref.current?.r.baseVal.value);
    }
  }, [ref]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.strokeDasharray = `${circumference} ${circumference}`;
      ref.current.style.strokeDashoffset = circumference.toString();
      ref.current.style.opacity = "1";
      ref.current.style.stroke = ratingColor(rating * 10);
      setProgress(rating * 10);
    }
  }, [circumference]);

  const setProgress = (percent: number): void => {
    const offset = circumference - (percent / 100) * circumference;

    if (ref.current) ref.current.style.strokeDashoffset = offset.toString();
  };

  return (
    <div className={styles.progress}>
      <svg className={styles.svg} width={`${size}px`} height={`${size}px`}>
        <circle
          className={styles.circle}
          r={size / 2 - strokeWidth * 2}
          strokeWidth={strokeWidth}
          style={{ opacity: 1 }}
          stroke="#ffffff48"
          fill="transparent"
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className={styles.circle}
          r={size / 2 - strokeWidth * 2}
          strokeWidth={strokeWidth}
          fill="transparent"
          cx={size / 2}
          cy={size / 2}
          ref={ref}
        />
      </svg>
      <span className={styles.percent} style={{ fontSize }}>
        {rating * 10}
        <sup>
          <small>%</small>
        </sup>
      </span>
    </div>
  );
};

export default Rating;
