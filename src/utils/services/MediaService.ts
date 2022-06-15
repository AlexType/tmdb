import { AxiosResponse } from "axios";
import { i18n } from "next-i18next";

import { API_KEY, EMediaType, ETimeWindow } from "../const";
import $api from "../http";

import {
  IGenreResponse,
  IMovieTrendingResponse,
  ITrendingMediaResponse,
  ITvTrendingResponse,
} from "../models/http/response";

export class MediaService {
  static genres(mediaType: EMediaType): Promise<AxiosResponse<IGenreResponse>> {
    return $api.get(
      `/genre/${mediaType}/list?api_key=${API_KEY}&language=${i18n?.language}`
    );
  }

  static trending(
    page: number,
    mediaType: EMediaType,
    timeWindow: ETimeWindow | string = ETimeWindow.week
  ): Promise<AxiosResponse<IMovieTrendingResponse | ITvTrendingResponse>> {
    return $api.get(
      `/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}&page=${page}&language=${i18n?.language}`
    );
  }

  static trendingAll(
    page: number,
    timeWindow = ETimeWindow.week
  ): Promise<AxiosResponse<ITrendingMediaResponse>> {
    return $api.get(
      `/trending/all/${timeWindow}?api_key=${API_KEY}&page=${page}&language=${i18n?.language}`
    );
  }
}
