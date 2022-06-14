export interface ISeason {
  id: number;
  name: string;
  air_date: string;
  overview: string;
  season_number: number;
  episode_count: number;
  poster_path: string | null;
}
