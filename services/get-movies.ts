import { endpoint } from "@/api/endpoint";
import { moviesAtom } from "@/atoms/movies-atom";
import { Movie } from "@/types";
import { AxiosError } from "axios";

export const getMovies = async (search: string) => {
  try {
    /***
     * Start loading
     */
    moviesAtom.startLoading();

    /***
     * Get movies
     */
    const { data } = await endpoint.get<Movie[]>(
      search ? `?search=${search}` : ""
    );

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
