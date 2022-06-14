import { MouseEvent } from "react";
import Button from "./Button";

export default Button;

// Interfaces

export interface IButtonProps {
  value: string;
  variant?: "default" | "white-border";
  type?: "submit" | "reset" | "button";
  onClick?: (event: MouseEvent) => void;
}
