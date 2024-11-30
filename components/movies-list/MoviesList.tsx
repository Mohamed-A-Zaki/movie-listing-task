"use client";

import { moviesAtom } from "@/atoms/movies-atom";
import { searchKeywordAtom } from "@/atoms/search-keyword-atom";
import { selectedGenresAtom } from "@/atoms/selected-genre-atom";
import { getMovies } from "@/services/get-movies";
import { useEffect } from "react";
import EmptyMessage from "../indicators/EmptyMessage";
import ErrorMessage from "../indicators/ErrorMessage";
import Loader from "../indicators/Loader";
import MovieItem from "./MovieItem";

export default function MoviesList() {
  const { movies, isLoading, error } = moviesAtom.useValue();

  const search = searchKeywordAtom.useValue();
  const genre = selectedGenresAtom.useValue();

  useEffect(() => {
    getMovies({
      search,
      genre,
    });
  }, [genre, search]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (movies.length === 0) {
    return <EmptyMessage message="No movies found" />;
  }

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
          {movies?.map((item) => {
            return <MovieItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
}
