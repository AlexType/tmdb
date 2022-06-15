import { IMediaInfoProps } from "../components/MediaInfo";
import { IMovie } from "./models/movie/IMovie";
import { ITv } from "./models/tv/ITv";

export const API_KEY = "183be1af6a759a090939c389bae30762";
export const PLACEHOLDER_URL = "http://placehold.jp";
export const IMG_URL = "https://image.tmdb.org";
export const API_URL = "https://api.themoviedb.org/3";

export enum ELanguages {
  ru = "ru",
  en = "en",
}

export enum EMediaType {
  tv = "tv",
  movie = "movie",
}

export enum ETimeWindow {
  day = "day",
  week = "week",
}

export const imgPath = (path: string | null, size = "origin"): string => {
  return path
    ? `${IMG_URL}/t/p/${size}${path}`
    : `${PLACEHOLDER_URL}/c7c7c7/c7c7c7/1x1.png`;
};

export const ratingColor = (rating: number): string => {
  if (rating > 70) return "#00d280";
  else if (rating > 50) return "#ced84d";
  else return "#5c5c5c";
};

export const toIMediaInfoProps = (media: IMovie | ITv): IMediaInfoProps => {
  const { title, runtime, release_date } = media as IMovie;
  const { name, episode_run_time, first_air_date } = media as ITv;
  const { genres, overview, poster_path, vote_average, backdrop_path } = media;

  return {
    genres,
    overview,
    poster_path,
    vote_average,
    backdrop_path,
    title: title || name,
    runtime: runtime ? [runtime] : episode_run_time,
    release_date: release_date || first_air_date,
  };
};
