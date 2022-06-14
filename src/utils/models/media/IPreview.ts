export interface IPreview {
  id: number;
  overview: string;
  media_type: string;
  popularity: number;
  vote_count: number;
  genre_ids: number[];
  vote_average: number;
  original_language: string;
  poster_path: string | null;
  backdrop_path: string | null;
}
