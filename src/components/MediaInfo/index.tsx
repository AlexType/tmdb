import { IGenre } from "../../utils/models/media/IGenre";
import MediaInfo from "./MediaInfo";

export default MediaInfo;

// Interfaces

export interface IMediaInfoProps {
  title: string;
  overview: string;
  genres: IGenre[];
  runtime: number[];
  release_date: string;
  vote_average: number;
  poster_path: string | null;
  backdrop_path: string | null;
}
