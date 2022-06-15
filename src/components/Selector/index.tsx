import Selector from "./Selector";

export default Selector;

// Interfaces

export interface ISelector {
  type?: "green" | "blue";
  selectedIndex?: number;
  options: ISelectorOption[];
  onChange?: (value: string) => void;
}

export interface ISelectorOption {
  title: string;
  value: string;
}

export interface IBgConfig {
  left: string;
  width: string;
}
