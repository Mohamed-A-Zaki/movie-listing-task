import { endpoint } from "@/api/endpoint";
import { moviesAtom } from "@/atoms/movies-atom";
import { Movie } from "@/types";
import { AxiosError } from "axios";

export const getMovies = async (filterParams: {
  search?: string;
  genre?: string;
}) => {
  try {
    /***
     * Get movies
     */
    const { data } = await endpoint.get<Movie[]>("", {
      params: filterParams,
    });

    /***
     * Set movies
     */
    moviesAtom.setMovies(data);
  } catch (error) {
    /***
     * Set error
     */
    moviesAtom.setError((error as AxiosError).message);
  } finally {
    /***
     * Stop loading
     */
    moviesAtom.stopLoading();
  }
};
