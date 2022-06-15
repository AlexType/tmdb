import { AxiosResponse } from "axios";
import { i18n } from "next-i18next";

import { API_KEY } from "../const";
import $api from "../http";

import { IMovie } from "../models/movie/IMovie";

export class MovieService {
  static movie(id: number): Promise<AxiosResponse<IMovie>> {
    return $api.get(
      `/movie/${id}?api_key=${API_KEY}&language=${i18n?.language}`
    );
  }
}
