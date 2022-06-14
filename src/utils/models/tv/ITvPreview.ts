import { IPreview } from "../media/IPreview";

export interface ITvPreview extends IPreview {
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country: string[];
}
