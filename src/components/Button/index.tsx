import { MouseEvent, ReactElement } from "react";
import Button from "./Button";

export default Button;

// Interfaces

export interface IButtonProps {
  variant?: "default" | "white-border";
  type?: "submit" | "reset" | "button";
  onClick?: (event: MouseEvent) => void;
  children?: ReactElement | string | number;
}
