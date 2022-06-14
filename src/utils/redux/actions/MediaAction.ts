import { Dispatch } from "react";

import { EMediaType } from "../../const";
import { MediaService } from "../../services/MediaService";
import { MediaAction, MediaTypes } from "../types/MediaTypes";

export const setMovieGenres = () => {
  return async (dispatch: Dispatch<MediaAction>): Promise<void> => {
    try {
      MediaService.genres(EMediaType.movie)
        .then((res) => res.data.genres)
        .then((genres) =>
          dispatch({
            type: MediaTypes.SET_MOVIE_GENRES,
            payload: { genres },
          })
        );
    } catch (e) {
      console.log(e);
    }
  };
};

export const setTvGenres = () => {
  return async (dispatch: Dispatch<MediaAction>): Promise<void> => {
    try {
      MediaService.genres(EMediaType.tv)
        .then((res) => res.data.genres)
        .then((genres) =>
          dispatch({
            type: MediaTypes.SET_TV_GENRES,
            payload: { genres },
          })
        );
    } catch (e) {
      console.log(e);
    }
  };
};
