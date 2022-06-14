import axios from "axios";

import { API_URL } from "../const";

const $api = axios.create({
  withCredentials: false,
  baseURL: API_URL,
});

export default $api;
