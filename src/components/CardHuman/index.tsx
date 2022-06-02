import CardHuman from "./CardHuman";

export default CardHuman;

// Interfaces

export interface ICardHuman {
  src: string;
  name: string;
  roles?: string[];
}
