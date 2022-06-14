import { combineReducers } from "redux";

import { mediaReducer } from "./MediaReducer";

export const rootReducer = combineReducers({
  media: mediaReducer,
});
