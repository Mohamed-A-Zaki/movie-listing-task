"use client";

import { searchKeywordAtom } from "@/atoms/search-keyword-atom";
import { ChangeEvent } from "react";
import { Input } from "../ui/input";

export default function SearchBar() {
  const search = searchKeywordAtom.useValue();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    searchKeywordAtom.update(e.target.value);
  };

  return (
    <Input
      type="search"
      placeholder="search movies..."
      className="bg-white rounded-full p-4"
      value={search}
      onChange={onChange}
    />
  );
}
