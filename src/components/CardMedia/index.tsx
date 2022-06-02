import CardMedia from "./CardMedia";

export default CardMedia;

// Interfaces

export interface ICardMedia {
  src: string;
  title: string;
  type?: "default" | "bordered";
}
