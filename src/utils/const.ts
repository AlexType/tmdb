export const API_KEY = "183be1af6a759a090939c389bae30762";
export const PLACEHOLDER_URL = "http://placehold.jp";
export const IMG_URL = "https://image.tmdb.org";

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

export const imgPathCreator = (
  path: string | null,
  size = "origin"
): string => {
  return path
    ? `${IMG_URL}/t/p/${size}/${path}`
    : `${PLACEHOLDER_URL}/c7c7c7/c7c7c7/1x1.png`;
};

export const ratingColor = (rating: number): string => {
  if (rating > 70) return "#00d280";
  else if (rating > 50) return "#ced84d";
  else return "#5c5c5c";
};
