import axios from "axios";

export const endpoint = axios.create({
  baseURL: "https://freetestapi.com/api/v1/movies",
});
