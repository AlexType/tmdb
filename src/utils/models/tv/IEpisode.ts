export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  overview: string;
  episode_number: number;
  season_number: number;
  still_path: string | null;
  production_code: string;
  vote_count: number;
  vote_average: number;
}
