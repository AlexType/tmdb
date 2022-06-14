import { IPreview } from "../media/IPreview";

export interface IMoviePreview extends IPreview {
  title: string;
  video: boolean;
  adult: boolean;
  release_date: string;
  original_title: string;
}
