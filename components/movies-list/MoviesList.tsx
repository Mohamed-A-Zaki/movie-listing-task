import { endpoint } from "@/api/endpoint";
import { type Movie } from "@/types";
import MovieItem from "./MovieItem";

export default async function MoviesList() {
  const { data } = await endpoint.get<Movie[]>("");

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-10">
          {data.map((item) => {
            return <MovieItem key={item.id} {...item} />;
          })}
        </div>
      </div>
    </>
  );
}
