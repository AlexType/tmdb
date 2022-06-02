import React, { FC, ReactElement } from "react";
import { ISprite } from ".";

const Sprite: FC<ISprite> = ({ svg }): ReactElement => {
  return (
    <svg>
      <use xlinkHref={`/images/svg/sprites.svg#${svg}`} />
    </svg>
  );
};

export default Sprite;
