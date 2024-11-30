"use client";

import { selectedGenresAtom } from "@/atoms/selected-genre-atom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const genres = [
  "Action",
  "Crime",
  "Drama",
  "Romance",
  "Adventure",
  "Sci-Fi",
  "Fantasy",
  "Thriller",
  "War",
  "History",
  "Animation",
];

export default function FilterBar() {
  const selectedGenre = selectedGenresAtom.useValue();

  const handleGenreChange = (value: string) => {
    selectedGenresAtom.update(value);
  };

  return (
    <Select value={selectedGenre} onValueChange={handleGenreChange}>
      <SelectTrigger className="lg:w-[180px] bg-white rounded-full">
        <SelectValue placeholder="Genre" />
      </SelectTrigger>
      <SelectContent>
        {genres.map((genre) => (
          <SelectItem key={genre} value={genre}>
            {genre}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
