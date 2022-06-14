export interface IMediaPreview {
  id: number;
  title: string;
  genre_ids: number[];
  release_date: string;
  vote_average: number;
  original_title: string;
  poster_path: string | null;
}
