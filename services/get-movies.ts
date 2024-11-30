import { endpoint } from "@/api/endpoint";
import { moviesAtom } from "@/atoms/movies-atom";
import { Movie } from "@/types";
import { AxiosError } from "axios";

export const getMovies = async () => {
  try {
    /***
     * Start loading
     */
    moviesAtom.startLoading();

    /***
     * Get movies
     */
    const { data } = await endpoint.get<Movie[]>("");

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
