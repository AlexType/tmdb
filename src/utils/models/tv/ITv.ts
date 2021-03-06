import { IGenre } from "../media/IGenre";
import { IProductionCompany } from "../media/IProductionCompany";
import { IProductionCountry } from "../media/IProductionCountry";
import { ISpokenLanguages } from "../media/ISpokenLanguages";
import { ICreatedBy } from "./ICreatedBy";
import { IEpisode } from "./IEpisode";
import { INetwork } from "./INetwork";
import { ISeason } from "./ISeason";

export interface ITv {
  id: number;
  type: string;
  name: string;
  adult: boolean;
  status: boolean;
  homepage: string;
  overview: string;
  genres: IGenre[];
  vote_count: number;
  popularity: number;
  seasons: ISeason[];
  languages: string[];
  networks: INetwork[];
  vote_average: number;
  last_air_date: string;
  original_name: string;
  tagline: string | null;
  in_production: boolean;
  first_air_date: string;
  origin_country: string[];
  created_by: ICreatedBy[];
  next_episode_to_air: null;
  original_language: string;
  number_of_seasons: number;
  episode_run_time: number[];
  poster_path: string | null;
  number_of_episodes: number;
  backdrop_path: string | null;
  last_episode_to_air: IEpisode;
  spoken_languages: ISpokenLanguages[];
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
}
