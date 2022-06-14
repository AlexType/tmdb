import { IMediaReducer, MediaAction, MediaTypes } from "../types/MediaTypes";

const initialState: IMediaReducer = {
  movieGenres: [],
  tvGenres: [],
};

export const mediaReducer = (
  state: IMediaReducer = initialState,
  actions: MediaAction
): IMediaReducer => {
  switch (actions.type) {
    case MediaTypes.SET_MOVIE_GENRES:
      return {
        ...state,
        movieGenres: actions.payload.genres,
      };
    case MediaTypes.SET_TV_GENRES:
      return {
        ...state,
        tvGenres: actions.payload.genres,
      };

    default:
      return state;
  }
};
