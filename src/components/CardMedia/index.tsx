import CardMedia from "./CardMedia";

export default CardMedia;

// Interfaces

export interface ICardMedia {
  id: number;
  src: string;
  date: string;
  title: string;
  rating: number;
  mediaType: string;
  genreIds: number[];
  originalTile: string;
  type?: "default" | "bordered";
}
