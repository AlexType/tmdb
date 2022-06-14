import { ICast } from "../media/ICast";
import { ICrew } from "../media/ICrew";
import { IGenre } from "../media/IGenre";
import { IMoviePreview } from "../movie/IMoviePreview";
import { ITvPreview } from "../tv/ITvPreview";

export interface IMediaCreditsResponse {
  id: number;
  crew: ICrew[];
  cast: ICast[];
}

export interface IGenreResponse {
  genres: IGenre[];
}

export interface IMovieTrendingResponse extends IPreviewResponse {
  results: IMoviePreview[];
}

export interface IPreviewResponse {
  page: number;
  total_pages: number;
  total_results: number;
}

export interface IMovieTrendingResponse extends IPreviewResponse {
  results: IMoviePreview[];
}

export interface ITvTrendingResponse extends IPreviewResponse {
  results: ITvPreview[];
}

export interface ITrendingMediaResponse {
  results: (IMoviePreview | ITvPreview)[];
}
