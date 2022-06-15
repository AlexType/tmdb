import { IGenre } from "../media/IGenre";
import { IProductionCompany } from "../media/IProductionCompany";
import { IProductionCountry } from "../media/IProductionCountry";
import { ISpokenLanguages } from "../media/ISpokenLanguages";

export interface IMovie {
  id: number;
  title: string;
  video: boolean;
  adult: boolean;
  budget: number;
  status: boolean;
  revenue: number;
  genres: IGenre[];
  homepage: string;
  overview: string;
  vote_count: number;
  popularity: number;
  vote_average: number;
  release_date: string;
  runtime: number | null;
  imdb_id: string | null;
  original_title: string;
  tagline: string | null;
  original_language: string;
  poster_path: string | null;
  backdrop_path: string | null;
  belongs_to_collection: any | null;
  spoken_languages: ISpokenLanguages[];
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
}
