import { IGenre } from "../../models/media/IGenre";

export interface IMediaReducer {
  movieGenres: IGenre[];
  tvGenres: IGenre[];
}

export enum MediaTypes {
  SET_MOVIE_GENRES = "SET_MOVIE_GENRES",
  SET_TV_GENRES = "SET_TV_GENRES",
}

export interface SetMovieGenresAction {
  type: MediaTypes.SET_MOVIE_GENRES;
  payload: {
    genres: IGenre[];
  };
}

export interface SetTvGenresAction {
  type: MediaTypes.SET_TV_GENRES;
  payload: {
    genres: IGenre[];
  };
}

export type MediaAction = SetMovieGenresAction | SetTvGenresAction;
