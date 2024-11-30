import { Movie, MovieAtomActions, MoviesAtom } from "@/types";
import { atom } from "@mongez/react-atom";

export const moviesAtom = atom<MoviesAtom, MovieAtomActions>({
  key: "movies-atom",

  default: {
    movies: [],
    isLoading: true,
    error: "",
  },

  actions: {
    startLoading() {
      moviesAtom.change("isLoading", true);
    },
    stopLoading() {
      moviesAtom.change("isLoading", false);
    },
    setError(error: string) {
      moviesAtom.change("error", error);
    },
    setMovies(movies: Movie[]) {
      moviesAtom.change("movies", movies);
    },
  },
});
