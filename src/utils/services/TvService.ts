import { AxiosResponse } from "axios";
import { i18n } from "next-i18next";

import { API_KEY } from "../const";
import $api from "../http";

import { ITv } from "../models/tv/ITv";

export class TvService {
  static tv(id: number): Promise<AxiosResponse<ITv>> {
    return $api.get(`/tv/${id}?api_key=${API_KEY}&language=${i18n?.language}`);
  }
}
