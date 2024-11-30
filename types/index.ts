export interface Movie {
  id: number;
  title: string;
  year: number;
  genre: string[];
  rating: number;
  director: string;
  actors: string[];
  plot: string;
  poster: string;
  trailer: string;
  runtime: number;
  awards: string;
  country: string;
  language: string;
  boxOffice: string;
  production: string;
  website: string;
}

export interface MoviesAtom {
  movies: Movie[];
  isLoading: boolean;
  error: string;
}

export interface MovieAtomActions {
  startLoading: () => void;
  stopLoading: () => void;
  setError: (error: string) => void;
  setMovies: (movies: Movie[]) => void;
}
