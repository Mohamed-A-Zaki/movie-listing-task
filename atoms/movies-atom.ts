import { Movie, MovieAtomActions, MoviesAtom } from "@/types";
import { atom } from "@mongez/react-atom";

export const moviesAtom = atom<MoviesAtom, MovieAtomActions>({
  key: "movies-atom",

  default: {
    /***
     * movies
     */
    movies: [],

    /***
     * isLoading
     */
    isLoading: true,

    /***
     * error
     */
    error: "",
  },

  actions: {
    /***
     * start loading action
     */
    startLoading() {
      moviesAtom.change("isLoading", true);
    },

    /***
     * stop loading action
     */
    stopLoading() {
      moviesAtom.change("isLoading", false);
    },

    /***
     * set error action
     */
    setError(error: string) {
      moviesAtom.change("error", error);
    },

    /***
     * set movies action
     */
    setMovies(movies: Movie[]) {
      moviesAtom.change("movies", movies);
    },
  },
});
