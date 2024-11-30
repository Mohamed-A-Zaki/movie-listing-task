"use client";

import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { getMovies } from "@/services/get-movies";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    getMovies(search);
  }, [search]);

  return (
    <Input
      type="search"
      placeholder="search movies..."
      className="bg-white rounded-full p-4"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
