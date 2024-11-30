import { endpoint } from "@/api/endpoint";
import { moviesAtom } from "@/atoms/movies-atom";
import { Movie } from "@/types";
import { AxiosError } from "axios";

export const getMovies = async () => {
  try {
    moviesAtom.startLoading();

    const { data } = await endpoint.get<Movie[]>("");

    console.log(data);

    moviesAtom.stopLoading();
  } catch (error) {
    moviesAtom.setError((error as AxiosError).message);
  }
};
