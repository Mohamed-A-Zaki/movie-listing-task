import { Input } from "../ui/input";

export default function SearchBar() {
  return (
    <Input
      type="search"
      placeholder="search movies..."
      className="bg-white rounded-full p-4"
    />
  );
}
