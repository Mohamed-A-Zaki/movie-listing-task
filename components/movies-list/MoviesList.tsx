"use client";

import { useEffect } from "react";
import MovieItem from "./MovieItem";
import { getMovies } from "@/services/get-movies";
import { moviesAtom } from "@/atoms/movies-atom";

export default function MoviesList() {
  const { movies } = moviesAtom.useValue();

  useEffect(() => {
    getMovies();
  }, []);

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
